const t={WriteSharp:(await import("./Image/Writesharp.js")).default,Merge:(await import("./Merge.js")).default,Option:(await import("../Variable/Option.js")).default,Pipe:(await import("@playform/pipe")).default,Bytes:(await import("@playform/pipe/Target/Function/Bytes.js")).default,"Option/Pipe":await import("@playform/pipe/Target/Variable/Option.js"),buffer:await import("buffer"),csso:await import("csso"),"html-minifier-terser":await import("html-minifier-terser"),"kleur/colors":await import("kleur/colors"),lightningcss:await import("lightningcss"),sharp:(await import("sharp")).default,svgo:await import("svgo"),terser:await import("terser"),path:await import("path")};let l;var A=(...[c={}])=>{Object.entries(c).forEach(([r,o])=>Object.defineProperty(c,r,{value:o===!0?t.Option[r]:c[r]}));const{Path:p,Cache:f,Logger:w,Map:g,Exclude:S,Action:d,CSS:b,HTML:j,Image:n,JavaScript:P,SVG:I,Parser:y}=t.Merge(t.Option,c),m=new Set;return typeof p<"u"&&(Array.isArray(p)||p instanceof Set)&&p.forEach(r=>m.add(r)),typeof y=="object"&&Object.entries(y).forEach(([r,o])=>Object.defineProperty(y,r,{value:Array.isArray(o)?o:[o]})),{name:"@playform/compress",hooks:{"astro:config:done":async({config:{outDir:{pathname:r}}})=>{l=t.path.parse(r).dir.replace(/\\/g,"/"),l.startsWith("/")&&(l=l.substring(1))},"astro:build:done":async({dir:r})=>{if(console.log(`
${t["kleur/colors"].bgGreen(t["kleur/colors"].black("Compress:"))}`),typeof g=="object"){m.size===0&&m.add(r),typeof f=="object"&&f.Search===O&&(f.Search=r);for(const[o,i]of Object.entries({CSS:b,HTML:j,Image:n,JavaScript:P,SVG:I}))if(!(!(i&&g[o])||typeof i!="object")){h=t.Merge(d,t.Merge(d,{Wrote:async({Buffer:e,Input:s})=>{switch(o){case"CSS":{let a=e.toString();return i.lightningcss&&(a=t.lightningcss.transform(t.Merge({code:t.buffer.Buffer.from(a),filename:s},i.lightningcss)).code.toString()),i.csso&&(a=t.csso.minify(a,i.csso).css),a}case"HTML":return await t["html-minifier-terser"].minify(e.toString(),i["html-minifier-terser"]);case"JavaScript":return(await t.terser.minify(e.toString(),i.terser)).code??e;case"Image":try{return e instanceof t.sharp?await t.WriteSharp(i.sharp,{Buffer:e,Input:s}):e}catch(a){return console.log(a),e}case"SVG":return t.svgo.optimize(e.toString(),i.svgo).data??e;default:return e}},Fulfilled:async({File:e,Info:{Total:s}})=>e>0?`${t["kleur/colors"].green(`\u2705\u2001Successfully compressed a total of ${e} ${o} ${e===1?"file":"files"} for ${t.Bytes(s)}.`)}`:!1})),o==="Image"&&(h=t.Merge(h,{Read:async({Input:e,Buffer:s})=>{try{t.sharp.cache(!1);const{format:a}=await t.sharp(e).metadata(),u={animated:a==="webp"||a==="gif"};return t.sharp(e,typeof n=="object"&&typeof n.sharp=="object"&&typeof n.sharp.sharp=="object"?t.Merge(u,n.sharp?.sharp):u)}catch(a){return console.log(a),s}}}));for(const e of m)await(await(await(await new t.Pipe(f,w).In(e)).By(g[o]??"**/*")).Not(S)).Pipe(h)}}}}}};const{default:{Cache:{Search:O}}}=t["Option/Pipe"];let h;export{t as Import,O as Search,l as System,h as _Action,A as default};
