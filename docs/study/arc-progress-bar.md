# css实现半圆弧形进度条 #



```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
         .wrapper {
    width: 223px;
    height: 111.5px;
    overflow: hidden;
    position: relative;
    z-index: 2;
  }
  .merchant {
    position: relative;
    /* // top: -80px; */
    z-index: 10;
    width: 223px;
    height: 111.5px;
    border: 3px solid #f6e0b3;
    box-sizing: border-box;
    border-top-left-radius: 111.5px;
    border-top-right-radius: 111.5px;
    border-bottom: none;
    transform-origin: 50% 100%;
    transition: all 1s;
  }

  /* .merchant.circle {
    position: relative;
  }

  .merchant.circle::before,
  .merchant.circle::after {
    content: '';
    position: absolute;
    bottom: -4px;
    width: 6px;
    height: 6px;
    border-radius: 0 0 6px 6px;
    background-color: #f6e0b3;
  }

  .merchant.circle::before {
    left: -6px;
  }

  .merchant.circle::after {
    right: -6px;
  } */
    </style>
</head>
<body>
    <div class="wrapper">
        <div class="merchant"></div>
      </div>
    <script></script>
</body>
</html>

```