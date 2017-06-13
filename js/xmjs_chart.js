/*-项目结算-*/
//xmjs_chart1已结算项目数量
var xmjs_chart1=echarts.init(document.getElementById('xmjs_chart1'));
option={
	title:{
		text:"已结算项目数量",
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
    	data:["已结算","未结算"],
    	top:50,
    	right:50,
    	textStyle:{
    		color:"#fff",
    		fontSize:20
    	}
    },
	grid: {
        top:'10%',
        left: '6%',
        right: '4%',
        bottom: '5%'
    },
    xAxis : [
        {
            type : 'category',
            data : ['铜箔', '铜箔', '铜箔', '铜箔', '铜箔', 'Sat', 'Sun', '铜箔', '铜箔'],
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
            axisTick: {alignWithLabel: true}
        }
    ],
    yAxis : [
        {
            type : 'value',
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
            axisTick: {alignWithLabel: true},
            splitLine:{show:false}
        }
    ],
    series : [
        {
            name:'已结算',
            type:'bar',
        	barWidth:50,
            data:[118, 52, 80, 64, 15, 50, 40,50,20],
            itemStyle:{
				normal:{color:"#50A4BC"},
			}
        },
        {
            name:'未结算',
            type:'bar',
        	barWidth:50,
            data:[65, 35, 60, 0, 0, 0, 0,55,0],
            itemStyle:{
				normal:{color:"#C9D161"},
			}
        }
    ]
};
xmjs_chart1.setOption(option);

//xmjs_chart2已结算项目金额
var xmjs_chart2=echarts.init(document.getElementById('xmjs_chart2'));
option={
	title:{
		text:"已结算项目金额",
		textStyle:{
			color:"#fff",
            fontSize:45
		},
		top:50,
		left:50
	},
    tooltip : {
        trigger: 'item',
    	formatter:"{b}<br />{a}:{c}"
    },
    legend:{
    	data:["总预算金额","已结算金额"],
    	top:50,
    	right:50,
    	textStyle:{
    		color:"#fff",
    		fontSize:20
    	}
    },
	grid: {
        top:'10%',
        left: '6%',
        right: '4%',
        bottom: '5%'
    },
    xAxis : [
        {
            type : 'category',
            data : ['铜箔', '铜箔', '铜箔', '铜箔', '铜箔', 'Sat', 'Sun'],
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
            axisTick: {alignWithLabel: true}
        },
        {
        	xAxisIndex:1,
        	offset:0,
            type : 'category',
            data : ['铜箔','铜箔','铜箔', '铜箔','铜箔','铜箔', '铜箔','铜箔','铜箔', '铜箔','铜箔','铜箔', '铜箔','铜箔','铜箔', 'Sat','Sat','Sat', 'Sun','Sun','Sun',],
            axisLabel:{show:false},
            axisLine:{
            	lineStyle:{
            		color:"#fff",
                	width:3
            	}
            },
            axisTick: {alignWithLabel: true}
        }
    ],
    yAxis : [
        {
            type : 'value',
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
            axisTick: {alignWithLabel: true},
            splitLine:{show:false}
        }
    ],
    series : [
        {
            name:'已结算金额',
            type:'bar',
            data:[65, 135, 60, 200, 100,55,150],
            itemStyle:{
				normal:{color:"#C9D161"},
			}
        },
        {
            name:'已结算金额',
            type:'bar',
            data:[165, 85, 220, 110, 80,125,60],
            itemStyle:{
				normal:{color:"#C9D161"},
			}
        },
        {
            name:'已结算金额',
            type:'bar',
            data:[25, 155, 160, 10, 120,95,30],
            itemStyle:{
				normal:{color:"#C9D161"},
			}
        },
        {
        	xAxisIndex:1,
            name:'总预算金额',
            type:'line',
            symbolSize:20,
			lineStyle:{
				normal:{width:5}
			},
            data:[158, 222, 180, 250, 340,150,220,158, 222, 180, 250, 340, 150, 220, 99, 158, 289, 255, 324, 155, 342],
            itemStyle:{
				normal:{color:"rgb(194,53,49)"},
			}
        }
    ]
};
xmjs_chart2.setOption(option);

//xmjs_chart3已结算项目完成率
var xmjs_chart3=echarts.init(document.getElementById("xmjs_chart3"));
option={
	title:{
		text:"已结算项目完成比率",
		textStyle:{
			color:"#fff",
            fontSize:45
		},
		top:50,
		left:50
	},
    series: [{
        name:"已结算项目完成比率",
        type:"pie",
        radius:['60%', '75%'],
        label:{
            normal:{position:"center"}
        },
        data: [{
            value: 20,
            name: '结算率',
            label: {
                normal: {
                    textStyle: {
                        fontSize:45,
                        color:"#fff"
                    },
                    formatter:"{d} %"
                }
            }
        }, {
            value: 80,
            name:"占位",
            label: {
                normal: {
                    textStyle:{
                        color:"#ddd",
                        fontSize:20
                    },
                    formatter:"结算率"
                }
            },
            itemStyle:{
                normal:{color:"#aaa"},
                emphasis:{color:"#aaa"}
            },
            hoverAnimation: false
        }]
    }]
};
xmjs_chart3.setOption(option);
