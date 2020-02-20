export interface SeriesItem {
    name: string;
    type: string;
    data: number[];
}
export interface TimeSeries {
    title?: string;
    time: Date[];
    series: SeriesItem[]
}
