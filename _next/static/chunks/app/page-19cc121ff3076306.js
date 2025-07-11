(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5531:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var l=r(2265);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),a=(...e)=>e.filter((e,t,r)=>!!e&&r.indexOf(e)===t).join(" ");/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var n={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,l.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:o,className:i="",children:s,iconNode:d,...c},u)=>(0,l.createElement)("svg",{ref:u,...n,width:t,height:t,stroke:e,strokeWidth:o?24*Number(r)/Number(t):r,className:a("lucide",i),...c},[...d.map(([e,t])=>(0,l.createElement)(e,t)),...Array.isArray(s)?s:[s]])),s=(e,t)=>{let r=(0,l.forwardRef)(({className:r,...n},s)=>(0,l.createElement)(i,{ref:s,iconNode:t,className:a(`lucide-${o(e)}`,r),...n}));return r.displayName=`${e}`,r}},6840:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var l=r(5531);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=(0,l.Z)("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]])},3849:function(e,t,r){Promise.resolve().then(r.bind(r,8957)),Promise.resolve().then(r.bind(r,3091)),Promise.resolve().then(r.bind(r,3514)),Promise.resolve().then(r.t.bind(r,4724,23))},3514:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return h}});var l=r(7437),o=r(6110),a=r(8793),n=r(3091),i=r(5531);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,i.Z)("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]),d=(0,i.Z)("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);var c=r(6840);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let u=(0,i.Z)("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);function h(){var e,t;let r=(0,a.VY)(),i=(0,a.ff)(),h=(null===(e=r.find(e=>"Total"===e.Category))||void 0===e?void 0:e.Total)||0,f=(null===(t=i.find(e=>"Total"===e.Category))||void 0===t?void 0:t.Total)||0,m=[{title:"home.total-downloads",value:h,icon:s,color:"text-blue-600 dark:text-blue-400"},{title:"home.total-licenses",value:f,icon:d,color:"text-green-600 dark:text-green-400"},{title:"Platforms",value:r.filter(e=>"Platform"===e.Category&&!e.Parent).length,icon:c.Z,color:"text-purple-600 dark:text-purple-400"},{title:"Product Families",value:r.filter(e=>"Family"===e.Category).length,icon:u,color:"text-orange-600 dark:text-orange-400"}];return(0,l.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:m.map((e,t)=>{let r=e.icon;return(0,l.jsxs)(o.Zb,{className:"hover:shadow-lg transition-shadow",children:[(0,l.jsxs)(o.Ol,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[(0,l.jsx)(o.ll,{className:"text-sm font-medium",children:(0,l.jsx)(n.default,{keyPath:e.title})}),(0,l.jsx)(r,{className:"h-4 w-4 ".concat(e.color)})]}),(0,l.jsx)(o.aY,{children:(0,l.jsx)("div",{className:"text-2xl font-bold",children:(0,a.uf)(e.value)})})]},t)})})}}},function(e){e.O(0,[895,724,632,357,971,864,744],function(){return e(e.s=3849)}),_N_E=e.O()}]);