var size = 0;
var placement = 'point';

var style_NivelSocieconomico_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("PC1");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= -2.618404 && value <= -2.215288) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(178,24,43,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= -2.215288 && value <= -1.326401) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(239,138,98,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= -1.326401 && value <= -0.418508) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(253,219,199,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= -0.418508 && value <= 0.769258) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(209,229,240,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.769258 && value <= 2.056060) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(103,169,207,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 2.056060 && value <= 9.247005) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(33,102,172,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
