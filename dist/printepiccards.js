define(["TFS/WorkItemTracking/RestClient","TFS/WorkItemTracking/Contracts","q"],function(e,t,r){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=7)}([function(e,t,r){"use strict";t.__esModule=!0,t.extend=l,t.indexOf=function(e,t){for(var r=0,n=e.length;r<n;r++)if(e[r]===t)return r;return-1},t.escapeExpression=function(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML();if(null==e)return"";if(!e)return e+"";e=""+e}if(!i.test(e))return e;return e.replace(o,a)},t.isEmpty=function(e){return!e&&0!==e||!(!c(e)||0!==e.length)},t.createFrame=function(e){var t=l({},e);return t._parent=e,t},t.blockParams=function(e,t){return e.path=t,e},t.appendContextPath=function(e,t){return(e?e+".":"")+t};var n={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},o=/[&<>"'`=]/g,i=/[&<>"'`=]/;function a(e){return n[e]}function l(e){for(var t=1;t<arguments.length;t++)for(var r in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],r)&&(e[r]=arguments[t][r]);return e}var s=Object.prototype.toString;t.toString=s;var u=function(e){return"function"==typeof e};u(/x/)&&(t.isFunction=u=function(e){return"function"==typeof e&&"[object Function]"===s.call(e)}),t.isFunction=u;var c=Array.isArray||function(e){return!(!e||"object"!=typeof e)&&"[object Array]"===s.call(e)};t.isArray=c},function(e,t,r){"use strict";t.__esModule=!0;var n=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];function o(e,t){var r=t&&t.loc,i=void 0,a=void 0,l=void 0,s=void 0;r&&(i=r.start.line,a=r.end.line,l=r.start.column,s=r.end.column,e+=" - "+i+":"+l);for(var u=Error.prototype.constructor.call(this,e),c=0;c<n.length;c++)this[n[c]]=u[n[c]];Error.captureStackTrace&&Error.captureStackTrace(this,o);try{r&&(this.lineNumber=i,this.endLineNumber=a,Object.defineProperty?(Object.defineProperty(this,"column",{value:l,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:s,enumerable:!0})):(this.column=l,this.endColumn=s))}catch(e){}}o.prototype=new Error,t.default=o,e.exports=t.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.HandlebarsEnvironment=c;var o=r(0),i=n(r(1)),a=r(3),l=r(21),s=n(r(5)),u=r(6);t.VERSION="4.7.7";t.COMPILER_REVISION=8;t.LAST_COMPATIBLE_COMPILER_REVISION=7;t.REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};function c(e,t,r){this.helpers=e||{},this.partials=t||{},this.decorators=r||{},a.registerDefaultHelpers(this),l.registerDefaultDecorators(this)}c.prototype={constructor:c,logger:s.default,log:s.default.log,registerHelper:function(e,t){if("[object Object]"===o.toString.call(e)){if(t)throw new i.default("Arg not supported with multiple helpers");o.extend(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if("[object Object]"===o.toString.call(e))o.extend(this.partials,e);else{if(void 0===t)throw new i.default('Attempting to register a partial called "'+e+'" as undefined');this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,t){if("[object Object]"===o.toString.call(e)){if(t)throw new i.default("Arg not supported with multiple decorators");o.extend(this.decorators,e)}else this.decorators[e]=t},unregisterDecorator:function(e){delete this.decorators[e]},resetLoggedPropertyAccesses:function(){u.resetLoggedProperties()}};var d=s.default.log;t.log=d,t.createFrame=o.createFrame,t.logger=s.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.registerDefaultHelpers=function(e){o.default(e),i.default(e),a.default(e),l.default(e),s.default(e),u.default(e),c.default(e)},t.moveHelperToHooks=function(e,t,r){e.helpers[t]&&(e.hooks[t]=e.helpers[t],r||delete e.helpers[t])};var o=n(r(14)),i=n(r(15)),a=n(r(16)),l=n(r(17)),s=n(r(18)),u=n(r(19)),c=n(r(20))},function(e,t){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){"use strict";t.__esModule=!0;var n=r(0),o={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if("string"==typeof e){var t=n.indexOf(o.methodMap,e.toLowerCase());e=t>=0?t:parseInt(e,10)}return e},log:function(e){if(e=o.lookupLevel(e),"undefined"!=typeof console&&o.lookupLevel(o.level)<=e){var t=o.methodMap[e];console[t]||(t="log");for(var r=arguments.length,n=Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];console[t].apply(console,n)}}};t.default=o,e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.createProtoAccessControl=function(e){var t=Object.create(null);t.constructor=!1,t.__defineGetter__=!1,t.__defineSetter__=!1,t.__lookupGetter__=!1;var r=Object.create(null);return r.__proto__=!1,{properties:{whitelist:n.createNewLookupObject(r,e.allowedProtoProperties),defaultValue:e.allowProtoPropertiesByDefault},methods:{whitelist:n.createNewLookupObject(t,e.allowedProtoMethods),defaultValue:e.allowProtoMethodsByDefault}}},t.resultIsAllowed=function(e,t,r){return a("function"==typeof e?t.methods:t.properties,r)},t.resetLoggedProperties=function(){Object.keys(i).forEach(function(e){delete i[e]})};var n=r(23),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(5)),i=Object.create(null);function a(e,t){return void 0!==e.whitelist[t]?!0===e.whitelist[t]:void 0!==e.defaultValue?e.defaultValue:(function(e){!0!==i[e]&&(i[e]=!0,o.log("error",'Handlebars: Access has been denied to resolve the property "'+e+'" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details'))}(t),!1)}},function(e,t,r){var n,o;n=[r,t,r(8),r(9),r(10)],void 0===(o=function(e,t,n,o,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(11),l=VSS.getExtensionContext(),s=n.getClient(),u={getMenuItems:function(e){if(function(e){var t=e.workItemTypeNames;!t&&e.workItemType&&(t=[e.workItemType]);!t&&e.workItemTypeName&&(t=[e.workItemTypeName]);return t}(e).every(function(e){return["Epic"].indexOf(e)>=0})){var t="Print Epic Card";return e.workItemIds&&e.workItemIds.length>1&&(t="Print Epic Cards"),[{action:function(e){return function(e){return s.getWorkItems(e,void 0,void 0,o.WorkItemExpand.All)}(e.workItemIds||e.ids||[e.workItemId||e.id]).then(function(e){return function(e){return e.map(function(e){var t={};return function(e){return s.getWorkItemType(e.fields["System.TeamProject"],e.fields["System.WorkItemType"])}(e).then(function(r){try{var n=r.color,o=r.icon.url,i=e.fields["System.Tags"],a=c(e.fields["System.AreaPath"]),l=c(e.fields["System.IterationPath"]);"Epic"===e.fields["System.WorkItemType"]&&(t={type:e.fields["System.WorkItemType"],title:e.fields["System.Title"],description:e.fields["System.Description"],id:e.fields["System.Id"],estimate:e.fields["Microsoft.VSTS.Common.BusinessValue"],assigned_to:e.fields["System.AssignedTo"],area_path:a,iteration_path:l,tags:i,border_color:n,icon:o},console.log(e.relations),!0)}catch(e){t={type:"processerror",message:e}}return t})})}(e)}).then(function(e){return i.all(e)}).then(function(e){var t=document.createElement("div");t.setAttribute("class","container border");e.forEach(function(e){var r;0,"processerror"!==e.type?(r=a({number:e.id,style_wiNumber:e.id,work_item_type:e.type,title:e.title,description:e.description,tags:e.tags,border_color:e.border_color,icon:e.icon}),t.innerHTML+=r):t.innerHTML+="<div> ERROR <br>"+e.message+"</div>",t.innerHTML+="<p style='page-break-before: always'><br/>&nbsp;<br/>"}),document.body.appendChild(t),setTimeout(function(){window.focus(),document.execCommand("print",!1,null)||window.print(),t.parentElement.removeChild(t)},1e3)})},icon:"img/icon.png",text:t,title:t}]}return[]}};function c(e){if(e.length>0){var t=e.split("\\");return t[t.length-1]}return e}VSS.register(l.publisherId+"."+l.extensionId+".printepiccards",u)}.apply(t,n))||(e.exports=o)},function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t,r){var n=r(12);e.exports=(n.default||n).template({compiler:[8,">= 4.3.0"],main:function(e,t,r,n,o){var i,a,l=null!=t?t:e.nullContext||{},s=e.hooks.helperMissing,u="function",c=e.escapeExpression,d=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return' <style type="text/css">\r\n         .border-story-'+c(typeof(a=null!=(a=d(r,"style_wiNumber")||(null!=t?d(t,"style_wiNumber"):t))?a:s)===u?a.call(l,{name:"style_wiNumber",hash:{},data:o,loc:{start:{line:2,column:23},end:{line:2,column:41}}}):a)+' {\r\n            border: 2px solid #000000;\r\n        } \r\n        .container {\r\n            width: 750px;\r\n            font-family: sans-serif;\r\n            page-break-inside: avoid;\r\n            margin-left: 15px;\r\n            margin-top: 20px;\r\n        }\r\n        .title-and-description-container {\r\n            margin: 15px 15px 5px 15px;\r\n            display: flex;\r\n            justify-content: space-between;\r\n        }\r\n        .title-text {\r\n            font-size: 20px;\r\n            margin-top: 5px;\r\n            font-weight: bold;\r\n            width: 580px;\r\n        }\r\n        .description {\r\n            margin-top:20px;\r\n        }\r\n        .space-block\r\n        {\r\n            margin-top: 5px;\r\n            margin-left: 15px;\r\n            margin-right: 15px;\r\n            width: 580px;\r\n            display: block;\r\n        }\r\n        .tag-container {\r\n            justify-content: space-between;\r\n            margin-left: 15px;\r\n            margin-right: 15px;\r\n            font-size: 14px;\r\n            background-color: gray;\r\n            border: none;\r\n            color: black;\r\n            padding: 10px 10px;\r\n            text-align: center;\r\n            text-decoration: none;\r\n            display: block;\r\n            border-radius: 10px;\r\n        }\r\n        .vsts-number {\r\n            display: flex;\r\n            font-size: 15px;\r\n        }\r\n        hr {\r\n            display: block;\r\n            height: 1px;\r\n            border: 0;\r\n            border-top: 1px solid #ccc;\r\n            margin: 1em 0;\r\n            padding: 0;\r\n        }\r\n        .icon-image {\r\n            padding: 5px;\r\n            height: 30px;\r\n            width: 30px;\r\n        }\r\n</style>\r\n<div class="container border-story-'+c(typeof(a=null!=(a=d(r,"style_wiNumber")||(null!=t?d(t,"style_wiNumber"):t))?a:s)===u?a.call(l,{name:"style_wiNumber",hash:{},data:o,loc:{start:{line:66,column:35},end:{line:66,column:53}}}):a)+'">\r\n  <div class="title-and-description-container">\r\n    <div class="title-container">\r\n      <div class="vsts-number">\r\n        <img src="'+c(typeof(a=null!=(a=d(r,"icon")||(null!=t?d(t,"icon"):t))?a:s)===u?a.call(l,{name:"icon",hash:{},data:o,loc:{start:{line:70,column:18},end:{line:70,column:26}}}):a)+'" class="icon-image"/>\r\n        <div class="title-text">'+c(typeof(a=null!=(a=d(r,"title")||(null!=t?d(t,"title"):t))?a:s)===u?a.call(l,{name:"title",hash:{},data:o,loc:{start:{line:71,column:32},end:{line:71,column:41}}}):a)+'</div>\r\n        <div class="tag-container">'+c(typeof(a=null!=(a=d(r,"tags")||(null!=t?d(t,"tags"):t))?a:s)===u?a.call(l,{name:"tags",hash:{},data:o,loc:{start:{line:72,column:35},end:{line:72,column:43}}}):a)+'</div>\r\n      </div>\r\n      <hr>\r\n      <div class="description">'+(null!=(i=typeof(a=null!=(a=d(r,"description")||(null!=t?d(t,"description"):t))?a:s)===u?a.call(l,{name:"description",hash:{},data:o,loc:{start:{line:75,column:31},end:{line:75,column:48}}}):a)?i:"")+'</div>\r\n    </div>\r\n  </div>\r\n  <div class="space-block"> <hr></div>\r\n</div>'},useData:!0})},function(e,t,r){e.exports=r(13).default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}t.__esModule=!0;var i=o(r(2)),a=n(r(24)),l=n(r(1)),s=o(r(0)),u=o(r(25)),c=n(r(27));function d(){var e=new i.HandlebarsEnvironment;return s.extend(e,i),e.SafeString=a.default,e.Exception=l.default,e.Utils=s,e.escapeExpression=s.escapeExpression,e.VM=u,e.template=function(t){return u.template(t,e)},e}var f=d();f.create=d,c.default(f),f.default=f,t.default=f,e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0;var n=r(0);t.default=function(e){e.registerHelper("blockHelperMissing",function(t,r){var o=r.inverse,i=r.fn;if(!0===t)return i(this);if(!1===t||null==t)return o(this);if(n.isArray(t))return t.length>0?(r.ids&&(r.ids=[r.name]),e.helpers.each(t,r)):o(this);if(r.data&&r.ids){var a=n.createFrame(r.data);a.contextPath=n.appendContextPath(r.data.contextPath,r.name),r={data:a}}return i(t,r)})},e.exports=t.default},function(e,t,r){"use strict";(function(n){t.__esModule=!0;var o=r(0),i=function(e){return e&&e.__esModule?e:{default:e}}(r(1));t.default=function(e){e.registerHelper("each",function(e,t){if(!t)throw new i.default("Must pass iterator to #each");var r=t.fn,a=t.inverse,l=0,s="",u=void 0,c=void 0;function d(t,n,i){u&&(u.key=t,u.index=n,u.first=0===n,u.last=!!i,c&&(u.contextPath=c+t)),s+=r(e[t],{data:u,blockParams:o.blockParams([e[t],t],[c+t,null])})}if(t.data&&t.ids&&(c=o.appendContextPath(t.data.contextPath,t.ids[0])+"."),o.isFunction(e)&&(e=e.call(this)),t.data&&(u=o.createFrame(t.data)),e&&"object"==typeof e)if(o.isArray(e))for(var f=e.length;l<f;l++)l in e&&d(l,l,l===e.length-1);else if(n.Symbol&&e[n.Symbol.iterator]){for(var p=[],h=e[n.Symbol.iterator](),m=h.next();!m.done;m=h.next())p.push(m.value);for(f=(e=p).length;l<f;l++)d(l,l,l===e.length-1)}else!function(){var t=void 0;Object.keys(e).forEach(function(e){void 0!==t&&d(t,l-1),t=e,l++}),void 0!==t&&d(t,l-1,!0)}();return 0===l&&(s=a(this)),s})},e.exports=t.default}).call(this,r(4))},function(e,t,r){"use strict";t.__esModule=!0;var n=function(e){return e&&e.__esModule?e:{default:e}}(r(1));t.default=function(e){e.registerHelper("helperMissing",function(){if(1!==arguments.length)throw new n.default('Missing helper: "'+arguments[arguments.length-1].name+'"')})},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0;var n=r(0),o=function(e){return e&&e.__esModule?e:{default:e}}(r(1));t.default=function(e){e.registerHelper("if",function(e,t){if(2!=arguments.length)throw new o.default("#if requires exactly one argument");return n.isFunction(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||n.isEmpty(e)?t.inverse(this):t.fn(this)}),e.registerHelper("unless",function(t,r){if(2!=arguments.length)throw new o.default("#unless requires exactly one argument");return e.helpers.if.call(this,t,{fn:r.inverse,inverse:r.fn,hash:r.hash})})},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("log",function(){for(var t=[void 0],r=arguments[arguments.length-1],n=0;n<arguments.length-1;n++)t.push(arguments[n]);var o=1;null!=r.hash.level?o=r.hash.level:r.data&&null!=r.data.level&&(o=r.data.level),t[0]=o,e.log.apply(e,t)})},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("lookup",function(e,t,r){return e?r.lookupProperty(e,t):e})},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0;var n=r(0),o=function(e){return e&&e.__esModule?e:{default:e}}(r(1));t.default=function(e){e.registerHelper("with",function(e,t){if(2!=arguments.length)throw new o.default("#with requires exactly one argument");n.isFunction(e)&&(e=e.call(this));var r=t.fn;if(n.isEmpty(e))return t.inverse(this);var i=t.data;return t.data&&t.ids&&((i=n.createFrame(t.data)).contextPath=n.appendContextPath(t.data.contextPath,t.ids[0])),r(e,{data:i,blockParams:n.blockParams([e],[i&&i.contextPath])})})},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.registerDefaultDecorators=function(e){n.default(e)};var n=function(e){return e&&e.__esModule?e:{default:e}}(r(22))},function(e,t,r){"use strict";t.__esModule=!0;var n=r(0);t.default=function(e){e.registerDecorator("inline",function(e,t,r,o){var i=e;return t.partials||(t.partials={},i=function(o,i){var a=r.partials;r.partials=n.extend({},a,t.partials);var l=e(o,i);return r.partials=a,l}),t.partials[o.args[0]]=o.fn,i})},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.createNewLookupObject=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return n.extend.apply(void 0,[Object.create(null)].concat(t))};var n=r(0)},function(e,t,r){"use strict";function n(e){this.string=e}t.__esModule=!0,n.prototype.toString=n.prototype.toHTML=function(){return""+this.string},t.default=n,e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.checkRevision=function(e){var t=e&&e[0]||1,r=i.COMPILER_REVISION;if(t>=i.LAST_COMPATIBLE_COMPILER_REVISION&&t<=i.COMPILER_REVISION)return;if(t<i.LAST_COMPATIBLE_COMPILER_REVISION){var n=i.REVISION_CHANGES[r],a=i.REVISION_CHANGES[t];throw new o.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+n+") or downgrade your runtime to an older version ("+a+").")}throw new o.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")},t.template=function(e,t){if(!t)throw new o.default("No environment passed to template");if(!e||!e.main)throw new o.default("Unknown template object: "+typeof e);e.main.decorator=e.main_d,t.VM.checkRevision(e.compiler);var r=e.compiler&&7===e.compiler[0];var c={strict:function(e,t,r){if(!(e&&t in e))throw new o.default('"'+t+'" not defined in '+e,{loc:r});return c.lookupProperty(e,t)},lookupProperty:function(e,t){var r=e[t];return null==r?r:Object.prototype.hasOwnProperty.call(e,t)?r:s.resultIsAllowed(r,c.protoAccessControl,t)?r:void 0},lookup:function(e,t){for(var r=e.length,n=0;n<r;n++){var o=e[n]&&c.lookupProperty(e[n],t);if(null!=o)return e[n][t]}},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:n.escapeExpression,invokePartial:function(r,i,a){a.hash&&(i=n.extend({},i,a.hash),a.ids&&(a.ids[0]=!0));r=t.VM.resolvePartial.call(this,r,i,a);var l=n.extend({},a,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),s=t.VM.invokePartial.call(this,r,i,l);null==s&&t.compile&&(a.partials[a.name]=t.compile(r,e.compilerOptions,t),s=a.partials[a.name](i,l));if(null!=s){if(a.indent){for(var u=s.split("\n"),c=0,d=u.length;c<d&&(u[c]||c+1!==d);c++)u[c]=a.indent+u[c];s=u.join("\n")}return s}throw new o.default("The partial "+a.name+" could not be compiled when running in runtime-only mode")},fn:function(t){var r=e[t];return r.decorator=e[t+"_d"],r},programs:[],program:function(e,t,r,n,o){var i=this.programs[e],a=this.fn(e);return t||o||n||r?i=u(this,e,a,t,r,n,o):i||(i=this.programs[e]=u(this,e,a)),i},data:function(e,t){for(;e&&t--;)e=e._parent;return e},mergeIfNeeded:function(e,t){var r=e||t;return e&&t&&e!==t&&(r=n.extend({},t,e)),r},nullContext:Object.seal({}),noop:t.VM.noop,compilerInfo:e.compiler};function f(t){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],n=r.data;f._setup(r),!r.partial&&e.useData&&(n=function(e,t){t&&"root"in t||((t=t?i.createFrame(t):{}).root=e);return t}(t,n));var o=void 0,a=e.useBlockParams?[]:void 0;function l(t){return""+e.main(c,t,c.helpers,c.partials,n,a,o)}return e.useDepths&&(o=r.depths?t!=r.depths[0]?[t].concat(r.depths):r.depths:[t]),(l=d(e.main,l,c,r.depths||[],n,a))(t,r)}return f.isTop=!0,f._setup=function(o){if(o.partial)c.protoAccessControl=o.protoAccessControl,c.helpers=o.helpers,c.partials=o.partials,c.decorators=o.decorators,c.hooks=o.hooks;else{var i=n.extend({},t.helpers,o.helpers);!function(e,t){Object.keys(e).forEach(function(r){var o=e[r];e[r]=function(e,t){var r=t.lookupProperty;return l.wrapHelper(e,function(e){return n.extend({lookupProperty:r},e)})}(o,t)})}(i,c),c.helpers=i,e.usePartial&&(c.partials=c.mergeIfNeeded(o.partials,t.partials)),(e.usePartial||e.useDecorators)&&(c.decorators=n.extend({},t.decorators,o.decorators)),c.hooks={},c.protoAccessControl=s.createProtoAccessControl(o);var u=o.allowCallsToHelperMissing||r;a.moveHelperToHooks(c,"helperMissing",u),a.moveHelperToHooks(c,"blockHelperMissing",u)}},f._child=function(t,r,n,i){if(e.useBlockParams&&!n)throw new o.default("must pass block params");if(e.useDepths&&!i)throw new o.default("must pass parent depths");return u(c,t,e[t],r,0,n,i)},f},t.wrapProgram=u,t.resolvePartial=function(e,t,r){e?e.call||r.name||(r.name=e,e=r.partials[e]):e="@partial-block"===r.name?r.data["partial-block"]:r.partials[r.name];return e},t.invokePartial=function(e,t,r){var a=r.data&&r.data["partial-block"];r.partial=!0,r.ids&&(r.data.contextPath=r.ids[0]||r.data.contextPath);var l=void 0;r.fn&&r.fn!==c&&function(){r.data=i.createFrame(r.data);var e=r.fn;l=r.data["partial-block"]=function(t){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return r.data=i.createFrame(r.data),r.data["partial-block"]=a,e(t,r)},e.partials&&(r.partials=n.extend({},r.partials,e.partials))}();void 0===e&&l&&(e=l);if(void 0===e)throw new o.default("The partial "+r.name+" could not be found");if(e instanceof Function)return e(t,r)},t.noop=c;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(0)),o=function(e){return e&&e.__esModule?e:{default:e}}(r(1)),i=r(2),a=r(3),l=r(26),s=r(6);function u(e,t,r,n,o,i,a){function l(t){var o=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],l=a;return!a||t==a[0]||t===e.nullContext&&null===a[0]||(l=[t].concat(a)),r(e,t,e.helpers,e.partials,o.data||n,i&&[o.blockParams].concat(i),l)}return(l=d(r,l,e,a,n,i)).program=t,l.depth=a?a.length:0,l.blockParams=o||0,l}function c(){return""}function d(e,t,r,o,i,a){if(e.decorator){var l={};t=e.decorator(t,l,r,o&&o[0],i,a,o),n.extend(t,l)}return t}},function(e,t,r){"use strict";t.__esModule=!0,t.wrapHelper=function(e,t){if("function"!=typeof e)return e;return function(){var r=arguments[arguments.length-1];return arguments[arguments.length-1]=t(r),e.apply(this,arguments)}}},function(e,t,r){"use strict";(function(r){t.__esModule=!0,t.default=function(e){var t=void 0!==r?r:window,n=t.Handlebars;e.noConflict=function(){return t.Handlebars===e&&(t.Handlebars=n),e}},e.exports=t.default}).call(this,r(4))}])});
//# sourceMappingURL=printepiccards.js.map