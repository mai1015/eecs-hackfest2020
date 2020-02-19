export default interface Importer<T> {
    getData(): Promise<T[]>;
}
