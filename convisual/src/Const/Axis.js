const axis = {
    title: {
        text: 'Category By Cities',
        subtext: ''
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['Confirmed', 'Cured']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        axisLine:{
            lineStyle:{
                color:"white"
            }
        },
        splitLine: {
            show: false
        },
    },
    yAxis: {
        type: 'category',
        //cities 
        data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)'],
        axisLine:{
            lineStyle:{
                color:"white"
            }
        },
    },
    series: [
        {
            name: 'Confirmed',
            type: 'bar',
            data: [18203, 23489, 29034, 104970, 131744, 630230]
        },
        {
            name: 'Cured',
            type: 'bar',
            data: [19325, 23438, 31000, 121594, 134141, 681807]
        }
    ]
};
// const axis =
// {
//     title: {
//         text: '世界人口总量',
//         subtext: '数据来自网络'
//     },
//     tooltip: {
//         trigger: 'axis',
//         axisPointer: {
//             type: 'shadow'
//         }
//     },
//     legend: {
//         data: ['2011年', '2012年']
//     },
//     grid: {
//         left: '3%',
//         right: '4%',
//         bottom: '3%',
//         containLabel: true
//     },
//     xAxis: {
//         type: 'value',
//         boundaryGap: [0, 0.01],
//         axisLine:{
//             lineStyle:{
//                 color:"white"
//             }
//         },
//         splitLine: {
//             show: false
//         },
//     },
//     yAxis: {
//         type: 'category',
//         data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)'],
//         axisLine:{
//             lineStyle:{
//                 color:"white"
//             }
//         },
        
//     },
//     series: [
//         {
//             name: '2011年',
//             type: 'bar',
//             data: [18203, 23489, 29034, 104970, 131744, 630230]
//         },
//         {
//             name: '2012年',
//             type: 'bar',
//             data: [19325, 23438, 31000, 121594, 134141, 681807]
//         }
//     ]
// };



export default axis;