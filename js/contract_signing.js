/*=合同签订=*/
//htqd_chart1采购订单信息
var htqd_chart1=echarts.init(document.getElementById("htqd_chart1"));
option={
	title:{
		text:"采购订单信息",
		textStyle:{
			color:"#fff",
            fontSize:45
		},
		top:50,
		left:50
	},
    tooltip : {
        trigger: 'item',
        formatter : function (params) {
            if (params.value.length > 1) {
                return  params.value[0] + '条<br/> '
                + params.value[1] + '万元<br/>'
                + params.value[2];
            }
        }
    },
    legend:{ },
	grid: {
        top:'20%',
        left: '19%',
        right: '4%',
        bottom: '15%'
    },
    xAxis : [
        {
            type : 'value',
            axisLabel:{
                textStyle:{
                    color:"#fff",
                    fontSize:40
                },
                formatter: '{value}条'
            },
            axisLine:{
                lineStyle:{
                    color:"#fff",
                    width:3
                }
            },
            splitLine:{show:false},
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
                },
                formatter: '{value}万元'
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
    series:[{
    	type:"scatter",
    	symbolSize:20,
        itemStyle:{
            normal:{
                color:"#ff3"
            }
        },
        symbolSize:44,
        markPoint : {
            data : [
                {
                    value:[11,2322,"快快快"],
                    coord:[11,2322]
                },
                {
                    value:[233,222,"快快快"],
                    coord:[233,222]
                }
            ],
            symbolSize:1,
            label:{
                normal:{
                	position:[-10,-100],
                    show:true,
                    textStyle:{
                        color:"#fff",
                        fontSize:22
                    },
                    formatter :function (params) {
			            if (params.value.length > 1) {
			                return  params.value[0] + '条\n '
			                + params.value[1] + '万元\n'
			                + params.value[2];
			            }
			        }
                }
            }
        },
    	data:[
    		[11,2322,"快快快"],[22,4255,"是是是"],[233,222,"快快快"],[154,444,"是是是"],[522,88,"快快快"],[611,658,"是是是"],[147,177,"快快快"],[228,288,"是是是"]
    	]
    }]
};
htqd_chart1.setOption(option);

//htqd_chart2采购订单与采购申请对比数量
//var htqd_chart2=echarts.init(document.getElementById("htqd_chart2"));
//option={
//};
//htqd_chart2.setOption(option);

//htqd_chart3经法合同信息 
//var htqd_chart3=echarts.init(document.getElementById("htqd_chart3"));
//option={
//  
//};
//htqd_chart3.setOption(option);

//htqd_chart4经法合同与采购订单对应的经法合同号对比金额 
var htqd_chart4=echarts.init(document.getElementById("htqd_chart4"));
option={
    title:{
        text:"经法合同与采购订单对应的经法合同号对比金额  ",
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
        data:["公11司","公22司","公33司","公44司","公55司","公66司","公77司","公88司","公99司","公1010司"],
        bottom:20,
        left:0,
        textStyle:{
            color:"#fff",
            fontSize:20
        }
    },
    color:['#c23531', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
    series:[{
        name:"经法合同与采购订单对应的经法合同号对比金额",
        type:"pie",
        radius:"55%",
        data:[
            {
                name:"公11司",
                value:11,
                label:{
                    normal:{
                        textStyle: {
                            fontSize:30,
                            color:"#fff"
                        },
                        formatter:"{b}\n{c}"
                    }
                }
            },
            {
                name:"公22司",
                value:12,
                label:{
                    normal:{
                        textStyle: {
                            fontSize:30,
                            color:"#fff"
                        },
                        formatter:"{b}\n{c}"
                    }
                }
            },
            {
                name:"公33司",
                value:12,
                label:{
                    normal:{
                        textStyle: {
                            fontSize:30,
                            color:"#fff"
                        },
                        formatter:"{b}\n{c}"
                    }
                }
            },
            {
                name:"公44司",
                value:12,
                label:{
                    normal:{
                        textStyle: {
                            fontSize:30,
                            color:"#fff"
                        },
                        formatter:"{b}\n{c}"
                    }
                }
            },
            {
                name:"公55司",
                value:12,
                label:{
                    normal:{
                        textStyle: {
                            fontSize:30,
                            color:"#fff"
                        },
                        formatter:"{b}\n{c}"
                    }
                }
            },
            {
                name:"公66司",
                value:12,
                label:{
                    normal:{
                        textStyle: {
                            fontSize:30,
                            color:"#fff"
                        },
                        formatter:"{b}\n{c}"
                    }
                }
            },
            {
                name:"公77司",
                value:12,
                label:{
                    normal:{
                        textStyle: {
                            fontSize:30,
                            color:"#fff"
                        },
                        formatter:"{b}\n{c}"
                    }
                }
            },
            {
                name:"公88司",
                value:12,
                label:{
                    normal:{
                        textStyle: {
                            fontSize:30,
                            color:"#fff"
                        },
                        formatter:"{b}\n{c}"
                    }
                }
            },
            {
                name:"公99司",
                value:12,
                label:{
                    normal:{
                        textStyle: {
                            fontSize:30,
                            color:"#fff"
                        },
                        formatter:"{b}\n{c}"
                    }
                }
            },
            {
                name:"公1010司",
                value:12,
                label:{
                    normal:{
                        textStyle: {
                            fontSize:30,
                            color:"#fff"
                        },
                        formatter:"{b}\n{c}"
                    }
                }
            }


        ]
    }]
};
htqd_chart4.setOption(option);

//htqd_chart5HPMS合同信息
var htqd_chart5=echarts.init(document.getElementById("htqd_chart5"));
option={
	title:{
		text:"HPMS合同信息 ",
		textStyle:{
			color:"#fff",
         fontSize:45
		},
		top:50,
		left:50
	},
 tooltip : {
     trigger: 'axis',
 	formatter:"{b}<br />{a}:{c}万元<br />{a1}:{c1}个<br />{a2}:{c2}万元<br />{a3}:{c3}个"
 },
 legend:{
 	data:["公司技改金额","公司技改记录数","公司检修金额","公司检修记录数"],
 	top:60,
 	right:50,
 	textStyle:{
 		color:"#fff",
 		fontSize:20
 	}
 },
 color:['#d34642', '#72b1b9', '#546570', '#c4ccd3'],
	grid: {
     top:'20%',
     left: '6%',
     right: '4%',
     bottom: '15%'
 },
 xAxis : [
        {
            type : 'category',
            data : ['铜箔', '铜箔', 'Sat', 'Sun'],
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
 series:[{
 	name:"公司技改金额",
 	type:"bar",
 	stack:"公司技改",
 	data:[11,22,33,44]
 },{
 	name:"公司技改记录数",
 	type:"bar",
 	stack:"公司技改",
 	data:[11,22,33,44]
 },{
 	name:"公司检修金额",
 	type:"bar",
 	stack:"公司检修",
 	data:[11,22,33,44]
 },{
 	name:"公司检修记录数",
 	type:"bar",
 	stack:"公司检修",
 	data:[11,22,33,44]
 }]
};
htqd_chart5.setOption(option);

//htqd_chart6HPMS合同与经法合同号对比金额 
var htqd_chart6=echarts.init(document.getElementById("htqd_chart6"));
option={
	title:{
		text:"HPMS合同与经法合同号对比金额  ",
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
 	data:["HPMS合同","经法合同号"],
 	top:60,
 	right:50,
 	textStyle:{
 		color:"#fff",
 		fontSize:20
 	}
 },

 color:['#94d3db', '#76879b'],
	grid: {
     top:'20%',
     left: '6%',
     right: '4%',
     bottom: '15%'
 },
 xAxis : [
        {
            type : 'category',
            data : ['铜箔', 'Sat', 'Sun', '铜箔'],
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
 series:[{
 	name:"HPMS合同",
 	type:"bar",
 	data:[11,22,33,44]
 },{
 	name:"经法合同号",
 	type:"bar",
 	data:[11,22,33,44]
 }]
};
htqd_chart6.setOption(option);