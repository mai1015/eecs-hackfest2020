// const scatterOption = {
//     title: {
//         text: 'ScatterMap'
//     },
//     tooltip: {
//         trigger: 'axis',
//         axisPointer: {
//             type: 'cross',
//             label: {
//                 backgroundColor: '#6a7985'
//             }
//         }
//     },
//     legend: {
//         data: ['Confirmed Cases', 'Under Investigation','Cured']
//     },
//     toolbox: {
//         feature: {
//             saveAsImage: {}
//         }
//     },
//     grid: {
//         left: '3%',
//         right: '4%',
//         bottom: '3%',
//         containLabel: true
//     },
//     xAxis: [
//         {
//             type: 'category',
//             boundaryGap: false,
//             data:  ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
//         }
//     ],
//     yAxis: [
//         {
//             type: 'Number'
//         }
//     ],
//     series: [
//         {
//             name: 'Cured',
//             type: 'line',
//             stack: 'Number',
//             areaStyle: {},
//             data: [320, 332, 301, 334, 390, 330, 320]
//         },
//         {
//             name: 'Confirmed Cases',
//             type: 'line',
//             stack: 'Number',
//             areaStyle: {},
//             data: [320, 332, 301, 334, 390, 330, 320]
//         },
//         {
//             name: 'Under Investigation',
//             type: 'line',
//             stack: 'Number',
//             label: {
//                 normal: {
//                     show: true,
//                     position: 'top'
//                 }
//             },
//             areaStyle: {},
//             data: [820, 932, 901, 934, 1290, 1330, 1320]
//         }
//     ]
// };


const scatterOption = {
    title: {
        text: 'Cumulated Timeline'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            axisLine:{
                lineStyle:{
                    color:"white"
                }
            },
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
    ],
    yAxis: [
        {
            type: 'value',
            splitLine: {
                show: false
            },
            axisLine:{
                lineStyle:{
                    color:"white"
                }
            }
        }
    ],
    series: [

        {
            name: 'Confirmed Cases',
            type: 'line',
            stack: '总量',
           
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: 'Death',
            type: 'line',
            stack: '总量',
           
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: 'Cured',
            type: 'line',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};



export default scatterOption;