export default interface Importer<T> {
    getData(p?: string): Promise<T[]>;
}
