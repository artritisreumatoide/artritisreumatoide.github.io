var vlSpec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
    "title": "         Trends Rheumatoid Arthritis",
    "data": {"url": "data2.csv"},
    "mark": "rect",
    "encoding": {
        "y": {"field": "Municipality", "type": "nominal"},
        "x": {"field": "Year", "type": "nominal"},
        "color": { "field": "Cared Patients", "type": "quantitative"}
    },
    "config": {
        "range": {
            "heatmap": {
                "scheme": "greenblue"
            }
        },
        "view": {
            "stroke": "transparent"
        }
    }
}
vegaEmbed("#vis", vlSpec);



var vlSpec2 = {
    "data": {"url": "data1.csv"},
    "mark": "bar",
    "encoding": {
        "x": {
            "field": "Municipio",
            "type": "nominal"
        },
        "y": {
            "field": "2009",
            "type": "quantitative"
        }
    }
}
vegaEmbed("#vis2", vlSpec2);
