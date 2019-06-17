(function(e){function t(t){for(var n,i,a=t[0],c=t[1],u=t[2],l=0,h=[];l<a.length;l++)i=a[l],o[i]&&h.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(h.length)h.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,i=1;i<r.length;i++){var c=r[i];0!==o[c]&&(n=!1)}n&&(s.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={app:0},s=[];function i(e){return a.p+"js/"+({about:"about"}[e]||e)+"."+{about:"f9920ed2"}[e]+".js"}function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise(function(t,n){r=o[e]=[t,n]});t.push(r[2]=n);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.src=i(e),s=function(t){c.onerror=c.onload=null,clearTimeout(u);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+n+": "+s+")");i.type=n,i.request=s,r[1](i)}o[e]=void 0}};var u=setTimeout(function(){s({type:"timeout",target:c})},12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(t)},a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/",a.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=u;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},2347:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},s=[],i=(r("5c0b"),r("2877")),a={},c=Object(i["a"])(a,o,s,!1,null,null,null),u=c.exports,l=r("8c4f"),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("Foto")],1)},h=[],f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"foto"},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"foto-loading"},[e._v("\n    "+e._s(e.message)+"\n  ")]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.error,expression:"error"}],staticClass:"foto-error"},[e._v("\n    "+e._s(e.error)+"\n  ")]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.success,expression:"success"}],staticClass:"foto-success"},[e._v("\n    "+e._s(e.success)+"\n  ")]),r("div",{staticClass:"foto-container"},[r("video",{staticClass:"foto-video",attrs:{id:"video",autoplay:""}}),r("div",{staticClass:"btn-container"},[r("button",{staticClass:"btn",attrs:{id:"snap"},on:{click:e.drawPhoto}},[r("i",{staticClass:"icon-camera"})]),r("button",{directives:[{name:"show",rawName:"v-show",value:e.devices.length>1,expression:"devices.length > 1"}],staticClass:"btn btn-small",attrs:{type:"button"},on:{click:function(t){return e.selectCamera()}}},[r("i",{staticClass:"icon-loop"})])]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.showAddress,expression:"showAddress"}],staticClass:"foto-draw"},[r("div",{staticClass:"foto-address"},[e._m(0),r("ul",[r("li",[r("strong",[e._v("Dirección:")]),e._v(" "+e._s(e.address.address29)+" "+e._s(e.address.road)+" "+e._s(e.address.neighbourhood)+"\n          ")]),r("li",[r("strong",[e._v("Ciudad:")]),e._v(" "+e._s(e.address.city)+"\n          ")]),r("li",[r("strong",[e._v("Coordenadas:")]),e.address.coordinates?r("ul",[r("li",[r("strong",[e._v("Latitud:")]),e._v(e._s(e.address.coordinates.latitude))]),r("li",[r("strong",[e._v("Longitud:")]),e._v(e._s(e.address.coordinates.longitude))]),r("li",[r("strong",[e._v("Altitud:")]),e._v(e._s(e.address.coordinates.altitude))])]):e._e()])])]),e._m(1),r("div",{staticClass:"foto-options"},[r("button",{staticClass:"pure-button button-xlarge",attrs:{type:"button"},on:{click:function(t){e.showAddress=!1}}},[r("i",{staticClass:"icon-arrow-left"}),e._v(" Atrás")]),r("button",{staticClass:"pure-button button-xlarge pure-button-primary",attrs:{type:"button"},on:{click:e.next}},[e._v("Continuar "),r("i",{staticClass:"icon-arrow-right"})])])])]),e.nextStep?r("div",{staticClass:"foto-user"},[r("form",{staticClass:"foto-form pure-form pure-form-stacked",on:{submit:function(t){return t.preventDefault(),e.send(t)}}},[r("fieldset",[r("legend",[e._v("Complete los siguientes datos:")]),r("div",{staticClass:"foto-input"},[r("label",{attrs:{for:""}},[e._v("Nombre o Álias")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.username,expression:"form.username"}],attrs:{type:"text",required:"",placeholder:"Ejemplo: Maria Flores, juan",maxlength:"30"},domProps:{value:e.form.username},on:{input:function(t){t.target.composing||e.$set(e.form,"username",t.target.value)}}})]),r("div",{staticClass:"foto-input"},[r("label",{attrs:{for:""}},[e._v("Correo electrónico")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],attrs:{type:"email",placeholder:"ejemplo@correo.com",maxlength:"100"},domProps:{value:e.form.email},on:{input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value)}}})]),r("div",{staticClass:"foto-input"},[r("label",{attrs:{for:""}},[e._v("Número de teléfono")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.phone,expression:"form.phone"}],attrs:{type:"tel",maxlength:"15",placeholder:"70070000"},domProps:{value:e.form.phone},on:{input:function(t){t.target.composing||e.$set(e.form,"phone",t.target.value)}}})]),r("div",{staticClass:"foto-options"},[r("button",{staticClass:"pure-button button-xlarge",attrs:{type:"button"},on:{click:e.cancel}},[r("i",{staticClass:"icon-cancel"}),e._v(" Cancelar")]),r("button",{staticClass:"pure-button button-xlarge pure-button-primary",attrs:{type:"submit",disabled:e.sending}},[r("i",{staticClass:"icon-check"}),e._v(" Enviar foto")])])])])]):e._e()])},m=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h2",[r("i",{staticClass:"icon-location"}),e._v(" Ubicación")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"foto-container-canvas"},[r("canvas",{staticClass:"foto-canvas",attrs:{id:"canvas"}}),r("img",{staticClass:"foto-img",attrs:{src:"",id:"foto-img"}})])}],p=(r("28a5"),r("ac6a"),r("96cf"),r("3b8d")),v=r("bc3a"),g=r.n(v),b="https://nominatim.openstreetmap.org/reverse",w="jsonv2";function _(){return new Promise(function(e,t){navigator.geolocation.getCurrentPosition(function(t){var r=t.coords;return e(r)},function(e){return t(e)})})}function y(e){return x.apply(this,arguments)}function x(){return x=Object(p["a"])(regeneratorRuntime.mark(function e(t){var r,n,o,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.latitude,n=t.longitude,e.next=3,g.a.get(b,{params:{format:w,lat:r,lon:n}});case 3:return o=e.sent,s=o.data,e.abrupt("return",s.address);case 6:case"end":return e.stop()}},e)})),x.apply(this,arguments)}function C(){return k.apply(this,arguments)}function k(){return k=Object(p["a"])(regeneratorRuntime.mark(function e(){var t,r,n,o,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:return t=e.sent,e.next=5,y(t);case 5:return r=e.sent,n=t.latitude,o=t.longitude,s=t.altitude,r.coordinates={latitude:n,longitude:o,altitude:s},e.abrupt("return",r);case 9:case"end":return e.stop()}},e)})),k.apply(this,arguments)}var E="https://192.168.28.108:3000",S={data:function(){return{message:null,error:null,success:null,sending:!1,nextStep:!1,showAddress:!1,devices:[],currentStream:null,video:null,address:{},geolocationSupported:"geolocation"in navigator,loading:!1,width:0,height:0,camera:"",form:{neighbourhood:"",city:"",county:"",state:"",postcode:"",country:"",country_code:"",latitude:"",longitude:"",altitude:"",photo:"",username:"",email:"",phone:"",first_name:"",last_name:""},time:6e3}},mounted:function(){this.video=document.getElementById("video"),navigator.mediaDevices&&navigator.mediaDevices.getUserMedia&&this.selectCamera(!0)},methods:{cancel:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];e&&!confirm("¿Está seguro de cancelar el envío?")||(this.showAddress=!1,this.nextStep=!1,this.form={photo:"",username:"",email:""})},empty:function(e){return void 0===e||null===e||0===e.length||/^\s+$/.test(e)},next:function(){var e=document.getElementById("foto-img");if(this.empty(e.src)||"data:,"===e.src)return this.showError("Debe sacar una foto primero, habilite la camara primero"),!1;if(window.localStorage.getItem("app-geofoto-user")){var t=JSON.parse(window.localStorage.getItem("app-geofoto-user"));this.form.username=t.username,this.form.email=t.email,this.form.phone=t.phone}this.nextStep=!0},send:function(){var e=Object(p["a"])(regeneratorRuntime.mark(function e(){var t,r,n,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.empty(this.form.email)||!this.empty(this.form.phone)){e.next=3;break}return this.showError("Debe llenar al menos un correo electrónico o un número de teléfono"),e.abrupt("return",!1);case 3:if(t=document.getElementById("foto-img"),r=Object.assign({},this.address),!this.empty(t.src)&&"data:,"!==t.src){e.next=8;break}return this.showError("Debe sacar una foto antes de envíarla"),e.abrupt("return",!1);case 8:if(console.log("coordinates",r.coordinates),r.coordinates){e.next=12;break}return this.showError("Debe envíar la ubicación de la fotografía"),e.abrupt("return",!1);case 12:return this.sending=!0,r.latitude=r.coordinates.latitude,r.longitude=r.coordinates.longitude,r.altitude=r.coordinates.altitude,r.photo=t.src,r.username=this.form.username,r.email=this.form.email,r.phone=this.form.phone,delete r.coordinates,n={username:this.form.username,email:this.form.email,phone:this.form.phone},window.localStorage.setItem("app-geofoto-user",JSON.stringify(n)),e.prev=23,this.showLoading("Enviando su fotografía, espere por favor..."),e.next=27,g.a.post(E+"/api/register",r);case 27:o=e.sent,this.sending=!1,o.data.id?(this.hideLoading(),this.showSuccess("¡Su foto se envió correctamente!"),this.cancel(!1)):this.showError("No se pudo crear la ubicación"),e.next=36;break;case 32:e.prev=32,e.t0=e["catch"](23),this.sending=!1,this.showError(e.t0);case 36:case"end":return e.stop()}},e,this,[[23,32]])}));function t(){return e.apply(this,arguments)}return t}(),drawPhoto:function(){this.fetchAddress(),this.showAddress=!0;var e=document.getElementById("canvas"),t=document.getElementById("foto-img"),r=e.getContext("2d"),n=document.querySelector("#video");e.height=n.videoHeight,e.width=n.videoWidth,window.video=n,r.drawImage(n,0,0),t.src=e.toDataURL("image/webp")},selectCamera:function(e){var t=this;this.currentStream&&this.stopMediaTracks(this.currentStream);var r={width:{ideal:1280},height:{ideal:720}};e?r.facingMode="environment":(this.camera=this.devices[0].deviceId===this.camera?this.devices[1].deviceId:this.devices[0].deviceId,r.deviceId={exact:this.camera});var n={video:r,audio:!1};navigator.mediaDevices.getUserMedia(n).then(function(e){return t.currentStream=e,t.video.srcObject=e,navigator.mediaDevices.enumerateDevices()}).then(function(e){0===t.devices.length&&t.gotDevices(e)}).catch(function(e){console.error(e)})},stopMediaTracks:function(e){e.getTracks().forEach(function(e){e.stop()})},gotDevices:function(e){var t=[];e.forEach(function(e){if("videoinput"===e.kind){var r={deviceId:e.deviceId,label:e.label.split(" ").reverse()[0]};t.push(r)}}),this.devices[0]&&(this.camera=this.devices[0].deviceId),this.devices=t},fetchAddress:function(){var e=Object(p["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.address={},e.prev=1,this.showLoading("Obteniendo ubicación..."),e.next=5,C();case 5:this.address=e.sent,this.hideLoading(),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](1),this.showError(e.t0);case 12:case"end":return e.stop()}},e,this,[[1,9]])}));function t(){return e.apply(this,arguments)}return t}(),showError:function(e){this.error=e.message||e,this.success=null,setTimeout(this.hideLoading,this.time)},showSuccess:function(e){this.error=null,this.success=e,setTimeout(this.hideLoading,this.time)},showLoading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Cargando...";this.error=null,this.success=null,this.message=e,this.loading=!0},hideLoading:function(){this.loading=!1,this.error=null,this.success=null,this.message=null}},render:function(){return this.$scopedSlots.default({address:this.address,error:this.error,geolocationSupported:this.geolocationSupported,loading:this.loading,fetchAddress:this.fetchAddress})}},j=S,O=(r("e70a"),Object(i["a"])(j,f,m,!1,null,null,null)),A=O.exports,I={name:"home",components:{Foto:A}},N=I,P=Object(i["a"])(N,d,h,!1,null,null,null),D=P.exports;n["a"].use(l["a"]);var L=new l["a"]({routes:[{path:"/",name:"home",component:D},{path:"/about",name:"about",component:function(){return r.e("about").then(r.bind(null,"f820"))}}]}),$=r("9483");Object($["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),n["a"].config.productionTip=!1,new n["a"]({router:L,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var n=r("5e27"),o=r.n(n);o.a},"5e27":function(e,t,r){},e70a:function(e,t,r){"use strict";var n=r("2347"),o=r.n(n);o.a}});
//# sourceMappingURL=app.7fad17c8.js.map