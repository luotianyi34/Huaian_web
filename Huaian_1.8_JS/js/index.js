//页面弹窗提示
alert("Hello!");
//往html文档中输入内容
document.write("我是js编写的");
//innerHTML()写入到html元素中
var p=document.getElementById("p1")
p.innerHTML="<span>我是js输入的内容</span>"
console.log("打印一下!")

//标识符 区分大小写 下划线 $ 字母开头 不能是数字
/* alt+shift+a */
/* 声明 修饰符 
   var 
   let(在作用域内()有效,作用于外无效)
   const 定义常量 (不能被修改的值)
   语法 修饰符 变量名称=值(可以为空)
   定义变量的时候不需要数据类型 根据值自动转换为变量类型(动态转化)
   数据类型:字符串(string) 数字(number) 布尔类型(Boolean) 数组(Array) 对象(object)
            空值(null) Undefind(未定义)
*/