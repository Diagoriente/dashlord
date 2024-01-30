(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[319],{21105:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/trends",function(){return r(74650)}])},74650:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return O}});var a=r(85893),n=r(9008),l=r.n(n),o=r(67294),i=r(45697),s=r.n(i);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},u.apply(this,arguments)}function d(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=(0,o.forwardRef)((function(e,t){var r=e.color,a=void 0===r?"currentColor":r,n=e.size,l=void 0===n?24:n,i=d(e,["color","size"]);return o.createElement("svg",u({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),o.createElement("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),o.createElement("polyline",{points:"17 6 23 6 23 12"}))}));c.propTypes={color:s().string,size:s().oneOfType([s().string,s().number])},c.displayName="TrendingUp";var h=c;function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},p.apply(this,arguments)}function v(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var f=(0,o.forwardRef)((function(e,t){var r=e.color,a=void 0===r?"currentColor":r,n=e.size,l=void 0===n?24:n,i=v(e,["color","size"]);return o.createElement("svg",p({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),o.createElement("polyline",{points:"23 18 13.5 8.5 8.5 13.5 1 6"}),o.createElement("polyline",{points:"17 18 23 18 23 12"}))}));f.propTypes={color:s().string,size:s().oneOfType([s().string,s().number])},f.displayName="TrendingDown";var g=f,T=r(74041),y=r(18121),b=r(49384),m={testsslGrade:{title:"SSL"},codescanGrade:{title:"Codescan grade"},dependabotGrade:{title:"Dependabot grade"},httpGrade:{title:"HTTP observatory"},lighthouse_performance:{treshold:.1,title:"Lighthouse Performance"},lighthouse_seo:{treshold:.1,title:"Lighthouse SEO"},lighthouse_pwa:{treshold:.1,title:"Lighthouse PWA"},lighthouse_accessibility:{title:"Lighthouse accessibility"},"lighthouse_best-practices":{treshold:.1,title:"Lighthouse best practices"},nmapGrade:{title:"NMAP grade"},nmapOpenPortsGrade:{title:"NMAP open ports grade"},trackersCount:{title:"Trackers count",reverse:!0},cookiesCount:{title:"Cookies count",reverse:!0},uptime:{treshold:1,title:"uptime"},apdex:{treshold:.05,title:"apDex"},"declaration-a11y":{title:"D\xe9claration a11y"},"declaration-rgpd":{title:"D\xe9claration RGPD"},trivyGrade:{title:"Trivy grade"}},Z=[{name:"trend",label:"Trend",render:function(e){return function(e,t){var r=m[e],a=t[0],n=t[t.length-1];return e.match(/Grade$/)||"declaration-a11y"===e?(0,b.BE)(n)-(0,b.BE)(a):r.reverse?a-n:n-a}(e.key,e.values)>0?(0,a.jsx)(h,{size:40,style:{stroke:"var(--success)",marginRight:10}}):(0,a.jsx)(g,{size:40,style:{stroke:"var(--error)",marginRight:10}})}},{name:"outil",label:"Outil",render:function(e){return m[e.key].title}},{name:"evolution",label:"Evolution",render:function(e){return e.values.map((function(e){return isNaN(e)?e:Math.floor(1e4*e)/1e4})).filter((function(e,t,r){return 0===t||t===r.length-1})).join(" => ")}}],_=function(e){var t=e.trends,r=Object.keys(t);return r.sort(),(0,a.jsxs)("div",{children:[(0,a.jsx)("br",{}),(0,a.jsx)("h3",{children:"Evolutions sur les 30 derniers jours"}),(0,a.jsx)("br",{}),r.map((function(e){var r=function(e){var t={};return Object.keys(e).filter((function(e){return e in m})).forEach((function(r){var a=e[r].map((function(e){return e.date,e.value}));if(a.length>1){var n=a[0],l=a[a.length-1],o=m[r].treshold;(!o||Math.abs(n-l)>(o||0))&&n!==l&&(t[r]=[n,l])}})),t}(t[e]);return Object.keys(r).length?(0,a.jsx)(y.s,{title:(0,b.p5)(e),url:"/url/".concat(encodeURIComponent((0,b.N0)(e))),children:(0,a.jsx)(T.Table,{columns:Z,data:Object.keys(r).map((function(e){return{key:e,values:r[e]}})),rowKey:"key"})},e):null}))]})},j=JSON.parse('{"https://www.fabrique.social.gouv.fr":{"404":[{"date":"2024-01-30T20:19:17.000Z","value":8}],"httpGrade":[{"date":"2024-01-30T20:19:17.000Z","value":"A+"}],"nmapGrade":[{"date":"2024-01-30T20:19:17.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2024-01-30T20:19:17.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2024-01-30T20:19:17.000Z","value":"A"}],"dependabotGrade":[{"date":"2024-01-30T20:19:17.000Z","value":"E"}],"dependabotCount":[{"date":"2024-01-30T20:19:17.000Z","value":26}],"testsslExpireSoon":[{"date":"2024-01-30T20:19:17.000Z","value":false}],"testsslExpireDate":[{"date":"2024-01-30T20:19:17.000Z","value":"2023-07-13T00:27:00.000Z"}],"testsslGrade":[{"date":"2024-01-30T20:19:17.000Z","value":"A+"}],"cookiesGrade":[{"date":"2024-01-30T20:19:17.000Z","value":"B"}],"cookiesCount":[{"date":"2024-01-30T20:19:17.000Z","value":2}],"trackersGrade":[{"date":"2024-01-30T20:19:17.000Z","value":"A"}],"trackersCount":[{"date":"2024-01-30T20:19:17.000Z","value":0}],"lighthouse_performance":[{"date":"2024-01-30T20:19:17.000Z","value":0.25}],"lighthouse_performanceGrade":[{"date":"2024-01-30T20:19:17.000Z","value":"E"}],"lighthouse_accessibility":[{"date":"2024-01-30T20:19:17.000Z","value":0.96}],"lighthouse_accessibilityGrade":[{"date":"2024-01-30T20:19:17.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2024-01-30T20:19:17.000Z","value":0.92}],"lighthouse_best-practicesGrade":[{"date":"2024-01-30T20:19:17.000Z","value":"A"}],"lighthouse_seo":[{"date":"2024-01-30T20:19:17.000Z","value":0.9}],"lighthouse_seoGrade":[{"date":"2024-01-30T20:19:17.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2024-01-30T20:19:17.000Z","value":0.3}],"lighthouse_pwaGrade":[{"date":"2024-01-30T20:19:17.000Z","value":"E"}],"declaration-a11y":[{"date":"2024-01-30T20:19:17.000Z","value":"C"}],"ecoindexGrade":[{"date":"2024-01-30T20:19:17.000Z","value":"E"}]},"https://beta.gouv.fr":{"404":[{"date":"2024-01-30T20:19:17.000Z","value":12}],"httpGrade":[{"date":"2024-01-30T20:19:17.000Z","value":"D+"}],"nmapGrade":[{"date":"2024-01-30T20:19:17.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2024-01-30T20:19:17.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2024-01-30T20:19:17.000Z","value":"A"}],"testsslExpireSoon":[{"date":"2024-01-30T20:19:17.000Z","value":false}],"testsslExpireDate":[{"date":"2024-01-30T20:19:17.000Z","value":"2023-06-23T07:23:00.000Z"}],"testsslGrade":[{"date":"2024-01-30T20:19:17.000Z","value":"A+"}],"cookiesGrade":[{"date":"2024-01-30T20:19:17.000Z","value":"B"}],"cookiesCount":[{"date":"2024-01-30T20:19:17.000Z","value":2}],"trackersGrade":[{"date":"2024-01-30T20:19:17.000Z","value":"A"}],"trackersCount":[{"date":"2024-01-30T20:19:17.000Z","value":0}],"lighthouse_performance":[{"date":"2024-01-30T20:19:17.000Z","value":1}],"lighthouse_performanceGrade":[{"date":"2024-01-30T20:19:17.000Z","value":"A"}],"lighthouse_accessibility":[{"date":"2024-01-30T20:19:17.000Z","value":0.92}],"lighthouse_accessibilityGrade":[{"date":"2024-01-30T20:19:17.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2024-01-30T20:19:17.000Z","value":0.92}],"lighthouse_best-practicesGrade":[{"date":"2024-01-30T20:19:17.000Z","value":"A"}],"lighthouse_seo":[{"date":"2024-01-30T20:19:17.000Z","value":1}],"lighthouse_seoGrade":[{"date":"2024-01-30T20:19:17.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2024-01-30T20:19:17.000Z","value":0.6}],"lighthouse_pwaGrade":[{"date":"2024-01-30T20:19:17.000Z","value":"C"}],"declaration-a11y":[{"date":"2024-01-30T20:19:17.000Z","value":"C"}],"ecoindexGrade":[{"date":"2024-01-30T20:19:17.000Z","value":"B"}]}}'),x=r(59455),O=function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l(),{children:(0,a.jsxs)("title",{children:["Evolutions - ",x.title]})}),(0,a.jsx)(_,{trends:j})]})}},18121:function(e,t,r){"use strict";r.d(t,{s:function(){return p}});var a=r(85893),n=(r(67294),r(94184)),l=r.n(n),o=r(659),i=r(73973),s=r(83206),u=r(41664),d=r.n(u),c=r(75670),h=r.n(c),p=function(e){var t=e.title,r=e.children,n=e.info,u=e.url,c=e.urlText,p=void 0===c?"":c,v=e.className,f=e.isExternal,g=void 0!==f&&f;return(0,a.jsxs)("div",{className:l()(h().container,v),children:[(0,a.jsxs)("div",{className:h().banner,children:[(0,a.jsx)("h5",{className:h().mainTitle,children:t}),n&&(0,a.jsx)(o.Z,{overlay:n,children:(0,a.jsx)(i.Z,{size:20,style:{marginLeft:5,cursor:"pointer"}})}),u&&(g?(0,a.jsx)("a",{style:{float:"right"},href:u,target:"_blank",rel:"noreferrer noopener",children:p}):(0,a.jsx)(d(),{prefetch:!1,href:u,children:(0,a.jsxs)("a",{style:{float:"right"},children:[p,(0,a.jsx)(s.Z,{})]})}))]}),(0,a.jsx)("div",{className:h().body,children:r})]})}},75670:function(e){e.exports={container:"panel_container__s3lQL",banner:"panel_banner__IDWUZ",mainTitle:"panel_mainTitle__N5MWp",body:"panel_body___c3aS"}}},function(e){e.O(0,[717,774,888,179],(function(){return t=21105,e(e.s=t);var t}));var t=e.O();_N_E=t}]);