var T=(r={})=>{for(const a in r)Object.prototype.hasOwnProperty.call(r,a)&&r[a]===!0&&(r[a]=y[a]);const{Path:i,Cache:s,Logger:S,Map:f,Exclude:w,Action:l,CSS:h,HTML:I,Image:j,JavaScript:g,SVG:A}=p(y,r),n=new Set;if(typeof i<"u"&&(i instanceof Array||i instanceof Set))for(const a of i)n.add(a);return{name:"astro-compress",hooks:{"astro:build:done":async({dir:a})=>{typeof f=="object"&&(n.size||n.add(a),typeof s=="object"&&s.Search===M.Cache.Search&&(s.Search=a),Object.entries({CSS:h,HTML:I,Image:j,JavaScript:g,SVG:A}).forEach(async([o,e])=>{if(!e||!f[o])return;let m=p(l,p(l,{Wrote:async({Buffer:t,Input:c})=>{switch(o){case"CSS":return(await import("csso")).minify(t.toString(),e).css;case"HTML":return await(await import("html-minifier-terser")).minify(t.toString(),e);case"JavaScript":return(await(await import("terser")).minify(t.toString(),e)).code??t;case"Image":return(await import("../Function/Image.js")).default(e,{Buffer:t,Input:c});case"SVG":{const{data:d}=(await import("svgo")).optimize(t.toString(),e);return d||t}default:return t}},Fulfilled:async t=>t.Files>0?`Successfully compressed a total of ${t.Files} ${o} ${t.Files===1?"file":"files"} for ${await(await import("files-pipe/Target/Function/Bytes.js")).default(t.Info.Total)}.`:!1}));o==="Image"&&(m=p(m,{Read:async({Input:t})=>{const{format:c}=await u(t).metadata();return u(t,{failOn:"none",sequentialRead:!0,unlimited:!0,animated:c==="webp"||c==="gif"})}})),n.forEach(async t=>await(await(await(await new O(s,S).In(t)).By(f[o]??"**/*")).Not(w)).Pipe(m))}))}}}};const{default:y}=await import("../Object/Option.js"),{default:M}=await import("files-pipe/Target/Object/Option.js"),{default:p}=await import("typescript-esbuild/Target/Function/Merge.js"),{default:u}=await import("sharp"),{default:O}=await import("files-pipe");export{y as Default,O as Files,p as Merge,M as _Default,T as default,u as sharp};
