var process3_chart1=echarts.init(document.getElementById("process3_chart1"));
var process3_chart1_axisLine= {
    lineStyle: {
        color: "#fff",
        width:5
    }
};
var process3_chart1_axisLabel= {
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
            axisLine:process3_chart1_axisLine,
            axisLabel:process3_chart1_axisLabel,
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
        axisLine:process3_chart1_axisLine,
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
process3_chart1.setOption(option);

var process3_chart2=echarts.init(document.getElementById("process3_chart2"));
var process3_chart2_axisLabel= {
    show:true,
    rotate:90,
    textStyle: {
        color: "#fff",
        fontSize:40
    }
};
var process3_chart2_label={
    normal:{
        show:true,
        position:"top",
        textStyle:{
            fontSize:40,
            color:"#fff"
        },
        margin:50
    }
};
var process3_chart2_axisLine= {
    lineStyle: {
        color: "#fff",
        width:5
    }
};
option = {
    backgroundColor:"#163242",
    tooltip : {
        trigger: 'item'
    },
    grid: {
        left: '8%',
        top:"10%",
        right: '4%',
        bottom: '15%',
        containLabel: true
    },
    xAxis : {
            type : 'category',
            axisLine:process3_chart2_axisLine,
            axisLabel:process3_chart2_axisLabel,
            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
    yAxis : {
            type : 'value',
            name:"记录数",
            nameLocation:"middle",
            nameGap:150,
            nameTextStyle:{
                fontSize:40,
                color:"#fff"
            },
            axisLine:process3_chart2_axisLine,
            axisLabel:process3_chart2_axisLabel,
            splitLine:{show:false}
        },
    series : {
            name:'直接访问',
            type:'bar',
            // barWidth:80,
            itemStyle:{
                normal:{color:"#ea966c"}},
            label:process3_chart2_label,
            data:[10, 52, 200, 334, 390, 330, 220]
        }

};
process3_chart2.setOption(option);