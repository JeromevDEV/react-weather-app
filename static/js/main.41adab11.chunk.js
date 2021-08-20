(this["webpackJsonpreact-weather-app"]=this["webpackJsonpreact-weather-app"]||[]).push([[0],{35:function(e,t,c){},37:function(e,t,c){},48:function(e,t,c){"use strict";c.r(t);var n,a,i=c(1),r=c.n(i),s=c(25),j=c.n(s),o=(c(35),c(18)),l=c.n(o),b=c(26),d=c(9),u=(c(37),c(11)),h=c(10),O=c(14),m=c(4),x=c(12),p=c(5),f=c(0);function w(e){var t=e.weatherData,c=x.a.div(n||(n=Object(u.a)(["color: whitesmoke;"])));console.log(t);var a=null;return a="Thunderstorm"===t.weather[0].main?Object(f.jsx)(m.a,{icon:p.a}):"Drizzle"===t.weather[0].main?Object(f.jsx)(m.a,{icon:p.c}):"Rain"===t.weather[0].main?Object(f.jsx)(m.a,{icon:p.d}):"Snow"===t.weather[0].main?Object(f.jsx)(m.a,{icon:p.f}):"Clear"===t.weather[0].main?Object(f.jsx)(m.a,{icon:p.g}):"Clouds"===t.weather[0].main?Object(f.jsx)(m.a,{icon:p.b}):Object(f.jsx)(m.a,{icon:p.e}),Object(f.jsx)("div",{className:"main",children:Object(f.jsxs)(h.a,{style:{width:"18rem"},children:[Object(f.jsx)(h.a.Img,{variant:"top",src:""}),Object(f.jsxs)(h.a.Body,{children:[Object(f.jsxs)(h.a.Title,{children:[t.name," - ",t.sys.country]}),Object(f.jsxs)(h.a.Text,{children:[Object(f.jsxs)("p",{className:"temp",children:["Temperature: ",t.main.temp," \xb0C"]}),Object(f.jsxs)("p",{children:["Min: ",t.main.temp_min]}),Object(f.jsxs)("p",{children:["Max: ",t.main.temp_max]}),Object(f.jsxs)("p",{className:"temp",children:["Humidity: ",t.main.humidity," %"]}),Object(f.jsxs)("p",{className:"temp",children:["Lat: ",t.coord.lat," - Lon: ",t.coord.lon]}),Object(f.jsxs)("p",{className:"sunrise-sunset",children:["Sunrise: ",new Date(1e3*t.sys.sunrise).toLocaleTimeString("en-US")]}),Object(f.jsxs)("p",{className:"sunrise-sunset",children:["Sunset: ",new Date(1e3*t.sys.sunset).toLocaleTimeString("en-US")]}),Object(f.jsx)(c,{style:{fontSize:30,marginTop:15,color:"black"},children:a})]}),Object(f.jsx)(O.a,{variant:"primary",onClick:function(){window.location.reload()},children:Object(f.jsx)(m.a,{icon:p.h})})]})]})})}var g=function(e){var t=e.dt,c=e.temp_min,n=e.temp_max,i=e.humidity,r=e.temp,s=e.main,j=e.city,o=e.country,l=x.a.div(a||(a=Object(u.a)(["color: whitesmoke;"]))),b=null;b="Thunderstorm"===s?Object(f.jsx)(m.a,{icon:p.a}):"Drizzle"===s?Object(f.jsx)(m.a,{icon:p.c}):"Rain"===s?Object(f.jsx)(m.a,{icon:p.d}):"Snow"===s?Object(f.jsx)(m.a,{icon:p.f}):"Clear"===s?Object(f.jsx)(m.a,{icon:p.g}):"Clouds"===s?Object(f.jsx)(m.a,{icon:p.b}):Object(f.jsx)(m.a,{icon:p.e});var d=new Date(t);return Object(f.jsx)("div",{className:"main",children:Object(f.jsxs)(h.a,{style:{width:"18rem"},children:[Object(f.jsx)(h.a.Header,{children:Object(f.jsx)(l,{style:{fontSize:30,marginTop:15,color:"black"},children:b})}),Object(f.jsxs)(h.a.Body,{children:[Object(f.jsxs)(h.a.Title,{children:[j," - ",o]}),Object(f.jsx)("p",{children:Object(f.jsxs)("b",{children:[d.toLocaleDateString()," - ",d.toLocaleTimeString()]})}),Object(f.jsxs)("p",{children:["Min: ",c]}),Object(f.jsxs)("p",{children:["Max: ",n]}),Object(f.jsxs)("p",{children:["Humidity: ",i," %"]}),Object(f.jsxs)("p",{children:["Temperature: ",r," \xb0C"]})]})]})})},y=c(49),v=c(50),S=c(51),C=function(e){var t=e.onSearch,c=Object(i.useState)(""),n=Object(d.a)(c,2),a=n[0],r=n[1];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(y.a,{children:Object(f.jsx)(v.a,{children:Object(f.jsx)("h1",{children:"Search a city"})})}),Object(f.jsxs)(y.a,{children:[Object(f.jsx)(v.a,{xl:5,children:Object(f.jsx)(S.a,{placeholder:"Enter city",onChange:function(e){return r(e.target.value)},value:a})}),Object(f.jsx)(v.a,{children:Object(f.jsx)(O.a,{onClick:function(){return t(a)},children:"Check Weather"})})]})]})},T=function(e){var t=e.weathers;return console.log("e"),console.log(t),Object(f.jsx)(y.a,{children:t.list.map((function(e){var c=e.dt,n=e.main,a=e.weather;return Object(f.jsx)(v.a,{"col-sm":!0,children:Object(f.jsx)(g,{dt:1e3*c,temp_min:n.temp_min,temp_max:n.temp_max,humidity:n.humidity,temp:n.temp,main:a[0].main,city:t.city.name,country:t.city.country})},c)}))})},D=function(e){var t=Object(i.useState)(null),c=Object(d.a)(t,2),n=c[0],a=c[1],r=Object(i.useState)(null),s=Object(d.a)(r,2),j=s[0],o=s[1],l=Object(i.useState)(null),b=Object(d.a)(l,2),u=b[0],h=b[1],O=Object(i.useState)(e),m=Object(d.a)(O,2),x=m[0],p=m[1];return Object(i.useEffect)((function(){x&&(h(!0),a(null),o(null),fetch(x).then((function(e){return e.json()})).then((function(e){h(!1),e.cod>=400?o(e.message):a(e)})).catch((function(e){h(!1),o(e)})))}),[x]),{dataF:n,error:j,isLoading:u,setUrl:p}};c(47);function L(){var e=Object(i.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1],a=Object(i.useState)([]),r=Object(d.a)(a,2),s=r[0],j=r[1],o=Object(i.useState)([]),u=Object(d.a)(o,2),h=u[0],O=u[1],m=D(),x=m.dataF,p=m.error,g=m.isLoading,y=m.setUrl;return Object(i.useEffect)((function(){(function(){var e=Object(b.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return navigator.geolocation.getCurrentPosition((function(e){n(e.coords.latitude),j(e.coords.longitude)})),e.next=3,fetch("".concat("https://api.openweathermap.org/data/2.5","/weather/?lat=").concat(c,"&lon=").concat(s,"&units=metric&APPID=").concat("592fb0d883752d9c7bac8395d15b5a4f")).then((function(e){return e.json()})).then((function(e){O(e)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c,s]),Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("div",{className:"container",children:"undefined"!=typeof h.main?Object(f.jsx)(w,{weatherData:h}):Object(f.jsx)("div",{})}),Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)(C,{onSearch:function(e){return y("".concat("https://api.openweathermap.org/data/2.5","/forecast?q=").concat(e,"&APPID=").concat("592fb0d883752d9c7bac8395d15b5a4f","&units=metric"))}}),p?Object(f.jsxs)("h2",{children:["Error when fetching: ",p]}):!x&&g?Object(f.jsx)("h2",{children:"LOADING..."}):x?Object(f.jsx)(T,{weathers:x}):null]})]})}var N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,52)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),i(e),r(e)}))};j.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(L,{})}),document.getElementById("root")),N()}},[[48,1,2]]]);
//# sourceMappingURL=main.41adab11.chunk.js.map