
function YUthreeD(container, threetranformobject) {
	//获取的样式的代码
	//function getStyle(element, attr) {
	//	if(element.currentStyle) {
	//		return element.currentStyle[attr];
	//	} else {
	//		return getComputedStyle(element, null)[attr];
	//	}
	//}
	function changestyletramform(div, time, rotatex, rotatey, rotatez, translatex, translatey, translatey) {
		//	let div = document.querySelector("#3Dtranformobject");
		var div = div;
		//内联 非行间样式
		//	console.log(getStyle(div, "transform")); //matrix(1, 0, 0, 1, 0, 0)
		//内嵌 行间样式
		//	console.log(div.style.transform); //打印出日志是空的
		div.style.transformStyle = "preserve-3d";
		//旋转
		div.style.transform = "rotateX(" + rotatex + "deg)";
		div.style.transform += "rotateY(" + rotatey + "deg)";
		div.style.transform += "rotateZ(" + rotatez + "deg)";
		//	div.style.webkitTransform = "rotateX(" + rotatex + "deg)";
		//	div.style.webkitTransform += "rotateY(" + rotatey + "deg)";
		//	div.style.webkitTransform += "rotateZ(" + rotatez + "deg)";
		//	div.style.MozTransform = "rotateX(" + rotatex + "deg)";
		//	div.style.MozTransform += "rotateY(" + rotatey + "deg)";
		//	div.style.MozTransform += "rotateZ(" + rotatez + "deg)";
		//	div.style.msTransform = "rotateX(" + rotatex + "deg)";
		//	div.style.msTransform += "rotateY(" + rotatey + "deg)";
		//	div.style.msTransform += "rotateZ(" + rotatez + "deg)";
		//	div.style.OTransform = "rotateX(" + rotatex + "deg)";
		//	div.style.OTransform += "rotateY(" + rotatey + "deg)";
		//	div.style.OTransform += "rotateZ(" + rotatez + "deg)";
		//平移
		div.style.transform += "translateX(" + translatex + "px)";
		div.style.transform += "translateY(" + translatey + "px)";
		div.style.transform += "translateZ(" + translatey + "px)";
		//	div.style.webkitTransform += "translateX(" + translatex + "px)";
		//	div.style.webkitTransform += "translateY(" + translatey + "px)";
		//	div.style.webkitTransform += "translateZ(" + translatey + "px)";
		//	div.style.MozTransform += "translateX(" + translatex + "px)";
		//	div.style.MozTransform += "translateY(" + translatey + "px)";
		//	div.style.MozTransform += "translateZ(" + translatey + "px)";
		//	div.style.msTransform += "translateX(" + translatex + "px)";
		//	div.style.msTransform += "translateY(" + translatey + "px)";
		//	div.style.msTransform += "translateZ(" + translatey + "px)";
		//	div.style.OTransform += "translateX(" + translatex + "px)";
		//	div.style.OTransform += "translateY(" + translatey + "px)";
		//	div.style.OTransform += "translateZ(" + translatey + "px)";

		//时间
		div.style.transform += time + "s";
		//	div.style.webkitTransform += time + "s";
		//	div.style.MozTransform += time + "s";
		//	div.style.msTransform += time + "s";
		//	div.style.OTransform += time + "s";
		//
		console.log(div.style.transform); //translate(500px)
	}

	//得到鼠标、div位置，计算偏移量
	var mousePosX = 0,
		mousePosY = 0,
		PosX = 0,
		PosY = 0;


	//  获取元素在窗口的中点坐标
	var divX = threetranformobjectcenterposition(threetranformobject).centerx,
		divY = threetranformobjectcenterposition(threetranformobject).centery;
		
	//  获取元素在窗口的中点坐标
	function threetranformobjectcenterposition(div) {
		var pos = div.getBoundingClientRect();
		//			box.innerHTML = "元素距离顶部top:" + pos.top +
		//				"元素距离窗口左侧left:" + pos.left +
		//				"元素距离窗口底部bottom:" + pos.bottom +
		//				"元素距离窗口底部右侧right:" + pos.right +
		//				"元素宽度width:" + pos.width +
		//				"元素高度height:" + pos.height
		var centerpos = {
			centerx: pos.left + pos.width / 2,
			centery: pos.top + pos.height / 2
		};
		return centerpos;
	}

	
	//鼠标事件
	function mouseCoords(ev) {
		if(ev.pageX || ev.pageY) {
			return {
				x: ev.pageX,
				y: ev.pageY
			};
		}
		return {
			x: ev.clientX + document.body.scrollLeft - document.body.clientLeft,
			y: ev.clientY + document.body.scrollTop - document.body.clientTop
		};
	}

	function mouseMove(ev) {

		ev = ev || window.event;
		var mousePos = mouseCoords(ev);
		//鼠标距离窗口顶部
		mousePosX = mousePos.x;
		//鼠标距离窗口左侧
		mousePosY = mousePos.y;
		//		alert("鼠标距离窗口顶部"+mousePosY+"鼠标距离窗口左侧"+mousePosX); 

		PosX = divX - mousePosX;
		PosY = divY - mousePosY;
		var totatey = -PosX / 40,
			totatex = PosY / 30;

//		alert("在div上:" + PosY + ",在div右:" + PosX);
		changestyletramform(threetranformobject, 0.1, totatex, totatey, 0, 0, 0, 0);

	}

	container.onmousemove = mouseMove;

	function mouseover(div, border, borderRadius, boxShadow) {
		div.style.border = border;
		div.style.borderRadius = borderRadius;
		div.style.boxShadow = boxShadow;
	}
	container.onmouseover = function() {
		mouseover(threetranformobject, "1px solid #333", "10px", "0px 0px 100px black");
	}

	function mouseout(div, border, borderRadius, boxShadow, transformStyle) {
		div.style.border = border;
		div.style.borderRadius = borderRadius;
		div.style.boxShadow = boxShadow;
		div.style.transformStyle = transformStyle;
	}

	container.onmouseout = function() {
		mouseover(threetranformobject, "0px", "0px", "none", "flat");
		changestyletramform(threetranformobject, 0, 0, 0, 0, 0, 0, 0);
	}
}