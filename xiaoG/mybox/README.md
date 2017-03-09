# SVG-demo
一个不了解的svg的MDN学习之路

## 概念
> 可缩放矢量图形(svg),可缩放矢量图形是基于可扩展标记语言（标准通用标记语言的子集），用于描述二维矢量图形的一种图形格式。它由万维网联盟制定，是一个开放标准。
> 2003年1月14日，成为W3C制定的标准。
* SVG的优势

| 任意缩放 | 文本独立 | 较小文件 | 超强显示效果 | 超级颜色控制 | 交互强大 |
| -------- |:--------:| --------:|-------------:|-------------:|-------:|--:|
## SVG的种类
自从2003年成为W3C推荐标准以来，最接近的“完整版”SVG版本是1.1版，它基于1.0版，并且增加了更多便于实现的模块化内容，SVG1.1的第二个版本在2011年成为推荐标准，完整的SVG1.2本来是下一个标准版本，但它又被SVG2.0取代。SVG2.0正在制定当中，它采用了类似CSS3的制定方法，通过若干松散耦合的组件形成一套标准。

除了完整的SVG推荐标准，W3C工作组还在2003年推出了SVG Tiny和SVG Basic。这两个配置文件主要瞄准移动设备。首先SVG Tiny主要是为性能低的小设备生成图元，而SVG Basic实现了完整版SVG里的很多功能，只是舍弃了难以实现的大型渲染（比如动画）。2008年，SVG Tiny1.2成为W3C推荐标准。

另外还有一些关于SVG打印规格的项目，增加对多页面和颜色管理的支持，但是这项工作已经终止。

##SVG学习之路
### 1.svg简单的例子

(:apple:[查看demo点这里](https://holidaying.github.io/SVG-demo/demo/index.html))

(:apple:[查看demo点这里](https://holidaying.github.io/SVG-demo/mybox/index.html))
![Paste_Image.png](http://upload-images.jianshu.io/upload_images/2604175-06fafc8513dd0fb3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
```
<svg version="1.1"
     baseProfile="full"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" fill="red" />

  <circle cx="150" cy="100" r="80" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
</svg>
```
* 1.建立一个demo.svg文件，内容即为以上svg代码
* 2.配置nginx服务，指向本地环境
* 3.启动nginx
* 4.打开浏览器输入localhost:(端口号)/demo.svg。既能看到显示结果
* 5.分析：svg必须引入xmlns命名空间，同时确认其版本号
* 6.svg里面的元素有先后顺序，层级依次升高。
### 2.svg的引入方式
* 1.直接嵌入html方式
* 2.用html节点引进来，但是必须指定type
```
<object data="image.svg" type="image/svg+xml"></object>

embed data="image.svg" type="image/svg+xml"></embed>

<iframe src="image.svg"></iframe>

<img src="image.svg" alt="">

background:url(image.svg);

 ```

> 代码如下
![Paste_Image.png](http://upload-images.jianshu.io/upload_images/2604175-88a848a5c3d096bc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

> 显示结果
![Paste_Image.png](http://upload-images.jianshu.io/upload_images/2604175-361ef8c4ac693b01.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

> 需要掌握的方面

![Paste_Image.png](http://upload-images.jianshu.io/upload_images/2604175-8ec17cee073784e7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
