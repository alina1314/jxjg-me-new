var process13_chart1=echarts.init(document.getElementById("process13_chart1"));
var process13_chart1_axisLine= {
    lineStyle: {
        color: "#fff",
        width:5
    }
};
var process13_chart1_axisLabel= {
    textStyle: {
        color: "#fff",
        fontSize:40
    },
    rotate:90,
    margin:50,
    interval:0
};
var process13_chart1_label={
    normal:{
        show:true,
        position:"top",
        textStyle:{
            fontSize:40
        }
    }
};
var process13_chart1_title={
    text:"判定条件（生产检修项目为31天）",
    textStyle:{
        color:"#fff",
        fontSize:40,
        fontWeight:"normal"
    },
    left:"40%",
    top:"5%",
    bottom:"5%"
};
option = {
    backgroundColor:"#163242",
    title:process13_chart1_title,
    tooltip: {
        trigger: 'item'
    },
    grid: {
        top:"20%",
        left:'10%',
        bottom:'20%'
    },
    xAxis: [
        {
            type: 'category',
            axisLine:process13_chart1_axisLine,
            axisLabel:process13_chart1_axisLabel,
            data: ['Line', 'Bar', 'Scatter', 'K', 'Pie', 'Radar', 'Chord', 'Force', 'Map', 'Gauge', 'Funnel']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name:"个数",
            nameLocation:"middle",
            nameGap:120,
            nameTextStyle:{
                fontSize:40
            },
            axisLine:process13_chart1_axisLine,
            axisLabel:{
                textStyle: {
                    color: "#fff",
                    fontSize:40
                }
            },
            splitLine:{show: false}
        }
    ],
    series: [
        {
            name: '决算转资偏差分析',
            type: 'bar',
            itemStyle: {
                normal: {
                    color:"#46d188"
                }
            },
            label:process13_chart1_label,
            data: [12,21,10,4,12,5,6,5,25,23,7]
        }
    ]
};
process13_chart1.setOption(option);


var process13_chart2=echarts.init(document.getElementById("process13_chart2"));
var process13_chart2_axisLine= {
    lineStyle: {
        color: "#fff",
        width:5
    }
};
var process13_chart2_axisLabel= {
    textStyle: {
        color: "#fff",
        fontSize:40
    },
    rotate:90,
    margin:50,
    interval:0
};
var process13_chart2_label={
    normal:{
        show:true,
        position:"top",
        textStyle:{
            fontSize:40
        }
    }
};
var process13_chart2_title={
    text:"判定条件（项目投运完成后仍未进行结算的项目：\n\n" +
    "生产技改限上项目为46天、生产技改限下项目为31天）",
    textStyle:{
        color:"#fff",
        fontSize:40,
        fontWeight:"normal"
    },
    left:"35%",
    top:"5%",
    bottom:"5%"
};
option = {
    backgroundColor:"#163242",
    title:process13_chart2_title,
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['限上','限下'],
        color:[ '#46d188', '#ea966c'],
        itemWidth:60,
        itemHeight:30,
        itemGap:50,
        textStyle:{
            color:"#fff",
            fontSize:40
        },
        left:"50%",
        top:"20%"
    },
    calculable : true,
    grid: {
        top:"28%",
        left:'10%',
        bottom:'20%'
    },
    xAxis : {
            type : 'category',
            axisLine:process13_chart2_axisLine,
            axisLabel:process13_chart2_axisLabel,
            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        },
    yAxis : {
            type : 'value',
            axisLine:process13_chart2_axisLine,
            axisLabel:{
                textStyle: {
                    color: "#fff",
                    fontSize:40
                }
            },
            splitLine:{show: false}
        },
    series : [
        {
            name:'限上',
            type:'bar',
            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
            itemStyle: {
                normal: {
                    color:'#46d188'
                }
            },
            label:process13_chart2_label
        },
        {
            name:'限下',
            type:'bar',
            barGap:0,
            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
            itemStyle: {
                normal: {
                    color:'#ea966c'
                }
            },
            label:process13_chart2_label
        }
    ]
};
process13_chart2.setOption(option);


var process13_chart3=echarts.init(document.getElementById("process13_chart3"));
var process13_chart3_axisLine= {
    lineStyle: {
        color: "#fff",
        width:5
    }
};
var process13_chart3_axisLabel= {
    textStyle: {
        color: "#fff",
        fontSize:40
    },
    interval:0,
    rotate:90,
    margin:50
};
var process13_chart3_label={
    normal:{
        show:true,
        position:"top",
        textStyle:{
            fontSize:40
        }
    }
};
var process13_chart3_title={
    text:"判定条件（结算金额>概算金额)",
    textStyle:{
        color:"#fff",
        fontSize:40,
        fontWeight:"normal"
    },
    left:"35%",
    top:"5%",
    bottom:"5%"
};
option = {
    backgroundColor:"#163242",
    title:process13_chart3_title,
    tooltip: {
        trigger: 'item'
    },
    grid: {
        top:"10%",
        left:'10%',
        bottom:'20%'
    },
    xAxis: [
        {
            type: 'category',
            axisLine:process13_chart3_axisLine,
            axisLabel:process13_chart3_axisLabel,
            data: ['Line', 'Bar', 'Scatter', 'K', 'Pie', 'Radar', 'Chord', 'Force', 'Map', 'Gauge', 'Funnel']
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLine:process13_chart3_axisLine,
            axisLabel:process13_chart3_axisLabel,
            splitLine:{show: false}
        }
    ],
    series: [
        {
            name: '结算超概算项目数',
            type: 'bar',
            itemStyle: {
                normal: {
                    color: function(params) {
                        var colorList = [
                            '#83ffcf','#B5C334','#FCCE10','#E87C25','#27727B',
                            '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                            '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                        ];
                        return colorList[params.dataIndex]
                    },
                    label:process13_chart3_label
                }
            },
            data: [12,21,10,4,12,5,6,5,25,23,7]
        }
    ]
};
process13_chart3.setOption(option);