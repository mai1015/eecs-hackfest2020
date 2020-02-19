
const gloption = {
    backgroundColor: '#cdcfd5',
    geo3D: {
        map: 'na',
        shading: 'lambert',
        
        light: {
            main: {
                intensity: 5,
                shadow: true,
                shadowQuality: 'high',
                alpha: 30
            },
            ambient: {
                intensity: 0
            },
            ambientCubemap: {
                texture: 'data-gl/asset/canyon.hdr',
                exposure: 1,
                diffuseIntensity: 0.5
            }
        },
        viewControl: {
            distance: 75,
            alpha: 30,
            beta: 3,
            animation:true,
        },
        groundPlane: {
            show: false,
            color: '#222'
        },
        postEffect: {
            enable: true,
            bloom: {
                enable: false
            },
            SSAO: {
                radius: 1,
                intensity: 1,
                enable: true
            },
            depthOfField: {
                enable: false,
                focalRange: 10,
                blurRadius: 10,
                fstop: 1
            }
        },
        temporalSuperSampling: {
            enable: true
        },
        itemStyle: {
            borderWidth: 1,


        },

        regionHeight: 2
    },
    visualMap: {
        max: 40,
        calculable: true,
        realtime: false,
        inRange: {
            color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
        },
        outOfRange: {
            colorAlpha: 0
        }
    },
    //without data: mandatory
    series: [{
        type: 'bar3D',
        coordinateSystem: 'geo3D',
        shading: 'lambert',
        barSize: 0.1,
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