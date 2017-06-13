var process15_chart1=echarts.init(document.getElementById("process15_chart1"));
var process15_chart1_axisLine= {
    lineStyle: {
        color: "#fff",
        width:5
    }
};
var process15_chart1_axisLabel= {
    textStyle: {
        color: "#fff",
        fontSize:40
    },
    rotate:90,
    margin:50,
    interval:0
};
var process15_chart1_label={
    normal:{
        show:true,
        position:"top",
        textStyle:{
            fontSize:40
        }
    }
};
var process15_chart1_title={
    text:"判定条件（限上：决算时间-投产时间>90天；\n\n" +
    "限下：决算时间-投产时间>60天）",
    textStyle:{
        color:"#fff",
        fontSize:40,
        fontWeight:"normal"
    },
    left:"45%",
    top:"5%",
    bottom:"5%"
};
option = {
    backgroundColor:"#163242",
    title:process15_chart1_title,
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
        axisLine:process15_chart1_axisLine,
        axisLabel:process15_chart1_axisLabel,
        data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
    },
    yAxis : {
        type : 'value',
        axisLine:process15_chart1_axisLine,
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
            label:process15_chart1_label
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
            label:process15_chart1_label
        }
    ]
};

process15_chart1.setOption(option);

var process15_chart2=echarts.init(document.getElementById("process15_chart2"));
var process15_chart2_axisLine= {
    lineStyle: {
        color: "#fff",
        width:5
    }
};
var process15_chart2_axisLabel= {
    textStyle: {
        color: "#fff",
        fontSize:40
    },
    rotate:90,
    margin:50
};
var process15_chart2_label={
    normal:{
        show:true,
        position:"top",
        textStyle:{
            fontSize:40
        }
    }
};
var process15_chart2_title={
    text:"判定条件（项目转资金额/总投资）*100%<60%）",
    textStyle:{
        color:"#fff",
        fontSize:40,
        fontWeight:"normal"
    },
    left:"45%",
    top:"5%",
    bottom:"5%"
};
option = {
    backgroundColor:"#163242",
    title:process15_chart2_title,
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
            axisLine:process15_chart2_axisLine,
            axisLabel:process15_chart2_axisLabel,
            data: ['Line', 'Bar', 'Scatter', 'K', 'Pie', 'Radar', 'Chord', 'Force', 'Map', 'Gauge', 'Funnel']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name:"个数",
            nameLocation:"middle",
            nameGap:180,
            nameTextStyle:{
                fontSize:40
            },
            axisLine:process15_chart2_axisLine,
            axisLabel:process15_chart2_axisLabel,
            splitLine:{show: false}
        }
    ],
    series: [
        {
            name: '决算转资偏差分析',
            type: 'bar',
            itemStyle: {
                normal: {
                    color:"#efc356"
                }
            },
            label:process15_chart2_label,
            data: [12,21,10,4,12,5,6,5,25,23,7]
        }
    ]
};
process15_chart2.setOption(option);