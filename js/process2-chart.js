var process2_chart1=echarts.init(document.getElementById("process2_chart1"));
var process2_chart1_axisLine= {
    lineStyle: {
        color: "#fff",
        width:5
    }
};
var process2_chart1_axisLabel= {
    textStyle: {
        color: "#fff",
        fontSize:40
    },
    interval:0,
    rotate:15,
    margin:50
};
option = {
    backgroundColor:"#163242",
    tooltip : {
        trigger: 'axis',
        axisPointer : {type : 'shadow'}
    },
    legend: {
        data:['未批准', '已批准'],
        itemWidth:50,
        itemHeight:50,
        itemGap:30,
        top:"5%",
        right:'5%',
        textStyle:{
            color:"#fff",
            fontSize:40
        }
    },
    calculable : true,
    grid: {
        top:"10%",
        left:'10%',
        bottom:'20%'
    },
    xAxis :
        {
            type : 'category',
            axisLine:process2_chart1_axisLine,
            axisLabel:process2_chart1_axisLabel,
            data : ['运检部-项目负责人或专责','运检部-主任','分管生产领导','本部运检部']
        },
    yAxis : {
        type : 'value',
        name:"决算转资异动情况",
        nameLocation:"middle",
        nameGap:180,
        nameTextStyle:{
            fontSize:40
        },
        splitLine:{show:false},
        axisLine:process2_chart1_axisLine,
        axisLabel:{
            textStyle: {
                color: "#fff",
                fontSize:40
            }
        }
    },
    series : [
        {
            name:'未批准',
            type:'bar',
            stack: '总量',
            itemStyle:{
                normal:{color:"#a3ed8e"}
            },
            data:[320, 302, 301, 334]
        },
        {
            name:'已批准',
            type:'bar',
            stack: '总量',
            itemStyle:{
                normal:{color:"#83ffcf"}
            },
            data:[820, 832, 901, 934]
        }
    ]
};
process2_chart1.setOption(option);


var process2_chart2=echarts.init(document.getElementById("process2_chart2"));
var myData2=['周一','周二','周三','周四','周五','周六','周日'];
var process2_chart2_axisLabel= {
    textStyle: {
        color: "#fff",
        fontSize:40
    }
};
var process2_chart2_label={
    normal: {
        show: true,
        position: 'inside',
        textStyle:{
            fontSize:40
        }
    }
};
option = {
    backgroundColor:"#163242",
    tooltip : {
        trigger: 'item'
    },
    legend: {
        data:['正常','异常'],
        color:[ '#46d188', '#ea966c'],
        itemWidth:60,
        itemHeight:30,
        itemGap:30,
        // orient:"vertical",
        textStyle:{
            color:"#fff",
            fontSize:40
        },
        right:50,
        top:20
    },
    grid: [{
        left: '4%',
        top:"10%",
        bottom: "5%",
        containLabel: true,
        width: '46%'
    },
    {
        show: false,
        right: '4%',
        top:"10%",
        bottom: "5%",
        containLabel: true,
        width: '46%'
    }
    ],
    xAxis: [
        {
            type: 'value',
            inverse: true,
            axisLine: {show: false},
            axisTick: {show: false},
            position: 'top',
            axisLabel:process2_chart2_axisLabel,
            splitLine: {show: false}
        },
        {
            gridIndex: 1,
            type: 'value',
            axisLine: {show: false},
            axisTick: {show: false},
            position: 'top',
            axisLabel:process2_chart2_axisLabel,
            splitLine: {show: false}
        } ],
    yAxis: [{
        type: 'category',
        position: 'right',
        axisLine: {show: false},
        axisTick: {show: false},
        axisLabel: {show: false},
        data: myData2
    }, {
        gridIndex: 1,
        type: 'category',
        position: 'left',
        axisLine: {show: false},
        axisTick: {show: false},
        axisLabel: {
            show: true,
            margin:50,
            textStyle: {
                color: '#9D9EA0',
                fontSize: 40
            }
        },
        data: myData2.map(function(value) {
            return {
                value: value,
                textStyle: {
                    align: 'center'
                }
            }
        })
    }],
    series : [
        {
            name:'正常',
            type:'bar',
            barWidth:80,
            label:process2_chart2_label,
            itemStyle: {
                normal: {
                    color:'#46d188'
                }
            },
            data:[200, 170, 240, 244, 200, 220, 210]
        },
        {
            xAxisIndex:1,
            yAxisIndex: 1,
            name:'异常',
            type:'bar',
            barWidth:80,
            label:process2_chart2_label,
            itemStyle: {
                normal: {
                    color:'#ea966c'
                }
            },
            data:[320, 302, 341, 374, 390, 450, 420]
        }
    ]
};
process2_chart2.setOption(option);


var process2_chart3=echarts.init(document.getElementById("process2_chart3"));
var myData3=['周一','周二','周三','周四','周五','周六','周日'];
var process2_chart3_axisLabel= {
    textStyle: {
        color: "#fff",
        fontSize:40
    }
};
var process2_chart3_label={
    normal: {
        show: true,
        position: 'inside',
        textStyle:{
            fontSize:40
        }
    }
};
option = {
    backgroundColor:"#163242",
    tooltip : {
        trigger: 'item'
    },
    legend: {
        data:['正常','异常'],
        color:[ '#5ab1ef', '#c9d161'],
        itemWidth:60,
        itemHeight:30,
        itemGap:30,
        // orient:"vertical",
        textStyle:{
            color:"#fff",
            fontSize:40
        },
        right:50,
        top:20
    },
    grid: [{
        left: '4%',
        top:"10%",
        bottom: "5%",
        containLabel: true,
        width: '46%'
    },
        {
            show: false,
            right: '4%',
            top:"10%",
            bottom: "5%",
            containLabel: true,
            width: '46%'
        }
    ],
    xAxis: [
        {
            type: 'value',
            inverse: true,
            axisLine: {show: false},
            axisTick: {show: false},
            position: 'top',
            axisLabel:process2_chart3_axisLabel,
            splitLine: {show: false}
        },
        {
            gridIndex: 1,
            type: 'value',
            axisLine: {show: false},
            axisTick: {show: false},
            position: 'top',
            axisLabel:process2_chart3_axisLabel,
            splitLine: {show: false}
        } ],
    yAxis: [{
        type: 'category',
        position: 'right',
        axisLine: {show: false},
        axisTick: {show: false},
        axisLabel: {show: false},
        data: myData3
    }, {
        gridIndex: 1,
        type: 'category',
        position: 'left',
        axisLine: {show: false},
        axisTick: {show: false},
        axisLabel: {
            show: true,
            margin:50,
            textStyle: {
                color: '#9D9EA0',
                fontSize: 40
            }
        },
        data: myData3.map(function(value) {
            return {
                value: value,
                textStyle: {
                    align: 'center'
                }
            }
        })
    }],
    series : [
        {
            name:'正常',
            type:'bar',
            barWidth:80,
            label:process2_chart3_label,
            itemStyle: {
                normal: {
                    color:'#5ab1ef'
                }
            },
            data:[200, 170, 240, 244, 200, 220, 210]
        },
        {
            xAxisIndex:1,
            yAxisIndex: 1,
            name:'异常',
            type:'bar',
            barWidth:80,
            label:process2_chart3_label,
            itemStyle: {
                normal: {
                    color:'#c9d161'
                }
            },
            data:[320, 302, 341, 374, 390, 450, 420]
        }
    ]
};
process2_chart3.setOption(option);





