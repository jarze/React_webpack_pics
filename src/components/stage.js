require('normalize.css/normalize.css');
require('styles/stage.scss');
import ReactDOM from 'react-dom';
import React from 'react';
var imagesData = [{
	"fileName": "1.jpg",
	"title": "你好吗",
	"desc": "cmdslkvn vndk "
}, {
	"fileName": "2.jpg",
	"title": "才能打开数据",
	"desc": "cmdslkvn vndk "
}, {
	"fileName": "3.jpg",
	"title": "看 v 䀀 v 吧",
	"desc": "cmdslkvn vndk "
}, {
	"fileName": "4.jpg",
	"title": "HE啊 v 恩",
	"desc": "cmdslkvn vndk "
}, {
	"fileName": "5.jpg",
	"title": "HE啊 v 恩",
	"desc": "cmdslkvn vndk "
}, {
	"fileName": "6.jpg",
	"title": "你好吗",
	"desc": "cmdslkvn vndk "
}, {
	"fileName": "7.jpg",
	"title": "才能打开数据",
	"desc": "cmdslkvn vndk "
}, {
	"fileName": "8.jpg",
	"title": "看 v 䀀 v 吧",
	"desc": "cmdslkvn vndk "
}, {
	"fileName": "9.jpg",
	"title": "HE啊 v 恩",
	"desc": "cmdslkvn vndk "
}, {
	"fileName": "10.jpg",
	"title": "HE啊 v 恩",
	"desc": "cmdslkvn vndk "
}, {
	"fileName": "11.jpg",
	"title": "你好吗",
	"desc": "cmdslkvn vndk "
}, {
	"fileName": "12.jpg",
	"title": "才能打开数据",
	"desc": "cmdslkvn vndk "
}, {
	"fileName": "13.jpg",
	"title": "看 v 䀀 v 吧",
	"desc": "cmdslkvn vndk "
}, {
	"fileName": "14.jpg",
	"title": "HE啊 v 恩",
	"desc": "cmdslkvn vndk "
}, {
	"fileName": "15.jpg",
	"title": "HE啊 v 恩",
	"desc": "cmdslkvn vndk "
}, {
	"fileName": "16.jpg",
	"title": "你好吗",
	"desc": "cmdslkvn vndk "
}, {
	"fileName": "17.jpg",
	"title": "才能打开数据",
	"desc": "cmdslkvn vndk "
}, {
	"fileName": "18.jpg",
	"title": "看 v 䀀 v 吧",
	"desc": "cmdslkvn vndk "
}, {
	"fileName": "19.jpg",
	"title": "HE啊 v 恩",
	"desc": "cmdslkvn vndk "
}, {
	"fileName": "20.jpg",
	"title": "HE啊 v 恩",
	"desc": "cmdslkvn vndk "
}];


for (var i = 0; i < imagesData.length; i++) {
	var sin = imagesData[i];
	sin.imageUrl = require("../images/" + sin.fileName);
	imagesData[i] = sin;
}
var ImgFigure = React.createClass({
	handleClick: function(e) {
		if (this.props.arrange.isCenter) {
			this.props.inverse();
		} else {
			this.props.center();
		}

		e.stopPropagation();
		e.preventDefault();
	},
	render: function() {
		var styleObj = {};
		if (this.props.arrange) {
			styleObj = this.props.arrange.pos;

			if (this.props.arrange.rotate) {
				(['Moz', 'Webkit', 'Ms', '']).forEach(function(value) {
					styleObj[value + 'Transform'] = 'rotate(' + this.props.arrange.rotate + 'deg)';
				}.bind(this));
			}

			if (this.props.arrange.isCenter) {
				styleObj.zIndex = 11;
			}
		}
		var imgFigureClassName = 'img-figure';
		imgFigureClassName += this.props.arrange.isInverse ? ' is-inverse' : '';
		return (
			<figure className={imgFigureClassName} style={styleObj} onClick = {this.handleClick}>
				<img src={this.props.data.imageUrl}  alt=""/>
				<figcaption>
					<h2 className="img-title">{this.props.data.title}</h2>
					<div className="img-back" onClick = {this.handleClick}>
					<p>{this.props.data.desc}</p>
					</div>
				</figcaption>
			</figure>
		);
	}
});

var ControllerUnit = React.createClass({
	handleClick: function(e) {
		if (this.props.arrange.isCenter) {
			this.props.inverse();
		} else {
			this.props.center();
		}

		e.stopPropagation();
		e.preventDefault();
	},
	render: function() {
		var controllerUnitClassName = 'controller-unit';
		if (this.props.arrange.isCenter) {
			controllerUnitClassName += ' is-center';

			if (this.props.arrange.isInverse) {
				controllerUnitClassName += ' is-inverse';
			}
		}
		return (
			<span className={controllerUnitClassName} onClick={this.handleClick}></span>
		)
	}
});

// 获取区间内的一个随机值
function getRangeRandom(low, high) {
	return Math.ceil(Math.random() * (high - low) + low);
}
//获取0～30之间的任意正负值
function get30DegRandom() {
	return Math.ceil(Math.random() * 60 - 30);
}

var Content = React.createClass({
	Constant: {
		centerPos: {
			left: 0,
			top: 0
		},
		hPosRange: { //水平方向的取值范围
			leftSecX: [0, 0],
			rightSecX: [0, 0],
			y: [0, 0]
		},
		vPosRange: { //垂直方向的取值范围
			x: [0, 0],
			topY: [0, 0]
		}
	},

	//翻转图片

	inverse: function(index) {
		return function() {
			var imgsArrangeArr = this.state.imgsArrangeArr;
			imgsArrangeArr[index].isInverse = !imgsArrangeArr[index].isInverse;
			this.setState({
				imgsArrangeArr: imgsArrangeArr
			});
		}.bind(this);
	},


	//居中点击图片
	center: function(index) {
		return function() {
			this.rearrange(index);
		}.bind(this);
	},

	// 重新布局
	// 指定中心图片
	rearrange: function(centerIndex) {
		var imgsArrangeArr = this.state.imgsArrangeArr,
			Constant = this.Constant,
			centerPos = Constant.centerPos,
			hPosRange = Constant.hPosRange,
			vPosRange = Constant.vPosRange,

			hPosRangeLeftSecX = hPosRange.leftSecX,
			hPosRangeRightSecX = hPosRange.rightSecX,
			hPosRangeY = hPosRange.y,
			vPosRangeX = vPosRange.x,
			vPosRangeTopY = vPosRange.topY,

			imgsArrangeTopArr = [],
			topImgNum = Math.floor(Math.random() * 2), //取一个或者不取
			topImgSpliceIndex = 0,

			//中心图片居中
			imgsArrangeCenterArr = imgsArrangeArr.splice(centerIndex, 1);
		imgsArrangeCenterArr[0] = {
			pos: centerPos,
			rotate: 0,
			isCenter: true
		};


		//取出要布局上侧的图片的状态信息
		topImgSpliceIndex = Math.ceil(Math.random() * (imgsArrangeArr.length - topImgNum));
		imgsArrangeTopArr = imgsArrangeArr.splice(topImgSpliceIndex, topImgNum);
		imgsArrangeTopArr.forEach(function(value, index) {
			imgsArrangeTopArr[index] = {
				pos: {
					top: getRangeRandom(vPosRangeTopY[0], vPosRangeTopY[1]),
					left: getRangeRandom(vPosRangeX[0], vPosRangeX[1])
				},
				rotate: get30DegRandom(),
				isCenter: false

			}
		});
		//取出要布局左右两侧的图片的状态信息
		for (var i = 0, j = imgsArrangeArr.length, k = j / 2; i < j; i++) {
			imgsArrangeArr[i];
			var hPosRangeLORX = null;
			if (i < k) {
				hPosRangeLORX = hPosRangeLeftSecX;
			} else {
				hPosRangeLORX = hPosRangeRightSecX;
			}
			imgsArrangeArr[i] = {
				pos: {
					top: getRangeRandom(hPosRangeY[0], hPosRangeY[1]),
					left: getRangeRandom(hPosRangeLORX[0], hPosRangeLORX[1])
				},
				rotate: get30DegRandom(),
				isCenter: false
			}
		}
		if (imgsArrangeTopArr && imgsArrangeArr[0]) {
			imgsArrangeArr.splice(topImgSpliceIndex, 0, imgsArrangeTopArr[0]);
		}
		imgsArrangeArr.splice(centerIndex, 0, imgsArrangeCenterArr[0]);

		this.setState({
			imgsArrangeArr: imgsArrangeArr
		});
	},
	getInitialState: function() {
		return {
			imgsArrangeArr: [
				// {
				// 	pos: {
				// 		left: '0',
				// 		right: '0'
				// 	},
				// 	rotate: 0 //旋转角度
				// 	isInverse:false  //翻转
				// 	isCenter:false 
				// }
			]
		};

	},
	componentDidMount: function() {
		//舞台宽高
		var stageDOM = ReactDOM.findDOMNode(this.refs.stage),
			stageW = stageDOM.scrollWidth,
			stageH = stageDOM.scrollHeight,
			halfStageW = Math.ceil(stageW / 2),
			halfStageH = Math.ceil(stageH / 2);
		//图片宽高
		var imgFigureDOM = ReactDOM.findDOMNode(this.refs.imgFigure0),
			imgW = imgFigureDOM.scrollWidth,
			imgH = imgFigureDOM.scrollHeight,
			halfImgW = Math.ceil(imgW / 2),
			halfImgH = Math.ceil(imgH / 2);
		//中心点位置
		this.Constant.centerPos = {
				left: halfStageW - halfImgW,
				top: halfStageH - halfImgH
			}
			// 计算图片排布范围
		this.Constant.hPosRange.leftSecX = [-halfImgW, halfStageW - halfImgW * 3];
		this.Constant.hPosRange.rightSecX = [halfStageW + halfImgW, stageW - halfImgW];
		this.Constant.hPosRange.y = [-halfImgH, stageH - halfImgH];

		this.Constant.vPosRange.topY = [-halfImgH, halfStageH - halfImgH * 3];
		this.Constant.vPosRange.x = [halfStageW - imgW, halfStageW];
		this.rearrange(0);
	},
	render: function() {
		var controllerUnits = [],
			imgFigures = [];
		imagesData.forEach(function(value, index) {
			if (!this.state.imgsArrangeArr[index]) {
				this.state.imgsArrangeArr[index] = {
					pos: {
						left: '0',
						right: '0'
					},
					rotate: 0,
					isInverse: false,
					isCenter: false
				}
			}
			imgFigures.push(<ImgFigure key={index} data={value} ref={'imgFigure' + index} arrange = {this.state.imgsArrangeArr[index]} inverse = {this.inverse(index)} center={this.center(index)}/>);
			controllerUnits.push(<ControllerUnit key={index} arrange = {this.state.imgsArrangeArr[index]} inverse = {this.inverse(index)} center={this.center(index)} / >);
		}.bind(this));
		return (
			<section className="stage" ref="stage">
				<section className="img-sec">
					{imgFigures}
				</section>
				<nav className="controller-nav">
					{controllerUnits}
				</nav>
			</section>
		);
	}
});


class AppStage extends React.Component {
	render() {
		return <Content/>;
	}
}
AppStage.defaultProps = {};
export default AppStage;