import echarts from 'echarts'
const gloption = {
    backgroundColor: '#222',
    width:1024,
    height:800,
    geo3D: {
        map: 'geo3d',
        shading: 'lambert',
        environment: '#333',

        light: {
            main: {
                intensity: 5,
                shadow: true,
                shadowQuality: 'high',
                alpha: 30
            },
            ambient: {
                intensity: 1
            },
        },
        viewControl: {
            distance: 75,
            alpha: 30,
            beta: 3,
            animation:true,
            animationDurationUpdate : 1000,
            animationEasingUpdate : 'cubicInOut',
        },
        groundPlane: {
            show: false,
            color: '#222'
        },
        postEffect: {
            enable: true,
            bloom: {
                enable: false,
                intensity: 0.01
            },
            SSAO: {
                radius: 1,
                intensity: 1,
                enable: true
            },
            depthOfField: {
                enable: false,
                focalRange: 1000,
                blurRadius: 10,
                fstop: 1
            }
        },
        temporalSuperSampling: {
            enable: true
        },
        itemStyle: {
            opacity:0.8,
            borderWidth: 0.8,
            borderColor: '#666'

        },

        regionHeight: 2
    },
    visualMap: {
        max: 300000,
        calculable: true,
        realtime: false,
        inRange: {
            color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
        },
        outOfRange: {
            colorAlpha: 0.5
        }
    },
    //without data: mandatory
    series: [{
        type: 'bar3D',
        coordinateSystem: 'geo3D',
        shading: 'lambert',
        barSize: 1.5,
        data:[{name:'1',
                value:[112.54,37.86,200]
    }],
        minHeight: 0.2,
        silent: true,
        itemStyle: {
            color: 'orange'
            // opacity: 0.8
        }
    }]
};

export default gloption;