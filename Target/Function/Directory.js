var r=async(...[a])=>{let e=(await import("path")).parse(a).dir;return e=(await import("path")).normalize(e),e=e.replace(/\\/g,"/"),e=e.replace((await import("../Function/Integration.js")).System,""),e.endsWith("/")||(e+="/"),e};export{r as default};
