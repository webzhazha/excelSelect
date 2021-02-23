# newproject

## Project setup
```
npm install
```

### 开发技术栈
```
vue jquery
```

### 项目说明
```
一个实现类excel鼠标选中的表格. 鼠标按住多选, 按住ctrl键可以继续多选, 点击鼠标右键出现是否全不勾选和全部不勾选
```

### 遇到问题
1.  当选过一次多选后, 再次拖拽选择, 会出现不能移动的标识. 
    是因为浏览器默认选中了内容, 再次拖拽就是移动了, 但是文本是不能移动的, 所以无法继续多选
    解决方案: 在鼠标抬起事件mouseup中使用window.getSelection().removeAllRanges(). 清空默认所选的文本内容
2.  点击鼠标右键不出现浏览器默认的弹窗, 出现手写弹窗
    解决方案: 页面初始化时绑定事件 document.oncontextmenu=new Function("return false");

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
