import {createData} from "./util.js";

const width = 500;
const height = 300;
const subHeight = 75;

const main = d3.select("#index")
    .append("svg")
    .classed("main", true);

const sub = d3.select("#index")
    .append("svg")
    .classed("sub", true);

// 株価的なデータ　　    最小値, 最大値,                             データ数, 振れ幅
const data = createData(0, height, parseInt(width * height / subHeight), 20);

// 線形変換関数
let mainScale = d3.scaleLinear()
    .domain([0, data.length])
    .range([0, width]);
const subScale = d3.scaleLinear()
    .domain([0, data.length])
    .range([0, width]);

// グラフをプロットするための関数
const mainLine = d3.line()
    .x((d) => {
        return mainScale(d[0]);
    })
    .y((d) => {
        return d[1];
    });
const subLine = d3.line()
    .x((d) => {
        return subScale(d[0]);
    })
    .y((d) => {
        return subScale(d[1]);
    });

main.append("path")
    .datum(data)
    .attr("d", mainLine);

sub.append("path")
    .datum(data)
    .attr("d", subLine);

const brushes = sub.append("g")
const brush = d3.brushX()
    .extent([[0, 0], [width, subHeight]]);

const brushed = () => {
    mainScale.domain(d3.event && d3.event.selection ? d3.event.selection.map(subScale.invert) : subScale.domain());
    main.select("path").attr("d", mainLine);
};

brush.on("brush", brushed);
brushes.call(brush);
