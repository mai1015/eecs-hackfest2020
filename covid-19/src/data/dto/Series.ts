export interface SeriesItem {
    name: string;
    // type: string;
    value: number[];
}
export interface TimeSeries {
    title?: string;
    time: Date[];
    series: SeriesItem[]
}
