(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var Ua=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ld(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Zo={exports:{}},fu;function Df(){return fu||(fu=1,(function(n){var e=Object.prototype.hasOwnProperty,t="~";function i(){}Object.create&&(i.prototype=Object.create(null),new i().__proto__||(t=!1));function r(c,l,u){this.fn=c,this.context=l,this.once=u||!1}function s(c,l,u,d,h){if(typeof u!="function")throw new TypeError("The listener must be a function");var g=new r(u,d||c,h),x=t?t+l:l;return c._events[x]?c._events[x].fn?c._events[x]=[c._events[x],g]:c._events[x].push(g):(c._events[x]=g,c._eventsCount++),c}function a(c,l){--c._eventsCount===0?c._events=new i:delete c._events[l]}function o(){this._events=new i,this._eventsCount=0}o.prototype.eventNames=function(){var l=[],u,d;if(this._eventsCount===0)return l;for(d in u=this._events)e.call(u,d)&&l.push(t?d.slice(1):d);return Object.getOwnPropertySymbols?l.concat(Object.getOwnPropertySymbols(u)):l},o.prototype.listeners=function(l){var u=t?t+l:l,d=this._events[u];if(!d)return[];if(d.fn)return[d.fn];for(var h=0,g=d.length,x=new Array(g);h<g;h++)x[h]=d[h].fn;return x},o.prototype.listenerCount=function(l){var u=t?t+l:l,d=this._events[u];return d?d.fn?1:d.length:0},o.prototype.emit=function(l,u,d,h,g,x){var S=t?t+l:l;if(!this._events[S])return!1;var m=this._events[S],f=arguments.length,I,R;if(m.fn){switch(m.once&&this.removeListener(l,m.fn,void 0,!0),f){case 1:return m.fn.call(m.context),!0;case 2:return m.fn.call(m.context,u),!0;case 3:return m.fn.call(m.context,u,d),!0;case 4:return m.fn.call(m.context,u,d,h),!0;case 5:return m.fn.call(m.context,u,d,h,g),!0;case 6:return m.fn.call(m.context,u,d,h,g,x),!0}for(R=1,I=new Array(f-1);R<f;R++)I[R-1]=arguments[R];m.fn.apply(m.context,I)}else{var A=m.length,U;for(R=0;R<A;R++)switch(m[R].once&&this.removeListener(l,m[R].fn,void 0,!0),f){case 1:m[R].fn.call(m[R].context);break;case 2:m[R].fn.call(m[R].context,u);break;case 3:m[R].fn.call(m[R].context,u,d);break;case 4:m[R].fn.call(m[R].context,u,d,h);break;default:if(!I)for(U=1,I=new Array(f-1);U<f;U++)I[U-1]=arguments[U];m[R].fn.apply(m[R].context,I)}}return!0},o.prototype.on=function(l,u,d){return s(this,l,u,d,!1)},o.prototype.once=function(l,u,d){return s(this,l,u,d,!0)},o.prototype.removeListener=function(l,u,d,h){var g=t?t+l:l;if(!this._events[g])return this;if(!u)return a(this,g),this;var x=this._events[g];if(x.fn)x.fn===u&&(!h||x.once)&&(!d||x.context===d)&&a(this,g);else{for(var S=0,m=[],f=x.length;S<f;S++)(x[S].fn!==u||h&&!x[S].once||d&&x[S].context!==d)&&m.push(x[S]);m.length?this._events[g]=m.length===1?m[0]:m:a(this,g)}return this},o.prototype.removeAllListeners=function(l){var u;return l?(u=t?t+l:l,this._events[u]&&a(this,u)):(this._events=new i,this._eventsCount=0),this},o.prototype.off=o.prototype.removeListener,o.prototype.addListener=o.prototype.on,o.prefixed=t,o.EventEmitter=o,n.exports=o})(Zo)),Zo.exports}var Nf=Df(),Lf=Ld(Nf),vt;(function(n){n.assertEqual=r=>r;function e(r){}n.assertIs=e;function t(r){throw new Error}n.assertNever=t,n.arrayToEnum=r=>{const s={};for(const a of r)s[a]=a;return s},n.getValidEnumValues=r=>{const s=n.objectKeys(r).filter(o=>typeof r[r[o]]!="number"),a={};for(const o of s)a[o]=r[o];return n.objectValues(a)},n.objectValues=r=>n.objectKeys(r).map(function(s){return r[s]}),n.objectKeys=typeof Object.keys=="function"?r=>Object.keys(r):r=>{const s=[];for(const a in r)Object.prototype.hasOwnProperty.call(r,a)&&s.push(a);return s},n.find=(r,s)=>{for(const a of r)if(s(a))return a},n.isInteger=typeof Number.isInteger=="function"?r=>Number.isInteger(r):r=>typeof r=="number"&&isFinite(r)&&Math.floor(r)===r;function i(r,s=" | "){return r.map(a=>typeof a=="string"?`'${a}'`:a).join(s)}n.joinValues=i,n.jsonStringifyReplacer=(r,s)=>typeof s=="bigint"?s.toString():s})(vt||(vt={}));var Cl;(function(n){n.mergeShapes=(e,t)=>({...e,...t})})(Cl||(Cl={}));const Ie=vt.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),Yi=n=>{switch(typeof n){case"undefined":return Ie.undefined;case"string":return Ie.string;case"number":return isNaN(n)?Ie.nan:Ie.number;case"boolean":return Ie.boolean;case"function":return Ie.function;case"bigint":return Ie.bigint;case"symbol":return Ie.symbol;case"object":return Array.isArray(n)?Ie.array:n===null?Ie.null:n.then&&typeof n.then=="function"&&n.catch&&typeof n.catch=="function"?Ie.promise:typeof Map<"u"&&n instanceof Map?Ie.map:typeof Set<"u"&&n instanceof Set?Ie.set:typeof Date<"u"&&n instanceof Date?Ie.date:Ie.object;default:return Ie.unknown}},ge=vt.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),Pf=n=>JSON.stringify(n,null,2).replace(/"([^"]+)":/g,"$1:");class Pn extends Error{constructor(e){super(),this.issues=[],this.addIssue=i=>{this.issues=[...this.issues,i]},this.addIssues=(i=[])=>{this.issues=[...this.issues,...i]};const t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){const t=e||function(s){return s.message},i={_errors:[]},r=s=>{for(const a of s.issues)if(a.code==="invalid_union")a.unionErrors.map(r);else if(a.code==="invalid_return_type")r(a.returnTypeError);else if(a.code==="invalid_arguments")r(a.argumentsError);else if(a.path.length===0)i._errors.push(t(a));else{let o=i,c=0;for(;c<a.path.length;){const l=a.path[c];c===a.path.length-1?(o[l]=o[l]||{_errors:[]},o[l]._errors.push(t(a))):o[l]=o[l]||{_errors:[]},o=o[l],c++}}};return r(this),i}static assert(e){if(!(e instanceof Pn))throw new Error(`Not a ZodError: ${e}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,vt.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=t=>t.message){const t={},i=[];for(const r of this.issues)r.path.length>0?(t[r.path[0]]=t[r.path[0]]||[],t[r.path[0]].push(e(r))):i.push(e(r));return{formErrors:i,fieldErrors:t}}get formErrors(){return this.flatten()}}Pn.create=n=>new Pn(n);const fs=(n,e)=>{let t;switch(n.code){case ge.invalid_type:n.received===Ie.undefined?t="Required":t=`Expected ${n.expected}, received ${n.received}`;break;case ge.invalid_literal:t=`Invalid literal value, expected ${JSON.stringify(n.expected,vt.jsonStringifyReplacer)}`;break;case ge.unrecognized_keys:t=`Unrecognized key(s) in object: ${vt.joinValues(n.keys,", ")}`;break;case ge.invalid_union:t="Invalid input";break;case ge.invalid_union_discriminator:t=`Invalid discriminator value. Expected ${vt.joinValues(n.options)}`;break;case ge.invalid_enum_value:t=`Invalid enum value. Expected ${vt.joinValues(n.options)}, received '${n.received}'`;break;case ge.invalid_arguments:t="Invalid function arguments";break;case ge.invalid_return_type:t="Invalid function return type";break;case ge.invalid_date:t="Invalid date";break;case ge.invalid_string:typeof n.validation=="object"?"includes"in n.validation?(t=`Invalid input: must include "${n.validation.includes}"`,typeof n.validation.position=="number"&&(t=`${t} at one or more positions greater than or equal to ${n.validation.position}`)):"startsWith"in n.validation?t=`Invalid input: must start with "${n.validation.startsWith}"`:"endsWith"in n.validation?t=`Invalid input: must end with "${n.validation.endsWith}"`:vt.assertNever(n.validation):n.validation!=="regex"?t=`Invalid ${n.validation}`:t="Invalid";break;case ge.too_small:n.type==="array"?t=`Array must contain ${n.exact?"exactly":n.inclusive?"at least":"more than"} ${n.minimum} element(s)`:n.type==="string"?t=`String must contain ${n.exact?"exactly":n.inclusive?"at least":"over"} ${n.minimum} character(s)`:n.type==="number"?t=`Number must be ${n.exact?"exactly equal to ":n.inclusive?"greater than or equal to ":"greater than "}${n.minimum}`:n.type==="date"?t=`Date must be ${n.exact?"exactly equal to ":n.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(n.minimum))}`:t="Invalid input";break;case ge.too_big:n.type==="array"?t=`Array must contain ${n.exact?"exactly":n.inclusive?"at most":"less than"} ${n.maximum} element(s)`:n.type==="string"?t=`String must contain ${n.exact?"exactly":n.inclusive?"at most":"under"} ${n.maximum} character(s)`:n.type==="number"?t=`Number must be ${n.exact?"exactly":n.inclusive?"less than or equal to":"less than"} ${n.maximum}`:n.type==="bigint"?t=`BigInt must be ${n.exact?"exactly":n.inclusive?"less than or equal to":"less than"} ${n.maximum}`:n.type==="date"?t=`Date must be ${n.exact?"exactly":n.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(n.maximum))}`:t="Invalid input";break;case ge.custom:t="Invalid input";break;case ge.invalid_intersection_types:t="Intersection results could not be merged";break;case ge.not_multiple_of:t=`Number must be a multiple of ${n.multipleOf}`;break;case ge.not_finite:t="Number must be finite";break;default:t=e.defaultError,vt.assertNever(n)}return{message:t}};let Pd=fs;function Cf(n){Pd=n}function go(){return Pd}const _o=n=>{const{data:e,path:t,errorMaps:i,issueData:r}=n,s=[...t,...r.path||[]],a={...r,path:s};if(r.message!==void 0)return{...r,path:s,message:r.message};let o="";const c=i.filter(l=>!!l).slice().reverse();for(const l of c)o=l(a,{data:e,defaultError:o}).message;return{...r,path:s,message:o}},Uf=[];function be(n,e){const t=go(),i=_o({issueData:e,data:n.data,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,t,t===fs?void 0:fs].filter(r=>!!r)});n.common.issues.push(i)}class fn{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,t){const i=[];for(const r of t){if(r.status==="aborted")return Je;r.status==="dirty"&&e.dirty(),i.push(r.value)}return{status:e.value,value:i}}static async mergeObjectAsync(e,t){const i=[];for(const r of t){const s=await r.key,a=await r.value;i.push({key:s,value:a})}return fn.mergeObjectSync(e,i)}static mergeObjectSync(e,t){const i={};for(const r of t){const{key:s,value:a}=r;if(s.status==="aborted"||a.status==="aborted")return Je;s.status==="dirty"&&e.dirty(),a.status==="dirty"&&e.dirty(),s.value!=="__proto__"&&(typeof a.value<"u"||r.alwaysSet)&&(i[s.value]=a.value)}return{status:e.value,value:i}}}const Je=Object.freeze({status:"aborted"}),ls=n=>({status:"dirty",value:n}),En=n=>({status:"valid",value:n}),Ul=n=>n.status==="aborted",Ol=n=>n.status==="dirty",ta=n=>n.status==="valid",na=n=>typeof Promise<"u"&&n instanceof Promise;function vo(n,e,t,i){if(typeof e=="function"?n!==e||!0:!e.has(n))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e.get(n)}function Cd(n,e,t,i,r){if(typeof e=="function"?n!==e||!0:!e.has(n))throw new TypeError("Cannot write private member to an object whose class did not declare it");return e.set(n,t),t}var He;(function(n){n.errToObj=e=>typeof e=="string"?{message:e}:e||{},n.toString=e=>typeof e=="string"?e:e?.message})(He||(He={}));var Zs,Ks;class ui{constructor(e,t,i,r){this._cachedPath=[],this.parent=e,this.data=t,this._path=i,this._key=r}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const pu=(n,e)=>{if(ta(e))return{success:!0,data:e.value};if(!n.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const t=new Pn(n.common.issues);return this._error=t,this._error}}};function it(n){if(!n)return{};const{errorMap:e,invalid_type_error:t,required_error:i,description:r}=n;if(e&&(t||i))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:r}:{errorMap:(a,o)=>{var c,l;const{message:u}=n;return a.code==="invalid_enum_value"?{message:u??o.defaultError}:typeof o.data>"u"?{message:(c=u??i)!==null&&c!==void 0?c:o.defaultError}:a.code!=="invalid_type"?{message:o.defaultError}:{message:(l=u??t)!==null&&l!==void 0?l:o.defaultError}},description:r}}class lt{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return Yi(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:Yi(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new fn,ctx:{common:e.parent.common,data:e.data,parsedType:Yi(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const t=this._parse(e);if(na(t))throw new Error("Synchronous parse encountered promise.");return t}_parseAsync(e){const t=this._parse(e);return Promise.resolve(t)}parse(e,t){const i=this.safeParse(e,t);if(i.success)return i.data;throw i.error}safeParse(e,t){var i;const r={common:{issues:[],async:(i=t?.async)!==null&&i!==void 0?i:!1,contextualErrorMap:t?.errorMap},path:t?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Yi(e)},s=this._parseSync({data:e,path:r.path,parent:r});return pu(r,s)}async parseAsync(e,t){const i=await this.safeParseAsync(e,t);if(i.success)return i.data;throw i.error}async safeParseAsync(e,t){const i={common:{issues:[],contextualErrorMap:t?.errorMap,async:!0},path:t?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Yi(e)},r=this._parse({data:e,path:i.path,parent:i}),s=await(na(r)?r:Promise.resolve(r));return pu(i,s)}refine(e,t){const i=r=>typeof t=="string"||typeof t>"u"?{message:t}:typeof t=="function"?t(r):t;return this._refinement((r,s)=>{const a=e(r),o=()=>s.addIssue({code:ge.custom,...i(r)});return typeof Promise<"u"&&a instanceof Promise?a.then(c=>c?!0:(o(),!1)):a?!0:(o(),!1)})}refinement(e,t){return this._refinement((i,r)=>e(i)?!0:(r.addIssue(typeof t=="function"?t(i,r):t),!1))}_refinement(e){return new ei({schema:this,typeName:Ke.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return ci.create(this,this._def)}nullable(){return ar.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return Jn.create(this,this._def)}promise(){return ms.create(this,this._def)}or(e){return aa.create([this,e],this._def)}and(e){return oa.create(this,e,this._def)}transform(e){return new ei({...it(this._def),schema:this,typeName:Ke.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const t=typeof e=="function"?e:()=>e;return new ha({...it(this._def),innerType:this,defaultValue:t,typeName:Ke.ZodDefault})}brand(){return new Pc({typeName:Ke.ZodBranded,type:this,...it(this._def)})}catch(e){const t=typeof e=="function"?e:()=>e;return new fa({...it(this._def),innerType:this,catchValue:t,typeName:Ke.ZodCatch})}describe(e){const t=this.constructor;return new t({...this._def,description:e})}pipe(e){return ya.create(this,e)}readonly(){return pa.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const Of=/^c[^\s-]{8,}$/i,Ff=/^[0-9a-z]+$/,Bf=/^[0-9A-HJKMNP-TV-Z]{26}$/,kf=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,Gf=/^[a-z0-9_-]{21}$/i,Hf=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,zf=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,Vf="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let Ko;const Wf=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,Xf=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,qf=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,Ud="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",Yf=new RegExp(`^${Ud}$`);function Od(n){let e="([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";return n.precision?e=`${e}\\.\\d{${n.precision}}`:n.precision==null&&(e=`${e}(\\.\\d+)?`),e}function Zf(n){return new RegExp(`^${Od(n)}$`)}function Fd(n){let e=`${Ud}T${Od(n)}`;const t=[];return t.push(n.local?"Z?":"Z"),n.offset&&t.push("([+-]\\d{2}:?\\d{2})"),e=`${e}(${t.join("|")})`,new RegExp(`^${e}$`)}function Kf(n,e){return!!((e==="v4"||!e)&&Wf.test(n)||(e==="v6"||!e)&&Xf.test(n))}class Kn extends lt{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==Ie.string){const s=this._getOrReturnCtx(e);return be(s,{code:ge.invalid_type,expected:Ie.string,received:s.parsedType}),Je}const i=new fn;let r;for(const s of this._def.checks)if(s.kind==="min")e.data.length<s.value&&(r=this._getOrReturnCtx(e,r),be(r,{code:ge.too_small,minimum:s.value,type:"string",inclusive:!0,exact:!1,message:s.message}),i.dirty());else if(s.kind==="max")e.data.length>s.value&&(r=this._getOrReturnCtx(e,r),be(r,{code:ge.too_big,maximum:s.value,type:"string",inclusive:!0,exact:!1,message:s.message}),i.dirty());else if(s.kind==="length"){const a=e.data.length>s.value,o=e.data.length<s.value;(a||o)&&(r=this._getOrReturnCtx(e,r),a?be(r,{code:ge.too_big,maximum:s.value,type:"string",inclusive:!0,exact:!0,message:s.message}):o&&be(r,{code:ge.too_small,minimum:s.value,type:"string",inclusive:!0,exact:!0,message:s.message}),i.dirty())}else if(s.kind==="email")zf.test(e.data)||(r=this._getOrReturnCtx(e,r),be(r,{validation:"email",code:ge.invalid_string,message:s.message}),i.dirty());else if(s.kind==="emoji")Ko||(Ko=new RegExp(Vf,"u")),Ko.test(e.data)||(r=this._getOrReturnCtx(e,r),be(r,{validation:"emoji",code:ge.invalid_string,message:s.message}),i.dirty());else if(s.kind==="uuid")kf.test(e.data)||(r=this._getOrReturnCtx(e,r),be(r,{validation:"uuid",code:ge.invalid_string,message:s.message}),i.dirty());else if(s.kind==="nanoid")Gf.test(e.data)||(r=this._getOrReturnCtx(e,r),be(r,{validation:"nanoid",code:ge.invalid_string,message:s.message}),i.dirty());else if(s.kind==="cuid")Of.test(e.data)||(r=this._getOrReturnCtx(e,r),be(r,{validation:"cuid",code:ge.invalid_string,message:s.message}),i.dirty());else if(s.kind==="cuid2")Ff.test(e.data)||(r=this._getOrReturnCtx(e,r),be(r,{validation:"cuid2",code:ge.invalid_string,message:s.message}),i.dirty());else if(s.kind==="ulid")Bf.test(e.data)||(r=this._getOrReturnCtx(e,r),be(r,{validation:"ulid",code:ge.invalid_string,message:s.message}),i.dirty());else if(s.kind==="url")try{new URL(e.data)}catch{r=this._getOrReturnCtx(e,r),be(r,{validation:"url",code:ge.invalid_string,message:s.message}),i.dirty()}else s.kind==="regex"?(s.regex.lastIndex=0,s.regex.test(e.data)||(r=this._getOrReturnCtx(e,r),be(r,{validation:"regex",code:ge.invalid_string,message:s.message}),i.dirty())):s.kind==="trim"?e.data=e.data.trim():s.kind==="includes"?e.data.includes(s.value,s.position)||(r=this._getOrReturnCtx(e,r),be(r,{code:ge.invalid_string,validation:{includes:s.value,position:s.position},message:s.message}),i.dirty()):s.kind==="toLowerCase"?e.data=e.data.toLowerCase():s.kind==="toUpperCase"?e.data=e.data.toUpperCase():s.kind==="startsWith"?e.data.startsWith(s.value)||(r=this._getOrReturnCtx(e,r),be(r,{code:ge.invalid_string,validation:{startsWith:s.value},message:s.message}),i.dirty()):s.kind==="endsWith"?e.data.endsWith(s.value)||(r=this._getOrReturnCtx(e,r),be(r,{code:ge.invalid_string,validation:{endsWith:s.value},message:s.message}),i.dirty()):s.kind==="datetime"?Fd(s).test(e.data)||(r=this._getOrReturnCtx(e,r),be(r,{code:ge.invalid_string,validation:"datetime",message:s.message}),i.dirty()):s.kind==="date"?Yf.test(e.data)||(r=this._getOrReturnCtx(e,r),be(r,{code:ge.invalid_string,validation:"date",message:s.message}),i.dirty()):s.kind==="time"?Zf(s).test(e.data)||(r=this._getOrReturnCtx(e,r),be(r,{code:ge.invalid_string,validation:"time",message:s.message}),i.dirty()):s.kind==="duration"?Hf.test(e.data)||(r=this._getOrReturnCtx(e,r),be(r,{validation:"duration",code:ge.invalid_string,message:s.message}),i.dirty()):s.kind==="ip"?Kf(e.data,s.version)||(r=this._getOrReturnCtx(e,r),be(r,{validation:"ip",code:ge.invalid_string,message:s.message}),i.dirty()):s.kind==="base64"?qf.test(e.data)||(r=this._getOrReturnCtx(e,r),be(r,{validation:"base64",code:ge.invalid_string,message:s.message}),i.dirty()):vt.assertNever(s);return{status:i.value,value:e.data}}_regex(e,t,i){return this.refinement(r=>e.test(r),{validation:t,code:ge.invalid_string,...He.errToObj(i)})}_addCheck(e){return new Kn({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...He.errToObj(e)})}url(e){return this._addCheck({kind:"url",...He.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...He.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...He.errToObj(e)})}nanoid(e){return this._addCheck({kind:"nanoid",...He.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...He.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...He.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...He.errToObj(e)})}base64(e){return this._addCheck({kind:"base64",...He.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...He.errToObj(e)})}datetime(e){var t,i;return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof e?.precision>"u"?null:e?.precision,offset:(t=e?.offset)!==null&&t!==void 0?t:!1,local:(i=e?.local)!==null&&i!==void 0?i:!1,...He.errToObj(e?.message)})}date(e){return this._addCheck({kind:"date",message:e})}time(e){return typeof e=="string"?this._addCheck({kind:"time",precision:null,message:e}):this._addCheck({kind:"time",precision:typeof e?.precision>"u"?null:e?.precision,...He.errToObj(e?.message)})}duration(e){return this._addCheck({kind:"duration",...He.errToObj(e)})}regex(e,t){return this._addCheck({kind:"regex",regex:e,...He.errToObj(t)})}includes(e,t){return this._addCheck({kind:"includes",value:e,position:t?.position,...He.errToObj(t?.message)})}startsWith(e,t){return this._addCheck({kind:"startsWith",value:e,...He.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:"endsWith",value:e,...He.errToObj(t)})}min(e,t){return this._addCheck({kind:"min",value:e,...He.errToObj(t)})}max(e,t){return this._addCheck({kind:"max",value:e,...He.errToObj(t)})}length(e,t){return this._addCheck({kind:"length",value:e,...He.errToObj(t)})}nonempty(e){return this.min(1,He.errToObj(e))}trim(){return new Kn({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new Kn({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new Kn({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isDate(){return!!this._def.checks.find(e=>e.kind==="date")}get isTime(){return!!this._def.checks.find(e=>e.kind==="time")}get isDuration(){return!!this._def.checks.find(e=>e.kind==="duration")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(e=>e.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get isBase64(){return!!this._def.checks.find(e=>e.kind==="base64")}get minLength(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}}Kn.create=n=>{var e;return new Kn({checks:[],typeName:Ke.ZodString,coerce:(e=n?.coerce)!==null&&e!==void 0?e:!1,...it(n)})};function jf(n,e){const t=(n.toString().split(".")[1]||"").length,i=(e.toString().split(".")[1]||"").length,r=t>i?t:i,s=parseInt(n.toFixed(r).replace(".","")),a=parseInt(e.toFixed(r).replace(".",""));return s%a/Math.pow(10,r)}class ir extends lt{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==Ie.number){const s=this._getOrReturnCtx(e);return be(s,{code:ge.invalid_type,expected:Ie.number,received:s.parsedType}),Je}let i;const r=new fn;for(const s of this._def.checks)s.kind==="int"?vt.isInteger(e.data)||(i=this._getOrReturnCtx(e,i),be(i,{code:ge.invalid_type,expected:"integer",received:"float",message:s.message}),r.dirty()):s.kind==="min"?(s.inclusive?e.data<s.value:e.data<=s.value)&&(i=this._getOrReturnCtx(e,i),be(i,{code:ge.too_small,minimum:s.value,type:"number",inclusive:s.inclusive,exact:!1,message:s.message}),r.dirty()):s.kind==="max"?(s.inclusive?e.data>s.value:e.data>=s.value)&&(i=this._getOrReturnCtx(e,i),be(i,{code:ge.too_big,maximum:s.value,type:"number",inclusive:s.inclusive,exact:!1,message:s.message}),r.dirty()):s.kind==="multipleOf"?jf(e.data,s.value)!==0&&(i=this._getOrReturnCtx(e,i),be(i,{code:ge.not_multiple_of,multipleOf:s.value,message:s.message}),r.dirty()):s.kind==="finite"?Number.isFinite(e.data)||(i=this._getOrReturnCtx(e,i),be(i,{code:ge.not_finite,message:s.message}),r.dirty()):vt.assertNever(s);return{status:r.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,He.toString(t))}gt(e,t){return this.setLimit("min",e,!1,He.toString(t))}lte(e,t){return this.setLimit("max",e,!0,He.toString(t))}lt(e,t){return this.setLimit("max",e,!1,He.toString(t))}setLimit(e,t,i,r){return new ir({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:i,message:He.toString(r)}]})}_addCheck(e){return new ir({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:He.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:He.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:He.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:He.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:He.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:He.toString(t)})}finite(e){return this._addCheck({kind:"finite",message:He.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:He.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:He.toString(e)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&vt.isInteger(e.value))}get isFinite(){let e=null,t=null;for(const i of this._def.checks){if(i.kind==="finite"||i.kind==="int"||i.kind==="multipleOf")return!0;i.kind==="min"?(t===null||i.value>t)&&(t=i.value):i.kind==="max"&&(e===null||i.value<e)&&(e=i.value)}return Number.isFinite(t)&&Number.isFinite(e)}}ir.create=n=>new ir({checks:[],typeName:Ke.ZodNumber,coerce:n?.coerce||!1,...it(n)});class rr extends lt{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce&&(e.data=BigInt(e.data)),this._getType(e)!==Ie.bigint){const s=this._getOrReturnCtx(e);return be(s,{code:ge.invalid_type,expected:Ie.bigint,received:s.parsedType}),Je}let i;const r=new fn;for(const s of this._def.checks)s.kind==="min"?(s.inclusive?e.data<s.value:e.data<=s.value)&&(i=this._getOrReturnCtx(e,i),be(i,{code:ge.too_small,type:"bigint",minimum:s.value,inclusive:s.inclusive,message:s.message}),r.dirty()):s.kind==="max"?(s.inclusive?e.data>s.value:e.data>=s.value)&&(i=this._getOrReturnCtx(e,i),be(i,{code:ge.too_big,type:"bigint",maximum:s.value,inclusive:s.inclusive,message:s.message}),r.dirty()):s.kind==="multipleOf"?e.data%s.value!==BigInt(0)&&(i=this._getOrReturnCtx(e,i),be(i,{code:ge.not_multiple_of,multipleOf:s.value,message:s.message}),r.dirty()):vt.assertNever(s);return{status:r.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,He.toString(t))}gt(e,t){return this.setLimit("min",e,!1,He.toString(t))}lte(e,t){return this.setLimit("max",e,!0,He.toString(t))}lt(e,t){return this.setLimit("max",e,!1,He.toString(t))}setLimit(e,t,i,r){return new rr({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:i,message:He.toString(r)}]})}_addCheck(e){return new rr({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:He.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:He.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:He.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:He.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:He.toString(t)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}}rr.create=n=>{var e;return new rr({checks:[],typeName:Ke.ZodBigInt,coerce:(e=n?.coerce)!==null&&e!==void 0?e:!1,...it(n)})};class ia extends lt{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==Ie.boolean){const i=this._getOrReturnCtx(e);return be(i,{code:ge.invalid_type,expected:Ie.boolean,received:i.parsedType}),Je}return En(e.data)}}ia.create=n=>new ia({typeName:Ke.ZodBoolean,coerce:n?.coerce||!1,...it(n)});class Ur extends lt{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==Ie.date){const s=this._getOrReturnCtx(e);return be(s,{code:ge.invalid_type,expected:Ie.date,received:s.parsedType}),Je}if(isNaN(e.data.getTime())){const s=this._getOrReturnCtx(e);return be(s,{code:ge.invalid_date}),Je}const i=new fn;let r;for(const s of this._def.checks)s.kind==="min"?e.data.getTime()<s.value&&(r=this._getOrReturnCtx(e,r),be(r,{code:ge.too_small,message:s.message,inclusive:!0,exact:!1,minimum:s.value,type:"date"}),i.dirty()):s.kind==="max"?e.data.getTime()>s.value&&(r=this._getOrReturnCtx(e,r),be(r,{code:ge.too_big,message:s.message,inclusive:!0,exact:!1,maximum:s.value,type:"date"}),i.dirty()):vt.assertNever(s);return{status:i.value,value:new Date(e.data.getTime())}}_addCheck(e){return new Ur({...this._def,checks:[...this._def.checks,e]})}min(e,t){return this._addCheck({kind:"min",value:e.getTime(),message:He.toString(t)})}max(e,t){return this._addCheck({kind:"max",value:e.getTime(),message:He.toString(t)})}get minDate(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e!=null?new Date(e):null}}Ur.create=n=>new Ur({checks:[],coerce:n?.coerce||!1,typeName:Ke.ZodDate,...it(n)});class Eo extends lt{_parse(e){if(this._getType(e)!==Ie.symbol){const i=this._getOrReturnCtx(e);return be(i,{code:ge.invalid_type,expected:Ie.symbol,received:i.parsedType}),Je}return En(e.data)}}Eo.create=n=>new Eo({typeName:Ke.ZodSymbol,...it(n)});class ra extends lt{_parse(e){if(this._getType(e)!==Ie.undefined){const i=this._getOrReturnCtx(e);return be(i,{code:ge.invalid_type,expected:Ie.undefined,received:i.parsedType}),Je}return En(e.data)}}ra.create=n=>new ra({typeName:Ke.ZodUndefined,...it(n)});class sa extends lt{_parse(e){if(this._getType(e)!==Ie.null){const i=this._getOrReturnCtx(e);return be(i,{code:ge.invalid_type,expected:Ie.null,received:i.parsedType}),Je}return En(e.data)}}sa.create=n=>new sa({typeName:Ke.ZodNull,...it(n)});class ps extends lt{constructor(){super(...arguments),this._any=!0}_parse(e){return En(e.data)}}ps.create=n=>new ps({typeName:Ke.ZodAny,...it(n)});class Lr extends lt{constructor(){super(...arguments),this._unknown=!0}_parse(e){return En(e.data)}}Lr.create=n=>new Lr({typeName:Ke.ZodUnknown,...it(n)});class Ci extends lt{_parse(e){const t=this._getOrReturnCtx(e);return be(t,{code:ge.invalid_type,expected:Ie.never,received:t.parsedType}),Je}}Ci.create=n=>new Ci({typeName:Ke.ZodNever,...it(n)});class xo extends lt{_parse(e){if(this._getType(e)!==Ie.undefined){const i=this._getOrReturnCtx(e);return be(i,{code:ge.invalid_type,expected:Ie.void,received:i.parsedType}),Je}return En(e.data)}}xo.create=n=>new xo({typeName:Ke.ZodVoid,...it(n)});class Jn extends lt{_parse(e){const{ctx:t,status:i}=this._processInputParams(e),r=this._def;if(t.parsedType!==Ie.array)return be(t,{code:ge.invalid_type,expected:Ie.array,received:t.parsedType}),Je;if(r.exactLength!==null){const a=t.data.length>r.exactLength.value,o=t.data.length<r.exactLength.value;(a||o)&&(be(t,{code:a?ge.too_big:ge.too_small,minimum:o?r.exactLength.value:void 0,maximum:a?r.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:r.exactLength.message}),i.dirty())}if(r.minLength!==null&&t.data.length<r.minLength.value&&(be(t,{code:ge.too_small,minimum:r.minLength.value,type:"array",inclusive:!0,exact:!1,message:r.minLength.message}),i.dirty()),r.maxLength!==null&&t.data.length>r.maxLength.value&&(be(t,{code:ge.too_big,maximum:r.maxLength.value,type:"array",inclusive:!0,exact:!1,message:r.maxLength.message}),i.dirty()),t.common.async)return Promise.all([...t.data].map((a,o)=>r.type._parseAsync(new ui(t,a,t.path,o)))).then(a=>fn.mergeArray(i,a));const s=[...t.data].map((a,o)=>r.type._parseSync(new ui(t,a,t.path,o)));return fn.mergeArray(i,s)}get element(){return this._def.type}min(e,t){return new Jn({...this._def,minLength:{value:e,message:He.toString(t)}})}max(e,t){return new Jn({...this._def,maxLength:{value:e,message:He.toString(t)}})}length(e,t){return new Jn({...this._def,exactLength:{value:e,message:He.toString(t)}})}nonempty(e){return this.min(1,e)}}Jn.create=(n,e)=>new Jn({type:n,minLength:null,maxLength:null,exactLength:null,typeName:Ke.ZodArray,...it(e)});function as(n){if(n instanceof Gt){const e={};for(const t in n.shape){const i=n.shape[t];e[t]=ci.create(as(i))}return new Gt({...n._def,shape:()=>e})}else return n instanceof Jn?new Jn({...n._def,type:as(n.element)}):n instanceof ci?ci.create(as(n.unwrap())):n instanceof ar?ar.create(as(n.unwrap())):n instanceof di?di.create(n.items.map(e=>as(e))):n}class Gt extends lt{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),t=vt.objectKeys(e);return this._cached={shape:e,keys:t}}_parse(e){if(this._getType(e)!==Ie.object){const l=this._getOrReturnCtx(e);return be(l,{code:ge.invalid_type,expected:Ie.object,received:l.parsedType}),Je}const{status:i,ctx:r}=this._processInputParams(e),{shape:s,keys:a}=this._getCached(),o=[];if(!(this._def.catchall instanceof Ci&&this._def.unknownKeys==="strip"))for(const l in r.data)a.includes(l)||o.push(l);const c=[];for(const l of a){const u=s[l],d=r.data[l];c.push({key:{status:"valid",value:l},value:u._parse(new ui(r,d,r.path,l)),alwaysSet:l in r.data})}if(this._def.catchall instanceof Ci){const l=this._def.unknownKeys;if(l==="passthrough")for(const u of o)c.push({key:{status:"valid",value:u},value:{status:"valid",value:r.data[u]}});else if(l==="strict")o.length>0&&(be(r,{code:ge.unrecognized_keys,keys:o}),i.dirty());else if(l!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const l=this._def.catchall;for(const u of o){const d=r.data[u];c.push({key:{status:"valid",value:u},value:l._parse(new ui(r,d,r.path,u)),alwaysSet:u in r.data})}}return r.common.async?Promise.resolve().then(async()=>{const l=[];for(const u of c){const d=await u.key,h=await u.value;l.push({key:d,value:h,alwaysSet:u.alwaysSet})}return l}).then(l=>fn.mergeObjectSync(i,l)):fn.mergeObjectSync(i,c)}get shape(){return this._def.shape()}strict(e){return He.errToObj,new Gt({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(t,i)=>{var r,s,a,o;const c=(a=(s=(r=this._def).errorMap)===null||s===void 0?void 0:s.call(r,t,i).message)!==null&&a!==void 0?a:i.defaultError;return t.code==="unrecognized_keys"?{message:(o=He.errToObj(e).message)!==null&&o!==void 0?o:c}:{message:c}}}:{}})}strip(){return new Gt({...this._def,unknownKeys:"strip"})}passthrough(){return new Gt({...this._def,unknownKeys:"passthrough"})}extend(e){return new Gt({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new Gt({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:Ke.ZodObject})}setKey(e,t){return this.augment({[e]:t})}catchall(e){return new Gt({...this._def,catchall:e})}pick(e){const t={};return vt.objectKeys(e).forEach(i=>{e[i]&&this.shape[i]&&(t[i]=this.shape[i])}),new Gt({...this._def,shape:()=>t})}omit(e){const t={};return vt.objectKeys(this.shape).forEach(i=>{e[i]||(t[i]=this.shape[i])}),new Gt({...this._def,shape:()=>t})}deepPartial(){return as(this)}partial(e){const t={};return vt.objectKeys(this.shape).forEach(i=>{const r=this.shape[i];e&&!e[i]?t[i]=r:t[i]=r.optional()}),new Gt({...this._def,shape:()=>t})}required(e){const t={};return vt.objectKeys(this.shape).forEach(i=>{if(e&&!e[i])t[i]=this.shape[i];else{let s=this.shape[i];for(;s instanceof ci;)s=s._def.innerType;t[i]=s}}),new Gt({...this._def,shape:()=>t})}keyof(){return Bd(vt.objectKeys(this.shape))}}Gt.create=(n,e)=>new Gt({shape:()=>n,unknownKeys:"strip",catchall:Ci.create(),typeName:Ke.ZodObject,...it(e)});Gt.strictCreate=(n,e)=>new Gt({shape:()=>n,unknownKeys:"strict",catchall:Ci.create(),typeName:Ke.ZodObject,...it(e)});Gt.lazycreate=(n,e)=>new Gt({shape:n,unknownKeys:"strip",catchall:Ci.create(),typeName:Ke.ZodObject,...it(e)});class aa extends lt{_parse(e){const{ctx:t}=this._processInputParams(e),i=this._def.options;function r(s){for(const o of s)if(o.result.status==="valid")return o.result;for(const o of s)if(o.result.status==="dirty")return t.common.issues.push(...o.ctx.common.issues),o.result;const a=s.map(o=>new Pn(o.ctx.common.issues));return be(t,{code:ge.invalid_union,unionErrors:a}),Je}if(t.common.async)return Promise.all(i.map(async s=>{const a={...t,common:{...t.common,issues:[]},parent:null};return{result:await s._parseAsync({data:t.data,path:t.path,parent:a}),ctx:a}})).then(r);{let s;const a=[];for(const c of i){const l={...t,common:{...t.common,issues:[]},parent:null},u=c._parseSync({data:t.data,path:t.path,parent:l});if(u.status==="valid")return u;u.status==="dirty"&&!s&&(s={result:u,ctx:l}),l.common.issues.length&&a.push(l.common.issues)}if(s)return t.common.issues.push(...s.ctx.common.issues),s.result;const o=a.map(c=>new Pn(c));return be(t,{code:ge.invalid_union,unionErrors:o}),Je}}get options(){return this._def.options}}aa.create=(n,e)=>new aa({options:n,typeName:Ke.ZodUnion,...it(e)});const bi=n=>n instanceof ca?bi(n.schema):n instanceof ei?bi(n.innerType()):n instanceof ua?[n.value]:n instanceof sr?n.options:n instanceof da?vt.objectValues(n.enum):n instanceof ha?bi(n._def.innerType):n instanceof ra?[void 0]:n instanceof sa?[null]:n instanceof ci?[void 0,...bi(n.unwrap())]:n instanceof ar?[null,...bi(n.unwrap())]:n instanceof Pc||n instanceof pa?bi(n.unwrap()):n instanceof fa?bi(n._def.innerType):[];class Do extends lt{_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==Ie.object)return be(t,{code:ge.invalid_type,expected:Ie.object,received:t.parsedType}),Je;const i=this.discriminator,r=t.data[i],s=this.optionsMap.get(r);return s?t.common.async?s._parseAsync({data:t.data,path:t.path,parent:t}):s._parseSync({data:t.data,path:t.path,parent:t}):(be(t,{code:ge.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[i]}),Je)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,t,i){const r=new Map;for(const s of t){const a=bi(s.shape[e]);if(!a.length)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const o of a){if(r.has(o))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(o)}`);r.set(o,s)}}return new Do({typeName:Ke.ZodDiscriminatedUnion,discriminator:e,options:t,optionsMap:r,...it(i)})}}function Fl(n,e){const t=Yi(n),i=Yi(e);if(n===e)return{valid:!0,data:n};if(t===Ie.object&&i===Ie.object){const r=vt.objectKeys(e),s=vt.objectKeys(n).filter(o=>r.indexOf(o)!==-1),a={...n,...e};for(const o of s){const c=Fl(n[o],e[o]);if(!c.valid)return{valid:!1};a[o]=c.data}return{valid:!0,data:a}}else if(t===Ie.array&&i===Ie.array){if(n.length!==e.length)return{valid:!1};const r=[];for(let s=0;s<n.length;s++){const a=n[s],o=e[s],c=Fl(a,o);if(!c.valid)return{valid:!1};r.push(c.data)}return{valid:!0,data:r}}else return t===Ie.date&&i===Ie.date&&+n==+e?{valid:!0,data:n}:{valid:!1}}class oa extends lt{_parse(e){const{status:t,ctx:i}=this._processInputParams(e),r=(s,a)=>{if(Ul(s)||Ul(a))return Je;const o=Fl(s.value,a.value);return o.valid?((Ol(s)||Ol(a))&&t.dirty(),{status:t.value,value:o.data}):(be(i,{code:ge.invalid_intersection_types}),Je)};return i.common.async?Promise.all([this._def.left._parseAsync({data:i.data,path:i.path,parent:i}),this._def.right._parseAsync({data:i.data,path:i.path,parent:i})]).then(([s,a])=>r(s,a)):r(this._def.left._parseSync({data:i.data,path:i.path,parent:i}),this._def.right._parseSync({data:i.data,path:i.path,parent:i}))}}oa.create=(n,e,t)=>new oa({left:n,right:e,typeName:Ke.ZodIntersection,...it(t)});class di extends lt{_parse(e){const{status:t,ctx:i}=this._processInputParams(e);if(i.parsedType!==Ie.array)return be(i,{code:ge.invalid_type,expected:Ie.array,received:i.parsedType}),Je;if(i.data.length<this._def.items.length)return be(i,{code:ge.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),Je;!this._def.rest&&i.data.length>this._def.items.length&&(be(i,{code:ge.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),t.dirty());const s=[...i.data].map((a,o)=>{const c=this._def.items[o]||this._def.rest;return c?c._parse(new ui(i,a,i.path,o)):null}).filter(a=>!!a);return i.common.async?Promise.all(s).then(a=>fn.mergeArray(t,a)):fn.mergeArray(t,s)}get items(){return this._def.items}rest(e){return new di({...this._def,rest:e})}}di.create=(n,e)=>{if(!Array.isArray(n))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new di({items:n,typeName:Ke.ZodTuple,rest:null,...it(e)})};class la extends lt{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:i}=this._processInputParams(e);if(i.parsedType!==Ie.object)return be(i,{code:ge.invalid_type,expected:Ie.object,received:i.parsedType}),Je;const r=[],s=this._def.keyType,a=this._def.valueType;for(const o in i.data)r.push({key:s._parse(new ui(i,o,i.path,o)),value:a._parse(new ui(i,i.data[o],i.path,o)),alwaysSet:o in i.data});return i.common.async?fn.mergeObjectAsync(t,r):fn.mergeObjectSync(t,r)}get element(){return this._def.valueType}static create(e,t,i){return t instanceof lt?new la({keyType:e,valueType:t,typeName:Ke.ZodRecord,...it(i)}):new la({keyType:Kn.create(),valueType:e,typeName:Ke.ZodRecord,...it(t)})}}class So extends lt{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:i}=this._processInputParams(e);if(i.parsedType!==Ie.map)return be(i,{code:ge.invalid_type,expected:Ie.map,received:i.parsedType}),Je;const r=this._def.keyType,s=this._def.valueType,a=[...i.data.entries()].map(([o,c],l)=>({key:r._parse(new ui(i,o,i.path,[l,"key"])),value:s._parse(new ui(i,c,i.path,[l,"value"]))}));if(i.common.async){const o=new Map;return Promise.resolve().then(async()=>{for(const c of a){const l=await c.key,u=await c.value;if(l.status==="aborted"||u.status==="aborted")return Je;(l.status==="dirty"||u.status==="dirty")&&t.dirty(),o.set(l.value,u.value)}return{status:t.value,value:o}})}else{const o=new Map;for(const c of a){const l=c.key,u=c.value;if(l.status==="aborted"||u.status==="aborted")return Je;(l.status==="dirty"||u.status==="dirty")&&t.dirty(),o.set(l.value,u.value)}return{status:t.value,value:o}}}}So.create=(n,e,t)=>new So({valueType:e,keyType:n,typeName:Ke.ZodMap,...it(t)});class Or extends lt{_parse(e){const{status:t,ctx:i}=this._processInputParams(e);if(i.parsedType!==Ie.set)return be(i,{code:ge.invalid_type,expected:Ie.set,received:i.parsedType}),Je;const r=this._def;r.minSize!==null&&i.data.size<r.minSize.value&&(be(i,{code:ge.too_small,minimum:r.minSize.value,type:"set",inclusive:!0,exact:!1,message:r.minSize.message}),t.dirty()),r.maxSize!==null&&i.data.size>r.maxSize.value&&(be(i,{code:ge.too_big,maximum:r.maxSize.value,type:"set",inclusive:!0,exact:!1,message:r.maxSize.message}),t.dirty());const s=this._def.valueType;function a(c){const l=new Set;for(const u of c){if(u.status==="aborted")return Je;u.status==="dirty"&&t.dirty(),l.add(u.value)}return{status:t.value,value:l}}const o=[...i.data.values()].map((c,l)=>s._parse(new ui(i,c,i.path,l)));return i.common.async?Promise.all(o).then(c=>a(c)):a(o)}min(e,t){return new Or({...this._def,minSize:{value:e,message:He.toString(t)}})}max(e,t){return new Or({...this._def,maxSize:{value:e,message:He.toString(t)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}}Or.create=(n,e)=>new Or({valueType:n,minSize:null,maxSize:null,typeName:Ke.ZodSet,...it(e)});class us extends lt{constructor(){super(...arguments),this.validate=this.implement}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==Ie.function)return be(t,{code:ge.invalid_type,expected:Ie.function,received:t.parsedType}),Je;function i(o,c){return _o({data:o,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,go(),fs].filter(l=>!!l),issueData:{code:ge.invalid_arguments,argumentsError:c}})}function r(o,c){return _o({data:o,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,go(),fs].filter(l=>!!l),issueData:{code:ge.invalid_return_type,returnTypeError:c}})}const s={errorMap:t.common.contextualErrorMap},a=t.data;if(this._def.returns instanceof ms){const o=this;return En(async function(...c){const l=new Pn([]),u=await o._def.args.parseAsync(c,s).catch(g=>{throw l.addIssue(i(c,g)),l}),d=await Reflect.apply(a,this,u);return await o._def.returns._def.type.parseAsync(d,s).catch(g=>{throw l.addIssue(r(d,g)),l})})}else{const o=this;return En(function(...c){const l=o._def.args.safeParse(c,s);if(!l.success)throw new Pn([i(c,l.error)]);const u=Reflect.apply(a,this,l.data),d=o._def.returns.safeParse(u,s);if(!d.success)throw new Pn([r(u,d.error)]);return d.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new us({...this._def,args:di.create(e).rest(Lr.create())})}returns(e){return new us({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,t,i){return new us({args:e||di.create([]).rest(Lr.create()),returns:t||Lr.create(),typeName:Ke.ZodFunction,...it(i)})}}class ca extends lt{get schema(){return this._def.getter()}_parse(e){const{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}}ca.create=(n,e)=>new ca({getter:n,typeName:Ke.ZodLazy,...it(e)});class ua extends lt{_parse(e){if(e.data!==this._def.value){const t=this._getOrReturnCtx(e);return be(t,{received:t.data,code:ge.invalid_literal,expected:this._def.value}),Je}return{status:"valid",value:e.data}}get value(){return this._def.value}}ua.create=(n,e)=>new ua({value:n,typeName:Ke.ZodLiteral,...it(e)});function Bd(n,e){return new sr({values:n,typeName:Ke.ZodEnum,...it(e)})}class sr extends lt{constructor(){super(...arguments),Zs.set(this,void 0)}_parse(e){if(typeof e.data!="string"){const t=this._getOrReturnCtx(e),i=this._def.values;return be(t,{expected:vt.joinValues(i),received:t.parsedType,code:ge.invalid_type}),Je}if(vo(this,Zs)||Cd(this,Zs,new Set(this._def.values)),!vo(this,Zs).has(e.data)){const t=this._getOrReturnCtx(e),i=this._def.values;return be(t,{received:t.data,code:ge.invalid_enum_value,options:i}),Je}return En(e.data)}get options(){return this._def.values}get enum(){const e={};for(const t of this._def.values)e[t]=t;return e}get Values(){const e={};for(const t of this._def.values)e[t]=t;return e}get Enum(){const e={};for(const t of this._def.values)e[t]=t;return e}extract(e,t=this._def){return sr.create(e,{...this._def,...t})}exclude(e,t=this._def){return sr.create(this.options.filter(i=>!e.includes(i)),{...this._def,...t})}}Zs=new WeakMap;sr.create=Bd;class da extends lt{constructor(){super(...arguments),Ks.set(this,void 0)}_parse(e){const t=vt.getValidEnumValues(this._def.values),i=this._getOrReturnCtx(e);if(i.parsedType!==Ie.string&&i.parsedType!==Ie.number){const r=vt.objectValues(t);return be(i,{expected:vt.joinValues(r),received:i.parsedType,code:ge.invalid_type}),Je}if(vo(this,Ks)||Cd(this,Ks,new Set(vt.getValidEnumValues(this._def.values))),!vo(this,Ks).has(e.data)){const r=vt.objectValues(t);return be(i,{received:i.data,code:ge.invalid_enum_value,options:r}),Je}return En(e.data)}get enum(){return this._def.values}}Ks=new WeakMap;da.create=(n,e)=>new da({values:n,typeName:Ke.ZodNativeEnum,...it(e)});class ms extends lt{unwrap(){return this._def.type}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==Ie.promise&&t.common.async===!1)return be(t,{code:ge.invalid_type,expected:Ie.promise,received:t.parsedType}),Je;const i=t.parsedType===Ie.promise?t.data:Promise.resolve(t.data);return En(i.then(r=>this._def.type.parseAsync(r,{path:t.path,errorMap:t.common.contextualErrorMap})))}}ms.create=(n,e)=>new ms({type:n,typeName:Ke.ZodPromise,...it(e)});class ei extends lt{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===Ke.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:t,ctx:i}=this._processInputParams(e),r=this._def.effect||null,s={addIssue:a=>{be(i,a),a.fatal?t.abort():t.dirty()},get path(){return i.path}};if(s.addIssue=s.addIssue.bind(s),r.type==="preprocess"){const a=r.transform(i.data,s);if(i.common.async)return Promise.resolve(a).then(async o=>{if(t.value==="aborted")return Je;const c=await this._def.schema._parseAsync({data:o,path:i.path,parent:i});return c.status==="aborted"?Je:c.status==="dirty"||t.value==="dirty"?ls(c.value):c});{if(t.value==="aborted")return Je;const o=this._def.schema._parseSync({data:a,path:i.path,parent:i});return o.status==="aborted"?Je:o.status==="dirty"||t.value==="dirty"?ls(o.value):o}}if(r.type==="refinement"){const a=o=>{const c=r.refinement(o,s);if(i.common.async)return Promise.resolve(c);if(c instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return o};if(i.common.async===!1){const o=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});return o.status==="aborted"?Je:(o.status==="dirty"&&t.dirty(),a(o.value),{status:t.value,value:o.value})}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(o=>o.status==="aborted"?Je:(o.status==="dirty"&&t.dirty(),a(o.value).then(()=>({status:t.value,value:o.value}))))}if(r.type==="transform")if(i.common.async===!1){const a=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});if(!ta(a))return a;const o=r.transform(a.value,s);if(o instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:t.value,value:o}}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(a=>ta(a)?Promise.resolve(r.transform(a.value,s)).then(o=>({status:t.value,value:o})):a);vt.assertNever(r)}}ei.create=(n,e,t)=>new ei({schema:n,typeName:Ke.ZodEffects,effect:e,...it(t)});ei.createWithPreprocess=(n,e,t)=>new ei({schema:e,effect:{type:"preprocess",transform:n},typeName:Ke.ZodEffects,...it(t)});class ci extends lt{_parse(e){return this._getType(e)===Ie.undefined?En(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}ci.create=(n,e)=>new ci({innerType:n,typeName:Ke.ZodOptional,...it(e)});class ar extends lt{_parse(e){return this._getType(e)===Ie.null?En(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}ar.create=(n,e)=>new ar({innerType:n,typeName:Ke.ZodNullable,...it(e)});class ha extends lt{_parse(e){const{ctx:t}=this._processInputParams(e);let i=t.data;return t.parsedType===Ie.undefined&&(i=this._def.defaultValue()),this._def.innerType._parse({data:i,path:t.path,parent:t})}removeDefault(){return this._def.innerType}}ha.create=(n,e)=>new ha({innerType:n,typeName:Ke.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...it(e)});class fa extends lt{_parse(e){const{ctx:t}=this._processInputParams(e),i={...t,common:{...t.common,issues:[]}},r=this._def.innerType._parse({data:i.data,path:i.path,parent:{...i}});return na(r)?r.then(s=>({status:"valid",value:s.status==="valid"?s.value:this._def.catchValue({get error(){return new Pn(i.common.issues)},input:i.data})})):{status:"valid",value:r.status==="valid"?r.value:this._def.catchValue({get error(){return new Pn(i.common.issues)},input:i.data})}}removeCatch(){return this._def.innerType}}fa.create=(n,e)=>new fa({innerType:n,typeName:Ke.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...it(e)});class yo extends lt{_parse(e){if(this._getType(e)!==Ie.nan){const i=this._getOrReturnCtx(e);return be(i,{code:ge.invalid_type,expected:Ie.nan,received:i.parsedType}),Je}return{status:"valid",value:e.data}}}yo.create=n=>new yo({typeName:Ke.ZodNaN,...it(n)});const $f=Symbol("zod_brand");class Pc extends lt{_parse(e){const{ctx:t}=this._processInputParams(e),i=t.data;return this._def.type._parse({data:i,path:t.path,parent:t})}unwrap(){return this._def.type}}class ya extends lt{_parse(e){const{status:t,ctx:i}=this._processInputParams(e);if(i.common.async)return(async()=>{const s=await this._def.in._parseAsync({data:i.data,path:i.path,parent:i});return s.status==="aborted"?Je:s.status==="dirty"?(t.dirty(),ls(s.value)):this._def.out._parseAsync({data:s.value,path:i.path,parent:i})})();{const r=this._def.in._parseSync({data:i.data,path:i.path,parent:i});return r.status==="aborted"?Je:r.status==="dirty"?(t.dirty(),{status:"dirty",value:r.value}):this._def.out._parseSync({data:r.value,path:i.path,parent:i})}}static create(e,t){return new ya({in:e,out:t,typeName:Ke.ZodPipeline})}}class pa extends lt{_parse(e){const t=this._def.innerType._parse(e),i=r=>(ta(r)&&(r.value=Object.freeze(r.value)),r);return na(t)?t.then(r=>i(r)):i(t)}unwrap(){return this._def.innerType}}pa.create=(n,e)=>new pa({innerType:n,typeName:Ke.ZodReadonly,...it(e)});function Cc(n,e={},t){return n?ps.create().superRefine((i,r)=>{var s,a;if(!n(i)){const o=typeof e=="function"?e(i):typeof e=="string"?{message:e}:e,c=(a=(s=o.fatal)!==null&&s!==void 0?s:t)!==null&&a!==void 0?a:!0,l=typeof o=="string"?{message:o}:o;r.addIssue({code:"custom",...l,fatal:c})}}):ps.create()}const Jf={object:Gt.lazycreate};var Ke;(function(n){n.ZodString="ZodString",n.ZodNumber="ZodNumber",n.ZodNaN="ZodNaN",n.ZodBigInt="ZodBigInt",n.ZodBoolean="ZodBoolean",n.ZodDate="ZodDate",n.ZodSymbol="ZodSymbol",n.ZodUndefined="ZodUndefined",n.ZodNull="ZodNull",n.ZodAny="ZodAny",n.ZodUnknown="ZodUnknown",n.ZodNever="ZodNever",n.ZodVoid="ZodVoid",n.ZodArray="ZodArray",n.ZodObject="ZodObject",n.ZodUnion="ZodUnion",n.ZodDiscriminatedUnion="ZodDiscriminatedUnion",n.ZodIntersection="ZodIntersection",n.ZodTuple="ZodTuple",n.ZodRecord="ZodRecord",n.ZodMap="ZodMap",n.ZodSet="ZodSet",n.ZodFunction="ZodFunction",n.ZodLazy="ZodLazy",n.ZodLiteral="ZodLiteral",n.ZodEnum="ZodEnum",n.ZodEffects="ZodEffects",n.ZodNativeEnum="ZodNativeEnum",n.ZodOptional="ZodOptional",n.ZodNullable="ZodNullable",n.ZodDefault="ZodDefault",n.ZodCatch="ZodCatch",n.ZodPromise="ZodPromise",n.ZodBranded="ZodBranded",n.ZodPipeline="ZodPipeline",n.ZodReadonly="ZodReadonly"})(Ke||(Ke={}));const Qf=(n,e={message:`Input not instance of ${n.name}`})=>Cc(t=>t instanceof n,e),z=Kn.create,ze=ir.create,ep=yo.create,kd=rr.create,$e=ia.create,tp=Ur.create,np=Eo.create,ip=ra.create,No=sa.create,rp=ps.create,ma=Lr.create,sp=Ci.create,ap=xo.create,_t=Jn.create,xe=Gt.create,op=Gt.strictCreate,Uc=aa.create,lp=Do.create,cp=oa.create,up=di.create,dp=la.create,hp=So.create,fp=Or.create,pp=us.create,mp=ca.create,Vt=ua.create,gp=sr.create,ws=da.create,_p=ms.create,mu=ei.create,Gd=ci.create,vp=ar.create,Hd=ei.createWithPreprocess,Ep=ya.create,xp=()=>z().optional(),Sp=()=>ze().optional(),yp=()=>$e().optional(),Mp={string:(n=>Kn.create({...n,coerce:!0})),number:(n=>ir.create({...n,coerce:!0})),boolean:(n=>ia.create({...n,coerce:!0})),bigint:(n=>rr.create({...n,coerce:!0})),date:(n=>Ur.create({...n,coerce:!0}))},Tp=Je;var N=Object.freeze({__proto__:null,defaultErrorMap:fs,setErrorMap:Cf,getErrorMap:go,makeIssue:_o,EMPTY_PATH:Uf,addIssueToContext:be,ParseStatus:fn,INVALID:Je,DIRTY:ls,OK:En,isAborted:Ul,isDirty:Ol,isValid:ta,isAsync:na,get util(){return vt},get objectUtil(){return Cl},ZodParsedType:Ie,getParsedType:Yi,ZodType:lt,datetimeRegex:Fd,ZodString:Kn,ZodNumber:ir,ZodBigInt:rr,ZodBoolean:ia,ZodDate:Ur,ZodSymbol:Eo,ZodUndefined:ra,ZodNull:sa,ZodAny:ps,ZodUnknown:Lr,ZodNever:Ci,ZodVoid:xo,ZodArray:Jn,ZodObject:Gt,ZodUnion:aa,ZodDiscriminatedUnion:Do,ZodIntersection:oa,ZodTuple:di,ZodRecord:la,ZodMap:So,ZodSet:Or,ZodFunction:us,ZodLazy:ca,ZodLiteral:ua,ZodEnum:sr,ZodNativeEnum:da,ZodPromise:ms,ZodEffects:ei,ZodTransformer:ei,ZodOptional:ci,ZodNullable:ar,ZodDefault:ha,ZodCatch:fa,ZodNaN:yo,BRAND:$f,ZodBranded:Pc,ZodPipeline:ya,ZodReadonly:pa,custom:Cc,Schema:lt,ZodSchema:lt,late:Jf,get ZodFirstPartyTypeKind(){return Ke},coerce:Mp,any:rp,array:_t,bigint:kd,boolean:$e,date:tp,discriminatedUnion:lp,effect:mu,enum:gp,function:pp,instanceof:Qf,intersection:cp,lazy:mp,literal:Vt,map:hp,nan:ep,nativeEnum:ws,never:sp,null:No,nullable:vp,number:ze,object:xe,oboolean:yp,onumber:Sp,optional:Gd,ostring:xp,pipeline:Ep,preprocess:Hd,promise:_p,record:dp,set:fp,strictObject:op,string:z,symbol:np,transformer:mu,tuple:up,undefined:ip,union:Uc,unknown:ma,void:ap,NEVER:Tp,ZodIssueCode:ge,quotelessJson:Pf,ZodError:Pn}),jo={exports:{}},gu;function bp(){return gu||(gu=1,(function(n){var e=(function(t){var i=1e7,r=7,s=9007199254740992,a=x(s),o="0123456789abcdefghijklmnopqrstuvwxyz",c=typeof BigInt=="function";function l(p,_,y,D){return typeof p>"u"?l[0]:typeof _<"u"?+_==10&&!y?v(p):Ue(p,_,y,D):v(p)}function u(p,_){this.value=p,this.sign=_,this.isSmall=!1}u.prototype=Object.create(l.prototype);function d(p){this.value=p,this.sign=p<0,this.isSmall=!0}d.prototype=Object.create(l.prototype);function h(p){this.value=p}h.prototype=Object.create(l.prototype);function g(p){return-s<p&&p<s}function x(p){return p<1e7?[p]:p<1e14?[p%1e7,Math.floor(p/1e7)]:[p%1e7,Math.floor(p/1e7)%1e7,Math.floor(p/1e14)]}function S(p){m(p);var _=p.length;if(_<4&&Se(p,a)<0)switch(_){case 0:return 0;case 1:return p[0];case 2:return p[0]+p[1]*i;default:return p[0]+(p[1]+p[2]*i)*i}return p}function m(p){for(var _=p.length;p[--_]===0;);p.length=_+1}function f(p){for(var _=new Array(p),y=-1;++y<p;)_[y]=0;return _}function I(p){return p>0?Math.floor(p):Math.ceil(p)}function R(p,_){var y=p.length,D=_.length,C=new Array(y),F=0,Y=i,k,Z;for(Z=0;Z<D;Z++)k=p[Z]+_[Z]+F,F=k>=Y?1:0,C[Z]=k-F*Y;for(;Z<y;)k=p[Z]+F,F=k===Y?1:0,C[Z++]=k-F*Y;return F>0&&C.push(F),C}function A(p,_){return p.length>=_.length?R(p,_):R(_,p)}function U(p,_){var y=p.length,D=new Array(y),C=i,F,Y;for(Y=0;Y<y;Y++)F=p[Y]-C+_,_=Math.floor(F/C),D[Y]=F-_*C,_+=1;for(;_>0;)D[Y++]=_%C,_=Math.floor(_/C);return D}u.prototype.add=function(p){var _=v(p);if(this.sign!==_.sign)return this.subtract(_.negate());var y=this.value,D=_.value;return _.isSmall?new u(U(y,Math.abs(D)),this.sign):new u(A(y,D),this.sign)},u.prototype.plus=u.prototype.add,d.prototype.add=function(p){var _=v(p),y=this.value;if(y<0!==_.sign)return this.subtract(_.negate());var D=_.value;if(_.isSmall){if(g(y+D))return new d(y+D);D=x(Math.abs(D))}return new u(U(D,Math.abs(y)),y<0)},d.prototype.plus=d.prototype.add,h.prototype.add=function(p){return new h(this.value+v(p).value)},h.prototype.plus=h.prototype.add;function O(p,_){var y=p.length,D=_.length,C=new Array(y),F=0,Y=i,k,Z;for(k=0;k<D;k++)Z=p[k]-F-_[k],Z<0?(Z+=Y,F=1):F=0,C[k]=Z;for(k=D;k<y;k++){if(Z=p[k]-F,Z<0)Z+=Y;else{C[k++]=Z;break}C[k]=Z}for(;k<y;k++)C[k]=p[k];return m(C),C}function B(p,_,y){var D;return Se(p,_)>=0?D=O(p,_):(D=O(_,p),y=!y),D=S(D),typeof D=="number"?(y&&(D=-D),new d(D)):new u(D,y)}function X(p,_,y){var D=p.length,C=new Array(D),F=-_,Y=i,k,Z;for(k=0;k<D;k++)Z=p[k]+F,F=Math.floor(Z/Y),Z%=Y,C[k]=Z<0?Z+Y:Z;return C=S(C),typeof C=="number"?(y&&(C=-C),new d(C)):new u(C,y)}u.prototype.subtract=function(p){var _=v(p);if(this.sign!==_.sign)return this.add(_.negate());var y=this.value,D=_.value;return _.isSmall?X(y,Math.abs(D),this.sign):B(y,D,this.sign)},u.prototype.minus=u.prototype.subtract,d.prototype.subtract=function(p){var _=v(p),y=this.value;if(y<0!==_.sign)return this.add(_.negate());var D=_.value;return _.isSmall?new d(y-D):X(D,Math.abs(y),y>=0)},d.prototype.minus=d.prototype.subtract,h.prototype.subtract=function(p){return new h(this.value-v(p).value)},h.prototype.minus=h.prototype.subtract,u.prototype.negate=function(){return new u(this.value,!this.sign)},d.prototype.negate=function(){var p=this.sign,_=new d(-this.value);return _.sign=!p,_},h.prototype.negate=function(){return new h(-this.value)},u.prototype.abs=function(){return new u(this.value,!1)},d.prototype.abs=function(){return new d(Math.abs(this.value))},h.prototype.abs=function(){return new h(this.value>=0?this.value:-this.value)};function b(p,_){var y=p.length,D=_.length,C=y+D,F=f(C),Y=i,k,Z,he,fe,se;for(he=0;he<y;++he){fe=p[he];for(var Me=0;Me<D;++Me)se=_[Me],k=fe*se+F[he+Me],Z=Math.floor(k/Y),F[he+Me]=k-Z*Y,F[he+Me+1]+=Z}return m(F),F}function T(p,_){var y=p.length,D=new Array(y),C=i,F=0,Y,k;for(k=0;k<y;k++)Y=p[k]*_+F,F=Math.floor(Y/C),D[k]=Y-F*C;for(;F>0;)D[k++]=F%C,F=Math.floor(F/C);return D}function G(p,_){for(var y=[];_-- >0;)y.push(0);return y.concat(p)}function W(p,_){var y=Math.max(p.length,_.length);if(y<=30)return b(p,_);y=Math.ceil(y/2);var D=p.slice(y),C=p.slice(0,y),F=_.slice(y),Y=_.slice(0,y),k=W(C,Y),Z=W(D,F),he=W(A(C,D),A(Y,F)),fe=A(A(k,G(O(O(he,k),Z),y)),G(Z,2*y));return m(fe),fe}function ee(p,_){return-.012*p-.012*_+15e-6*p*_>0}u.prototype.multiply=function(p){var _=v(p),y=this.value,D=_.value,C=this.sign!==_.sign,F;if(_.isSmall){if(D===0)return l[0];if(D===1)return this;if(D===-1)return this.negate();if(F=Math.abs(D),F<i)return new u(T(y,F),C);D=x(F)}return ee(y.length,D.length)?new u(W(y,D),C):new u(b(y,D),C)},u.prototype.times=u.prototype.multiply;function oe(p,_,y){return p<i?new u(T(_,p),y):new u(b(_,x(p)),y)}d.prototype._multiplyBySmall=function(p){return g(p.value*this.value)?new d(p.value*this.value):oe(Math.abs(p.value),x(Math.abs(this.value)),this.sign!==p.sign)},u.prototype._multiplyBySmall=function(p){return p.value===0?l[0]:p.value===1?this:p.value===-1?this.negate():oe(Math.abs(p.value),this.value,this.sign!==p.sign)},d.prototype.multiply=function(p){return v(p)._multiplyBySmall(this)},d.prototype.times=d.prototype.multiply,h.prototype.multiply=function(p){return new h(this.value*v(p).value)},h.prototype.times=h.prototype.multiply;function re(p){var _=p.length,y=f(_+_),D=i,C,F,Y,k,Z;for(Y=0;Y<_;Y++){k=p[Y],F=0-k*k;for(var he=Y;he<_;he++)Z=p[he],C=2*(k*Z)+y[Y+he]+F,F=Math.floor(C/D),y[Y+he]=C-F*D;y[Y+_]=F}return m(y),y}u.prototype.square=function(){return new u(re(this.value),!1)},d.prototype.square=function(){var p=this.value*this.value;return g(p)?new d(p):new u(re(x(Math.abs(this.value))),!1)},h.prototype.square=function(p){return new h(this.value*this.value)};function ae(p,_){var y=p.length,D=_.length,C=i,F=f(_.length),Y=_[D-1],k=Math.ceil(C/(2*Y)),Z=T(p,k),he=T(_,k),fe,se,Me,H,ue,ve,Re;for(Z.length<=y&&Z.push(0),he.push(0),Y=he[D-1],se=y-D;se>=0;se--){for(fe=C-1,Z[se+D]!==Y&&(fe=Math.floor((Z[se+D]*C+Z[se+D-1])/Y)),Me=0,H=0,ve=he.length,ue=0;ue<ve;ue++)Me+=fe*he[ue],Re=Math.floor(Me/C),H+=Z[se+ue]-(Me-Re*C),Me=Re,H<0?(Z[se+ue]=H+C,H=-1):(Z[se+ue]=H,H=0);for(;H!==0;){for(fe-=1,Me=0,ue=0;ue<ve;ue++)Me+=Z[se+ue]-C+he[ue],Me<0?(Z[se+ue]=Me+C,Me=0):(Z[se+ue]=Me,Me=1);H+=Me}F[se]=fe}return Z=ne(Z,k)[0],[S(F),S(Z)]}function de(p,_){for(var y=p.length,D=_.length,C=[],F=[],Y=i,k,Z,he,fe,se;y;){if(F.unshift(p[--y]),m(F),Se(F,_)<0){C.push(0);continue}Z=F.length,he=F[Z-1]*Y+F[Z-2],fe=_[D-1]*Y+_[D-2],Z>D&&(he=(he+1)*Y),k=Math.ceil(he/fe);do{if(se=T(_,k),Se(se,F)<=0)break;k--}while(k);C.push(k),F=O(F,se)}return C.reverse(),[S(C),S(F)]}function ne(p,_){var y=p.length,D=f(y),C=i,F,Y,k,Z;for(k=0,F=y-1;F>=0;--F)Z=k*C+p[F],Y=I(Z/_),k=Z-Y*_,D[F]=Y|0;return[D,k|0]}function Ee(p,_){var y,D=v(_);if(c)return[new h(p.value/D.value),new h(p.value%D.value)];var C=p.value,F=D.value,Y;if(F===0)throw new Error("Cannot divide by zero");if(p.isSmall)return D.isSmall?[new d(I(C/F)),new d(C%F)]:[l[0],p];if(D.isSmall){if(F===1)return[p,l[0]];if(F==-1)return[p.negate(),l[0]];var k=Math.abs(F);if(k<i){y=ne(C,k),Y=S(y[0]);var Z=y[1];return p.sign&&(Z=-Z),typeof Y=="number"?(p.sign!==D.sign&&(Y=-Y),[new d(Y),new d(Z)]):[new u(Y,p.sign!==D.sign),new d(Z)]}F=x(k)}var he=Se(C,F);if(he===-1)return[l[0],p];if(he===0)return[l[p.sign===D.sign?1:-1],l[0]];C.length+F.length<=200?y=ae(C,F):y=de(C,F),Y=y[0];var fe=p.sign!==D.sign,se=y[1],Me=p.sign;return typeof Y=="number"?(fe&&(Y=-Y),Y=new d(Y)):Y=new u(Y,fe),typeof se=="number"?(Me&&(se=-se),se=new d(se)):se=new u(se,Me),[Y,se]}u.prototype.divmod=function(p){var _=Ee(this,p);return{quotient:_[0],remainder:_[1]}},h.prototype.divmod=d.prototype.divmod=u.prototype.divmod,u.prototype.divide=function(p){return Ee(this,p)[0]},h.prototype.over=h.prototype.divide=function(p){return new h(this.value/v(p).value)},d.prototype.over=d.prototype.divide=u.prototype.over=u.prototype.divide,u.prototype.mod=function(p){return Ee(this,p)[1]},h.prototype.mod=h.prototype.remainder=function(p){return new h(this.value%v(p).value)},d.prototype.remainder=d.prototype.mod=u.prototype.remainder=u.prototype.mod,u.prototype.pow=function(p){var _=v(p),y=this.value,D=_.value,C,F,Y;if(D===0)return l[1];if(y===0)return l[0];if(y===1)return l[1];if(y===-1)return _.isEven()?l[1]:l[-1];if(_.sign)return l[0];if(!_.isSmall)throw new Error("The exponent "+_.toString()+" is too large.");if(this.isSmall&&g(C=Math.pow(y,D)))return new d(I(C));for(F=this,Y=l[1];D&!0&&(Y=Y.times(F),--D),D!==0;)D/=2,F=F.square();return Y},d.prototype.pow=u.prototype.pow,h.prototype.pow=function(p){var _=v(p),y=this.value,D=_.value,C=BigInt(0),F=BigInt(1),Y=BigInt(2);if(D===C)return l[1];if(y===C)return l[0];if(y===F)return l[1];if(y===BigInt(-1))return _.isEven()?l[1]:l[-1];if(_.isNegative())return new h(C);for(var k=this,Z=l[1];(D&F)===F&&(Z=Z.times(k),--D),D!==C;)D/=Y,k=k.square();return Z},u.prototype.modPow=function(p,_){if(p=v(p),_=v(_),_.isZero())throw new Error("Cannot take modPow with modulus 0");var y=l[1],D=this.mod(_);for(p.isNegative()&&(p=p.multiply(l[-1]),D=D.modInv(_));p.isPositive();){if(D.isZero())return l[0];p.isOdd()&&(y=y.multiply(D).mod(_)),p=p.divide(2),D=D.square().mod(_)}return y},h.prototype.modPow=d.prototype.modPow=u.prototype.modPow;function Se(p,_){if(p.length!==_.length)return p.length>_.length?1:-1;for(var y=p.length-1;y>=0;y--)if(p[y]!==_[y])return p[y]>_[y]?1:-1;return 0}u.prototype.compareAbs=function(p){var _=v(p),y=this.value,D=_.value;return _.isSmall?1:Se(y,D)},d.prototype.compareAbs=function(p){var _=v(p),y=Math.abs(this.value),D=_.value;return _.isSmall?(D=Math.abs(D),y===D?0:y>D?1:-1):-1},h.prototype.compareAbs=function(p){var _=this.value,y=v(p).value;return _=_>=0?_:-_,y=y>=0?y:-y,_===y?0:_>y?1:-1},u.prototype.compare=function(p){if(p===1/0)return-1;if(p===-1/0)return 1;var _=v(p),y=this.value,D=_.value;return this.sign!==_.sign?_.sign?1:-1:_.isSmall?this.sign?-1:1:Se(y,D)*(this.sign?-1:1)},u.prototype.compareTo=u.prototype.compare,d.prototype.compare=function(p){if(p===1/0)return-1;if(p===-1/0)return 1;var _=v(p),y=this.value,D=_.value;return _.isSmall?y==D?0:y>D?1:-1:y<0!==_.sign?y<0?-1:1:y<0?1:-1},d.prototype.compareTo=d.prototype.compare,h.prototype.compare=function(p){if(p===1/0)return-1;if(p===-1/0)return 1;var _=this.value,y=v(p).value;return _===y?0:_>y?1:-1},h.prototype.compareTo=h.prototype.compare,u.prototype.equals=function(p){return this.compare(p)===0},h.prototype.eq=h.prototype.equals=d.prototype.eq=d.prototype.equals=u.prototype.eq=u.prototype.equals,u.prototype.notEquals=function(p){return this.compare(p)!==0},h.prototype.neq=h.prototype.notEquals=d.prototype.neq=d.prototype.notEquals=u.prototype.neq=u.prototype.notEquals,u.prototype.greater=function(p){return this.compare(p)>0},h.prototype.gt=h.prototype.greater=d.prototype.gt=d.prototype.greater=u.prototype.gt=u.prototype.greater,u.prototype.lesser=function(p){return this.compare(p)<0},h.prototype.lt=h.prototype.lesser=d.prototype.lt=d.prototype.lesser=u.prototype.lt=u.prototype.lesser,u.prototype.greaterOrEquals=function(p){return this.compare(p)>=0},h.prototype.geq=h.prototype.greaterOrEquals=d.prototype.geq=d.prototype.greaterOrEquals=u.prototype.geq=u.prototype.greaterOrEquals,u.prototype.lesserOrEquals=function(p){return this.compare(p)<=0},h.prototype.leq=h.prototype.lesserOrEquals=d.prototype.leq=d.prototype.lesserOrEquals=u.prototype.leq=u.prototype.lesserOrEquals,u.prototype.isEven=function(){return(this.value[0]&1)===0},d.prototype.isEven=function(){return(this.value&1)===0},h.prototype.isEven=function(){return(this.value&BigInt(1))===BigInt(0)},u.prototype.isOdd=function(){return(this.value[0]&1)===1},d.prototype.isOdd=function(){return(this.value&1)===1},h.prototype.isOdd=function(){return(this.value&BigInt(1))===BigInt(1)},u.prototype.isPositive=function(){return!this.sign},d.prototype.isPositive=function(){return this.value>0},h.prototype.isPositive=d.prototype.isPositive,u.prototype.isNegative=function(){return this.sign},d.prototype.isNegative=function(){return this.value<0},h.prototype.isNegative=d.prototype.isNegative,u.prototype.isUnit=function(){return!1},d.prototype.isUnit=function(){return Math.abs(this.value)===1},h.prototype.isUnit=function(){return this.abs().value===BigInt(1)},u.prototype.isZero=function(){return!1},d.prototype.isZero=function(){return this.value===0},h.prototype.isZero=function(){return this.value===BigInt(0)},u.prototype.isDivisibleBy=function(p){var _=v(p);return _.isZero()?!1:_.isUnit()?!0:_.compareAbs(2)===0?this.isEven():this.mod(_).isZero()},h.prototype.isDivisibleBy=d.prototype.isDivisibleBy=u.prototype.isDivisibleBy;function ke(p){var _=p.abs();if(_.isUnit())return!1;if(_.equals(2)||_.equals(3)||_.equals(5))return!0;if(_.isEven()||_.isDivisibleBy(3)||_.isDivisibleBy(5))return!1;if(_.lesser(49))return!0}function nt(p,_){for(var y=p.prev(),D=y,C=0,F,Y,k;D.isEven();)D=D.divide(2),C++;e:for(Y=0;Y<_.length;Y++)if(!p.lesser(_[Y])&&(k=e(_[Y]).modPow(D,p),!(k.isUnit()||k.equals(y)))){for(F=C-1;F!=0;F--){if(k=k.square().mod(p),k.isUnit())return!1;if(k.equals(y))continue e}return!1}return!0}u.prototype.isPrime=function(p){var _=ke(this);if(_!==t)return _;var y=this.abs(),D=y.bitLength();if(D<=64)return nt(y,[2,3,5,7,11,13,17,19,23,29,31,37]);for(var C=Math.log(2)*D.toJSNumber(),F=Math.ceil(p===!0?2*Math.pow(C,2):C),Y=[],k=0;k<F;k++)Y.push(e(k+2));return nt(y,Y)},h.prototype.isPrime=d.prototype.isPrime=u.prototype.isPrime,u.prototype.isProbablePrime=function(p,_){var y=ke(this);if(y!==t)return y;for(var D=this.abs(),C=p===t?5:p,F=[],Y=0;Y<C;Y++)F.push(e.randBetween(2,D.minus(2),_));return nt(D,F)},h.prototype.isProbablePrime=d.prototype.isProbablePrime=u.prototype.isProbablePrime,u.prototype.modInv=function(p){for(var _=e.zero,y=e.one,D=v(p),C=this.abs(),F,Y,k;!C.isZero();)F=D.divide(C),Y=_,k=D,_=y,D=C,y=Y.subtract(F.multiply(y)),C=k.subtract(F.multiply(C));if(!D.isUnit())throw new Error(this.toString()+" and "+p.toString()+" are not co-prime");return _.compare(0)===-1&&(_=_.add(p)),this.isNegative()?_.negate():_},h.prototype.modInv=d.prototype.modInv=u.prototype.modInv,u.prototype.next=function(){var p=this.value;return this.sign?X(p,1,this.sign):new u(U(p,1),this.sign)},d.prototype.next=function(){var p=this.value;return p+1<s?new d(p+1):new u(a,!1)},h.prototype.next=function(){return new h(this.value+BigInt(1))},u.prototype.prev=function(){var p=this.value;return this.sign?new u(U(p,1),!0):X(p,1,this.sign)},d.prototype.prev=function(){var p=this.value;return p-1>-s?new d(p-1):new u(a,!0)},h.prototype.prev=function(){return new h(this.value-BigInt(1))};for(var ct=[1];2*ct[ct.length-1]<=i;)ct.push(2*ct[ct.length-1]);var xt=ct.length,st=ct[xt-1];function le(p){return Math.abs(p)<=i}u.prototype.shiftLeft=function(p){var _=v(p).toJSNumber();if(!le(_))throw new Error(String(_)+" is too large for shifting.");if(_<0)return this.shiftRight(-_);var y=this;if(y.isZero())return y;for(;_>=xt;)y=y.multiply(st),_-=xt-1;return y.multiply(ct[_])},h.prototype.shiftLeft=d.prototype.shiftLeft=u.prototype.shiftLeft,u.prototype.shiftRight=function(p){var _,y=v(p).toJSNumber();if(!le(y))throw new Error(String(y)+" is too large for shifting.");if(y<0)return this.shiftLeft(-y);for(var D=this;y>=xt;){if(D.isZero()||D.isNegative()&&D.isUnit())return D;_=Ee(D,st),D=_[1].isNegative()?_[0].prev():_[0],y-=xt-1}return _=Ee(D,ct[y]),_[1].isNegative()?_[0].prev():_[0]},h.prototype.shiftRight=d.prototype.shiftRight=u.prototype.shiftRight;function ie(p,_,y){_=v(_);for(var D=p.isNegative(),C=_.isNegative(),F=D?p.not():p,Y=C?_.not():_,k=0,Z=0,he=null,fe=null,se=[];!F.isZero()||!Y.isZero();)he=Ee(F,st),k=he[1].toJSNumber(),D&&(k=st-1-k),fe=Ee(Y,st),Z=fe[1].toJSNumber(),C&&(Z=st-1-Z),F=he[0],Y=fe[0],se.push(y(k,Z));for(var Me=y(D?1:0,C?1:0)!==0?e(-1):e(0),H=se.length-1;H>=0;H-=1)Me=Me.multiply(st).add(e(se[H]));return Me}u.prototype.not=function(){return this.negate().prev()},h.prototype.not=d.prototype.not=u.prototype.not,u.prototype.and=function(p){return ie(this,p,function(_,y){return _&y})},h.prototype.and=d.prototype.and=u.prototype.and,u.prototype.or=function(p){return ie(this,p,function(_,y){return _|y})},h.prototype.or=d.prototype.or=u.prototype.or,u.prototype.xor=function(p){return ie(this,p,function(_,y){return _^y})},h.prototype.xor=d.prototype.xor=u.prototype.xor;var Ne=1<<30,qe=(i&-i)*(i&-i)|Ne;function we(p){var _=p.value,y=typeof _=="number"?_|Ne:typeof _=="bigint"?_|BigInt(Ne):_[0]+_[1]*i|qe;return y&-y}function at(p,_){if(_.compareTo(p)<=0){var y=at(p,_.square(_)),D=y.p,C=y.e,F=D.multiply(_);return F.compareTo(p)<=0?{p:F,e:C*2+1}:{p:D,e:C*2}}return{p:e(1),e:0}}u.prototype.bitLength=function(){var p=this;return p.compareTo(e(0))<0&&(p=p.negate().subtract(e(1))),p.compareTo(e(0))===0?e(0):e(at(p,e(2)).e).add(e(1))},h.prototype.bitLength=d.prototype.bitLength=u.prototype.bitLength;function Ht(p,_){return p=v(p),_=v(_),p.greater(_)?p:_}function P(p,_){return p=v(p),_=v(_),p.lesser(_)?p:_}function yt(p,_){if(p=v(p).abs(),_=v(_).abs(),p.equals(_))return p;if(p.isZero())return _;if(_.isZero())return p;for(var y=l[1],D,C;p.isEven()&&_.isEven();)D=P(we(p),we(_)),p=p.divide(D),_=_.divide(D),y=y.multiply(D);for(;p.isEven();)p=p.divide(we(p));do{for(;_.isEven();)_=_.divide(we(_));p.greater(_)&&(C=_,_=p,p=C),_=_.subtract(p)}while(!_.isZero());return y.isUnit()?p:p.multiply(y)}function Qe(p,_){return p=v(p).abs(),_=v(_).abs(),p.divide(yt(p,_)).multiply(_)}function We(p,_,y){p=v(p),_=v(_);var D=y||Math.random,C=P(p,_),F=Ht(p,_),Y=F.subtract(C).add(1);if(Y.isSmall)return C.add(Math.floor(D()*Y));for(var k=je(Y,i).value,Z=[],he=!0,fe=0;fe<k.length;fe++){var se=he?k[fe]+(fe+1<k.length?k[fe+1]/i:0):i,Me=I(D()*se);Z.push(Me),Me<k[fe]&&(he=!1)}return C.add(l.fromArray(Z,i,!1))}var Ue=function(p,_,y,D){y=y||o,p=String(p),D||(p=p.toLowerCase(),y=y.toLowerCase());var C=p.length,F,Y=Math.abs(_),k={};for(F=0;F<y.length;F++)k[y[F]]=F;for(F=0;F<C;F++){var Z=p[F];if(Z!=="-"&&Z in k&&k[Z]>=Y){if(Z==="1"&&Y===1)continue;throw new Error(Z+" is not a valid digit in base "+_+".")}}_=v(_);var he=[],fe=p[0]==="-";for(F=fe?1:0;F<p.length;F++){var Z=p[F];if(Z in k)he.push(v(k[Z]));else if(Z==="<"){var se=F;do F++;while(p[F]!==">"&&F<p.length);he.push(v(p.slice(se+1,F)))}else throw new Error(Z+" is not a valid character")}return At(he,_,fe)};function At(p,_,y){var D=l[0],C=l[1],F;for(F=p.length-1;F>=0;F--)D=D.add(p[F].times(C)),C=C.times(_);return y?D.negate():D}function Oe(p,_){return _=_||o,p<_.length?_[p]:"<"+p+">"}function je(p,_){if(_=e(_),_.isZero()){if(p.isZero())return{value:[0],isNegative:!1};throw new Error("Cannot convert nonzero numbers to base 0.")}if(_.equals(-1)){if(p.isZero())return{value:[0],isNegative:!1};if(p.isNegative())return{value:[].concat.apply([],Array.apply(null,Array(-p.toJSNumber())).map(Array.prototype.valueOf,[1,0])),isNegative:!1};var y=Array.apply(null,Array(p.toJSNumber()-1)).map(Array.prototype.valueOf,[0,1]);return y.unshift([1]),{value:[].concat.apply([],y),isNegative:!1}}var D=!1;if(p.isNegative()&&_.isPositive()&&(D=!0,p=p.abs()),_.isUnit())return p.isZero()?{value:[0],isNegative:!1}:{value:Array.apply(null,Array(p.toJSNumber())).map(Number.prototype.valueOf,1),isNegative:D};for(var C=[],F=p,Y;F.isNegative()||F.compareAbs(_)>=0;){Y=F.divmod(_),F=Y.quotient;var k=Y.remainder;k.isNegative()&&(k=_.minus(k).abs(),F=F.next()),C.push(k.toJSNumber())}return C.push(F.toJSNumber()),{value:C.reverse(),isNegative:D}}function kt(p,_,y){var D=je(p,_);return(D.isNegative?"-":"")+D.value.map(function(C){return Oe(C,y)}).join("")}u.prototype.toArray=function(p){return je(this,p)},d.prototype.toArray=function(p){return je(this,p)},h.prototype.toArray=function(p){return je(this,p)},u.prototype.toString=function(p,_){if(p===t&&(p=10),p!==10||_)return kt(this,p,_);for(var y=this.value,D=y.length,C=String(y[--D]),F="0000000",Y;--D>=0;)Y=String(y[D]),C+=F.slice(Y.length)+Y;var k=this.sign?"-":"";return k+C},d.prototype.toString=function(p,_){return p===t&&(p=10),p!=10||_?kt(this,p,_):String(this.value)},h.prototype.toString=d.prototype.toString,h.prototype.toJSON=u.prototype.toJSON=d.prototype.toJSON=function(){return this.toString()},u.prototype.valueOf=function(){return parseInt(this.toString(),10)},u.prototype.toJSNumber=u.prototype.valueOf,d.prototype.valueOf=function(){return this.value},d.prototype.toJSNumber=d.prototype.valueOf,h.prototype.valueOf=h.prototype.toJSNumber=function(){return parseInt(this.toString(),10)};function Pt(p){if(g(+p)){var _=+p;if(_===I(_))return c?new h(BigInt(_)):new d(_);throw new Error("Invalid integer: "+p)}var y=p[0]==="-";y&&(p=p.slice(1));var D=p.split(/e/i);if(D.length>2)throw new Error("Invalid integer: "+D.join("e"));if(D.length===2){var C=D[1];if(C[0]==="+"&&(C=C.slice(1)),C=+C,C!==I(C)||!g(C))throw new Error("Invalid integer: "+C+" is not a valid exponent.");var F=D[0],Y=F.indexOf(".");if(Y>=0&&(C-=F.length-Y-1,F=F.slice(0,Y)+F.slice(Y+1)),C<0)throw new Error("Cannot include negative exponent part for integers");F+=new Array(C+1).join("0"),p=F}var k=/^([0-9][0-9]*)$/.test(p);if(!k)throw new Error("Invalid integer: "+p);if(c)return new h(BigInt(y?"-"+p:p));for(var Z=[],he=p.length,fe=r,se=he-fe;he>0;)Z.push(+p.slice(se,he)),se-=fe,se<0&&(se=0),he-=fe;return m(Z),new u(Z,y)}function w(p){if(c)return new h(BigInt(p));if(g(p)){if(p!==I(p))throw new Error(p+" is not an integer.");return new d(p)}return Pt(p.toString())}function v(p){return typeof p=="number"?w(p):typeof p=="string"?Pt(p):typeof p=="bigint"?new h(p):p}for(var j=0;j<1e3;j++)l[j]=v(j),j>0&&(l[-j]=v(-j));return l.one=l[1],l.zero=l[0],l.minusOne=l[-1],l.max=Ht,l.min=P,l.gcd=yt,l.lcm=Qe,l.isInstance=function(p){return p instanceof u||p instanceof d||p instanceof h},l.randBetween=We,l.fromArray=function(p,_,y){return At(p.map(v),v(_||10),y)},l})();n.hasOwnProperty("exports")&&(n.exports=e)})(jo)),jo.exports}var Ap=bp(),wp=Ld(Ap);const zd=64,Bl=16,Zi=zd/Bl;function Rp(){try{return!0}catch{return!1}}function Ip(n,e,t){let i=0;for(let r=0;r<t;r++){const s=n[e+r];if(s===void 0)break;i+=s*16**r}return i}function Vd(n){const e=[];for(let t=0;t<n.length;t++){let i=Number(n[t]);for(let r=0;i||r<e.length;r++)i+=(e[r]||0)*10,e[r]=i%16,i=(i-e[r])/16}return e}function Dp(n){const e=Vd(n),t=Array(Zi);for(let i=0;i<Zi;i++)t[Zi-1-i]=Ip(e,i*Zi,Zi);return t}class ii{static fromString(e){return new ii(Dp(e),e)}static fromBit(e){const t=Array(Zi),i=Math.floor(e/Bl);for(let r=0;r<Zi;r++)t[Zi-1-r]=r===i?1<<e-i*Bl:0;return new ii(t)}constructor(e,t){this.parts=e,this.str=t}and({parts:e}){return new ii(this.parts.map((t,i)=>t&e[i]))}or({parts:e}){return new ii(this.parts.map((t,i)=>t|e[i]))}xor({parts:e}){return new ii(this.parts.map((t,i)=>t^e[i]))}not(){return new ii(this.parts.map(e=>~e))}equals({parts:e}){return this.parts.every((t,i)=>t===e[i])}toString(){if(this.str!=null)return this.str;const e=new Array(zd/4);return this.parts.forEach((t,i)=>{const r=Vd(t.toString());for(let s=0;s<4;s++)e[s+i*4]=r[3-s]||0}),this.str=wp.fromArray(e,16).toString()}toJSON(){return this.toString()}}const dr=Rp();dr&&BigInt.prototype.toJSON==null&&(BigInt.prototype.toJSON=function(){return this.toString()});const Oa={},Wd=dr?function(e){return BigInt(e)}:function(e){return e instanceof ii?e:(typeof e=="number"&&(e=e.toString()),Oa[e]!=null||(Oa[e]=ii.fromString(e)),Oa[e])},rn=Wd(0),Lo=dr?function(e=rn,t=rn){return e&t}:function(e=rn,t=rn){return e.and(t)},Xd=dr?function(e=rn,t=rn){return e|t}:function(e=rn,t=rn){return e.or(t)},Np=dr?function(e=rn,t=rn){return e^t}:function(e=rn,t=rn){return e.xor(t)},Lp=dr?function(e=rn){return~e}:function(e=rn){return e.not()},Oc=dr?function(e,t){return e===t}:function(e,t){return e==null||t==null?e==t:e.equals(t)};function Pp(...n){let e=n[0];for(let t=1;t<n.length;t++)e=Xd(e,n[t]);return e}function Cp(n,e){return Oc(Lo(n,e),e)}function Up(n,e){return!Oc(Lo(n,e),rn)}function Op(n,e){return e===rn?n:Xd(n,e)}function Fp(n,e){return e===rn?n:Np(n,Lo(n,e))}const Bp=dr?function(e){return BigInt(1)<<BigInt(e)}:function(e){return ii.fromBit(e)};var Ze={combine:Pp,add:Op,remove:Fp,filter:Lo,invert:Lp,has:Cp,hasAny:Up,equals:Oc,deserialize:Wd,getFlag:Bp},_u;(function(n){n[n.CLOSE_NORMAL=1e3]="CLOSE_NORMAL",n[n.CLOSE_UNSUPPORTED=1003]="CLOSE_UNSUPPORTED",n[n.CLOSE_ABNORMAL=1006]="CLOSE_ABNORMAL",n[n.INVALID_CLIENTID=4e3]="INVALID_CLIENTID",n[n.INVALID_ORIGIN=4001]="INVALID_ORIGIN",n[n.RATELIMITED=4002]="RATELIMITED",n[n.TOKEN_REVOKED=4003]="TOKEN_REVOKED",n[n.INVALID_VERSION=4004]="INVALID_VERSION",n[n.INVALID_ENCODING=4005]="INVALID_ENCODING"})(_u||(_u={}));var kl;(function(n){n[n.INVALID_PAYLOAD=4e3]="INVALID_PAYLOAD",n[n.INVALID_COMMAND=4002]="INVALID_COMMAND",n[n.INVALID_GUILD=4003]="INVALID_GUILD",n[n.INVALID_EVENT=4004]="INVALID_EVENT",n[n.INVALID_CHANNEL=4005]="INVALID_CHANNEL",n[n.INVALID_PERMISSIONS=4006]="INVALID_PERMISSIONS",n[n.INVALID_CLIENTID=4007]="INVALID_CLIENTID",n[n.INVALID_ORIGIN=4008]="INVALID_ORIGIN",n[n.INVALID_TOKEN=4009]="INVALID_TOKEN",n[n.INVALID_USER=4010]="INVALID_USER"})(kl||(kl={}));var Gl;(function(n){n.LANDSCAPE="landscape",n.PORTRAIT="portrait"})(Gl||(Gl={}));var Ri;(function(n){n.MOBILE="mobile",n.DESKTOP="desktop"})(Ri||(Ri={}));Object.freeze({CREATE_INSTANT_INVITE:Ze.getFlag(0),KICK_MEMBERS:Ze.getFlag(1),BAN_MEMBERS:Ze.getFlag(2),ADMINISTRATOR:Ze.getFlag(3),MANAGE_CHANNELS:Ze.getFlag(4),MANAGE_GUILD:Ze.getFlag(5),ADD_REACTIONS:Ze.getFlag(6),VIEW_AUDIT_LOG:Ze.getFlag(7),PRIORITY_SPEAKER:Ze.getFlag(8),STREAM:Ze.getFlag(9),VIEW_CHANNEL:Ze.getFlag(10),SEND_MESSAGES:Ze.getFlag(11),SEND_TTS_MESSAGES:Ze.getFlag(12),MANAGE_MESSAGES:Ze.getFlag(13),EMBED_LINKS:Ze.getFlag(14),ATTACH_FILES:Ze.getFlag(15),READ_MESSAGE_HISTORY:Ze.getFlag(16),MENTION_EVERYONE:Ze.getFlag(17),USE_EXTERNAL_EMOJIS:Ze.getFlag(18),VIEW_GUILD_INSIGHTS:Ze.getFlag(19),CONNECT:Ze.getFlag(20),SPEAK:Ze.getFlag(21),MUTE_MEMBERS:Ze.getFlag(22),DEAFEN_MEMBERS:Ze.getFlag(23),MOVE_MEMBERS:Ze.getFlag(24),USE_VAD:Ze.getFlag(25),CHANGE_NICKNAME:Ze.getFlag(26),MANAGE_NICKNAMES:Ze.getFlag(27),MANAGE_ROLES:Ze.getFlag(28),MANAGE_WEBHOOKS:Ze.getFlag(29),MANAGE_GUILD_EXPRESSIONS:Ze.getFlag(30),USE_APPLICATION_COMMANDS:Ze.getFlag(31),REQUEST_TO_SPEAK:Ze.getFlag(32),MANAGE_EVENTS:Ze.getFlag(33),MANAGE_THREADS:Ze.getFlag(34),CREATE_PUBLIC_THREADS:Ze.getFlag(35),CREATE_PRIVATE_THREADS:Ze.getFlag(36),USE_EXTERNAL_STICKERS:Ze.getFlag(37),SEND_MESSAGES_IN_THREADS:Ze.getFlag(38),USE_EMBEDDED_ACTIVITIES:Ze.getFlag(39),MODERATE_MEMBERS:Ze.getFlag(40),VIEW_CREATOR_MONETIZATION_ANALYTICS:Ze.getFlag(41),USE_SOUNDBOARD:Ze.getFlag(42),CREATE_GUILD_EXPRESSIONS:Ze.getFlag(43),CREATE_EVENTS:Ze.getFlag(44),USE_EXTERNAL_SOUNDS:Ze.getFlag(45),SEND_VOICE_MESSAGES:Ze.getFlag(46),SEND_POLLS:Ze.getFlag(49),USE_EXTERNAL_APPS:Ze.getFlag(50)});const vu=-1,kp=250;function pn(n){return Hd(e=>{var t;const[i]=(t=Object.entries(n).find(([,r])=>r===e))!==null&&t!==void 0?t:[];return e!=null&&i===void 0?n.UNHANDLED:e},z().or(ze()))}function qd(n){const e=Cc().transform(t=>{const i=n.safeParse(t);return i.success?i.data:n._def.defaultValue()});return e.overlayType=n,e}const Gp=N.object({image_url:N.string()}).describe('Response for "INITIATE_IMAGE_UPLOAD" Command'),Hp=N.object({mediaUrl:N.string().max(1024)}).describe('Request for "OPEN_SHARE_MOMENT_DIALOG" Command'),zp=N.object({access_token:N.union([N.string(),N.null()]).optional()}).describe('Request for "AUTHENTICATE" Command'),Yd=N.object({access_token:N.string(),user:N.object({username:N.string(),discriminator:N.string(),id:N.string(),avatar:N.union([N.string(),N.null()]).optional(),public_flags:N.number(),global_name:N.union([N.string(),N.null()]).optional()}),scopes:N.array(qd(N.enum(["identify","identify.premium","email","connections","guilds","guilds.join","guilds.members.read","guilds.channels.read","gdm.join","bot","rpc","rpc.notifications.read","rpc.voice.read","rpc.voice.write","rpc.video.read","rpc.video.write","rpc.screenshare.read","rpc.screenshare.write","rpc.activities.write","webhook.incoming","messages.read","applications.builds.upload","applications.builds.read","applications.commands","applications.commands.permissions.update","applications.commands.update","applications.store.update","applications.entitlements","activities.read","activities.write","activities.invites.write","relationships.read","relationships.write","voice","dm_channels.read","role_connections.write","presences.read","presences.write","openid","dm_channels.messages.read","dm_channels.messages.write","gateway.connect","account.global_name.update","payment_sources.country_code","sdk.social_layer_presence","sdk.social_layer","lobbies.write","application_identities.write"]).or(N.literal(-1)).default(-1))),expires:N.string(),application:N.object({description:N.string(),icon:N.union([N.string(),N.null()]).optional(),id:N.string(),rpc_origins:N.array(N.string()).optional(),name:N.string()})}).describe('Response for "AUTHENTICATE" Command'),Zd=N.object({participants:N.array(N.object({id:N.string(),username:N.string(),global_name:N.union([N.string(),N.null()]).optional(),discriminator:N.string(),avatar:N.union([N.string(),N.null()]).optional(),flags:N.number(),bot:N.boolean(),avatar_decoration_data:N.union([N.object({asset:N.union([N.string(),N.null()]).optional(),skuId:N.string().optional(),expiresAt:N.number().optional()}),N.null()]).optional(),premium_type:N.union([N.number(),N.null()]).optional(),nickname:N.string().optional()}))}).describe('Response for "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS" Command'),Vp=N.object({command:N.string(),options:N.array(N.object({name:N.string(),value:N.string()})).optional(),content:N.string().max(2e3).optional(),require_launch_channel:N.boolean().optional(),preview_image:N.object({height:N.number(),url:N.string(),width:N.number()}).optional(),components:N.array(N.object({type:N.literal(1),components:N.array(N.object({type:N.literal(2),style:N.number().gte(1).lte(5),label:N.string().max(80).optional(),custom_id:N.string().max(100).describe("Developer-defined identifier for the button; max 100 characters").optional()})).max(5).optional()})).optional(),pid:N.number().optional()}).describe('Request for "SHARE_INTERACTION" Command'),Wp=N.object({success:N.boolean()}).describe('Response for "SHARE_INTERACTION" Command'),Xp=N.object({custom_id:N.string().max(64).optional(),message:N.string().max(1e3),link_id:N.string().max(64).optional()}).describe('Request for "SHARE_LINK" Command'),qp=N.object({success:N.boolean(),didCopyLink:N.boolean(),didSendMessage:N.boolean()}).describe('Response for "SHARE_LINK" Command'),Kd=N.object({relationships:N.array(N.object({type:N.number(),user:N.object({id:N.string(),username:N.string(),global_name:N.union([N.string(),N.null()]).optional(),discriminator:N.string(),avatar:N.union([N.string(),N.null()]).optional(),flags:N.number(),bot:N.boolean(),avatar_decoration_data:N.union([N.object({asset:N.union([N.string(),N.null()]).optional(),skuId:N.string().optional(),expiresAt:N.number().optional()}),N.null()]).optional(),premium_type:N.union([N.number(),N.null()]).optional()}),presence:N.object({status:N.string(),activity:N.union([N.object({session_id:N.string().optional(),type:N.number().optional(),name:N.string(),url:N.union([N.string(),N.null()]).optional(),application_id:N.string().optional(),status_display_type:N.number().optional(),state:N.string().optional(),state_url:N.string().optional(),details:N.string().optional(),details_url:N.string().optional(),emoji:N.union([N.object({name:N.string(),id:N.union([N.string(),N.null()]).optional(),animated:N.union([N.boolean(),N.null()]).optional()}),N.null()]).optional(),assets:N.object({large_image:N.string().optional(),large_text:N.string().optional(),large_url:N.string().optional(),small_image:N.string().optional(),small_text:N.string().optional(),small_url:N.string().optional()}).optional(),timestamps:N.object({start:N.number().optional(),end:N.number().optional()}).optional(),party:N.object({id:N.string().optional(),size:N.array(N.number()).min(2).max(2).optional(),privacy:N.number().optional()}).optional(),secrets:N.object({match:N.string().optional(),join:N.string().optional()}).optional(),sync_id:N.string().optional(),created_at:N.number().optional(),instance:N.boolean().optional(),flags:N.number().optional(),metadata:N.object({}).optional(),platform:N.string().optional(),supported_platforms:N.array(N.string()).optional(),buttons:N.array(N.string()).optional(),hangStatus:N.string().optional()}),N.null()]).optional()}).optional()}))}).describe('Response for "GET_RELATIONSHIPS" Command'),Yp=N.object({user_id:N.string(),content:N.string().min(0).max(1024).optional()}).describe('Request for "INVITE_USER_EMBEDDED" Command'),Zp=N.object({id:N.string().max(64)}).describe('Request for "GET_USER" Command'),Kp=N.union([N.object({id:N.string(),username:N.string(),global_name:N.union([N.string(),N.null()]).optional(),discriminator:N.string(),avatar:N.union([N.string(),N.null()]).optional(),flags:N.number(),bot:N.boolean(),avatar_decoration_data:N.union([N.object({asset:N.union([N.string(),N.null()]).optional(),skuId:N.string().optional(),expiresAt:N.number().optional()}),N.null()]).optional(),premium_type:N.union([N.number(),N.null()]).optional()}),N.null()]),jp=N.object({quest_id:N.string()}).describe('Request for "GET_QUEST_ENROLLMENT_STATUS" Command'),$p=N.object({quest_id:N.string(),is_enrolled:N.boolean(),enrolled_at:N.union([N.string(),N.null()]).optional()}).describe('Response for "GET_QUEST_ENROLLMENT_STATUS" Command'),Jp=N.object({quest_id:N.string()}).describe('Request for "QUEST_START_TIMER" Command'),Qp=N.object({success:N.boolean()}).describe('Response for "QUEST_START_TIMER" Command'),em=N.object({quest_id:N.string(),enrolled_at:N.union([N.string(),N.null()]).optional(),completed_at:N.union([N.string(),N.null()]).optional(),external_cta_url:N.string()}).describe('Response for "GET_QUEST" Command'),tm=N.object({ticket:N.string()}).describe('Response for "REQUEST_PROXY_TICKET_REFRESH" Command');var Dt;(function(n){n.INITIATE_IMAGE_UPLOAD="INITIATE_IMAGE_UPLOAD",n.OPEN_SHARE_MOMENT_DIALOG="OPEN_SHARE_MOMENT_DIALOG",n.AUTHENTICATE="AUTHENTICATE",n.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS="GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS",n.SHARE_INTERACTION="SHARE_INTERACTION",n.SHARE_LINK="SHARE_LINK",n.GET_RELATIONSHIPS="GET_RELATIONSHIPS",n.INVITE_USER_EMBEDDED="INVITE_USER_EMBEDDED",n.GET_USER="GET_USER",n.GET_QUEST_ENROLLMENT_STATUS="GET_QUEST_ENROLLMENT_STATUS",n.QUEST_START_TIMER="QUEST_START_TIMER",n.GET_QUEST="GET_QUEST",n.REQUEST_PROXY_TICKET_REFRESH="REQUEST_PROXY_TICKET_REFRESH"})(Dt||(Dt={}));const Eu=N.object({}).optional().nullable(),Bs=N.void(),jd={[Dt.INITIATE_IMAGE_UPLOAD]:{request:Bs,response:Gp},[Dt.OPEN_SHARE_MOMENT_DIALOG]:{request:Hp,response:Eu},[Dt.AUTHENTICATE]:{request:zp,response:Yd},[Dt.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]:{request:Bs,response:Zd},[Dt.SHARE_INTERACTION]:{request:Vp,response:Wp},[Dt.SHARE_LINK]:{request:Xp,response:qp},[Dt.GET_RELATIONSHIPS]:{request:Bs,response:Kd},[Dt.INVITE_USER_EMBEDDED]:{request:Yp,response:Eu},[Dt.GET_USER]:{request:Zp,response:Kp},[Dt.GET_QUEST_ENROLLMENT_STATUS]:{request:jp,response:$p},[Dt.QUEST_START_TIMER]:{request:Jp,response:Qp},[Dt.GET_QUEST]:{request:Bs,response:em},[Dt.REQUEST_PROXY_TICKET_REFRESH]:{request:Bs,response:tm}},nm="DISPATCH";var Ce;(function(n){n.AUTHORIZE="AUTHORIZE",n.GET_GUILDS="GET_GUILDS",n.GET_GUILD="GET_GUILD",n.GET_CHANNEL="GET_CHANNEL",n.GET_CHANNELS="GET_CHANNELS",n.SELECT_VOICE_CHANNEL="SELECT_VOICE_CHANNEL",n.SELECT_TEXT_CHANNEL="SELECT_TEXT_CHANNEL",n.SUBSCRIBE="SUBSCRIBE",n.UNSUBSCRIBE="UNSUBSCRIBE",n.CAPTURE_SHORTCUT="CAPTURE_SHORTCUT",n.SET_CERTIFIED_DEVICES="SET_CERTIFIED_DEVICES",n.SET_ACTIVITY="SET_ACTIVITY",n.GET_SKUS="GET_SKUS",n.GET_ENTITLEMENTS="GET_ENTITLEMENTS",n.GET_SKUS_EMBEDDED="GET_SKUS_EMBEDDED",n.GET_ENTITLEMENTS_EMBEDDED="GET_ENTITLEMENTS_EMBEDDED",n.START_PURCHASE="START_PURCHASE",n.SET_CONFIG="SET_CONFIG",n.SEND_ANALYTICS_EVENT="SEND_ANALYTICS_EVENT",n.USER_SETTINGS_GET_LOCALE="USER_SETTINGS_GET_LOCALE",n.OPEN_EXTERNAL_LINK="OPEN_EXTERNAL_LINK",n.ENCOURAGE_HW_ACCELERATION="ENCOURAGE_HW_ACCELERATION",n.CAPTURE_LOG="CAPTURE_LOG",n.SET_ORIENTATION_LOCK_STATE="SET_ORIENTATION_LOCK_STATE",n.OPEN_INVITE_DIALOG="OPEN_INVITE_DIALOG",n.GET_PLATFORM_BEHAVIORS="GET_PLATFORM_BEHAVIORS",n.GET_CHANNEL_PERMISSIONS="GET_CHANNEL_PERMISSIONS",n.AUTHENTICATE="AUTHENTICATE",n.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS="GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS",n.GET_QUEST="GET_QUEST",n.GET_QUEST_ENROLLMENT_STATUS="GET_QUEST_ENROLLMENT_STATUS",n.GET_RELATIONSHIPS="GET_RELATIONSHIPS",n.GET_USER="GET_USER",n.INITIATE_IMAGE_UPLOAD="INITIATE_IMAGE_UPLOAD",n.INVITE_USER_EMBEDDED="INVITE_USER_EMBEDDED",n.OPEN_SHARE_MOMENT_DIALOG="OPEN_SHARE_MOMENT_DIALOG",n.QUEST_START_TIMER="QUEST_START_TIMER",n.REQUEST_PROXY_TICKET_REFRESH="REQUEST_PROXY_TICKET_REFRESH",n.SHARE_INTERACTION="SHARE_INTERACTION",n.SHARE_LINK="SHARE_LINK"})(Ce||(Ce={}));const Rs=xe({cmd:z(),data:ma(),evt:No(),nonce:z()}).passthrough(),im=Object.assign(Object.assign({},Yd.shape.scopes.element.overlayType._def.innerType.options[0].Values),{UNHANDLED:-1});pn(im);const rm=Kd.shape.relationships.element,or=xe({id:z(),username:z(),discriminator:z(),global_name:z().optional().nullable(),avatar:z().optional().nullable(),avatar_decoration_data:xe({asset:z(),sku_id:z().optional()}).nullable(),bot:$e(),flags:ze().optional().nullable(),premium_type:ze().optional().nullable()}),Fc=xe({user:or,nick:z().optional().nullable(),roles:_t(z()),joined_at:z(),deaf:$e(),mute:$e()}),sm=xe({user_id:z(),nick:z().optional().nullable(),guild_id:z(),avatar:z().optional().nullable(),avatar_decoration_data:xe({asset:z(),sku_id:z().optional().nullable()}).optional().nullable(),color_string:z().optional().nullable()}),Bc=xe({id:z(),name:z().optional().nullable(),roles:_t(z()).optional().nullable(),user:or.optional().nullable(),require_colons:$e().optional().nullable(),managed:$e().optional().nullable(),animated:$e().optional().nullable(),available:$e().optional().nullable()}),$d=xe({mute:$e(),deaf:$e(),self_mute:$e(),self_deaf:$e(),suppress:$e()}),Jd=xe({mute:$e(),nick:z(),user:or,voice_state:$d,volume:ze()}),am={UNHANDLED:-1,IDLE:"idle",DND:"dnd",ONLINE:"online",OFFLINE:"offline"},Fa=pn(am),Qs=xe({name:z(),type:ze(),url:z().optional().nullable(),created_at:ze().optional().nullable(),timestamps:xe({start:ze(),end:ze()}).partial().optional().nullable(),application_id:z().optional().nullable(),details:z().optional().nullable(),details_url:z().url().optional().nullable(),state:z().optional().nullable(),state_url:z().url().optional().nullable(),emoji:Bc.optional().nullable(),party:xe({id:z().optional().nullable(),size:_t(ze()).optional().nullable()}).optional().nullable(),assets:xe({large_image:z().nullable(),large_text:z().nullable(),large_url:z().url().optional().nullable(),small_image:z().nullable(),small_text:z().nullable(),small_url:z().url().optional().nullable()}).partial().optional().nullable(),secrets:xe({join:z(),match:z()}).partial().optional().nullable(),instance:$e().optional().nullable(),flags:ze().optional().nullable()}),om={UNHANDLED:-1,ROLE:0,MEMBER:1},lm=xe({id:z(),type:pn(om),allow:z(),deny:z()}),Qd={UNHANDLED:-1,DM:1,GROUP_DM:3,GUILD_TEXT:0,GUILD_VOICE:2,GUILD_CATEGORY:4,GUILD_ANNOUNCEMENT:5,GUILD_STORE:6,ANNOUNCEMENT_THREAD:10,PUBLIC_THREAD:11,PRIVATE_THREAD:12,GUILD_STAGE_VOICE:13,GUILD_DIRECTORY:14,GUILD_FORUM:15},eh=xe({id:z(),type:pn(Qd),guild_id:z().optional().nullable(),position:ze().optional().nullable(),permission_overwrites:_t(lm).optional().nullable(),name:z().optional().nullable(),topic:z().optional().nullable(),nsfw:$e().optional().nullable(),last_message_id:z().optional().nullable(),bitrate:ze().optional().nullable(),user_limit:ze().optional().nullable(),rate_limit_per_user:ze().optional().nullable(),recipients:_t(or).optional().nullable(),icon:z().optional().nullable(),owner_id:z().optional().nullable(),application_id:z().optional().nullable(),parent_id:z().optional().nullable(),last_pin_timestamp:z().optional().nullable()}),cm=xe({user:or,guild_id:z(),status:Fa,activities:_t(Qs),client_status:xe({desktop:Fa,mobile:Fa,web:Fa}).partial()}),um=xe({id:z(),name:z(),color:ze(),hoist:$e(),position:ze(),permissions:z(),managed:$e(),mentionable:$e()});xe({id:z(),name:z(),owner_id:z(),icon:z().nullable(),icon_hash:z().optional().nullable(),splash:z().nullable(),discovery_splash:z().nullable(),owner:$e().optional().nullable(),permissions:z().optional().nullable(),region:z(),afk_channel_id:z().nullable(),afk_timeout:ze(),widget_enabled:$e().optional().nullable(),widget_channel_id:z().optional().nullable(),verification_level:ze(),default_message_notifications:ze(),explicit_content_filter:ze(),roles:_t(um),emojis:_t(Bc),features:_t(z()),mfa_level:ze(),application_id:z().nullable(),system_channel_id:z().nullable(),system_channel_flags:ze(),rules_channel_id:z().nullable(),joined_at:z().optional().nullable(),large:$e().optional().nullable(),unavailable:$e().optional().nullable(),member_count:ze().optional().nullable(),voice_states:_t($d).optional().nullable(),members:_t(Fc).optional().nullable(),channels:_t(eh).optional().nullable(),presences:_t(cm).optional().nullable(),max_presences:ze().optional().nullable(),max_members:ze().optional().nullable(),vanity_url_code:z().nullable(),description:z().nullable(),banner:z().nullable(),premium_tier:ze(),premium_subscription_count:ze().optional().nullable(),preferred_locale:z(),public_updates_channel_id:z().nullable(),max_video_channel_users:ze().optional().nullable(),approximate_member_count:ze().optional().nullable(),approximate_presence_count:ze().optional().nullable()});const dm=xe({id:z(),guild_id:z(),type:ze(),name:z()}),hm=xe({id:z(),filename:z(),size:ze(),url:z(),proxy_url:z(),height:ze().optional().nullable(),width:ze().optional().nullable()}),fm=xe({text:z(),icon_url:z().optional().nullable(),proxy_icon_url:z().optional().nullable()}),Hl=xe({url:z().optional().nullable(),proxy_url:z().optional().nullable(),height:ze().optional().nullable(),width:ze().optional().nullable()}),pm=Hl.omit({proxy_url:!0}),mm=xe({name:z().optional().nullable(),url:z().optional().nullable()}),gm=xe({name:z().optional().nullable(),url:z().optional().nullable(),icon_url:z().optional().nullable(),proxy_icon_url:z().optional().nullable()}),_m=xe({name:z(),value:z(),inline:$e()}),vm=xe({title:z().optional().nullable(),type:z().optional().nullable(),description:z().optional().nullable(),url:z().optional().nullable(),timestamp:z().optional().nullable(),color:ze().optional().nullable(),footer:fm.optional().nullable(),image:Hl.optional().nullable(),thumbnail:Hl.optional().nullable(),video:pm.optional().nullable(),provider:mm.optional().nullable(),author:gm.optional().nullable(),fields:_t(_m).optional().nullable()}),Em=xe({count:ze(),me:$e(),emoji:Bc}),xm=xe({type:ze(),party_id:z().optional().nullable()}),Sm=xe({id:z(),cover_image:z().optional().nullable(),description:z(),icon:z().optional().nullable(),name:z()}),ym=xe({message_id:z().optional().nullable(),channel_id:z().optional().nullable(),guild_id:z().optional().nullable()}),Mm=xe({id:z(),channel_id:z(),guild_id:z().optional().nullable(),author:or.optional().nullable(),member:Fc.optional().nullable(),content:z(),timestamp:z(),edited_timestamp:z().optional().nullable(),tts:$e(),mention_everyone:$e(),mentions:_t(or),mention_roles:_t(z()),mention_channels:_t(dm),attachments:_t(hm),embeds:_t(vm),reactions:_t(Em).optional().nullable(),nonce:Uc([z(),ze()]).optional().nullable(),pinned:$e(),webhook_id:z().optional().nullable(),type:ze(),activity:xm.optional().nullable(),application:Sm.optional().nullable(),message_reference:ym.optional().nullable(),flags:ze().optional().nullable(),stickers:_t(ma()).optional().nullable(),referenced_message:ma().optional().nullable()}),Tm=xe({id:z(),name:z()}),bm={UNHANDLED:-1,KEYBOARD_KEY:0,MOUSE_BUTTON:1,KEYBOARD_MODIFIER_KEY:2,GAMEPAD_BUTTON:3},th=xe({type:pn(bm),code:ze(),name:z()}),Am={UNHANDLED:-1,PUSH_TO_TALK:"PUSH_TO_TALK",VOICE_ACTIVITY:"VOICE_ACTIVITY"},wm=xe({type:pn(Am),auto_threshold:$e(),threshold:ze(),shortcut:_t(th),delay:ze()}),xu=xe({device_id:z(),volume:ze(),available_devices:_t(Tm)}),Rm={UNHANDLED:-1,AUDIO_INPUT:"AUDIO_INPUT",AUDIO_OUTPUT:"AUDIO_OUTPUT",VIDEO_INPUT:"VIDEO_INPUT"};xe({type:pn(Rm),id:z(),vendor:xe({name:z(),url:z()}),model:xe({name:z(),url:z()}),related:_t(z()),echo_cancellation:$e().optional().nullable(),noise_suppression:$e().optional().nullable(),automatic_gain_control:$e().optional().nullable(),hardware_mute:$e().optional().nullable()});const Im={UNHANDLED:-1,APPLICATION:1,DLC:2,CONSUMABLE:3,BUNDLE:4,SUBSCRIPTION:5},Dm=xe({id:z(),name:z(),type:pn(Im),price:xe({amount:ze(),currency:z()}),application_id:z(),flags:ze(),release_date:z().nullable()}),Nm={UNHANDLED:-1,PURCHASE:1,PREMIUM_SUBSCRIPTION:2,DEVELOPER_GIFT:3,TEST_MODE_PURCHASE:4,FREE_PURCHASE:5,USER_GIFT:6,PREMIUM_PURCHASE:7},kc=xe({id:z(),sku_id:z(),application_id:z(),user_id:z(),gift_code_flags:ze(),type:pn(Nm),gifter_user_id:z().optional().nullable(),branches:_t(z()).optional().nullable(),starts_at:z().optional().nullable(),ends_at:z().optional().nullable(),parent_id:z().optional().nullable(),consumed:$e().optional().nullable(),deleted:$e().optional().nullable(),gift_code_batch_id:z().optional().nullable()}),Lm={UNHANDLED:-1,UNLOCKED:1,PORTRAIT:2,LANDSCAPE:3};pn(Lm);const Pm={UNHANDLED:-1,NOMINAL:0,FAIR:1,SERIOUS:2,CRITICAL:3},Cm=pn(Pm),nh={UNHANDLED:-1,PORTRAIT:0,LANDSCAPE:1};pn(nh);const ih={UNHANDLED:-1,FOCUSED:0,PIP:1,GRID:2};pn(ih);const Gc="ERROR";var ht;(function(n){n.READY="READY",n.VOICE_STATE_UPDATE="VOICE_STATE_UPDATE",n.SPEAKING_START="SPEAKING_START",n.SPEAKING_STOP="SPEAKING_STOP",n.ACTIVITY_LAYOUT_MODE_UPDATE="ACTIVITY_LAYOUT_MODE_UPDATE",n.ORIENTATION_UPDATE="ORIENTATION_UPDATE",n.CURRENT_USER_UPDATE="CURRENT_USER_UPDATE",n.CURRENT_GUILD_MEMBER_UPDATE="CURRENT_GUILD_MEMBER_UPDATE",n.ENTITLEMENT_CREATE="ENTITLEMENT_CREATE",n.THERMAL_STATE_UPDATE="THERMAL_STATE_UPDATE",n.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE="ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE",n.RELATIONSHIP_UPDATE="RELATIONSHIP_UPDATE",n.ACTIVITY_JOIN="ACTIVITY_JOIN",n.QUEST_ENROLLMENT_STATUS_UPDATE="QUEST_ENROLLMENT_STATUS_UPDATE"})(ht||(ht={}));const hn=Rs.extend({evt:ws(ht),nonce:z().nullable(),cmd:Vt(nm),data:xe({}).passthrough()}),rh=Rs.extend({evt:Vt(Gc),data:xe({code:ze(),message:z().optional()}).passthrough(),cmd:ws(Ce),nonce:z().nullable()}),Um=hn.extend({evt:z()}),Om=Uc([hn,Um,rh]);function Fm(n){const e=n.evt;if(!(e in ht))throw new Error(`Unrecognized event type ${n.evt}`);return Bm[e].payload.parse(n)}const Bm={[ht.READY]:{payload:hn.extend({evt:Vt(ht.READY),data:xe({v:ze(),config:xe({cdn_host:z().optional(),api_endpoint:z(),environment:z()}),user:xe({id:z(),username:z(),discriminator:z(),avatar:z().optional()}).optional()})})},[ht.VOICE_STATE_UPDATE]:{payload:hn.extend({evt:Vt(ht.VOICE_STATE_UPDATE),data:Jd}),subscribeArgs:xe({channel_id:z()})},[ht.SPEAKING_START]:{payload:hn.extend({evt:Vt(ht.SPEAKING_START),data:xe({lobby_id:z().optional(),channel_id:z().optional(),user_id:z()})}),subscribeArgs:xe({lobby_id:z().nullable().optional(),channel_id:z().nullable().optional()})},[ht.SPEAKING_STOP]:{payload:hn.extend({evt:Vt(ht.SPEAKING_STOP),data:xe({lobby_id:z().optional(),channel_id:z().optional(),user_id:z()})}),subscribeArgs:xe({lobby_id:z().nullable().optional(),channel_id:z().nullable().optional()})},[ht.ACTIVITY_LAYOUT_MODE_UPDATE]:{payload:hn.extend({evt:Vt(ht.ACTIVITY_LAYOUT_MODE_UPDATE),data:xe({layout_mode:pn(ih)})})},[ht.ORIENTATION_UPDATE]:{payload:hn.extend({evt:Vt(ht.ORIENTATION_UPDATE),data:xe({screen_orientation:pn(nh),orientation:ws(Gl)})})},[ht.CURRENT_USER_UPDATE]:{payload:hn.extend({evt:Vt(ht.CURRENT_USER_UPDATE),data:or})},[ht.CURRENT_GUILD_MEMBER_UPDATE]:{payload:hn.extend({evt:Vt(ht.CURRENT_GUILD_MEMBER_UPDATE),data:sm}),subscribeArgs:xe({guild_id:z()})},[ht.ENTITLEMENT_CREATE]:{payload:hn.extend({evt:Vt(ht.ENTITLEMENT_CREATE),data:xe({entitlement:kc})})},[ht.THERMAL_STATE_UPDATE]:{payload:hn.extend({evt:Vt(ht.THERMAL_STATE_UPDATE),data:xe({thermal_state:Cm})})},[ht.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]:{payload:hn.extend({evt:Vt(ht.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE),data:xe({participants:Zd.shape.participants})})},[ht.RELATIONSHIP_UPDATE]:{payload:hn.extend({evt:Vt(ht.RELATIONSHIP_UPDATE),data:rm})},[ht.ACTIVITY_JOIN]:{payload:hn.extend({evt:Vt(ht.ACTIVITY_JOIN),data:xe({applicationId:z(),secret:z()})})},[ht.QUEST_ENROLLMENT_STATUS_UPDATE]:{payload:hn.extend({evt:Vt(ht.QUEST_ENROLLMENT_STATUS_UPDATE),data:xe({quest_id:z(),is_enrolled:$e(),enrolled_at:z().date()})})}};function km(n,e){throw e}const Po=xe({}).nullable(),sh=xe({code:z()}),Gm=xe({guilds:_t(xe({id:z(),name:z()}))}),Hm=xe({id:z(),name:z(),icon_url:z().optional(),members:_t(Fc)}),gs=xe({id:z(),type:pn(Qd),guild_id:z().optional().nullable(),name:z().optional().nullable(),topic:z().optional().nullable(),bitrate:ze().optional().nullable(),user_limit:ze().optional().nullable(),position:ze().optional().nullable(),voice_states:_t(Jd),messages:_t(Mm)}),zm=xe({channels:_t(eh)});gs.nullable();const Vm=gs.nullable(),Wm=gs.nullable();xe({input:xu,output:xu,mode:wm,automatic_gain_control:$e(),echo_cancellation:$e(),noise_suppression:$e(),qos:$e(),silence_warning:$e(),deaf:$e(),mute:$e()});const Xm=xe({evt:z()}),qm=xe({shortcut:th}),ah=Qs,oh=xe({skus:_t(Dm)}),lh=xe({entitlements:_t(kc)}),ch=_t(kc).nullable(),uh=xe({use_interactive_pip:$e()}),dh=xe({locale:z()}),hh=xe({enabled:$e()}),fh=xe({permissions:kd().or(z())}),ph=qd(xe({opened:$e().or(No())}).default({opened:null})),mh=xe({iosKeyboardResizesView:Gd($e())}),Ym=Rs.extend({cmd:ws(Ce),evt:No()});function Zm({cmd:n,data:e}){switch(n){case Ce.AUTHORIZE:return sh.parse(e);case Ce.CAPTURE_SHORTCUT:return qm.parse(e);case Ce.ENCOURAGE_HW_ACCELERATION:return hh.parse(e);case Ce.GET_CHANNEL:return gs.parse(e);case Ce.GET_CHANNELS:return zm.parse(e);case Ce.GET_CHANNEL_PERMISSIONS:return fh.parse(e);case Ce.GET_GUILD:return Hm.parse(e);case Ce.GET_GUILDS:return Gm.parse(e);case Ce.GET_PLATFORM_BEHAVIORS:return mh.parse(e);case Ce.GET_CHANNEL:return gs.parse(e);case Ce.SELECT_TEXT_CHANNEL:return Wm.parse(e);case Ce.SELECT_VOICE_CHANNEL:return Vm.parse(e);case Ce.SET_ACTIVITY:return ah.parse(e);case Ce.GET_SKUS_EMBEDDED:return oh.parse(e);case Ce.GET_ENTITLEMENTS_EMBEDDED:return lh.parse(e);case Ce.SET_CONFIG:return uh.parse(e);case Ce.START_PURCHASE:return ch.parse(e);case Ce.SUBSCRIBE:case Ce.UNSUBSCRIBE:return Xm.parse(e);case Ce.USER_SETTINGS_GET_LOCALE:return dh.parse(e);case Ce.OPEN_EXTERNAL_LINK:return ph.parse(e);case Ce.SET_ORIENTATION_LOCK_STATE:case Ce.SET_CERTIFIED_DEVICES:case Ce.SEND_ANALYTICS_EVENT:case Ce.OPEN_INVITE_DIALOG:case Ce.CAPTURE_LOG:case Ce.GET_SKUS:case Ce.GET_ENTITLEMENTS:return Po.parse(e);case Ce.AUTHENTICATE:case Ce.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS:case Ce.GET_QUEST:case Ce.GET_QUEST_ENROLLMENT_STATUS:case Ce.GET_RELATIONSHIPS:case Ce.GET_USER:case Ce.INITIATE_IMAGE_UPLOAD:case Ce.INVITE_USER_EMBEDDED:case Ce.OPEN_SHARE_MOMENT_DIALOG:case Ce.QUEST_START_TIMER:case Ce.REQUEST_PROXY_TICKET_REFRESH:case Ce.SHARE_INTERACTION:case Ce.SHARE_LINK:const{response:t}=jd[n];return t.parse(e);default:km(n,new Error(`Unrecognized command ${n}`))}}function Km(n){return Object.assign(Object.assign({},n),{data:Zm(n)})}xe({frame_id:z(),platform:ws(Ri).optional().nullable()});xe({v:Vt(1),encoding:Vt("json").optional(),client_id:z(),frame_id:z()});const jm=xe({code:ze(),message:z().optional()}),$m=xe({evt:z().nullable(),nonce:z().nullable(),data:ma().nullable(),cmd:z()}).passthrough();function Jm(n){const e=$m.parse(n);return e.evt!=null?e.evt===Gc?rh.parse(e):Fm(Om.parse(e)):Km(Ym.passthrough().parse(e))}function bn(n,e,t,i=()=>{}){const r=Rs.extend({cmd:Vt(e),data:t});return async s=>{const a=await n({cmd:e,args:s,transfer:i(s)});return r.parse(a).data}}function Un(n,e=()=>{}){const t=jd[n].response,i=Rs.extend({cmd:Vt(n),data:t});return r=>async s=>{const a=await r({cmd:n,args:s,transfer:e(s)});return i.parse(a).data}}const Qm=n=>bn(n,Ce.AUTHORIZE,sh),eg=n=>bn(n,Ce.CAPTURE_LOG,Po),tg=n=>bn(n,Ce.ENCOURAGE_HW_ACCELERATION,hh),ng=n=>bn(n,Ce.GET_CHANNEL,gs),ig=n=>bn(n,Ce.GET_ENTITLEMENTS_EMBEDDED,lh),rg=n=>bn(n,Ce.GET_SKUS_EMBEDDED,oh),sg=n=>bn(n,Ce.GET_CHANNEL_PERMISSIONS,fh),ag=n=>bn(n,Ce.GET_PLATFORM_BEHAVIORS,mh),og=n=>bn(n,Ce.OPEN_EXTERNAL_LINK,ph),lg=n=>bn(n,Ce.OPEN_INVITE_DIALOG,Po);Qs.pick({state:!0,state_url:!0,details:!0,details_url:!0,timestamps:!0,assets:!0,party:!0,secrets:!0,instance:!0,type:!0}).extend({type:Qs.shape.type.optional(),instance:Qs.shape.instance.optional()}).nullable();const cg=n=>bn(n,Ce.SET_ACTIVITY,ah),ug=n=>bn(n,Ce.SET_CONFIG,uh);function dg({sendCommand:n,cmd:e,response:t,fallbackTransform:i,transferTransform:r=()=>{}}){const s=Rs.extend({cmd:Vt(e),data:t});return async a=>{try{const o=await n({cmd:e,args:a,transfer:r(a)});return s.parse(o).data}catch(o){if(o.code===kl.INVALID_PAYLOAD){const c=i(a),l=await n({cmd:e,args:c,transfer:r(c)});return s.parse(l).data}else throw o}}}const hg=n=>({lock_state:n.lock_state,picture_in_picture_lock_state:n.picture_in_picture_lock_state}),fg=n=>dg({sendCommand:n,cmd:Ce.SET_ORIENTATION_LOCK_STATE,response:Po,fallbackTransform:hg}),pg=n=>bn(n,Ce.START_PURCHASE,ch),mg=n=>bn(n,Ce.USER_SETTINGS_GET_LOCALE,dh),gg=Un(Dt.AUTHENTICATE),Su=Un(Dt.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS),_g=Un(Dt.GET_QUEST),vg=Un(Dt.GET_QUEST_ENROLLMENT_STATUS),Eg=Un(Dt.GET_RELATIONSHIPS),xg=Un(Dt.GET_USER),Sg=Un(Dt.INITIATE_IMAGE_UPLOAD),yg=Un(Dt.INVITE_USER_EMBEDDED),Mg=Un(Dt.OPEN_SHARE_MOMENT_DIALOG),Tg=Un(Dt.QUEST_START_TIMER),bg=Un(Dt.REQUEST_PROXY_TICKET_REFRESH),Ag=Un(Dt.SHARE_INTERACTION),wg=Un(Dt.SHARE_LINK);function Rg(n){return{authorize:Qm(n),captureLog:eg(n),encourageHardwareAcceleration:tg(n),getChannel:ng(n),getChannelPermissions:sg(n),getEntitlements:ig(n),getPlatformBehaviors:ag(n),getSkus:rg(n),openExternalLink:og(n),openInviteDialog:lg(n),setActivity:cg(n),setConfig:ug(n),setOrientationLockState:fg(n),startPurchase:pg(n),userSettingsGetLocale:mg(n),getInstanceConnectedParticipants:Su(n),authenticate:gg(n),getActivityInstanceConnectedParticipants:Su(n),getQuest:_g(n),getQuestEnrollmentStatus:vg(n),getRelationships:Eg(n),getUser:xg(n),initiateImageUpload:Sg(n),inviteUserEmbedded:yg(n),openShareMomentDialog:Mg(n),questStartTimer:Tg(n),requestProxyTicketRefresh:bg(n),shareInteraction:Ag(n),shareLink:wg(n)}}class Ig extends Error{constructor(e,t=""){super(t),this.code=e,this.message=t,this.name="Discord SDK Error"}}function Dg(){return{disableConsoleLogOverride:!1}}const Ng=["log","warn","debug","info","error"];function Lg(n,e,t){const i=n[e],r=n;i&&(n[e]=function(){const s=[].slice.call(arguments),a=""+s.join(" ");t(e,a),i.apply(r,s)})}var Pg="2.5.0";const Cg=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var yu={randomUUID:Cg};let $o;const Ug=new Uint8Array(16);function Og(){if(!$o){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");$o=crypto.getRandomValues.bind(crypto)}return $o(Ug)}const nn=[];for(let n=0;n<256;++n)nn.push((n+256).toString(16).slice(1));function Fg(n,e=0){return(nn[n[e+0]]+nn[n[e+1]]+nn[n[e+2]]+nn[n[e+3]]+"-"+nn[n[e+4]]+nn[n[e+5]]+"-"+nn[n[e+6]]+nn[n[e+7]]+"-"+nn[n[e+8]]+nn[n[e+9]]+"-"+nn[n[e+10]]+nn[n[e+11]]+nn[n[e+12]]+nn[n[e+13]]+nn[n[e+14]]+nn[n[e+15]]).toLowerCase()}function Mu(n,e,t){if(yu.randomUUID&&!n)return yu.randomUUID();n=n||{};const i=n.random??n.rng?.()??Og();if(i.length<16)throw new Error("Random bytes length must be >= 16");return i[6]=i[6]&15|64,i[8]=i[8]&63|128,Fg(i)}var wi;(function(n){n[n.HANDSHAKE=0]="HANDSHAKE",n[n.FRAME=1]="FRAME",n[n.CLOSE=2]="CLOSE",n[n.HELLO=3]="HELLO"})(wi||(wi={}));const Bg=new Set(kg());function kg(){return typeof window>"u"?[]:[window.location.origin,"https://discord.com","https://discordapp.com","https://ptb.discord.com","https://ptb.discordapp.com","https://canary.discord.com","https://canary.discordapp.com","https://staging.discord.co","http://localhost:3333","https://pax.discord.com","null"]}function Gg(){var n;return[(n=window.parent.opener)!==null&&n!==void 0?n:window.parent,document.referrer?document.referrer:"*"]}class Hg{getTransfer(e){var t;switch(e.cmd){case Ce.SUBSCRIBE:case Ce.UNSUBSCRIBE:return;default:return(t=e.transfer)!==null&&t!==void 0?t:void 0}}constructor(e,t){if(this.sdkVersion=Pg,this.mobileAppVersion=null,this.source=null,this.sourceOrigin="",this.eventBus=new Lf,this.pendingCommands=new Map,this.sendCommand=o=>{var c;if(this.source==null)throw new Error("Attempting to send message before initialization");const l=Mu();return(c=this.source)===null||c===void 0||c.postMessage([wi.FRAME,Object.assign(Object.assign({},o),{nonce:l})],this.sourceOrigin,this.getTransfer(o)),new Promise((d,h)=>{this.pendingCommands.set(l,{resolve:d,reject:h})})},this.commands=Rg(this.sendCommand),this.handleMessage=o=>{if(!Bg.has(o.origin))return;const c=o.data;if(!Array.isArray(c))return;const[l,u]=c;switch(l){case wi.HELLO:return;case wi.CLOSE:return this.handleClose(u);case wi.HANDSHAKE:return this.handleHandshake();case wi.FRAME:return this.handleFrame(u);default:throw new Error("Invalid message format")}},this.isReady=!1,this.clientId=e,this.configuration=t??Dg(),typeof window<"u"&&window.addEventListener("message",this.handleMessage),typeof window>"u"){this.frameId="",this.instanceId="",this.customId=null,this.referrerId=null,this.platform=Ri.DESKTOP,this.guildId=null,this.channelId=null,this.locationId=null;return}const i=new URLSearchParams(this._getSearch()),r=i.get("frame_id");if(!r)throw new Error("frame_id query param is not defined");this.frameId=r;const s=i.get("instance_id");if(!s)throw new Error("instance_id query param is not defined");this.instanceId=s;const a=i.get("platform");if(a){if(a!==Ri.DESKTOP&&a!==Ri.MOBILE)throw new Error(`Invalid query param "platform" of "${a}". Valid values are "${Ri.DESKTOP}" or "${Ri.MOBILE}"`)}else throw new Error("platform query param is not defined");this.platform=a,this.customId=i.get("custom_id"),this.referrerId=i.get("referrer_id"),this.guildId=i.get("guild_id"),this.channelId=i.get("channel_id"),this.locationId=i.get("location_id"),this.mobileAppVersion=i.get("mobile_app_version"),[this.source,this.sourceOrigin]=Gg(),this.addOnReadyListener(),this.handshake()}close(e,t){var i;window.removeEventListener("message",this.handleMessage);const r=Mu();(i=this.source)===null||i===void 0||i.postMessage([wi.CLOSE,{code:e,message:t,nonce:r}],this.sourceOrigin)}async subscribe(e,t,...i){const[r]=i,s=this.eventBus.listenerCount(e),a=this.eventBus.on(e,t);return Object.values(ht).includes(e)&&e!==ht.READY&&s===0&&await this.sendCommand({cmd:Ce.SUBSCRIBE,args:r,evt:e}),a}async unsubscribe(e,t,...i){const[r]=i;return e!==ht.READY&&this.eventBus.listenerCount(e)===1&&await this.sendCommand({cmd:Ce.UNSUBSCRIBE,evt:e,args:r}),this.eventBus.off(e,t)}async ready(){this.isReady||await new Promise(e=>{this.eventBus.once(ht.READY,e)})}parseMajorMobileVersion(){if(this.mobileAppVersion&&this.mobileAppVersion.includes("."))try{return parseInt(this.mobileAppVersion.split(".")[0])}catch{return vu}return vu}handshake(){var e;const t={v:1,encoding:"json",client_id:this.clientId,frame_id:this.frameId},i=this.parseMajorMobileVersion();(this.platform===Ri.DESKTOP||i>=kp)&&(t.sdk_version=this.sdkVersion),(e=this.source)===null||e===void 0||e.postMessage([wi.HANDSHAKE,t],this.sourceOrigin)}addOnReadyListener(){this.eventBus.once(ht.READY,()=>{this.overrideConsoleLogging(),this.isReady=!0})}overrideConsoleLogging(){if(this.configuration.disableConsoleLogOverride)return;const e=(t,i)=>{this.commands.captureLog({level:t,message:i})};Ng.forEach(t=>{Lg(console,t,e)})}handleClose(e){jm.parse(e)}handleHandshake(){}handleFrame(e){var t,i;let r;try{r=Jm(e)}catch(s){console.error("Failed to parse",e),console.error(s);return}if(r.cmd==="DISPATCH")this.eventBus.emit(r.evt,r.data);else{if(r.evt===Gc){if(r.nonce!=null){(t=this.pendingCommands.get(r.nonce))===null||t===void 0||t.reject(r.data),this.pendingCommands.delete(r.nonce);return}this.eventBus.emit("error",new Ig(r.data.code,r.data.message))}if(r.nonce==null){console.error("Missing nonce",e);return}(i=this.pendingCommands.get(r.nonce))===null||i===void 0||i.resolve(r),this.pendingCommands.delete(r.nonce)}}_getSearch(){return typeof window>"u"?"":window.location.search}}var Is=1e9,zg={precision:20,rounding:4,toExpNeg:-7,toExpPos:21,LN10:"2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"},Sh,Bt=!0,Hn="[DecimalError] ",Pr=Hn+"Invalid argument: ",Hc=Hn+"Exponent out of range: ",Ds=Math.floor,Tr=Math.pow,Vg=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,Nn,en=1e7,Ut=7,gh=9007199254740991,Mo=Ds(gh/Ut),Le={};Le.absoluteValue=Le.abs=function(){var n=new this.constructor(this);return n.s&&(n.s=1),n};Le.comparedTo=Le.cmp=function(n){var e,t,i,r,s=this;if(n=new s.constructor(n),s.s!==n.s)return s.s||-n.s;if(s.e!==n.e)return s.e>n.e^s.s<0?1:-1;for(i=s.d.length,r=n.d.length,e=0,t=i<r?i:r;e<t;++e)if(s.d[e]!==n.d[e])return s.d[e]>n.d[e]^s.s<0?1:-1;return i===r?0:i>r^s.s<0?1:-1};Le.decimalPlaces=Le.dp=function(){var n=this,e=n.d.length-1,t=(e-n.e)*Ut;if(e=n.d[e],e)for(;e%10==0;e/=10)t--;return t<0?0:t};Le.dividedBy=Le.div=function(n){return Li(this,new this.constructor(n))};Le.dividedToIntegerBy=Le.idiv=function(n){var e=this,t=e.constructor;return Lt(Li(e,new t(n),0,1),t.precision)};Le.equals=Le.eq=function(n){return!this.cmp(n)};Le.exponent=function(){return Kt(this)};Le.greaterThan=Le.gt=function(n){return this.cmp(n)>0};Le.greaterThanOrEqualTo=Le.gte=function(n){return this.cmp(n)>=0};Le.isInteger=Le.isint=function(){return this.e>this.d.length-2};Le.isNegative=Le.isneg=function(){return this.s<0};Le.isPositive=Le.ispos=function(){return this.s>0};Le.isZero=function(){return this.s===0};Le.lessThan=Le.lt=function(n){return this.cmp(n)<0};Le.lessThanOrEqualTo=Le.lte=function(n){return this.cmp(n)<1};Le.logarithm=Le.log=function(n){var e,t=this,i=t.constructor,r=i.precision,s=r+5;if(n===void 0)n=new i(10);else if(n=new i(n),n.s<1||n.eq(Nn))throw Error(Hn+"NaN");if(t.s<1)throw Error(Hn+(t.s?"NaN":"-Infinity"));return t.eq(Nn)?new i(0):(Bt=!1,e=Li(ga(t,s),ga(n,s),s),Bt=!0,Lt(e,r))};Le.minus=Le.sub=function(n){var e=this;return n=new e.constructor(n),e.s==n.s?Eh(e,n):_h(e,(n.s=-n.s,n))};Le.modulo=Le.mod=function(n){var e,t=this,i=t.constructor,r=i.precision;if(n=new i(n),!n.s)throw Error(Hn+"NaN");return t.s?(Bt=!1,e=Li(t,n,0,1).times(n),Bt=!0,t.minus(e)):Lt(new i(t),r)};Le.naturalExponential=Le.exp=function(){return vh(this)};Le.naturalLogarithm=Le.ln=function(){return ga(this)};Le.negated=Le.neg=function(){var n=new this.constructor(this);return n.s=-n.s||0,n};Le.plus=Le.add=function(n){var e=this;return n=new e.constructor(n),e.s==n.s?_h(e,n):Eh(e,(n.s=-n.s,n))};Le.precision=Le.sd=function(n){var e,t,i,r=this;if(n!==void 0&&n!==!!n&&n!==1&&n!==0)throw Error(Pr+n);if(e=Kt(r)+1,i=r.d.length-1,t=i*Ut+1,i=r.d[i],i){for(;i%10==0;i/=10)t--;for(i=r.d[0];i>=10;i/=10)t++}return n&&e>t?e:t};Le.squareRoot=Le.sqrt=function(){var n,e,t,i,r,s,a,o=this,c=o.constructor;if(o.s<1){if(!o.s)return new c(0);throw Error(Hn+"NaN")}for(n=Kt(o),Bt=!1,r=Math.sqrt(+o),r==0||r==1/0?(e=si(o.d),(e.length+n)%2==0&&(e+="0"),r=Math.sqrt(e),n=Ds((n+1)/2)-(n<0||n%2),r==1/0?e="5e"+n:(e=r.toExponential(),e=e.slice(0,e.indexOf("e")+1)+n),i=new c(e)):i=new c(r.toString()),t=c.precision,r=a=t+3;;)if(s=i,i=s.plus(Li(o,s,a+2)).times(.5),si(s.d).slice(0,a)===(e=si(i.d)).slice(0,a)){if(e=e.slice(a-3,a+1),r==a&&e=="4999"){if(Lt(s,t+1,0),s.times(s).eq(o)){i=s;break}}else if(e!="9999")break;a+=4}return Bt=!0,Lt(i,t)};Le.times=Le.mul=function(n){var e,t,i,r,s,a,o,c,l,u=this,d=u.constructor,h=u.d,g=(n=new d(n)).d;if(!u.s||!n.s)return new d(0);for(n.s*=u.s,t=u.e+n.e,c=h.length,l=g.length,c<l&&(s=h,h=g,g=s,a=c,c=l,l=a),s=[],a=c+l,i=a;i--;)s.push(0);for(i=l;--i>=0;){for(e=0,r=c+i;r>i;)o=s[r]+g[i]*h[r-i-1]+e,s[r--]=o%en|0,e=o/en|0;s[r]=(s[r]+e)%en|0}for(;!s[--a];)s.pop();return e?++t:s.shift(),n.d=s,n.e=t,Bt?Lt(n,d.precision):n};Le.toDecimalPlaces=Le.todp=function(n,e){var t=this,i=t.constructor;return t=new i(t),n===void 0?t:(hi(n,0,Is),e===void 0?e=i.rounding:hi(e,0,8),Lt(t,n+Kt(t)+1,e))};Le.toExponential=function(n,e){var t,i=this,r=i.constructor;return n===void 0?t=Fr(i,!0):(hi(n,0,Is),e===void 0?e=r.rounding:hi(e,0,8),i=Lt(new r(i),n+1,e),t=Fr(i,!0,n+1)),t};Le.toFixed=function(n,e){var t,i,r=this,s=r.constructor;return n===void 0?Fr(r):(hi(n,0,Is),e===void 0?e=s.rounding:hi(e,0,8),i=Lt(new s(r),n+Kt(r)+1,e),t=Fr(i.abs(),!1,n+Kt(i)+1),r.isneg()&&!r.isZero()?"-"+t:t)};Le.toInteger=Le.toint=function(){var n=this,e=n.constructor;return Lt(new e(n),Kt(n)+1,e.rounding)};Le.toNumber=function(){return+this};Le.toPower=Le.pow=function(n){var e,t,i,r,s,a,o=this,c=o.constructor,l=12,u=+(n=new c(n));if(!n.s)return new c(Nn);if(o=new c(o),!o.s){if(n.s<1)throw Error(Hn+"Infinity");return o}if(o.eq(Nn))return o;if(i=c.precision,n.eq(Nn))return Lt(o,i);if(e=n.e,t=n.d.length-1,a=e>=t,s=o.s,a){if((t=u<0?-u:u)<=gh){for(r=new c(Nn),e=Math.ceil(i/Ut+4),Bt=!1;t%2&&(r=r.times(o),bu(r.d,e)),t=Ds(t/2),t!==0;)o=o.times(o),bu(o.d,e);return Bt=!0,n.s<0?new c(Nn).div(r):Lt(r,i)}}else if(s<0)throw Error(Hn+"NaN");return s=s<0&&n.d[Math.max(e,t)]&1?-1:1,o.s=1,Bt=!1,r=n.times(ga(o,i+l)),Bt=!0,r=vh(r),r.s=s,r};Le.toPrecision=function(n,e){var t,i,r=this,s=r.constructor;return n===void 0?(t=Kt(r),i=Fr(r,t<=s.toExpNeg||t>=s.toExpPos)):(hi(n,1,Is),e===void 0?e=s.rounding:hi(e,0,8),r=Lt(new s(r),n,e),t=Kt(r),i=Fr(r,n<=t||t<=s.toExpNeg,n)),i};Le.toSignificantDigits=Le.tosd=function(n,e){var t=this,i=t.constructor;return n===void 0?(n=i.precision,e=i.rounding):(hi(n,1,Is),e===void 0?e=i.rounding:hi(e,0,8)),Lt(new i(t),n,e)};Le.toString=Le.valueOf=Le.val=Le.toJSON=Le[Symbol.for("nodejs.util.inspect.custom")]=function(){var n=this,e=Kt(n),t=n.constructor;return Fr(n,e<=t.toExpNeg||e>=t.toExpPos)};function _h(n,e){var t,i,r,s,a,o,c,l,u=n.constructor,d=u.precision;if(!n.s||!e.s)return e.s||(e=new u(n)),Bt?Lt(e,d):e;if(c=n.d,l=e.d,a=n.e,r=e.e,c=c.slice(),s=a-r,s){for(s<0?(i=c,s=-s,o=l.length):(i=l,r=a,o=c.length),a=Math.ceil(d/Ut),o=a>o?a+1:o+1,s>o&&(s=o,i.length=1),i.reverse();s--;)i.push(0);i.reverse()}for(o=c.length,s=l.length,o-s<0&&(s=o,i=l,l=c,c=i),t=0;s;)t=(c[--s]=c[s]+l[s]+t)/en|0,c[s]%=en;for(t&&(c.unshift(t),++r),o=c.length;c[--o]==0;)c.pop();return e.d=c,e.e=r,Bt?Lt(e,d):e}function hi(n,e,t){if(n!==~~n||n<e||n>t)throw Error(Pr+n)}function si(n){var e,t,i,r=n.length-1,s="",a=n[0];if(r>0){for(s+=a,e=1;e<r;e++)i=n[e]+"",t=Ut-i.length,t&&(s+=qi(t)),s+=i;a=n[e],i=a+"",t=Ut-i.length,t&&(s+=qi(t))}else if(a===0)return"0";for(;a%10===0;)a/=10;return s+a}var Li=(function(){function n(i,r){var s,a=0,o=i.length;for(i=i.slice();o--;)s=i[o]*r+a,i[o]=s%en|0,a=s/en|0;return a&&i.unshift(a),i}function e(i,r,s,a){var o,c;if(s!=a)c=s>a?1:-1;else for(o=c=0;o<s;o++)if(i[o]!=r[o]){c=i[o]>r[o]?1:-1;break}return c}function t(i,r,s){for(var a=0;s--;)i[s]-=a,a=i[s]<r[s]?1:0,i[s]=a*en+i[s]-r[s];for(;!i[0]&&i.length>1;)i.shift()}return function(i,r,s,a){var o,c,l,u,d,h,g,x,S,m,f,I,R,A,U,O,B,X,b=i.constructor,T=i.s==r.s?1:-1,G=i.d,W=r.d;if(!i.s)return new b(i);if(!r.s)throw Error(Hn+"Division by zero");for(c=i.e-r.e,B=W.length,U=G.length,g=new b(T),x=g.d=[],l=0;W[l]==(G[l]||0);)++l;if(W[l]>(G[l]||0)&&--c,s==null?I=s=b.precision:a?I=s+(Kt(i)-Kt(r))+1:I=s,I<0)return new b(0);if(I=I/Ut+2|0,l=0,B==1)for(u=0,W=W[0],I++;(l<U||u)&&I--;l++)R=u*en+(G[l]||0),x[l]=R/W|0,u=R%W|0;else{for(u=en/(W[0]+1)|0,u>1&&(W=n(W,u),G=n(G,u),B=W.length,U=G.length),A=B,S=G.slice(0,B),m=S.length;m<B;)S[m++]=0;X=W.slice(),X.unshift(0),O=W[0],W[1]>=en/2&&++O;do u=0,o=e(W,S,B,m),o<0?(f=S[0],B!=m&&(f=f*en+(S[1]||0)),u=f/O|0,u>1?(u>=en&&(u=en-1),d=n(W,u),h=d.length,m=S.length,o=e(d,S,h,m),o==1&&(u--,t(d,B<h?X:W,h))):(u==0&&(o=u=1),d=W.slice()),h=d.length,h<m&&d.unshift(0),t(S,d,m),o==-1&&(m=S.length,o=e(W,S,B,m),o<1&&(u++,t(S,B<m?X:W,m))),m=S.length):o===0&&(u++,S=[0]),x[l++]=u,o&&S[0]?S[m++]=G[A]||0:(S=[G[A]],m=1);while((A++<U||S[0]!==void 0)&&I--)}return x[0]||x.shift(),g.e=c,Lt(g,a?s+Kt(g)+1:s)}})();function vh(n,e){var t,i,r,s,a,o,c=0,l=0,u=n.constructor,d=u.precision;if(Kt(n)>16)throw Error(Hc+Kt(n));if(!n.s)return new u(Nn);for(Bt=!1,o=d,a=new u(.03125);n.abs().gte(.1);)n=n.times(a),l+=5;for(i=Math.log(Tr(2,l))/Math.LN10*2+5|0,o+=i,t=r=s=new u(Nn),u.precision=o;;){if(r=Lt(r.times(n),o),t=t.times(++c),a=s.plus(Li(r,t,o)),si(a.d).slice(0,o)===si(s.d).slice(0,o)){for(;l--;)s=Lt(s.times(s),o);return u.precision=d,e==null?(Bt=!0,Lt(s,d)):s}s=a}}function Kt(n){for(var e=n.e*Ut,t=n.d[0];t>=10;t/=10)e++;return e}function Jo(n,e,t){if(e>n.LN10.sd())throw Bt=!0,t&&(n.precision=t),Error(Hn+"LN10 precision limit exceeded");return Lt(new n(n.LN10),e)}function qi(n){for(var e="";n--;)e+="0";return e}function ga(n,e){var t,i,r,s,a,o,c,l,u,d=1,h=10,g=n,x=g.d,S=g.constructor,m=S.precision;if(g.s<1)throw Error(Hn+(g.s?"NaN":"-Infinity"));if(g.eq(Nn))return new S(0);if(e==null?(Bt=!1,l=m):l=e,g.eq(10))return e==null&&(Bt=!0),Jo(S,l);if(l+=h,S.precision=l,t=si(x),i=t.charAt(0),s=Kt(g),Math.abs(s)<15e14){for(;i<7&&i!=1||i==1&&t.charAt(1)>3;)g=g.times(n),t=si(g.d),i=t.charAt(0),d++;s=Kt(g),i>1?(g=new S("0."+t),s++):g=new S(i+"."+t.slice(1))}else return c=Jo(S,l+2,m).times(s+""),g=ga(new S(i+"."+t.slice(1)),l-h).plus(c),S.precision=m,e==null?(Bt=!0,Lt(g,m)):g;for(o=a=g=Li(g.minus(Nn),g.plus(Nn),l),u=Lt(g.times(g),l),r=3;;){if(a=Lt(a.times(u),l),c=o.plus(Li(a,new S(r),l)),si(c.d).slice(0,l)===si(o.d).slice(0,l))return o=o.times(2),s!==0&&(o=o.plus(Jo(S,l+2,m).times(s+""))),o=Li(o,new S(d),l),S.precision=m,e==null?(Bt=!0,Lt(o,m)):o;o=c,r+=2}}function Tu(n,e){var t,i,r;for((t=e.indexOf("."))>-1&&(e=e.replace(".","")),(i=e.search(/e/i))>0?(t<0&&(t=i),t+=+e.slice(i+1),e=e.substring(0,i)):t<0&&(t=e.length),i=0;e.charCodeAt(i)===48;)++i;for(r=e.length;e.charCodeAt(r-1)===48;)--r;if(e=e.slice(i,r),e){if(r-=i,t=t-i-1,n.e=Ds(t/Ut),n.d=[],i=(t+1)%Ut,t<0&&(i+=Ut),i<r){for(i&&n.d.push(+e.slice(0,i)),r-=Ut;i<r;)n.d.push(+e.slice(i,i+=Ut));e=e.slice(i),i=Ut-e.length}else i-=r;for(;i--;)e+="0";if(n.d.push(+e),Bt&&(n.e>Mo||n.e<-Mo))throw Error(Hc+t)}else n.s=0,n.e=0,n.d=[0];return n}function Lt(n,e,t){var i,r,s,a,o,c,l,u,d=n.d;for(a=1,s=d[0];s>=10;s/=10)a++;if(i=e-a,i<0)i+=Ut,r=e,l=d[u=0];else{if(u=Math.ceil((i+1)/Ut),s=d.length,u>=s)return n;for(l=s=d[u],a=1;s>=10;s/=10)a++;i%=Ut,r=i-Ut+a}if(t!==void 0&&(s=Tr(10,a-r-1),o=l/s%10|0,c=e<0||d[u+1]!==void 0||l%s,c=t<4?(o||c)&&(t==0||t==(n.s<0?3:2)):o>5||o==5&&(t==4||c||t==6&&(i>0?r>0?l/Tr(10,a-r):0:d[u-1])%10&1||t==(n.s<0?8:7))),e<1||!d[0])return c?(s=Kt(n),d.length=1,e=e-s-1,d[0]=Tr(10,(Ut-e%Ut)%Ut),n.e=Ds(-e/Ut)||0):(d.length=1,d[0]=n.e=n.s=0),n;if(i==0?(d.length=u,s=1,u--):(d.length=u+1,s=Tr(10,Ut-i),d[u]=r>0?(l/Tr(10,a-r)%Tr(10,r)|0)*s:0),c)for(;;)if(u==0){(d[0]+=s)==en&&(d[0]=1,++n.e);break}else{if(d[u]+=s,d[u]!=en)break;d[u--]=0,s=1}for(i=d.length;d[--i]===0;)d.pop();if(Bt&&(n.e>Mo||n.e<-Mo))throw Error(Hc+Kt(n));return n}function Eh(n,e){var t,i,r,s,a,o,c,l,u,d,h=n.constructor,g=h.precision;if(!n.s||!e.s)return e.s?e.s=-e.s:e=new h(n),Bt?Lt(e,g):e;if(c=n.d,d=e.d,i=e.e,l=n.e,c=c.slice(),a=l-i,a){for(u=a<0,u?(t=c,a=-a,o=d.length):(t=d,i=l,o=c.length),r=Math.max(Math.ceil(g/Ut),o)+2,a>r&&(a=r,t.length=1),t.reverse(),r=a;r--;)t.push(0);t.reverse()}else{for(r=c.length,o=d.length,u=r<o,u&&(o=r),r=0;r<o;r++)if(c[r]!=d[r]){u=c[r]<d[r];break}a=0}for(u&&(t=c,c=d,d=t,e.s=-e.s),o=c.length,r=d.length-o;r>0;--r)c[o++]=0;for(r=d.length;r>a;){if(c[--r]<d[r]){for(s=r;s&&c[--s]===0;)c[s]=en-1;--c[s],c[r]+=en}c[r]-=d[r]}for(;c[--o]===0;)c.pop();for(;c[0]===0;c.shift())--i;return c[0]?(e.d=c,e.e=i,Bt?Lt(e,g):e):new h(0)}function Fr(n,e,t){var i,r=Kt(n),s=si(n.d),a=s.length;return e?(t&&(i=t-a)>0?s=s.charAt(0)+"."+s.slice(1)+qi(i):a>1&&(s=s.charAt(0)+"."+s.slice(1)),s=s+(r<0?"e":"e+")+r):r<0?(s="0."+qi(-r-1)+s,t&&(i=t-a)>0&&(s+=qi(i))):r>=a?(s+=qi(r+1-a),t&&(i=t-r-1)>0&&(s=s+"."+qi(i))):((i=r+1)<a&&(s=s.slice(0,i)+"."+s.slice(i)),t&&(i=t-a)>0&&(r+1===a&&(s+="."),s+=qi(i))),n.s<0?"-"+s:s}function bu(n,e){if(n.length>e)return n.length=e,!0}function xh(n){var e,t,i;function r(s){var a=this;if(!(a instanceof r))return new r(s);if(a.constructor=r,s instanceof r){a.s=s.s,a.e=s.e,a.d=(s=s.d)?s.slice():s;return}if(typeof s=="number"){if(s*0!==0)throw Error(Pr+s);if(s>0)a.s=1;else if(s<0)s=-s,a.s=-1;else{a.s=0,a.e=0,a.d=[0];return}if(s===~~s&&s<1e7){a.e=0,a.d=[s];return}return Tu(a,s.toString())}else if(typeof s!="string")throw Error(Pr+s);if(s.charCodeAt(0)===45?(s=s.slice(1),a.s=-1):a.s=1,Vg.test(s))Tu(a,s);else throw Error(Pr+s)}if(r.prototype=Le,r.ROUND_UP=0,r.ROUND_DOWN=1,r.ROUND_CEIL=2,r.ROUND_FLOOR=3,r.ROUND_HALF_UP=4,r.ROUND_HALF_DOWN=5,r.ROUND_HALF_EVEN=6,r.ROUND_HALF_CEIL=7,r.ROUND_HALF_FLOOR=8,r.clone=xh,r.config=r.set=Wg,n===void 0&&(n={}),n)for(i=["precision","rounding","toExpNeg","toExpPos","LN10"],e=0;e<i.length;)n.hasOwnProperty(t=i[e++])||(n[t]=this[t]);return r.config(n),r}function Wg(n){if(!n||typeof n!="object")throw Error(Hn+"Object expected");var e,t,i,r=["precision",1,Is,"rounding",0,8,"toExpNeg",-1/0,0,"toExpPos",0,1/0];for(e=0;e<r.length;e+=3)if((i=n[t=r[e]])!==void 0)if(Ds(i)===i&&i>=r[e+1]&&i<=r[e+2])this[t]=i;else throw Error(Pr+t+": "+i);if((i=n[t="LN10"])!==void 0)if(i==Math.LN10)this[t]=new this(i);else throw Error(Pr+t+": "+i);return this}var Sh=xh(zg);Nn=new Sh(1);var V;(function(n){n.AED="aed",n.AFN="afn",n.ALL="all",n.AMD="amd",n.ANG="ang",n.AOA="aoa",n.ARS="ars",n.AUD="aud",n.AWG="awg",n.AZN="azn",n.BAM="bam",n.BBD="bbd",n.BDT="bdt",n.BGN="bgn",n.BHD="bhd",n.BIF="bif",n.BMD="bmd",n.BND="bnd",n.BOB="bob",n.BOV="bov",n.BRL="brl",n.BSD="bsd",n.BTN="btn",n.BWP="bwp",n.BYN="byn",n.BYR="byr",n.BZD="bzd",n.CAD="cad",n.CDF="cdf",n.CHE="che",n.CHF="chf",n.CHW="chw",n.CLF="clf",n.CLP="clp",n.CNY="cny",n.COP="cop",n.COU="cou",n.CRC="crc",n.CUC="cuc",n.CUP="cup",n.CVE="cve",n.CZK="czk",n.DJF="djf",n.DKK="dkk",n.DOP="dop",n.DZD="dzd",n.EGP="egp",n.ERN="ern",n.ETB="etb",n.EUR="eur",n.FJD="fjd",n.FKP="fkp",n.GBP="gbp",n.GEL="gel",n.GHS="ghs",n.GIP="gip",n.GMD="gmd",n.GNF="gnf",n.GTQ="gtq",n.GYD="gyd",n.HKD="hkd",n.HNL="hnl",n.HRK="hrk",n.HTG="htg",n.HUF="huf",n.IDR="idr",n.ILS="ils",n.INR="inr",n.IQD="iqd",n.IRR="irr",n.ISK="isk",n.JMD="jmd",n.JOD="jod",n.JPY="jpy",n.KES="kes",n.KGS="kgs",n.KHR="khr",n.KMF="kmf",n.KPW="kpw",n.KRW="krw",n.KWD="kwd",n.KYD="kyd",n.KZT="kzt",n.LAK="lak",n.LBP="lbp",n.LKR="lkr",n.LRD="lrd",n.LSL="lsl",n.LTL="ltl",n.LVL="lvl",n.LYD="lyd",n.MAD="mad",n.MDL="mdl",n.MGA="mga",n.MKD="mkd",n.MMK="mmk",n.MNT="mnt",n.MOP="mop",n.MRO="mro",n.MUR="mur",n.MVR="mvr",n.MWK="mwk",n.MXN="mxn",n.MXV="mxv",n.MYR="myr",n.MZN="mzn",n.NAD="nad",n.NGN="ngn",n.NIO="nio",n.NOK="nok",n.NPR="npr",n.NZD="nzd",n.OMR="omr",n.PAB="pab",n.PEN="pen",n.PGK="pgk",n.PHP="php",n.PKR="pkr",n.PLN="pln",n.PYG="pyg",n.QAR="qar",n.RON="ron",n.RSD="rsd",n.RUB="rub",n.RWF="rwf",n.SAR="sar",n.SBD="sbd",n.SCR="scr",n.SDG="sdg",n.SEK="sek",n.SGD="sgd",n.SHP="shp",n.SLL="sll",n.SOS="sos",n.SRD="srd",n.SSP="ssp",n.STD="std",n.SVC="svc",n.SYP="syp",n.SZL="szl",n.THB="thb",n.TJS="tjs",n.TMT="tmt",n.TND="tnd",n.TOP="top",n.TRY="try",n.TTD="ttd",n.TWD="twd",n.TZS="tzs",n.UAH="uah",n.UGX="ugx",n.USD="usd",n.USN="usn",n.USS="uss",n.UYI="uyi",n.UYU="uyu",n.UZS="uzs",n.VEF="vef",n.VND="vnd",n.VUV="vuv",n.WST="wst",n.XAF="xaf",n.XAG="xag",n.XAU="xau",n.XBA="xba",n.XBB="xbb",n.XBC="xbc",n.XBD="xbd",n.XCD="xcd",n.XDR="xdr",n.XFU="xfu",n.XOF="xof",n.XPD="xpd",n.XPF="xpf",n.XPT="xpt",n.XSU="xsu",n.XTS="xts",n.XUA="xua",n.YER="yer",n.ZAR="zar",n.ZMW="zmw",n.ZWL="zwl"})(V||(V={}));V.AED+"",V.AFN+"",V.ALL+"",V.AMD+"",V.ANG+"",V.AOA+"",V.ARS+"",V.AUD+"",V.AWG+"",V.AZN+"",V.BAM+"",V.BBD+"",V.BDT+"",V.BGN+"",V.BHD+"",V.BIF+"",V.BMD+"",V.BND+"",V.BOB+"",V.BOV+"",V.BRL+"",V.BSD+"",V.BTN+"",V.BWP+"",V.BYR+"",V.BYN+"",V.BZD+"",V.CAD+"",V.CDF+"",V.CHE+"",V.CHF+"",V.CHW+"",V.CLF+"",V.CLP+"",V.CNY+"",V.COP+"",V.COU+"",V.CRC+"",V.CUC+"",V.CUP+"",V.CVE+"",V.CZK+"",V.DJF+"",V.DKK+"",V.DOP+"",V.DZD+"",V.EGP+"",V.ERN+"",V.ETB+"",V.EUR+"",V.FJD+"",V.FKP+"",V.GBP+"",V.GEL+"",V.GHS+"",V.GIP+"",V.GMD+"",V.GNF+"",V.GTQ+"",V.GYD+"",V.HKD+"",V.HNL+"",V.HRK+"",V.HTG+"",V.HUF+"",V.IDR+"",V.ILS+"",V.INR+"",V.IQD+"",V.IRR+"",V.ISK+"",V.JMD+"",V.JOD+"",V.JPY+"",V.KES+"",V.KGS+"",V.KHR+"",V.KMF+"",V.KPW+"",V.KRW+"",V.KWD+"",V.KYD+"",V.KZT+"",V.LAK+"",V.LBP+"",V.LKR+"",V.LRD+"",V.LSL+"",V.LTL+"",V.LVL+"",V.LYD+"",V.MAD+"",V.MDL+"",V.MGA+"",V.MKD+"",V.MMK+"",V.MNT+"",V.MOP+"",V.MRO+"",V.MUR+"",V.MVR+"",V.MWK+"",V.MXN+"",V.MXV+"",V.MYR+"",V.MZN+"",V.NAD+"",V.NGN+"",V.NIO+"",V.NOK+"",V.NPR+"",V.NZD+"",V.OMR+"",V.PAB+"",V.PEN+"",V.PGK+"",V.PHP+"",V.PKR+"",V.PLN+"",V.PYG+"",V.QAR+"",V.RON+"",V.RSD+"",V.RUB+"",V.RWF+"",V.SAR+"",V.SBD+"",V.SCR+"",V.SDG+"",V.SEK+"",V.SGD+"",V.SHP+"",V.SLL+"",V.SOS+"",V.SRD+"",V.SSP+"",V.STD+"",V.SVC+"",V.SYP+"",V.SZL+"",V.THB+"",V.TJS+"",V.TMT+"",V.TND+"",V.TOP+"",V.TRY+"",V.TTD+"",V.TWD+"",V.TZS+"",V.UAH+"",V.UGX+"",V.USD+"",V.USN+"",V.USS+"",V.UYI+"",V.UYU+"",V.UZS+"",V.VEF+"",V.VND+"",V.VUV+"",V.WST+"",V.XAF+"",V.XAG+"",V.XAU+"",V.XBA+"",V.XBB+"",V.XBC+"",V.XBD+"",V.XCD+"",V.XDR+"",V.XFU+"",V.XOF+"",V.XPD+"",V.XPF+"",V.XPT+"",V.XSU+"",V.XTS+"",V.XUA+"",V.YER+"",V.ZAR+"",V.ZMW+"",V.ZWL+"";var js={exports:{}};js.exports;var Au;function Xg(){return Au||(Au=1,(function(n,e){var t=200,i="Expected a function",r="__lodash_hash_undefined__",s=1,a=2,o=9007199254740991,c="[object Arguments]",l="[object Array]",u="[object Boolean]",d="[object Date]",h="[object Error]",g="[object Function]",x="[object GeneratorFunction]",S="[object Map]",m="[object Number]",f="[object Object]",I="[object Promise]",R="[object RegExp]",A="[object Set]",U="[object String]",O="[object Symbol]",B="[object WeakMap]",X="[object ArrayBuffer]",b="[object DataView]",T="[object Float32Array]",G="[object Float64Array]",W="[object Int8Array]",ee="[object Int16Array]",oe="[object Int32Array]",re="[object Uint8Array]",ae="[object Uint8ClampedArray]",de="[object Uint16Array]",ne="[object Uint32Array]",Ee=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Se=/^\w*$/,ke=/^\./,nt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ct=/[\\^$.*+?()[\]{}|]/g,xt=/\\(\\)?/g,st=/^\[object .+?Constructor\]$/,le=/^(?:0|[1-9]\d*)$/,ie={};ie[T]=ie[G]=ie[W]=ie[ee]=ie[oe]=ie[re]=ie[ae]=ie[de]=ie[ne]=!0,ie[c]=ie[l]=ie[X]=ie[u]=ie[b]=ie[d]=ie[h]=ie[g]=ie[S]=ie[m]=ie[f]=ie[R]=ie[A]=ie[U]=ie[B]=!1;var Ne=typeof Ua=="object"&&Ua&&Ua.Object===Object&&Ua,qe=typeof self=="object"&&self&&self.Object===Object&&self,we=Ne||qe||Function("return this")(),at=e&&!e.nodeType&&e,Ht=at&&!0&&n&&!n.nodeType&&n,P=Ht&&Ht.exports===at,yt=P&&Ne.process,Qe=(function(){try{return yt&&yt.binding("util")}catch{}})(),We=Qe&&Qe.isTypedArray;function Ue(E,L){for(var te=-1,_e=E?E.length:0;++te<_e&&L(E[te],te,E)!==!1;);return E}function At(E,L){for(var te=-1,_e=E?E.length:0;++te<_e;)if(L(E[te],te,E))return!0;return!1}function Oe(E){return function(L){return L?.[E]}}function je(E,L){for(var te=-1,_e=Array(E);++te<E;)_e[te]=L(te);return _e}function kt(E){return function(L){return E(L)}}function Pt(E,L){return E?.[L]}function w(E){var L=!1;if(E!=null&&typeof E.toString!="function")try{L=!!(E+"")}catch{}return L}function v(E){var L=-1,te=Array(E.size);return E.forEach(function(_e,tt){te[++L]=[tt,_e]}),te}function j(E,L){return function(te){return E(L(te))}}function p(E){var L=-1,te=Array(E.size);return E.forEach(function(_e){te[++L]=_e}),te}var _=Array.prototype,y=Function.prototype,D=Object.prototype,C=we["__core-js_shared__"],F=(function(){var E=/[^.]+$/.exec(C&&C.keys&&C.keys.IE_PROTO||"");return E?"Symbol(src)_1."+E:""})(),Y=y.toString,k=D.hasOwnProperty,Z=D.toString,he=RegExp("^"+Y.call(k).replace(ct,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),fe=we.Symbol,se=we.Uint8Array,Me=j(Object.getPrototypeOf,Object),H=Object.create,ue=D.propertyIsEnumerable,ve=_.splice,Re=j(Object.keys,Object),pe=Vr(we,"DataView"),ce=Vr(we,"Map"),Pe=Vr(we,"Promise"),et=Vr(we,"Set"),Mt=Vr(we,"WeakMap"),ft=Vr(Object,"create"),Vn=gr(pe),On=gr(ce),ba=gr(Pe),mi=gr(et),Os=gr(Mt),fr=fe?fe.prototype:void 0,Hr=fr?fr.valueOf:void 0,pr=fr?fr.toString:void 0;function ti(E){var L=-1,te=E?E.length:0;for(this.clear();++L<te;){var _e=E[L];this.set(_e[0],_e[1])}}function zr(){this.__data__=ft?ft(null):{}}function Aa(E){return this.has(E)&&delete this.__data__[E]}function wa(E){var L=this.__data__;if(ft){var te=L[E];return te===r?void 0:te}return k.call(L,E)?L[E]:void 0}function ko(E){var L=this.__data__;return ft?L[E]!==void 0:k.call(L,E)}function Go(E,L){var te=this.__data__;return te[E]=ft&&L===void 0?r:L,this}ti.prototype.clear=zr,ti.prototype.delete=Aa,ti.prototype.get=wa,ti.prototype.has=ko,ti.prototype.set=Go;function Wn(E){var L=-1,te=E?E.length:0;for(this.clear();++L<te;){var _e=E[L];this.set(_e[0],_e[1])}}function Ho(){this.__data__=[]}function zo(E){var L=this.__data__,te=Rt(L,E);if(te<0)return!1;var _e=L.length-1;return te==_e?L.pop():ve.call(L,te,1),!0}function Vo(E){var L=this.__data__,te=Rt(L,E);return te<0?void 0:L[te][1]}function M(E){return Rt(this.__data__,E)>-1}function q(E,L){var te=this.__data__,_e=Rt(te,E);return _e<0?te.push([E,L]):te[_e][1]=L,this}Wn.prototype.clear=Ho,Wn.prototype.delete=zo,Wn.prototype.get=Vo,Wn.prototype.has=M,Wn.prototype.set=q;function J(E){var L=-1,te=E?E.length:0;for(this.clear();++L<te;){var _e=E[L];this.set(_e[0],_e[1])}}function Q(){this.__data__={hash:new ti,map:new(ce||Wn),string:new ti}}function K(E){return Ra(this,E).delete(E)}function me(E){return Ra(this,E).get(E)}function Te(E){return Ra(this,E).has(E)}function Fe(E,L){return Ra(this,E).set(E,L),this}J.prototype.clear=Q,J.prototype.delete=K,J.prototype.get=me,J.prototype.has=Te,J.prototype.set=Fe;function Ae(E){var L=-1,te=E?E.length:0;for(this.__data__=new J;++L<te;)this.add(E[L])}function Xe(E){return this.__data__.set(E,r),this}function Ye(E){return this.__data__.has(E)}Ae.prototype.add=Ae.prototype.push=Xe,Ae.prototype.has=Ye;function Be(E){this.__data__=new Wn(E)}function ut(){this.__data__=new Wn}function Tt(E){return this.__data__.delete(E)}function Ft(E){return this.__data__.get(E)}function Nt(E){return this.__data__.has(E)}function wt(E,L){var te=this.__data__;if(te instanceof Wn){var _e=te.__data__;if(!ce||_e.length<t-1)return _e.push([E,L]),this;te=this.__data__=new J(_e)}return te.set(E,L),this}Be.prototype.clear=ut,Be.prototype.delete=Tt,Be.prototype.get=Ft,Be.prototype.has=Nt,Be.prototype.set=wt;function Ve(E,L){var te=_i(E)||cu(E)?je(E.length,String):[],_e=te.length,tt=!!_e;for(var Ge in E)k.call(E,Ge)&&!(tt&&(Ge=="length"||su(Ge,_e)))&&te.push(Ge);return te}function Rt(E,L){for(var te=E.length;te--;)if(lu(E[te][0],L))return te;return-1}function gt(E){return Wr(E)?H(E):{}}var mn=pf();function Fi(E,L){return E&&mn(E,L,La)}function an(E,L){L=Ia(L,E)?[L]:iu(L);for(var te=0,_e=L.length;E!=null&&te<_e;)E=E[Da(L[te++])];return te&&te==_e?E:void 0}function mr(E){return Z.call(E)}function Ct(E,L){return E!=null&&L in Object(E)}function on(E,L,te,_e,tt){return E===L?!0:E==null||L==null||!Wr(E)&&!Na(L)?E!==E&&L!==L:xn(E,L,on,te,_e,tt)}function xn(E,L,te,_e,tt,Ge){var dt=_i(E),Yt=_i(L),zt=l,cn=l;dt||(zt=Bi(E),zt=zt==c?f:zt),Yt||(cn=Bi(L),cn=cn==c?f:cn);var Sn=zt==f&&!w(E),yn=cn==f&&!w(L),gn=zt==cn;if(gn&&!Sn)return Ge||(Ge=new Be),dt||du(E)?ru(E,L,te,_e,tt,Ge):mf(E,L,zt,te,_e,tt,Ge);if(!(tt&a)){var Fn=Sn&&k.call(E,"__wrapped__"),Bn=yn&&k.call(L,"__wrapped__");if(Fn||Bn){var ki=Fn?E.value():E,vi=Bn?L.value():L;return Ge||(Ge=new Be),te(ki,vi,_e,tt,Ge)}}return gn?(Ge||(Ge=new Be),gf(E,L,te,_e,tt,Ge)):!1}function tn(E,L,te,_e){var tt=te.length,Ge=tt;if(E==null)return!Ge;for(E=Object(E);tt--;){var dt=te[tt];if(dt[2]?dt[1]!==E[dt[0]]:!(dt[0]in E))return!1}for(;++tt<Ge;){dt=te[tt];var Yt=dt[0],zt=E[Yt],cn=dt[1];if(dt[2]){if(zt===void 0&&!(Yt in E))return!1}else{var Sn=new Be,yn;if(!(yn===void 0?on(cn,zt,_e,s|a,Sn):yn))return!1}}return!0}function ln(E){if(!Wr(E)||xf(E))return!1;var L=Xo(E)||w(E)?he:st;return L.test(gr(E))}function Fs(E){return Na(E)&&qo(E.length)&&!!ie[Z.call(E)]}function gi(E){return typeof E=="function"?E:E==null?Rf:typeof E=="object"?_i(E)?df(E[0],E[1]):uf(E):If(E)}function cf(E){if(!Sf(E))return Re(E);var L=[];for(var te in Object(E))k.call(E,te)&&te!="constructor"&&L.push(te);return L}function uf(E){var L=_f(E);return L.length==1&&L[0][2]?ou(L[0][0],L[0][1]):function(te){return te===E||tn(te,E,L)}}function df(E,L){return Ia(E)&&au(L)?ou(Da(E),L):function(te){var _e=bf(te,E);return _e===void 0&&_e===L?Af(te,E):on(L,_e,void 0,s|a)}}function hf(E){return function(L){return an(L,E)}}function ff(E){if(typeof E=="string")return E;if(Yo(E))return pr?pr.call(E):"";var L=E+"";return L=="0"&&1/E==-1/0?"-0":L}function iu(E){return _i(E)?E:yf(E)}function pf(E){return function(L,te,_e){for(var tt=-1,Ge=Object(L),dt=_e(L),Yt=dt.length;Yt--;){var zt=dt[++tt];if(te(Ge[zt],zt,Ge)===!1)break}return L}}function ru(E,L,te,_e,tt,Ge){var dt=tt&a,Yt=E.length,zt=L.length;if(Yt!=zt&&!(dt&&zt>Yt))return!1;var cn=Ge.get(E);if(cn&&Ge.get(L))return cn==L;var Sn=-1,yn=!0,gn=tt&s?new Ae:void 0;for(Ge.set(E,L),Ge.set(L,E);++Sn<Yt;){var Fn=E[Sn],Bn=L[Sn];if(_e)var ki=dt?_e(Bn,Fn,Sn,L,E,Ge):_e(Fn,Bn,Sn,E,L,Ge);if(ki!==void 0){if(ki)continue;yn=!1;break}if(gn){if(!At(L,function(vi,_r){if(!gn.has(_r)&&(Fn===vi||te(Fn,vi,_e,tt,Ge)))return gn.add(_r)})){yn=!1;break}}else if(!(Fn===Bn||te(Fn,Bn,_e,tt,Ge))){yn=!1;break}}return Ge.delete(E),Ge.delete(L),yn}function mf(E,L,te,_e,tt,Ge,dt){switch(te){case b:if(E.byteLength!=L.byteLength||E.byteOffset!=L.byteOffset)return!1;E=E.buffer,L=L.buffer;case X:return!(E.byteLength!=L.byteLength||!_e(new se(E),new se(L)));case u:case d:case m:return lu(+E,+L);case h:return E.name==L.name&&E.message==L.message;case R:case U:return E==L+"";case S:var Yt=v;case A:var zt=Ge&a;if(Yt||(Yt=p),E.size!=L.size&&!zt)return!1;var cn=dt.get(E);if(cn)return cn==L;Ge|=s,dt.set(E,L);var Sn=ru(Yt(E),Yt(L),_e,tt,Ge,dt);return dt.delete(E),Sn;case O:if(Hr)return Hr.call(E)==Hr.call(L)}return!1}function gf(E,L,te,_e,tt,Ge){var dt=tt&a,Yt=La(E),zt=Yt.length,cn=La(L),Sn=cn.length;if(zt!=Sn&&!dt)return!1;for(var yn=zt;yn--;){var gn=Yt[yn];if(!(dt?gn in L:k.call(L,gn)))return!1}var Fn=Ge.get(E);if(Fn&&Ge.get(L))return Fn==L;var Bn=!0;Ge.set(E,L),Ge.set(L,E);for(var ki=dt;++yn<zt;){gn=Yt[yn];var vi=E[gn],_r=L[gn];if(_e)var hu=dt?_e(_r,vi,gn,L,E,Ge):_e(vi,_r,gn,E,L,Ge);if(!(hu===void 0?vi===_r||te(vi,_r,_e,tt,Ge):hu)){Bn=!1;break}ki||(ki=gn=="constructor")}if(Bn&&!ki){var Pa=E.constructor,Ca=L.constructor;Pa!=Ca&&"constructor"in E&&"constructor"in L&&!(typeof Pa=="function"&&Pa instanceof Pa&&typeof Ca=="function"&&Ca instanceof Ca)&&(Bn=!1)}return Ge.delete(E),Ge.delete(L),Bn}function Ra(E,L){var te=E.__data__;return Ef(L)?te[typeof L=="string"?"string":"hash"]:te.map}function _f(E){for(var L=La(E),te=L.length;te--;){var _e=L[te],tt=E[_e];L[te]=[_e,tt,au(tt)]}return L}function Vr(E,L){var te=Pt(E,L);return ln(te)?te:void 0}var Bi=mr;(pe&&Bi(new pe(new ArrayBuffer(1)))!=b||ce&&Bi(new ce)!=S||Pe&&Bi(Pe.resolve())!=I||et&&Bi(new et)!=A||Mt&&Bi(new Mt)!=B)&&(Bi=function(E){var L=Z.call(E),te=L==f?E.constructor:void 0,_e=te?gr(te):void 0;if(_e)switch(_e){case Vn:return b;case On:return S;case ba:return I;case mi:return A;case Os:return B}return L});function vf(E,L,te){L=Ia(L,E)?[L]:iu(L);for(var _e,tt=-1,dt=L.length;++tt<dt;){var Ge=Da(L[tt]);if(!(_e=E!=null&&te(E,Ge)))break;E=E[Ge]}if(_e)return _e;var dt=E?E.length:0;return!!dt&&qo(dt)&&su(Ge,dt)&&(_i(E)||cu(E))}function su(E,L){return L=L??o,!!L&&(typeof E=="number"||le.test(E))&&E>-1&&E%1==0&&E<L}function Ia(E,L){if(_i(E))return!1;var te=typeof E;return te=="number"||te=="symbol"||te=="boolean"||E==null||Yo(E)?!0:Se.test(E)||!Ee.test(E)||L!=null&&E in Object(L)}function Ef(E){var L=typeof E;return L=="string"||L=="number"||L=="symbol"||L=="boolean"?E!=="__proto__":E===null}function xf(E){return!!F&&F in E}function Sf(E){var L=E&&E.constructor,te=typeof L=="function"&&L.prototype||D;return E===te}function au(E){return E===E&&!Wr(E)}function ou(E,L){return function(te){return te==null?!1:te[E]===L&&(L!==void 0||E in Object(te))}}var yf=Wo(function(E){E=Tf(E);var L=[];return ke.test(E)&&L.push(""),E.replace(nt,function(te,_e,tt,Ge){L.push(tt?Ge.replace(xt,"$1"):_e||te)}),L});function Da(E){if(typeof E=="string"||Yo(E))return E;var L=E+"";return L=="0"&&1/E==-1/0?"-0":L}function gr(E){if(E!=null){try{return Y.call(E)}catch{}try{return E+""}catch{}}return""}function Wo(E,L){if(typeof E!="function"||L&&typeof L!="function")throw new TypeError(i);var te=function(){var _e=arguments,tt=L?L.apply(this,_e):_e[0],Ge=te.cache;if(Ge.has(tt))return Ge.get(tt);var dt=E.apply(this,_e);return te.cache=Ge.set(tt,dt),dt};return te.cache=new(Wo.Cache||J),te}Wo.Cache=J;function lu(E,L){return E===L||E!==E&&L!==L}function cu(E){return Mf(E)&&k.call(E,"callee")&&(!ue.call(E,"callee")||Z.call(E)==c)}var _i=Array.isArray;function uu(E){return E!=null&&qo(E.length)&&!Xo(E)}function Mf(E){return Na(E)&&uu(E)}function Xo(E){var L=Wr(E)?Z.call(E):"";return L==g||L==x}function qo(E){return typeof E=="number"&&E>-1&&E%1==0&&E<=o}function Wr(E){var L=typeof E;return!!E&&(L=="object"||L=="function")}function Na(E){return!!E&&typeof E=="object"}function Yo(E){return typeof E=="symbol"||Na(E)&&Z.call(E)==O}var du=We?kt(We):Fs;function Tf(E){return E==null?"":ff(E)}function bf(E,L,te){var _e=E==null?void 0:an(E,L);return _e===void 0?te:_e}function Af(E,L){return E!=null&&vf(E,L,Ct)}function La(E){return uu(E)?Ve(E):cf(E)}function wf(E,L,te){var _e=_i(E)||du(E);if(L=gi(L),te==null)if(_e||Wr(E)){var tt=E.constructor;_e?te=_i(E)?new tt:[]:te=Xo(tt)?gt(Me(E)):{}}else te={};return(_e?Ue:Fi)(E,function(Ge,dt,Yt){return L(te,Ge,dt,Yt)}),te}function Rf(E){return E}function If(E){return Ia(E)?Oe(Da(E)):hf(E)}n.exports=wf})(js,js.exports)),js.exports}Xg();const zc="180",qg=0,wu=1,Yg=2,yh=1,Zg=2,Ai=3,lr=0,Tn=1,Di=2,Qi=0,ds=1,Ru=2,Iu=3,Du=4,Kg=5,wr=100,jg=101,$g=102,Jg=103,Qg=104,e_=200,t_=201,n_=202,i_=203,zl=204,Vl=205,r_=206,s_=207,a_=208,o_=209,l_=210,c_=211,u_=212,d_=213,h_=214,Wl=0,Xl=1,ql=2,_s=3,Yl=4,Zl=5,Kl=6,jl=7,Mh=0,f_=1,p_=2,er=0,m_=1,g_=2,__=3,Th=4,v_=5,E_=6,x_=7,bh=300,vs=301,Es=302,$l=303,Jl=304,Co=306,Ql=1e3,Dr=1001,ec=1002,Cn=1003,S_=1004,Ba=1005,ai=1006,Qo=1007,Nr=1008,fi=1009,Ah=1010,wh=1011,_a=1012,Vc=1013,Br=1014,oi=1015,Ma=1016,Wc=1017,Xc=1018,va=1020,Rh=35902,Ih=35899,Dh=1021,Nh=1022,jn=1023,Ea=1026,xa=1027,qc=1028,Yc=1029,Lh=1030,Zc=1031,Kc=1033,co=33776,uo=33777,ho=33778,fo=33779,tc=35840,nc=35841,ic=35842,rc=35843,sc=36196,ac=37492,oc=37496,lc=37808,cc=37809,uc=37810,dc=37811,hc=37812,fc=37813,pc=37814,mc=37815,gc=37816,_c=37817,vc=37818,Ec=37819,xc=37820,Sc=37821,yc=36492,Mc=36494,Tc=36495,bc=36283,Ac=36284,wc=36285,Rc=36286,y_=3200,M_=3201,Ph=0,T_=1,Ki="",In="srgb",xs="srgb-linear",To="linear",It="srgb",Xr=7680,Nu=519,b_=512,A_=513,w_=514,Ch=515,R_=516,I_=517,D_=518,N_=519,Lu=35044,Pu="300 es",li=2e3,bo=2001;class Ns{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],el=Math.PI/180,Ic=180/Math.PI;function Ta(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]+"-"+un[e&255]+un[e>>8&255]+"-"+un[e>>16&15|64]+un[e>>24&255]+"-"+un[t&63|128]+un[t>>8&255]+"-"+un[t>>16&255]+un[t>>24&255]+un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]).toLowerCase()}function pt(n,e,t){return Math.max(e,Math.min(t,n))}function L_(n,e){return(n%e+e)%e}function tl(n,e,t){return(1-t)*n+t*e}function ks(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Mn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Et{constructor(e=0,t=0){Et.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ui{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3];const h=s[a+0],g=s[a+1],x=s[a+2],S=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=h,e[t+1]=g,e[t+2]=x,e[t+3]=S;return}if(d!==S||c!==h||l!==g||u!==x){let m=1-o;const f=c*h+l*g+u*x+d*S,I=f>=0?1:-1,R=1-f*f;if(R>Number.EPSILON){const U=Math.sqrt(R),O=Math.atan2(U,f*I);m=Math.sin(m*O)/U,o=Math.sin(o*O)/U}const A=o*I;if(c=c*m+h*A,l=l*m+g*A,u=u*m+x*A,d=d*m+S*A,m===1-o){const U=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=U,l*=U,u*=U,d*=U}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[a],h=s[a+1],g=s[a+2],x=s[a+3];return e[t]=o*x+u*d+c*g-l*h,e[t+1]=c*x+u*h+l*d-o*g,e[t+2]=l*x+u*g+o*h-c*d,e[t+3]=u*x-o*d-c*h-l*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),d=o(s/2),h=c(i/2),g=c(r/2),x=c(s/2);switch(a){case"XYZ":this._x=h*u*d+l*g*x,this._y=l*g*d-h*u*x,this._z=l*u*x+h*g*d,this._w=l*u*d-h*g*x;break;case"YXZ":this._x=h*u*d+l*g*x,this._y=l*g*d-h*u*x,this._z=l*u*x-h*g*d,this._w=l*u*d+h*g*x;break;case"ZXY":this._x=h*u*d-l*g*x,this._y=l*g*d+h*u*x,this._z=l*u*x+h*g*d,this._w=l*u*d-h*g*x;break;case"ZYX":this._x=h*u*d-l*g*x,this._y=l*g*d+h*u*x,this._z=l*u*x-h*g*d,this._w=l*u*d+h*g*x;break;case"YZX":this._x=h*u*d+l*g*x,this._y=l*g*d+h*u*x,this._z=l*u*x-h*g*d,this._w=l*u*d-h*g*x;break;case"XZY":this._x=h*u*d-l*g*x,this._y=l*g*d-h*u*x,this._z=l*u*x+h*g*d,this._w=l*u*d+h*g*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=i+o+d;if(h>0){const g=.5/Math.sqrt(h+1);this._w=.25/g,this._x=(u-c)*g,this._y=(s-l)*g,this._z=(a-r)*g}else if(i>o&&i>d){const g=2*Math.sqrt(1+i-o-d);this._w=(u-c)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+l)/g}else if(o>d){const g=2*Math.sqrt(1+o-i-d);this._w=(s-l)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(c+u)/g}else{const g=2*Math.sqrt(1+d-i-o);this._w=(a-r)/g,this._x=(s+l)/g,this._y=(c+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-i*l,this._z=s*u+a*l+i*c-r*o,this._w=a*u-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const g=1-t;return this._w=g*a+t*this._w,this._x=g*i+t*this._x,this._y=g*r+t*this._y,this._z=g*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),d=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=a*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,t=0,i=0){$.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),u=2*(o*t-s*r),d=2*(s*i-a*t);return this.x=t+c*l+a*d-o*u,this.y=i+c*u+o*l-s*d,this.z=r+c*d+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return nl.copy(this).projectOnVector(e),this.sub(nl)}reflect(e){return this.sub(nl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nl=new $,Cu=new Ui;class rt{constructor(e,t,i,r,s,a,o,c,l){rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],d=i[7],h=i[2],g=i[5],x=i[8],S=r[0],m=r[3],f=r[6],I=r[1],R=r[4],A=r[7],U=r[2],O=r[5],B=r[8];return s[0]=a*S+o*I+c*U,s[3]=a*m+o*R+c*O,s[6]=a*f+o*A+c*B,s[1]=l*S+u*I+d*U,s[4]=l*m+u*R+d*O,s[7]=l*f+u*A+d*B,s[2]=h*S+g*I+x*U,s[5]=h*m+g*R+x*O,s[8]=h*f+g*A+x*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=u*a-o*l,h=o*c-u*s,g=l*s-a*c,x=t*d+i*h+r*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/x;return e[0]=d*S,e[1]=(r*l-u*i)*S,e[2]=(o*i-r*a)*S,e[3]=h*S,e[4]=(u*t-r*c)*S,e[5]=(r*s-o*t)*S,e[6]=g*S,e[7]=(i*c-l*t)*S,e[8]=(a*t-i*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(il.makeScale(e,t)),this}rotate(e){return this.premultiply(il.makeRotation(-e)),this}translate(e,t){return this.premultiply(il.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const il=new rt;function Uh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ao(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function P_(){const n=Ao("canvas");return n.style.display="block",n}const Uu={};function Sa(n){n in Uu||(Uu[n]=!0,console.warn(n))}function C_(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Ou=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fu=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function U_(){const n={enabled:!0,workingColorSpace:xs,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===It&&(r.r=Pi(r.r),r.g=Pi(r.g),r.b=Pi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===It&&(r.r=hs(r.r),r.g=hs(r.g),r.b=hs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ki?To:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Sa("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Sa("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[xs]:{primaries:e,whitePoint:i,transfer:To,toXYZ:Ou,fromXYZ:Fu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:In},outputColorSpaceConfig:{drawingBufferColorSpace:In}},[In]:{primaries:e,whitePoint:i,transfer:It,toXYZ:Ou,fromXYZ:Fu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:In}}}),n}const St=U_();function Pi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function hs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let qr;class O_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{qr===void 0&&(qr=Ao("canvas")),qr.width=e.width,qr.height=e.height;const r=qr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=qr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ao("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Pi(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Pi(t[i]/255)*255):t[i]=Pi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let F_=0;class jc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:F_++}),this.uuid=Ta(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(rl(r[a].image)):s.push(rl(r[a]))}else s=rl(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function rl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?O_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let B_=0;const sl=new $;class vn extends Ns{constructor(e=vn.DEFAULT_IMAGE,t=vn.DEFAULT_MAPPING,i=Dr,r=Dr,s=ai,a=Nr,o=jn,c=fi,l=vn.DEFAULT_ANISOTROPY,u=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:B_++}),this.uuid=Ta(),this.name="",this.source=new jc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(sl).x}get height(){return this.source.getSize(sl).y}get depth(){return this.source.getSize(sl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ql:e.x=e.x-Math.floor(e.x);break;case Dr:e.x=e.x<0?0:1;break;case ec:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ql:e.y=e.y-Math.floor(e.y);break;case Dr:e.y=e.y<0?0:1;break;case ec:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=bh;vn.DEFAULT_ANISOTROPY=1;class qt{constructor(e=0,t=0,i=0,r=1){qt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],g=c[5],x=c[9],S=c[2],m=c[6],f=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-S)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+S)<.1&&Math.abs(x+m)<.1&&Math.abs(l+g+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(l+1)/2,A=(g+1)/2,U=(f+1)/2,O=(u+h)/4,B=(d+S)/4,X=(x+m)/4;return R>A&&R>U?R<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(R),r=O/i,s=B/i):A>U?A<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(A),i=O/r,s=X/r):U<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(U),i=B/s,r=X/s),this.set(i,r,s,t),this}let I=Math.sqrt((m-x)*(m-x)+(d-S)*(d-S)+(h-u)*(h-u));return Math.abs(I)<.001&&(I=1),this.x=(m-x)/I,this.y=(d-S)/I,this.z=(h-u)/I,this.w=Math.acos((l+g+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this.w=pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this.w=pt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class k_ extends Ns{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new qt(0,0,e,t),this.scissorTest=!1,this.viewport=new qt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new vn(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:ai,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new jc(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kr extends k_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Oh extends vn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class G_ extends vn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gr{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Xn):Xn.fromBufferAttribute(s,a),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ka.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ka.copy(i.boundingBox)),ka.applyMatrix4(e.matrixWorld),this.union(ka)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gs),Ga.subVectors(this.max,Gs),Yr.subVectors(e.a,Gs),Zr.subVectors(e.b,Gs),Kr.subVectors(e.c,Gs),Gi.subVectors(Zr,Yr),Hi.subVectors(Kr,Zr),vr.subVectors(Yr,Kr);let t=[0,-Gi.z,Gi.y,0,-Hi.z,Hi.y,0,-vr.z,vr.y,Gi.z,0,-Gi.x,Hi.z,0,-Hi.x,vr.z,0,-vr.x,-Gi.y,Gi.x,0,-Hi.y,Hi.x,0,-vr.y,vr.x,0];return!al(t,Yr,Zr,Kr,Ga)||(t=[1,0,0,0,1,0,0,0,1],!al(t,Yr,Zr,Kr,Ga))?!1:(Ha.crossVectors(Gi,Hi),t=[Ha.x,Ha.y,Ha.z],al(t,Yr,Zr,Kr,Ga))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ei=[new $,new $,new $,new $,new $,new $,new $,new $],Xn=new $,ka=new Gr,Yr=new $,Zr=new $,Kr=new $,Gi=new $,Hi=new $,vr=new $,Gs=new $,Ga=new $,Ha=new $,Er=new $;function al(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Er.fromArray(n,s);const o=r.x*Math.abs(Er.x)+r.y*Math.abs(Er.y)+r.z*Math.abs(Er.z),c=e.dot(Er),l=t.dot(Er),u=i.dot(Er);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const H_=new Gr,Hs=new $,ol=new $;class Ls{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):H_.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hs.subVectors(e,this.center);const t=Hs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Hs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ol.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hs.copy(e.center).add(ol)),this.expandByPoint(Hs.copy(e.center).sub(ol))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const xi=new $,ll=new $,za=new $,zi=new $,cl=new $,Va=new $,ul=new $;class Fh{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xi.copy(this.origin).addScaledVector(this.direction,t),xi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ll.copy(e).add(t).multiplyScalar(.5),za.copy(t).sub(e).normalize(),zi.copy(this.origin).sub(ll);const s=e.distanceTo(t)*.5,a=-this.direction.dot(za),o=zi.dot(this.direction),c=-zi.dot(za),l=zi.lengthSq(),u=Math.abs(1-a*a);let d,h,g,x;if(u>0)if(d=a*c-o,h=a*o-c,x=s*u,d>=0)if(h>=-x)if(h<=x){const S=1/u;d*=S,h*=S,g=d*(d+a*h+2*o)+h*(a*d+h+2*c)+l}else h=s,d=Math.max(0,-(a*h+o)),g=-d*d+h*(h+2*c)+l;else h=-s,d=Math.max(0,-(a*h+o)),g=-d*d+h*(h+2*c)+l;else h<=-x?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-c),s),g=-d*d+h*(h+2*c)+l):h<=x?(d=0,h=Math.min(Math.max(-s,-c),s),g=h*(h+2*c)+l):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-c),s),g=-d*d+h*(h+2*c)+l);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),g=-d*d+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ll).addScaledVector(za,h),g}intersectSphere(e,t){xi.subVectors(e.center,this.origin);const i=xi.dot(this.direction),r=xi.dot(xi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,xi)!==null}intersectTriangle(e,t,i,r,s){cl.subVectors(t,e),Va.subVectors(i,e),ul.crossVectors(cl,Va);let a=this.direction.dot(ul),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;zi.subVectors(this.origin,e);const c=o*this.direction.dot(Va.crossVectors(zi,Va));if(c<0)return null;const l=o*this.direction.dot(cl.cross(zi));if(l<0||c+l>a)return null;const u=-o*zi.dot(ul);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ot{constructor(e,t,i,r,s,a,o,c,l,u,d,h,g,x,S,m){Ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,u,d,h,g,x,S,m)}set(e,t,i,r,s,a,o,c,l,u,d,h,g,x,S,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=u,f[10]=d,f[14]=h,f[3]=g,f[7]=x,f[11]=S,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ot().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/jr.setFromMatrixColumn(e,0).length(),s=1/jr.setFromMatrixColumn(e,1).length(),a=1/jr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*u,g=a*d,x=o*u,S=o*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=g+x*l,t[5]=h-S*l,t[9]=-o*c,t[2]=S-h*l,t[6]=x+g*l,t[10]=a*c}else if(e.order==="YXZ"){const h=c*u,g=c*d,x=l*u,S=l*d;t[0]=h+S*o,t[4]=x*o-g,t[8]=a*l,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=g*o-x,t[6]=S+h*o,t[10]=a*c}else if(e.order==="ZXY"){const h=c*u,g=c*d,x=l*u,S=l*d;t[0]=h-S*o,t[4]=-a*d,t[8]=x+g*o,t[1]=g+x*o,t[5]=a*u,t[9]=S-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const h=a*u,g=a*d,x=o*u,S=o*d;t[0]=c*u,t[4]=x*l-g,t[8]=h*l+S,t[1]=c*d,t[5]=S*l+h,t[9]=g*l-x,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const h=a*c,g=a*l,x=o*c,S=o*l;t[0]=c*u,t[4]=S-h*d,t[8]=x*d+g,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=g*d+x,t[10]=h-S*d}else if(e.order==="XZY"){const h=a*c,g=a*l,x=o*c,S=o*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+S,t[5]=a*u,t[9]=g*d-x,t[2]=x*d-g,t[6]=o*u,t[10]=S*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(z_,e,V_)}lookAt(e,t,i){const r=this.elements;return An.subVectors(e,t),An.lengthSq()===0&&(An.z=1),An.normalize(),Vi.crossVectors(i,An),Vi.lengthSq()===0&&(Math.abs(i.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),Vi.crossVectors(i,An)),Vi.normalize(),Wa.crossVectors(An,Vi),r[0]=Vi.x,r[4]=Wa.x,r[8]=An.x,r[1]=Vi.y,r[5]=Wa.y,r[9]=An.y,r[2]=Vi.z,r[6]=Wa.z,r[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],d=i[5],h=i[9],g=i[13],x=i[2],S=i[6],m=i[10],f=i[14],I=i[3],R=i[7],A=i[11],U=i[15],O=r[0],B=r[4],X=r[8],b=r[12],T=r[1],G=r[5],W=r[9],ee=r[13],oe=r[2],re=r[6],ae=r[10],de=r[14],ne=r[3],Ee=r[7],Se=r[11],ke=r[15];return s[0]=a*O+o*T+c*oe+l*ne,s[4]=a*B+o*G+c*re+l*Ee,s[8]=a*X+o*W+c*ae+l*Se,s[12]=a*b+o*ee+c*de+l*ke,s[1]=u*O+d*T+h*oe+g*ne,s[5]=u*B+d*G+h*re+g*Ee,s[9]=u*X+d*W+h*ae+g*Se,s[13]=u*b+d*ee+h*de+g*ke,s[2]=x*O+S*T+m*oe+f*ne,s[6]=x*B+S*G+m*re+f*Ee,s[10]=x*X+S*W+m*ae+f*Se,s[14]=x*b+S*ee+m*de+f*ke,s[3]=I*O+R*T+A*oe+U*ne,s[7]=I*B+R*G+A*re+U*Ee,s[11]=I*X+R*W+A*ae+U*Se,s[15]=I*b+R*ee+A*de+U*ke,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],g=e[14],x=e[3],S=e[7],m=e[11],f=e[15];return x*(+s*c*d-r*l*d-s*o*h+i*l*h+r*o*g-i*c*g)+S*(+t*c*g-t*l*h+s*a*h-r*a*g+r*l*u-s*c*u)+m*(+t*l*d-t*o*g-s*a*d+i*a*g+s*o*u-i*l*u)+f*(-r*o*u-t*c*d+t*o*h+r*a*d-i*a*h+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],g=e[11],x=e[12],S=e[13],m=e[14],f=e[15],I=d*m*l-S*h*l+S*c*g-o*m*g-d*c*f+o*h*f,R=x*h*l-u*m*l-x*c*g+a*m*g+u*c*f-a*h*f,A=u*S*l-x*d*l+x*o*g-a*S*g-u*o*f+a*d*f,U=x*d*c-u*S*c-x*o*h+a*S*h+u*o*m-a*d*m,O=t*I+i*R+r*A+s*U;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/O;return e[0]=I*B,e[1]=(S*h*s-d*m*s-S*r*g+i*m*g+d*r*f-i*h*f)*B,e[2]=(o*m*s-S*c*s+S*r*l-i*m*l-o*r*f+i*c*f)*B,e[3]=(d*c*s-o*h*s-d*r*l+i*h*l+o*r*g-i*c*g)*B,e[4]=R*B,e[5]=(u*m*s-x*h*s+x*r*g-t*m*g-u*r*f+t*h*f)*B,e[6]=(x*c*s-a*m*s-x*r*l+t*m*l+a*r*f-t*c*f)*B,e[7]=(a*h*s-u*c*s+u*r*l-t*h*l-a*r*g+t*c*g)*B,e[8]=A*B,e[9]=(x*d*s-u*S*s-x*i*g+t*S*g+u*i*f-t*d*f)*B,e[10]=(a*S*s-x*o*s+x*i*l-t*S*l-a*i*f+t*o*f)*B,e[11]=(u*o*s-a*d*s-u*i*l+t*d*l+a*i*g-t*o*g)*B,e[12]=U*B,e[13]=(u*S*r-x*d*r+x*i*h-t*S*h-u*i*m+t*d*m)*B,e[14]=(x*o*r-a*S*r-x*i*c+t*S*c+a*i*m-t*o*m)*B,e[15]=(a*d*r-u*o*r+u*i*c-t*d*c-a*i*h+t*o*h)*B,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,d=o+o,h=s*l,g=s*u,x=s*d,S=a*u,m=a*d,f=o*d,I=c*l,R=c*u,A=c*d,U=i.x,O=i.y,B=i.z;return r[0]=(1-(S+f))*U,r[1]=(g+A)*U,r[2]=(x-R)*U,r[3]=0,r[4]=(g-A)*O,r[5]=(1-(h+f))*O,r[6]=(m+I)*O,r[7]=0,r[8]=(x+R)*B,r[9]=(m-I)*B,r[10]=(1-(h+S))*B,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=jr.set(r[0],r[1],r[2]).length();const a=jr.set(r[4],r[5],r[6]).length(),o=jr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],qn.copy(this);const l=1/s,u=1/a,d=1/o;return qn.elements[0]*=l,qn.elements[1]*=l,qn.elements[2]*=l,qn.elements[4]*=u,qn.elements[5]*=u,qn.elements[6]*=u,qn.elements[8]*=d,qn.elements[9]*=d,qn.elements[10]*=d,t.setFromRotationMatrix(qn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=li,c=!1){const l=this.elements,u=2*s/(t-e),d=2*s/(i-r),h=(t+e)/(t-e),g=(i+r)/(i-r);let x,S;if(c)x=s/(a-s),S=a*s/(a-s);else if(o===li)x=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===bo)x=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=g,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=li,c=!1){const l=this.elements,u=2/(t-e),d=2/(i-r),h=-(t+e)/(t-e),g=-(i+r)/(i-r);let x,S;if(c)x=1/(a-s),S=a/(a-s);else if(o===li)x=-2/(a-s),S=-(a+s)/(a-s);else if(o===bo)x=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=g,l[2]=0,l[6]=0,l[10]=x,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const jr=new $,qn=new Ot,z_=new $(0,0,0),V_=new $(1,1,1),Vi=new $,Wa=new $,An=new $,Bu=new Ot,ku=new Ui;class pi{constructor(e=0,t=0,i=0,r=pi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],d=r[2],h=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-pt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(pt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Bu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ku.setFromEuler(this),this.setFromQuaternion(ku,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pi.DEFAULT_ORDER="XYZ";class Bh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let W_=0;const Gu=new $,$r=new Ui,Si=new Ot,Xa=new $,zs=new $,X_=new $,q_=new Ui,Hu=new $(1,0,0),zu=new $(0,1,0),Vu=new $(0,0,1),Wu={type:"added"},Y_={type:"removed"},Jr={type:"childadded",child:null},dl={type:"childremoved",child:null};class jt extends Ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:W_++}),this.uuid=Ta(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jt.DEFAULT_UP.clone();const e=new $,t=new pi,i=new Ui,r=new $(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ot},normalMatrix:{value:new rt}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $r.setFromAxisAngle(e,t),this.quaternion.multiply($r),this}rotateOnWorldAxis(e,t){return $r.setFromAxisAngle(e,t),this.quaternion.premultiply($r),this}rotateX(e){return this.rotateOnAxis(Hu,e)}rotateY(e){return this.rotateOnAxis(zu,e)}rotateZ(e){return this.rotateOnAxis(Vu,e)}translateOnAxis(e,t){return Gu.copy(e).applyQuaternion(this.quaternion),this.position.add(Gu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hu,e)}translateY(e){return this.translateOnAxis(zu,e)}translateZ(e){return this.translateOnAxis(Vu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Xa.copy(e):Xa.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(zs,Xa,this.up):Si.lookAt(Xa,zs,this.up),this.quaternion.setFromRotationMatrix(Si),r&&(Si.extractRotation(r.matrixWorld),$r.setFromRotationMatrix(Si),this.quaternion.premultiply($r.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wu),Jr.child=e,this.dispatchEvent(Jr),Jr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Y_),dl.child=e,this.dispatchEvent(dl),dl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wu),Jr.child=e,this.dispatchEvent(Jr),Jr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,e,X_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,q_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),g=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),g.length>0&&(i.animations=g),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}jt.DEFAULT_UP=new $(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yn=new $,yi=new $,hl=new $,Mi=new $,Qr=new $,es=new $,Xu=new $,fl=new $,pl=new $,ml=new $,gl=new qt,_l=new qt,vl=new qt;class Zn{constructor(e=new $,t=new $,i=new $){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Yn.subVectors(e,t),r.cross(Yn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Yn.subVectors(r,t),yi.subVectors(i,t),hl.subVectors(e,t);const a=Yn.dot(Yn),o=Yn.dot(yi),c=Yn.dot(hl),l=yi.dot(yi),u=yi.dot(hl),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,g=(l*c-o*u)*h,x=(a*u-o*c)*h;return s.set(1-g-x,x,g)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,Mi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Mi.x),c.addScaledVector(a,Mi.y),c.addScaledVector(o,Mi.z),c)}static getInterpolatedAttribute(e,t,i,r,s,a){return gl.setScalar(0),_l.setScalar(0),vl.setScalar(0),gl.fromBufferAttribute(e,t),_l.fromBufferAttribute(e,i),vl.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(gl,s.x),a.addScaledVector(_l,s.y),a.addScaledVector(vl,s.z),a}static isFrontFacing(e,t,i,r){return Yn.subVectors(i,t),yi.subVectors(e,t),Yn.cross(yi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),Yn.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Zn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Qr.subVectors(r,i),es.subVectors(s,i),fl.subVectors(e,i);const c=Qr.dot(fl),l=es.dot(fl);if(c<=0&&l<=0)return t.copy(i);pl.subVectors(e,r);const u=Qr.dot(pl),d=es.dot(pl);if(u>=0&&d<=u)return t.copy(r);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(i).addScaledVector(Qr,a);ml.subVectors(e,s);const g=Qr.dot(ml),x=es.dot(ml);if(x>=0&&g<=x)return t.copy(s);const S=g*l-c*x;if(S<=0&&l>=0&&x<=0)return o=l/(l-x),t.copy(i).addScaledVector(es,o);const m=u*x-g*d;if(m<=0&&d-u>=0&&g-x>=0)return Xu.subVectors(s,r),o=(d-u)/(d-u+(g-x)),t.copy(r).addScaledVector(Xu,o);const f=1/(m+S+h);return a=S*f,o=h*f,t.copy(i).addScaledVector(Qr,a).addScaledVector(es,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const kh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},qa={h:0,s:0,l:0};function El(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class mt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=In){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=St.workingColorSpace){return this.r=e,this.g=t,this.b=i,St.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=St.workingColorSpace){if(e=L_(e,1),t=pt(t,0,1),i=pt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=El(a,s,e+1/3),this.g=El(a,s,e),this.b=El(a,s,e-1/3)}return St.colorSpaceToWorking(this,r),this}setStyle(e,t=In){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=In){const i=kh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=hs(e.r),this.g=hs(e.g),this.b=hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=In){return St.workingToColorSpace(dn.copy(this),e),Math.round(pt(dn.r*255,0,255))*65536+Math.round(pt(dn.g*255,0,255))*256+Math.round(pt(dn.b*255,0,255))}getHexString(e=In){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.workingToColorSpace(dn.copy(this),t);const i=dn.r,r=dn.g,s=dn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=u<=.5?d/(a+o):d/(2-a-o),a){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=St.workingColorSpace){return St.workingToColorSpace(dn.copy(this),t),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=In){St.workingToColorSpace(dn.copy(this),e);const t=dn.r,i=dn.g,r=dn.b;return e!==In?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Wi),this.setHSL(Wi.h+e,Wi.s+t,Wi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Wi),e.getHSL(qa);const i=tl(Wi.h,qa.h,t),r=tl(Wi.s,qa.s,t),s=tl(Wi.l,qa.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dn=new mt;mt.NAMES=kh;let Z_=0;class Ps extends Ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Z_++}),this.uuid=Ta(),this.name="",this.type="Material",this.blending=ds,this.side=lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zl,this.blendDst=Vl,this.blendEquation=wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=_s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xr,this.stencilZFail=Xr,this.stencilZPass=Xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(i.blending=this.blending),this.side!==lr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==zl&&(i.blendSrc=this.blendSrc),this.blendDst!==Vl&&(i.blendDst=this.blendDst),this.blendEquation!==wr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==_s&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Xr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Xr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ni extends Ps{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.combine=Mh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zt=new $,Ya=new Et;let K_=0;class Qn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:K_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Lu,this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ya.fromBufferAttribute(this,t),Ya.applyMatrix3(e),this.setXY(t,Ya.x,Ya.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ks(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Mn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ks(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ks(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ks(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ks(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Mn(t,this.array),i=Mn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Mn(t,this.array),i=Mn(i,this.array),r=Mn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Mn(t,this.array),i=Mn(i,this.array),r=Mn(r,this.array),s=Mn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Lu&&(e.usage=this.usage),e}}class Gh extends Qn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Hh extends Qn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class sn extends Qn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let j_=0;const kn=new Ot,xl=new jt,ts=new $,wn=new Gr,Vs=new Gr,Qt=new $;class zn extends Ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:j_++}),this.uuid=Ta(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Uh(e)?Hh:Gh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new rt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,t,i){return kn.makeTranslation(e,t,i),this.applyMatrix4(kn),this}scale(e,t,i){return kn.makeScale(e,t,i),this.applyMatrix4(kn),this}lookAt(e){return xl.lookAt(e),xl.updateMatrix(),this.applyMatrix4(xl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new sn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];wn.setFromBufferAttribute(s),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ls);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const i=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Vs.setFromBufferAttribute(o),this.morphTargetsRelative?(Qt.addVectors(wn.min,Vs.min),wn.expandByPoint(Qt),Qt.addVectors(wn.max,Vs.max),wn.expandByPoint(Qt)):(wn.expandByPoint(Vs.min),wn.expandByPoint(Vs.max))}wn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Qt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Qt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Qt.fromBufferAttribute(o,l),c&&(ts.fromBufferAttribute(e,l),Qt.add(ts)),r=Math.max(r,i.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let X=0;X<i.count;X++)o[X]=new $,c[X]=new $;const l=new $,u=new $,d=new $,h=new Et,g=new Et,x=new Et,S=new $,m=new $;function f(X,b,T){l.fromBufferAttribute(i,X),u.fromBufferAttribute(i,b),d.fromBufferAttribute(i,T),h.fromBufferAttribute(s,X),g.fromBufferAttribute(s,b),x.fromBufferAttribute(s,T),u.sub(l),d.sub(l),g.sub(h),x.sub(h);const G=1/(g.x*x.y-x.x*g.y);isFinite(G)&&(S.copy(u).multiplyScalar(x.y).addScaledVector(d,-g.y).multiplyScalar(G),m.copy(d).multiplyScalar(g.x).addScaledVector(u,-x.x).multiplyScalar(G),o[X].add(S),o[b].add(S),o[T].add(S),c[X].add(m),c[b].add(m),c[T].add(m))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let X=0,b=I.length;X<b;++X){const T=I[X],G=T.start,W=T.count;for(let ee=G,oe=G+W;ee<oe;ee+=3)f(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const R=new $,A=new $,U=new $,O=new $;function B(X){U.fromBufferAttribute(r,X),O.copy(U);const b=o[X];R.copy(b),R.sub(U.multiplyScalar(U.dot(b))).normalize(),A.crossVectors(O,b);const G=A.dot(c[X])<0?-1:1;a.setXYZW(X,R.x,R.y,R.z,G)}for(let X=0,b=I.length;X<b;++X){const T=I[X],G=T.start,W=T.count;for(let ee=G,oe=G+W;ee<oe;ee+=3)B(e.getX(ee+0)),B(e.getX(ee+1)),B(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Qn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,g=i.count;h<g;h++)i.setXYZ(h,0,0,0);const r=new $,s=new $,a=new $,o=new $,c=new $,l=new $,u=new $,d=new $;if(e)for(let h=0,g=e.count;h<g;h+=3){const x=e.getX(h+0),S=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,S),a.fromBufferAttribute(t,m),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,x),c.fromBufferAttribute(i,S),l.fromBufferAttribute(i,m),o.add(u),c.add(u),l.add(u),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(S,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,g=t.count;h<g;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Qt.fromBufferAttribute(e,t),Qt.normalize(),e.setXYZ(t,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,d=o.normalized,h=new l.constructor(c.length*u);let g=0,x=0;for(let S=0,m=c.length;S<m;S++){o.isInterleavedBufferAttribute?g=c[S]*o.data.stride+o.offset:g=c[S]*u;for(let f=0;f<u;f++)h[x++]=l[g++]}return new Qn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new zn,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,d=l.length;u<d;u++){const h=l[u],g=e(h,i);c.push(g)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const g=l[d];u.push(g.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],d=s[l];for(let h=0,g=d.length;h<g;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qu=new Ot,xr=new Fh,Za=new Ls,Yu=new $,Ka=new $,ja=new $,$a=new $,Sl=new $,Ja=new $,Zu=new $,Qa=new $;class Xt extends jt{constructor(e=new zn,t=new Ni){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ja.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],d=s[c];u!==0&&(Sl.fromBufferAttribute(d,e),a?Ja.addScaledVector(Sl,u):Ja.addScaledVector(Sl.sub(t),u))}t.add(Ja)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Za.copy(i.boundingSphere),Za.applyMatrix4(s),xr.copy(e.ray).recast(e.near),!(Za.containsPoint(xr.origin)===!1&&(xr.intersectSphere(Za,Yu)===null||xr.origin.distanceToSquared(Yu)>(e.far-e.near)**2))&&(qu.copy(s).invert(),xr.copy(e.ray).applyMatrix4(qu),!(i.boundingBox!==null&&xr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,xr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,S=h.length;x<S;x++){const m=h[x],f=a[m.materialIndex],I=Math.max(m.start,g.start),R=Math.min(o.count,Math.min(m.start+m.count,g.start+g.count));for(let A=I,U=R;A<U;A+=3){const O=o.getX(A),B=o.getX(A+1),X=o.getX(A+2);r=eo(this,f,e,i,l,u,d,O,B,X),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,g.start),S=Math.min(o.count,g.start+g.count);for(let m=x,f=S;m<f;m+=3){const I=o.getX(m),R=o.getX(m+1),A=o.getX(m+2);r=eo(this,a,e,i,l,u,d,I,R,A),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,S=h.length;x<S;x++){const m=h[x],f=a[m.materialIndex],I=Math.max(m.start,g.start),R=Math.min(c.count,Math.min(m.start+m.count,g.start+g.count));for(let A=I,U=R;A<U;A+=3){const O=A,B=A+1,X=A+2;r=eo(this,f,e,i,l,u,d,O,B,X),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,g.start),S=Math.min(c.count,g.start+g.count);for(let m=x,f=S;m<f;m+=3){const I=m,R=m+1,A=m+2;r=eo(this,a,e,i,l,u,d,I,R,A),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function $_(n,e,t,i,r,s,a,o){let c;if(e.side===Tn?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===lr,o),c===null)return null;Qa.copy(o),Qa.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Qa);return l<t.near||l>t.far?null:{distance:l,point:Qa.clone(),object:n}}function eo(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,Ka),n.getVertexPosition(c,ja),n.getVertexPosition(l,$a);const u=$_(n,e,t,i,Ka,ja,$a,Zu);if(u){const d=new $;Zn.getBarycoord(Zu,Ka,ja,$a,d),r&&(u.uv=Zn.getInterpolatedAttribute(r,o,c,l,d,new Et)),s&&(u.uv1=Zn.getInterpolatedAttribute(s,o,c,l,d,new Et)),a&&(u.normal=Zn.getInterpolatedAttribute(a,o,c,l,d,new $),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new $,materialIndex:0};Zn.getNormal(Ka,ja,$a,h.normal),u.face=h,u.barycoord=d}return u}class Cs extends zn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],d=[];let h=0,g=0;x("z","y","x",-1,-1,i,t,e,a,s,0),x("z","y","x",1,-1,i,t,-e,a,s,1),x("x","z","y",1,1,e,i,t,r,a,2),x("x","z","y",1,-1,e,i,-t,r,a,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new sn(l,3)),this.setAttribute("normal",new sn(u,3)),this.setAttribute("uv",new sn(d,2));function x(S,m,f,I,R,A,U,O,B,X,b){const T=A/B,G=U/X,W=A/2,ee=U/2,oe=O/2,re=B+1,ae=X+1;let de=0,ne=0;const Ee=new $;for(let Se=0;Se<ae;Se++){const ke=Se*G-ee;for(let nt=0;nt<re;nt++){const ct=nt*T-W;Ee[S]=ct*I,Ee[m]=ke*R,Ee[f]=oe,l.push(Ee.x,Ee.y,Ee.z),Ee[S]=0,Ee[m]=0,Ee[f]=O>0?1:-1,u.push(Ee.x,Ee.y,Ee.z),d.push(nt/B),d.push(1-Se/X),de+=1}}for(let Se=0;Se<X;Se++)for(let ke=0;ke<B;ke++){const nt=h+ke+re*Se,ct=h+ke+re*(Se+1),xt=h+(ke+1)+re*(Se+1),st=h+(ke+1)+re*Se;c.push(nt,ct,st),c.push(ct,xt,st),ne+=6}o.addGroup(g,ne,b),g+=ne,h+=de}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ss(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function _n(n){const e={};for(let t=0;t<n.length;t++){const i=Ss(n[t]);for(const r in i)e[r]=i[r]}return e}function J_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function zh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const Q_={clone:Ss,merge:_n};var ev=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cr extends Ps{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ev,this.fragmentShader=tv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ss(e.uniforms),this.uniformsGroups=J_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Vh extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xi=new $,Ku=new Et,ju=new Et;class Gn extends Vh{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ic*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(el*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ic*2*Math.atan(Math.tan(el*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z),Xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z)}getViewSize(e,t){return this.getViewBounds(e,Ku,ju),t.subVectors(ju,Ku)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(el*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ns=-90,is=1;class nv extends jt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Gn(ns,is,e,t);r.layers=this.layers,this.add(r);const s=new Gn(ns,is,e,t);s.layers=this.layers,this.add(s);const a=new Gn(ns,is,e,t);a.layers=this.layers,this.add(a);const o=new Gn(ns,is,e,t);o.layers=this.layers,this.add(o);const c=new Gn(ns,is,e,t);c.layers=this.layers,this.add(c);const l=new Gn(ns,is,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===li)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===bo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,h,g),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Wh extends vn{constructor(e=[],t=vs,i,r,s,a,o,c,l,u){super(e,t,i,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class iv extends kr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Wh(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Cs(5,5,5),s=new cr({name:"CubemapFromEquirect",uniforms:Ss(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tn,blending:Qi});s.uniforms.tEquirect.value=t;const a=new Xt(r,s),o=t.minFilter;return t.minFilter===Nr&&(t.minFilter=ai),new nv(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class $i extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rv={type:"move"};class yl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $i,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $i,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $i,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const S of e.hand.values()){const m=t.getJointPose(S,i),f=this._getHandJoint(l,S);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),g=.02,x=.005;l.inputState.pinching&&h>g+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=g-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(rv)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new $i;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class $c{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new mt(e),this.density=t}clone(){return new $c(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class sv extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pi,this.environmentIntensity=1,this.environmentRotation=new pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class av extends vn{constructor(e=null,t=1,i=1,r,s,a,o,c,l=Cn,u=Cn,d,h){super(null,a,o,c,l,u,r,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $u extends Qn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const rs=new Ot,Ju=new Ot,to=[],Qu=new Gr,ov=new Ot,Ws=new Xt,Xs=new Ls;class lv extends Xt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new $u(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,ov)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Gr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,rs),Qu.copy(e.boundingBox).applyMatrix4(rs),this.boundingBox.union(Qu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ls),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,rs),Xs.copy(e.boundingSphere).applyMatrix4(rs),this.boundingSphere.union(Xs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Ws.geometry=this.geometry,Ws.material=this.material,Ws.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xs.copy(this.boundingSphere),Xs.applyMatrix4(i),e.ray.intersectsSphere(Xs)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,rs),Ju.multiplyMatrices(i,rs),Ws.matrixWorld=Ju,Ws.raycast(e,to);for(let a=0,o=to.length;a<o;a++){const c=to[a];c.instanceId=s,c.object=this,t.push(c)}to.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new $u(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new av(new Float32Array(r*this.count),r,this.count,qc,oi));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<i.length;l++)a+=i[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;s[c]=o,s.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ml=new $,cv=new $,uv=new rt;class br{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ml.subVectors(i,t).cross(cv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ml),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||uv.getNormalMatrix(e),r=this.coplanarPoint(Ml).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Sr=new Ls,dv=new Et(.5,.5),no=new $;class Jc{constructor(e=new br,t=new br,i=new br,r=new br,s=new br,a=new br){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=li,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],d=s[5],h=s[6],g=s[7],x=s[8],S=s[9],m=s[10],f=s[11],I=s[12],R=s[13],A=s[14],U=s[15];if(r[0].setComponents(l-a,g-u,f-x,U-I).normalize(),r[1].setComponents(l+a,g+u,f+x,U+I).normalize(),r[2].setComponents(l+o,g+d,f+S,U+R).normalize(),r[3].setComponents(l-o,g-d,f-S,U-R).normalize(),i)r[4].setComponents(c,h,m,A).normalize(),r[5].setComponents(l-c,g-h,f-m,U-A).normalize();else if(r[4].setComponents(l-c,g-h,f-m,U-A).normalize(),t===li)r[5].setComponents(l+c,g+h,f+m,U+A).normalize();else if(t===bo)r[5].setComponents(c,h,m,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Sr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Sr)}intersectsSprite(e){Sr.center.set(0,0,0);const t=dv.distanceTo(e.center);return Sr.radius=.7071067811865476+t,Sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Sr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(no.x=r.normal.x>0?e.max.x:e.min.x,no.y=r.normal.y>0?e.max.y:e.min.y,no.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(no)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Xh extends Ps{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const wo=new $,Ro=new $,ed=new Ot,qs=new Fh,io=new Ls,Tl=new $,td=new $;class hv extends jt{constructor(e=new zn,t=new Xh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)wo.fromBufferAttribute(t,r-1),Ro.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=wo.distanceTo(Ro);e.setAttribute("lineDistance",new sn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),io.copy(i.boundingSphere),io.applyMatrix4(r),io.radius+=s,e.ray.intersectsSphere(io)===!1)return;ed.copy(r).invert(),qs.copy(e.ray).applyMatrix4(ed);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const g=Math.max(0,a.start),x=Math.min(u.count,a.start+a.count);for(let S=g,m=x-1;S<m;S+=l){const f=u.getX(S),I=u.getX(S+1),R=ro(this,e,qs,c,f,I,S);R&&t.push(R)}if(this.isLineLoop){const S=u.getX(x-1),m=u.getX(g),f=ro(this,e,qs,c,S,m,x-1);f&&t.push(f)}}else{const g=Math.max(0,a.start),x=Math.min(h.count,a.start+a.count);for(let S=g,m=x-1;S<m;S+=l){const f=ro(this,e,qs,c,S,S+1,S);f&&t.push(f)}if(this.isLineLoop){const S=ro(this,e,qs,c,x-1,g,x-1);S&&t.push(S)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ro(n,e,t,i,r,s,a){const o=n.geometry.attributes.position;if(wo.fromBufferAttribute(o,r),Ro.fromBufferAttribute(o,s),t.distanceSqToSegment(wo,Ro,Tl,td)>i)return;Tl.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Tl);if(!(l<e.near||l>e.far))return{distance:l,point:td.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}class qh extends vn{constructor(e,t,i=Br,r,s,a,o=Cn,c=Cn,l,u=Ea,d=1){if(u!==Ea&&u!==xa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,r,s,a,o,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new jc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Yh extends vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Uo extends zn{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],h=[],g=[];let x=0;const S=[],m=i/2;let f=0;I(),a===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(u),this.setAttribute("position",new sn(d,3)),this.setAttribute("normal",new sn(h,3)),this.setAttribute("uv",new sn(g,2));function I(){const A=new $,U=new $;let O=0;const B=(t-e)/i;for(let X=0;X<=s;X++){const b=[],T=X/s,G=T*(t-e)+e;for(let W=0;W<=r;W++){const ee=W/r,oe=ee*c+o,re=Math.sin(oe),ae=Math.cos(oe);U.x=G*re,U.y=-T*i+m,U.z=G*ae,d.push(U.x,U.y,U.z),A.set(re,B,ae).normalize(),h.push(A.x,A.y,A.z),g.push(ee,1-T),b.push(x++)}S.push(b)}for(let X=0;X<r;X++)for(let b=0;b<s;b++){const T=S[b][X],G=S[b+1][X],W=S[b+1][X+1],ee=S[b][X+1];(e>0||b!==0)&&(u.push(T,G,ee),O+=3),(t>0||b!==s-1)&&(u.push(G,W,ee),O+=3)}l.addGroup(f,O,0),f+=O}function R(A){const U=x,O=new Et,B=new $;let X=0;const b=A===!0?e:t,T=A===!0?1:-1;for(let W=1;W<=r;W++)d.push(0,m*T,0),h.push(0,T,0),g.push(.5,.5),x++;const G=x;for(let W=0;W<=r;W++){const oe=W/r*c+o,re=Math.cos(oe),ae=Math.sin(oe);B.x=b*ae,B.y=m*T,B.z=b*re,d.push(B.x,B.y,B.z),h.push(0,T,0),O.x=re*.5+.5,O.y=ae*.5*T+.5,g.push(O.x,O.y),x++}for(let W=0;W<r;W++){const ee=U+W,oe=G+W;A===!0?u.push(oe,oe+1,ee):u.push(oe+1,oe,ee),X+=3}l.addGroup(f,X,A===!0?1:2),f+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ys extends zn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,d=e/o,h=t/c,g=[],x=[],S=[],m=[];for(let f=0;f<u;f++){const I=f*h-a;for(let R=0;R<l;R++){const A=R*d-s;x.push(A,-I,0),S.push(0,0,1),m.push(R/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let I=0;I<o;I++){const R=I+l*f,A=I+l*(f+1),U=I+1+l*(f+1),O=I+1+l*f;g.push(R,A,O),g.push(A,U,O)}this.setIndex(g),this.setAttribute("position",new sn(x,3)),this.setAttribute("normal",new sn(S,3)),this.setAttribute("uv",new sn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ys(e.width,e.height,e.widthSegments,e.heightSegments)}}class Qc extends zn{constructor(e=.5,t=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],c=[],l=[],u=[];let d=e;const h=(t-e)/r,g=new $,x=new Et;for(let S=0;S<=r;S++){for(let m=0;m<=i;m++){const f=s+m/i*a;g.x=d*Math.cos(f),g.y=d*Math.sin(f),c.push(g.x,g.y,g.z),l.push(0,0,1),x.x=(g.x/t+1)/2,x.y=(g.y/t+1)/2,u.push(x.x,x.y)}d+=h}for(let S=0;S<r;S++){const m=S*(i+1);for(let f=0;f<i;f++){const I=f+m,R=I,A=I+i+1,U=I+i+2,O=I+1;o.push(R,A,O),o.push(A,U,O)}}this.setIndex(o),this.setAttribute("position",new sn(c,3)),this.setAttribute("normal",new sn(l,3)),this.setAttribute("uv",new sn(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class tr extends zn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const u=[],d=new $,h=new $,g=[],x=[],S=[],m=[];for(let f=0;f<=i;f++){const I=[],R=f/i;let A=0;f===0&&a===0?A=.5/t:f===i&&c===Math.PI&&(A=-.5/t);for(let U=0;U<=t;U++){const O=U/t;d.x=-e*Math.cos(r+O*s)*Math.sin(a+R*o),d.y=e*Math.cos(a+R*o),d.z=e*Math.sin(r+O*s)*Math.sin(a+R*o),x.push(d.x,d.y,d.z),h.copy(d).normalize(),S.push(h.x,h.y,h.z),m.push(O+A,1-R),I.push(l++)}u.push(I)}for(let f=0;f<i;f++)for(let I=0;I<t;I++){const R=u[f][I+1],A=u[f][I],U=u[f+1][I],O=u[f+1][I+1];(f!==0||a>0)&&g.push(R,A,O),(f!==i-1||c<Math.PI)&&g.push(A,U,O)}this.setIndex(g),this.setAttribute("position",new sn(x,3)),this.setAttribute("normal",new sn(S,3)),this.setAttribute("uv",new sn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Zh extends Ps{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ph,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fv extends Ps{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=y_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pv extends Ps{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Kh extends jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new mt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class mv extends Kh{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new mt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const bl=new Ot,nd=new $,id=new $;class gv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.mapType=fi,this.map=null,this.mapPass=null,this.matrix=new Ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jc,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;nd.setFromMatrixPosition(e.matrixWorld),t.position.copy(nd),id.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(id),t.updateMatrixWorld(),bl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(bl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class jh extends Vh{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class _v extends gv{constructor(){super(new jh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vv extends Kh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.shadow=new _v}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ev extends Gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function rd(n,e,t,i){const r=xv(i);switch(t){case Dh:return n*e;case qc:return n*e/r.components*r.byteLength;case Yc:return n*e/r.components*r.byteLength;case Lh:return n*e*2/r.components*r.byteLength;case Zc:return n*e*2/r.components*r.byteLength;case Nh:return n*e*3/r.components*r.byteLength;case jn:return n*e*4/r.components*r.byteLength;case Kc:return n*e*4/r.components*r.byteLength;case co:case uo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ho:case fo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case nc:case rc:return Math.max(n,16)*Math.max(e,8)/4;case tc:case ic:return Math.max(n,8)*Math.max(e,8)/2;case sc:case ac:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case oc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case lc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case cc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case uc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case dc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case hc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case fc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case pc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case mc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case gc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case _c:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case vc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ec:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case xc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Sc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case yc:case Mc:case Tc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case bc:case Ac:return Math.ceil(n/4)*Math.ceil(e/4)*8;case wc:case Rc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function xv(n){switch(n){case fi:case Ah:return{byteLength:1,components:1};case _a:case wh:case Ma:return{byteLength:2,components:1};case Wc:case Xc:return{byteLength:2,components:4};case Br:case Vc:case oi:return{byteLength:4,components:1};case Rh:case Ih:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zc);function $h(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Sv(n){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,d=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),o.onUploadCallback();let g;if(l instanceof Float32Array)g=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)g=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?g=n.HALF_FLOAT:g=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)g=n.SHORT;else if(l instanceof Uint32Array)g=n.UNSIGNED_INT;else if(l instanceof Int32Array)g=n.INT;else if(l instanceof Int8Array)g=n.BYTE;else if(l instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:g,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,c,l){const u=c.array,d=c.updateRanges;if(n.bindBuffer(l,o),d.length===0)n.bufferSubData(l,0,u);else{d.sort((g,x)=>g.start-x.start);let h=0;for(let g=1;g<d.length;g++){const x=d[h],S=d[g];S.start<=x.start+x.count+1?x.count=Math.max(x.count,S.start+S.count-x.start):(++h,d[h]=S)}d.length=h+1;for(let g=0,x=d.length;g<x;g++){const S=d[g];n.bufferSubData(l,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var yv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Tv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Av=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Iv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Nv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Uv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ov=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Fv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Bv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Wv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Xv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Yv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Zv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$v=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,e0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,t0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,n0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,i0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,r0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,s0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,a0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,o0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,l0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,c0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,u0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,d0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,h0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,f0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,p0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,m0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,g0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,v0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,E0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,x0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,S0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,y0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,M0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,T0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,b0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,A0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,w0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,R0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,I0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,D0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,N0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,L0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,P0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,C0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,U0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,O0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,B0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,G0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,H0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,V0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,W0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,X0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,q0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Y0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Z0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,K0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,j0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,J0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Q0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,rE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,aE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,oE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,dE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,EE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const SE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ME=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,RE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,IE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,DE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,NE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,LE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,CE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,UE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,OE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,GE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,zE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,VE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$E=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,QE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ex=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ot={alphahash_fragment:yv,alphahash_pars_fragment:Mv,alphamap_fragment:Tv,alphamap_pars_fragment:bv,alphatest_fragment:Av,alphatest_pars_fragment:wv,aomap_fragment:Rv,aomap_pars_fragment:Iv,batching_pars_vertex:Dv,batching_vertex:Nv,begin_vertex:Lv,beginnormal_vertex:Pv,bsdfs:Cv,iridescence_fragment:Uv,bumpmap_pars_fragment:Ov,clipping_planes_fragment:Fv,clipping_planes_pars_fragment:Bv,clipping_planes_pars_vertex:kv,clipping_planes_vertex:Gv,color_fragment:Hv,color_pars_fragment:zv,color_pars_vertex:Vv,color_vertex:Wv,common:Xv,cube_uv_reflection_fragment:qv,defaultnormal_vertex:Yv,displacementmap_pars_vertex:Zv,displacementmap_vertex:Kv,emissivemap_fragment:jv,emissivemap_pars_fragment:$v,colorspace_fragment:Jv,colorspace_pars_fragment:Qv,envmap_fragment:e0,envmap_common_pars_fragment:t0,envmap_pars_fragment:n0,envmap_pars_vertex:i0,envmap_physical_pars_fragment:p0,envmap_vertex:r0,fog_vertex:s0,fog_pars_vertex:a0,fog_fragment:o0,fog_pars_fragment:l0,gradientmap_pars_fragment:c0,lightmap_pars_fragment:u0,lights_lambert_fragment:d0,lights_lambert_pars_fragment:h0,lights_pars_begin:f0,lights_toon_fragment:m0,lights_toon_pars_fragment:g0,lights_phong_fragment:_0,lights_phong_pars_fragment:v0,lights_physical_fragment:E0,lights_physical_pars_fragment:x0,lights_fragment_begin:S0,lights_fragment_maps:y0,lights_fragment_end:M0,logdepthbuf_fragment:T0,logdepthbuf_pars_fragment:b0,logdepthbuf_pars_vertex:A0,logdepthbuf_vertex:w0,map_fragment:R0,map_pars_fragment:I0,map_particle_fragment:D0,map_particle_pars_fragment:N0,metalnessmap_fragment:L0,metalnessmap_pars_fragment:P0,morphinstance_vertex:C0,morphcolor_vertex:U0,morphnormal_vertex:O0,morphtarget_pars_vertex:F0,morphtarget_vertex:B0,normal_fragment_begin:k0,normal_fragment_maps:G0,normal_pars_fragment:H0,normal_pars_vertex:z0,normal_vertex:V0,normalmap_pars_fragment:W0,clearcoat_normal_fragment_begin:X0,clearcoat_normal_fragment_maps:q0,clearcoat_pars_fragment:Y0,iridescence_pars_fragment:Z0,opaque_fragment:K0,packing:j0,premultiplied_alpha_fragment:$0,project_vertex:J0,dithering_fragment:Q0,dithering_pars_fragment:eE,roughnessmap_fragment:tE,roughnessmap_pars_fragment:nE,shadowmap_pars_fragment:iE,shadowmap_pars_vertex:rE,shadowmap_vertex:sE,shadowmask_pars_fragment:aE,skinbase_vertex:oE,skinning_pars_vertex:lE,skinning_vertex:cE,skinnormal_vertex:uE,specularmap_fragment:dE,specularmap_pars_fragment:hE,tonemapping_fragment:fE,tonemapping_pars_fragment:pE,transmission_fragment:mE,transmission_pars_fragment:gE,uv_pars_fragment:_E,uv_pars_vertex:vE,uv_vertex:EE,worldpos_vertex:xE,background_vert:SE,background_frag:yE,backgroundCube_vert:ME,backgroundCube_frag:TE,cube_vert:bE,cube_frag:AE,depth_vert:wE,depth_frag:RE,distanceRGBA_vert:IE,distanceRGBA_frag:DE,equirect_vert:NE,equirect_frag:LE,linedashed_vert:PE,linedashed_frag:CE,meshbasic_vert:UE,meshbasic_frag:OE,meshlambert_vert:FE,meshlambert_frag:BE,meshmatcap_vert:kE,meshmatcap_frag:GE,meshnormal_vert:HE,meshnormal_frag:zE,meshphong_vert:VE,meshphong_frag:WE,meshphysical_vert:XE,meshphysical_frag:qE,meshtoon_vert:YE,meshtoon_frag:ZE,points_vert:KE,points_frag:jE,shadow_vert:$E,shadow_frag:JE,sprite_vert:QE,sprite_frag:ex},ye={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},ri={basic:{uniforms:_n([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:_n([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new mt(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:_n([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:_n([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:_n([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new mt(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:_n([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:_n([ye.points,ye.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:_n([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:_n([ye.common,ye.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:_n([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:_n([ye.sprite,ye.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:_n([ye.common,ye.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:_n([ye.lights,ye.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};ri.physical={uniforms:_n([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const so={r:0,b:0,g:0},yr=new pi,tx=new Ot;function nx(n,e,t,i,r,s,a){const o=new mt(0);let c=s===!0?0:1,l,u,d=null,h=0,g=null;function x(R){let A=R.isScene===!0?R.background:null;return A&&A.isTexture&&(A=(R.backgroundBlurriness>0?t:e).get(A)),A}function S(R){let A=!1;const U=x(R);U===null?f(o,c):U&&U.isColor&&(f(U,1),A=!0);const O=n.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,a):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||A)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(R,A){const U=x(A);U&&(U.isCubeTexture||U.mapping===Co)?(u===void 0&&(u=new Xt(new Cs(1,1,1),new cr({name:"BackgroundCubeMaterial",uniforms:Ss(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(O,B,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),yr.copy(A.backgroundRotation),yr.x*=-1,yr.y*=-1,yr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(yr.y*=-1,yr.z*=-1),u.material.uniforms.envMap.value=U,u.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(tx.makeRotationFromEuler(yr)),u.material.toneMapped=St.getTransfer(U.colorSpace)!==It,(d!==U||h!==U.version||g!==n.toneMapping)&&(u.material.needsUpdate=!0,d=U,h=U.version,g=n.toneMapping),u.layers.enableAll(),R.unshift(u,u.geometry,u.material,0,0,null)):U&&U.isTexture&&(l===void 0&&(l=new Xt(new ys(2,2),new cr({name:"BackgroundMaterial",uniforms:Ss(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:lr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=U,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=St.getTransfer(U.colorSpace)!==It,U.matrixAutoUpdate===!0&&U.updateMatrix(),l.material.uniforms.uvTransform.value.copy(U.matrix),(d!==U||h!==U.version||g!==n.toneMapping)&&(l.material.needsUpdate=!0,d=U,h=U.version,g=n.toneMapping),l.layers.enableAll(),R.unshift(l,l.geometry,l.material,0,0,null))}function f(R,A){R.getRGB(so,zh(n)),i.buffers.color.setClear(so.r,so.g,so.b,A,a)}function I(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(R,A=1){o.set(R),c=A,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(R){c=R,f(o,c)},render:S,addToRenderList:m,dispose:I}}function ix(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(T,G,W,ee,oe){let re=!1;const ae=d(ee,W,G);s!==ae&&(s=ae,l(s.object)),re=g(T,ee,W,oe),re&&x(T,ee,W,oe),oe!==null&&e.update(oe,n.ELEMENT_ARRAY_BUFFER),(re||a)&&(a=!1,A(T,G,W,ee),oe!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(oe).buffer))}function c(){return n.createVertexArray()}function l(T){return n.bindVertexArray(T)}function u(T){return n.deleteVertexArray(T)}function d(T,G,W){const ee=W.wireframe===!0;let oe=i[T.id];oe===void 0&&(oe={},i[T.id]=oe);let re=oe[G.id];re===void 0&&(re={},oe[G.id]=re);let ae=re[ee];return ae===void 0&&(ae=h(c()),re[ee]=ae),ae}function h(T){const G=[],W=[],ee=[];for(let oe=0;oe<t;oe++)G[oe]=0,W[oe]=0,ee[oe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:W,attributeDivisors:ee,object:T,attributes:{},index:null}}function g(T,G,W,ee){const oe=s.attributes,re=G.attributes;let ae=0;const de=W.getAttributes();for(const ne in de)if(de[ne].location>=0){const Se=oe[ne];let ke=re[ne];if(ke===void 0&&(ne==="instanceMatrix"&&T.instanceMatrix&&(ke=T.instanceMatrix),ne==="instanceColor"&&T.instanceColor&&(ke=T.instanceColor)),Se===void 0||Se.attribute!==ke||ke&&Se.data!==ke.data)return!0;ae++}return s.attributesNum!==ae||s.index!==ee}function x(T,G,W,ee){const oe={},re=G.attributes;let ae=0;const de=W.getAttributes();for(const ne in de)if(de[ne].location>=0){let Se=re[ne];Se===void 0&&(ne==="instanceMatrix"&&T.instanceMatrix&&(Se=T.instanceMatrix),ne==="instanceColor"&&T.instanceColor&&(Se=T.instanceColor));const ke={};ke.attribute=Se,Se&&Se.data&&(ke.data=Se.data),oe[ne]=ke,ae++}s.attributes=oe,s.attributesNum=ae,s.index=ee}function S(){const T=s.newAttributes;for(let G=0,W=T.length;G<W;G++)T[G]=0}function m(T){f(T,0)}function f(T,G){const W=s.newAttributes,ee=s.enabledAttributes,oe=s.attributeDivisors;W[T]=1,ee[T]===0&&(n.enableVertexAttribArray(T),ee[T]=1),oe[T]!==G&&(n.vertexAttribDivisor(T,G),oe[T]=G)}function I(){const T=s.newAttributes,G=s.enabledAttributes;for(let W=0,ee=G.length;W<ee;W++)G[W]!==T[W]&&(n.disableVertexAttribArray(W),G[W]=0)}function R(T,G,W,ee,oe,re,ae){ae===!0?n.vertexAttribIPointer(T,G,W,oe,re):n.vertexAttribPointer(T,G,W,ee,oe,re)}function A(T,G,W,ee){S();const oe=ee.attributes,re=W.getAttributes(),ae=G.defaultAttributeValues;for(const de in re){const ne=re[de];if(ne.location>=0){let Ee=oe[de];if(Ee===void 0&&(de==="instanceMatrix"&&T.instanceMatrix&&(Ee=T.instanceMatrix),de==="instanceColor"&&T.instanceColor&&(Ee=T.instanceColor)),Ee!==void 0){const Se=Ee.normalized,ke=Ee.itemSize,nt=e.get(Ee);if(nt===void 0)continue;const ct=nt.buffer,xt=nt.type,st=nt.bytesPerElement,le=xt===n.INT||xt===n.UNSIGNED_INT||Ee.gpuType===Vc;if(Ee.isInterleavedBufferAttribute){const ie=Ee.data,Ne=ie.stride,qe=Ee.offset;if(ie.isInstancedInterleavedBuffer){for(let we=0;we<ne.locationSize;we++)f(ne.location+we,ie.meshPerAttribute);T.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let we=0;we<ne.locationSize;we++)m(ne.location+we);n.bindBuffer(n.ARRAY_BUFFER,ct);for(let we=0;we<ne.locationSize;we++)R(ne.location+we,ke/ne.locationSize,xt,Se,Ne*st,(qe+ke/ne.locationSize*we)*st,le)}else{if(Ee.isInstancedBufferAttribute){for(let ie=0;ie<ne.locationSize;ie++)f(ne.location+ie,Ee.meshPerAttribute);T.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let ie=0;ie<ne.locationSize;ie++)m(ne.location+ie);n.bindBuffer(n.ARRAY_BUFFER,ct);for(let ie=0;ie<ne.locationSize;ie++)R(ne.location+ie,ke/ne.locationSize,xt,Se,ke*st,ke/ne.locationSize*ie*st,le)}}else if(ae!==void 0){const Se=ae[de];if(Se!==void 0)switch(Se.length){case 2:n.vertexAttrib2fv(ne.location,Se);break;case 3:n.vertexAttrib3fv(ne.location,Se);break;case 4:n.vertexAttrib4fv(ne.location,Se);break;default:n.vertexAttrib1fv(ne.location,Se)}}}}I()}function U(){X();for(const T in i){const G=i[T];for(const W in G){const ee=G[W];for(const oe in ee)u(ee[oe].object),delete ee[oe];delete G[W]}delete i[T]}}function O(T){if(i[T.id]===void 0)return;const G=i[T.id];for(const W in G){const ee=G[W];for(const oe in ee)u(ee[oe].object),delete ee[oe];delete G[W]}delete i[T.id]}function B(T){for(const G in i){const W=i[G];if(W[T.id]===void 0)continue;const ee=W[T.id];for(const oe in ee)u(ee[oe].object),delete ee[oe];delete W[T.id]}}function X(){b(),a=!0,s!==r&&(s=r,l(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:X,resetDefaultState:b,dispose:U,releaseStatesOfGeometry:O,releaseStatesOfProgram:B,initAttributes:S,enableAttribute:m,disableUnusedAttributes:I}}function rx(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function a(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function o(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x];t.update(g,i,1)}function c(l,u,d,h){if(d===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let x=0;x<l.length;x++)a(l[x],u[x],h[x]);else{g.multiDrawArraysInstancedWEBGL(i,l,0,u,0,h,0,d);let x=0;for(let S=0;S<d;S++)x+=u[S]*h[S];t.update(x,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function sx(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(B){return!(B!==jn&&i.convert(B)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(B){const X=B===Ma&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==fi&&i.convert(B)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==oi&&!X)}function c(B){if(B==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),g=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),I=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),R=n.getParameter(n.MAX_VARYING_VECTORS),A=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),U=x>0,O=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:g,maxVertexTextures:x,maxTextureSize:S,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:I,maxVaryings:R,maxFragmentUniforms:A,vertexTextures:U,maxSamples:O}}function ax(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new br,o=new rt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const g=d.length!==0||h||i!==0||r;return r=h,i=d.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,g){const x=d.clippingPlanes,S=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!r||x===null||x.length===0||s&&!m)s?u(null):l();else{const I=s?0:i,R=I*4;let A=f.clippingState||null;c.value=A,A=u(x,h,R,g);for(let U=0;U!==R;++U)A[U]=t[U];f.clippingState=A,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=I}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,g,x){const S=d!==null?d.length:0;let m=null;if(S!==0){if(m=c.value,x!==!0||m===null){const f=g+S*4,I=h.matrixWorldInverse;o.getNormalMatrix(I),(m===null||m.length<f)&&(m=new Float32Array(f));for(let R=0,A=g;R!==S;++R,A+=4)a.copy(d[R]).applyMatrix4(I,o),a.normal.toArray(m,A),m[A+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}function ox(n){let e=new WeakMap;function t(a,o){return o===$l?a.mapping=vs:o===Jl&&(a.mapping=Es),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===$l||o===Jl)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new iv(c.height);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const cs=4,sd=[.125,.215,.35,.446,.526,.582],Rr=20,Al=new jh,ad=new mt;let wl=null,Rl=0,Il=0,Dl=!1;const Ar=(1+Math.sqrt(5))/2,ss=1/Ar,od=[new $(-Ar,ss,0),new $(Ar,ss,0),new $(-ss,0,Ar),new $(ss,0,Ar),new $(0,Ar,-ss),new $(0,Ar,ss),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)],lx=new $;class ld{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=lx}=s;wl=this._renderer.getRenderTarget(),Rl=this._renderer.getActiveCubeFace(),Il=this._renderer.getActiveMipmapLevel(),Dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ud(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wl,Rl,Il),this._renderer.xr.enabled=Dl,e.scissorTest=!1,ao(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===vs||e.mapping===Es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wl=this._renderer.getRenderTarget(),Rl=this._renderer.getActiveCubeFace(),Il=this._renderer.getActiveMipmapLevel(),Dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ai,minFilter:ai,generateMipmaps:!1,type:Ma,format:jn,colorSpace:xs,depthBuffer:!1},r=cd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cd(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cx(s)),this._blurMaterial=ux(s,e,t)}return r}_compileMaterial(e){const t=new Xt(this._lodPlanes[0],e);this._renderer.compile(t,Al)}_sceneToCubeUV(e,t,i,r,s){const c=new Gn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,g=d.toneMapping;d.getClearColor(ad),d.toneMapping=er,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));const S=new Ni({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1}),m=new Xt(new Cs,S);let f=!1;const I=e.background;I?I.isColor&&(S.color.copy(I),e.background=null,f=!0):(S.color.copy(ad),f=!0);for(let R=0;R<6;R++){const A=R%3;A===0?(c.up.set(0,l[R],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[R],s.y,s.z)):A===1?(c.up.set(0,0,l[R]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[R],s.z)):(c.up.set(0,l[R],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[R]));const U=this._cubeSize;ao(r,A*U,R>2?U:0,U,U),d.setRenderTarget(r),f&&d.render(m,c),d.render(e,c)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=g,d.autoClear=h,e.background=I}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===vs||e.mapping===Es;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=dd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ud());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Xt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;ao(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,Al)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=od[(r-s-1)%od.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Xt(this._lodPlanes[r],l),h=l.uniforms,g=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Rr-1),S=s/x,m=isFinite(s)?1+Math.floor(u*S):Rr;m>Rr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Rr}`);const f=[];let I=0;for(let B=0;B<Rr;++B){const X=B/S,b=Math.exp(-X*X/2);f.push(b),B===0?I+=b:B<m&&(I+=2*b)}for(let B=0;B<f.length;B++)f[B]=f[B]/I;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:R}=this;h.dTheta.value=x,h.mipInt.value=R-i;const A=this._sizeLods[r],U=3*A*(r>R-cs?r-R+cs:0),O=4*(this._cubeSize-A);ao(t,U,O,3*A,2*A),c.setRenderTarget(t),c.render(d,Al)}}function cx(n){const e=[],t=[],i=[];let r=n;const s=n-cs+1+sd.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>n-cs?c=sd[a-n+cs-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],g=6,x=6,S=3,m=2,f=1,I=new Float32Array(S*x*g),R=new Float32Array(m*x*g),A=new Float32Array(f*x*g);for(let O=0;O<g;O++){const B=O%3*2/3-1,X=O>2?0:-1,b=[B,X,0,B+2/3,X,0,B+2/3,X+1,0,B,X,0,B+2/3,X+1,0,B,X+1,0];I.set(b,S*x*O),R.set(h,m*x*O);const T=[O,O,O,O,O,O];A.set(T,f*x*O)}const U=new zn;U.setAttribute("position",new Qn(I,S)),U.setAttribute("uv",new Qn(R,m)),U.setAttribute("faceIndex",new Qn(A,f)),e.push(U),r>cs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function cd(n,e,t){const i=new kr(n,e,t);return i.texture.mapping=Co,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ao(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function ux(n,e,t){const i=new Float32Array(Rr),r=new $(0,1,0);return new cr({name:"SphericalGaussianBlur",defines:{n:Rr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function ud(){return new cr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function dd(){return new cr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function eu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function dx(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===$l||c===Jl,u=c===vs||c===Es;if(l||u){let d=e.get(o);const h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new ld(n)),d=l?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const g=o.image;return l&&g&&g.height>0||u&&g&&r(g)?(t===null&&(t=new ld(n)),d=l?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function hx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Sa("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function fx(n,e,t,i){const r={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);h.removeEventListener("dispose",a),delete r[h.id];const g=s.get(h);g&&(e.remove(g),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function c(d){const h=d.attributes;for(const g in h)e.update(h[g],n.ARRAY_BUFFER)}function l(d){const h=[],g=d.index,x=d.attributes.position;let S=0;if(g!==null){const I=g.array;S=g.version;for(let R=0,A=I.length;R<A;R+=3){const U=I[R+0],O=I[R+1],B=I[R+2];h.push(U,O,O,B,B,U)}}else if(x!==void 0){const I=x.array;S=x.version;for(let R=0,A=I.length/3-1;R<A;R+=3){const U=R+0,O=R+1,B=R+2;h.push(U,O,O,B,B,U)}}else return;const m=new(Uh(h)?Hh:Gh)(h,1);m.version=S;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function u(d){const h=s.get(d);if(h){const g=d.index;g!==null&&h.version<g.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function px(n,e,t){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function c(h,g){n.drawElements(i,g,s,h*a),t.update(g,i,1)}function l(h,g,x){x!==0&&(n.drawElementsInstanced(i,g,s,h*a,x),t.update(g,i,x))}function u(h,g,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,s,h,0,x);let m=0;for(let f=0;f<x;f++)m+=g[f];t.update(m,i,1)}function d(h,g,x,S){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)l(h[f]/a,g[f],S[f]);else{m.multiDrawElementsInstancedWEBGL(i,g,0,s,h,0,S,0,x);let f=0;for(let I=0;I<x;I++)f+=g[I]*S[I];t.update(f,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function mx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function gx(n,e,t){const i=new WeakMap,r=new qt;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==d){let T=function(){X.dispose(),i.delete(o),o.removeEventListener("dispose",T)};var g=T;h!==void 0&&h.texture.dispose();const x=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],I=o.morphAttributes.normal||[],R=o.morphAttributes.color||[];let A=0;x===!0&&(A=1),S===!0&&(A=2),m===!0&&(A=3);let U=o.attributes.position.count*A,O=1;U>e.maxTextureSize&&(O=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const B=new Float32Array(U*O*4*d),X=new Oh(B,U,O,d);X.type=oi,X.needsUpdate=!0;const b=A*4;for(let G=0;G<d;G++){const W=f[G],ee=I[G],oe=R[G],re=U*O*4*G;for(let ae=0;ae<W.count;ae++){const de=ae*b;x===!0&&(r.fromBufferAttribute(W,ae),B[re+de+0]=r.x,B[re+de+1]=r.y,B[re+de+2]=r.z,B[re+de+3]=0),S===!0&&(r.fromBufferAttribute(ee,ae),B[re+de+4]=r.x,B[re+de+5]=r.y,B[re+de+6]=r.z,B[re+de+7]=0),m===!0&&(r.fromBufferAttribute(oe,ae),B[re+de+8]=r.x,B[re+de+9]=r.y,B[re+de+10]=r.z,B[re+de+11]=oe.itemSize===4?r.w:1)}}h={count:d,texture:X,size:new Et(U,O)},i.set(o,h),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let x=0;for(let m=0;m<l.length;m++)x+=l[m];const S=o.morphTargetsRelative?1:1-x;c.getUniforms().setValue(n,"morphTargetBaseInfluence",S),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function _x(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return d}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const Jh=new vn,hd=new qh(1,1),Qh=new Oh,ef=new G_,tf=new Wh,fd=[],pd=[],md=new Float32Array(16),gd=new Float32Array(9),_d=new Float32Array(4);function Us(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=fd[r];if(s===void 0&&(s=new Float32Array(r),fd[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function $t(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Jt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Oo(n,e){let t=pd[e];t===void 0&&(t=new Int32Array(e),pd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function vx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Ex(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2fv(this.addr,e),Jt(t,e)}}function xx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;n.uniform3fv(this.addr,e),Jt(t,e)}}function Sx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4fv(this.addr,e),Jt(t,e)}}function yx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if($t(t,i))return;_d.set(i),n.uniformMatrix2fv(this.addr,!1,_d),Jt(t,i)}}function Mx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if($t(t,i))return;gd.set(i),n.uniformMatrix3fv(this.addr,!1,gd),Jt(t,i)}}function Tx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if($t(t,i))return;md.set(i),n.uniformMatrix4fv(this.addr,!1,md),Jt(t,i)}}function bx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Ax(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2iv(this.addr,e),Jt(t,e)}}function wx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;n.uniform3iv(this.addr,e),Jt(t,e)}}function Rx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4iv(this.addr,e),Jt(t,e)}}function Ix(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Dx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2uiv(this.addr,e),Jt(t,e)}}function Nx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;n.uniform3uiv(this.addr,e),Jt(t,e)}}function Lx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4uiv(this.addr,e),Jt(t,e)}}function Px(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(hd.compareFunction=Ch,s=hd):s=Jh,t.setTexture2D(e||s,r)}function Cx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||ef,r)}function Ux(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||tf,r)}function Ox(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Qh,r)}function Fx(n){switch(n){case 5126:return vx;case 35664:return Ex;case 35665:return xx;case 35666:return Sx;case 35674:return yx;case 35675:return Mx;case 35676:return Tx;case 5124:case 35670:return bx;case 35667:case 35671:return Ax;case 35668:case 35672:return wx;case 35669:case 35673:return Rx;case 5125:return Ix;case 36294:return Dx;case 36295:return Nx;case 36296:return Lx;case 35678:case 36198:case 36298:case 36306:case 35682:return Px;case 35679:case 36299:case 36307:return Cx;case 35680:case 36300:case 36308:case 36293:return Ux;case 36289:case 36303:case 36311:case 36292:return Ox}}function Bx(n,e){n.uniform1fv(this.addr,e)}function kx(n,e){const t=Us(e,this.size,2);n.uniform2fv(this.addr,t)}function Gx(n,e){const t=Us(e,this.size,3);n.uniform3fv(this.addr,t)}function Hx(n,e){const t=Us(e,this.size,4);n.uniform4fv(this.addr,t)}function zx(n,e){const t=Us(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Vx(n,e){const t=Us(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Wx(n,e){const t=Us(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Xx(n,e){n.uniform1iv(this.addr,e)}function qx(n,e){n.uniform2iv(this.addr,e)}function Yx(n,e){n.uniform3iv(this.addr,e)}function Zx(n,e){n.uniform4iv(this.addr,e)}function Kx(n,e){n.uniform1uiv(this.addr,e)}function jx(n,e){n.uniform2uiv(this.addr,e)}function $x(n,e){n.uniform3uiv(this.addr,e)}function Jx(n,e){n.uniform4uiv(this.addr,e)}function Qx(n,e,t){const i=this.cache,r=e.length,s=Oo(t,r);$t(i,s)||(n.uniform1iv(this.addr,s),Jt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Jh,s[a])}function eS(n,e,t){const i=this.cache,r=e.length,s=Oo(t,r);$t(i,s)||(n.uniform1iv(this.addr,s),Jt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||ef,s[a])}function tS(n,e,t){const i=this.cache,r=e.length,s=Oo(t,r);$t(i,s)||(n.uniform1iv(this.addr,s),Jt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||tf,s[a])}function nS(n,e,t){const i=this.cache,r=e.length,s=Oo(t,r);$t(i,s)||(n.uniform1iv(this.addr,s),Jt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Qh,s[a])}function iS(n){switch(n){case 5126:return Bx;case 35664:return kx;case 35665:return Gx;case 35666:return Hx;case 35674:return zx;case 35675:return Vx;case 35676:return Wx;case 5124:case 35670:return Xx;case 35667:case 35671:return qx;case 35668:case 35672:return Yx;case 35669:case 35673:return Zx;case 5125:return Kx;case 36294:return jx;case 36295:return $x;case 36296:return Jx;case 35678:case 36198:case 36298:case 36306:case 35682:return Qx;case 35679:case 36299:case 36307:return eS;case 35680:case 36300:case 36308:case 36293:return tS;case 36289:case 36303:case 36311:case 36292:return nS}}class rS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Fx(t.type)}}class sS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=iS(t.type)}}class aS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Nl=/(\w+)(\])?(\[|\.)?/g;function vd(n,e){n.seq.push(e),n.map[e.id]=e}function oS(n,e,t){const i=n.name,r=i.length;for(Nl.lastIndex=0;;){const s=Nl.exec(i),a=Nl.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){vd(t,l===void 0?new rS(o,n,e):new sS(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new aS(o),vd(t,d)),t=d}}}class po{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);oS(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Ed(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const lS=37297;let cS=0;function uS(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const xd=new rt;function dS(n){St._getMatrix(xd,St.workingColorSpace,n);const e=`mat3( ${xd.elements.map(t=>t.toFixed(4))} )`;switch(St.getTransfer(n)){case To:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Sd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+uS(n.getShaderSource(e),o)}else return s}function hS(n,e){const t=dS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function fS(n,e){let t;switch(e){case m_:t="Linear";break;case g_:t="Reinhard";break;case __:t="Cineon";break;case Th:t="ACESFilmic";break;case E_:t="AgX";break;case x_:t="Neutral";break;case v_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const oo=new $;function pS(){St.getLuminanceCoefficients(oo);const n=oo.x.toFixed(4),e=oo.y.toFixed(4),t=oo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($s).join(`
`)}function gS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function _S(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function $s(n){return n!==""}function yd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Md(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dc(n){return n.replace(vS,xS)}const ES=new Map;function xS(n,e){let t=ot[e];if(t===void 0){const i=ES.get(e);if(i!==void 0)t=ot[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Dc(t)}const SS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Td(n){return n.replace(SS,yS)}function yS(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function bd(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function MS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===yh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Zg?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ai&&(e="SHADOWMAP_TYPE_VSM"),e}function TS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case vs:case Es:e="ENVMAP_TYPE_CUBE";break;case Co:e="ENVMAP_TYPE_CUBE_UV";break}return e}function bS(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Es&&(e="ENVMAP_MODE_REFRACTION"),e}function AS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Mh:e="ENVMAP_BLENDING_MULTIPLY";break;case f_:e="ENVMAP_BLENDING_MIX";break;case p_:e="ENVMAP_BLENDING_ADD";break}return e}function wS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function RS(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=MS(t),l=TS(t),u=bS(t),d=AS(t),h=wS(t),g=mS(t),x=gS(s),S=r.createProgram();let m,f,I=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter($s).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter($s).join(`
`),f.length>0&&(f+=`
`)):(m=[bd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($s).join(`
`),f=[bd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==er?"#define TONE_MAPPING":"",t.toneMapping!==er?ot.tonemapping_pars_fragment:"",t.toneMapping!==er?fS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,hS("linearToOutputTexel",t.outputColorSpace),pS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($s).join(`
`)),a=Dc(a),a=yd(a,t),a=Md(a,t),o=Dc(o),o=yd(o,t),o=Md(o,t),a=Td(a),o=Td(o),t.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Pu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const R=I+m+a,A=I+f+o,U=Ed(r,r.VERTEX_SHADER,R),O=Ed(r,r.FRAGMENT_SHADER,A);r.attachShader(S,U),r.attachShader(S,O),t.index0AttributeName!==void 0?r.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function B(G){if(n.debug.checkShaderErrors){const W=r.getProgramInfoLog(S)||"",ee=r.getShaderInfoLog(U)||"",oe=r.getShaderInfoLog(O)||"",re=W.trim(),ae=ee.trim(),de=oe.trim();let ne=!0,Ee=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(ne=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,S,U,O);else{const Se=Sd(r,U,"vertex"),ke=Sd(r,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+re+`
`+Se+`
`+ke)}else re!==""?console.warn("THREE.WebGLProgram: Program Info Log:",re):(ae===""||de==="")&&(Ee=!1);Ee&&(G.diagnostics={runnable:ne,programLog:re,vertexShader:{log:ae,prefix:m},fragmentShader:{log:de,prefix:f}})}r.deleteShader(U),r.deleteShader(O),X=new po(r,S),b=_S(r,S)}let X;this.getUniforms=function(){return X===void 0&&B(this),X};let b;this.getAttributes=function(){return b===void 0&&B(this),b};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(S,lS)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cS++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=U,this.fragmentShader=O,this}let IS=0;class DS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new NS(e),t.set(e,i)),i}}class NS{constructor(e){this.id=IS++,this.code=e,this.usedTimes=0}}function LS(n,e,t,i,r,s,a){const o=new Bh,c=new DS,l=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let g=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,T,G,W,ee){const oe=W.fog,re=ee.geometry,ae=b.isMeshStandardMaterial?W.environment:null,de=(b.isMeshStandardMaterial?t:e).get(b.envMap||ae),ne=de&&de.mapping===Co?de.image.height:null,Ee=x[b.type];b.precision!==null&&(g=r.getMaxPrecision(b.precision),g!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));const Se=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,ke=Se!==void 0?Se.length:0;let nt=0;re.morphAttributes.position!==void 0&&(nt=1),re.morphAttributes.normal!==void 0&&(nt=2),re.morphAttributes.color!==void 0&&(nt=3);let ct,xt,st,le;if(Ee){const ft=ri[Ee];ct=ft.vertexShader,xt=ft.fragmentShader}else ct=b.vertexShader,xt=b.fragmentShader,c.update(b),st=c.getVertexShaderID(b),le=c.getFragmentShaderID(b);const ie=n.getRenderTarget(),Ne=n.state.buffers.depth.getReversed(),qe=ee.isInstancedMesh===!0,we=ee.isBatchedMesh===!0,at=!!b.map,Ht=!!b.matcap,P=!!de,yt=!!b.aoMap,Qe=!!b.lightMap,We=!!b.bumpMap,Ue=!!b.normalMap,At=!!b.displacementMap,Oe=!!b.emissiveMap,je=!!b.metalnessMap,kt=!!b.roughnessMap,Pt=b.anisotropy>0,w=b.clearcoat>0,v=b.dispersion>0,j=b.iridescence>0,p=b.sheen>0,_=b.transmission>0,y=Pt&&!!b.anisotropyMap,D=w&&!!b.clearcoatMap,C=w&&!!b.clearcoatNormalMap,F=w&&!!b.clearcoatRoughnessMap,Y=j&&!!b.iridescenceMap,k=j&&!!b.iridescenceThicknessMap,Z=p&&!!b.sheenColorMap,he=p&&!!b.sheenRoughnessMap,fe=!!b.specularMap,se=!!b.specularColorMap,Me=!!b.specularIntensityMap,H=_&&!!b.transmissionMap,ue=_&&!!b.thicknessMap,ve=!!b.gradientMap,Re=!!b.alphaMap,pe=b.alphaTest>0,ce=!!b.alphaHash,Pe=!!b.extensions;let et=er;b.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(et=n.toneMapping);const Mt={shaderID:Ee,shaderType:b.type,shaderName:b.name,vertexShader:ct,fragmentShader:xt,defines:b.defines,customVertexShaderID:st,customFragmentShaderID:le,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:we,batchingColor:we&&ee._colorsTexture!==null,instancing:qe,instancingColor:qe&&ee.instanceColor!==null,instancingMorph:qe&&ee.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ie===null?n.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:xs,alphaToCoverage:!!b.alphaToCoverage,map:at,matcap:Ht,envMap:P,envMapMode:P&&de.mapping,envMapCubeUVHeight:ne,aoMap:yt,lightMap:Qe,bumpMap:We,normalMap:Ue,displacementMap:h&&At,emissiveMap:Oe,normalMapObjectSpace:Ue&&b.normalMapType===T_,normalMapTangentSpace:Ue&&b.normalMapType===Ph,metalnessMap:je,roughnessMap:kt,anisotropy:Pt,anisotropyMap:y,clearcoat:w,clearcoatMap:D,clearcoatNormalMap:C,clearcoatRoughnessMap:F,dispersion:v,iridescence:j,iridescenceMap:Y,iridescenceThicknessMap:k,sheen:p,sheenColorMap:Z,sheenRoughnessMap:he,specularMap:fe,specularColorMap:se,specularIntensityMap:Me,transmission:_,transmissionMap:H,thicknessMap:ue,gradientMap:ve,opaque:b.transparent===!1&&b.blending===ds&&b.alphaToCoverage===!1,alphaMap:Re,alphaTest:pe,alphaHash:ce,combine:b.combine,mapUv:at&&S(b.map.channel),aoMapUv:yt&&S(b.aoMap.channel),lightMapUv:Qe&&S(b.lightMap.channel),bumpMapUv:We&&S(b.bumpMap.channel),normalMapUv:Ue&&S(b.normalMap.channel),displacementMapUv:At&&S(b.displacementMap.channel),emissiveMapUv:Oe&&S(b.emissiveMap.channel),metalnessMapUv:je&&S(b.metalnessMap.channel),roughnessMapUv:kt&&S(b.roughnessMap.channel),anisotropyMapUv:y&&S(b.anisotropyMap.channel),clearcoatMapUv:D&&S(b.clearcoatMap.channel),clearcoatNormalMapUv:C&&S(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:F&&S(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&S(b.iridescenceMap.channel),iridescenceThicknessMapUv:k&&S(b.iridescenceThicknessMap.channel),sheenColorMapUv:Z&&S(b.sheenColorMap.channel),sheenRoughnessMapUv:he&&S(b.sheenRoughnessMap.channel),specularMapUv:fe&&S(b.specularMap.channel),specularColorMapUv:se&&S(b.specularColorMap.channel),specularIntensityMapUv:Me&&S(b.specularIntensityMap.channel),transmissionMapUv:H&&S(b.transmissionMap.channel),thicknessMapUv:ue&&S(b.thicknessMap.channel),alphaMapUv:Re&&S(b.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(Ue||Pt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!re.attributes.uv&&(at||Re),fog:!!oe,useFog:b.fog===!0,fogExp2:!!oe&&oe.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ne,skinning:ee.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:ke,morphTextureStride:nt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&G.length>0,shadowMapType:n.shadowMap.type,toneMapping:et,decodeVideoTexture:at&&b.map.isVideoTexture===!0&&St.getTransfer(b.map.colorSpace)===It,decodeVideoTextureEmissive:Oe&&b.emissiveMap.isVideoTexture===!0&&St.getTransfer(b.emissiveMap.colorSpace)===It,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Di,flipSided:b.side===Tn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Pe&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&b.extensions.multiDraw===!0||we)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Mt.vertexUv1s=l.has(1),Mt.vertexUv2s=l.has(2),Mt.vertexUv3s=l.has(3),l.clear(),Mt}function f(b){const T=[];if(b.shaderID?T.push(b.shaderID):(T.push(b.customVertexShaderID),T.push(b.customFragmentShaderID)),b.defines!==void 0)for(const G in b.defines)T.push(G),T.push(b.defines[G]);return b.isRawShaderMaterial===!1&&(I(T,b),R(T,b),T.push(n.outputColorSpace)),T.push(b.customProgramCacheKey),T.join()}function I(b,T){b.push(T.precision),b.push(T.outputColorSpace),b.push(T.envMapMode),b.push(T.envMapCubeUVHeight),b.push(T.mapUv),b.push(T.alphaMapUv),b.push(T.lightMapUv),b.push(T.aoMapUv),b.push(T.bumpMapUv),b.push(T.normalMapUv),b.push(T.displacementMapUv),b.push(T.emissiveMapUv),b.push(T.metalnessMapUv),b.push(T.roughnessMapUv),b.push(T.anisotropyMapUv),b.push(T.clearcoatMapUv),b.push(T.clearcoatNormalMapUv),b.push(T.clearcoatRoughnessMapUv),b.push(T.iridescenceMapUv),b.push(T.iridescenceThicknessMapUv),b.push(T.sheenColorMapUv),b.push(T.sheenRoughnessMapUv),b.push(T.specularMapUv),b.push(T.specularColorMapUv),b.push(T.specularIntensityMapUv),b.push(T.transmissionMapUv),b.push(T.thicknessMapUv),b.push(T.combine),b.push(T.fogExp2),b.push(T.sizeAttenuation),b.push(T.morphTargetsCount),b.push(T.morphAttributeCount),b.push(T.numDirLights),b.push(T.numPointLights),b.push(T.numSpotLights),b.push(T.numSpotLightMaps),b.push(T.numHemiLights),b.push(T.numRectAreaLights),b.push(T.numDirLightShadows),b.push(T.numPointLightShadows),b.push(T.numSpotLightShadows),b.push(T.numSpotLightShadowsWithMaps),b.push(T.numLightProbes),b.push(T.shadowMapType),b.push(T.toneMapping),b.push(T.numClippingPlanes),b.push(T.numClipIntersection),b.push(T.depthPacking)}function R(b,T){o.disableAll(),T.supportsVertexTextures&&o.enable(0),T.instancing&&o.enable(1),T.instancingColor&&o.enable(2),T.instancingMorph&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),T.dispersion&&o.enable(20),T.batchingColor&&o.enable(21),T.gradientMap&&o.enable(22),b.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),b.push(o.mask)}function A(b){const T=x[b.type];let G;if(T){const W=ri[T];G=Q_.clone(W.uniforms)}else G=b.uniforms;return G}function U(b,T){let G;for(let W=0,ee=u.length;W<ee;W++){const oe=u[W];if(oe.cacheKey===T){G=oe,++G.usedTimes;break}}return G===void 0&&(G=new RS(n,T,b,s),u.push(G)),G}function O(b){if(--b.usedTimes===0){const T=u.indexOf(b);u[T]=u[u.length-1],u.pop(),b.destroy()}}function B(b){c.remove(b)}function X(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:A,acquireProgram:U,releaseProgram:O,releaseShaderCache:B,programs:u,dispose:X}}function PS(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function CS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ad(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function wd(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d,h,g,x,S,m){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:g,groupOrder:x,renderOrder:d.renderOrder,z:S,group:m},n[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=g,f.groupOrder=x,f.renderOrder=d.renderOrder,f.z=S,f.group=m),e++,f}function o(d,h,g,x,S,m){const f=a(d,h,g,x,S,m);g.transmission>0?i.push(f):g.transparent===!0?r.push(f):t.push(f)}function c(d,h,g,x,S,m){const f=a(d,h,g,x,S,m);g.transmission>0?i.unshift(f):g.transparent===!0?r.unshift(f):t.unshift(f)}function l(d,h){t.length>1&&t.sort(d||CS),i.length>1&&i.sort(h||Ad),r.length>1&&r.sort(h||Ad)}function u(){for(let d=e,h=n.length;d<h;d++){const g=n[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function US(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new wd,n.set(i,[a])):r>=s.length?(a=new wd,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function OS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new $,color:new mt};break;case"SpotLight":t={position:new $,direction:new $,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":t={color:new mt,position:new $,halfWidth:new $,halfHeight:new $};break}return n[e.id]=t,t}}}function FS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let BS=0;function kS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function GS(n){const e=new OS,t=FS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new $);const r=new $,s=new Ot,a=new Ot;function o(l){let u=0,d=0,h=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let g=0,x=0,S=0,m=0,f=0,I=0,R=0,A=0,U=0,O=0,B=0;l.sort(kS);for(let b=0,T=l.length;b<T;b++){const G=l[b],W=G.color,ee=G.intensity,oe=G.distance,re=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)u+=W.r*ee,d+=W.g*ee,h+=W.b*ee;else if(G.isLightProbe){for(let ae=0;ae<9;ae++)i.probe[ae].addScaledVector(G.sh.coefficients[ae],ee);B++}else if(G.isDirectionalLight){const ae=e.get(G);if(ae.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const de=G.shadow,ne=t.get(G);ne.shadowIntensity=de.intensity,ne.shadowBias=de.bias,ne.shadowNormalBias=de.normalBias,ne.shadowRadius=de.radius,ne.shadowMapSize=de.mapSize,i.directionalShadow[g]=ne,i.directionalShadowMap[g]=re,i.directionalShadowMatrix[g]=G.shadow.matrix,I++}i.directional[g]=ae,g++}else if(G.isSpotLight){const ae=e.get(G);ae.position.setFromMatrixPosition(G.matrixWorld),ae.color.copy(W).multiplyScalar(ee),ae.distance=oe,ae.coneCos=Math.cos(G.angle),ae.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),ae.decay=G.decay,i.spot[S]=ae;const de=G.shadow;if(G.map&&(i.spotLightMap[U]=G.map,U++,de.updateMatrices(G),G.castShadow&&O++),i.spotLightMatrix[S]=de.matrix,G.castShadow){const ne=t.get(G);ne.shadowIntensity=de.intensity,ne.shadowBias=de.bias,ne.shadowNormalBias=de.normalBias,ne.shadowRadius=de.radius,ne.shadowMapSize=de.mapSize,i.spotShadow[S]=ne,i.spotShadowMap[S]=re,A++}S++}else if(G.isRectAreaLight){const ae=e.get(G);ae.color.copy(W).multiplyScalar(ee),ae.halfWidth.set(G.width*.5,0,0),ae.halfHeight.set(0,G.height*.5,0),i.rectArea[m]=ae,m++}else if(G.isPointLight){const ae=e.get(G);if(ae.color.copy(G.color).multiplyScalar(G.intensity),ae.distance=G.distance,ae.decay=G.decay,G.castShadow){const de=G.shadow,ne=t.get(G);ne.shadowIntensity=de.intensity,ne.shadowBias=de.bias,ne.shadowNormalBias=de.normalBias,ne.shadowRadius=de.radius,ne.shadowMapSize=de.mapSize,ne.shadowCameraNear=de.camera.near,ne.shadowCameraFar=de.camera.far,i.pointShadow[x]=ne,i.pointShadowMap[x]=re,i.pointShadowMatrix[x]=G.shadow.matrix,R++}i.point[x]=ae,x++}else if(G.isHemisphereLight){const ae=e.get(G);ae.skyColor.copy(G.color).multiplyScalar(ee),ae.groundColor.copy(G.groundColor).multiplyScalar(ee),i.hemi[f]=ae,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const X=i.hash;(X.directionalLength!==g||X.pointLength!==x||X.spotLength!==S||X.rectAreaLength!==m||X.hemiLength!==f||X.numDirectionalShadows!==I||X.numPointShadows!==R||X.numSpotShadows!==A||X.numSpotMaps!==U||X.numLightProbes!==B)&&(i.directional.length=g,i.spot.length=S,i.rectArea.length=m,i.point.length=x,i.hemi.length=f,i.directionalShadow.length=I,i.directionalShadowMap.length=I,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=I,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=A+U-O,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=O,i.numLightProbes=B,X.directionalLength=g,X.pointLength=x,X.spotLength=S,X.rectAreaLength=m,X.hemiLength=f,X.numDirectionalShadows=I,X.numPointShadows=R,X.numSpotShadows=A,X.numSpotMaps=U,X.numLightProbes=B,i.version=BS++)}function c(l,u){let d=0,h=0,g=0,x=0,S=0;const m=u.matrixWorldInverse;for(let f=0,I=l.length;f<I;f++){const R=l[f];if(R.isDirectionalLight){const A=i.directional[d];A.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(m),d++}else if(R.isSpotLight){const A=i.spot[g];A.position.setFromMatrixPosition(R.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(m),g++}else if(R.isRectAreaLight){const A=i.rectArea[x];A.position.setFromMatrixPosition(R.matrixWorld),A.position.applyMatrix4(m),a.identity(),s.copy(R.matrixWorld),s.premultiply(m),a.extractRotation(s),A.halfWidth.set(R.width*.5,0,0),A.halfHeight.set(0,R.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),x++}else if(R.isPointLight){const A=i.point[h];A.position.setFromMatrixPosition(R.matrixWorld),A.position.applyMatrix4(m),h++}else if(R.isHemisphereLight){const A=i.hemi[S];A.direction.setFromMatrixPosition(R.matrixWorld),A.direction.transformDirection(m),S++}}}return{setup:o,setupView:c,state:i}}function Rd(n){const e=new GS(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function HS(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Rd(n),e.set(r,[o])):s>=a.length?(o=new Rd(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const zS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function WS(n,e,t){let i=new Jc;const r=new Et,s=new Et,a=new qt,o=new fv({depthPacking:M_}),c=new pv,l={},u=t.maxTextureSize,d={[lr]:Tn,[Tn]:lr,[Di]:Di},h=new cr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:zS,fragmentShader:VS}),g=h.clone();g.defines.HORIZONTAL_PASS=1;const x=new zn;x.setAttribute("position",new Qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Xt(x,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yh;let f=this.type;this.render=function(O,B,X){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||O.length===0)return;const b=n.getRenderTarget(),T=n.getActiveCubeFace(),G=n.getActiveMipmapLevel(),W=n.state;W.setBlending(Qi),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const ee=f!==Ai&&this.type===Ai,oe=f===Ai&&this.type!==Ai;for(let re=0,ae=O.length;re<ae;re++){const de=O[re],ne=de.shadow;if(ne===void 0){console.warn("THREE.WebGLShadowMap:",de,"has no shadow.");continue}if(ne.autoUpdate===!1&&ne.needsUpdate===!1)continue;r.copy(ne.mapSize);const Ee=ne.getFrameExtents();if(r.multiply(Ee),s.copy(ne.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Ee.x),r.x=s.x*Ee.x,ne.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Ee.y),r.y=s.y*Ee.y,ne.mapSize.y=s.y)),ne.map===null||ee===!0||oe===!0){const ke=this.type!==Ai?{minFilter:Cn,magFilter:Cn}:{};ne.map!==null&&ne.map.dispose(),ne.map=new kr(r.x,r.y,ke),ne.map.texture.name=de.name+".shadowMap",ne.camera.updateProjectionMatrix()}n.setRenderTarget(ne.map),n.clear();const Se=ne.getViewportCount();for(let ke=0;ke<Se;ke++){const nt=ne.getViewport(ke);a.set(s.x*nt.x,s.y*nt.y,s.x*nt.z,s.y*nt.w),W.viewport(a),ne.updateMatrices(de,ke),i=ne.getFrustum(),A(B,X,ne.camera,de,this.type)}ne.isPointLightShadow!==!0&&this.type===Ai&&I(ne,X),ne.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(b,T,G)};function I(O,B){const X=e.update(S);h.defines.VSM_SAMPLES!==O.blurSamples&&(h.defines.VSM_SAMPLES=O.blurSamples,g.defines.VSM_SAMPLES=O.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new kr(r.x,r.y)),h.uniforms.shadow_pass.value=O.map.texture,h.uniforms.resolution.value=O.mapSize,h.uniforms.radius.value=O.radius,n.setRenderTarget(O.mapPass),n.clear(),n.renderBufferDirect(B,null,X,h,S,null),g.uniforms.shadow_pass.value=O.mapPass.texture,g.uniforms.resolution.value=O.mapSize,g.uniforms.radius.value=O.radius,n.setRenderTarget(O.map),n.clear(),n.renderBufferDirect(B,null,X,g,S,null)}function R(O,B,X,b){let T=null;const G=X.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(G!==void 0)T=G;else if(T=X.isPointLight===!0?c:o,n.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const W=T.uuid,ee=B.uuid;let oe=l[W];oe===void 0&&(oe={},l[W]=oe);let re=oe[ee];re===void 0&&(re=T.clone(),oe[ee]=re,B.addEventListener("dispose",U)),T=re}if(T.visible=B.visible,T.wireframe=B.wireframe,b===Ai?T.side=B.shadowSide!==null?B.shadowSide:B.side:T.side=B.shadowSide!==null?B.shadowSide:d[B.side],T.alphaMap=B.alphaMap,T.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,T.map=B.map,T.clipShadows=B.clipShadows,T.clippingPlanes=B.clippingPlanes,T.clipIntersection=B.clipIntersection,T.displacementMap=B.displacementMap,T.displacementScale=B.displacementScale,T.displacementBias=B.displacementBias,T.wireframeLinewidth=B.wireframeLinewidth,T.linewidth=B.linewidth,X.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const W=n.properties.get(T);W.light=X}return T}function A(O,B,X,b,T){if(O.visible===!1)return;if(O.layers.test(B.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&T===Ai)&&(!O.frustumCulled||i.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,O.matrixWorld);const ee=e.update(O),oe=O.material;if(Array.isArray(oe)){const re=ee.groups;for(let ae=0,de=re.length;ae<de;ae++){const ne=re[ae],Ee=oe[ne.materialIndex];if(Ee&&Ee.visible){const Se=R(O,Ee,b,T);O.onBeforeShadow(n,O,B,X,ee,Se,ne),n.renderBufferDirect(X,null,ee,Se,O,ne),O.onAfterShadow(n,O,B,X,ee,Se,ne)}}}else if(oe.visible){const re=R(O,oe,b,T);O.onBeforeShadow(n,O,B,X,ee,re,null),n.renderBufferDirect(X,null,ee,re,O,null),O.onAfterShadow(n,O,B,X,ee,re,null)}}const W=O.children;for(let ee=0,oe=W.length;ee<oe;ee++)A(W[ee],B,X,b,T)}function U(O){O.target.removeEventListener("dispose",U);for(const X in l){const b=l[X],T=O.target.uuid;T in b&&(b[T].dispose(),delete b[T])}}}const XS={[Wl]:Xl,[ql]:Kl,[Yl]:jl,[_s]:Zl,[Xl]:Wl,[Kl]:ql,[jl]:Yl,[Zl]:_s};function qS(n,e){function t(){let H=!1;const ue=new qt;let ve=null;const Re=new qt(0,0,0,0);return{setMask:function(pe){ve!==pe&&!H&&(n.colorMask(pe,pe,pe,pe),ve=pe)},setLocked:function(pe){H=pe},setClear:function(pe,ce,Pe,et,Mt){Mt===!0&&(pe*=et,ce*=et,Pe*=et),ue.set(pe,ce,Pe,et),Re.equals(ue)===!1&&(n.clearColor(pe,ce,Pe,et),Re.copy(ue))},reset:function(){H=!1,ve=null,Re.set(-1,0,0,0)}}}function i(){let H=!1,ue=!1,ve=null,Re=null,pe=null;return{setReversed:function(ce){if(ue!==ce){const Pe=e.get("EXT_clip_control");ce?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),ue=ce;const et=pe;pe=null,this.setClear(et)}},getReversed:function(){return ue},setTest:function(ce){ce?ie(n.DEPTH_TEST):Ne(n.DEPTH_TEST)},setMask:function(ce){ve!==ce&&!H&&(n.depthMask(ce),ve=ce)},setFunc:function(ce){if(ue&&(ce=XS[ce]),Re!==ce){switch(ce){case Wl:n.depthFunc(n.NEVER);break;case Xl:n.depthFunc(n.ALWAYS);break;case ql:n.depthFunc(n.LESS);break;case _s:n.depthFunc(n.LEQUAL);break;case Yl:n.depthFunc(n.EQUAL);break;case Zl:n.depthFunc(n.GEQUAL);break;case Kl:n.depthFunc(n.GREATER);break;case jl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Re=ce}},setLocked:function(ce){H=ce},setClear:function(ce){pe!==ce&&(ue&&(ce=1-ce),n.clearDepth(ce),pe=ce)},reset:function(){H=!1,ve=null,Re=null,pe=null,ue=!1}}}function r(){let H=!1,ue=null,ve=null,Re=null,pe=null,ce=null,Pe=null,et=null,Mt=null;return{setTest:function(ft){H||(ft?ie(n.STENCIL_TEST):Ne(n.STENCIL_TEST))},setMask:function(ft){ue!==ft&&!H&&(n.stencilMask(ft),ue=ft)},setFunc:function(ft,Vn,On){(ve!==ft||Re!==Vn||pe!==On)&&(n.stencilFunc(ft,Vn,On),ve=ft,Re=Vn,pe=On)},setOp:function(ft,Vn,On){(ce!==ft||Pe!==Vn||et!==On)&&(n.stencilOp(ft,Vn,On),ce=ft,Pe=Vn,et=On)},setLocked:function(ft){H=ft},setClear:function(ft){Mt!==ft&&(n.clearStencil(ft),Mt=ft)},reset:function(){H=!1,ue=null,ve=null,Re=null,pe=null,ce=null,Pe=null,et=null,Mt=null}}}const s=new t,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let u={},d={},h=new WeakMap,g=[],x=null,S=!1,m=null,f=null,I=null,R=null,A=null,U=null,O=null,B=new mt(0,0,0),X=0,b=!1,T=null,G=null,W=null,ee=null,oe=null;const re=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,de=0;const ne=n.getParameter(n.VERSION);ne.indexOf("WebGL")!==-1?(de=parseFloat(/^WebGL (\d)/.exec(ne)[1]),ae=de>=1):ne.indexOf("OpenGL ES")!==-1&&(de=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),ae=de>=2);let Ee=null,Se={};const ke=n.getParameter(n.SCISSOR_BOX),nt=n.getParameter(n.VIEWPORT),ct=new qt().fromArray(ke),xt=new qt().fromArray(nt);function st(H,ue,ve,Re){const pe=new Uint8Array(4),ce=n.createTexture();n.bindTexture(H,ce),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Pe=0;Pe<ve;Pe++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(ue,0,n.RGBA,1,1,Re,0,n.RGBA,n.UNSIGNED_BYTE,pe):n.texImage2D(ue+Pe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,pe);return ce}const le={};le[n.TEXTURE_2D]=st(n.TEXTURE_2D,n.TEXTURE_2D,1),le[n.TEXTURE_CUBE_MAP]=st(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[n.TEXTURE_2D_ARRAY]=st(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),le[n.TEXTURE_3D]=st(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(n.DEPTH_TEST),a.setFunc(_s),We(!1),Ue(wu),ie(n.CULL_FACE),yt(Qi);function ie(H){u[H]!==!0&&(n.enable(H),u[H]=!0)}function Ne(H){u[H]!==!1&&(n.disable(H),u[H]=!1)}function qe(H,ue){return d[H]!==ue?(n.bindFramebuffer(H,ue),d[H]=ue,H===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ue),H===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ue),!0):!1}function we(H,ue){let ve=g,Re=!1;if(H){ve=h.get(ue),ve===void 0&&(ve=[],h.set(ue,ve));const pe=H.textures;if(ve.length!==pe.length||ve[0]!==n.COLOR_ATTACHMENT0){for(let ce=0,Pe=pe.length;ce<Pe;ce++)ve[ce]=n.COLOR_ATTACHMENT0+ce;ve.length=pe.length,Re=!0}}else ve[0]!==n.BACK&&(ve[0]=n.BACK,Re=!0);Re&&n.drawBuffers(ve)}function at(H){return x!==H?(n.useProgram(H),x=H,!0):!1}const Ht={[wr]:n.FUNC_ADD,[jg]:n.FUNC_SUBTRACT,[$g]:n.FUNC_REVERSE_SUBTRACT};Ht[Jg]=n.MIN,Ht[Qg]=n.MAX;const P={[e_]:n.ZERO,[t_]:n.ONE,[n_]:n.SRC_COLOR,[zl]:n.SRC_ALPHA,[l_]:n.SRC_ALPHA_SATURATE,[a_]:n.DST_COLOR,[r_]:n.DST_ALPHA,[i_]:n.ONE_MINUS_SRC_COLOR,[Vl]:n.ONE_MINUS_SRC_ALPHA,[o_]:n.ONE_MINUS_DST_COLOR,[s_]:n.ONE_MINUS_DST_ALPHA,[c_]:n.CONSTANT_COLOR,[u_]:n.ONE_MINUS_CONSTANT_COLOR,[d_]:n.CONSTANT_ALPHA,[h_]:n.ONE_MINUS_CONSTANT_ALPHA};function yt(H,ue,ve,Re,pe,ce,Pe,et,Mt,ft){if(H===Qi){S===!0&&(Ne(n.BLEND),S=!1);return}if(S===!1&&(ie(n.BLEND),S=!0),H!==Kg){if(H!==m||ft!==b){if((f!==wr||A!==wr)&&(n.blendEquation(n.FUNC_ADD),f=wr,A=wr),ft)switch(H){case ds:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ru:n.blendFunc(n.ONE,n.ONE);break;case Iu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Du:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case ds:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ru:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Iu:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Du:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}I=null,R=null,U=null,O=null,B.set(0,0,0),X=0,m=H,b=ft}return}pe=pe||ue,ce=ce||ve,Pe=Pe||Re,(ue!==f||pe!==A)&&(n.blendEquationSeparate(Ht[ue],Ht[pe]),f=ue,A=pe),(ve!==I||Re!==R||ce!==U||Pe!==O)&&(n.blendFuncSeparate(P[ve],P[Re],P[ce],P[Pe]),I=ve,R=Re,U=ce,O=Pe),(et.equals(B)===!1||Mt!==X)&&(n.blendColor(et.r,et.g,et.b,Mt),B.copy(et),X=Mt),m=H,b=!1}function Qe(H,ue){H.side===Di?Ne(n.CULL_FACE):ie(n.CULL_FACE);let ve=H.side===Tn;ue&&(ve=!ve),We(ve),H.blending===ds&&H.transparent===!1?yt(Qi):yt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),a.setFunc(H.depthFunc),a.setTest(H.depthTest),a.setMask(H.depthWrite),s.setMask(H.colorWrite);const Re=H.stencilWrite;o.setTest(Re),Re&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Oe(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ie(n.SAMPLE_ALPHA_TO_COVERAGE):Ne(n.SAMPLE_ALPHA_TO_COVERAGE)}function We(H){T!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),T=H)}function Ue(H){H!==qg?(ie(n.CULL_FACE),H!==G&&(H===wu?n.cullFace(n.BACK):H===Yg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ne(n.CULL_FACE),G=H}function At(H){H!==W&&(ae&&n.lineWidth(H),W=H)}function Oe(H,ue,ve){H?(ie(n.POLYGON_OFFSET_FILL),(ee!==ue||oe!==ve)&&(n.polygonOffset(ue,ve),ee=ue,oe=ve)):Ne(n.POLYGON_OFFSET_FILL)}function je(H){H?ie(n.SCISSOR_TEST):Ne(n.SCISSOR_TEST)}function kt(H){H===void 0&&(H=n.TEXTURE0+re-1),Ee!==H&&(n.activeTexture(H),Ee=H)}function Pt(H,ue,ve){ve===void 0&&(Ee===null?ve=n.TEXTURE0+re-1:ve=Ee);let Re=Se[ve];Re===void 0&&(Re={type:void 0,texture:void 0},Se[ve]=Re),(Re.type!==H||Re.texture!==ue)&&(Ee!==ve&&(n.activeTexture(ve),Ee=ve),n.bindTexture(H,ue||le[H]),Re.type=H,Re.texture=ue)}function w(){const H=Se[Ee];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function j(){try{n.compressedTexImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function p(){try{n.texSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function _(){try{n.texSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function y(){try{n.compressedTexSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function D(){try{n.compressedTexSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function C(){try{n.texStorage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function F(){try{n.texStorage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Y(){try{n.texImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function k(){try{n.texImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Z(H){ct.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),ct.copy(H))}function he(H){xt.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),xt.copy(H))}function fe(H,ue){let ve=l.get(ue);ve===void 0&&(ve=new WeakMap,l.set(ue,ve));let Re=ve.get(H);Re===void 0&&(Re=n.getUniformBlockIndex(ue,H.name),ve.set(H,Re))}function se(H,ue){const Re=l.get(ue).get(H);c.get(ue)!==Re&&(n.uniformBlockBinding(ue,Re,H.__bindingPointIndex),c.set(ue,Re))}function Me(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},Ee=null,Se={},d={},h=new WeakMap,g=[],x=null,S=!1,m=null,f=null,I=null,R=null,A=null,U=null,O=null,B=new mt(0,0,0),X=0,b=!1,T=null,G=null,W=null,ee=null,oe=null,ct.set(0,0,n.canvas.width,n.canvas.height),xt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ie,disable:Ne,bindFramebuffer:qe,drawBuffers:we,useProgram:at,setBlending:yt,setMaterial:Qe,setFlipSided:We,setCullFace:Ue,setLineWidth:At,setPolygonOffset:Oe,setScissorTest:je,activeTexture:kt,bindTexture:Pt,unbindTexture:w,compressedTexImage2D:v,compressedTexImage3D:j,texImage2D:Y,texImage3D:k,updateUBOMapping:fe,uniformBlockBinding:se,texStorage2D:C,texStorage3D:F,texSubImage2D:p,texSubImage3D:_,compressedTexSubImage2D:y,compressedTexSubImage3D:D,scissor:Z,viewport:he,reset:Me}}function YS(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Et,u=new WeakMap;let d;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(w,v){return g?new OffscreenCanvas(w,v):Ao("canvas")}function S(w,v,j){let p=1;const _=Pt(w);if((_.width>j||_.height>j)&&(p=j/Math.max(_.width,_.height)),p<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const y=Math.floor(p*_.width),D=Math.floor(p*_.height);d===void 0&&(d=x(y,D));const C=v?x(y,D):d;return C.width=y,C.height=D,C.getContext("2d").drawImage(w,0,0,y,D),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_.width+"x"+_.height+") to ("+y+"x"+D+")."),C}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_.width+"x"+_.height+")."),w;return w}function m(w){return w.generateMipmaps}function f(w){n.generateMipmap(w)}function I(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function R(w,v,j,p,_=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let y=v;if(v===n.RED&&(j===n.FLOAT&&(y=n.R32F),j===n.HALF_FLOAT&&(y=n.R16F),j===n.UNSIGNED_BYTE&&(y=n.R8)),v===n.RED_INTEGER&&(j===n.UNSIGNED_BYTE&&(y=n.R8UI),j===n.UNSIGNED_SHORT&&(y=n.R16UI),j===n.UNSIGNED_INT&&(y=n.R32UI),j===n.BYTE&&(y=n.R8I),j===n.SHORT&&(y=n.R16I),j===n.INT&&(y=n.R32I)),v===n.RG&&(j===n.FLOAT&&(y=n.RG32F),j===n.HALF_FLOAT&&(y=n.RG16F),j===n.UNSIGNED_BYTE&&(y=n.RG8)),v===n.RG_INTEGER&&(j===n.UNSIGNED_BYTE&&(y=n.RG8UI),j===n.UNSIGNED_SHORT&&(y=n.RG16UI),j===n.UNSIGNED_INT&&(y=n.RG32UI),j===n.BYTE&&(y=n.RG8I),j===n.SHORT&&(y=n.RG16I),j===n.INT&&(y=n.RG32I)),v===n.RGB_INTEGER&&(j===n.UNSIGNED_BYTE&&(y=n.RGB8UI),j===n.UNSIGNED_SHORT&&(y=n.RGB16UI),j===n.UNSIGNED_INT&&(y=n.RGB32UI),j===n.BYTE&&(y=n.RGB8I),j===n.SHORT&&(y=n.RGB16I),j===n.INT&&(y=n.RGB32I)),v===n.RGBA_INTEGER&&(j===n.UNSIGNED_BYTE&&(y=n.RGBA8UI),j===n.UNSIGNED_SHORT&&(y=n.RGBA16UI),j===n.UNSIGNED_INT&&(y=n.RGBA32UI),j===n.BYTE&&(y=n.RGBA8I),j===n.SHORT&&(y=n.RGBA16I),j===n.INT&&(y=n.RGBA32I)),v===n.RGB&&(j===n.UNSIGNED_INT_5_9_9_9_REV&&(y=n.RGB9_E5),j===n.UNSIGNED_INT_10F_11F_11F_REV&&(y=n.R11F_G11F_B10F)),v===n.RGBA){const D=_?To:St.getTransfer(p);j===n.FLOAT&&(y=n.RGBA32F),j===n.HALF_FLOAT&&(y=n.RGBA16F),j===n.UNSIGNED_BYTE&&(y=D===It?n.SRGB8_ALPHA8:n.RGBA8),j===n.UNSIGNED_SHORT_4_4_4_4&&(y=n.RGBA4),j===n.UNSIGNED_SHORT_5_5_5_1&&(y=n.RGB5_A1)}return(y===n.R16F||y===n.R32F||y===n.RG16F||y===n.RG32F||y===n.RGBA16F||y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),y}function A(w,v){let j;return w?v===null||v===Br||v===va?j=n.DEPTH24_STENCIL8:v===oi?j=n.DEPTH32F_STENCIL8:v===_a&&(j=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Br||v===va?j=n.DEPTH_COMPONENT24:v===oi?j=n.DEPTH_COMPONENT32F:v===_a&&(j=n.DEPTH_COMPONENT16),j}function U(w,v){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Cn&&w.minFilter!==ai?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function O(w){const v=w.target;v.removeEventListener("dispose",O),X(v),v.isVideoTexture&&u.delete(v)}function B(w){const v=w.target;v.removeEventListener("dispose",B),T(v)}function X(w){const v=i.get(w);if(v.__webglInit===void 0)return;const j=w.source,p=h.get(j);if(p){const _=p[v.__cacheKey];_.usedTimes--,_.usedTimes===0&&b(w),Object.keys(p).length===0&&h.delete(j)}i.remove(w)}function b(w){const v=i.get(w);n.deleteTexture(v.__webglTexture);const j=w.source,p=h.get(j);delete p[v.__cacheKey],a.memory.textures--}function T(w){const v=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let p=0;p<6;p++){if(Array.isArray(v.__webglFramebuffer[p]))for(let _=0;_<v.__webglFramebuffer[p].length;_++)n.deleteFramebuffer(v.__webglFramebuffer[p][_]);else n.deleteFramebuffer(v.__webglFramebuffer[p]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[p])}else{if(Array.isArray(v.__webglFramebuffer))for(let p=0;p<v.__webglFramebuffer.length;p++)n.deleteFramebuffer(v.__webglFramebuffer[p]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let p=0;p<v.__webglColorRenderbuffer.length;p++)v.__webglColorRenderbuffer[p]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[p]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const j=w.textures;for(let p=0,_=j.length;p<_;p++){const y=i.get(j[p]);y.__webglTexture&&(n.deleteTexture(y.__webglTexture),a.memory.textures--),i.remove(j[p])}i.remove(w)}let G=0;function W(){G=0}function ee(){const w=G;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),G+=1,w}function oe(w){const v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function re(w,v){const j=i.get(w);if(w.isVideoTexture&&je(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&j.__version!==w.version){const p=w.image;if(p===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(p.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(j,w,v);return}}else w.isExternalTexture&&(j.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,j.__webglTexture,n.TEXTURE0+v)}function ae(w,v){const j=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&j.__version!==w.version){le(j,w,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,j.__webglTexture,n.TEXTURE0+v)}function de(w,v){const j=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&j.__version!==w.version){le(j,w,v);return}t.bindTexture(n.TEXTURE_3D,j.__webglTexture,n.TEXTURE0+v)}function ne(w,v){const j=i.get(w);if(w.version>0&&j.__version!==w.version){ie(j,w,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture,n.TEXTURE0+v)}const Ee={[Ql]:n.REPEAT,[Dr]:n.CLAMP_TO_EDGE,[ec]:n.MIRRORED_REPEAT},Se={[Cn]:n.NEAREST,[S_]:n.NEAREST_MIPMAP_NEAREST,[Ba]:n.NEAREST_MIPMAP_LINEAR,[ai]:n.LINEAR,[Qo]:n.LINEAR_MIPMAP_NEAREST,[Nr]:n.LINEAR_MIPMAP_LINEAR},ke={[b_]:n.NEVER,[N_]:n.ALWAYS,[A_]:n.LESS,[Ch]:n.LEQUAL,[w_]:n.EQUAL,[D_]:n.GEQUAL,[R_]:n.GREATER,[I_]:n.NOTEQUAL};function nt(w,v){if(v.type===oi&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===ai||v.magFilter===Qo||v.magFilter===Ba||v.magFilter===Nr||v.minFilter===ai||v.minFilter===Qo||v.minFilter===Ba||v.minFilter===Nr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,Ee[v.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,Ee[v.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,Ee[v.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,Se[v.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,Se[v.minFilter]),v.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,ke[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Cn||v.minFilter!==Ba&&v.minFilter!==Nr||v.type===oi&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function ct(w,v){let j=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",O));const p=v.source;let _=h.get(p);_===void 0&&(_={},h.set(p,_));const y=oe(v);if(y!==w.__cacheKey){_[y]===void 0&&(_[y]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,j=!0),_[y].usedTimes++;const D=_[w.__cacheKey];D!==void 0&&(_[w.__cacheKey].usedTimes--,D.usedTimes===0&&b(v)),w.__cacheKey=y,w.__webglTexture=_[y].texture}return j}function xt(w,v,j){return Math.floor(Math.floor(w/j)/v)}function st(w,v,j,p){const y=w.updateRanges;if(y.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,j,p,v.data);else{y.sort((k,Z)=>k.start-Z.start);let D=0;for(let k=1;k<y.length;k++){const Z=y[D],he=y[k],fe=Z.start+Z.count,se=xt(he.start,v.width,4),Me=xt(Z.start,v.width,4);he.start<=fe+1&&se===Me&&xt(he.start+he.count-1,v.width,4)===se?Z.count=Math.max(Z.count,he.start+he.count-Z.start):(++D,y[D]=he)}y.length=D+1;const C=n.getParameter(n.UNPACK_ROW_LENGTH),F=n.getParameter(n.UNPACK_SKIP_PIXELS),Y=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let k=0,Z=y.length;k<Z;k++){const he=y[k],fe=Math.floor(he.start/4),se=Math.ceil(he.count/4),Me=fe%v.width,H=Math.floor(fe/v.width),ue=se,ve=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Me),n.pixelStorei(n.UNPACK_SKIP_ROWS,H),t.texSubImage2D(n.TEXTURE_2D,0,Me,H,ue,ve,j,p,v.data)}w.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,C),n.pixelStorei(n.UNPACK_SKIP_PIXELS,F),n.pixelStorei(n.UNPACK_SKIP_ROWS,Y)}}function le(w,v,j){let p=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(p=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(p=n.TEXTURE_3D);const _=ct(w,v),y=v.source;t.bindTexture(p,w.__webglTexture,n.TEXTURE0+j);const D=i.get(y);if(y.version!==D.__version||_===!0){t.activeTexture(n.TEXTURE0+j);const C=St.getPrimaries(St.workingColorSpace),F=v.colorSpace===Ki?null:St.getPrimaries(v.colorSpace),Y=v.colorSpace===Ki||C===F?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y);let k=S(v.image,!1,r.maxTextureSize);k=kt(v,k);const Z=s.convert(v.format,v.colorSpace),he=s.convert(v.type);let fe=R(v.internalFormat,Z,he,v.colorSpace,v.isVideoTexture);nt(p,v);let se;const Me=v.mipmaps,H=v.isVideoTexture!==!0,ue=D.__version===void 0||_===!0,ve=y.dataReady,Re=U(v,k);if(v.isDepthTexture)fe=A(v.format===xa,v.type),ue&&(H?t.texStorage2D(n.TEXTURE_2D,1,fe,k.width,k.height):t.texImage2D(n.TEXTURE_2D,0,fe,k.width,k.height,0,Z,he,null));else if(v.isDataTexture)if(Me.length>0){H&&ue&&t.texStorage2D(n.TEXTURE_2D,Re,fe,Me[0].width,Me[0].height);for(let pe=0,ce=Me.length;pe<ce;pe++)se=Me[pe],H?ve&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,se.width,se.height,Z,he,se.data):t.texImage2D(n.TEXTURE_2D,pe,fe,se.width,se.height,0,Z,he,se.data);v.generateMipmaps=!1}else H?(ue&&t.texStorage2D(n.TEXTURE_2D,Re,fe,k.width,k.height),ve&&st(v,k,Z,he)):t.texImage2D(n.TEXTURE_2D,0,fe,k.width,k.height,0,Z,he,k.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){H&&ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,fe,Me[0].width,Me[0].height,k.depth);for(let pe=0,ce=Me.length;pe<ce;pe++)if(se=Me[pe],v.format!==jn)if(Z!==null)if(H){if(ve)if(v.layerUpdates.size>0){const Pe=rd(se.width,se.height,v.format,v.type);for(const et of v.layerUpdates){const Mt=se.data.subarray(et*Pe/se.data.BYTES_PER_ELEMENT,(et+1)*Pe/se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,et,se.width,se.height,1,Z,Mt)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,0,se.width,se.height,k.depth,Z,se.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,pe,fe,se.width,se.height,k.depth,0,se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?ve&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,0,se.width,se.height,k.depth,Z,he,se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,pe,fe,se.width,se.height,k.depth,0,Z,he,se.data)}else{H&&ue&&t.texStorage2D(n.TEXTURE_2D,Re,fe,Me[0].width,Me[0].height);for(let pe=0,ce=Me.length;pe<ce;pe++)se=Me[pe],v.format!==jn?Z!==null?H?ve&&t.compressedTexSubImage2D(n.TEXTURE_2D,pe,0,0,se.width,se.height,Z,se.data):t.compressedTexImage2D(n.TEXTURE_2D,pe,fe,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?ve&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,se.width,se.height,Z,he,se.data):t.texImage2D(n.TEXTURE_2D,pe,fe,se.width,se.height,0,Z,he,se.data)}else if(v.isDataArrayTexture)if(H){if(ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,fe,k.width,k.height,k.depth),ve)if(v.layerUpdates.size>0){const pe=rd(k.width,k.height,v.format,v.type);for(const ce of v.layerUpdates){const Pe=k.data.subarray(ce*pe/k.data.BYTES_PER_ELEMENT,(ce+1)*pe/k.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ce,k.width,k.height,1,Z,he,Pe)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,k.width,k.height,k.depth,Z,he,k.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,fe,k.width,k.height,k.depth,0,Z,he,k.data);else if(v.isData3DTexture)H?(ue&&t.texStorage3D(n.TEXTURE_3D,Re,fe,k.width,k.height,k.depth),ve&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,k.width,k.height,k.depth,Z,he,k.data)):t.texImage3D(n.TEXTURE_3D,0,fe,k.width,k.height,k.depth,0,Z,he,k.data);else if(v.isFramebufferTexture){if(ue)if(H)t.texStorage2D(n.TEXTURE_2D,Re,fe,k.width,k.height);else{let pe=k.width,ce=k.height;for(let Pe=0;Pe<Re;Pe++)t.texImage2D(n.TEXTURE_2D,Pe,fe,pe,ce,0,Z,he,null),pe>>=1,ce>>=1}}else if(Me.length>0){if(H&&ue){const pe=Pt(Me[0]);t.texStorage2D(n.TEXTURE_2D,Re,fe,pe.width,pe.height)}for(let pe=0,ce=Me.length;pe<ce;pe++)se=Me[pe],H?ve&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,Z,he,se):t.texImage2D(n.TEXTURE_2D,pe,fe,Z,he,se);v.generateMipmaps=!1}else if(H){if(ue){const pe=Pt(k);t.texStorage2D(n.TEXTURE_2D,Re,fe,pe.width,pe.height)}ve&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Z,he,k)}else t.texImage2D(n.TEXTURE_2D,0,fe,Z,he,k);m(v)&&f(p),D.__version=y.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function ie(w,v,j){if(v.image.length!==6)return;const p=ct(w,v),_=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+j);const y=i.get(_);if(_.version!==y.__version||p===!0){t.activeTexture(n.TEXTURE0+j);const D=St.getPrimaries(St.workingColorSpace),C=v.colorSpace===Ki?null:St.getPrimaries(v.colorSpace),F=v.colorSpace===Ki||D===C?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,F);const Y=v.isCompressedTexture||v.image[0].isCompressedTexture,k=v.image[0]&&v.image[0].isDataTexture,Z=[];for(let ce=0;ce<6;ce++)!Y&&!k?Z[ce]=S(v.image[ce],!0,r.maxCubemapSize):Z[ce]=k?v.image[ce].image:v.image[ce],Z[ce]=kt(v,Z[ce]);const he=Z[0],fe=s.convert(v.format,v.colorSpace),se=s.convert(v.type),Me=R(v.internalFormat,fe,se,v.colorSpace),H=v.isVideoTexture!==!0,ue=y.__version===void 0||p===!0,ve=_.dataReady;let Re=U(v,he);nt(n.TEXTURE_CUBE_MAP,v);let pe;if(Y){H&&ue&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,Me,he.width,he.height);for(let ce=0;ce<6;ce++){pe=Z[ce].mipmaps;for(let Pe=0;Pe<pe.length;Pe++){const et=pe[Pe];v.format!==jn?fe!==null?H?ve&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Pe,0,0,et.width,et.height,fe,et.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Pe,Me,et.width,et.height,0,et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Pe,0,0,et.width,et.height,fe,se,et.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Pe,Me,et.width,et.height,0,fe,se,et.data)}}}else{if(pe=v.mipmaps,H&&ue){pe.length>0&&Re++;const ce=Pt(Z[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,Me,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(k){H?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Z[ce].width,Z[ce].height,fe,se,Z[ce].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Me,Z[ce].width,Z[ce].height,0,fe,se,Z[ce].data);for(let Pe=0;Pe<pe.length;Pe++){const Mt=pe[Pe].image[ce].image;H?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Pe+1,0,0,Mt.width,Mt.height,fe,se,Mt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Pe+1,Me,Mt.width,Mt.height,0,fe,se,Mt.data)}}else{H?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,fe,se,Z[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Me,fe,se,Z[ce]);for(let Pe=0;Pe<pe.length;Pe++){const et=pe[Pe];H?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Pe+1,0,0,fe,se,et.image[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Pe+1,Me,fe,se,et.image[ce])}}}m(v)&&f(n.TEXTURE_CUBE_MAP),y.__version=_.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function Ne(w,v,j,p,_,y){const D=s.convert(j.format,j.colorSpace),C=s.convert(j.type),F=R(j.internalFormat,D,C,j.colorSpace),Y=i.get(v),k=i.get(j);if(k.__renderTarget=v,!Y.__hasExternalTextures){const Z=Math.max(1,v.width>>y),he=Math.max(1,v.height>>y);_===n.TEXTURE_3D||_===n.TEXTURE_2D_ARRAY?t.texImage3D(_,y,F,Z,he,v.depth,0,D,C,null):t.texImage2D(_,y,F,Z,he,0,D,C,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),Oe(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,p,_,k.__webglTexture,0,At(v)):(_===n.TEXTURE_2D||_>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&_<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,p,_,k.__webglTexture,y),t.bindFramebuffer(n.FRAMEBUFFER,null)}function qe(w,v,j){if(n.bindRenderbuffer(n.RENDERBUFFER,w),v.depthBuffer){const p=v.depthTexture,_=p&&p.isDepthTexture?p.type:null,y=A(v.stencilBuffer,_),D=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,C=At(v);Oe(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,C,y,v.width,v.height):j?n.renderbufferStorageMultisample(n.RENDERBUFFER,C,y,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,y,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,D,n.RENDERBUFFER,w)}else{const p=v.textures;for(let _=0;_<p.length;_++){const y=p[_],D=s.convert(y.format,y.colorSpace),C=s.convert(y.type),F=R(y.internalFormat,D,C,y.colorSpace),Y=At(v);j&&Oe(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Y,F,v.width,v.height):Oe(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Y,F,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,F,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function we(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const p=i.get(v.depthTexture);p.__renderTarget=v,(!p.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),re(v.depthTexture,0);const _=p.__webglTexture,y=At(v);if(v.depthTexture.format===Ea)Oe(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,_,0,y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,_,0);else if(v.depthTexture.format===xa)Oe(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,_,0,y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,_,0);else throw new Error("Unknown depthTexture format")}function at(w){const v=i.get(w),j=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){const p=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),p){const _=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,p.removeEventListener("dispose",_)};p.addEventListener("dispose",_),v.__depthDisposeCallback=_}v.__boundDepthTexture=p}if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");const p=w.texture.mipmaps;p&&p.length>0?we(v.__webglFramebuffer[0],w):we(v.__webglFramebuffer,w)}else if(j){v.__webglDepthbuffer=[];for(let p=0;p<6;p++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[p]),v.__webglDepthbuffer[p]===void 0)v.__webglDepthbuffer[p]=n.createRenderbuffer(),qe(v.__webglDepthbuffer[p],w,!1);else{const _=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,y=v.__webglDepthbuffer[p];n.bindRenderbuffer(n.RENDERBUFFER,y),n.framebufferRenderbuffer(n.FRAMEBUFFER,_,n.RENDERBUFFER,y)}}else{const p=w.texture.mipmaps;if(p&&p.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),qe(v.__webglDepthbuffer,w,!1);else{const _=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,y=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,y),n.framebufferRenderbuffer(n.FRAMEBUFFER,_,n.RENDERBUFFER,y)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ht(w,v,j){const p=i.get(w);v!==void 0&&Ne(p.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),j!==void 0&&at(w)}function P(w){const v=w.texture,j=i.get(w),p=i.get(v);w.addEventListener("dispose",B);const _=w.textures,y=w.isWebGLCubeRenderTarget===!0,D=_.length>1;if(D||(p.__webglTexture===void 0&&(p.__webglTexture=n.createTexture()),p.__version=v.version,a.memory.textures++),y){j.__webglFramebuffer=[];for(let C=0;C<6;C++)if(v.mipmaps&&v.mipmaps.length>0){j.__webglFramebuffer[C]=[];for(let F=0;F<v.mipmaps.length;F++)j.__webglFramebuffer[C][F]=n.createFramebuffer()}else j.__webglFramebuffer[C]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){j.__webglFramebuffer=[];for(let C=0;C<v.mipmaps.length;C++)j.__webglFramebuffer[C]=n.createFramebuffer()}else j.__webglFramebuffer=n.createFramebuffer();if(D)for(let C=0,F=_.length;C<F;C++){const Y=i.get(_[C]);Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture(),a.memory.textures++)}if(w.samples>0&&Oe(w)===!1){j.__webglMultisampledFramebuffer=n.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let C=0;C<_.length;C++){const F=_[C];j.__webglColorRenderbuffer[C]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,j.__webglColorRenderbuffer[C]);const Y=s.convert(F.format,F.colorSpace),k=s.convert(F.type),Z=R(F.internalFormat,Y,k,F.colorSpace,w.isXRRenderTarget===!0),he=At(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,he,Z,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+C,n.RENDERBUFFER,j.__webglColorRenderbuffer[C])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(j.__webglDepthRenderbuffer=n.createRenderbuffer(),qe(j.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(y){t.bindTexture(n.TEXTURE_CUBE_MAP,p.__webglTexture),nt(n.TEXTURE_CUBE_MAP,v);for(let C=0;C<6;C++)if(v.mipmaps&&v.mipmaps.length>0)for(let F=0;F<v.mipmaps.length;F++)Ne(j.__webglFramebuffer[C][F],w,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+C,F);else Ne(j.__webglFramebuffer[C],w,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+C,0);m(v)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(D){for(let C=0,F=_.length;C<F;C++){const Y=_[C],k=i.get(Y);let Z=n.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Z=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Z,k.__webglTexture),nt(Z,Y),Ne(j.__webglFramebuffer,w,Y,n.COLOR_ATTACHMENT0+C,Z,0),m(Y)&&f(Z)}t.unbindTexture()}else{let C=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(C=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(C,p.__webglTexture),nt(C,v),v.mipmaps&&v.mipmaps.length>0)for(let F=0;F<v.mipmaps.length;F++)Ne(j.__webglFramebuffer[F],w,v,n.COLOR_ATTACHMENT0,C,F);else Ne(j.__webglFramebuffer,w,v,n.COLOR_ATTACHMENT0,C,0);m(v)&&f(C),t.unbindTexture()}w.depthBuffer&&at(w)}function yt(w){const v=w.textures;for(let j=0,p=v.length;j<p;j++){const _=v[j];if(m(_)){const y=I(w),D=i.get(_).__webglTexture;t.bindTexture(y,D),f(y),t.unbindTexture()}}}const Qe=[],We=[];function Ue(w){if(w.samples>0){if(Oe(w)===!1){const v=w.textures,j=w.width,p=w.height;let _=n.COLOR_BUFFER_BIT;const y=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,D=i.get(w),C=v.length>1;if(C)for(let Y=0;Y<v.length;Y++)t.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,D.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,D.__webglMultisampledFramebuffer);const F=w.texture.mipmaps;F&&F.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,D.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,D.__webglFramebuffer);for(let Y=0;Y<v.length;Y++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(_|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(_|=n.STENCIL_BUFFER_BIT)),C){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,D.__webglColorRenderbuffer[Y]);const k=i.get(v[Y]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,k,0)}n.blitFramebuffer(0,0,j,p,0,0,j,p,_,n.NEAREST),c===!0&&(Qe.length=0,We.length=0,Qe.push(n.COLOR_ATTACHMENT0+Y),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Qe.push(y),We.push(y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,We)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Qe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),C)for(let Y=0;Y<v.length;Y++){t.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.RENDERBUFFER,D.__webglColorRenderbuffer[Y]);const k=i.get(v[Y]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,D.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.TEXTURE_2D,k,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,D.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const v=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function At(w){return Math.min(r.maxSamples,w.samples)}function Oe(w){const v=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function je(w){const v=a.render.frame;u.get(w)!==v&&(u.set(w,v),w.update())}function kt(w,v){const j=w.colorSpace,p=w.format,_=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||j!==xs&&j!==Ki&&(St.getTransfer(j)===It?(p!==jn||_!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),v}function Pt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=ee,this.resetTextureUnits=W,this.setTexture2D=re,this.setTexture2DArray=ae,this.setTexture3D=de,this.setTextureCube=ne,this.rebindTextures=Ht,this.setupRenderTarget=P,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=Oe}function ZS(n,e){function t(i,r=Ki){let s;const a=St.getTransfer(r);if(i===fi)return n.UNSIGNED_BYTE;if(i===Wc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Xc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Rh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ih)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ah)return n.BYTE;if(i===wh)return n.SHORT;if(i===_a)return n.UNSIGNED_SHORT;if(i===Vc)return n.INT;if(i===Br)return n.UNSIGNED_INT;if(i===oi)return n.FLOAT;if(i===Ma)return n.HALF_FLOAT;if(i===Dh)return n.ALPHA;if(i===Nh)return n.RGB;if(i===jn)return n.RGBA;if(i===Ea)return n.DEPTH_COMPONENT;if(i===xa)return n.DEPTH_STENCIL;if(i===qc)return n.RED;if(i===Yc)return n.RED_INTEGER;if(i===Lh)return n.RG;if(i===Zc)return n.RG_INTEGER;if(i===Kc)return n.RGBA_INTEGER;if(i===co||i===uo||i===ho||i===fo)if(a===It)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===co)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===uo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ho)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===fo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===co)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===uo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ho)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===fo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===tc||i===nc||i===ic||i===rc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===tc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===nc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ic)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===rc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===sc||i===ac||i===oc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===sc||i===ac)return a===It?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===oc)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===lc||i===cc||i===uc||i===dc||i===hc||i===fc||i===pc||i===mc||i===gc||i===_c||i===vc||i===Ec||i===xc||i===Sc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===lc)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===cc)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===uc)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===dc)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===hc)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===fc)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===pc)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===mc)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===gc)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===_c)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===vc)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ec)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===xc)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Sc)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===yc||i===Mc||i===Tc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===yc)return a===It?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Mc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Tc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===bc||i===Ac||i===wc||i===Rc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===bc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ac)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===wc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Rc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===va?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const KS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class $S{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Yh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new cr({vertexShader:KS,fragmentShader:jS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xt(new ys(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class JS extends Ns{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,d=null,h=null,g=null,x=null;const S=typeof XRWebGLBinding<"u",m=new $S,f={},I=t.getContextAttributes();let R=null,A=null;const U=[],O=[],B=new Et;let X=null;const b=new Gn;b.viewport=new qt;const T=new Gn;T.viewport=new qt;const G=[b,T],W=new Ev;let ee=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let ie=U[le];return ie===void 0&&(ie=new yl,U[le]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(le){let ie=U[le];return ie===void 0&&(ie=new yl,U[le]=ie),ie.getGripSpace()},this.getHand=function(le){let ie=U[le];return ie===void 0&&(ie=new yl,U[le]=ie),ie.getHandSpace()};function re(le){const ie=O.indexOf(le.inputSource);if(ie===-1)return;const Ne=U[ie];Ne!==void 0&&(Ne.update(le.inputSource,le.frame,l||a),Ne.dispatchEvent({type:le.type,data:le.inputSource}))}function ae(){r.removeEventListener("select",re),r.removeEventListener("selectstart",re),r.removeEventListener("selectend",re),r.removeEventListener("squeeze",re),r.removeEventListener("squeezestart",re),r.removeEventListener("squeezeend",re),r.removeEventListener("end",ae),r.removeEventListener("inputsourceschange",de);for(let le=0;le<U.length;le++){const ie=O[le];ie!==null&&(O[le]=null,U[le].disconnect(ie))}ee=null,oe=null,m.reset();for(const le in f)delete f[le];e.setRenderTarget(R),g=null,h=null,d=null,r=null,A=null,st.stop(),i.isPresenting=!1,e.setPixelRatio(X),e.setSize(B.width,B.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){s=le,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){o=le,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(le){l=le},this.getBaseLayer=function(){return h!==null?h:g},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(le){if(r=le,r!==null){if(R=e.getRenderTarget(),r.addEventListener("select",re),r.addEventListener("selectstart",re),r.addEventListener("selectend",re),r.addEventListener("squeeze",re),r.addEventListener("squeezestart",re),r.addEventListener("squeezeend",re),r.addEventListener("end",ae),r.addEventListener("inputsourceschange",de),I.xrCompatible!==!0&&await t.makeXRCompatible(),X=e.getPixelRatio(),e.getSize(B),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ne=null,qe=null,we=null;I.depth&&(we=I.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ne=I.stencil?xa:Ea,qe=I.stencil?va:Br);const at={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(at),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),A=new kr(h.textureWidth,h.textureHeight,{format:jn,type:fi,depthTexture:new qh(h.textureWidth,h.textureHeight,qe,void 0,void 0,void 0,void 0,void 0,void 0,Ne),stencilBuffer:I.stencil,colorSpace:e.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const Ne={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,t,Ne),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),A=new kr(g.framebufferWidth,g.framebufferHeight,{format:jn,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),st.setContext(r),st.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function de(le){for(let ie=0;ie<le.removed.length;ie++){const Ne=le.removed[ie],qe=O.indexOf(Ne);qe>=0&&(O[qe]=null,U[qe].disconnect(Ne))}for(let ie=0;ie<le.added.length;ie++){const Ne=le.added[ie];let qe=O.indexOf(Ne);if(qe===-1){for(let at=0;at<U.length;at++)if(at>=O.length){O.push(Ne),qe=at;break}else if(O[at]===null){O[at]=Ne,qe=at;break}if(qe===-1)break}const we=U[qe];we&&we.connect(Ne)}}const ne=new $,Ee=new $;function Se(le,ie,Ne){ne.setFromMatrixPosition(ie.matrixWorld),Ee.setFromMatrixPosition(Ne.matrixWorld);const qe=ne.distanceTo(Ee),we=ie.projectionMatrix.elements,at=Ne.projectionMatrix.elements,Ht=we[14]/(we[10]-1),P=we[14]/(we[10]+1),yt=(we[9]+1)/we[5],Qe=(we[9]-1)/we[5],We=(we[8]-1)/we[0],Ue=(at[8]+1)/at[0],At=Ht*We,Oe=Ht*Ue,je=qe/(-We+Ue),kt=je*-We;if(ie.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(kt),le.translateZ(je),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert(),we[10]===-1)le.projectionMatrix.copy(ie.projectionMatrix),le.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const Pt=Ht+je,w=P+je,v=At-kt,j=Oe+(qe-kt),p=yt*P/w*Pt,_=Qe*P/w*Pt;le.projectionMatrix.makePerspective(v,j,p,_,Pt,w),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}}function ke(le,ie){ie===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(ie.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(r===null)return;let ie=le.near,Ne=le.far;m.texture!==null&&(m.depthNear>0&&(ie=m.depthNear),m.depthFar>0&&(Ne=m.depthFar)),W.near=T.near=b.near=ie,W.far=T.far=b.far=Ne,(ee!==W.near||oe!==W.far)&&(r.updateRenderState({depthNear:W.near,depthFar:W.far}),ee=W.near,oe=W.far),W.layers.mask=le.layers.mask|6,b.layers.mask=W.layers.mask&3,T.layers.mask=W.layers.mask&5;const qe=le.parent,we=W.cameras;ke(W,qe);for(let at=0;at<we.length;at++)ke(we[at],qe);we.length===2?Se(W,b,T):W.projectionMatrix.copy(b.projectionMatrix),nt(le,W,qe)};function nt(le,ie,Ne){Ne===null?le.matrix.copy(ie.matrixWorld):(le.matrix.copy(Ne.matrixWorld),le.matrix.invert(),le.matrix.multiply(ie.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(ie.projectionMatrix),le.projectionMatrixInverse.copy(ie.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=Ic*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(h===null&&g===null))return c},this.setFoveation=function(le){c=le,h!==null&&(h.fixedFoveation=le),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=le)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(W)},this.getCameraTexture=function(le){return f[le]};let ct=null;function xt(le,ie){if(u=ie.getViewerPose(l||a),x=ie,u!==null){const Ne=u.views;g!==null&&(e.setRenderTargetFramebuffer(A,g.framebuffer),e.setRenderTarget(A));let qe=!1;Ne.length!==W.cameras.length&&(W.cameras.length=0,qe=!0);for(let P=0;P<Ne.length;P++){const yt=Ne[P];let Qe=null;if(g!==null)Qe=g.getViewport(yt);else{const Ue=d.getViewSubImage(h,yt);Qe=Ue.viewport,P===0&&(e.setRenderTargetTextures(A,Ue.colorTexture,Ue.depthStencilTexture),e.setRenderTarget(A))}let We=G[P];We===void 0&&(We=new Gn,We.layers.enable(P),We.viewport=new qt,G[P]=We),We.matrix.fromArray(yt.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(yt.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),P===0&&(W.matrix.copy(We.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),qe===!0&&W.cameras.push(We)}const we=r.enabledFeatures;if(we&&we.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){d=i.getBinding();const P=d.getDepthInformation(Ne[0]);P&&P.isValid&&P.texture&&m.init(P,r.renderState)}if(we&&we.includes("camera-access")&&S){e.state.unbindTexture(),d=i.getBinding();for(let P=0;P<Ne.length;P++){const yt=Ne[P].camera;if(yt){let Qe=f[yt];Qe||(Qe=new Yh,f[yt]=Qe);const We=d.getCameraImage(yt);Qe.sourceTexture=We}}}}for(let Ne=0;Ne<U.length;Ne++){const qe=O[Ne],we=U[Ne];qe!==null&&we!==void 0&&we.update(qe,ie,l||a)}ct&&ct(le,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),x=null}const st=new $h;st.setAnimationLoop(xt),this.setAnimationLoop=function(le){ct=le},this.dispose=function(){}}}const Mr=new pi,QS=new Ot;function ey(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,zh(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,I,R,A){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&g(m,f,A)):f.isMeshMatcapMaterial?(s(m,f),x(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),S(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,I,R):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Tn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Tn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const I=e.get(f),R=I.envMap,A=I.envMapRotation;R&&(m.envMap.value=R,Mr.copy(A),Mr.x*=-1,Mr.y*=-1,Mr.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Mr.y*=-1,Mr.z*=-1),m.envMapRotation.value.setFromMatrix4(QS.makeRotationFromEuler(Mr)),m.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,I,R){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*I,m.scale.value=R*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function g(m,f,I){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Tn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=I.texture,m.transmissionSamplerSize.value.set(I.width,I.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,f){f.matcap&&(m.matcap.value=f.matcap)}function S(m,f){const I=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(I.matrixWorld),m.nearDistance.value=I.shadow.camera.near,m.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ty(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(I,R){const A=R.program;i.uniformBlockBinding(I,A)}function l(I,R){let A=r[I.id];A===void 0&&(x(I),A=u(I),r[I.id]=A,I.addEventListener("dispose",m));const U=R.program;i.updateUBOMapping(I,U);const O=e.render.frame;s[I.id]!==O&&(h(I),s[I.id]=O)}function u(I){const R=d();I.__bindingPointIndex=R;const A=n.createBuffer(),U=I.__size,O=I.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,U,O),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,R,A),A}function d(){for(let I=0;I<o;I++)if(a.indexOf(I)===-1)return a.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(I){const R=r[I.id],A=I.uniforms,U=I.__cache;n.bindBuffer(n.UNIFORM_BUFFER,R);for(let O=0,B=A.length;O<B;O++){const X=Array.isArray(A[O])?A[O]:[A[O]];for(let b=0,T=X.length;b<T;b++){const G=X[b];if(g(G,O,b,U)===!0){const W=G.__offset,ee=Array.isArray(G.value)?G.value:[G.value];let oe=0;for(let re=0;re<ee.length;re++){const ae=ee[re],de=S(ae);typeof ae=="number"||typeof ae=="boolean"?(G.__data[0]=ae,n.bufferSubData(n.UNIFORM_BUFFER,W+oe,G.__data)):ae.isMatrix3?(G.__data[0]=ae.elements[0],G.__data[1]=ae.elements[1],G.__data[2]=ae.elements[2],G.__data[3]=0,G.__data[4]=ae.elements[3],G.__data[5]=ae.elements[4],G.__data[6]=ae.elements[5],G.__data[7]=0,G.__data[8]=ae.elements[6],G.__data[9]=ae.elements[7],G.__data[10]=ae.elements[8],G.__data[11]=0):(ae.toArray(G.__data,oe),oe+=de.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,W,G.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(I,R,A,U){const O=I.value,B=R+"_"+A;if(U[B]===void 0)return typeof O=="number"||typeof O=="boolean"?U[B]=O:U[B]=O.clone(),!0;{const X=U[B];if(typeof O=="number"||typeof O=="boolean"){if(X!==O)return U[B]=O,!0}else if(X.equals(O)===!1)return X.copy(O),!0}return!1}function x(I){const R=I.uniforms;let A=0;const U=16;for(let B=0,X=R.length;B<X;B++){const b=Array.isArray(R[B])?R[B]:[R[B]];for(let T=0,G=b.length;T<G;T++){const W=b[T],ee=Array.isArray(W.value)?W.value:[W.value];for(let oe=0,re=ee.length;oe<re;oe++){const ae=ee[oe],de=S(ae),ne=A%U,Ee=ne%de.boundary,Se=ne+Ee;A+=Ee,Se!==0&&U-Se<de.storage&&(A+=U-Se),W.__data=new Float32Array(de.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=A,A+=de.storage}}}const O=A%U;return O>0&&(A+=U-O),I.__size=A,I.__cache={},this}function S(I){const R={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(R.boundary=4,R.storage=4):I.isVector2?(R.boundary=8,R.storage=8):I.isVector3||I.isColor?(R.boundary=16,R.storage=12):I.isVector4?(R.boundary=16,R.storage=16):I.isMatrix3?(R.boundary=48,R.storage=48):I.isMatrix4?(R.boundary=64,R.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),R}function m(I){const R=I.target;R.removeEventListener("dispose",m);const A=a.indexOf(R.__bindingPointIndex);a.splice(A,1),n.deleteBuffer(r[R.id]),delete r[R.id],delete s[R.id]}function f(){for(const I in r)n.deleteBuffer(r[I]);a=[],r={},s={}}return{bind:c,update:l,dispose:f}}class ny{constructor(e={}){const{canvas:t=P_(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const x=new Uint32Array(4),S=new Int32Array(4);let m=null,f=null;const I=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=er,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let U=!1;this._outputColorSpace=In;let O=0,B=0,X=null,b=-1,T=null;const G=new qt,W=new qt;let ee=null;const oe=new mt(0);let re=0,ae=t.width,de=t.height,ne=1,Ee=null,Se=null;const ke=new qt(0,0,ae,de),nt=new qt(0,0,ae,de);let ct=!1;const xt=new Jc;let st=!1,le=!1;const ie=new Ot,Ne=new $,qe=new qt,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let at=!1;function Ht(){return X===null?ne:1}let P=i;function yt(M,q){return t.getContext(M,q)}try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zc}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",Re,!1),t.addEventListener("webglcontextcreationerror",pe,!1),P===null){const q="webgl2";if(P=yt(q,M),P===null)throw yt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Qe,We,Ue,At,Oe,je,kt,Pt,w,v,j,p,_,y,D,C,F,Y,k,Z,he,fe,se,Me;function H(){Qe=new hx(P),Qe.init(),fe=new ZS(P,Qe),We=new sx(P,Qe,e,fe),Ue=new qS(P,Qe),We.reversedDepthBuffer&&h&&Ue.buffers.depth.setReversed(!0),At=new mx(P),Oe=new PS,je=new YS(P,Qe,Ue,Oe,We,fe,At),kt=new ox(A),Pt=new dx(A),w=new Sv(P),se=new ix(P,w),v=new fx(P,w,At,se),j=new _x(P,v,w,At),k=new gx(P,We,je),C=new ax(Oe),p=new LS(A,kt,Pt,Qe,We,se,C),_=new ey(A,Oe),y=new US,D=new HS(Qe),Y=new nx(A,kt,Pt,Ue,j,g,c),F=new WS(A,j,We),Me=new ty(P,At,We,Ue),Z=new rx(P,Qe,At),he=new px(P,Qe,At),At.programs=p.programs,A.capabilities=We,A.extensions=Qe,A.properties=Oe,A.renderLists=y,A.shadowMap=F,A.state=Ue,A.info=At}H();const ue=new JS(A,P);this.xr=ue,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const M=Qe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Qe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(M){M!==void 0&&(ne=M,this.setSize(ae,de,!1))},this.getSize=function(M){return M.set(ae,de)},this.setSize=function(M,q,J=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=M,de=q,t.width=Math.floor(M*ne),t.height=Math.floor(q*ne),J===!0&&(t.style.width=M+"px",t.style.height=q+"px"),this.setViewport(0,0,M,q)},this.getDrawingBufferSize=function(M){return M.set(ae*ne,de*ne).floor()},this.setDrawingBufferSize=function(M,q,J){ae=M,de=q,ne=J,t.width=Math.floor(M*J),t.height=Math.floor(q*J),this.setViewport(0,0,M,q)},this.getCurrentViewport=function(M){return M.copy(G)},this.getViewport=function(M){return M.copy(ke)},this.setViewport=function(M,q,J,Q){M.isVector4?ke.set(M.x,M.y,M.z,M.w):ke.set(M,q,J,Q),Ue.viewport(G.copy(ke).multiplyScalar(ne).round())},this.getScissor=function(M){return M.copy(nt)},this.setScissor=function(M,q,J,Q){M.isVector4?nt.set(M.x,M.y,M.z,M.w):nt.set(M,q,J,Q),Ue.scissor(W.copy(nt).multiplyScalar(ne).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(M){Ue.setScissorTest(ct=M)},this.setOpaqueSort=function(M){Ee=M},this.setTransparentSort=function(M){Se=M},this.getClearColor=function(M){return M.copy(Y.getClearColor())},this.setClearColor=function(){Y.setClearColor(...arguments)},this.getClearAlpha=function(){return Y.getClearAlpha()},this.setClearAlpha=function(){Y.setClearAlpha(...arguments)},this.clear=function(M=!0,q=!0,J=!0){let Q=0;if(M){let K=!1;if(X!==null){const me=X.texture.format;K=me===Kc||me===Zc||me===Yc}if(K){const me=X.texture.type,Te=me===fi||me===Br||me===_a||me===va||me===Wc||me===Xc,Fe=Y.getClearColor(),Ae=Y.getClearAlpha(),Xe=Fe.r,Ye=Fe.g,Be=Fe.b;Te?(x[0]=Xe,x[1]=Ye,x[2]=Be,x[3]=Ae,P.clearBufferuiv(P.COLOR,0,x)):(S[0]=Xe,S[1]=Ye,S[2]=Be,S[3]=Ae,P.clearBufferiv(P.COLOR,0,S))}else Q|=P.COLOR_BUFFER_BIT}q&&(Q|=P.DEPTH_BUFFER_BIT),J&&(Q|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",Re,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),Y.dispose(),y.dispose(),D.dispose(),Oe.dispose(),kt.dispose(),Pt.dispose(),j.dispose(),se.dispose(),Me.dispose(),p.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",On),ue.removeEventListener("sessionend",ba),mi.stop()};function ve(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function Re(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const M=At.autoReset,q=F.enabled,J=F.autoUpdate,Q=F.needsUpdate,K=F.type;H(),At.autoReset=M,F.enabled=q,F.autoUpdate=J,F.needsUpdate=Q,F.type=K}function pe(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ce(M){const q=M.target;q.removeEventListener("dispose",ce),Pe(q)}function Pe(M){et(M),Oe.remove(M)}function et(M){const q=Oe.get(M).programs;q!==void 0&&(q.forEach(function(J){p.releaseProgram(J)}),M.isShaderMaterial&&p.releaseShaderCache(M))}this.renderBufferDirect=function(M,q,J,Q,K,me){q===null&&(q=we);const Te=K.isMesh&&K.matrixWorld.determinant()<0,Fe=ko(M,q,J,Q,K);Ue.setMaterial(Q,Te);let Ae=J.index,Xe=1;if(Q.wireframe===!0){if(Ae=v.getWireframeAttribute(J),Ae===void 0)return;Xe=2}const Ye=J.drawRange,Be=J.attributes.position;let ut=Ye.start*Xe,Tt=(Ye.start+Ye.count)*Xe;me!==null&&(ut=Math.max(ut,me.start*Xe),Tt=Math.min(Tt,(me.start+me.count)*Xe)),Ae!==null?(ut=Math.max(ut,0),Tt=Math.min(Tt,Ae.count)):Be!=null&&(ut=Math.max(ut,0),Tt=Math.min(Tt,Be.count));const Ft=Tt-ut;if(Ft<0||Ft===1/0)return;se.setup(K,Q,Fe,J,Ae);let Nt,wt=Z;if(Ae!==null&&(Nt=w.get(Ae),wt=he,wt.setIndex(Nt)),K.isMesh)Q.wireframe===!0?(Ue.setLineWidth(Q.wireframeLinewidth*Ht()),wt.setMode(P.LINES)):wt.setMode(P.TRIANGLES);else if(K.isLine){let Ve=Q.linewidth;Ve===void 0&&(Ve=1),Ue.setLineWidth(Ve*Ht()),K.isLineSegments?wt.setMode(P.LINES):K.isLineLoop?wt.setMode(P.LINE_LOOP):wt.setMode(P.LINE_STRIP)}else K.isPoints?wt.setMode(P.POINTS):K.isSprite&&wt.setMode(P.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Sa("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),wt.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(Qe.get("WEBGL_multi_draw"))wt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Ve=K._multiDrawStarts,Rt=K._multiDrawCounts,gt=K._multiDrawCount,mn=Ae?w.get(Ae).bytesPerElement:1,Fi=Oe.get(Q).currentProgram.getUniforms();for(let an=0;an<gt;an++)Fi.setValue(P,"_gl_DrawID",an),wt.render(Ve[an]/mn,Rt[an])}else if(K.isInstancedMesh)wt.renderInstances(ut,Ft,K.count);else if(J.isInstancedBufferGeometry){const Ve=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Rt=Math.min(J.instanceCount,Ve);wt.renderInstances(ut,Ft,Rt)}else wt.render(ut,Ft)};function Mt(M,q,J){M.transparent===!0&&M.side===Di&&M.forceSinglePass===!1?(M.side=Tn,M.needsUpdate=!0,zr(M,q,J),M.side=lr,M.needsUpdate=!0,zr(M,q,J),M.side=Di):zr(M,q,J)}this.compile=function(M,q,J=null){J===null&&(J=M),f=D.get(J),f.init(q),R.push(f),J.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(f.pushLight(K),K.castShadow&&f.pushShadow(K))}),M!==J&&M.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(f.pushLight(K),K.castShadow&&f.pushShadow(K))}),f.setupLights();const Q=new Set;return M.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const me=K.material;if(me)if(Array.isArray(me))for(let Te=0;Te<me.length;Te++){const Fe=me[Te];Mt(Fe,J,K),Q.add(Fe)}else Mt(me,J,K),Q.add(me)}),f=R.pop(),Q},this.compileAsync=function(M,q,J=null){const Q=this.compile(M,q,J);return new Promise(K=>{function me(){if(Q.forEach(function(Te){Oe.get(Te).currentProgram.isReady()&&Q.delete(Te)}),Q.size===0){K(M);return}setTimeout(me,10)}Qe.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let ft=null;function Vn(M){ft&&ft(M)}function On(){mi.stop()}function ba(){mi.start()}const mi=new $h;mi.setAnimationLoop(Vn),typeof self<"u"&&mi.setContext(self),this.setAnimationLoop=function(M){ft=M,ue.setAnimationLoop(M),M===null?mi.stop():mi.start()},ue.addEventListener("sessionstart",On),ue.addEventListener("sessionend",ba),this.render=function(M,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(q),q=ue.getCamera()),M.isScene===!0&&M.onBeforeRender(A,M,q,X),f=D.get(M,R.length),f.init(q),R.push(f),ie.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),xt.setFromProjectionMatrix(ie,li,q.reversedDepth),le=this.localClippingEnabled,st=C.init(this.clippingPlanes,le),m=y.get(M,I.length),m.init(),I.push(m),ue.enabled===!0&&ue.isPresenting===!0){const me=A.xr.getDepthSensingMesh();me!==null&&Os(me,q,-1/0,A.sortObjects)}Os(M,q,0,A.sortObjects),m.finish(),A.sortObjects===!0&&m.sort(Ee,Se),at=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,at&&Y.addToRenderList(m,M),this.info.render.frame++,st===!0&&C.beginShadows();const J=f.state.shadowsArray;F.render(J,M,q),st===!0&&C.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=m.opaque,K=m.transmissive;if(f.setupLights(),q.isArrayCamera){const me=q.cameras;if(K.length>0)for(let Te=0,Fe=me.length;Te<Fe;Te++){const Ae=me[Te];Hr(Q,K,M,Ae)}at&&Y.render(M);for(let Te=0,Fe=me.length;Te<Fe;Te++){const Ae=me[Te];fr(m,M,Ae,Ae.viewport)}}else K.length>0&&Hr(Q,K,M,q),at&&Y.render(M),fr(m,M,q);X!==null&&B===0&&(je.updateMultisampleRenderTarget(X),je.updateRenderTargetMipmap(X)),M.isScene===!0&&M.onAfterRender(A,M,q),se.resetDefaultState(),b=-1,T=null,R.pop(),R.length>0?(f=R[R.length-1],st===!0&&C.setGlobalState(A.clippingPlanes,f.state.camera)):f=null,I.pop(),I.length>0?m=I[I.length-1]:m=null};function Os(M,q,J,Q){if(M.visible===!1)return;if(M.layers.test(q.layers)){if(M.isGroup)J=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(q);else if(M.isLight)f.pushLight(M),M.castShadow&&f.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||xt.intersectsSprite(M)){Q&&qe.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ie);const Te=j.update(M),Fe=M.material;Fe.visible&&m.push(M,Te,Fe,J,qe.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||xt.intersectsObject(M))){const Te=j.update(M),Fe=M.material;if(Q&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),qe.copy(M.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),qe.copy(Te.boundingSphere.center)),qe.applyMatrix4(M.matrixWorld).applyMatrix4(ie)),Array.isArray(Fe)){const Ae=Te.groups;for(let Xe=0,Ye=Ae.length;Xe<Ye;Xe++){const Be=Ae[Xe],ut=Fe[Be.materialIndex];ut&&ut.visible&&m.push(M,Te,ut,J,qe.z,Be)}}else Fe.visible&&m.push(M,Te,Fe,J,qe.z,null)}}const me=M.children;for(let Te=0,Fe=me.length;Te<Fe;Te++)Os(me[Te],q,J,Q)}function fr(M,q,J,Q){const K=M.opaque,me=M.transmissive,Te=M.transparent;f.setupLightsView(J),st===!0&&C.setGlobalState(A.clippingPlanes,J),Q&&Ue.viewport(G.copy(Q)),K.length>0&&pr(K,q,J),me.length>0&&pr(me,q,J),Te.length>0&&pr(Te,q,J),Ue.buffers.depth.setTest(!0),Ue.buffers.depth.setMask(!0),Ue.buffers.color.setMask(!0),Ue.setPolygonOffset(!1)}function Hr(M,q,J,Q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[Q.id]===void 0&&(f.state.transmissionRenderTarget[Q.id]=new kr(1,1,{generateMipmaps:!0,type:Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float")?Ma:fi,minFilter:Nr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace}));const me=f.state.transmissionRenderTarget[Q.id],Te=Q.viewport||G;me.setSize(Te.z*A.transmissionResolutionScale,Te.w*A.transmissionResolutionScale);const Fe=A.getRenderTarget(),Ae=A.getActiveCubeFace(),Xe=A.getActiveMipmapLevel();A.setRenderTarget(me),A.getClearColor(oe),re=A.getClearAlpha(),re<1&&A.setClearColor(16777215,.5),A.clear(),at&&Y.render(J);const Ye=A.toneMapping;A.toneMapping=er;const Be=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),f.setupLightsView(Q),st===!0&&C.setGlobalState(A.clippingPlanes,Q),pr(M,J,Q),je.updateMultisampleRenderTarget(me),je.updateRenderTargetMipmap(me),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let ut=!1;for(let Tt=0,Ft=q.length;Tt<Ft;Tt++){const Nt=q[Tt],wt=Nt.object,Ve=Nt.geometry,Rt=Nt.material,gt=Nt.group;if(Rt.side===Di&&wt.layers.test(Q.layers)){const mn=Rt.side;Rt.side=Tn,Rt.needsUpdate=!0,ti(wt,J,Q,Ve,Rt,gt),Rt.side=mn,Rt.needsUpdate=!0,ut=!0}}ut===!0&&(je.updateMultisampleRenderTarget(me),je.updateRenderTargetMipmap(me))}A.setRenderTarget(Fe,Ae,Xe),A.setClearColor(oe,re),Be!==void 0&&(Q.viewport=Be),A.toneMapping=Ye}function pr(M,q,J){const Q=q.isScene===!0?q.overrideMaterial:null;for(let K=0,me=M.length;K<me;K++){const Te=M[K],Fe=Te.object,Ae=Te.geometry,Xe=Te.group;let Ye=Te.material;Ye.allowOverride===!0&&Q!==null&&(Ye=Q),Fe.layers.test(J.layers)&&ti(Fe,q,J,Ae,Ye,Xe)}}function ti(M,q,J,Q,K,me){M.onBeforeRender(A,q,J,Q,K,me),M.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),K.onBeforeRender(A,q,J,Q,M,me),K.transparent===!0&&K.side===Di&&K.forceSinglePass===!1?(K.side=Tn,K.needsUpdate=!0,A.renderBufferDirect(J,q,Q,K,M,me),K.side=lr,K.needsUpdate=!0,A.renderBufferDirect(J,q,Q,K,M,me),K.side=Di):A.renderBufferDirect(J,q,Q,K,M,me),M.onAfterRender(A,q,J,Q,K,me)}function zr(M,q,J){q.isScene!==!0&&(q=we);const Q=Oe.get(M),K=f.state.lights,me=f.state.shadowsArray,Te=K.state.version,Fe=p.getParameters(M,K.state,me,q,J),Ae=p.getProgramCacheKey(Fe);let Xe=Q.programs;Q.environment=M.isMeshStandardMaterial?q.environment:null,Q.fog=q.fog,Q.envMap=(M.isMeshStandardMaterial?Pt:kt).get(M.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&M.envMap===null?q.environmentRotation:M.envMapRotation,Xe===void 0&&(M.addEventListener("dispose",ce),Xe=new Map,Q.programs=Xe);let Ye=Xe.get(Ae);if(Ye!==void 0){if(Q.currentProgram===Ye&&Q.lightsStateVersion===Te)return wa(M,Fe),Ye}else Fe.uniforms=p.getUniforms(M),M.onBeforeCompile(Fe,A),Ye=p.acquireProgram(Fe,Ae),Xe.set(Ae,Ye),Q.uniforms=Fe.uniforms;const Be=Q.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Be.clippingPlanes=C.uniform),wa(M,Fe),Q.needsLights=Wn(M),Q.lightsStateVersion=Te,Q.needsLights&&(Be.ambientLightColor.value=K.state.ambient,Be.lightProbe.value=K.state.probe,Be.directionalLights.value=K.state.directional,Be.directionalLightShadows.value=K.state.directionalShadow,Be.spotLights.value=K.state.spot,Be.spotLightShadows.value=K.state.spotShadow,Be.rectAreaLights.value=K.state.rectArea,Be.ltc_1.value=K.state.rectAreaLTC1,Be.ltc_2.value=K.state.rectAreaLTC2,Be.pointLights.value=K.state.point,Be.pointLightShadows.value=K.state.pointShadow,Be.hemisphereLights.value=K.state.hemi,Be.directionalShadowMap.value=K.state.directionalShadowMap,Be.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Be.spotShadowMap.value=K.state.spotShadowMap,Be.spotLightMatrix.value=K.state.spotLightMatrix,Be.spotLightMap.value=K.state.spotLightMap,Be.pointShadowMap.value=K.state.pointShadowMap,Be.pointShadowMatrix.value=K.state.pointShadowMatrix),Q.currentProgram=Ye,Q.uniformsList=null,Ye}function Aa(M){if(M.uniformsList===null){const q=M.currentProgram.getUniforms();M.uniformsList=po.seqWithValue(q.seq,M.uniforms)}return M.uniformsList}function wa(M,q){const J=Oe.get(M);J.outputColorSpace=q.outputColorSpace,J.batching=q.batching,J.batchingColor=q.batchingColor,J.instancing=q.instancing,J.instancingColor=q.instancingColor,J.instancingMorph=q.instancingMorph,J.skinning=q.skinning,J.morphTargets=q.morphTargets,J.morphNormals=q.morphNormals,J.morphColors=q.morphColors,J.morphTargetsCount=q.morphTargetsCount,J.numClippingPlanes=q.numClippingPlanes,J.numIntersection=q.numClipIntersection,J.vertexAlphas=q.vertexAlphas,J.vertexTangents=q.vertexTangents,J.toneMapping=q.toneMapping}function ko(M,q,J,Q,K){q.isScene!==!0&&(q=we),je.resetTextureUnits();const me=q.fog,Te=Q.isMeshStandardMaterial?q.environment:null,Fe=X===null?A.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:xs,Ae=(Q.isMeshStandardMaterial?Pt:kt).get(Q.envMap||Te),Xe=Q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Ye=!!J.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Be=!!J.morphAttributes.position,ut=!!J.morphAttributes.normal,Tt=!!J.morphAttributes.color;let Ft=er;Q.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Ft=A.toneMapping);const Nt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,wt=Nt!==void 0?Nt.length:0,Ve=Oe.get(Q),Rt=f.state.lights;if(st===!0&&(le===!0||M!==T)){const tn=M===T&&Q.id===b;C.setState(Q,M,tn)}let gt=!1;Q.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Rt.state.version||Ve.outputColorSpace!==Fe||K.isBatchedMesh&&Ve.batching===!1||!K.isBatchedMesh&&Ve.batching===!0||K.isBatchedMesh&&Ve.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Ve.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Ve.instancing===!1||!K.isInstancedMesh&&Ve.instancing===!0||K.isSkinnedMesh&&Ve.skinning===!1||!K.isSkinnedMesh&&Ve.skinning===!0||K.isInstancedMesh&&Ve.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Ve.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Ve.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Ve.instancingMorph===!1&&K.morphTexture!==null||Ve.envMap!==Ae||Q.fog===!0&&Ve.fog!==me||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==C.numPlanes||Ve.numIntersection!==C.numIntersection)||Ve.vertexAlphas!==Xe||Ve.vertexTangents!==Ye||Ve.morphTargets!==Be||Ve.morphNormals!==ut||Ve.morphColors!==Tt||Ve.toneMapping!==Ft||Ve.morphTargetsCount!==wt)&&(gt=!0):(gt=!0,Ve.__version=Q.version);let mn=Ve.currentProgram;gt===!0&&(mn=zr(Q,q,K));let Fi=!1,an=!1,mr=!1;const Ct=mn.getUniforms(),on=Ve.uniforms;if(Ue.useProgram(mn.program)&&(Fi=!0,an=!0,mr=!0),Q.id!==b&&(b=Q.id,an=!0),Fi||T!==M){Ue.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Ct.setValue(P,"projectionMatrix",M.projectionMatrix),Ct.setValue(P,"viewMatrix",M.matrixWorldInverse);const ln=Ct.map.cameraPosition;ln!==void 0&&ln.setValue(P,Ne.setFromMatrixPosition(M.matrixWorld)),We.logarithmicDepthBuffer&&Ct.setValue(P,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Ct.setValue(P,"isOrthographic",M.isOrthographicCamera===!0),T!==M&&(T=M,an=!0,mr=!0)}if(K.isSkinnedMesh){Ct.setOptional(P,K,"bindMatrix"),Ct.setOptional(P,K,"bindMatrixInverse");const tn=K.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),Ct.setValue(P,"boneTexture",tn.boneTexture,je))}K.isBatchedMesh&&(Ct.setOptional(P,K,"batchingTexture"),Ct.setValue(P,"batchingTexture",K._matricesTexture,je),Ct.setOptional(P,K,"batchingIdTexture"),Ct.setValue(P,"batchingIdTexture",K._indirectTexture,je),Ct.setOptional(P,K,"batchingColorTexture"),K._colorsTexture!==null&&Ct.setValue(P,"batchingColorTexture",K._colorsTexture,je));const xn=J.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&k.update(K,J,mn),(an||Ve.receiveShadow!==K.receiveShadow)&&(Ve.receiveShadow=K.receiveShadow,Ct.setValue(P,"receiveShadow",K.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(on.envMap.value=Ae,on.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&q.environment!==null&&(on.envMapIntensity.value=q.environmentIntensity),an&&(Ct.setValue(P,"toneMappingExposure",A.toneMappingExposure),Ve.needsLights&&Go(on,mr),me&&Q.fog===!0&&_.refreshFogUniforms(on,me),_.refreshMaterialUniforms(on,Q,ne,de,f.state.transmissionRenderTarget[M.id]),po.upload(P,Aa(Ve),on,je)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(po.upload(P,Aa(Ve),on,je),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Ct.setValue(P,"center",K.center),Ct.setValue(P,"modelViewMatrix",K.modelViewMatrix),Ct.setValue(P,"normalMatrix",K.normalMatrix),Ct.setValue(P,"modelMatrix",K.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const tn=Q.uniformsGroups;for(let ln=0,Fs=tn.length;ln<Fs;ln++){const gi=tn[ln];Me.update(gi,mn),Me.bind(gi,mn)}}return mn}function Go(M,q){M.ambientLightColor.needsUpdate=q,M.lightProbe.needsUpdate=q,M.directionalLights.needsUpdate=q,M.directionalLightShadows.needsUpdate=q,M.pointLights.needsUpdate=q,M.pointLightShadows.needsUpdate=q,M.spotLights.needsUpdate=q,M.spotLightShadows.needsUpdate=q,M.rectAreaLights.needsUpdate=q,M.hemisphereLights.needsUpdate=q}function Wn(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(M,q,J){const Q=Oe.get(M);Q.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),Oe.get(M.texture).__webglTexture=q,Oe.get(M.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:J,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,q){const J=Oe.get(M);J.__webglFramebuffer=q,J.__useDefaultFramebuffer=q===void 0};const Ho=P.createFramebuffer();this.setRenderTarget=function(M,q=0,J=0){X=M,O=q,B=J;let Q=!0,K=null,me=!1,Te=!1;if(M){const Ae=Oe.get(M);if(Ae.__useDefaultFramebuffer!==void 0)Ue.bindFramebuffer(P.FRAMEBUFFER,null),Q=!1;else if(Ae.__webglFramebuffer===void 0)je.setupRenderTarget(M);else if(Ae.__hasExternalTextures)je.rebindTextures(M,Oe.get(M.texture).__webglTexture,Oe.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Be=M.depthTexture;if(Ae.__boundDepthTexture!==Be){if(Be!==null&&Oe.has(Be)&&(M.width!==Be.image.width||M.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");je.setupDepthRenderbuffer(M)}}const Xe=M.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Te=!0);const Ye=Oe.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ye[q])?K=Ye[q][J]:K=Ye[q],me=!0):M.samples>0&&je.useMultisampledRTT(M)===!1?K=Oe.get(M).__webglMultisampledFramebuffer:Array.isArray(Ye)?K=Ye[J]:K=Ye,G.copy(M.viewport),W.copy(M.scissor),ee=M.scissorTest}else G.copy(ke).multiplyScalar(ne).floor(),W.copy(nt).multiplyScalar(ne).floor(),ee=ct;if(J!==0&&(K=Ho),Ue.bindFramebuffer(P.FRAMEBUFFER,K)&&Q&&Ue.drawBuffers(M,K),Ue.viewport(G),Ue.scissor(W),Ue.setScissorTest(ee),me){const Ae=Oe.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ae.__webglTexture,J)}else if(Te){const Ae=q;for(let Xe=0;Xe<M.textures.length;Xe++){const Ye=Oe.get(M.textures[Xe]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Xe,Ye.__webglTexture,J,Ae)}}else if(M!==null&&J!==0){const Ae=Oe.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ae.__webglTexture,J)}b=-1},this.readRenderTargetPixels=function(M,q,J,Q,K,me,Te,Fe=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Oe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Te!==void 0&&(Ae=Ae[Te]),Ae){Ue.bindFramebuffer(P.FRAMEBUFFER,Ae);try{const Xe=M.textures[Fe],Ye=Xe.format,Be=Xe.type;if(!We.textureFormatReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!We.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=M.width-Q&&J>=0&&J<=M.height-K&&(M.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Fe),P.readPixels(q,J,Q,K,fe.convert(Ye),fe.convert(Be),me))}finally{const Xe=X!==null?Oe.get(X).__webglFramebuffer:null;Ue.bindFramebuffer(P.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(M,q,J,Q,K,me,Te,Fe=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=Oe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Te!==void 0&&(Ae=Ae[Te]),Ae)if(q>=0&&q<=M.width-Q&&J>=0&&J<=M.height-K){Ue.bindFramebuffer(P.FRAMEBUFFER,Ae);const Xe=M.textures[Fe],Ye=Xe.format,Be=Xe.type;if(!We.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!We.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ut=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,ut),P.bufferData(P.PIXEL_PACK_BUFFER,me.byteLength,P.STREAM_READ),M.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Fe),P.readPixels(q,J,Q,K,fe.convert(Ye),fe.convert(Be),0);const Tt=X!==null?Oe.get(X).__webglFramebuffer:null;Ue.bindFramebuffer(P.FRAMEBUFFER,Tt);const Ft=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await C_(P,Ft,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,ut),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,me),P.deleteBuffer(ut),P.deleteSync(Ft),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,q=null,J=0){const Q=Math.pow(2,-J),K=Math.floor(M.image.width*Q),me=Math.floor(M.image.height*Q),Te=q!==null?q.x:0,Fe=q!==null?q.y:0;je.setTexture2D(M,0),P.copyTexSubImage2D(P.TEXTURE_2D,J,0,0,Te,Fe,K,me),Ue.unbindTexture()};const zo=P.createFramebuffer(),Vo=P.createFramebuffer();this.copyTextureToTexture=function(M,q,J=null,Q=null,K=0,me=null){me===null&&(K!==0?(Sa("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),me=K,K=0):me=0);let Te,Fe,Ae,Xe,Ye,Be,ut,Tt,Ft;const Nt=M.isCompressedTexture?M.mipmaps[me]:M.image;if(J!==null)Te=J.max.x-J.min.x,Fe=J.max.y-J.min.y,Ae=J.isBox3?J.max.z-J.min.z:1,Xe=J.min.x,Ye=J.min.y,Be=J.isBox3?J.min.z:0;else{const xn=Math.pow(2,-K);Te=Math.floor(Nt.width*xn),Fe=Math.floor(Nt.height*xn),M.isDataArrayTexture?Ae=Nt.depth:M.isData3DTexture?Ae=Math.floor(Nt.depth*xn):Ae=1,Xe=0,Ye=0,Be=0}Q!==null?(ut=Q.x,Tt=Q.y,Ft=Q.z):(ut=0,Tt=0,Ft=0);const wt=fe.convert(q.format),Ve=fe.convert(q.type);let Rt;q.isData3DTexture?(je.setTexture3D(q,0),Rt=P.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(je.setTexture2DArray(q,0),Rt=P.TEXTURE_2D_ARRAY):(je.setTexture2D(q,0),Rt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,q.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,q.unpackAlignment);const gt=P.getParameter(P.UNPACK_ROW_LENGTH),mn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Fi=P.getParameter(P.UNPACK_SKIP_PIXELS),an=P.getParameter(P.UNPACK_SKIP_ROWS),mr=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Nt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Nt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Xe),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ye),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Be);const Ct=M.isDataArrayTexture||M.isData3DTexture,on=q.isDataArrayTexture||q.isData3DTexture;if(M.isDepthTexture){const xn=Oe.get(M),tn=Oe.get(q),ln=Oe.get(xn.__renderTarget),Fs=Oe.get(tn.__renderTarget);Ue.bindFramebuffer(P.READ_FRAMEBUFFER,ln.__webglFramebuffer),Ue.bindFramebuffer(P.DRAW_FRAMEBUFFER,Fs.__webglFramebuffer);for(let gi=0;gi<Ae;gi++)Ct&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Oe.get(M).__webglTexture,K,Be+gi),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Oe.get(q).__webglTexture,me,Ft+gi)),P.blitFramebuffer(Xe,Ye,Te,Fe,ut,Tt,Te,Fe,P.DEPTH_BUFFER_BIT,P.NEAREST);Ue.bindFramebuffer(P.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(K!==0||M.isRenderTargetTexture||Oe.has(M)){const xn=Oe.get(M),tn=Oe.get(q);Ue.bindFramebuffer(P.READ_FRAMEBUFFER,zo),Ue.bindFramebuffer(P.DRAW_FRAMEBUFFER,Vo);for(let ln=0;ln<Ae;ln++)Ct?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,xn.__webglTexture,K,Be+ln):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,xn.__webglTexture,K),on?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,tn.__webglTexture,me,Ft+ln):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,tn.__webglTexture,me),K!==0?P.blitFramebuffer(Xe,Ye,Te,Fe,ut,Tt,Te,Fe,P.COLOR_BUFFER_BIT,P.NEAREST):on?P.copyTexSubImage3D(Rt,me,ut,Tt,Ft+ln,Xe,Ye,Te,Fe):P.copyTexSubImage2D(Rt,me,ut,Tt,Xe,Ye,Te,Fe);Ue.bindFramebuffer(P.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else on?M.isDataTexture||M.isData3DTexture?P.texSubImage3D(Rt,me,ut,Tt,Ft,Te,Fe,Ae,wt,Ve,Nt.data):q.isCompressedArrayTexture?P.compressedTexSubImage3D(Rt,me,ut,Tt,Ft,Te,Fe,Ae,wt,Nt.data):P.texSubImage3D(Rt,me,ut,Tt,Ft,Te,Fe,Ae,wt,Ve,Nt):M.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,me,ut,Tt,Te,Fe,wt,Ve,Nt.data):M.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,me,ut,Tt,Nt.width,Nt.height,wt,Nt.data):P.texSubImage2D(P.TEXTURE_2D,me,ut,Tt,Te,Fe,wt,Ve,Nt);P.pixelStorei(P.UNPACK_ROW_LENGTH,gt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,mn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Fi),P.pixelStorei(P.UNPACK_SKIP_ROWS,an),P.pixelStorei(P.UNPACK_SKIP_IMAGES,mr),me===0&&q.generateMipmaps&&P.generateMipmap(Rt),Ue.unbindTexture()},this.initRenderTarget=function(M){Oe.get(M).__webglFramebuffer===void 0&&je.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?je.setTextureCube(M,0):M.isData3DTexture?je.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?je.setTexture2DArray(M,0):je.setTexture2D(M,0),Ue.unbindTexture()},this.resetState=function(){O=0,B=0,X=null,Ue.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=St._getDrawingBufferColorSpace(e),t.unpackColorSpace=St._getUnpackColorSpace()}}const Ms=Object.freeze({title:"Heli 1v1",tickRate:30,worldLimit:190,maxAltitude:118,heliRadius:3.6,maxHealth:100,winsToMatch:3,rotorSpeed:34,gravity:20,collectiveStrength:22,airDrag:.55,maxHorizontalSpeed:52,maxVerticalSpeed:35,yawRate:1.8,pitchRate:1.55,rollRate:2.35,mouseSensitivity:.0025,weapons:{minigun:{magazine:100,damage:100/30,interval:.085,reload:2.2,range:260},flare:{cooldown:13,duration:3.2},unguided:{cooldown:5.5,speed:76,damage:29,blast:8},lock:{cooldown:12,acquire:1.25,speed:62,damage:42,blast:7,range:175,cone:.93}}}),iy=[{x:-155,y:38,z:22,yaw:Math.PI/2},{x:155,y:38,z:-22,yaw:-Math.PI/2}];let Ll=43177;function Ys(){return Ll=Ll*1664525+1013904223>>>0,Ll/4294967296}const Fo=[];for(let n=-4;n<=4;n++)for(let e=-4;e<=4;e++){const t=n*42,i=e*42;if(Math.abs(t)>170||Math.abs(i)>170||n===0&&e===0)continue;const r=23+Ys()*7,s=23+Ys()*7,a=35+Ys()*58+(Math.abs(n)+Math.abs(e)<3?16:0);Fo.push({x:t,z:i,w:r,d:s,h:a,style:Math.floor(Ys()*4),roof:Ys()})}function nf(n,e,t){let i=t;for(const r of Fo){const s=[r.x-r.w/2,0,r.z-r.d/2],a=[r.x+r.w/2,r.h,r.z+r.d/2],o=[n.x,n.y,n.z],c=[e.x,e.y,e.z];let l=0,u=i;for(let d=0;d<3;d++)if(Math.abs(c[d])<1e-8){if(o[d]<s[d]||o[d]>a[d]){l=1/0;break}}else{let h=(s[d]-o[d])/c[d],g=(a[d]-o[d])/c[d];if(h>g&&([h,g]=[g,h]),l=Math.max(l,h),u=Math.min(u,g),l>u)break}l<=u&&l<i&&(i=l)}return i}function ry(n,e,t,i){const r=n.x-t.x,s=n.y-t.y,a=n.z-t.z,o=r*e.x+s*e.y+a*e.z,c=r*r+s*s+a*a-i*i,l=o*o-c;if(l<0)return 1/0;const u=-o-Math.sqrt(l);return u>=0?u:1/0}function rf(n){return Array.isArray(n.q)?new Ui(...n.q):n.q}function sy(n){return new Ui().setFromAxisAngle(new $(0,1,0),-n)}function ay(n){return new $(0,0,-1).applyQuaternion(rf(n))}function oy(n){const e=rf(n),t=new $(0,0,-1).applyQuaternion(e),i=new $(0,-.8,-2.95).applyQuaternion(e);return i.x+=n.x,i.y+=n.y,i.z+=n.z,{origin:i,dir:t}}function ly(n,e){const{origin:t,dir:i}=oy(n),r=Ms.weapons.minigun.range,s=nf(t,i,r),a=e?.health>0?ry(t,i,e,Ms.heliRadius):1/0,o=Math.min(s,a,r);return{origin:t,dir:i,distance:o,end:t.clone().addScaledVector(i,o),hit:a<s&&a<r}}const ni=n=>new Zh({color:n,metalness:.28,roughness:.72}),bt={ground:ni(1449769),road:ni(2107955),roadLine:new Ni({color:6584449}),building:[ni(3425361),ni(4215130),ni(2701636),ni(4608347)],roof:ni(1912118),dark:ni(1121316),glass:new Zh({color:4350315,metalness:.45,roughness:.22}),window:new Ni({color:10997966,transparent:!0,opacity:.46,depthWrite:!1}),orange:new Ni({color:16754024}),cyan:new Ni({color:7987944})};function Wt(n,e,t,i,r,s=0,a=0,o=0){const c=new Xt(new Cs(t,i,r),e);return c.position.set(s,a,o),n.add(c),c}function os(n,e,t,i,r,s,a,o,c=8){const l=new Xt(new Uo(t,i,r,c),e);return l.position.set(s,a,o),n.add(l),l}function cy(n){const e=new $i,t=new $i;e.add(t);const i=ni(n==="cyan"?5664361:7103060),r=ni(n==="cyan"?9086107:10259317),s=n==="cyan"?bt.cyan:bt.orange,a=new Xt(new tr(1,10,8),i);a.scale.set(1.1,.67,2.55),t.add(a);const o=new Xt(new tr(1,10,8),bt.glass);o.scale.set(.72,.42,1.05),o.position.set(0,.37,-.82),t.add(o),Wt(t,r,1.32,.13,.07,0,.43,-.84),Wt(t,i,.36,.4,4.1,0,.15,3),Wt(t,i,.2,1.03,1.35,0,.54,4.64),Wt(t,i,1.75,.11,.65,0,.77,4.65);const c=new $i;c.position.set(.22,.55,4.67),c.rotation.z=Math.PI/2,c.add(Wt(c,bt.dark,.1,1.35,.09)),c.add(Wt(c,bt.dark,.1,.09,1.35)),t.add(c);const l=new $i;l.position.set(0,1.16,-.25),os(t,bt.dark,.14,.18,.65,0,.87,-.25),os(l,bt.dark,.46,.46,.14,0,0,0);for(let h=0;h<4;h++){const g=Wt(l,bt.dark,.26,.042,4.8,0,.05,-2.45);g.rotation.y=h*Math.PI/2,g.position.set(Math.sin(h*Math.PI/2)*2.45,.05,-Math.cos(h*Math.PI/2)*2.45)}t.add(l);for(const h of[-1,1]){Wt(t,i,2.5,.13,.83,h*1.38,-.15,.21),Wt(t,bt.dark,.24,.15,1.65,h*2.16,-.38,.27);for(let g=-1;g<=1;g++){const x=os(t,bt.dark,.15,.16,1.2,h*(1.76+g*.25),-.51,.28,7);x.rotation.x=Math.PI/2}Wt(t,bt.dark,.1,.6,.1,h*.7,-.77,-.1),Wt(t,bt.dark,.12,.6,.12,h*.7,-.77,1.3),Wt(t,bt.dark,.13,.13,2.45,h*.7,-1.08,.57),Wt(t,s,.14,.08,.45,h*.56,-.11,-2.23)}const u=os(t,bt.dark,.19,.21,1.25,0,-.8,-2.32,8);u.rotation.x=Math.PI/2,os(t,bt.dark,.28,.28,.23,0,-.51,-1.85);const d=new Xt(new tr(.29,8,6),bt.dark);return d.position.set(0,-.18,-2.49),t.add(d),{root:e,body:t,rotor:l,tailRotor:c}}class uy{constructor(e){this.renderer=new ny({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.7)),this.renderer.setSize(innerWidth,innerHeight),this.renderer.outputColorSpace=In,this.renderer.toneMapping=Th,this.renderer.toneMappingExposure=1.35,e.appendChild(this.renderer.domElement),this.scene=new sv,this.scene.background=new mt(9546155),this.scene.fog=new $c(9546155,.0024),this.camera=new Gn(72,innerWidth/innerHeight,.1,650),this.scene.add(new mv(14806766,3490122,2.1));const t=new vv(16768947,2.3);t.position.set(-80,130,50),this.scene.add(t),this.playerMeshes=new Map,this.missileMeshes=new Map,this.effects=[],this.cameraTarget=new $(0,40,0),this.buildWorld(),window.addEventListener("resize",()=>this.resize())}resize(){this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(innerWidth,innerHeight)}buildWorld(){const e=new Xt(new ys(410,410),bt.ground);e.rotation.x=-Math.PI/2,e.position.y=-.12,this.scene.add(e);for(let c=-4;c<4;c++){const l=c*42+21,u=Wt(this.scene,bt.road,13,.04,390,l,0,0),d=Wt(this.scene,bt.road,390,.04,13,0,0,l);u.receiveShadow=d.receiveShadow=!1;for(let h=-4;h<5;h++)Wt(this.scene,bt.roadLine,.25,.045,6,l,.04,h*42),Wt(this.scene,bt.roadLine,6,.045,.25,h*42,.04,l)}const t=new ys(1.6,2.25),i=[];for(const c of Fo){Wt(this.scene,bt.building[c.style],c.w,c.h,c.d,c.x,c.h/2,c.z),Wt(this.scene,bt.roof,c.w+.8,.45,c.d+.8,c.x,c.h+.2,c.z),c.roof>.68&&(Wt(this.scene,bt.dark,5,2.5,5,c.x-3,c.h+1.5,c.z+2),os(this.scene,bt.dark,.12,.12,8,c.x+4,c.h+4,c.z-4));const l=Math.floor((c.h-8)/8);for(let u=0;u<l;u++){const d=5+u*8;for(let h=-1;h<=1;h++)(u+h+c.style)%4!==0&&(i.push([c.x+h*5,d,c.z+c.d/2+.014,0]),i.push([c.x-h*5,d,c.z-c.d/2-.014,Math.PI]),i.push([c.x+c.w/2+.014,d,c.z+h*5,Math.PI/2]),i.push([c.x-c.w/2-.014,d,c.z-h*5,-Math.PI/2]))}}const r=new lv(t,bt.window,i.length),s=new jt;i.forEach(([c,l,u,d],h)=>{s.position.set(c,l,u),s.rotation.set(0,d,0),s.updateMatrix(),r.setMatrixAt(h,s.matrix)}),r.instanceMatrix.needsUpdate=!0,this.scene.add(r);const a=new Xt(new Uo(14,14,.25,24),bt.roof);a.position.set(0,.14,0),this.scene.add(a);const o=new Xt(new Qc(10.6,11.2,48),bt.cyan);o.rotation.x=-Math.PI/2,o.position.y=.29,this.scene.add(o),Wt(this.scene,bt.cyan,1.2,.04,12,0,.31,0),Wt(this.scene,bt.cyan,7,.04,1.2,0,.31,0)}ensurePlayer(e){let t=this.playerMeshes.get(e.id);return t||(t=cy(e.slot===0?"cyan":"orange"),t.root.position.set(e.x,e.y,e.z),t.root.quaternion.fromArray(e.q),this.playerMeshes.set(e.id,t),this.scene.add(t.root)),t}setPlayers(e,t,i,r){const s=new Set(e.map(a=>a.id));for(const[a,o]of this.playerMeshes)s.has(a)||(this.scene.remove(o.root),this.playerMeshes.delete(a));for(const a of e){const o=this.ensurePlayer(a);o.root.position.lerp(new $(a.x,a.y,a.z),Math.min(1,i*13)),o.root.quaternion.slerp(new Ui().fromArray(a.q),Math.min(1,i*13)),o.rotor.rotation.y+=Ms.rotorSpeed*i,o.tailRotor.rotation.y+=Ms.rotorSpeed*1.6*i,o.root.visible=a.id!==t?.id||!r}if(t){const a=this.playerMeshes.get(t.id)?.root,o=a?.position||new $(t.x,t.y,t.z),c=a?.quaternion||new Ui().fromArray(t.q),l=new $(0,0,-1).applyQuaternion(c),u=new $(0,1,0).applyQuaternion(c),d=r?o.clone().addScaledVector(l,2.5).addScaledVector(u,.58):o.clone().addScaledVector(l,-18).add(new $(0,6.5,0));if(!r){const g=d.clone().sub(o),x=g.length();g.normalize();const S=nf({x:o.x,y:o.y,z:o.z},{x:g.x,y:g.y,z:g.z},x);S<x&&d.copy(o).addScaledVector(g,Math.max(3.5,S-1))}this.camera.position.lerp(d,Math.min(1,i*(r?17:7)));const h=o.clone().addScaledVector(l,30);this.cameraTarget.lerp(h,Math.min(1,i*12)),this.camera.up.copy(r?u:new $(0,1,0)),this.camera.lookAt(this.cameraTarget),this.camera.fov+=((r?58:72)-this.camera.fov)*Math.min(1,i*8),this.camera.updateProjectionMatrix(),this.camera.updateMatrixWorld()}}reticlePosition(e,t,i){const r=this.playerMeshes.get(e.id)?.root,s=r?{x:r.position.x,y:r.position.y,z:r.position.z,q:r.quaternion}:e,a=t&&this.playerMeshes.get(t.id)?.root,o=a?{...t,x:a.position.x,y:a.position.y,z:a.position.z}:t,c=ly(s,o).end.project(this.camera);if(c.z<-1||c.z>1)return this.reticleCurrent=null,null;const l=(c.x+1)*this.renderer.domElement.clientWidth/2,u=(1-c.y)*this.renderer.domElement.clientHeight/2;if(this.reticleOwner!==e.id||!this.reticleCurrent)this.reticleOwner=e.id,this.reticleCurrent={x:l,y:u};else{const d=1-Math.exp(-Math.max(0,i)*22);this.reticleCurrent.x+=(l-this.reticleCurrent.x)*d,this.reticleCurrent.y+=(u-this.reticleCurrent.y)*d}return this.reticleCurrent}setProjectiles(e){const t=new Set;for(const i of e){t.add(i.id);let r=this.missileMeshes.get(i.id);r||(r=new Xt(new tr(i.kind==="lock"?.62:.48,6,4),new Ni({color:i.kind==="lock"?16746060:16503178})),this.missileMeshes.set(i.id,r),this.scene.add(r)),r.position.set(i.x,i.y,i.z)}for(const[i,r]of this.missileMeshes)t.has(i)||(this.scene.remove(r),r.geometry.dispose(),r.material.dispose(),this.missileMeshes.delete(i))}event(e){if(e.type==="shot"){const t=new $(e.from.x,e.from.y,e.from.z),i=new $(e.to.x,e.to.y,e.to.z),r=new hv(new zn().setFromPoints([t,i]),new Xh({color:e.hit?16764552:15984050,transparent:!0,opacity:.9}));this.scene.add(r),this.effects.push({mesh:r,life:.105,total:.105})}else if(e.type==="explosion"||e.type==="destroyed"){let t=e;if(e.type==="destroyed"&&(t=this.playerMeshes.get(e.target)?.root.position),!t)return;const i=new Xt(new tr(1,10,8),new Ni({color:16751957,transparent:!0,opacity:.8,depthWrite:!1}));i.position.set(t.x,t.y,t.z),this.scene.add(i),this.effects.push({mesh:i,life:.5,total:.5,grow:e.type==="destroyed"?13:7})}else if(e.type==="flare"){const t=this.playerMeshes.get(e.owner)?.root.position;if(!t)return;for(let i=0;i<8;i++){const r=new Xt(new tr(.36,5,4),new Ni({color:16769436,transparent:!0,opacity:1}));r.position.copy(t),this.scene.add(r),this.effects.push({mesh:r,life:1.15,total:1.15,velocity:new $(Math.cos(i*Math.PI/4)*8,-5-i%3,Math.sin(i*Math.PI/4)*8)})}}}render(e,t=!1){if(t){const i=performance.now()*16e-5;this.camera.position.set(Math.cos(i)*110,92,Math.sin(i)*110),this.camera.up.set(0,1,0),this.camera.lookAt(0,39,0)}for(let i=this.effects.length-1;i>=0;i--){const r=this.effects[i];r.life-=e,r.velocity&&r.mesh.position.addScaledVector(r.velocity,e),r.grow&&r.mesh.scale.setScalar(1+(1-r.life/r.total)*r.grow),r.mesh.material.opacity=Math.max(0,r.life/r.total),r.life<=0&&(this.scene.remove(r.mesh),r.mesh.geometry.dispose(),r.mesh.material.dispose(),this.effects.splice(i,1))}this.renderer.render(this.scene,this.camera)}}function dy(n){return{throttle:Number(n.has("KeyW"))-Number(n.has("KeyS")),roll:Number(n.has("KeyQ"))-Number(n.has("KeyE")),yawAxis:Number(n.has("KeyD"))-Number(n.has("KeyA")),pitchAxis:Number(n.has("ShiftLeft"))-Number(n.has("ControlLeft"))}}function hy(n,e,t){const i=Math.max(-120,Math.min(120,n)),r=Math.max(-120,Math.min(120,e));return{yaw:i*t,pitch:-r*t}}function sf(n){const e=Number(n);return Number.isFinite(e)?Math.round(Math.max(.2,Math.min(3,e))*10)/10:1}const fy=document.querySelector("#app");fy.innerHTML=`
  <div id="world"></div>
  <div class="vignette"></div>
  <div class="topbar"><div class="brand"><span class="brand-mark">H<span>1</span></span><span>HELI <b>1V1</b></span></div><div class="topbar-right"><span class="live-dot"></span><span id="connection">LOCAL PREVIEW</span><button id="settings-toggle" class="icon-button" title="操作設定" aria-label="操作設定">⚙</button><button id="sound-toggle" class="icon-button" title="サウンドの切り替え">♪</button></div></div>
  <div id="menu" class="menu-shell">
    <div class="menu-main">
      <div class="eyebrow"><span></span> TACTICAL AIR COMBAT / 01</div>
      <h1>OWN THE<br /><em>SKY.</em></h1>
      <p class="lead">ビル群の間を縫い、敵機を捕捉せよ。<br />友達と一騎打ちする、3本先取の空中戦。</p>
      <div class="feature-row"><span>01 <b>1 VS 1</b></span><span>02 <b>FIRST TO 3</b></span><span>03 <b>URBAN ARENA</b></span></div>
      <div class="deploy-card">
        <label for="room-code">ルームコード <small id="room-hint">友達と同じコードを入力</small></label>
        <div class="room-line"><input id="room-code" maxlength="20" autocomplete="off" spellcheck="false" /><button id="copy-room" title="招待リンクをコピー">リンクをコピー ↗</button></div>
        <div class="deploy-actions"><button id="deploy" class="primary-button">フレンドと出撃 <span>→</span></button><button id="practice" class="secondary-button">ソロ練習</button></div>
      </div>
    </div>
    <aside class="briefing"><div class="brief-head"><span>MISSION BRIEF</span><span>01 / 03</span></div><div class="brief-rule"></div><div class="brief-art"><div class="target-ring"></div><div class="target-ring ring-two"></div><div class="cross-line horizontal"></div><div class="cross-line vertical"></div><div class="art-label">AH-64<br />INSPIRED</div></div><div class="brief-list"><div><span>01</span><p><b>街を使って姿を隠す</b><small>ビルとビルの隙間が射線を切る。</small></p></div><div><span>02</span><p><b>機銃で削り切る</b><small>約30発の命中で敵機を撃墜。</small></p></div><div><span>03</span><p><b>アビリティで逆転</b><small>フレアと2種類のミサイルを使い分ける。</small></p></div></div><div class="brief-footer">DESIGNED FOR DISCORD ACTIVITIES</div></aside>
  </div>
  <div id="waiting" class="modal-backdrop hidden"><div class="modal"><div class="eyebrow"><span></span> HANGAR / READY</div><h2>僚機の到着待ち</h2><p>友達が同じDiscordアクティビティ、または下のルームコードで参加すると自動的に始まります。</p><div class="waiting-code" id="waiting-code"></div><button id="leave-room" class="secondary-button">メニューに戻る</button></div></div>
  <div id="settings-modal" class="modal-backdrop hidden" role="dialog" aria-modal="true" aria-labelledby="settings-title"><div class="modal settings-modal"><div class="eyebrow"><span></span> FLIGHT CONTROLS</div><h2 id="settings-title">操作設定</h2><label for="sensitivity-range">マウス操作感度</label><div class="sensitivity-row"><input id="sensitivity-range" type="range" min="0.2" max="3" step="0.1" value="1" /><input id="sensitivity-number" type="number" min="0.2" max="3" step="0.1" value="1.0" aria-label="マウス操作感度の数値" /><span>×</span></div><p>0.2～3.0 倍。ヨーとピッチの最高旋回速度はキー操作と同じです。</p><button id="settings-close" class="secondary-button">閉じる</button></div></div>
  <div id="hud" class="hud hidden">
    <div class="scoreboard"><div class="score-side friendly"><small>YOU / BLUE</small><div id="self-wins" class="win-pips"></div></div><div class="score-center"><span>ROUND <b id="round-number">01</b></span><strong>VS</strong></div><div class="score-side enemy"><small>OPPONENT / ORANGE</small><div id="enemy-wins" class="win-pips"></div></div></div>
    <div class="flight-info"><span id="flight-speed">000</span><small>KM/H</small><i></i><span id="flight-alt">000</span><small>ALT</small></div>
    <div id="enemy-indicator" class="enemy-indicator">▲ ENEMY <span id="enemy-distance">---</span>M</div>
    <div id="crosshair" class="crosshair"><div class="ch top"></div><div class="ch bottom"></div><div class="ch left"></div><div class="ch right"></div><div class="ch-dot"></div><div id="hitmarker" class="hitmarker">×</div></div>
    <div id="cockpit" class="cockpit hidden"><div class="cockpit-arch"></div><div class="cockpit-l">FLIGHT SYSTEM<br />ONLINE</div><div class="cockpit-r">TADS / LIVE<br />30 MM ARMED</div></div>
    <div id="center-message" class="center-message hidden"><small id="message-kicker">ROUND COMPLETE</small><strong id="message-title">VICTORY</strong><span id="message-subtitle">次のラウンドへ</span><button id="rematch" class="primary-button hidden">もう一度対戦 →</button></div>
    <div class="hud-bottom"><div class="health-panel"><div class="hud-label">HULL INTEGRITY <span id="health-text">100%</span></div><div class="health-track"><div id="health-fill"></div></div><div class="health-caption"><span>HELI 1V1 // COMBAT READY</span><span>SHARED HEALTH POOL</span></div></div><div class="ammo-panel"><div class="hud-label">M134 MINIGUN <span id="reload-text"></span></div><div class="ammo-numbers"><strong id="ammo-count">100</strong><span>/ 100 <small>∞ RESERVE</small></span></div><div class="ammo-caption">LMB FIRE <span>R RELOAD</span></div></div><div class="ability-panel"><div class="ability" id="ability-flare"><kbd>F</kbd><div><b>FLARE</b><small>誘導妨害</small></div><span class="ability-time">READY</span></div><div class="ability" id="ability-unguided"><kbd>1</kbd><div><b>ROCKET</b><small>無誘導</small></div><span class="ability-time">READY</span></div><div class="ability" id="ability-lock"><kbd>2</kbd><div><b>SEEKER</b><small>ロックオン</small></div><span class="ability-time">READY</span></div></div></div>
    <div class="minimap-wrap"><div class="map-heading"><span>TACTICAL MAP</span><span>N ↑</span></div><canvas id="minimap" width="184" height="184"></canvas></div>
    <div class="controls-hint">W / S スロットル　Q / E ロール　A / D ヨー　左SHIFT 上げ / 左CTRL 下げ　MOUSE 縦ピッチ・横ヨー　LMB 機銃　RMB コックピット</div>
    <div id="lock-notice" class="lock-notice hidden">クリックでマウス操縦 / ESCで解除</div>
  </div>
  <div id="toast" class="toast hidden"></div>
`;const De=n=>document.querySelector(n),ji=new uy(De("#world")),py=new URLSearchParams(location.search),my=py.get("room")||Math.random().toString(36).slice(2,8).toUpperCase();De("#room-code").value=my;const gy="1552853971285319816";let mo=null,ea=null;if(window.parent!==window)try{mo=new Hg(gy),mo.ready().then(()=>{ea=`discord-${mo.instanceId}`,De("#room-code").value="DISCORD SESSION",De("#room-code").disabled=!0,De("#room-hint").textContent="同じアクティビティに参加",De("#copy-room").classList.add("hidden"),De("#connection").textContent="DISCORD CONNECTED"}).catch(()=>Ln("Discordへの接続に失敗しました"))}catch{Ln("Discord SDKを開始できませんでした")}let Rn=null,Dn=null,Cr=[],Nc=[],$n="menu",af=1,nr=!1,Ts=!1,hr=!1,bs=0,As=0,Id=performance.now(),Dd=0,of=0,Lc=0,Js=!1,ur=!1,Ji=1;try{const n=localStorage.getItem("heli1v1.mouseSensitivity");n!==null&&(Ji=sf(n))}catch{}De("#sensitivity-range").value=String(Ji);De("#sensitivity-number").value=Ji.toFixed(1);const Oi=new Set,Ir=new Set,_y=iy.map((n,e)=>({...n,id:`preview-${e}`,slot:e,q:sy(n.yaw).toArray()}));function Ln(n){const e=De("#toast");e.textContent=n,e.classList.remove("hidden"),clearTimeout(Ln.timer),Ln.timer=setTimeout(()=>e.classList.add("hidden"),3e3)}function Ii(n){$n=n,["menu","waiting","matchEnd"].includes(n)&&(hr=!1,document.pointerLockElement&&document.exitPointerLock?.()),De("#menu").classList.toggle("hidden",n!=="menu"),De("#waiting").classList.toggle("hidden",n!=="waiting"),De("#hud").classList.toggle("hidden",n==="menu"||n==="waiting"),n==="waiting"&&(De("#waiting-code").textContent=ea?"DISCORD ACTIVITY":De("#room-code").value)}function tu(n=!1){if(mo&&!ea)return Ln("Discord接続の準備中です");const e=n?`practice-${Math.random().toString(36).slice(2)}`:ea||De("#room-code").value.trim().toUpperCase();if(!e)return Ln("ルームコードを入力してください");Rn&&Rn.close(),Ii("waiting");const t=location.protocol==="https:"?"wss:":"ws:";Rn=new WebSocket(`${t}//${location.host}/ws`),Rn.addEventListener("open",()=>{De("#connection").textContent=ea?"DISCORD LINK ACTIVE":"SERVER LINK ACTIVE",Rn.send(JSON.stringify({type:"join",room:e,practice:n}))}),Rn.addEventListener("message",i=>{let r;try{r=JSON.parse(i.data)}catch{return}vy(r)}),Rn.addEventListener("close",()=>{$n!=="menu"&&(Ii("menu"),Ln("サーバーとの接続が切れました")),Dn=null,Cr=[],Nc=[],De("#connection").textContent="OFFLINE"}),Rn.addEventListener("error",()=>Ln("接続できません。サーバーを起動してください"))}function vy(n){if(n.type==="error"){Ln(n.message),Rn?.close();return}if(n.type==="joined")Dn=n.id;else if(n.type==="state"){Cr=n.players,Nc=n.projectiles,af=n.round,n.phase==="waiting"?Ii("waiting"):$n==="waiting"&&(Ii("playing"),lo("ENGAGE","敵機を撃墜せよ","ROUND START",1.6));for(const e of n.events)ji.event(e),e.type==="damage"&&e.target===Dn&&Pl(115,.13,"sawtooth",.07),e.type==="shot"&&e.owner===Dn&&Pl(90,.035,"sawtooth",.022),e.type==="shot"&&e.hit&&e.owner===Dn&&(of=performance.now()+130),(e.type==="explosion"||e.type==="destroyed")&&Pl(55,.28,"sawtooth",.09);ji.setProjectiles(Nc),Ey()}else n.type==="roundStart"?(Ii("playing"),lo("ENGAGE","敵機を撃墜せよ",`ROUND ${String(n.round).padStart(2,"0")}`,1.7)):n.type==="roundEnd"?(Ii("roundEnd"),lo(n.winner===Dn?"ROUND WON":"ROUND LOST","次のラウンドまで 3 秒","ROUND COMPLETE",3.2)):n.type==="matchEnd"?(Ii("matchEnd"),lo(n.winner===Dn?"VICTORY":"DEFEAT",n.winner===Dn?"空を制した":"再戦で取り返そう","MATCH COMPLETE",1/0),De("#rematch").classList.remove("hidden")):n.type==="opponentLeft"&&(Ii("waiting"),Ln("相手が退出しました"))}function lo(n,e,t,i){De("#message-title").textContent=n,De("#message-subtitle").textContent=e,De("#message-kicker").textContent=t,De("#center-message").classList.remove("hidden"),De("#rematch").classList.toggle("hidden",i!==1/0),Lc=i===1/0?1/0:performance.now()+i*1e3}function Nd(n,e=!1){return Array.from({length:Ms.winsToMatch},(t,i)=>`<i class="${i<n?e?"on enemy-on":"on":""}"></i>`).join("")}function Ey(){const n=Cr.find(t=>t.id===Dn),e=Cr.find(t=>t.id!==Dn);if(n){De("#round-number").textContent=String(af).padStart(2,"0"),De("#self-wins").innerHTML=Nd(n.wins),De("#enemy-wins").innerHTML=Nd(e?.wins||0,!0),De("#health-text").textContent=`${Math.ceil(n.health)}%`,De("#health-fill").style.width=`${n.health}%`,De("#health-fill").classList.toggle("danger",n.health<30),De("#ammo-count").textContent=String(n.ammo).padStart(3,"0"),De("#reload-text").textContent=n.reload>0?`RELOADING ${n.reload.toFixed(1)}S`:"",De("#flight-speed").textContent=String(Math.round(Math.hypot(n.vx,n.vz)*3.6)).padStart(3,"0"),De("#flight-alt").textContent=String(Math.round(n.y)).padStart(3,"0");for(const[t,i]of[["flare",n.flare],["unguided",n.unguided],["lock",n.lock]]){const r=De(`#ability-${t}`);r.classList.toggle("cooling",i>0),r.querySelector(".ability-time").textContent=i>0?`${i.toFixed(1)}S`:"READY"}De("#ability-lock").classList.toggle("locking",n.lockProgress>.05&&n.lock===0),De("#ability-lock .ability-time").textContent=n.lock>0?`${n.lock.toFixed(1)}S`:n.lockProgress>=1?"LOCKED":n.lockProgress>.05?`${Math.round(n.lockProgress*100)}%`:"READY",e&&(De("#enemy-distance").textContent=String(Math.round(Math.hypot(e.x-n.x,e.y-n.y,e.z-n.z))).padStart(3,"0"),De("#enemy-indicator").classList.toggle("hidden",e.health<=0)),xy(n,e)}}function xy(n,e){const t=De("#minimap"),i=t.getContext("2d"),r=a=>(a+190)/380*t.width;i.fillStyle="#101d26",i.fillRect(0,0,184,184),i.strokeStyle="#273c46",i.lineWidth=1;for(let a=0;a<=4;a++){const o=a*46;i.beginPath(),i.moveTo(o,0),i.lineTo(o,184),i.stroke(),i.beginPath(),i.moveTo(0,o),i.lineTo(184,o),i.stroke()}i.fillStyle="#425560";for(const a of Fo)i.fillRect(r(a.x-a.w/2),r(a.z-a.d/2),a.w/380*184,a.d/380*184);e&&e.health>0&&(i.fillStyle="#ff8766",i.beginPath(),i.arc(r(e.x),r(e.z),4.5,0,Math.PI*2),i.fill());const s=ay(n);i.save(),i.translate(r(n.x),r(n.z)),i.rotate(Math.atan2(s.x,-s.z)),i.fillStyle="#8aebea",i.beginPath(),i.moveTo(0,-8),i.lineTo(-5,6),i.lineTo(5,6),i.closePath(),i.fill(),i.restore()}function Sy(n){if(n<Dd||Rn?.readyState!==WebSocket.OPEN||!Dn)return;Dd=n+33;const t=$n==="playing"&&!ur?{...dy(Oi),mouseYaw:bs,mousePitch:As,fire:Oi.has("Mouse0"),flare:Ir.has("KeyF"),unguided:Ir.has("Digit1"),lock:Ir.has("Digit2"),reload:Ir.has("KeyR")}:{};Rn.send(JSON.stringify({type:"input",input:t})),bs=0,As=0,Ir.clear()}function lf(n){requestAnimationFrame(lf);const e=Math.min(.05,Math.max(0,(n-Id)/1e3));if(Id=n,$n==="menu"||$n==="waiting")ji.setPlayers(_y,null,e,!1),ji.render(e,!0);else{const t=Cr.find(i=>i.id===Dn);if(ji.setPlayers(Cr,t,e,nr),t){const i=Cr.find(s=>s.id!==Dn),r=ji.reticlePosition(t,i,e);De("#crosshair").style.left=r?`${r.x}px`:"-100px",De("#crosshair").style.top=r?`${r.y}px`:"-100px"}ji.render(e)}De("#cockpit").classList.toggle("hidden",!nr||$n!=="playing"),De("#crosshair").classList.toggle("ads",nr),De("#hitmarker").classList.toggle("visible",n<of),De("#lock-notice").classList.toggle("hidden",Ts||hr||$n!=="playing"||ur),n>Lc&&Lc!==1/0&&De("#center-message").classList.add("hidden"),Sy(n)}requestAnimationFrame(lf);De("#deploy").addEventListener("click",()=>tu(!1));De("#practice").addEventListener("click",()=>tu(!0));De("#leave-room").addEventListener("click",()=>{Rn?.close(),Ii("menu")});De("#rematch").addEventListener("click",()=>Rn?.send(JSON.stringify({type:"rematch"})));De("#copy-room").addEventListener("click",async()=>{const n=De("#room-code").value.trim().toUpperCase(),e=new URL(location.href);e.searchParams.set("room",n);try{await navigator.clipboard.writeText(e.href),Ln("招待リンクをコピーしました")}catch{Ln(`ルームコード: ${n}`)}});De("#sound-toggle").addEventListener("click",()=>{Js=!Js,De("#sound-toggle").classList.toggle("muted",Js),Ln(Js?"サウンド OFF":"サウンド ON")});function Bo(n){ur=n,De("#settings-modal").classList.toggle("hidden",!n),De("#settings-toggle").setAttribute("aria-expanded",String(n)),n?(Oi.clear(),Ir.clear(),bs=0,As=0,nr=!1,hr=!1,document.pointerLockElement&&document.exitPointerLock?.(),De("#sensitivity-range").focus()):De("#settings-toggle").focus()}function nu(n,e=!0){Ji=sf(n),De("#sensitivity-range").value=String(Ji),e&&(De("#sensitivity-number").value=Ji.toFixed(1));try{localStorage.setItem("heli1v1.mouseSensitivity",String(Ji))}catch{}}De("#settings-toggle").addEventListener("click",()=>Bo(!ur));De("#settings-close").addEventListener("click",()=>Bo(!1));De("#settings-modal").addEventListener("mousedown",n=>{n.target===De("#settings-modal")&&Bo(!1)});De("#sensitivity-range").addEventListener("input",n=>nu(n.target.value));De("#sensitivity-number").addEventListener("input",n=>{n.target.value!==""&&nu(n.target.value,!1)});De("#sensitivity-number").addEventListener("change",n=>nu(n.target.value));De("#room-code").addEventListener("keydown",n=>{n.key==="Enter"&&tu(!1)});const Io=ji.renderer.domElement;Io.addEventListener("mousedown",n=>{if(!($n!=="playing"||ur)){if(hr=!0,!Ts)try{Io.requestPointerLock?.()?.catch?.(()=>{})}catch{}n.button===0&&Oi.add("Mouse0"),n.button===2&&(nr=!0)}});window.addEventListener("mouseup",n=>{n.button===0&&Oi.delete("Mouse0"),n.button===2&&(nr=!1)});window.addEventListener("contextmenu",n=>n.preventDefault());document.addEventListener("pointerlockchange",()=>{Ts=document.pointerLockElement===Io,Ts||(Oi.clear(),bs=0,As=0,nr=!1,hr=!1)});document.addEventListener("mousemove",n=>{if($n!=="playing"||ur||!Ts&&(!hr||n.target!==Io))return;const{yaw:e,pitch:t}=hy(n.movementX,n.movementY,Ms.mouseSensitivity*Ji);bs+=e,As+=t});window.addEventListener("keydown",n=>{if(n.code==="Escape"&&ur){Bo(!1);return}ur||n.target instanceof HTMLInputElement||(n.code==="Escape"&&!Ts&&(hr=!1),$n==="playing"&&["KeyW","KeyS","KeyQ","KeyE","KeyA","KeyD","ShiftLeft","ControlLeft","KeyF","Digit1","Digit2","KeyR"].includes(n.code)&&n.preventDefault(),Oi.add(n.code),!n.repeat&&["KeyF","Digit1","Digit2","KeyR"].includes(n.code)&&Ir.add(n.code))});window.addEventListener("keyup",n=>Oi.delete(n.code));window.addEventListener("blur",()=>{Oi.clear(),bs=0,As=0,nr=!1,hr=!1});let Ti;function Pl(n,e,t,i){if(!Js)try{Ti||=new AudioContext;const r=Ti.createOscillator(),s=Ti.createGain();r.type=t,r.frequency.setValueAtTime(n,Ti.currentTime),r.frequency.exponentialRampToValueAtTime(Math.max(35,n*.45),Ti.currentTime+e),s.gain.setValueAtTime(i,Ti.currentTime),s.gain.exponentialRampToValueAtTime(.001,Ti.currentTime+e),r.connect(s).connect(Ti.destination),r.start(),r.stop(Ti.currentTime+e)}catch{}}
