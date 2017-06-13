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
        left:"40%",
        bottom:"18%"
    },
    tooltip:{
        trigger:'item',
        formatter:"{b}：{c}个"
    },
    xAxis:{
        type:"value",
        splitLine:{show:false},
        axisLabel:{
            textStyle:{
                color:"#fff",
                fontSize:40
            },
            interval:0,
            margin:20
        },
        axisLine:{
            lineStyle:{
                color:"#fff",
                width:3
            }
        },
        axisTick:{
            lineStyle:{
                color:"#fff",
                width:3
            }
        }
    },
    yAxis:{
        type:"category",
        axisLabel:{
            textStyle:{
                color:"#fff",
                fontSize:40
            },
            margin:30
        },
        axisLine:{
            lineStyle:{
                color:"#fff",
                width:3
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
        data:[41,12,37,26,20,40]
    }
};
jgxm_chart.setOption(option);

// 检修项目
var jxxm_chart=echarts.init(document.getElementById("jxxm_chart"));
option={
    title:{
        text:"检修项目",
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
        left:"40%",
        bottom:"18%"
    },
    tooltip:{
        trigger:'item',
        formatter:"{b}：{c}个"
    },
    xAxis:{
        type:"value",
        splitLine:{show:false},
        axisLabel:{
            textStyle:{
                color:"#fff",
                fontSize:40
            },
            interval:0,
            margin:20
        },
        axisLine:{
            lineStyle:{
                color:"#fff",
                width:3
            }
        },
        axisTick:{
            lineStyle:{
                color:"#fff",
                width:3
            }
        }
    },
    yAxis:{
        type:"category",
        axisLabel:{show:false},
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
        name:"检修项目",
        barWidth:50,
        itemStyle: {
            normal: {
                color: function(params) {
                    var colorList = ['#70799d','#ceb752','#57974b', '#50a6bc','#e9976b','#c9d260'];
                    return colorList[params.dataIndex];
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
    color:["#a3ee8d","#649c66","#55875b","#457250","#26493d","#000d20",
        '#70799d','#ceb752','#57974b', '#50a6bc','#e9976b','#c9d260'
    ],
    legend:{
        textStyle:{
            color:"#F7F8F9",
            fontSize:40
        },
        itemWidth:50,
        itemHeight:50,
        itemGap:80,
        top:150,
        left:120,
        data:["批次招标采购","合同签订","项目实施服务合同履约","项目结算","中间支付","项目关闭"]
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {
            type : 'shadow'
        },
        formatter:"{b}:{c}"
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
                fontSize:40
            },
            margin:20,
            interval:0
        },
        axisLine:{
            lineStyle:{
                color:"#fff",
                width:3
            }
        },
        splitLine:{show:false}
    },
    yAxis: [{
        type:"value",
        name:"数量",
        nameLocation:"middle",
        nameGap:100,
        nameTextStyle:{fontSize:30},
        splitLine:{show:false},
        axisLabel: {
            textStyle:{
                color:"#fff",
                fontSize:25
            }
        },
        axisLine:{
            lineStyle:{
                color:"#fff",
                width:3
            }
        }
    },
    {
        type: 'value',
        name: '关闭总数',
        nameLocation:"middle",
        nameGap:80,
        nameTextStyle:{fontSize:30},
        splitLine:{show:false},
        axisLabel: {
            textStyle:{
                color:"#fff",
                fontSize:25
            }
        },
        axisLine:{
            lineStyle:{
                color:"#fff",
                width:3
            }
        }
    }
    ],
    series: [
        {
            name: '批次招标采购',
            type: 'bar',
            barWidth:80,
            stack: '总量',
            data: [320, 302, 301, 334, 390, 330,  0, 0, 0, 0, 0, 0]
        },
        {
            name: '合同签订',
            type: 'bar',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 0, 0, 0, 0, 0, 0]
        },
        {
            name: '项目实施服务合同履约',
            type: 'bar',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 0, 0, 0, 0, 0, 0]
        },
        {
            name: '项目结算',
            type: 'bar',
            stack: '总量',
            data: [150, 212, 201, 154, 190, 330,0, 0, 0, 0, 0, 0]
        },
        {
            name: '中间支付',
            type: 'bar',
            stack: '总量',
            data: [820, 832, 901, 934, 1290, 1330, 0, 0, 0, 0, 0, 0]
        },
        {
            name: '项目关闭',
            type: 'bar',
            stack: '总量',
            data: [420, 232, 201, 734, 690, 730,0, 0, 0, 0, 0, 0]
        },

        // 预测数据
        {
            name: '批次招标采购1',
            type: 'bar',
            barWidth:80,
            stack: '总量',
            data: [0, 0, 0, 0, 0, 0,320, 302, 301, 334, 390, 330]
        },
        {
            name: '合同签订1',
            type: 'bar',
            stack: '总量',
            data: [0, 0, 0, 0, 0, 0,120, 132, 101, 134, 90, 230]
        },
        {
            name: '项目实施服务合同履约1',
            type: 'bar',
            stack: '总量',
            data: [0, 0, 0, 0, 0, 0, 220, 182, 191, 234, 290, 330]
        },
        {
            name: '项目结算1',
            type: 'bar',
            stack: '总量',
            data: [0, 0, 0, 0, 0, 0,150, 212, 201, 154, 190, 330]
        },
        {
            name: '中间支付1',
            type: 'bar',
            stack: '总量',
            data: [0, 0, 0, 0, 0, 0,820, 832, 901, 934, 1290, 1330]
        },
        {
            name: '项目关闭1',
            type: 'bar',
            stack: '总量',
            data: [0, 0, 0, 0, 0, 0,420, 232, 201, 734, 690, 730]
        },

        // 折线
        {
            name:'关闭总数',
            type:'line',
            symbolSize:25,
            lineStyle:{
                normal:{
                    color:"#e4393c",
                    width:10
                }
               },
            yAxisIndex: 1,
            data:[20, 22, 23, 45, 63, 102, 203, 234, 250, 265, 320, 362]
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
                fontSize:40
            },
            interval:0,
            rotate:45,
            margin:20
        },
        axisLine:{
            lineStyle:{
                color:"#fff",
                width:3
            }
        },
        axisTick:{show:false},
        data:["项目关闭","中间支付","项目结算","项目实际","合同签订","招标采购"]
    },
    yAxis:{
        type:"value",
        name:'万元',
        nameTextStyle:{
            fontSize:35
        },
        nameGap:50,
        splitLine:{show:false},
        axisTick:{show:false},
        axisLine:{
            lineStyle:{
                color:"#fff",
                width:3
            }
        },
        axisLabel:{
            textStyle:{
                color:"#F7F8F9",
                fontSize:25
            }
        }
    },
    series:[{
        name: "实际金额",
        type: "bar",
        barWidth:80,
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
        barWidth:82,
        itemStyle: {
            normal: {color: '#efc456'}
        },
        data: [52,130,48,10,41,66]
    }]
};
zjjd_chart.setOption(option);


