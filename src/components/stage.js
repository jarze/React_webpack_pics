require('normalize.css/normalize.css');
require('styles/stage.scss');
import ReactDOM from 'react-dom';
import React from 'react';


var imagesData = [{
	'fileName': '1.jpg',
	'title': '🐦',
	'desc': '鸟以为把鱼堤到空中是一种慈善的的举动'
}, {
	'fileName': '2.jpg',
	'title': '🔥热爱',
	'desc': '我们热爱这个世界时，才真正活在这个世界上'
}, {
	'fileName': '3.jpg',
	'title': '❤️',
	'desc': '完全为了对“不全”的爱，把自己装饰得美丽'
}, {
	'fileName': '4.jpg',
	'title': '🌲',
	'desc': '小草在大地寻找群聚，树木向天空寻找孤寂'
}, {
	'fileName': '5.jpg',
	'title': '⚽️',
	'desc': '世界对着它的爱人，把它浩翰的面具揭下了'
}, {
	'fileName': '6.jpg',
	'title': '☠️',
	'desc': '世界以痛苦亲吻我的灵魂，要求我报之以歌唱'
}, {
	'fileName': '7.jpg',
	'title': '～～～～～',
	'desc': '神对人说：“我医治你所以伤害你，爱你所以惩罚你'
}, {
	'fileName': '8.jpg',
	'title': '·····',
	'desc': '小草呀，你的足步虽小，但是你拥有你足下的土地'
}, {
	'fileName': '9.jpg',
	'title': 'APPLE',
	'desc': '道路虽然拥挤，却是寂寞的，因为它没有品尝到爱'
}, {
	'fileName': '10.jpg',
	'title': '🐸',
	'desc': '人是一个初生的孩子，他的力量，就是生长的力量'
}, {
	'fileName': '11.jpg',
	'title': '🌹',
	'desc': '夏天的飞鸟，来到我的窗前，歌唱，又飞走了'
}, {
	'fileName': '12.jpg',
	'title': 'Hello World!',
	'desc': '夜秘密的把花开放了，却让那白日去领受谢词'
}, {
	'fileName': '13.jpg',
	'title': '㊩',
	'desc': '羽毛满足于懒洋洋的躺在尘灰里，忘掉了天空'
}, {
	'fileName': '14.jpg',
	'title': '㊝',
	'desc': '我拥有天上的繁星，但是我屋里的小灯却没有亮'
}, {
	'fileName': '15.jpg',
	'title': '🈚︎',
	'desc': '如果你因失去了太阳而流泪，那么你也将失去群星了'
}, {
	'fileName': '16.jpg',
	'title': '你好吗',
	'desc': '我信赖您的爱——让这句话做为我的最后一句吧'
}, {
	'fileName': '17.jpg',
	'title': '☣︎',
	'desc': '即使爱只给你带来了哀愁，也信任它，不要把你的心关起'
}, {
	'fileName': '18.jpg',
	'title': '〄',
	'desc': '如果错过了太阳时你流了泪，那末你也要错过群星了'
}, {
	'fileName': '19.jpg',
	'title': '㊰',
	'desc': '不要因为峭壁是高的，便让你的爱情坐在峭壁上'
}, {
	'fileName': '20.jpg',
	'title': '🈷️',
	'desc': '我像是夜间的道路，在寂静里谛听着记忆的足音'
}];

// 1、鸟以为把鱼堤到空中是一种慈善的的举动。
// 2、我们热爱这个世界时，才真正活在这个世界上。
// 3、完全为了对“不全”的爱，把自己装饰得美丽。
// 4、小草在大地寻找群聚，树木向天空寻找孤寂。
// 5、世界对着它的爱人，把它浩翰的面具揭下了。
// 6、世界以痛苦亲吻我的灵魂，要求我报之以歌唱。
// 7、神对人说：“我医治你所以伤害你，爱你所以惩罚你。”
// 8、小草呀，你的足步虽小，但是你拥有你足下的土地。
// 9、道路虽然拥挤，却是寂寞的，因为它没有品尝到爱。
// 10、人是一个初生的孩子，他的力量，就是生长的力量。
// 11、夏天的飞鸟，来到我的窗前，歌唱，又飞走了。
// 12、夜秘密的把花开放了，却让那白日去领受谢词。
// 13、羽毛满足于懒洋洋的躺在尘灰里，忘掉了天空。
// 14、我拥有天上的繁星，但是我屋里的小灯却没有亮。
// 15、如果你因失去了太阳而流泪，那么你也将失去群星了。
// 16、我信赖您的爱——让这句话做为我的最后一句吧。
// 17、即使爱只给你带来了哀愁，也信任它，不要把你的心关起。
// 18、如果错过了太阳时你流了泪，那末你也要错过群星了。
// 19、不要因为峭壁是高的，便让你的爱情坐在峭壁上。
// 20、我像是夜间的道路，在寂静里谛听着记忆的足音。
// 21、如果你因错过太阳而哭泣，那么你也会错过群星的。
// 22、我的心是旷野的鸟，在你的眼睛里找到了天空。
// 23、当我想到我的时间的终点，时间的隔栏便破裂了。
// 24、人走进喧嚣的人群里，是要淹没自己沉默的叫嚷。
// 25、我的存在，对我是一个永久的神奇，这就是生活。
// 26、那些把灯背在背上的人，把他们的影子投到了自己前面。
// 27、啊，美呀，在爱中找你自己吧。不要到你镜子的谄谀中去找呀。
// 28、当我们是大为谦卑的时候，便是我们最近于伟大的时候。
// 29、我将影子投射在前方的路上，因为我有一盏还没有燃亮的灯。
// 30、雾，象爱情一样，在山峰的心上游戏，生出种种美丽的变幻。
// 31、当太阳横过西方的海面时，对着东方留下他的最后的敬礼。
// 32、我们的生命不是那个旧的负担，我们的道路不是那条冗长的旅程。
// 33、世界上的一队小小的漂泊者呀，请留下你们的足印在我的文字里。
// 34、静静地听，我的心呀，听那世界的低语，这是它对你求爱的表示呀。
// 35、神希望我们酬答他，在于他送给我们的花朵，而不在于太阳和土地。
// 36、时间是变化的财富，然而时钟拙劣的模仿它，只有变化，而没有财富。
// 37、您的阳光对着我的心头的冬天微笑，从来不怀疑它的春天的花朵。
// 38、如果你把所有的错误拒之门外，那么真理也会被关在外面。
// 39、不要因为峭壁是高的，而让你的爱情坐在峭壁上。
// 40、如果错过了太阳时你流了泪，那么你也要错过群星了。
// 41、梦是一个喋喋不休的妻子，睡眠是一个默默忍受的丈夫。
// 42、无垠的沙漠热烈追求一叶绿草的爱，她摇摇头笑着飞开了。
// 43、忧思在我的心里平静下去，正如暮色降临在寂静的山林中。
// 44、般若波罗蜜，一声一声？生如夏花，死如秋叶？还在乎拥有什么
// 45、谢谢神，我不是一个权力的轮子，而是被压在这轮子下的活人之一。
// 46、但是，人类却兼有海里的沉默，地上的喧闹与空中的音乐。
// 47、秋天的黄叶，它们没有什么可唱，只叹息一声，飞落在那里。
// 48、心是尖锐的，不是宽博的，它执着在每一点上，却并不活动。
// 49、你的偶像委散在尘土中了，这可证明神的尘土比你的偶像还伟大。
// 50、这个不可见的黑暗之火焰，以繁星为其火花的，到底是什么呢？
// 51、信念是鸟，它在黎明仍然黑暗之际，感觉到了光明，唱出了歌。
// 52、神对于那些大帝国会感到厌恶，却决不会厌恶那些小小的花朵。
// 53、时间是变化的财富。时钟模仿它，却只有变化而无财富。


for (var i = 0; i < imagesData.length; i++) {
	var sin = imagesData[i];
	sin.imageUrl = require('../images/' + sin.fileName);
	imagesData[i] = sin;
}
var ImgFigure = React.createClass({
	handleClick: function (e) {
		if (this.props.arrange.isCenter) {
			this.props.inverse();
		} else {
			this.props.center();
		}

		e.stopPropagation();
		e.preventDefault();
	},
	render: function () {
		var styleObj = {};
		if (this.props.arrange) {
			styleObj = this.props.arrange.pos;

			if (this.props.arrange.rotate) {
				(['Moz', 'Webkit', 'Ms', '']).forEach(function (value) {
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
			<figure className={imgFigureClassName} style={styleObj} onClick={this.handleClick}>
				<img src={this.props.data.imageUrl} alt="" />
				<figcaption>
					<h2 className="img-title">{this.props.data.title}</h2>
					<div className="img-back" onClick={this.handleClick}>
						<p>{this.props.data.desc}</p>
					</div>
				</figcaption>
			</figure>
		);
	}
});

var ControllerUnit = React.createClass({
	handleClick: function (e) {
		if (this.props.arrange.isCenter) {
			this.props.inverse();
		} else {
			this.props.center();
		}

		e.stopPropagation();
		e.preventDefault();
	},
	render: function () {
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

	inverse: function (index) {
		return function () {
			var imgsArrangeArr = this.state.imgsArrangeArr;
			imgsArrangeArr[index].isInverse = !imgsArrangeArr[index].isInverse;
			this.setState({
				imgsArrangeArr: imgsArrangeArr
			});
		}.bind(this);
	},


	//居中点击图片
	center: function (index) {
		return function () {
			this.rearrange(index);
		}.bind(this);
	},

	// 重新布局
	// 指定中心图片
	rearrange: function (centerIndex) {
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
		imgsArrangeTopArr.forEach(function (value, index) {
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
	getInitialState: function () {
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
	componentDidMount: function () {
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
	render: function () {
		var controllerUnits = [],
			imgFigures = [];
		imagesData.forEach(function (value, index) {
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
			imgFigures.push(<ImgFigure key={index} data={value} ref={'imgFigure' + index} arrange={this.state.imgsArrangeArr[index]} inverse={this.inverse(index)} center={this.center(index)} />);
			controllerUnits.push(<ControllerUnit key={index} arrange={this.state.imgsArrangeArr[index]} inverse={this.inverse(index)} center={this.center(index)} />);
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
		return <Content />;
	}
}
AppStage.defaultProps = {};
export default AppStage;