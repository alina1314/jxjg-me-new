var process10_chart1=echarts.init(document.getElementById("process10_chart1"));
option = {
    backgroundColor:"#163242",
    tooltip : {
        trigger: 'item'
    },
    // legend: {
    //     orient : 'vertical',
    //     x : 'left',
    //     data:['直达','营销广告','搜索引擎','邮件营销','联盟广告','视频广告','百度','谷歌','必应','其他']
    // },
    series : 
        
        {
            name:'访问来源',
            type:'pie',
            radius : [0, "55%"],
            label:{
                normal:{
                    formatter:"{b}\n{c}\n{d}%",
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
               
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1048, name:'百度'},
                {value:251, name:'谷歌'},
                {value:147, name:'必应'},
                {value:102, name:'其他'}
            ]
        }
    
};
process10_chart1.setOption(option);

//图1联动图5
var process10_chart5=echarts.init(document.getElementById("process10_chart5"));
var process10_chart5_itemStyle={
	normal: {color:"#F0805A"}
};
var process10_chart5_axisLine= {
    lineStyle: {
        color: "#fff",
        width:5
    }
};
var process10_chart5_axisLabel= {
    textStyle: {
        color: "#fff",
        fontSize:40
    },
    rotate:90,
    margin:50
};
var process10_chart5_label={
    normal:{
        show:true,
        position:"top",
        textStyle:{
            fontSize:40
        }
    }
};
var getBar=function (params) {
    var index=params.dataIndex;
    var bars=[
           
                [25,23,20,30,22,40,32,15,28,16,10,36],
           
                [23,20,18,25,20,36,30,12,25,14,8,28],
            
                [15,23,20,30,22,40,32,15,28,16,10,36],
           
                [15,23,23,30,22,40,36,15,18,16,10,3],
           
                [3, 15, 25, 20, 10, 36, 30, 12, 25, 14, 8, 8],
            
                [15,23,20,30,22,40,32,15,28,16,10,36]
           
    ];
option = {
    backgroundColor:"#163242",
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
            axisLine:process10_chart5_axisLine,
            axisLabel:process10_chart5_axisLabel,
            data:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]
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
            axisLine:process10_chart5_axisLine,
            axisLabel:{
                textStyle: {
                    color: "#fff",
                    fontSize:40
                }
            },
            splitLine:{show: false}
        }
    ],
    series: {
			name: "金额5",
			type: "bar",
			itemStyle:process10_chart5_itemStyle,
			label:process10_chart5_label,
			data: []
	}
};

 option.series.data.splice(0,option.series.length);
    for(var i=0;i<bars[index].length;i++){
        option.series.data.push(bars[index][i]);
    }
    process10_chart5.setOption(option);
};
    process10_chart1.on("click",getBar);
    getBar({
        dataIndex:0
    });


var process10_chart2=echarts.init(document.getElementById("process10_chart2"));
var process10_chart2_axisLine= {
    lineStyle: {
        color: "#fff",
        width:5
    }
};
var process10_chart2_axisLabel= {
    textStyle: {
        color: "#fff",
        fontSize:40
    },
    interval:0,
    rotate:90
};
var process10_chart2_label={
    normal:{
        show:true,
        position:"top",
        textStyle:{
            fontSize:40
        }
    }
};
option = {
    backgroundColor:"#163242",
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
            axisLine:process10_chart2_axisLine,
            axisLabel:process10_chart2_axisLabel,
            data: ['Line', 'Bar', 'Scatter', 'K', 'Pie', 'Radar', 'Chord', 'Force', 'Map', 'Gauge', 'Funnel','Jack']
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLine:process10_chart2_axisLine,
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
            name: 'ECharts例子个数统计',
            type: 'bar',
            itemStyle: {
                normal: {
                    color: function(params) {
                        var colorList = [
                            '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                            '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                            '#D7504B','#C6E579'
                        ];
                        return colorList[params.dataIndex]
                    },
                    label:process10_chart2_label
                }
            },
            data: [12,21,10,4,12,5,6,5,25,23,7,30]
        }
    ]
};
process10_chart2.setOption(option);

var process10_chart3=echarts.init(document.getElementById("process10_chart3"));
var process10_chart3_axisLine= {
    lineStyle: {
        color: "#fff",
        width:5
    }
};
var process10_chart3_axisLabel= {
    textStyle: {
        color: "#fff",
        fontSize:40
    },
    interval:0,
    rotate:90
};
var process10_chart3_label={
    normal:{
        show:true,
        position:"top",
        textStyle:{
            fontSize:40
        }
    }
};
option = {
    backgroundColor:"#163242",
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
            axisLine:process10_chart3_axisLine,
            axisLabel:process10_chart3_axisLabel,
            data: ['Line', 'Bar', 'Scatter', 'K', 'Pie', 'Radar', 'Chord', 'Force', 'Map', 'Gauge', 'Funnel','Jack']
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLine:process10_chart3_axisLine,
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
            name: 'ECharts例子个数统计',
            type: 'bar',
            itemStyle: {
                normal: {
                    color: function(params) {
                        var colorList = [
                            '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                            '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                            '#D7504B','#C6E579'
                        ];
                        return colorList[params.dataIndex]
                    },
                    label:process10_chart3_label
                }
            },
            data: [12,21,10,4,12,5,6,5,25,23,7,30]
        }
    ]
};
process10_chart3.setOption(option);



var process10_chart4=echarts.init(document.getElementById("process10_chart4"));
var process10_chart4_axisLine= {
    lineStyle: {
        color: "#fff",
        width:5
    }
};
var process10_chart4_axisLabel= {
    textStyle: {
        color: "#fff",
        fontSize:40
    },
    interval:0,
    rotate:90
};
var process10_chart4_label={
    normal:{
        show:true,
        position:"top",
        textStyle:{
            fontSize:40
        }
    }
};
option = {
    backgroundColor:"#163242",
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
            axisLine:process10_chart4_axisLine,
            axisLabel:process10_chart4_axisLabel,
            data: ['Line', 'Bar', 'Scatter', 'K', 'Pie', 'Radar', 'Chord', 'Force', 'Map', 'Gauge', 'Funnel','Jack']
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLine:process10_chart4_axisLine,
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
            name: 'ECharts例子个数统计',
            type: 'bar',
            itemStyle: {
                normal: {
                    color: function(params) {
                        var colorList = [
                            '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                            '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                            '#D7504B','#C6E579'
                        ];
                        return colorList[params.dataIndex]
                    },
                    label:process10_chart4_label
                }
            },
            data: [12,21,10,4,12,5,6,5,25,23,7,30]
        }
    ]
};
process10_chart4.setOption(option);

