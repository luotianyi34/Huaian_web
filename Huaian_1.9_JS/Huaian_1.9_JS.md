JS 操作元素 达到与用户交互的效果
JS所操作的元素本质并不是源代码 而是dom文档
dom文档:document object model
    浏览器在加载源码的时候,复制源码,再渲染到页面上,重新渲染的页面上的所以元素内容,称为dom文档

查找获取元素 对象
    1.通过id来获取元素  document.getElementById("元素的id属性值");  获取到的是单个元素对象
    2.通过标签名称来获取    document.getElementsByTagName("元素的标签属性")   获取到的是个集合对象 集合中的每一个元素都是一个对象
    3.通过类名(class属性值)来获取   document.getElementsByClassName("元素的类属性") 获取到的是个集合对象 集合中的每一个元素都是一个对象

    1.innerText 获取元素标签中的文本 如果赋值innerText="" 那就是修改标签中的文本
    2.innerHTML 获取元素标签的所有内容(包含子标签) 如果赋值innerHTML="" 那就是修改标签中的所有内容
    3.style属性 修改样式 src修改图片路径
    4.控制元素的显示与隐藏