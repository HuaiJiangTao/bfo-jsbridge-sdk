/* Build Time: 2019-09-16 17:38:13 */
!function(e,o){var t="function"==typeof define,r="undefined"!=typeof module&&module.exports;t?define(o):r?module.exports=o():this._SG_BFO_callNativeMethod_=o()}(0,function(){var a=window.semobJSBridge;if(a){var l=(new Date).getTime()%864e5*1e4,c={};return a&&(a.callJSCallback=function(e,o,t,r){if(e){var a=c[e];a&&(a({code:o,message:t||"",data:decodeURIComponent(r||"")}),a=null,delete c[e])}}),function(e,o,t){var r="";"function"==typeof(o=o||"")?(t=o,o=""):"[object Object]"===Object.prototype.toString.call(o)?o=JSON.stringify(o):o&&console.error("[Error]_SG_BFO_callNativeMethod_:参数格式应为(methodName, params, callback)，params应为Object或可省略不传。"),t&&"function"!=typeof t?console.error("[Error]_SG_BFO_callNativeMethod_:参数格式应为(methodName, params, callback)，params和callback为可选参数。"):t=t||function(){},a?"function"==typeof a.callNativeMethod?(r=(l++).toString(),c[r]=t,a.callNativeMethod(e,o,r)):a.callNativeMethod?console.error("[Error]_SG_BFO_callNativeMethod_:semobJSBridge.callNativeMethod不是一个Function。"):console.error("[Error]_SG_BFO_callNativeMethod_:semobJSBridge.callNativeMethod不存在。"):console.error("[Error]_SG_BFO_callNativeMethod_:检测不到客户端类semobJSBridge。")}}console.warn("[Error]:检测不到客户端类semobJSBridge。")});