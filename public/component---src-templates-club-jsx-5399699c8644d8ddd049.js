(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{158:function(e,t,a){"use strict";a.r(t);a(166);var n=a(0),r=a.n(n),l=a(172),c=a(169),i=a(159),s=a(163),o=a(160),m=function(){return r.a.createElement("header",{className:"sticky top-0 py-2 bg-red-600 z-20 shadow-2xl"},r.a.createElement(i.a,null,r.a.createElement("div",{className:"w-full flex flex-row justify-between"},r.a.createElement("div",{className:"w-1/2 flex items-center"},r.a.createElement(o.a,{to:"/"},r.a.createElement("div",{className:"flex items-center py-3"},r.a.createElement("span",{className:"text-base text-white"},r.a.createElement(s.c,null)),r.a.createElement("span",{className:"text-white ml-2 leading-none font-sans text-2xs uppercase tracking-widest"},"GO BACK")))))))},u=a(162),d=function(e){e.en,e.th,e.icon,e.color;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"flex flex-row my-10"},r.a.createElement("div",{className:"flex mr-5",style:{width:"40px"}}),r.a.createElement("div",{className:"flex border-b border-red-600",style:{width:"50px"}})))},p=a(164);t.default=function(e){var t=e.pageContext,a=function(){switch(t.type.toUpperCase()){case"ACADEMIC":return"blue";case"SPORT":return"orange";default:return"gray"}}();return r.a.createElement(l.a,null,r.a.createElement(c.a,{title:t.name}),r.a.createElement(m,null),r.a.createElement("section",{className:"bg-white"},r.a.createElement(i.a,{className:"py-20 border-b border-gray-200"},r.a.createElement(u.a,{en:t.type.toUpperCase(),th:t.name,icon:r.a.createElement(p.a,null),color:a}),r.a.createElement("p",{className:"font-headline text-lg leading-loose text-gray-700"},t.description),r.a.createElement(d,{color:a}))))}},159:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.children,a=e.className;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"mx-8 flex justify-center"},r.a.createElement("div",{className:"w-full md:w-3/4 lg:w-3/5 xl:w-1/2"},r.a.createElement("div",{className:a},t))))}},160:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),l=a(5),c=a.n(l),i=a(40),s=a.n(i);a.d(t,"a",function(){return s.a});a(161);var o=r.a.createContext({});function m(e){var t=e.staticQueryData,a=e.data,n=e.query,l=e.render,c=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,c&&l(c),!c&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var u=function(e){var t=e.data,a=e.query,n=e.render,l=e.children;return r.a.createElement(o.Consumer,null,function(e){return r.a.createElement(m,{data:t,query:a,render:n||l,staticQueryData:e})})};u.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},161:function(e,t,a){var n;e.exports=(n=a(168))&&n.default||n},162:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.en,a=e.th,l=e.icon;e.color;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"flex flex-row"},r.a.createElement("div",{className:"icon flex justify-center items-center text-white bg-red-600 bg-white shadow-xl rounded-full mr-5",style:{width:"40px",height:"40px"}},l),r.a.createElement("div",{className:"flex flex-col"},r.a.createElement("span",{className:"font-headline text-sm tracking-widest leading-none mb-1 text-red-600"},t),r.a.createElement("span",{className:"font-headline text-3xl leading-none mb-10"},a),r.a.createElement("div",{className:"flex border-b border-red-600 mb-10",style:{width:"50px"}}))))}},164:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(){return r.a.createElement("svg",{width:"1.25em",height:"1.25em",viewBox:"0 0 244 141",version:"1.1"},r.a.createElement("g",{id:"Page-1",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},r.a.createElement("g",{id:"chula-engineering-all-white",fill:"#FFFFFF"},r.a.createElement("g",{id:"Group"},r.a.createElement("g",{id:"Path"},r.a.createElement("g",null,r.a.createElement("polygon",{points:"54.2 23 22.5 23.1 70.1 70.7 22.4 118.5 54.2 118.5 101.9 70.5"}),r.a.createElement("polygon",{points:"107.3 112.9 95.9 124.1 16.7 124 0 140.9 110.8 140.9 110.8 112.9"}),r.a.createElement("polygon",{points:"107.3 28.2 95.9 16.9 16.7 17 0 0.1 110.8 0.1 110.8 28.1"})),r.a.createElement("polygon",{points:"220.9 93 144.3 4.3 143.4 3.2 133.2 3.2 133.3 54.1 149.7 70.5 133.2 87 133.2 137.7 155.6 137.7 155.6 48 233.9 137.7 243.4 137.7 243.4 3.2 220.9 3.2"}))))))}},167:function(e){e.exports={data:{site:{siteMetadata:{title:"CU First Date 2019"}}}}},168:function(e,t,a){"use strict";a.r(t);a(41);var n=a(0),r=a.n(n),l=a(5),c=a.n(l),i=a(65),s=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},169:function(e,t,a){"use strict";var n=a(170),r=a(0),l=a.n(r),c=a(5),i=a.n(c),s=a(174),o=a.n(s);function m(e){var t=e.description,a=e.lang,r=e.meta,c=e.title,i=n.data.site,s=t||i.siteMetadata.description;return l.a.createElement(o.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:c},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:s}].concat(r)})}m.defaultProps={lang:"en",meta:[],description:""},m.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.arrayOf(i.a.object),title:i.a.string.isRequired},t.a=m},170:function(e){e.exports={data:{site:{siteMetadata:{title:"CU First Date 2019",description:"The Best Gift for You",author:""}}}}},172:function(e,t,a){"use strict";var n=a(167),r=a(0),l=a.n(r),c=a(5),i=a.n(c),s=a(160),o=(a(173),a(159)),m=function(){return l.a.createElement("footer",{className:"bg-white"},l.a.createElement(o.a,{className:"py-10"},l.a.createElement("p",{className:"text-center font-sans text-2xs uppercase tracking-widest text-gray-600"},l.a.createElement("span",{className:"border-b pb-1 border-white"},"© ",(new Date).getFullYear()," CU First Date"),l.a.createElement("span",{className:"opacity-50 border-b pb-1 border-white"}," ","·"," ",l.a.createElement("a",{href:"https://github.com/fivechjr",className:"border-b pb-1 text-cu border-cu",target:"_blank",rel:"noopener noreferrer"},"Patcharapat Chaijaroen")))))},u=function(e){var t=e.children;return l.a.createElement(s.b,{query:"2924840780",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("main",{className:"antialiased font-sans"},t),l.a.createElement(m,null))},data:n})};u.propTypes={children:i.a.node.isRequired};t.a=u}}]);
//# sourceMappingURL=component---src-templates-club-jsx-5399699c8644d8ddd049.js.map