/*-年度计划及预算-*/
//ndjhjys_chart1年度计划及预算环节与项目储备环节的数量对比
var ndjhjys_chart1=echarts.init(document.getElementById('ndjhjys_chart1'));
option={
	title:{
		text:"年度计划及预算环节与项目储备环节的数量对比",
		textStyle:{
			color:"#fff",
            fontSize:45
		},
		top:50,
		left:50
	},
    tooltip : {
        trigger: 'axis',
        formatter:"{b}<br />{a}：{c}个<br />{a1}：{c1}个"
    },
    legend:{
    	data:["计划下达","项目储备"],
    	top:50,
    	right:50,
    	textStyle:{
    		color:"#fff",
    		fontSize:20
    	}
    },
	grid: {
        top:'10%',
        left: '12%',
        right: '4%',
        bottom: '25%'
    },
    xAxis : [
        {
            type : 'category',
            data : ['1铜箔铜箔铜箔铜箔铜箔1', '铜箔2222', '铜箔3333', '铜箔4444', '铜箔5555', 'Sat', 'Sun', '铜箔888', '铜箔999'],
            axisLabel:{
            	textStyle:{
            		color:"#fff",
                	fontSize:40
            	},
            	interval:0,
            	rotate:45
            },
            axisLine:{
            	lineStyle:{
            		color:"#fff",
                	width:3
            	}
            },
            axisTick: {
            	alignWithLabel: true,
            }
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
            name:"计划下达",
            type:'bar',
        	barWidth:50,
            data:[118, 52, 80, 64, 15, 50, 40,50,20],
            itemStyle:{
				normal:{color:"#50A4BC"},
			}
        },
        {
            name:"项目储备",
            type:'bar',
        	barWidth:50,
            data:[65, 35, 60, 0, 0, 0, 0,55,0],
            itemStyle:{
				normal:{color:"#C9D161"},
			}
        }
    ]
};
ndjhjys_chart1.setOption(option);

//ndjhjys_chart2年度计划下达金额与年度预算下达金额对比
var ndjhjys_chart2=echarts.init(document.getElementById('ndjhjys_chart2'));
option = {
    timeline: {
        data: [
           '2012年', '2013年','2014年', '2015年','2016年', '2017年'
        ],
        axisType: 'category',
        bottom:35,
        show: true,
        autoPlay: true,
        symbolSize:20,
        playInterval: 1000,
        controlStyle:{
        	itemSize:40,
        	normal:{
        		color:"#fff",
        		borderColor:"#fff"
        	}
        },
        lineStyle:{
        	color:"#aaa",
        	width:3
        },
        label:{
        	position:25,
        	normal:{
        		textStyle:{
        			color:"#fff",
        			fontSize:30
        		}
        	},
        	emphasis:{
        		textStyle:{color:"#fff"}
        	}
        }
    },
    options: [{
    	title:{
			text:"年度计划及预算环节与项目储备环节的数量对比",
			textStyle:{
				color:"#fff",
	            fontSize:45
			},
			top:50,
			left:50
		},
        tooltip: {
            'trigger': 'axis',
            formatter:"{b}<br />{a}：{c}万元<br />{a1}：{c1}万元"
        },
        legend:{
	    	data:["年度预算","年度计划"],
	    	top:50,
	    	right:50,
	    	textStyle:{
	    		color:"#fff",
	    		fontSize:20
	    	}
	    },
        calculable: true,
        grid: {
	        top:'10%',
	        left: '12%',
	        right: '4%',
	        bottom: '25%'
	    },
	    xAxis : [
	        {
	            type : 'category',
	            data : ['1铜箔铜箔铜箔铜箔铜箔1', '铜箔2222', '铜箔3333', '铜箔4444', '铜箔5555', 'Sat', 'Sun', '铜箔888', '铜箔999'],
	            axisLabel:{
	            	textStyle:{
	            		color:"#fff",
	                	fontSize:40
	            	},
	            	interval:0,
	            	rotate:45
	            },
	            axisLine:{
	            	lineStyle:{
	            		color:"#fff",
	                	width:3
	            	}
	            },
	            axisTick: {
	            	alignWithLabel: true,
	            }
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
	            name:"年度预算",
	            type:'bar',
	        	barWidth:50,
	        },
	        {
	            name:"年度计划",
	            type:'bar',
	        	barWidth:50,
	            itemStyle:{
					normal:{color:"rgb(255,127,14)"},
				}
	        }
	    ]
    }, {
        series: [{
            'data': [5, 6, 0, 28, 8, 24, 11, 16, 14]
        }, {
            'data': [0, 2, 12, 2, 12, 0, 12, 0, 2]
        }]
    }, {
        series: [{
            'data': [45, 0, 64, 134, 188, 43, 109, 12, 0]
        }, {
            "data": [16, 0, 38, 8, 51, 4, 72, 0, 0]
        }]
    }, {
        series: [{
            'data': [110, 2, 111, 176, 73, 59, 181, 9, 0]
        }, {
            'data': [64, 7, 39, 32, 30, 11, 63, 1, 3]
        }]
    }, {
        series: [{
            'data': [94, 7, 64, 55, 56, 41, 70, 1, 0]
        }, {
            'data': [49, 13, 24, 23, 11, 3, 28, 4, 11]
        }]
    }, {
        series: [{
            'data': [70, 4, 79, 61, 42, 39, 116, 10, 0]
        }, {
            'data': [64, 2, 24, 45, 20, 5, 33, 5, 4]
        }, ]
    }, {
        series: [{
            'data': [29, 4, 70, 44, 37, 45, 57, 6, 0]
        }, {
            'data': [39, 6, 44, 20, 16, 0, 27, 8, 7]
        }, ]
    }]
};
ndjhjys_chart2.setOption(option);