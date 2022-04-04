# vue学习 #

```vue
<!-- index.vue -->
<template>
  <div id="app">
    <cxInput :value.sync="inputValue"></cxInput>
  </div>
</template>

<script>
import cxInput from './components/cx-input.vue'

export default {
  name: 'App',
  components: {
    cxInput
  },
  data() {
    return {
      inputValue: '我是猪'
    }
  },
  watch: {
    inputValue() {
      console.log('inputValue改变了');
    }
  }
}
</script>

```


```vue
<template>
  <MyInput v-model="middleValue" />
</template>

<script>
import MyInput from "./input.vue";
export default {
  props: ["value"],
  components: {
    MyInput,
  },
  computed: {
    middleValue: {
      get() {
        return this.value;
      },
      set(val) {
        // 这里的val是底层input组件用户输入的，赋值给了middleValue，因为用户输入的值与middleValue双向绑定了
        this.$emit("update:value", val);
      },
    },
  },
};
</script>

```


```vue
<template>
  <input v-model="innerValue" @input="changeInput">
</template>

<script>
export default {
    name: 'MyInput',
    props: ['value'],
    data() {
        return {
            innerValue: this.value // 初始化内部的input底层组件双向绑定用户输入的值
        }
    },
    methods: {
        changeInput(e) {
            this.$emit('input', e.target.value) // input原生事件 会改变外层v-model的值 即cx-input的bindValue
        }
    }
};
</script>

```

> 学完后来学习实现一个简易的input双向数据绑定吧

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- 简易实现v-model双向数据绑定 -->
    <input class="my-input" type="text" value="不知道写什么" oninput=changeDivContent(this)> 
    <!-- oninput事件中传入this 可以在函数中拿到该dom元素 -->
    <div></div>
    <script>
        const input = document.querySelector('input')
        const div = document.querySelector('div')
        function changeDivContent(target) {
            target.setAttribute('value', target.value) // 动态修改input元素的value属性值
            div.innerText = target.value // 这里的target可以拿到目标对象 即input元素 当用户修改input的值时动态修改div中的值
        }

        function init () {
            div.innerText = input.value
        }
        init() // 组件初始化的时候 双向绑定div中的值与input提供的默认值
    </script>
</body>
</html>

```