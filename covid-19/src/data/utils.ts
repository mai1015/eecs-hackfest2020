import {TimeSeries} from "./dto/Series";

export function generateTimeSeries(title:string, d): TimeSeries {
    let series: TimeSeries = {
        title,
        time: [], series: [{
            name: 'confirmed',
            type: 'line',
            data: []
        }, {
            name: 'death',
            type: 'line',
            data: []
        }, {
            name: 'recovered',
            type: 'line',
            data: []
        }]}
    for (let i of d) {
        series.time.push(i.updated_at)
        series.series[0].data.push(i.confirmed)
        series.series[1].data.push(i.death)
        series.series[2].data.push(i.recovered)
    }
    return series
}
