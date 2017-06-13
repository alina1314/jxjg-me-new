/*-项目决算-*/
//xmjues_chart1决算与结算个数对比
var xmjues_chart1=echarts.init(document.getElementById('xmjues_chart1'));
option={
	title:{
		text:"决算与结算个数对比",
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
    	data:["决算时需记数","结算时需记数"],
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
            name:"决算时需记数",
            type:'bar',
        	barWidth:50,
            data:[118, 52, 80, 64, 15, 50, 40,50,20],
            itemStyle:{
				normal:{color:"#50A4BC"},
			}
        },
        {
            name:"结算时需记数",
            type:'bar',
        	barWidth:50,
            data:[65, 35, 60, 0, 0, 0, 0,55,0],
            itemStyle:{
				normal:{color:"#C9D161"},
			}
        }
    ]
};
xmjues_chart1.setOption(option);

//xmjues_chart2检修技改决算对比
var xmjues_chart2=echarts.init(document.getElementById('xmjues_chart2'));
option={
	title:{
		text:"检修技改决算对比",
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
    	data:["检修","技改"],
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
            data : ['2016年10月', '2016年11月', '2016年12月', '2017年1月', '2017年2月', '2017年3月', '2017年4月', '2017年5月'],
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
            name:"检修",
            type:'line',
            symbolSize:20,
			lineStyle:{
				normal:{width:5}
			},
            data:[118, 52, 80, 64, 15, 50, 40,50],
            itemStyle:{
				normal:{color:"rgb(148,62103,189)"},
			}
        },
        {
            name:"技改",
            type:'line',
            symbolSize:20,
			lineStyle:{
				normal:{width:5}
			},
            data:[65, 35, 60, 99, 203, 108, 90,55],
            itemStyle:{
				normal:{color:"rgb(193,106,22)"},
			}
        }
    ]
};
xmjues_chart2.setOption(option);

//xmjues_chart3年度决算转资金额
var xmjues_chart3=echarts.init(document.getElementById('xmjues_chart3'));
option={
	
	title:{
		text:"年度决算转资金额",
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
	grid: {
        top:'10%',
        left: '28%',
        right: '4%',
        bottom: '5%'
    },
    xAxis : [
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
    yAxis : [
        {
            type : 'category',
            data : ['铜箔', '铜箔', '铜箔铜箔铜箔铜箔', '铜箔', '铜箔', 'Sat', 'Sun', '铜箔', '铜箔'],
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
    series : [
        {
        	name:"2016年",
            type:'bar',
        	barWidth:50,
        	stack:"all",
            data:[118, 52, 80, 64, 15, 50, 40,50,20],
            itemStyle:{
				normal:{color:"rgb(255,67,94)"},
			}
        },
        {
        	name:"2017年",
            type:'bar',
        	barWidth:50,
        	stack:"all",
            data:[65, 35, 60, 110, 201, 20, 190,55,240],
            itemStyle:{
				normal:{color:"rgb(88,158,176)"},
			}
        }
    ]
};
xmjues_chart3.setOption(option);