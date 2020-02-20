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
        data: ["Anhui","Beijing","Chongqing","Fujian","Gansu","Guangdong","Guangxi","Guizhou","Hainan","Hebei","Heilongjiang","Henan","Hong Kong","Hubei","Hunan","Inner Mongolia","Jiangsu","Jiangxi","Jilin","Liaoning","Macau","Ningxia","Qinghai","Shaanxi","Shandong","Shanghai","Shanxi","Sichuan","Taiwan","Tianjin","Tibet","Xinjiang","Yunnan","Zhejiang"],
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
            data: [986,393,560,293,91,1331,244,146,168,306,470,1262,63,62031,1008,75,631,934,90,121,10,71,18,242,544,333,131,514,23,130,1,76,172,1174]
        },
        {
            name: 'Cured',
            type: 'bar',
            data: [413,145,274,112,65,606,86,70,84,152,120,573,5,10337,561,10,318,362,37,55,5,42,16,102,231,186,68,188,2,54,1,20,60,604]
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