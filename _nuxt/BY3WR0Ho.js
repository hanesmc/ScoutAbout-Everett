import{d as v,S as y,D as i,a9 as c,c as a,L as r,h as u,E as m}from"./CPAQMi47.js";const j=v({__name:"ProseCodeIcon",props:{icon:{type:String,default:void 0},filename:{type:String,default:void 0}},setup(t){const e=t,l={"package.json":"vscode-icons:file-type-node","tsconfig.json":"vscode-icons:file-type-tsconfig",".npmrc":"vscode-icons:file-type-npm",".editorconfig":"vscode-icons:file-type-editorconfig",".eslintrc":"vscode-icons:file-type-eslint",".eslintrc.cjs":"vscode-icons:file-type-eslint",".eslintignore":"vscode-icons:file-type-eslint","eslint.config.js":"vscode-icons:file-type-eslint","eslint.config.mjs":"vscode-icons:file-type-eslint","eslint.config.cjs":"vscode-icons:file-type-eslint",".gitignore":"vscode-icons:file-type-git","yarn.lock":"vscode-icons:file-type-yarn",".env":"vscode-icons:file-type-dotenv",".env.example":"vscode-icons:file-type-dotenv",".vscode/settings.json":"vscode-icons:file-type-vscode",nuxt:"vscode-icons:file-type-nuxt",".nuxtrc":"vscode-icons:file-type-nuxt",".nuxtignore":"vscode-icons:file-type-nuxt","nuxt.config.js":"vscode-icons:file-type-nuxt","nuxt.config.ts":"vscode-icons:file-type-nuxt","nuxt.schema.ts":"vscode-icons:file-type-nuxt","tailwind.config.js":"vscode-icons:file-type-tailwind","tailwind.config.ts":"vscode-icons:file-type-tailwind",vue:"vscode-icons:file-type-vue",ts:"vscode-icons:file-type-typescript",tsx:"vscode-icons:file-type-typescript",mjs:"vscode-icons:file-type-js",cjs:"vscode-icons:file-type-js",js:"vscode-icons:file-type-js",jsx:"vscode-icons:file-type-js",md:"vscode-icons:file-type-markdown",py:"vscode-icons:file-type-python",ico:"vscode-icons:file-type-favicon",npm:"vscode-icons:file-type-npm",pnpm:"vscode-icons:file-type-pnpm",npx:"vscode-icons:file-type-npm",yarn:"vscode-icons:file-type-yarn",bun:"vscode-icons:file-type-bun",yml:"vscode-icons:file-type-yaml",terminal:"i-heroicons-command-line",csv:"vscode-icons:file-type-text"},{ui:o}=y("content.prose.code.icon",void 0,l,void 0,!0),s=i(()=>{var n;return(((n=e.filename)==null?void 0:n.split(".").pop())||"").toLowerCase()}),p=i(()=>e.icon||o.value[s.value]||e.filename.includes(".")),d=i(()=>e.icon??(e.filename&&(o.value[e.filename.split("/").pop()]??o.value[s.value]??`vscode-icons:file-type-${s.value}`)));return(n,g)=>{const f=m;return c(p)?(a(),r(f,{key:0,name:c(d).split(" ").pop(),class:"size-4"},null,8,["name"])):u("",!0)}}});export{j as _};
