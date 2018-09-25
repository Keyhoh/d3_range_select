import {createData} from "./util";

const width = 500;
const height = 300;
const subHeight = 50;

const main = d3.select("#index")
    .append("svg")
    .classed("main", true);

const sub = d3.select("#index")
    .append("svg")
    .classed("sub", true);

// 株価的なデータ　　　最小値,最大値,データ数,振れ幅
const data = createData(0, height, 1000, 20);
