var process5_chart1=echarts.init(document.getElementById("process5_chart1"));
option = {
    tooltip : {
        trigger: 'item'
    },
    // legend: {
    //     orient : 'vertical',
    //     x : 'left',
    //     data:['直达','营销广告','搜索引擎','邮件营销','联盟广告','视频广告','百度','谷歌','必应','其他']
    // },
    series : [
        {
            name:'访问来源',
            type:'pie',
            radius : [0, "28%"],
            label:{
                normal:{
                    textStyle:{
                        color:"#fff",
                        fontSize:40
                    }
                }
            },
            itemStyle : {
                normal : {
                    label : {
                        position : 'inner'
                    },
                    labelLine : {
                        show : false
                    }
                }
            },
            data:[
                {value:335, name:'直达'},
                {value:679, name:'营销广告'},
                {value:1548, name:'搜索引擎', selected:true}
            ]
        },
        {
            name:'访问来源',
            type:'pie',
            radius : ["40%", "60%"],
            label:{
                normal:{
                    textStyle:{
                        color:"#fff",
                        fontSize:40
                    }
                }
            },
            labelLine:{
                normal:{
                    show:true,
                    length:150,
                    lineStyle:{width:5}
                }
            },
            data:[
                {value:335, name:'直达'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1048, name:'百度'},
                {value:251, name:'谷歌'},
                {value:147, name:'必应'},
                {value:102, name:'其他'}
            ]
        }
    ]
};
process5_chart1.setOption(option);

var process5_chart2=echarts.init(document.getElementById("process5_chart2"));
var process5_chart2_axisLine= {
    lineStyle: {
        color: "#fff",
        width:5
    }
};
var process5_chart2_axisLabel= {
    textStyle: {
        color: "#fff",
        fontSize:40
    },
    rotate:90,
    margin:50
};
var process5_chart2_label={
    normal:{
        show:true,
        position:"top",
        textStyle:{
            fontSize:40
        }
    }
};
option = {
    tooltip: {
        trigger: 'item'
    },
    grid: {
        top:"10%",
        left:'10%',
        bottom:'15%'
    },
    xAxis: [
        {
            type: 'category',
            axisLine:process5_chart2_axisLine,
            axisLabel:process5_chart2_axisLabel,
            data: ['Line', 'Bar', 'Scatter', 'K', 'Pie', 'Radar', 'Chord', 'Force', 'Map', 'Gauge', 'Funnel']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name:"记录数",
            nameLocation:"middle",
            nameGap:180,
            nameTextStyle:{
                fontSize:40
            },
            axisLine:process5_chart2_axisLine,
            axisLabel:process5_chart2_axisLabel,
            splitLine:{show: false}
        }
    ],
    series: [
        {
            name: '决算转资偏差分析',
            type: 'bar',
            itemStyle: {
                normal: {
                    color:"#F0805A"
                }
            },
            label:process5_chart2_label,
            data: [12,21,10,4,12,5,6,5,25,23,7]
        }
    ]
};
process5_chart2.setOption(option);
var process5_chart3=echarts.init(document.getElementById("process5_chart3"));
option={
    tooltip:{
        trigger:"axis",
        axisPointer:{
            show: true,
            type : "cross",
            crossStyle: {
                type : "dashed",
                width : 1,
                color:"#e4393c"
            }
        }
    },
    grid:{
        left:"15%"
    },
    xAxis:{
        type: "category",
        offset:50,
        axisTick:{show:false},
        axisLine:{
            lineStyle:{
                color:"#aaa",
                width:5
            }
        },
        axisLabel : {
            textStyle:{
                fontSize:40
            }
        },
        data:["2012","2013","2014"," 2015","2016"]
    },
    yAxis:{
        type: "value",
        scale:true,
        name:"异动天数",
        nameLocation:"middle",
        nameGap:160,
        nameTextStyle: {
            fontSize: 40
        },
        axisTick:{show:false},
        axisLine:{
            lineStyle:{
                color:"#aaa",
                width:5
            }
        },
        axisLabel:{
            textStyle:{
                fontSize:40
            }
        },
        splitLine:{show:false}
    },
    series:{
        type:"scatter",
        symbol:"diamond",
        symbolSize:50,
        itemStyle:{
            normal:{color:"#e4393c"}
        },
        data:[
            [0,20],[0,50],[0,50],[0,80],[0,10],[0,89],
            [1,60],[1,80],[1,30],[1,78],[1,30],[1,80],
            [2,45],[2,48],[2,84],[2,55],[2,120],[2,65],
            [3,250],[3,150],[3,50],[3,58],[3,35],[3,85],
            [4,47],[4,80]
        ]
    }
};
process5_chart3.setOption(option);

var process5_chart4=echarts.init(document.getElementById("process5_chart4"));
option={
    tooltip:{
        trigger:"axis",
        axisPointer:{
            show: true,
            type : "cross",
            crossStyle: {
                type : "dashed",
                width : 1,
                color:"#ADA24C"
            }
        }
    },
    grid:{
        left:"15%"
    },
    xAxis:{
        type: "category",
        offset:50,
        axisTick:{show:false},
        axisLine:{
            lineStyle:{
                color:"#aaa",
                width:5
            }
        },
        axisLabel : {
            textStyle:{
                fontSize:40
            }
        },
        data:["2012","2013","2014"," 2015","2016"]
    },
    yAxis:{
        type: "value",
        scale:true,
        name:"异动天数",
        nameLocation:"middle",
        nameGap:160,
        nameTextStyle: {
            fontSize: 40
        },
        axisTick:{show:false},
        axisLine:{
            lineStyle:{
                color:"#aaa",
                width:5
            }
        },
        axisLabel:{
            textStyle:{
                fontSize:40
            }
        },
        splitLine:{show:false}
    },
    series:{
        type:"scatter",
        symbol:"diamond",
        symbolSize:50,
        itemStyle:{
            normal:{color:"#ADA24C"}
        },
        data:[
            [0,20],[0,50],[0,50],[0,80],[0,10],[0,89],
            [1,60],[1,80],[1,30],[1,78],[1,30],[1,80],
            [2,45],[2,48],[2,84],[2,55],[2,120],[2,65],
            [3,250],[3,150],[3,50],[3,58],[3,35],[3,85],
            [4,47],[4,80]
        ]
    }
};
process5_chart4.setOption(option);

var process5_chart5=echarts.init(document.getElementById("process5_chart5"));
option={
    tooltip:{
        trigger:"axis",
        axisPointer:{
            show: true,
            type : "cross",
            crossStyle: {
                type : "dashed",
                width : 1,
                color:"#1d97a0"
            }
        }
    },
    grid:{
        left:"15%"
    },
    xAxis:{
        type: "category",
        offset:50,
        axisTick:{show:false},
        axisLine:{
            lineStyle:{
                color:"#aaa",
                width:5
            }
        },
        axisLabel : {
            textStyle:{
                fontSize:40
            }
        },
        data:["2012","2013","2014"," 2015","2016"]
    },
    yAxis:{
        type: "value",
        scale:true,
        name:"异动天数",
        nameLocation:"middle",
        nameGap:160,
        nameTextStyle: {
            fontSize: 40
        },
        axisTick:{show:false},
        axisLine:{
            lineStyle:{
                color:"#aaa",
                width:5
            }
        },
        axisLabel:{
            textStyle:{
                fontSize:40
            }
        },
        splitLine:{show:false}
    },
    series:{
        type:"scatter",
        symbol:"diamond",
        symbolSize:50,
        itemStyle:{
            normal:{color:"#2EC8CA"}
        },
        data:[
            [0,20],[0,50],[0,50],[0,80],[0,10],[0,89],
            [1,60],[1,80],[1,30],[1,78],[1,30],[1,80],
            [2,45],[2,48],[2,84],[2,55],[2,120],[2,65],
            [3,250],[3,150],[3,50],[3,58],[3,35],[3,85],
            [4,47],[4,80]
        ]
    }
};
process5_chart5.setOption(option);


