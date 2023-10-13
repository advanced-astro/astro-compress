var O=(i={})=>{for(const a in i)Object.prototype.hasOwnProperty.call(i,a)&&i[a]===!0&&(i[a]=S[a]);const{Path:r,Cache:n,Logger:y,Map:m,Exclude:u,Action:l,CSS:w,HTML:g,Image:h,JavaScript:I,SVG:j}=p(S,i),s=new Set;if(typeof r<"u"&&(r instanceof Array||r instanceof Set))for(const a of r)s.add(a);return{name:"astro-compress",hooks:{"astro:build:done":async({dir:a})=>{if(typeof m=="object"){s.size||s.add(a),typeof n=="object"&&n.Search===x&&(n.Search=a);for(const[o,e]of Object.entries({CSS:w,HTML:g,Image:h,JavaScript:I,SVG:j})){if(!(e&&m[o]))return;f=p(l,p(l,{Wrote:async({Buffer:t,Input:c})=>{switch(o){case"CSS":return(await import("csso")).minify(t.toString(),e).css;case"HTML":return await(await import("html-minifier-terser")).minify(t.toString(),e);case"JavaScript":return(await(await import("terser")).minify(t.toString(),e)).code??t;case"Image":return(await import("../Function/Image.js")).default(e,{Buffer:t,Input:c});case"SVG":{const{data:A}=(await import("svgo")).optimize(t.toString(),e);return A??t}default:return t}},Fulfilled:async t=>t.Files>0?`Successfully compressed a total of ${t.Files} ${o} ${t.Files===1?"file":"files"} for ${await(await import("files-pipe/Target/Function/Bytes.js")).default(t.Info.Total)}.`:!1})),o==="Image"&&(f=p(f,{Read:async({Input:t})=>{const{format:c}=await d(t).metadata();return d(t,{failOn:"none",sequentialRead:!0,unlimited:!0,animated:c==="webp"||c==="gif"})}}));for(const t of s)await(await(await(await new M(n,y).In(t)).By(m[o]??"**/*")).Not(u)).Pipe(f)}}}}}};const{default:S}=await import("../Variable/Option.js"),{default:{Cache:{Search:x}}}=await import("files-pipe/Target/Variable/Option.js"),{default:p}=await import("typescript-esbuild/Target/Function/Merge.js"),{default:d}=await import("sharp");let f;const{default:M}=await import("files-pipe");export{S as Default,M as Files,p as Merge,x as Search,f as _Action,O as default,d as sharp};
