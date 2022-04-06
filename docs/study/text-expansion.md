# css实现多行文本展开收起 #



```html
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
    <meta charset="utf-8" />
    <style>
         .ioui-text-expansion {
      display: flex;
    }

    .ioui-text-expansion__text {
        position: relative;
        width: 425px;
        font-size: 28px;
        color: #002753;
        overflow: hidden;
        line-height: 1.5;
        max-height: 6em;
        text-align: justify;
    }

    .ioui-text-expansion__text::before {
        content: '';
          float: right;
          height: 100%;
          margin-bottom: -40px;
    }
    
    .ioui-text-expansion__text::after {
        content: '';
          width: 100vw;
          height: 100vh;
          position: absolute;
          box-shadow: inset calc(120px - 100vw) calc(1.45em - 100vh) 0 0 #f7f8fa;
          margin-left: -120px;
    }

    .ioui-text-expansion .ioui-text-expansion__button {
        position: relative;
        font-size: 24px;
        font-weight: bold;
        float: right;
        clear: both;
        line-height: 42px;
    }

    .ioui-text-expansion .ioui-text-expansion__button::before {
        content: '...';
          margin-right: 8px;
    }

    .ioui-text-expansion .ioui-text-expansion__button::after {
        content: '';
          display: inline-block;
          margin-bottom: 2px;
          margin-left: 4px;
          transition: transform 0.3s;
          border-top: 10px solid #002753;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
    }
  
    .ioui-text-expansion__text--expand {
      max-height: none;
    }
    .ioui-text-expansion__text--expand::after {
        visibility: hidden;
    }

    .ioui-text-expansion__text--expand .ioui-text-expansion__button::before {
        visibility: hidden;
      }
    .ioui-text-expansion__text--expand .ioui-text-expansion__button::after {
        transform: rotate(180deg);
      }
    
    </style>
</head>
<body>
    <div class="ioui-text-expansion">
        <div class="ioui-text-expansion__text">
          <div class="ioui-text-expansion__button">展开</div>
          我我晚啊啊手动萨达阿斯顿阿斯顿阿斯顿爱上大叔的撒打算的啊的爱上的撒的啊阿斯顿阿斯顿阿斯顿湿答答的爱上大的啊的啊撒撒爱上撒啊啊是爱上爱上撒爱上爱上
        </div>
      </div>
    <script>
        const container = document.querySelector('.ioui-text-expansion__text')
        const button = document.querySelector('.ioui-text-expansion__button')
        let isExpand = false
        button.addEventListener('click', () => {
            isExpand = !isExpand
            if (isExpand) {
                container.setAttribute('class', 'ioui-text-expansion__text ioui-text-expansion__text--expand')
                button.innerText = '收起'
            } else {
                container.setAttribute('class', 'ioui-text-expansion__text')
                button.innerText = '展开'
            }
        })
        
    </script>
</body>
</html>

```