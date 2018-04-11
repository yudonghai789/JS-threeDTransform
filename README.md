# threeDTransform
# threeDTransform
使用需求：
1、由于的鼠标的定位，以及的旋转元素的定位是根据浏览器窗口的，所以使用与充满窗口的banner，并且旋转运动的DIV 的位置是居中的。
  当时的需求是的这样，后期会修改
2、需要的两层的嵌套结构，并设置ID



使用步骤：
1、创建格式如下的两个div
<div class="containerstyle" id="container">
			<div class="tranformObjectstyle" id="tranformObject">
        ...自己想要填充的样式
			</div>
</div>


2、设置必须的样式
.containerstyle {
				height: 700px;
				/*自使用背景图片*/
				background: url(img/banner.gif) no-repeat 0px 0px;
				background-position: center;
				background-size: cover;
				-webkit-background-size: cover;
				-moz-background-size: cover;
				-o-background-size: cover;
				-ms-background-size: cover;
				perspective: 1200px;
				/* 透视视图 */
			}	
.tranformObjectstyle {
				width: 40%;
				height: 40%;
				position: absolute;
				left: 30%;
				top: 30%;
        //控制在父元素中居中
}


3、引起  tranformYU.js 文件并调用函数
<script src="js/tranformYU.js"></script>

		<!--使用tranformYU.js-->
		<script type="text/javascript">
			var container = document.getElementById("container");
			var tranformObject = document.getElementById("tranformObject");
			YUthreeD(container, tranformObject);
		</script>
