export interface SeriesItem {
    name: string;
    type: string;
    data: number[];
}
export interface TimeSeries {
    time: Date[];
    series: SeriesItem[]
}
