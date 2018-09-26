export const createData = (min, max, n, a) => {
    if (a === undefined) a = 0;
    let data = [];

    data.push([0, random(min, max)]);
    for (let i = 1; i < n; i++) {
        let Max = Math.min(max, data[i - 1][1] + a);
        let Min = Math.max(min, data[i - 1][1] - a);
        data.push([i, random(Min, Max)]);
    }
    return data;
}

const random = (min, max) => {
    if (min >= max) new Error();
    return Math.random() * (max - min) + min;
}
