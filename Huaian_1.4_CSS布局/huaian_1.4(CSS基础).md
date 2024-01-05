1.盒子模型: 利用div盒子将元素包裹起来,整体设计 宽高 边框 背景 边距 阴影 动画 多媒体....
2.CSS浮动:  浮动的框 向左边或者右边移动,直到它的外边缘碰到它或者另一个浮动的框的边缘
    float:left/right:  
浮动过后,元素的层级关系发生改变,原来的位置将不存在，那么之后的元素将替代上来
3.display 设置元素以何种形式显示
    1.块级元素 block 可以将内联元素转换为块级元素
    2.内联元素 inline 可以将块级元素转换为内联元素
    3.内联块级元素 inline-block 在同一行的块级元素
    4.不显示 none
    5.以弹性容器(flex)显示

    6.以网格状显示 grid 
    7.以表格行或者表格列的形式显示
    ..........
4.flex 弹性布局:弹性盒子布局:FlexibleBox flexbox 是一种当页面需要适应不同屏幕大小,不同设备类型时,确保元素拥有恰当的行为布局方式
    自适应不同的分辨率 等比例缩放 
    弹性盒子是由 弹性容器(flex container)和弹性子元素(flex item,可以有一个或者多个)组成
                弹性子元素通常在弹性盒子内一行显示 默认情况下只有一行
    属性设置:
    父类:1.flex-direction: 设置主轴的方向
            row 默认方向 从左到右
            row-reverse 从右到左
            column 从上到下
            colunm-reverse 从下到上
        2.justify-content: 设置主轴上子元素的排列方式 左边 中间 右边
            flex-start    从头开始 如果主轴是X就从左往后 如果是Y就从上往下
            flex-end      从尾开始 如果主轴是X就从右往左 如果是Y就从下往上
            center        居中显示
            space-around  评分剩余空间
            space-between 先两边在平分中间   
        
        3.flex-wrap:设置子元素是否可以换行
            nowarp 不换行
            warp   换行
            warp-reverse 倒序换行

        4.flex-flow:相当于flex-direction和flex-warp一起设置

        5.align-items 设置侧轴上的子元素排列方式
            flex-start    从头开始 如果主轴是X就从左往后 如果是Y就从上往下
            flex-end      从尾开始 如果主轴是X就从右往左 如果是Y就从下往上
            center        居中显示
            stretch       拉伸 默认值
        
        6.align-content 设置侧轴上的子元素 多行排列方式
            flex-start    从头开始 如果主轴是X就从左往后 如果是Y就从上往下
            flex-end      从尾开始 如果主轴是X就从右往左 如果是Y就从下往上
            center        居中显示
            stretch       拉伸 默认值
            space-around  评分剩余空间
            space-between 先两边在平分中间 
        
        align-items 和 align-content区别
            align-items 适用于单行 只有上对齐 下对齐 居中 拉伸
            align-content 适用于多行(单行没有效果) 上对齐 下对齐 居中 拉伸 平分剩余空间 先两边贴边后平分中间

    子类属性设置：
        1.flex: num 定义子类分配剩余的空间  flex表示占多少份剩余空间
        2.align-self:设置子元素自己在侧轴上的排列顺序
        3.order: num 设置子元素的位置 排列在第几个位置(相当于下标)


