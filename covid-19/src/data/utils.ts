import {TimeSeries} from "./dto/Series";

export function generateTimeSeries(title:string, d): TimeSeries {
    let series: TimeSeries = {
        title,
        time: [], series: [{
            name: 'confirmed',
            // type: 'line',
            value: []
        }, {
            name: 'death',
            // type: 'line',
            value: []
        }, {
            name: 'recovered',
            // type: 'line',
            value: []
        }]}
    for (let i of d) {
        series.time.push(i.updated_at)
        series.series[0].value.push(i.confirmed)
        series.series[1].value.push(i.death)
        series.series[2].value.push(i.recovered)
    }
    return series
}
