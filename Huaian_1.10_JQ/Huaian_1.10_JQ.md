jquery 第三方库 js封装 极大的简化了js编程 更方便的功能使用
js能够完成的功能jquery全部都能完成
HTML元素选取 元素操作 
CSS操作 事件处理 函数调用 特效和动画 
DOM元素的遍历 修改
AJAX....

jquery:
    1.基本语法:$("选择器").action();
        $:定义jquery
        ("选择器"):等同于CSS选择器
        action():具体要执行的方法，执行的具体操作
    2.就绪函数:当DOM已经加载完成时,这个时候才表明页面中的DOM可以被jquery操作
        表示页面加载完了 可以执行这里面的代码块了
        2.1:$(document).ready(function(){

        }); 标准写法
        2.2:$().ready(function(){

        }); 简写
        2.3:$(function(){

        }); 精简写法(常用)
        注意:就绪函数与onload不应该一起用 都是页面加载完执行
    3.$():工厂函数:指的是该js语法被jQuery加工,所采用jQuery中的编写方法
    4.jquery的代码块必须要写在就绪函数中
    5.jquery获取元素:获取到的是目标元素对象
        工厂函数里面添加目标元素的选择器  $("选择器")
    6.事件:$("元素目标选择器").事件方法(function(){

    });
        常用的事件方法:
            1.click()   处理点击事件
            2.dbclick() 双击
            3.focus()   获取焦点
            4.mouseover()   鼠标移动到上面
            5.......

元素操作
    1.获取元素:获取到的是目标元素对象 获取可以是多个
        工厂函数里面添加目标元素的选择器  $("选择器")
    2.操作方法:只能够操作一个目标
        2.1:text("需要修改的值,不需要就不写")  设置或者返回元素的文本内容
        2.2:html()  设置或者返回元素中的所有内容(包含子标签)
        2.3:val()   设置或者返回表单元素的value属性值
        2.4:attr("属性名称")  获取属性值    如果有多个只能获取第一个
            当元素的属性值为boolean类型时,使用prop()方法
        2.5:removeAttr("属性名称") 删除属性
        2.6:addClass()  添加class属性值可以达到修改样式的目的
        2.7:removeClass()   删除class属性
        2.8:hasClass()  判断元素对象是否拥有class属性
        2.9:toggleClass()   判断是否有class属性 有就删除 没有就添加
        2.10:css()  设置或返回样式属性

节点的操作
    1.append()  在结尾插入节点
    2.prepend() 在开头插入节点
    3.empty()   清空节点内容    标签保留
    4.remove()  删除    标签不存在
    5.before()  作为目标节点的上一个兄弟节点
    6.after()   作为目标节点的下一个兄弟节点


    1.children()    获取子节点
    2.find("据选择器")  根据选择器查找
    3.siblings()    获取所有的兄弟节点
    4.siblings().eq(1)  获取几个兄弟节点
    5.parent()  获取父节点

遍历
    each();
    语法1:$("选择器").each(function(index,element){
        具体执行的操作
    })
    index:选择器的下标位置
    element:当前遍历的元素对象  也可以用this来表示

    语法2:$.each(n,function(i,e){

    })
    n:需要遍历的数据对象
    i:下标
    e:当前遍历的元素

动画
    1.hide()
    2.show()
    3.slideDown()
    4.slideUp()
    5.fateIn()
    6.fateOut()
    7.fateToggle()