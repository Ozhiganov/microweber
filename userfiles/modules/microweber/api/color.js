mw.color = {
  rgbToHex : function(color) {
    if(typeof color == 'object'){
      color = color.r + ',' + color.g + ',' + color.b;
    }
    if(color.contains('rgb')){
      var color = color.replace(/rgba/g, '').replace(/rgb/g, '').replace(/\(|\)/g, "").replace(/\s/g, "");
    }
    var color = color.split(',');
    if(color != 'transparent'){
      return "#" + ((1 << 24) + (parseInt(color[0]) << 16) + (parseInt(color[1]) << 8) + parseInt(color[2])).toString(16).slice(1);
    }
    else{
      return 'transparent';
    }
  },
  hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
  },
  colorParse:function(CSScolor){
    CSScolor = CSScolor || 'rgb(0,0,0,0)';
    var final = {r:0,g:0,b:0,alpha:0};
    if(CSScolor.contains('rgb')){
      var parse = CSScolor.replace(/rgba/g, '').replace(/rgb/g, '').replace(/\(|\)/g, "").replace(/\s/g, "").split(',');
      final.r = parseInt(parse[0], 10);
      final.g = parseInt(parse[1], 10);
      final.b = parseInt(parse[2], 10);
      final.alpha = Number((parse[3]||1));
      return final;
    }
    else{
      var final = mw.color.hexToRgb(CSScolor);
      final.alpha = 1
      return final;
    }
  },
  hexToRgbaCSS(hex, alpha) {
    alpha = alpha || 1;
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? ('rgba('+parseInt(result[1], 16)+','+parseInt(result[2], 16)+','+parseInt(result[3], 16)+','+alpha+')') : '';
  },
  random: function(){
    return '#' + Math.floor( Math.random() * 16777215 ).toString(16);
  },
  decimalToHex: function(decimal){
    var hex = decimal.toString(16);
    if (hex.length == 1) hex = '0' + hex;
    return hex;
  },
  hexToDecimal: function(hex){
    return parseInt(hex,16);
  },
  oppositeColor: function(color) {
    var color = !color.contains("#") ? color : color.replace("#", '');
    return mw.color.decimalToHex(255 - mw.color.hexToDecimal(color.substr(0,2)))
      + mw.color.decimalToHex(255 - mw.color.hexToDecimal(color.substr(2,2)))
      + mw.color.decimalToHex(255 - mw.color.hexToDecimal(color.substr(4,2)));
  }
}
















