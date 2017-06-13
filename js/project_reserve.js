/*-项目储备-*/
//xmcb_chart1储备项目数按电厂和项目类型统计对比
var xmcb_chart1=echarts.init(document.getElementById('xmcb_chart1'));
option={
	title:{
		text:"储备项目数按电厂和项目类型统计对比",
		textStyle:{
			color:"#fff",
            fontSize:45
		},
		top:50,
		left:50
	},
    tooltip : {
        trigger: 'axis',
    	formatter:"{b}<br />{a}:{c}个<br />{a1}:{c1}个"
    },
    legend:{
    	data:["生产技改项目储备数","生产检修项目储备数"],
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
        bottom: '15%'
    },
    xAxis : [
        {
            type : 'category',
            data : ['铜箔', '铜箔', '铜箔', '铜箔', '铜箔', 'Sat', 'Sun', '铜箔', '铜箔'],
            axisLabel:{
            	textStyle:{
            		color:"#fff",
                	fontSize:40
            	},
            	interval:0,
            	rotate:30
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
            name:'生产技改项目储备数',
            type:'bar',
        	barWidth:50,
            data:[118, 52, 80, 64, 15, 50, 40,50,20],
            itemStyle:{
				normal:{color:"#50A4BC"},
			}
        },
        {
            name:'生产检修项目储备数',
            type:'bar',
        	barWidth:50,
            data:[65, 35, 60, 0, 0, 0, 0,55,0],
            itemStyle:{
				normal:{color:"#C9D161"},
			}
        }
    ]
};
xmcb_chart1.setOption(option);

//xmcb_chart2年度计划按电厂和项目类型统计对比
var xmcb_chart2=echarts.init(document.getElementById('xmcb_chart2'));
option={
	title:{
		text:"年度计划按电厂和项目类型统计对比",
		textStyle:{
			color:"#fff",
            fontSize:45
		},
		top:50,
		left:50
	},
    tooltip : {
        trigger: 'axis',
    	formatter:"{b}<br />{a}:{c}万元<br />{a1}:{c1}万元"
    },
    legend:{
    	data:["生产技改年度投资","生产检修年度投资"],
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
        bottom: '15%'
    },
    xAxis : [
        {
            type : 'category',
            data : ['铜箔', '铜箔', '铜箔', '铜箔', '铜箔', 'Sat', 'Sun'],
            axisLabel:{
            	textStyle:{
            		color:"#fff",
                	fontSize:40
            	},
            	interval:0,
            	rotate:30
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
            name:'生产技改年度投资',
            type:'bar',
            data:[65, 135, 60, 200, 100,55,150],
            itemStyle:{
				normal:{color:"rgb(255,174,24)"},
			}
        },
        {
            name:'生产检修年度投资',
            type:'bar',
            data:[165, 85, 220, 110, 80,125,60],
            itemStyle:{
				normal:{color:"rgb(106,230,169)"},
			}
        }
    ]
};
xmcb_chart2.setOption(option);

//xmcb_chart3已完成项目储备的与未完成的项目对比
var xmcb_chart3=echarts.init(document.getElementById("xmcb_chart3"));
option={
	title:{
		text:"已完成项目储备的与未完成的项目对比",
		textStyle:{
			color:"#fff",
            fontSize:45
		},
		top:50,
		left:50
	},
    series: [
        {
            name:'状态',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '40%'],
			color: ['#86D560', '#AF89D6', '#59ADF3', '#FF999A', '#FFCC67', '#ddbb56'],
            label: {
                normal: {
                    position: 'inner',
                    textStyle: {
                        fontSize:45,
                        color:"#fff"
               		}
                }
            },
            data:[
                {value:335, name:'未完成', selected:true},
                {value:1548, name:'已完成'}
            ]
        },
        {
            name:'描述',
            type:'pie',
            radius: ['60%', '75%'],
            label: {
                normal: {
                    textStyle: {
                        fontSize:45,
                        color:"#fff"
               		}
                }
            },
            labelLine: {
                normal: {
                	show: true,
                    lineStyle: {
                        width:3,
                        color:"#fff"
               		}
                }
            },
            data:[
                {value:1048, name:'已批准'},
                {value:251, name:'谷歌'},
                {value:147, name:'必应'},
                {value:102, name:'其他'}
            ]
        }
    ]
};
xmcb_chart3.setOption(option);
