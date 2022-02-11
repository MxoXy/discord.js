var Z=Object.defineProperty;var le=(n,e,t)=>e in n?Z(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var c=(n,e)=>Z(n,"name",{value:e,configurable:!0});var ue=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var l=(n,e,t)=>(le(n,typeof e!="symbol"?e+"":e,t),t),V=(n,e,t)=>{if(!e.has(n))throw TypeError("Cannot "+t)};var u=(n,e,t)=>(V(n,e,"read from private field"),t?t.call(n):e.get(n)),x=(n,e,t)=>{if(e.has(n))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(n):e.set(n,t)},f=(n,e,t,s)=>(V(n,e,"write to private field"),s?s.call(n,t):e.set(n,t),t);var Y=ue((Ee,me)=>{me.exports={name:"@discordjs/rest",version:"0.3.0-dev",description:"The REST API for discord.js",scripts:{build:"tsup && tsc --emitDeclarationOnly --incremental",test:"jest --pass-with-no-tests --collect-coverage",lint:"prettier --check . && eslint src __tests__ --ext mjs,js,ts",format:"prettier --write . && eslint src __tests__ --ext mjs,js,ts --fix",docs:"typedoc --json docs/typedoc-out.json src/index.ts && node scripts/docs.mjs",prepublishOnly:"yarn build && yarn lint && yarn test",changelog:"git cliff --prepend ./CHANGELOG.md -u -c ./cliff.toml -r ../../ --include-path 'packages/rest/*'"},main:"./dist/index.js",module:"./dist/index.mjs",typings:"./dist/index.d.ts",exports:{import:"./dist/index.mjs",require:"./dist/index.js"},directories:{lib:"src",test:"__tests__"},files:["dist"],contributors:["Crawl <icrawltogo@gmail.com>","Amish Shah <amishshah.2k@gmail.com>","SpaceEEC <spaceeec@yahoo.com>","Vlad Frangu <kingdgrizzle@gmail.com>","Antonio Roman <kyradiscord@gmail.com>"],license:"Apache-2.0",keywords:["discord","api","rest","discordapp","discordjs"],repository:{type:"git",url:"git+https://github.com/discordjs/discord.js.git"},bugs:{url:"https://github.com/discordjs/discord.js/issues"},homepage:"https://discord.js.org",dependencies:{"@discordjs/collection":"https://gitpkg.now.sh/DraftBot/discord.js/packages/collection?08341b9b688f002dba4372e8c4ce93a729e87e60","@sapphire/async-queue":"^1.2.0","@sapphire/snowflake":"^3.1.0","@types/node-fetch":"^2.5.12","discord-api-types":"^0.26.1","form-data":"^4.0.0","node-fetch":"^2.6.7",tslib:"^2.3.1"},devDependencies:{"@babel/core":"^7.17.0","@babel/plugin-proposal-decorators":"^7.17.0","@babel/preset-env":"^7.16.11","@babel/preset-typescript":"^7.16.7","@discordjs/ts-docgen":"^0.3.4","@types/jest":"^27.4.0","@typescript-eslint/eslint-plugin":"^5.10.2","@typescript-eslint/parser":"^5.10.2","babel-plugin-const-enum":"^1.2.0","babel-plugin-transform-typescript-metadata":"^0.3.2",eslint:"^8.8.0","eslint-config-marine":"^9.3.2","eslint-config-prettier":"^8.3.0","eslint-plugin-prettier":"^4.0.0",jest:"^27.4.7",nock:"^13.2.4",prettier:"^2.5.1",tsup:"^5.11.13",typedoc:"^0.22.11",typescript:"^4.5.5"},engines:{node:">=16.9.0"},publishConfig:{access:"public"}}});import{APIVersion as pe}from"discord-api-types/v9";var ee=Y(),te=`DiscordBot (${ee.homepage}, ${ee.version})`,k={agent:{},api:"https://discord.com/api",cdn:"https://cdn.discordapp.com",headers:{},invalidRequestWarningInterval:0,globalRequestsPerSecond:50,offset:50,rejectOnRateLimit:null,retries:3,timeout:15e3,userAgentAppendix:`Node.js ${process.version}`,version:pe,hashSweepInterval:144e5,hashLifetime:864e5,handlerSweepInterval:36e5},P=(m=>(m.Debug="restDebug",m.InvalidRequestWarning="invalidRequestWarning",m.RateLimited="rateLimited",m.Request="request",m.Response="response",m.HashSweep="hashSweep",m.HandlerSweep="handlerSweep",m))(P||{}),se=["webp","png","jpg","jpeg","gif"],ie=["png","json"],K=[16,32,64,128,256,512,1024,2048,4096];var T=class{constructor(e=k.cdn){this.base=e}appAsset(e,t,s){return this.makeURL(`/app-assets/${e}/${t}`,s)}appIcon(e,t,s){return this.makeURL(`/app-icons/${e}/${t}`,s)}avatar(e,t,s){return this.dynamicMakeURL(`/avatars/${e}/${t}`,t,s)}banner(e,t,s){return this.dynamicMakeURL(`/banners/${e}/${t}`,t,s)}channelIcon(e,t,s){return this.makeURL(`/channel-icons/${e}/${t}`,s)}defaultAvatar(e){return this.makeURL(`/embed/avatars/${e}`,{extension:"png"})}discoverySplash(e,t,s){return this.makeURL(`/discovery-splashes/${e}/${t}`,s)}emoji(e,t){return this.makeURL(`/emojis/${e}`,{extension:t})}guildMemberAvatar(e,t,s,i){return this.dynamicMakeURL(`/guilds/${e}/users/${t}/avatars/${s}`,s,i)}icon(e,t,s){return this.dynamicMakeURL(`/icons/${e}/${t}`,t,s)}roleIcon(e,t,s){return this.makeURL(`/role-icons/${e}/${t}`,s)}splash(e,t,s){return this.makeURL(`/splashes/${e}/${t}`,s)}sticker(e,t){return this.makeURL(`/stickers/${e}`,{allowedExtensions:ie,extension:t??"png"})}stickerPackBanner(e,t){return this.makeURL(`/app-assets/710982414301790216/store/${e}`,t)}teamIcon(e,t,s){return this.makeURL(`/team-icons/${e}/${t}`,s)}guildScheduledEventCover(e,t,s){return this.makeURL(`/guild-events/${e}/${t}`,s)}dynamicMakeURL(e,t,{forceStatic:s=!1,...i}={}){return this.makeURL(e,!s&&t.startsWith("a_")?{...i,extension:"gif"}:i)}makeURL(e,{allowedExtensions:t=se,extension:s="webp",size:i}={}){if(s=String(s).toLowerCase(),!t.includes(s))throw new RangeError(`Invalid extension provided: ${s}
Must be one of: ${t.join(", ")}`);if(i&&!K.includes(i))throw new RangeError(`Invalid size provided: ${i}
Must be one of: ${K.join(", ")}`);let r=new URL(`${this.base}${e}.${s}`);return i&&r.searchParams.set("size",String(i)),r.toString()}};c(T,"CDN");function ce(n){return Reflect.has(n,"_errors")}c(ce,"isErrorGroupWrapper");function de(n){return typeof Reflect.get(n,"message")=="string"}c(de,"isErrorResponse");var S=class extends Error{constructor(e,t,s,i,r,a){super(S.getMessage(e));this.rawError=e;this.code=t;this.status=s;this.method=i;this.url=r;l(this,"requestBody");this.requestBody={files:a.files,json:a.body}}get name(){return`${S.name}[${this.code}]`}static getMessage(e){let t="";return"code"in e?(e.errors&&(t=[...this.flattenDiscordError(e.errors)].join(`
`)),e.message&&t?`${e.message}
${t}`:e.message||t||"Unknown Error"):e.error_description??"No Description"}static*flattenDiscordError(e,t=""){if(de(e))return yield`${t.length?`${t}[${e.code}]`:`${e.code}`}: ${e.message}`.trim();for(let[s,i]of Object.entries(e)){let r=s.startsWith("_")?t:t?Number.isNaN(Number(s))?`${t}.${s}`:`${t}[${s}]`:s;if(typeof i=="string")yield i;else if(ce(i))for(let a of i._errors)yield*this.flattenDiscordError(a,r);else yield*this.flattenDiscordError(i,r)}}};c(S,"DiscordAPIError");var U=class extends Error{constructor(e,t,s,i,r,a){super(e);this.name=t;this.status=s;this.method=i;this.url=r;l(this,"requestBody");this.requestBody={files:a.files,json:a.body}}};c(U,"HTTPError");var I=class extends Error{constructor({timeToReset:e,limit:t,method:s,hash:i,url:r,route:a,majorParameter:m,global:L}){super();l(this,"timeToReset");l(this,"limit");l(this,"method");l(this,"hash");l(this,"url");l(this,"route");l(this,"majorParameter");l(this,"global");this.timeToReset=e,this.limit=t,this.method=s,this.hash=i,this.url=r,this.route=a,this.majorParameter=m,this.global=L}get name(){return`${I.name}[${this.route}]`}};c(I,"RateLimitError");import N from"@discordjs/collection";import ge from"form-data";import{DiscordSnowflake as fe}from"@sapphire/snowflake";import{EventEmitter as Re}from"node:events";import{Agent as be}from"node:https";import{Agent as ye}from"node:http";import{setTimeout as G}from"node:timers/promises";import{AsyncQueue as re}from"@sapphire/async-queue";import he from"node-fetch";function W(n){return n.headers.get("Content-Type")?.startsWith("application/json")?n.json():n.buffer()}c(W,"parseResponse");function C(n,e,t){if(n==="/channels/:id"){if(typeof e!="object"||e===null||t!=="patch")return!1;let s=e;return["name","topic"].some(i=>Reflect.has(s,i))}return!0}c(C,"hasSublimit");var B=0,_=null;var E,d,y,$,M=class{constructor(e,t,s){this.manager=e;this.hash=t;this.majorParameter=s;l(this,"id");l(this,"reset",-1);l(this,"remaining",1);l(this,"limit",1/0);x(this,E,new re);x(this,d,null);x(this,y,null);x(this,$,!1);this.id=`${t}:${s}`}get inactive(){return u(this,E).remaining===0&&(u(this,d)===null||u(this,d).remaining===0)&&!this.limited}get globalLimited(){return this.manager.globalRemaining<=0&&Date.now()<this.manager.globalReset}get localLimited(){return this.remaining<=0&&Date.now()<this.reset}get limited(){return this.globalLimited||this.localLimited}get timeToReset(){return this.reset+this.manager.options.offset-Date.now()}debug(e){this.manager.emit("restDebug",`[REST ${this.id}] ${e}`)}async globalDelayFor(e){await G(e,void 0,{ref:!1}),this.manager.globalDelay=null}async onRateLimit(e){let{options:t}=this.manager;if(!t.rejectOnRateLimit)return;if(typeof t.rejectOnRateLimit=="function"?await t.rejectOnRateLimit(e):t.rejectOnRateLimit.some(i=>e.route.startsWith(i.toLowerCase())))throw new I(e)}async queueRequest(e,t,s,i){let r=u(this,E),a=0;if(u(this,d)&&C(e.bucketRoute,i.body,s.method)&&(r=u(this,d),a=1),await r.wait(),a===0)if(u(this,d)&&C(e.bucketRoute,i.body,s.method)){r=u(this,d);let m=r.wait();u(this,E).shift(),await m}else u(this,y)&&await u(this,y).promise;try{return await this.runRequest(e,t,s,i)}finally{r.shift(),u(this,$)&&(f(this,$,!1),u(this,d)?.shift()),u(this,d)?.remaining===0&&(u(this,y)?.resolve(),f(this,d,null))}}async runRequest(e,t,s,i,r=0){for(;this.limited;){let p=this.globalLimited,w,h,D;p?(w=this.manager.options.globalRequestsPerSecond,h=this.manager.globalReset+this.manager.options.offset-Date.now(),this.manager.globalDelay||(this.manager.globalDelay=this.globalDelayFor(h)),D=this.manager.globalDelay):(w=this.limit,h=this.timeToReset,D=G(h));let j={timeToReset:h,limit:w,method:s.method??"get",hash:this.hash,url:t,route:e.bucketRoute,majorParameter:this.majorParameter,global:p};this.manager.emit("rateLimited",j),await this.onRateLimit(j),p?this.debug(`Global rate limit hit, blocking all requests for ${h}ms`):this.debug(`Waiting ${h}ms for rate limit to pass`),await D}(!this.manager.globalReset||this.manager.globalReset<Date.now())&&(this.manager.globalReset=Date.now()+1e3,this.manager.globalRemaining=this.manager.options.globalRequestsPerSecond),this.manager.globalRemaining--;let a=s.method??"get";this.manager.listenerCount("request")&&this.manager.emit("request",{method:a,path:e.original,route:e.bucketRoute,options:s,data:i,retries:r});let m=new AbortController,L=setTimeout(()=>m.abort(),this.manager.options.timeout).unref(),o;try{o=await he(t,{...s,signal:m.signal})}catch(p){if(p instanceof Error&&p.name==="AbortError"&&r!==this.manager.options.retries)return await this.runRequest(e,t,s,i,++r);throw p}finally{clearTimeout(L)}this.manager.listenerCount("response")&&this.manager.emit("response",{method:a,path:e.original,route:e.bucketRoute,options:s,data:i,retries:r},o.clone());let g=0,v=o.headers.get("X-RateLimit-Limit"),z=o.headers.get("X-RateLimit-Remaining"),J=o.headers.get("X-RateLimit-Reset-After"),O=o.headers.get("X-RateLimit-Bucket"),Q=o.headers.get("Retry-After");if(this.limit=v?Number(v):1/0,this.remaining=z?Number(z):1,this.reset=J?Number(J)*1e3+Date.now()+this.manager.options.offset:Date.now(),Q&&(g=Number(Q)*1e3+this.manager.options.offset),O&&O!==this.hash)this.debug(["Received bucket hash update",`  Old Hash  : ${this.hash}`,`  New Hash  : ${O}`].join(`
`)),this.manager.hashes.set(`${a}:${e.bucketRoute}`,{value:O,lastAccess:Date.now()});else if(O){let p=this.manager.hashes.get(`${a}:${e.bucketRoute}`);p&&(p.lastAccess=Date.now())}let A=null;if(g>0&&(o.headers.get("X-RateLimit-Global")?(this.manager.globalRemaining=0,this.manager.globalReset=Date.now()+g):this.localLimited||(A=g)),(o.status===401||o.status===403||o.status===429)&&((!_||_<Date.now())&&(_=Date.now()+1e3*60*10,B=0),B++,this.manager.options.invalidRequestWarningInterval>0&&B%this.manager.options.invalidRequestWarningInterval===0&&this.manager.emit("invalidRequestWarning",{count:B,remainingTime:_-Date.now()})),o.ok)return W(o);if(o.status===429){let p=this.globalLimited,w,h;if(p?(w=this.manager.options.globalRequestsPerSecond,h=this.manager.globalReset+this.manager.options.offset-Date.now()):(w=this.limit,h=this.timeToReset),await this.onRateLimit({timeToReset:h,limit:w,method:a,hash:this.hash,url:t,route:e.bucketRoute,majorParameter:this.majorParameter,global:p}),this.debug(["Encountered unexpected 429 rate limit",`  Global         : ${p.toString()}`,`  Method         : ${a}`,`  URL            : ${t}`,`  Bucket         : ${e.bucketRoute}`,`  Major parameter: ${e.majorParameter}`,`  Hash           : ${this.hash}`,`  Limit          : ${w}`,`  Retry After    : ${g}ms`,`  Sublimit       : ${A?`${A}ms`:"None"}`].join(`
`)),A){let D=!u(this,d);D&&(f(this,d,new re),u(this,d).wait(),u(this,E).shift()),u(this,y)?.resolve(),f(this,y,null),await G(A,void 0,{ref:!1});let j,ae=new Promise(oe=>j=oe);f(this,y,{promise:ae,resolve:j}),D&&(await u(this,E).wait(),f(this,$,!0))}return this.runRequest(e,t,s,i,r)}else if(o.status>=500&&o.status<600){if(r!==this.manager.options.retries)return this.runRequest(e,t,s,i,++r);throw new U(o.statusText,o.constructor.name,o.status,a,t,i)}else{if(o.status>=400&&o.status<500){o.status===401&&this.manager.setToken(null);let p=await W(o);throw new S(p,"code"in p?p.code:p.error,o.status,a,t,i)}return null}}};c(M,"SequentialHandler"),E=new WeakMap,d=new WeakMap,y=new WeakMap,$=new WeakMap;var F=(r=>(r.Delete="delete",r.Get="get",r.Patch="patch",r.Post="post",r.Put="put",r))(F||{}),q,X=class extends Re{constructor(e){super();l(this,"globalRemaining");l(this,"globalDelay",null);l(this,"globalReset",-1);l(this,"hashes",new N);l(this,"handlers",new N);x(this,q,null);l(this,"hashTimer");l(this,"handlerTimer");l(this,"agent",null);l(this,"options");this.options={...k,...e},this.options.offset=Math.max(0,this.options.offset),this.globalRemaining=this.options.globalRequestsPerSecond,this.setupSweepers()}setupSweepers(){let e=c(t=>{if(t>144e5)throw new Error("Cannot set an interval greater than 4 hours")},"validateMaxInterval");this.options.hashSweepInterval!==0&&this.options.hashSweepInterval!==1/0&&(e(this.options.hashSweepInterval),this.hashTimer=setInterval(()=>{let t=new N,s=Date.now();this.hashes.sweep((i,r)=>{if(i.lastAccess===-1)return!1;let a=Math.floor(s-i.lastAccess)>this.options.hashLifetime;return a&&t.set(r,i),this.emit("restDebug",`Hash ${i.value} for ${r} swept due to lifetime being exceeded`),a}),this.emit("hashSweep",t)},this.options.hashSweepInterval).unref()),this.options.handlerSweepInterval!==0&&this.options.handlerSweepInterval!==1/0&&(e(this.options.handlerSweepInterval),this.handlerTimer=setInterval(()=>{let t=new N;this.handlers.sweep((s,i)=>{let{inactive:r}=s;return r&&t.set(i,s),this.emit("restDebug",`Handler ${s.id} for ${i} swept due to being inactive`),r}),this.emit("handlerSweep",t)},this.options.handlerSweepInterval).unref())}setToken(e){return f(this,q,e),this}async queueRequest(e){let t=X.generateRouteData(e.fullRoute,e.method),s=this.hashes.get(`${e.method}:${t.bucketRoute}`)??{value:`Global(${e.method}:${t.bucketRoute})`,lastAccess:-1},i=this.handlers.get(`${s.value}:${t.majorParameter}`)??this.createHandler(s.value,t.majorParameter),{url:r,fetchOptions:a}=this.resolveRequest(e);return i.queueRequest(t,r,a,{body:e.body,files:e.files})}createHandler(e,t){let s=new M(this,e,t);return this.handlers.set(s.id,s),s}resolveRequest(e){let{options:t}=this;this.agent??=t.api.startsWith("https")?new be({...t.agent,keepAlive:!0}):new ye({...t.agent,keepAlive:!0});let s="";if(e.query){let o=e.query.toString();o!==""&&(s=`?${o}`)}let i={...this.options.headers,"User-Agent":`${te} ${t.userAgentAppendix}`.trim()};if(e.auth!==!1){if(!u(this,q))throw new Error("Expected token to be set for this request, but none was present");i.Authorization=`${e.authPrefix??"Bot"} ${u(this,q)}`}e.reason?.length&&(i["X-Audit-Log-Reason"]=encodeURIComponent(e.reason));let r=`${t.api}${e.versioned===!1?"":`/v${t.version}`}${e.fullRoute}${s}`,a,m={};if(e.files?.length){let o=new ge;for(let[g,v]of e.files.entries())o.append(v.key??`files[${g}]`,v.data,v.name);if(e.body!=null)if(e.appendToFormData)for(let[g,v]of Object.entries(e.body))o.append(g,v);else o.append("payload_json",JSON.stringify(e.body));a=o,m=o.getHeaders()}else e.body!=null&&(e.passThroughBody?a=e.body:(a=JSON.stringify(e.body),m={"Content-Type":"application/json"}));let L={agent:this.agent,body:a,headers:{...e.headers??{},...m,...i},method:e.method};return{url:r,fetchOptions:L}}clearHashSweeper(){clearInterval(this.hashTimer)}clearHandlerSweeper(){clearInterval(this.handlerTimer)}static generateRouteData(e,t){let i=/^\/(?:channels|guilds|webhooks)\/(\d{16,19})/.exec(e)?.[1]??"global",r=e.replace(/\d{16,19}/g,":id").replace(/\/reactions\/(.*)/,"/reactions/:reaction"),a="";if(t==="delete"&&r==="/channels/:id/messages/:id"){let m=/\d{16,19}$/.exec(e)[0],L=fe.deconstruct(m);Date.now()-Number(L.timestamp)>1e3*60*60*24*14&&(a+="/Delete Old Message")}return{majorParameter:i,bucketRoute:r+a,original:e}}},H=X;c(H,"RequestManager"),q=new WeakMap;import{EventEmitter as ve}from"node:events";var ne=class extends ve{constructor(e={}){super();l(this,"cdn");l(this,"requestManager");this.cdn=new T(e.cdn??k.cdn),this.requestManager=new H(e).on("restDebug",this.emit.bind(this,"restDebug")).on("rateLimited",this.emit.bind(this,"rateLimited")).on("invalidRequestWarning",this.emit.bind(this,"invalidRequestWarning")).on("hashSweep",this.emit.bind(this,"hashSweep")),this.on("newListener",(t,s)=>{(t==="request"||t==="response")&&this.requestManager.on(t,s)}),this.on("removeListener",(t,s)=>{(t==="request"||t==="response")&&this.requestManager.off(t,s)})}setToken(e){return this.requestManager.setToken(e),this}get(e,t={}){return this.request({...t,fullRoute:e,method:"get"})}delete(e,t={}){return this.request({...t,fullRoute:e,method:"delete"})}post(e,t={}){return this.request({...t,fullRoute:e,method:"post"})}put(e,t={}){return this.request({...t,fullRoute:e,method:"put"})}patch(e,t={}){return this.request({...t,fullRoute:e,method:"patch"})}request(e){return this.requestManager.queueRequest(e)}};c(ne,"REST");export{se as ALLOWED_EXTENSIONS,K as ALLOWED_SIZES,ie as ALLOWED_STICKER_EXTENSIONS,T as CDN,k as DefaultRestOptions,te as DefaultUserAgent,S as DiscordAPIError,U as HTTPError,ne as REST,P as RESTEvents,I as RateLimitError,H as RequestManager,F as RequestMethod};
//# sourceMappingURL=index.mjs.map