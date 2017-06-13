/*-项目实施-*/
//xmss_chart1检修技改项目数量
var xmss_chart1=echarts.init(document.getElementById('xmss_chart1'));
option={
     title : {
        text: '检修技改项目数量',
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
    	data:["限上","限下"],
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
    xAxis: {
        type: 'value',
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
    yAxis: {
        inverse:true,
        type: 'category',
        data: ["检修","技改"],
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
    series: [{
        name: '限上',
        type: 'bar',
        data: [31,45,],
        label:{
            normal:{
                show:true,
                formatter:"{c}",
                position:"right",
                textStyle:{
                	color:"#fff",
                	fontSize:40
                }
            }
        }
        	
    },{
        name: '限下',
        type: 'bar',
        data: [66,95,],
        itemStyle:{
        	normal:{
        		color:"rgb(255,127,14)"
        	}
        },
        label:{
            normal:{
                show:true,
                formatter:"{c}",
                position:"right",
                textStyle:{
                	color:"#fff",
                	fontSize:40
                }
            }
        }
    }]
};
xmss_chart1.setOption(option);

//xmss_chart2各单位项目数量
var xmss_chart2=echarts.init(document.getElementById('xmss_chart2'));
option={
	title:{
		text:"各单位项目数量",
		textStyle:{
			color:"#fff",
            fontSize:45
		},
		top:50,
		left:50
	},
	tooltip:{trigger:"item"},
	grid: {
        top:'10%',
        left: '8%',
        right: '4%',
        bottom: '5%'
    },
	xAxis:{
		type:"category",
		data:[01,02,03,04,05,06,07,08,09,10,11,12],
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
        axisTick: {alignWithLabel: true},
        splitLine:{show:false}
	},
	series:[{
		name:"各单位项目数量",
		type:"line",
		areaStyle:{
			normal:{color:"#7D9469"}
		},
		data:[222,148,155,180,190,222,211,218,205,191,446,656],
		symbolSize:20,
		lineStyle:{
			normal:{width:5}
		}
	}]
};
xmss_chart2.setOption(option);

//xmss_chart3年度项目流程进展情况
var xmss_chart3=echarts.init(document.getElementById('xmss_chart3'));
var xmss_chart3data=[[0,0,5],[1,1,1],[2,2,6],[3,3,8],[4,4,6],[5,5,30],[6,3,10],[7,4,6],[8,1,5],[9,2,10]];
option={
	title : {
        text: '年度项目流程进展情况',
		textStyle:{
			color:"#fff",
            fontSize:45
		},
		top:50,
		left:50
    },
    animation: false,
    grid: {
        top:'10%',
        left: '16%',
        right: '4%',
        bottom: '15%'
    },
    xAxis: {
        type: 'category',
        data: ["谠论1","快快滴1","可定1","谠论2","快快滴2","可定2","谠论3",,"快快滴3","可定3","谠论4",],
        axisLabel:{
        	textStyle:{
        		color:"#fff",
            	fontSize:40,
                rotate:30
        	}
        },
        axisLine:{
        	lineStyle:{
        		color:"#fff",
            	width:3
        	}
        },
        axisTick: {alignWithLabel: true},
        splitArea: {
            show: true
        }
    },
    yAxis: {
        type: 'category',
        data: ["2012年","2013年","2014年","2015年","2016年","2017年"],
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
        splitArea: {
            show: true
        }
    },
    series: [{
        name: 'Punch Card',
        type: 'heatmap',
        data:xmss_chart3data,
        label: {
            normal: {
                show: true
            }
        }
    }]
};
xmss_chart3.setOption(option);
