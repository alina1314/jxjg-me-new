var process4_chart1=echarts.init(document.getElementById("process4_chart1"));
var process4_chart1_symbolSize=15;
var process4_chart1_lineStyle={
    normal:{width:10}
};
var process4_chart1_label={
    normal:{
        show:true,
        position:"top",
        textStyle:{
            fontSize:40
        }
    }
};
var process4_chart1_axisLine= {
    lineStyle: {
        color: "#fff",
        width:5
    }
};
var process4_chart1_axisLabel= {
    textStyle: {
        color: "#fff",
        fontSize:40
    }
};
option = {
    title: {
        text: '审批时间',
        textStyle:{
            color:"#fff",
            fontSize:45
        },
        top:50,
        left:50
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        icon:"rect",
        itemWidth:50,
        itemHeight:50,
        itemGap:30,
        orient:"vertical",
        textStyle:{
            color:"#fff",
            fontSize:40
        },
        right:"2%",
        top:"15%",
        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎','邮件营销1','联盟广告1','视频广告1','直接访问1','搜索引擎1']
    },
    grid: {
        top:"20%",
        left: '10%',
        right: '10%',
        bottom: '10%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        axisLine:process4_chart1_axisLine,
        axisLabel:process4_chart1_axisLabel,
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value',
        name:"岗位审批数",
        nameLocation:"middle",
        nameGap:180,
        nameTextStyle:{
            fontSize:40
        },
        axisLine:process4_chart1_axisLine,
        axisLabel:process4_chart1_axisLabel,
        splitLine:{show:false}
    },
    series: [
        {
            name:'邮件营销',
            type:'line',
            symbolSize:process4_chart1_symbolSize,
            lineStyle:process4_chart1_lineStyle,
            label:process4_chart1_label,
            stack: '总量',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'联盟广告',
            type:'line',
            symbolSize:process4_chart1_symbolSize,
            lineStyle:process4_chart1_lineStyle,
            label:process4_chart1_label,
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'视频广告',
            type:'line',
            symbolSize:process4_chart1_symbolSize,
            lineStyle:process4_chart1_lineStyle,
            label:process4_chart1_label,
            stack: '总量',
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'直接访问',
            type:'line',
            symbolSize:process4_chart1_symbolSize,
            lineStyle:process4_chart1_lineStyle,
            label:process4_chart1_label,
            stack: '总量',
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'搜索引擎',
            type:'line',
            symbolSize:process4_chart1_symbolSize,
            lineStyle:process4_chart1_lineStyle,
            label:process4_chart1_label,
            stack: '总量',
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        },
        {
            name:'邮件营销1',
            type:'line',
            symbolSize:process4_chart1_symbolSize,
            lineStyle:process4_chart1_lineStyle,
            label:process4_chart1_label,
            stack: '总量',
            data:[123, 134, 105, 136, 190, 23, 21]
        },
        {
            name:'联盟广告1',
            type:'line',
            symbolSize:process4_chart1_symbolSize,
            lineStyle:process4_chart1_lineStyle,
            label:process4_chart1_label,
            stack: '总量',
            data:[22, 82, 91, 24, 90, 30, 31]
        },
        {
            name:'视频广告1',
            type:'line',
            symbolSize:process4_chart1_symbolSize,
            lineStyle:process4_chart1_lineStyle,
            label:process4_chart1_label,
            stack: '总量',
            data:[15, 32, 21, 54, 90, 30, 40]
        },
        {
            name:'直接访问1',
            type:'line',
            symbolSize:process4_chart1_symbolSize,
            lineStyle:process4_chart1_lineStyle,
            label:process4_chart1_label,
            stack: '总量',
            data:[340, 352, 321, 314, 340, 70, 90]
        },
        {
            name:'搜索引擎1',
            type:'line',
            symbolSize:process4_chart1_symbolSize,
            lineStyle:process4_chart1_lineStyle,
            label:process4_chart1_label,
            stack: '总量',
            data:[330, 222, 111, 224, 290, 330, 320]
        }
    ]
};
process4_chart1.setOption(option);