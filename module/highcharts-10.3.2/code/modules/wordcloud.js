/*
 Highcharts JS v10.3.2 (2022-11-28)

 (c) 2016-2021 Highsoft AS
 Authors: Jon Arild Nygard

 License: www.highcharts.com/license
*/
(function(c){"object"===typeof module&&module.exports?(c["default"]=c,module.exports=c):"function"===typeof define&&define.amd?define("highcharts/modules/wordcloud",["highcharts"],function(k){c(k);c.Highcharts=k;return c}):c("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(c){function k(c,g,f,p){c.hasOwnProperty(g)||(c[g]=p.apply(null,f),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:g,module:c[g]}})))}c=c?c._modules:{};k(c,
"Series/DrawPointUtilities.js",[c["Core/Utilities.js"]],function(c){return{draw:function(c,f){var p=f.animatableAttribs,m=f.onComplete,l=f.css,e=f.renderer,g=c.series&&c.series.chart.hasRendered?void 0:c.series&&c.series.options.animation,h=c.graphic;f.attribs=f.attribs||{};f.attribs["class"]=c.getClassName();if(c.shouldDraw())h||(c.graphic=h="text"===f.shapeType?e.text():e[f.shapeType](f.shapeArgs||{}),h.add(f.group)),l&&h.css(l),h.attr(f.attribs).animate(p,f.isNew?!1:g,m);else if(h){var k=function(){c.graphic=
h=h&&h.destroy();"function"===typeof m&&m()};Object.keys(p).length?h.animate(p,void 0,function(){return k()}):k()}}}});k(c,"Series/Wordcloud/WordcloudPoint.js",[c["Core/Series/SeriesRegistry.js"],c["Core/Utilities.js"]],function(c,g){var f=this&&this.__extends||function(){var c=function(m,f){c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,f){c.__proto__=f}||function(c,f){for(var e in f)f.hasOwnProperty(e)&&(c[e]=f[e])};return c(m,f)};return function(f,g){function e(){this.constructor=
f}c(f,g);f.prototype=null===g?Object.create(g):(e.prototype=g.prototype,new e)}}();g=g.extend;c=function(c){function g(){var f=null!==c&&c.apply(this,arguments)||this;f.dimensions=void 0;f.options=void 0;f.polygon=void 0;f.rect=void 0;f.series=void 0;return f}f(g,c);g.prototype.isValid=function(){return!0};return g}(c.seriesTypes.column.prototype.pointClass);g(c.prototype,{weight:1});return c});k(c,"Series/Wordcloud/WordcloudUtils.js",[c["Core/Globals.js"],c["Core/Utilities.js"]],function(c,g){function f(a,
b){return!(b.left>a.right||b.right<a.left||b.top>a.bottom||b.bottom<a.top)}function k(a,b){var d=b[0]-a[0];a=b[1]-a[1];return[[-a,d],[a,-d]]}function m(a){var b=a.axes||[];if(!b.length){b=[];var d=d=a.concat([a[0]]);d.reduce(function(a,d){var c=k(a,d)[0];A(b,function(a){return a[0]===c[0]&&a[1]===c[1]})||b.push(c);return d});a.axes=b}return b}function l(a,b){a=a.map(function(a){return a[0]*b[0]+a[1]*b[1]});return{min:Math.min.apply(this,a),max:Math.max.apply(this,a)}}function e(a,b){var d=m(a),c=
m(b);d=d.concat(c);return!A(d,function(d){var c=l(a,d);d=l(b,d);return!!(d.min>c.max||d.max<c.min)})}function H(a,b){var d=!1,c=a.rect,z=a.polygon,g=a.lastCollidedWith,h=function(b){var d=f(c,b.rect);d&&(a.rotation%90||b.rotation%90)&&(d=e(z,b.polygon));return d};g&&((d=h(g))||delete a.lastCollidedWith);d||(d=!!A(b,function(b){var d=h(b);d&&(a.lastCollidedWith=b);return d}));return d}function h(a,b){b=4*a;var d=Math.ceil((Math.sqrt(b)-1)/2),c=2*d+1,f=Math.pow(c,2),e=!1;--c;1E4>=a&&("boolean"===typeof e&&
b>=f-c&&(e={x:d-(f-b),y:-d}),f-=c,"boolean"===typeof e&&b>=f-c&&(e={x:-d,y:-d+(f-b)}),f-=c,"boolean"===typeof e&&(e=b>=f-c?{x:-d+(f-b),y:d}:{x:d,y:d-(f-b-c)}),e.x*=5,e.y*=5);return e}function q(a,b){var d=b.width/2,c=-(b.height/2),f=b.height/2;return!(-(b.width/2)<a.left&&d>a.right&&c<a.top&&f>a.bottom)}function u(a,b,d){return d.map(function(d){return[d[0]+a,d[1]+b]})}function w(a,b){b=n(b)?b:14;b=Math.pow(10,b);return Math.round(a*b)/b}function v(a,b){var d=a[0];a=a[1];var c=x*-b;b=Math.cos(c);
c=Math.sin(c);return[w(d*b-a*c),w(d*c+a*b)]}function B(a,b,d){a=v([a[0]-b[0],a[1]-b[1]],d);return[a[0]+b[0],a[1]+b[1]]}var x=c.deg2rad,D=g.extend,A=g.find,n=g.isNumber,C=g.isObject,y=g.merge;return{archimedeanSpiral:function(a,b){var d=b.field;b=!1;d=d.width*d.width+d.height*d.height;var c=.8*a;1E4>=a&&(b={x:c*Math.cos(c),y:c*Math.sin(c)},Math.min(Math.abs(b.x),Math.abs(b.y))<d||(b=!1));return b},extendPlayingField:function(a,b){if(C(a)&&C(b)){var d=b.bottom-b.top;var c=b.right-b.left;b=a.ratioX;
var f=a.ratioY;d=c*b>d*f?c:d;a=y(a,{width:a.width+d*b*2,height:a.height+d*f*2})}return a},getBoundingBoxFromPolygon:function(a){return a.reduce(function(a,d){var b=d[0];d=d[1];a.left=Math.min(b,a.left);a.right=Math.max(b,a.right);a.bottom=Math.max(d,a.bottom);a.top=Math.min(d,a.top);return a},{left:Number.MAX_VALUE,right:-Number.MAX_VALUE,bottom:-Number.MAX_VALUE,top:Number.MAX_VALUE})},getPlayingField:function(a,b,d){d=d.reduce(function(a,b){b=b.dimensions;var d=Math.max(b.width,b.height);a.maxHeight=
Math.max(a.maxHeight,b.height);a.maxWidth=Math.max(a.maxWidth,b.width);a.area+=d*d;return a},{maxHeight:0,maxWidth:0,area:0});d=Math.max(d.maxHeight,d.maxWidth,.85*Math.sqrt(d.area));var c=a>b?a/b:1;a=b>a?b/a:1;return{width:d*c,height:d*a,ratioX:c,ratioY:a}},getPolygon:function(a,b,d,c,f){var e=[a,b],g=a-d/2;a+=d/2;d=b-c/2;b+=c/2;return[[g,d],[a,d],[a,b],[g,b]].map(function(a){return B(a,e,-f)})},getRandomPosition:function(a){return Math.round(a*(Math.random()+.5)/2)},getRotation:function(a,b,d,c){var f=
!1;n(a)&&n(b)&&n(d)&&n(c)&&0<a&&-1<b&&c>d&&(f=d+b%a*((c-d)/(a-1||1)));return f},getScale:function(a,b,d){var c=2*Math.max(Math.abs(d.top),Math.abs(d.bottom));d=2*Math.max(Math.abs(d.left),Math.abs(d.right));return Math.min(0<d?1/d*a:1,0<c?1/c*b:1)},getSpiral:function(a,b){var c,f=[];for(c=1;1E4>c;c++)f.push(a(c,b));return function(a){return 1E4>=a?f[a-1]:!1}},intersectionTesting:function(a,b){var c=b.placed,f=b.field,e=b.rectangle,g=b.polygon,h=b.spiral,m=1,k={x:0,y:0},n=a.rect=D({},e);a.polygon=
g;for(a.rotation=b.rotation;!1!==k&&(H(a,c)||q(n,f));)k=h(m),C(k)&&(n.left=e.left+k.x,n.right=e.right+k.x,n.top=e.top+k.y,n.bottom=e.bottom+k.y,a.polygon=u(k.x,k.y,g)),m++;return k},isPolygonsColliding:e,isRectanglesIntersecting:f,rectangularSpiral:function(a,b){a=h(a,b);b=b.field;a&&(a.x*=b.ratioX,a.y*=b.ratioY);return a},rotate2DToOrigin:v,rotate2DToPoint:B,squareSpiral:h,updateFieldBoundaries:function(a,b){if(!n(a.left)||a.left>b.left)a.left=b.left;if(!n(a.right)||a.right<b.right)a.right=b.right;
if(!n(a.top)||a.top>b.top)a.top=b.top;if(!n(a.bottom)||a.bottom<b.bottom)a.bottom=b.bottom;return a}}});k(c,"Series/Wordcloud/WordcloudSeries.js",[c["Series/DrawPointUtilities.js"],c["Core/Globals.js"],c["Core/Series/Series.js"],c["Core/Series/SeriesRegistry.js"],c["Core/Utilities.js"],c["Series/Wordcloud/WordcloudPoint.js"],c["Series/Wordcloud/WordcloudUtils.js"]],function(c,g,f,k,m,l,e){var p=this&&this.__extends||function(){var a=function(b,c){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&
function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])};return a(b,c)};return function(b,c){function d(){this.constructor=b}a(b,c);b.prototype=null===c?Object.create(c):(d.prototype=c.prototype,new d)}}(),h=g.noop,q=k.seriesTypes.column,u=m.extend,w=m.isArray,v=m.isNumber,B=m.isObject,x=m.merge;m=e.archimedeanSpiral;var D=e.extendPlayingField,A=e.getBoundingBoxFromPolygon,n=e.getPlayingField,C=e.getPolygon,y=e.getRandomPosition,a=e.getRotation,b=e.getScale,d=e.getSpiral,
F=e.intersectionTesting,z=e.isPolygonsColliding,I=e.rectangularSpiral,J=e.rotate2DToOrigin,K=e.rotate2DToPoint,L=e.squareSpiral,M=e.updateFieldBoundaries;e=function(a){function e(){var b=null!==a&&a.apply(this,arguments)||this;b.data=void 0;b.options=void 0;b.points=void 0;return b}p(e,a);e.prototype.bindAxes=function(){var a={endOnTick:!1,gridLineWidth:0,lineWidth:0,maxPadding:0,startOnTick:!1,title:void 0,tickPositions:[]};f.prototype.bindAxes.call(this);u(this.yAxis.options,a);u(this.xAxis.options,
a)};e.prototype.pointAttribs=function(a,b){a=g.seriesTypes.column.prototype.pointAttribs.call(this,a,b);delete a.stroke;delete a["stroke-width"];return a};e.prototype.deriveFontSize=function(a,b,c){a=v(a)?a:0;b=v(b)?b:1;c=v(c)?c:1;return Math.floor(Math.max(c,a*b))};e.prototype.drawPoints=function(){var a=this,f=a.hasRendered,e=a.xAxis,g=a.yAxis,k=a.group,h=a.options,m=h.animation,N=h.allowExtendPlayingField,p=a.chart.renderer,l=p.text().add(k),q=[],w=a.placementStrategy[h.placementStrategy],y=h.rotation,
z=a.points.map(function(a){return a.weight}),x=Math.max.apply(null,z),E=a.points.concat().sort(function(a,b){return b.weight-a.weight});a.group.attr({scaleX:1,scaleY:1});E.forEach(function(b){var c=a.deriveFontSize(1/x*b.weight,h.maxFontSize,h.minFontSize);c=u({fontSize:c+"px"},h.style);l.css(c).attr({x:0,y:0,text:b.name});c=l.getBBox(!0);b.dimensions={height:c.height,width:c.width}});var t=n(e.len,g.len,E);var G=d(a.spirals[h.spiral],{field:t});E.forEach(function(b){var d=a.deriveFontSize(1/x*b.weight,
h.maxFontSize,h.minFontSize);d=u({fontSize:d+"px"},h.style);var e=w(b,{data:E,field:t,placed:q,rotation:y}),g=u(a.pointAttribs(b,b.selected&&"select"),{align:"center","alignment-baseline":"middle","dominant-baseline":"middle",x:e.x,y:e.y,text:b.name,rotation:v(e.rotation)?e.rotation:void 0}),n=C(e.x,e.y,b.dimensions.width,b.dimensions.height,e.rotation),l=A(n),r=F(b,{rectangle:l,polygon:n,field:t,placed:q,spiral:G,rotation:e.rotation});!r&&N&&(t=D(t,l),r=F(b,{rectangle:l,polygon:n,field:t,placed:q,
spiral:G,rotation:e.rotation}));B(r)?(g.x=(g.x||0)+r.x,g.y=(g.y||0)+r.y,l.left+=r.x,l.right+=r.x,l.top+=r.y,l.bottom+=r.y,t=M(t,l),q.push(b),b.isNull=!1,b.isInside=!0):b.isNull=!0;if(m){var O={x:g.x,y:g.y};f?(delete g.x,delete g.y):(g.x=0,g.y=0)}c.draw(b,{animatableAttribs:O,attribs:g,css:d,group:k,renderer:p,shapeArgs:void 0,shapeType:"text"})});l=l.destroy();e=b(e.len,g.len,t);a.group.attr({scaleX:e,scaleY:e})};e.prototype.hasData=function(){return B(this)&&!0===this.visible&&w(this.points)&&0<
this.points.length};e.prototype.getPlotBox=function(){var a=this.chart,b=a.inverted,c=this[b?"yAxis":"xAxis"];b=this[b?"xAxis":"yAxis"];return{translateX:(c?c.left:a.plotLeft)+(c?c.len:a.plotWidth)/2,translateY:(b?b.top:a.plotTop)+(b?b.len:a.plotHeight)/2,scaleX:1,scaleY:1}};e.defaultOptions=x(q.defaultOptions,{allowExtendPlayingField:!0,animation:{duration:500},borderWidth:0,clip:!1,colorByPoint:!0,cropThreshold:Infinity,minFontSize:1,maxFontSize:25,placementStrategy:"center",rotation:{from:0,orientations:2,
to:90},showInLegend:!1,spiral:"rectangular",style:{fontFamily:"sans-serif",fontWeight:"900",whiteSpace:"nowrap"},tooltip:{followPointer:!0,pointFormat:'<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.weight}</b><br/>'}});return e}(q);u(e.prototype,{animate:h,animateDrilldown:h,animateDrillupFrom:h,pointClass:l,setClip:h,placementStrategy:{random:function(b,c){var d=c.field;c=c.rotation;return{x:y(d.width)-d.width/2,y:y(d.height)-d.height/2,rotation:a(c.orientations,b.index,
c.from,c.to)}},center:function(b,c){c=c.rotation;return{x:0,y:0,rotation:a(c.orientations,b.index,c.from,c.to)}}},pointArrayMap:["weight"],spirals:{archimedean:m,rectangular:I,square:L},utils:{extendPlayingField:D,getRotation:a,isPolygonsColliding:z,rotate2DToOrigin:J,rotate2DToPoint:K}});k.registerSeriesType("wordcloud",e);"";return e});k(c,"masters/modules/wordcloud.src.js",[],function(){})});
//# sourceMappingURL=wordcloud.js.map