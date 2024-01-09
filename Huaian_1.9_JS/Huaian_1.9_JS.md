JS 操作元素 达到与用户交互的效果
JS所操作的元素本质并不是源代码 而是dom文档
dom文档:document object model
    浏览器在加载源码的时候,复制源码,再渲染到页面上,重新渲染的页面上的所以元素内容,称为dom文档

查找获取元素 对象
    1.通过id来获取元素  document.getElementById("元素的id属性值");  获取到的是单个元素对象
    2.通过标签名称来获取    document.getElementsByTagName("元素的标签属性")   获取到的是个集合对象 集合中的每一个元素都是一个对象
    3.通过类名(class属性值)来获取   document.getElementsByClassName("元素的类属性") 获取到的是个集合对象 集合中的每一个元素都是一个对象
    4.根据name属性值来获取 getElementsByName("name属性值")
    5.querySelector("选择器") 根据选择器来查找 若有多个元素 就只能找到第一个
    6.querySelectorAll("选择器") 根据选择器来查找所有目标元素
    7.获取body根元素 document.body


修改获取元素 对象
    1.innerText 获取元素标签中的文本 如果赋值innerText="" 那就是修改标签中的文本
    2.innerHTML 获取元素标签的所有内容(包含子标签) 如果赋值innerHTML="" 那就是修改标签中的所有内容
    3.style属性 修改样式 src修改图片路径
    4.控制元素的显示与隐藏

动态创建元素 对象
    1.创建文本  createTextNode("文本")
    2.创建元素节点  createElement("节点名称")
    3.将文本添加到元素节点中  元素节点.appendChild("文本")
    4.将元素节点添加到上层节点中    上层节点.appendChild("元素节点")
    5.给元素添加属性 setAttribute("属性名称","对应属性值")
        5.1.获取元素属性值 getAttribute("属性名称")
        5.2.添加class属性   元素对象.className="";
    <!-- 6.给元素添加class属性值 addClass() -->

删除元素属性
    1.删除元素属性  removeAttribute("属性名称")
    <!-- 2.empty() 清空元素的内容,元素本身存在 -->
    3.remove()  删除元素    元素本身不存在


元素的节点层次  节点(包含对当前元素所描述的文本)  元素节点(html元素对象) 
    parentNode
    childNodes 所有类型的子节点(包含对当前元素所描述的文本)
    children    子节点(html元素对象)
    第一个子节点    firstChild(包含对当前元素所描述的文本)
    第一个子元素节点    firstElementChild() 用这个多
    最后一个子节点  lastChild()
    最后子元素节点  lastElementChild()
    上一个节点      previousSibling()
    上一个元素节点  previousElementSibling()
    下一个节点      nextSibling()
    下一个元素节点  nextElementSibling()
