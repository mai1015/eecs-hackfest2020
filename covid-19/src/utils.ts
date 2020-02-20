export function formatDateString(d: any) {
    let dd: Date;
    if (d instanceof Date) {
        dd = d
    } else {
        dd = new Date(d)
    }
    dd.setUTCDate(dd.getUTCDate() + 1)

    let ret = []
    ret.push(dd.getUTCMonth() + 1 < 10 ? '0' + (dd.getUTCMonth() + 1) : dd.getUTCMonth() + 1)
    ret.push(dd.getUTCDate() < 10 ? '0' + dd.getUTCDate() : dd.getUTCDate())
    ret.push(dd.getUTCFullYear())
    return ret.join('-')
}

export function formatDate(d: string) {
    const token = d.split('-')
    return new Date(parseInt(token[2]), parseInt(token[0]) - 1, parseInt(token[1]))
}
