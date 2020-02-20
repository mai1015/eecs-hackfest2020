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
            data: ["2020-01-22T05:00:00.000Z","2020-01-23T05:00:00.000Z","2020-01-24T05:00:00.000Z","2020-01-25T05:00:00.000Z","2020-01-26T05:00:00.000Z","2020-01-27T05:00:00.000Z","2020-01-28T05:00:00.000Z","2020-01-29T05:00:00.000Z","2020-01-30T05:00:00.000Z","2020-01-31T05:00:00.000Z","2020-02-01T05:00:00.000Z","2020-02-02T05:00:00.000Z","2020-02-03T05:00:00.000Z","2020-02-04T05:00:00.000Z","2020-02-05T05:00:00.000Z","2020-02-06T05:00:00.000Z","2020-02-07T05:00:00.000Z","2020-02-08T05:00:00.000Z","2020-02-09T05:00:00.000Z","2020-02-10T05:00:00.000Z","2020-02-11T05:00:00.000Z","2020-02-12T05:00:00.000Z","2020-02-13T05:00:00.000Z","2020-02-14T05:00:00.000Z","2020-02-15T05:00:00.000Z","2020-02-16T05:00:00.000Z","2020-02-17T05:00:00.000Z","2020-02-18T05:00:00.000Z","2020-02-19T05:00:00.000Z"]
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
           
            data: [549,644,923,1409,2079,2882,5517,6095,8150,9812,11901,16640,19726,23718,27451,30603,34126,36831,39847,42372,44404,44777,59913,66376,68431,70533,72456,74233,74642]
        },
        {
            name: 'Death',
            type: 'line',
            stack: '总量',
           
            data: [17,18,26,42,56,82,131,133,171,213,259,361,425,491,563,633,718,805,905,1012,1112,1117,1369,1521,1663,1767,1865,2004,2117]
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
            
            data: [28,30,36,39,49,58,101,120,135,214,275,463,614,843,1115,1478,2000,2597,3220,3919,4637,5083,6218,7979,9300,10757,12464,14208,15964]
        }
    ]
};



export default scatterOption;