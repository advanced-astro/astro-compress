let l;var E=(...[c={}])=>{Object.entries(c).forEach(([a,r])=>Object.defineProperty(c,a,{value:r===!0?w[a]:c[a]}));const{Path:f,Cache:p,Logger:S,Map:d,Exclude:j,Action:g,CSS:b,HTML:A,Image:n,JavaScript:I,SVG:P,Parser:h}=s(w,c),m=new Set;return typeof f<"u"&&(Array.isArray(f)||f instanceof Set)&&f.forEach(a=>m.add(a)),typeof h=="object"&&Object.entries(h).forEach(([a,r])=>Object.defineProperty(h,a,{value:Array.isArray(r)?r:[r]})),{name:"@playform/compress",hooks:{"astro:config:done":async({config:{outDir:{pathname:a}}})=>{l=(await import("path")).parse(a).dir.replace(/\\/g,"/"),l.startsWith("/")&&(l=l.substring(1))},"astro:build:done":async({dir:a})=>{if(typeof d=="object"){m.size===0&&m.add(a),typeof p=="object"&&p.Search===x&&(p.Search=a);for(const[r,o]of Object.entries({CSS:b,HTML:A,Image:n,JavaScript:I,SVG:P}))if(!(!(o&&d[r])||typeof o!="object")){y=s(g,s(g,{Wrote:async({Buffer:t,Input:i})=>{switch(r){case"CSS":{let e=t.toString();return o.lightningcss&&(e=(await import("lightningcss")).transform(s({code:(await import("buffer")).Buffer.from(e),filename:i},o.lightningcss)).code.toString()),o.csso&&(e=(await import("csso")).minify(e,o.csso).css),e}case"HTML":return await(await import("html-minifier-terser")).minify(t.toString(),o["html-minifier-terser"]);case"JavaScript":return(await(await import("terser")).minify(t.toString(),o.terser)).code??t;case"Image":try{return t instanceof(await import("sharp")).default?await(await import("./Image/Writesharp.js")).default(o.sharp,{Buffer:t,Input:i}):t}catch(e){return console.log(e),t}case"SVG":return(await import("svgo")).optimize(t.toString(),o.svgo).data??t;default:return t}},Fulfilled:async({File:t,Info:{Total:i}})=>t>0?`${(await import("kleur/colors")).green(`\u2713\u2001Successfully compressed a total of ${t} ${r} ${t===1?"file":"files"} for ${(await import("@playform/pipe/Target/Function/Bytes.js")).default(i)}.`)}`:!1})),r==="Image"&&(y=s(y,{Read:async({Input:t,Buffer:i})=>{try{(await import("sharp")).default.cache(!1);const{format:e}=await(await import("sharp")).default(t).metadata(),u={animated:e==="webp"||e==="gif"};return(await import("sharp")).default(t,typeof n=="object"&&typeof n.sharp=="object"&&typeof n.sharp.sharp=="object"?s(u,n.sharp?.sharp):u)}catch(e){return console.log(e),i}}}));for(const t of m)await(await import("./Pipe.js")).default(p,S,t,d[r]??"**/*",j,y)}}}}}};const{default:w}=await import("../Variable/Option.js"),{default:{Cache:{Search:x}}}=await import("@playform/pipe/Target/Variable/Option.js"),{default:s}=await import("./Merge.js");let y;export{w as Default,s as Merge,x as Search,l as System,y as _Action,E as default};
