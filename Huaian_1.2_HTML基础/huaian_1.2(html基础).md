HTML 超文本标记语言hyperText Markup language是用来描述网页的一种语言
web页面
使用一套标准的标记标签来描述网页包含了HTML标签和其他文本标签
web页面文件
以.htm1/ .htm结尾的文件，可以直接用浏览器打开
写法:
1.双标签元素
<标签的名称>内容<标签的名称>
2.单标签---->具有一定的特殊的功能<标签的名称/>
<html>
  <head>
  </head>
  <body>
  </body>
</html>

1.标题标签
h1-h6 网页中的文本标题
字体越来越小 加粗 自动换行

2.段落标签
p标签 文本呈段落形式显示 并且会自动换行

3.水平线标签
hr 单标签

4.字体标签（已经弃用，可以利用css技术来实现）
font 可以设置文本的字体 大小 颜色

5.图片标签
img scr="图片的路径" 路径可以是本地的 也可以是网页中的
可以设置图片的宽度，高度

6.换行标签
br 单标签

7.链接标签
a 1.超链接，href属性="需要跳转的路径" 可以是本地的也可以是网上的
  2.锚点功能 跳转到指定的标签位置
  
8.列表标签(组合标签:由多个列表组成的) 有序列表 无序列表 标题列表
  1.无序列表
  <ul><li></li></ul>
  2.有序列表
  <ol><li></li></ol>
  3.标题列表
  <dl>
    <dt></dt>
    <dd></dd>
  </dl>

  9.表格标签
  <table></table>
  每个表格都有行tr 列td
  每一行中有几个列
  th 来定义表格的头 字体会加粗 默认居中
  合并行 rowspan=?
  合并列 colspan=?
  
  10.表单标签
  <form></form>
    1.input标签 根据type属性值的不同 所以表示的输入框也不一样
      1.text 文本输入框
      2.password 密码输入框
      3.checkbox 复选输入框
      4.radio    单选输入框 标签的name属性值要一致
      5.image    图片显示 类似于img标签 多了点击效果
      6.file     文件上传
      7.hideen   隐藏域
      8.button   普通按钮
      9.reset    重置按钮,重置当前表单中填写的内容 必须是在form标签中
      10.submit  发送请求到form表单的action的地址上 提交当前表单

  11.button 按钮标签
    type属性不一样 所表示的按钮的功能也不同
    1.button 一个普通的按钮
    2.reset  重置按钮
    3.submit 提交当前表单 必须是在form标签中

  12.select 下拉选择框
    <select name="city" id="">
        <option value="bj">北京</option>
        <option value="sh">上海</option>
        <option value="ha">淮安</option>
      </select>

  13.textarea 多行文本域 输入多行文本内容
    cols:列
    row:行

  标签中的属性
    1.name  标签的名字
    2.id    标签的唯一标识
    3.value 输入框的值
    4.placeholder 输入框的提示文本
    5.readeronly  输入框只读 鼠标可以选中不能修改
    6.disabled  无效的 鼠标不能选中也不能修改
    7.size  输入框输入的字段尺寸大小

HTML中各种标签可以被分为两类 
  1.块级元素:独立成行,拥有边框 大小 边距 背景....
    例如:h1-h6\p\ul\table.....

  2.内联元素:不会单独成行, 不能设置边框 大小 边距 背景....
    例如:td\a\img....

  一般情况在与CSS配合使用时,可以发生改变

  无语义标签:标签的本身没有任何含义,它只是一个容器,用于存放别的其他的标签

  1.div:块级元素 包装其他标签 往往用于与css配合,实现页面的布局

  2.span:内联元素 包装文本 将文本封装成一个整体

