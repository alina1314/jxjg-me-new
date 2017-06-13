// 技改项目
var jgxm_chart=echarts.init(document.getElementById("jgxm_chart"));
option={
    title:{
        text:"技改项目",
        textStyle:{
            color:"#b7e3e9",
            fontFamily:"Microsoft Yahei",
            fontSize:45,
            fontWeight:"normal"
        },
    left:"50%",
    top:10
    },
    grid:{
        // top:"20%",
        left:"40%",
        bottom:"8%"
    },
    tooltip:{
        trigger:'item',
        formatter:"{b}：{c}个"
    },
    xAxis:{
        type:"value",
        splitLine:{show:false},
        axisLine:{show:false},
        axisLabel:{show:false},
        axisTick:{show:false}
    },
    yAxis:{
        type:"category",
        axisLabel:{
            textStyle:{
                color:"#fff",
                fontSize:45
            },
            margin:30
        },
        axisLine:{
            lineStyle:{
                color:"#fff",
                width:5
            }
        },
        axisTick:{show:false},
        data:["项目关闭","中间支付","项目结算","项目实施服务合同履约","合同签订","批次招标采购"]
    },
    series:{
        type:"bar",
        name:"技改项目",
        barWidth:50,
        itemStyle: {
            normal: {
                color: function(params) {
                    var colorList = ['#70799d','#ceb752','#57974b', '#50a6bc','#e9976b','#c9d260'];
                    return colorList[params.dataIndex];
                }
            }
        },
        label:{
            normal:{
                show:true,
                formatter:"{c}个",
                position:"right",
                textStyle:{
                    fontSize:50,
                    color:"#fff"
                }
            }
        },
        data:[41,12,37,26,20,40]
    }
};
jgxm_chart.setOption(option);

// 检修项目
var jxxm_chart=echarts.init(document.getElementById("jxxm_chart"));
option={
    title:{
        text:"技改项目",
        textStyle:{
            color:"#b7e3e9",
            fontFamily:"Microsoft Yahei",
            fontSize:45,
            fontWeight:"normal"
        },
        left:"50%",
        top:10
    },
    grid:{
        // top:"20%",
        left:"40%",
        bottom:"8%"
    },
    tooltip:{
        trigger:'item',
        formatter:"{b}：{c}个"
    },
    xAxis:{
        type:"value",
        splitLine:{show:false},
        axisLine:{show:false},
        axisLabel:{show:false},
        axisTick:{show:false}
    },
    yAxis:{
        type:"category",
        axisLabel:{
            textStyle:{
                color:"#fff",
                fontSize:45
            },
            margin:30
        },
        axisLine:{
            lineStyle:{
                color:"#fff",
                width:5
            }
        },
        axisTick:{show:false},
        data:["项目关闭","中间支付","项目结算","项目实施服务合同履约","合同签订","批次招标采购"]
    },
    series:{
        type:"bar",
        name:"技改项目",
        barWidth:50,
        itemStyle: {
            normal: {
                color: function(params) {
                    var colorList = ['#70799d','#ceb752','#57974b', '#50a6bc','#e9976b','#c9d260'];
                    return colorList[params.dataIndex];
                }
            }
        },
        label:{
            normal:{
                show:true,
                formatter:"{c}个",
                position:"right",
                textStyle:{
                    fontSize:50,
                    color:"#fff"
                }
            }
        },
        data:[41,12,37,26,20,40]
    }
};
jxxm_chart.setOption(option);

//时间进度
var sjjd_chart=echarts.init(document.getElementById("sjjd_chart"));
option={
    title:{
        text:"时间进度",
        textStyle:{
            color:"#b7e3e9",
            fontFamily:"Microsoft Yahei",
            fontSize:65,
            fontWeight:"normal"
        },
        left:160,
        top:20
    },
    color:["#a3ee8d","#649c66","#55875b","#457250","#26493d","#000d20"],
    legend:{
        textStyle:{
            color:"#F7F8F9",
            fontSize:45
        },
        itemWidth:50,
        itemHeight:50,
        itemGap:100,
        top:150,
        left:120,
        data:["批次招标采购","合同签订","项目实施服务合同履约","项目结算","中间支付","项目关闭"]
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {
            type : 'shadow'
        }
    },
    grid:{
        top:"30%",
        bottom:"10%"
    },
    xAxis:{
        type:"category",
        data:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
        axisLabel:{
            textStyle:{
                color:"#F7F8F9",
                fontSize:45
            },
            margin:20
        },
        axisLine:{
            lineStyle:{
                color:"#fff",
                width:5
            }
        },
        splitLine:{show:false}
    },
    yAxis: {
        type:"value",
        axisLabel: {show:false},
        axisLine:{show:false},
        splitLine:{show:false}
    },
    series: [
        {
            name: '批次招标采购',
            type: 'bar',
            stack: '总量',
            data: [320, 302, 301, 334, 390, 330, 320]
        },
        {
            name: '合同签订',
            type: 'bar',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '项目实施服务合同履约',
            type: 'bar',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '项目结算',
            type: 'bar',
            stack: '总量',
            data: [150, 212, 201, 154, 190, 330, 410]
        },
        {
            name: '中间支付',
            type: 'bar',
            stack: '总量',
            data: [820, 832, 901, 934, 1290, 1330, 1320]
        },
        {
            name: '项目关闭',
            type: 'bar',
            stack: '总量',
            data: [420, 232, 201, 734, 690, 730, 180]
        }

    ]



};
sjjd_chart.setOption(option);


// 资金进度
var zjjd_chart=echarts.init(document.getElementById("zjjd_chart"));
option={
    title:{
        text:"资金进度",
        textStyle:{
            color:"#b7e3e9",
            fontFamily:"Microsoft Yahei",
            fontSize:65,
            fontWeight:"normal"
        },
        subtext:'万元',
        subtextStyle:{
            fontSize:40
        },
        left:160,
        top:30
    },
    grid:{
        top:"25%",
        bottom:"25%"
    },
    legend:{
        show:false,
        data:["实际金额","计划金额"]
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {
            type : 'shadow'
        }
    },
    xAxis:{
        type:"category",
        axisLabel:{
            textStyle:{
                color:"#fff",
                fontSize:45
            },
            interval:0,
            rotate:45,
            margin:20
        },
        axisLine:{
            lineStyle:{
                color:"#fff",
                width:5
            }
        },
        axisTick:{show:false},
        data:["项目关闭","中间支付","项目结算","项目实","合同签订","招标采购"]
    },
    yAxis:{
        type:"value",
        splitLine:{show:false},
        axisTick:{show:false},
        axisLine:{
            lineStyle:{
                color:"#fff",
                width:5
            }
        },
        axisLabel:{
            textStyle:{
                color:"#F7F8F9",
                fontSize:45
            }
        }
    },
    series:[{
        name: "实际金额",
        type: "bar",
        barWidth: 60,
        silent:true,
        barGap:'-100%',
        itemStyle: {
            normal: {color: '#000d20'}
        },
        data: [420,300,380,100,310,560]
    },
        {
            name: "计划金额",
            type: "bar",
            barWidth:62,
            itemStyle: {
                normal: {color: '#efc456'}
            },
            data: [52,130,48,10,41,66]
        }]
};
zjjd_chart.setOption(option);