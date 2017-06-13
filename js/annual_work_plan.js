/*-年度工作计划-*/
//ndgzjh_chart1按月度展示项目各阶段的工作计划
var ndgzjh_chart1=echarts.init(document.getElementById('ndgzjh_chart1'));
option={
	title:{
		text:"按月度展示项目各阶段的工作计划",
		textStyle:{
			color:"#fff",
            fontSize:45
		},
		top:50,
		left:50
	},
	tooltip : {
        trigger: 'axis',
//      formatter:"{b}<br />{a}：{c}个<br />{a1}：{c1}个<br />{a2}：{c2}个<br />{a3}：{c3}个<br />{a4}：{c4}个<br />{a5}：{c5}个"
    },
    legend:{
    	data:["招标采购","项目投运","招标结算","施工","合同签订","到货"],
    	top:50,
    	right:50,
    	textStyle:{
    		color:"#fff",
    		fontSize:20
    	}
    },
    grid: {
        top:'10%',
        left: '13%',
        right: '4%',
        bottom: '5%'
    },
	xAxis:{
			type:"category",
			data:["一月","二月","三月","四月","一月","一月","一月","一月","一月","一月","一月","一月"],
			axisLabel:{
		    	textStyle:{
		    		color:"#fff",
		        	fontSize:40
		    	}
		    },
		    axisLine:{
		    	lineStyle:{
		    		color:"#fff",
		        	width:3
		    	}
		    },
		    splitLine:{show:false}
	},
	yAxis:{
		name:"记录数",
		nameLocation:"middle",
		nameGap:131,
		nameTextStyle:{
			color:"#fff",
        	fontSize:40
		},
		type:"value",
		axisLabel:{
	    	textStyle:{
	    		color:"#fff",
	        	fontSize:40
	    	}
	    },
	    axisLine:{
	    	lineStyle:{
	    		color:"#fff",
	        	width:3
	    	}
	    },
	    splitLine:{show:false}
	},
	series:[
		{
			type:"bar",
			name:"招标采购",
            stack: '项目阶段',
			data:[33,33,33,33]
		},
		{
			type:"bar",
			name:"项目投运",
            stack: '项目阶段',
			data:[0,55,55,55]
		},
		{
			type:"bar",
			name:"招标结算",
            stack: '项目阶段',
			data:[0,0,33,33]
		},
		{
			type:"bar",
			name:"施工",
            stack: '项目阶段',
			data:[0,55,55,55]
		},
		{
			type:"bar",
			name:"合同签订",
            stack: '项目阶段',
			data:[33,33,33,33]
		},
		{
			type:"bar",
			name:"到货",
            stack: '项目阶段',
			data:[55,55,55,55]
		}
	]
};
ndgzjh_chart1.setOption(option);

//ndgzjh_chart2按月度展示项目各阶段的计划完成和实际完成的对比情况
var ndgzjh_chart2=echarts.init(document.getElementById('ndgzjh_chart2'));
option={
	title:{
		text:"按月度展示项目各阶段的计划完成和实际完成的对比情况",
		textStyle:{
			color:"#fff",
            fontSize:45
		},
		top:50,
		left:50
	},
	tooltip : {
        trigger: 'axis'
    },
    legend:{
    	data:["计划时间","实际时间"],
    	top:50,
    	right:50,
    	textStyle:{
    		color:"#fff",
    		fontSize:20
    	}
    },
    grid: {
        top:'10%',
        left: '9%',
        right: '4%',
        bottom: '5%'
    },
	xAxis:{
			type:"category",
			data:["一月","二月","三月","四月","一月","一月","一月","一月","一月","一月","一月","一月"],
			axisLabel:{
		    	textStyle:{
		    		color:"#fff",
		        	fontSize:40
		    	}
		    },
		    axisLine:{
		    	lineStyle:{
		    		color:"#fff",
		        	width:3
		    	}
		    },
		    splitLine:{show:false}
	},
	yAxis:{
			type:"value",
			axisLabel:{
		    	textStyle:{
		    		color:"#fff",
		        	fontSize:40
		    	}
		    },
		    axisLine:{
		    	lineStyle:{
		    		color:"#fff",
		        	width:3
		    	}
		    },
		    splitLine:{show:false}
	},
	series:[
		{
			type:"line",
			name:"计划时间",
            stack: '项目阶段',
			data:[28,31,43,59],
            connectNulls:true,
			symbolSize:20,
			lineStyle:{
				normal:{width:5}
			}
		},
		{
			type:"line",
			name:"实际时间",
            stack: '项目阶段',
			data:[23,28,49,53],
            connectNulls:true,
			symbolSize:20,
			lineStyle:{
				normal:{width:5}
			}
		}
	]
};
ndgzjh_chart2.setOption(option);