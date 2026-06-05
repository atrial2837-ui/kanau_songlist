var Yn=Object.defineProperty;var g=(t,e)=>()=>(t&&(e=t(t=0)),e);var U=(t,e)=>{for(var n in e)Yn(t,n,{get:e[n],enumerable:!0})};function Ht(t){for(let e of Jn)e(t)}function Kt(){let t=new URLSearchParams(window.location.search),e=t.get("tab"),n=t.get("ch");return{tab:Wn.has(e)?e:"dashboard",channel:Zn.has(n)?n:"new",q:t.get("q")||""}}function Xn(t={},e={}){let n={...Kt(),...t},s=new URLSearchParams;n.tab!=="dashboard"&&s.set("tab",n.tab),n.channel!=="new"&&s.set("ch",n.channel),n.q&&s.set("q",n.q);let a=s.toString(),r=a?`${window.location.pathname}?${a}`:window.location.pathname,l=e.replace?"replaceState":"pushState";return window.history[l](null,"",r),n}function Te(){let t=Kt(),e=!1;return t.tab!==M.tab&&(f.activeTab=t.tab,e=!0),t.channel!==M.channel&&(f.channel=t.channel,e=!0),t.q!==M.q&&(f.songsQuery=t.q,e=!0),M=t,e}function es(t){let e={};t.includes("tab")&&(e.tab=f.activeTab),t.includes("channel")&&(e.channel=f.channel),t.includes("q")&&(e.q=f.songsQuery),Object.keys(e).length>0&&(Xn(e,{replace:!0}),M={...M,...e})}function v(t){if(t==="activeTab")return f.activeTab;if(t==="channel")return f.channel;if(t==="songsQuery")return f.songsQuery;if(t==="channelData")return f.channelData;if(t==="data")return f.data;if(t==="audience")return f.audience;if(t==="singerMode")return f.singerMode;if(t==="singerPreset")return f.singerPreset;if(t==="timelineLimit")return f.timelineLimit;if(t==="timelineFilter")return f.timelineFilter;if(t==="timelineFocus")return f.timelineFocus;if(t==="timelineSort")return f.timelineSort;if(t==="songsSort")return f.songsSort;if(t==="songsLimit")return f.songsLimit;if(t==="songsFilter")return f.songsFilter;if(t==="songsGenre")return f.songsGenre;if(t==="songsSeason")return f.songsSeason;if(t==="songsView")return f.songsView;if(t==="setlist")return f.setlist;if(t==="setlistExpanded")return f.setlistExpanded;if(t==="rankingLimit")return f.rankingLimit;if(t==="fullLoaded")return f.fullLoaded}function b(t,e,n={}){let s=v(t);if(t==="activeTab")f.activeTab=e;else if(t==="channel")f.channel=e;else if(t==="songsQuery")f.songsQuery=e;else if(t==="channelData")f.channelData=e;else if(t==="data")f.data=e;else if(t==="audience")f.audience=e;else if(t==="singerMode")f.singerMode=e;else if(t==="singerPreset")f.singerPreset=e;else if(t==="timelineLimit")f.timelineLimit=e;else if(t==="timelineFilter")f.timelineFilter=e;else if(t==="timelineFocus")f.timelineFocus=e;else if(t==="timelineSort")f.timelineSort=e;else if(t==="songsSort")f.songsSort=e;else if(t==="songsLimit")f.songsLimit=e;else if(t==="songsFilter")f.songsFilter=e;else if(t==="songsGenre")f.songsGenre=e;else if(t==="songsSeason")f.songsSeason=e;else if(t==="songsView")f.songsView=e;else if(t==="setlist")f.setlist=e;else if(t==="setlistExpanded")f.setlistExpanded=e;else if(t==="rankingLimit")f.rankingLimit=e;else if(t==="fullLoaded")f.fullLoaded=e;else return;if(s!==e&&(Ht({key:t,prev:s,next:e}),n.updateUrl!==!1)){let a=[];t==="activeTab"&&a.push("tab"),t==="channel"&&a.push("channel"),t==="songsQuery"&&a.push("q"),a.length>0&&es(a)}}function De(){Te()&&Ht({key:"url-sync",prev:null,next:M}),window.addEventListener("popstate",()=>{Te()&&Ht({key:"url-sync",prev:null,next:M})})}function Q(){let t=new Date;return t.setHours(0,0,0,0),t}var Wn,Zn,Jn,ts,M,f,i,C=g(()=>{Wn=new Set(["dashboard","ranking","songs","timeline","analytics"]),Zn=new Set(["new","old","all"]),Jn=new Set;ts={audience:"listener",timelineLimit:12,timelineFilter:null,timelineFocus:null,timelineSort:"date-desc",songsQuery:"",songsSort:"count-desc",songsLimit:100,songsFilter:"all",songsGenre:"all",songsSeason:"all",songsView:"comfortable",singerMode:!1,singerPreset:"all",setlist:{theme:"",copyFormat:"simple",items:[]},setlistExpanded:!1,rankingLimit:50,channelData:null,data:null},M=Kt(),f={...ts};i={get activeTab(){return v("activeTab")},set activeTab(t){b("activeTab",t)},get channel(){return v("channel")},set channel(t){b("channel",t)},get songsQuery(){return v("songsQuery")},set songsQuery(t){b("songsQuery",t)},get channelData(){return v("channelData")},set channelData(t){b("channelData",t)},get data(){return v("data")},set data(t){b("data",t)},get audience(){return v("audience")},set audience(t){b("audience",t)},get singerMode(){return v("singerMode")},set singerMode(t){b("singerMode",t)},get singerPreset(){return v("singerPreset")},set singerPreset(t){b("singerPreset",t)},get timelineLimit(){return v("timelineLimit")},set timelineLimit(t){b("timelineLimit",t)},get timelineFilter(){return v("timelineFilter")},set timelineFilter(t){b("timelineFilter",t)},get timelineFocus(){return v("timelineFocus")},set timelineFocus(t){b("timelineFocus",t)},get timelineSort(){return v("timelineSort")},set timelineSort(t){b("timelineSort",t)},get songsSort(){return v("songsSort")},set songsSort(t){b("songsSort",t)},get songsLimit(){return v("songsLimit")},set songsLimit(t){b("songsLimit",t)},get songsFilter(){return v("songsFilter")},set songsFilter(t){b("songsFilter",t)},get songsGenre(){return v("songsGenre")},set songsGenre(t){b("songsGenre",t)},get songsSeason(){return v("songsSeason")},set songsSeason(t){b("songsSeason",t)},get songsView(){return v("songsView")},set songsView(t){b("songsView",t)},get setlist(){return v("setlist")},set setlist(t){b("setlist",t)},get setlistExpanded(){return v("setlistExpanded")},set setlistExpanded(t){b("setlistExpanded",t)},get rankingLimit(){return v("rankingLimit")},set rankingLimit(t){b("rankingLimit",t)},get fullLoaded(){return v("fullLoaded")},set fullLoaded(t){b("fullLoaded",t)}}});var u,x,Me=g(()=>{u=(t,e=document)=>e.querySelector(t),x=(t,e=document)=>Array.from(e.querySelectorAll(t))});function y(t){return String(t??"").trim().replace(/\s+/g," ").normalize("NFKC")}function d(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Ce(t){return String(t??"").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}var T=g(()=>{});function w(t){if(!t)return null;if(t instanceof Date){if(Number.isNaN(t.getTime()))return null;let s=new Date(t.getTime());return s.setHours(0,0,0,0),s}let e=String(t).trim().match(/^(\d{4})[-/](\d{1,2})[-/](\d{1,2})/);if(!e)return null;let n=new Date(+e[1],+e[2]-1,+e[3]);return n.setHours(0,0,0,0),Number.isNaN(n.getTime())?null:n}function k(t){if(!t)return"";if(t instanceof Date)return Number.isNaN(t.getTime())?"":`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}`;let e=String(t).trim();return e?e.slice(0,7):""}function jt(t,e){if(!t)return null;let n=r=>{if(r instanceof Date){let c=new Date(r.getTime());return c.setHours(0,0,0,0),c}let l=String(r).trim(),o=new Date(`${l}T00:00:00`);return Number.isNaN(o.getTime())?null:o},s=n(t);if(!s)return null;let a=n(e);return a?Math.floor((a-s)/864e5):null}function Y(t){if(!t)return"\u2014";if(t instanceof Date)return Number.isNaN(t.getTime())?"\u2014":`${t.getFullYear()}/${String(t.getMonth()+1).padStart(2,"0")}/${String(t.getDate()).padStart(2,"0")}`;let e=w(t);return e?`${e.getFullYear()}/${String(e.getMonth()+1).padStart(2,"0")}/${String(e.getDate()).padStart(2,"0")}`:"\u2014"}function Ee(t){if(!t)return"\u2014";if(t instanceof Date)return Number.isNaN(t.getTime())?"\u2014":`${t.getFullYear()}/${String(t.getMonth()+1).padStart(2,"0")}`;let e=w(t);return e?`${e.getFullYear()}/${String(e.getMonth()+1).padStart(2,"0")}`:"\u2014"}function W(t){return t==null?"never":t<=30?"fresh":t>=180?"stale":""}var K=g(()=>{});var Ae=g(()=>{});var ut=g(()=>{T()});var qt=g(()=>{T()});var ss,za,Fe=g(()=>{T();ss=Object.freeze(["\u30AA\u30EA\u30B8\u30CA\u30EB","\u30C7\u30A3\u30BA\u30CB\u30FC","\u7AE5\u8B21\u30FB\u5531\u6B4C","K-POP","\u30A2\u30A4\u30C9\u30EB","\u30DC\u30AB\u30ED","\u30B2\u30FC\u30E0\u30FB\u30AD\u30E3\u30E9\u30BD\u30F3","\u30A2\u30CB\u30BD\u30F3","J-POP","\u672A\u5206\u985E"]),za=new Set(ss)});var Pe=g(()=>{T();qt()});var _e=g(()=>{T();ut()});function mt(t){let e=t.map((a,r)=>({...a,_originalIndex:r})).sort((a,r)=>r.count-a.count),n=null,s=0;return e.forEach((a,r)=>{n!==null&&a.count===n?a.rank=s:(a.rank=r+1,s=a.rank),n=a.count}),e.map(({_originalIndex:a,...r})=>r)}var Ot=g(()=>{});function j(t){let e=new Map;for(let n of t){let s=n.artist||"(\u4E0D\u660E)";e.has(s)||e.set(s,{artist:s,songs:[],totalCount:0,songCount:0});let a=e.get(s);a.songs.push(n),a.totalCount+=n.count,a.songCount+=1}return Array.from(e.values()).sort((n,s)=>s.totalCount-n.totalCount)}var pt=g(()=>{});var Ne=g(()=>{T();K();Ot();pt()});function Re(t){let e=`${t.title||""} ${t.artist||""}`.toLowerCase(),n=[],s=(a,r)=>{r.test(e)&&n.push(a)};return s("\u6625",/春|桜|さくら|卒業|花に亡霊|春泥棒|桜ノ雨|桜流し|チェリー/),s("\u590F",/夏|サマー|花火|海|青と夏|夏色|君と夏フェス|夏祭り|金魚花火|打上花火/),s("\u79CB",/秋|紅葉|月|十五夜|金木犀|晩餐歌/),s("\u51AC",/冬|雪|クリスマス|白い|粉雪|スノー|snow|ジングル|メリクリ|雪の華/),s("\u96E8",/雨|レイン|rain|傘|カプチーノ|rain stops/),s("\u591C",/夜|月|星|スター|midnight|ナイト|夜明け|夜に|夜もすがら|ベテルギウス/),s("\u604B\u611B",/恋|愛|好き|ラブ|love|告白|プロポーズ|ダーリン|貴方|あなた|恋人/),s("\u30A4\u30D9\u30F3\u30C8",/バレンタイン|クリスマス|ハロウィン|誕生日|birthday|ジングル|チョコ/),Array.from(new Set(n))}function He(t){let e=`${t.title||""} ${t.artist||""} ${t.genre||""}`.toLowerCase(),n=[],s=(a,r)=>{r.test(e)&&n.push(a)};return s("\u76DB\u308A\u4E0A\u304C\u308B",/ロキ|ヒバナ|チュルリラ|天使|お願い|革命|メルト|アイドル|うまぴょい|サンバ|夏色|おジャ魔女|only my railgun|internet/),s("\u3057\u3063\u3068\u308A",/雨|夜|月|花に亡霊|少女レイ|たばこ|猫|lemon|裸の心|水平線|勿忘|ベテルギウス|糸|奏|炎|雪の華/),s("\u304B\u308F\u3044\u3044",/可愛|かわいい|kawaii|恋愛サーキュレーション|白金ディスコ|だだだだ|だいしきゅー|きゅうくらりん|おじゃま虫|バレンタイン|sweets parade/),s("\u304B\u3063\u3053\u3044\u3044",/残響散歌|brave shine|i beg you|名前のない怪物|unravel|asphyxia|踊|怪物|インフェルノ|革命|ch4nge|g4l|overdose/),s("\u61D0\u304B\u3057\u3044",/secret base|butter-fly|タッチ|ムーンライト伝説|god knows|創聖|アクエリオン|ラムのラブソング|チェリー|そばかす|残酷な天使/),!n.length&&/ボカロ|アニソン|アイドル/.test(e)&&n.push(t.genre||""),Array.from(new Set(n.filter(Boolean)))}function Ke(t){let e=[];return t.displayKey&&e.push("\u30AD\u30FC\u78BA\u8A8D\u6E08\u307F"),(t.count??0)>=10&&e.push("\u5B9A\u756A"),t.daysSinceLast!=null&&t.daysSinceLast>=180&&e.push("\u4E45\u3057\u3076\u308A\u5019\u88DC"),(t.count??0)<=1&&e.push("\u30EC\u30A2"),e}function je(t){return t.lastSung?t.daysSinceLast!=null&&t.daysSinceLast<=30?"\u6700\u8FD1":t.daysSinceLast!=null&&t.daysSinceLast>=365?"\u8D85\u4E45\u3057\u3076\u308A":t.daysSinceLast!=null&&t.daysSinceLast>=180?"\u4E45\u3057\u3076\u308A":(t.count??0)<=1?"\u30EC\u30A2":(t.count??0)>=10?"\u5B9A\u756A":"\u901A\u5E38":"\u5C65\u6B74\u672A\u78BA\u8A8D"}var qe=g(()=>{});var Oe=g(()=>{K()});function Gt(t,e,n=s=>s.genreText||s.genre||"\u672A\u5206\u985E"){return!e||e==="all"?[...t]:t.filter(s=>n(s)===e)}function zt(t,e){switch(e){case"fresh":return t.filter(n=>n.daysSinceLast!=null&&n.daysSinceLast<=30);case"stale":return t.filter(n=>n.daysSinceLast!=null&&n.daysSinceLast>=180);case"never":return t.filter(n=>!n.lastSung);default:return[...t]}}function Bt(t,e){if(!e.singerMode)return[...t];let n=t.filter(s=>s.lastSung);switch(e.preset){case"keyed":return n.filter(s=>s.displayKey);case"classic":return n.filter(s=>s.count>=8);case"stale":return n.filter(s=>s.daysSinceLast>=180);case"rare":return n.filter(s=>s.count<=2);default:return n.filter(s=>s.displayKey||!e.keyPublished||s.count>=5||s.daysSinceLast>=120)}}function D(t){if(!t)return NaN;if(t instanceof Date)return t.getTime();let e=w(t);return e?e.getTime():NaN}var Z=g(()=>{T();K()});function J(t){if(t instanceof Date){let n=new Date(t.getTime());return n.setHours(0,0,0,0),n}let e=w(t);if(!e)throw new Error("Invalid today date");return e}function Vt(t){return t?t instanceof Date?t:w(t):null}function Ut(t,e,n){let s=J(n),a=k(s),r=s.getFullYear(),l=new Map;for(let o of t){let c=Vt(o.date);if(e==="month"?o.monthKey===a:c&&c.getFullYear()===r)for(let p of o.songs||[])l.has(p.key)||l.set(p.key,{...p,count:0}),l.get(p.key).count+=1}return Array.from(l.values()).sort((o,c)=>c.count-o.count||o.title.localeCompare(c.title,"ja"))}function Ge(t,e){let n=k(J(e));return t.filter(s=>s.monthKey===n).length}function ze(t,e){let n=k(J(e));return t.filter(s=>s.monthKey===n).reduce((s,a)=>s+(a.songs?.length||0),0)}function Be(t,e){let n=k(J(e));return t.filter(s=>s.firstSung&&k(s.firstSung)===n).length}function Qt(t){let e=new Map;for(let l of t){let o=Vt(l.date);if(!o)continue;e.has(l.monthKey)||e.set(l.monthKey,{key:l.monthKey,date:new Date(o.getFullYear(),o.getMonth(),1),streams:0,songs:0});let c=e.get(l.monthKey);c.streams+=1,c.songs+=l.songs?.length||0}let n=Array.from(e.values()).sort((l,o)=>l.date-o.date);if(!n.length)return[];let s=[],a=new Date(n[0].date),r=new Date(n[n.length-1].date);for(;a<=r;){let l=k(a);s.push(e.get(l)||{key:l,date:new Date(a),streams:0,songs:0}),a.setMonth(a.getMonth()+1)}return s}function ft(t){return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}function Yt(t,e){let n=J(e),s=new Date(n);s.setDate(s.getDate()-364);let a=new Map;for(let c of t){let m=Vt(c.date);if(!m||m<s||m>n)continue;let p=ft(m);a.set(p,(a.get(p)||0)+(c.songs?.length||0))}let r=[],l=s.getDay(),o=new Date(s);o.setDate(o.getDate()-l);for(let c=0;c<371;c++){let m=o>=s&&o<=n;r.push({date:new Date(o),value:m?a.get(ft(o))||0:-1,inRange:m,iso:ft(o)}),o.setDate(o.getDate()+1)}return r}var Wt=g(()=>{K();Z()});function Ve(t,e=10){let n=[];for(let s of t){let a=s.dates||[];if(a.length<2)continue;let r=[...a].sort((m,p)=>D(m)-D(p)),l=0,o=null,c=null;for(let m=1;m<r.length;m++){let p=Math.floor((D(r[m])-D(r[m-1]))/is);p>l&&(l=p,o=r[m-1],c=r[m])}n.push({song:s,maxGap:l,gapStart:o,gapEnd:c})}return n.sort((s,a)=>a.maxGap-s.maxGap),n.slice(0,e)}var is,Zt=g(()=>{Z();is=864e5});function gt(t){let e=[],n=t;return n=n.replace(rs,(a,r,l,o)=>{let c=o;return c.startsWith('"')&&c.endsWith('"')&&(c=c.slice(1,-1)),e.push({key:r.toLowerCase(),op:l||":",val:c})," "}),n=n.trim().replace(/\s+/g," "),{tokens:n?n.split(" "):[],filters:e}}var rs,Jt=g(()=>{rs=/(?<key>title|artist|genre|tag|mood|season|key|count|last|days)\s*(?<op>:|<=|>=|=|<|>)\s*(?<val>"[^"]*"|\S+)/gi});function Xt(t,e,n=!1){let s=(r,l,o)=>{let c=r.lastSung?D(r.lastSung):o==="desc"?-1/0:1/0,m=l.lastSung?D(l.lastSung):o==="desc"?-1/0:1/0;return o==="desc"?m-c:c-m},a=[...t];switch(e){case"count-asc":a.sort((r,l)=>r.count-l.count||r.title.localeCompare(l.title,"ja"));break;case"recent":a.sort((r,l)=>s(r,l,"desc"));break;case"oldest":a.sort((r,l)=>s(r,l,"asc"));break;case"title":a.sort((r,l)=>r.title.localeCompare(l.title,"ja"));break;case"artist":a.sort((r,l)=>r.artist.localeCompare(l.artist,"ja")||l.count-r.count);break;case"count-desc":default:n||a.sort((r,l)=>l.count-r.count||r.title.localeCompare(l.title,"ja"));break}return a}var Ue=g(()=>{Z()});function te(t,e){let n=y(e).toLowerCase();if(!n)return[];let{tokens:s,filters:a}=gt(n),r=[];for(let o of a)r.includes(o.key)||r.push(o.key);let l=s.join(" ");if(l){let o=c=>y(c).toLowerCase().includes(l);o(t.title)&&r.push("\u66F2\u540D"),o(t.artist)&&r.push("\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8"),o(t.genreText||t.genre)&&r.push("\u30B8\u30E3\u30F3\u30EB"),o(t.tagText)&&r.push("\u30BF\u30B0"),o(t.keyText)&&r.push("\u30AD\u30FC")}return Array.from(new Set(r)).slice(0,4)}var Qe=g(()=>{T();Jt()});var Ye=g(()=>{});var We=g(()=>{});var X=g(()=>{T();K();Ae();ut();qt();Fe();Pe();_e();Ot();pt();Ne();qe();Oe();Wt();Zt();Jt();Z();Ue();Qe();Ye();We()});function ee(t,e){if(!e||!e.length)return d(t);let s=d(t);for(let a of e){if(!a)continue;let r=new RegExp(Ce(d(a)),"gi");s=s.replace(r,l=>`<mark class="hl">${l}</mark>`)}return s}var os,E,S,ht,q,Ze,N,Je,A=g(()=>{Me();X();ut();os=(()=>{let t=new Date;return t.setHours(0,0,0,0),t})(),E=(t,e=os)=>jt(t,e),S=Y,ht=Ee,q=t=>`${t?.channelCode||t?.channel||""}:${t?.dateText||t?.streamedOn||t?.dateRaw||""}:${t?.url||t?.title||""}`,Ze=(t,e=150)=>{let n;return(...s)=>{clearTimeout(n),n=setTimeout(()=>t(...s),e)}},N=t=>Number(t||0).toLocaleString(),Je=t=>!!(t&&t.closest&&t.closest("a, button"))});function O(t){for(let e of t||[])yt(e);return t||[]}var tt=g(()=>{ne()});function tn(t){if(!t)return null;if(t instanceof Date)return t;let n=String(t).trim().replaceAll("/","-").match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);if(!n)return null;let s=new Date(+n[1],+n[2]-1,+n[3]);return s.setHours(0,0,0,0),s}function nn(t){if(!t)return null;if(t instanceof Date)return t;let e=new Date(t);return Number.isNaN(e.getTime())?w(t):(e.setHours(0,0,0,0),e)}function sn(t,e){let n=t||{};return{...n,dataGeneratedAt:e||n.dataGeneratedAt||null,dataGeneratedDate:nn(e||n.dataGeneratedAt)}}function ls(t,e={}){let n=new Map,s=[];for(let m of t){for(let p of m.songs||[]){let h=n.get(p.key);h?(h.count+=p.count,h.channels=Array.from(new Set([...h.channels,...p.channels])),!h.displayKey&&p.displayKey&&(h.displayKey=p.displayKey,h.keyText=p.displayKey),(!h.genre||h.genre==="\u672A\u5206\u985E")&&(h.genre=p.genre||h.genre,h.genreText=h.genre)):n.set(p.key,{...p,channels:[...p.channels],dates:[],streamRefs:[]})}s.push(...m.streams||[])}s.sort((m,p)=>(p.date||0)-(m.date||0));let a=new Map;for(let m of s)for(let p of m.songs||[])a.has(p.key)||a.set(p.key,[]),a.get(p.key).push(m);for(let m of n.values()){let p=a.get(m.key)||[],h=p.map(_=>_.date).filter(Boolean).sort((_,_t)=>_t-_);m.streamRefs=p,m.dates=h,m.lastSung=h[0]||null,m.firstSung=h[h.length-1]||null,m.daysSinceLast=E(m.lastSung)}let r=mt(Array.from(n.values())),l=t.reduce((m,p)=>m+(p.stats?.total||0),0),o=s[0]?.date||null,c={title:"\u5168\u671F\u9593",updateText:o?Y(w(o)):"",updateDate:o,total:l,repertoire:r.length,streams:t.reduce((m,p)=>m+(p.stats?.streams||0),0),avgPerStream:s.length?Math.round(l/s.length*10)/10:0,channelId:"all",channelLabel:"\u5168\u671F\u9593",keyPublished:t.some(m=>m.stats?.keyPublished),...e};return typeof c.updateDate=="string"&&(c.updateDate=w(c.updateDate)),{stats:c,songs:r,streams:s,orphans:[],artists:j(r)}}function yt(t){return!t||t.__tagsReady||(t.seasonTags=Re(t),t.seasonText=t.seasonTags.join(" "),t.moodTags=He(t),t.moodText=t.moodTags.join(" "),t.trend=je(t),t.singerTags=Ke(t),t.tagText=[t.seasonText,t.moodText,t.singerTags.join(" "),t.trend].filter(Boolean).join(" "),t.__tagsReady=!0),t}function en(t){if(!t)return null;t.stats=t.stats||{},t.stats.updateDate=tn(t.stats.updateDate),t.stats.keyPublished=!!t.stats.keyPublished,t.songs=t.songs||[],t.streams=t.streams||[],t.orphans=t.orphans||[],Array.isArray(t.artists)||(t.artists=[]);for(let s of t.streams)s.date=tn(s.date),s.monthKey=s.monthKey||(s.date?`${s.date.getFullYear()}-${String(s.date.getMonth()+1).padStart(2,"0")}`:""),s.year=s.year||s.date?.getFullYear()||null,s.month=s.month||(s.date?s.date.getMonth()+1:null),s.dayOfWeek=s.dayOfWeek??(s.date?s.date.getDay():null),s.songs=s.songs||[];t.streams.sort((s,a)=>(a.date||0)-(s.date||0));let e=new Map;for(let s of t.songs)s.displayKey=s.displayKey||"",s.keyText=s.keyText||s.displayKey,s.genre=s.genre||"\u672A\u5206\u985E",s.genreText=s.genreText||s.genre,s.channels=Array.isArray(s.channels)?s.channels:Array.from(s.channels||[]),s.count=Number(s.count||0),e.set(s.key,s);for(let s of t.streams)s.songs=(s.songs||[]).map(a=>{let r=e.get(a.key);return{title:a.title||r?.title||"",artist:a.artist||r?.artist||"",key:a.key||r?.key||"",raw:a.raw||""}});let n=new Map;for(let s of t.streams)for(let a of s.songs)n.has(a.key)||n.set(a.key,[]),n.get(a.key).push(s);for(let s of t.songs){let a=n.get(s.key)||[],r=a.map(l=>l.date).filter(Boolean).sort((l,o)=>o-l);s.streamRefs=a,s.dates=r,s.lastSung=r[0]||null,s.firstSung=r[r.length-1]||null,s.daysSinceLast=E(s.lastSung),s.seasonTags=[],s.seasonText="",s.moodTags=[],s.moodText="",s.singerTags=[],s.tagText="",s.trend="",s.__tagsReady=!1}return t.songs=mt(t.songs),t.artists.length||(t.artists=j(t.songs)),t}function an(t){let e=t.channels||{};for(let s of Object.keys(e))e[s]=en(e[s]);let n=t.combined?.songs?en(t.combined):ls(Object.values(e),t.combined?.stats||{});return{channels:e,combined:n,fullLoaded:!0}}async function nt(t){let e=await fetch(t);if(!e.ok)throw new Error(`${t}: HTTP ${e.status}`);return e.json()}function cs(t,e){let n=t.channels?.[e]||{};return sn(n.stats||n,t.generatedAt)}function ds(t){let e=t.combined||{};return sn(e.stats||e,t.generatedAt)}async function us(t=null){let e=t,n,s;e?[n,s]=await Promise.all([nt(et.songs),nt(et.streams)]):[e,n,s]=await Promise.all([nt(et.meta),nt(et.songs),nt(et.streams)]);let a={},r=new Set([...Object.keys(e.channels||{}),...Object.keys(n.channels||{}),...Object.keys(s.channels||{})]);for(let l of r){let o=n.channels?.[l]||[];for(let c of o)Array.isArray(c.channels)||(c.channels=[l]);a[l]={stats:cs(e,l),songs:o,streams:s.channels?.[l]||[],orphans:[],artists:[]}}return an({channels:a,combined:{stats:ds(e)},generatedAt:e.generatedAt||null,dataGeneratedDate:nn(e.generatedAt)})}async function ms(){let t=await fetch(Xe,{cache:"no-store"});if(!t.ok){let e="";try{let n=await t.json();e=n.error?`: ${n.error}`:""}catch{e=`: HTTP ${t.status}`}throw new Error(`${Xe}${e}`)}return an(await t.json())}async function se(t={}){try{return await us(t.meta||null)}catch(e){try{return await ms()}catch(n){throw new Error(`API\u304B\u3089\u30C7\u30FC\u30BF\u3092\u53D6\u5F97\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F: ${e.message}; ${n.message}`)}}}var et,Xe,ne=g(()=>{A();X();tt();tt();et={meta:"/data/meta.json",songs:"/data/songs.json",streams:"/data/streams.json"},Xe="/api/data"});function on(){return z?Promise.resolve(z):(ae||(ae=import("fuse").then(t=>(z=t.default,z))),ae)}function ln(t){O(t),st=t,G=null;let e=++rn,n=()=>{on().then(s=>{e===rn&&st===t&&(G=new s(t,re))}).catch(()=>{})};"requestIdleCallback"in window?window.requestIdleCallback(n,{timeout:3e3}):window.setTimeout(n,1500)}function ps(t,e){return t.filter(n=>{for(let s of e){let a=s.val;switch(s.key){case"title":{if(!y(n.title).toLowerCase().includes(y(a).toLowerCase()))return!1;break}case"artist":{if(!y(n.artist).toLowerCase().includes(y(a).toLowerCase()))return!1;break}case"genre":{if(!y(n.genreText||n.genre).toLowerCase().includes(y(a).toLowerCase()))return!1;break}case"key":{if(!y(n.keyText).toLowerCase().split(/\s+/).includes(y(a).toLowerCase()))return!1;break}case"tag":{if(!y(n.tagText).toLowerCase().includes(y(a).toLowerCase()))return!1;break}case"mood":{if(!y(n.moodText).toLowerCase().includes(y(a).toLowerCase()))return!1;break}case"season":{if(!y(n.seasonText).toLowerCase().includes(y(a).toLowerCase()))return!1;break}case"count":{let r=parseFloat(a);if(Number.isNaN(r)||!ie(n.count,s.op,r))return!1;break}case"days":{let r=parseFloat(a);if(Number.isNaN(r))return!1;let l=n.daysSinceLast==null?1/0:n.daysSinceLast;if(!ie(l,s.op,r))return!1;break}case"last":{if(a==="never"||a==="untouched"){if(n.lastSung)return!1}else if(a==="fresh"){if(n.daysSinceLast==null||n.daysSinceLast>30)return!1}else if(a==="stale"){if(n.daysSinceLast==null||n.daysSinceLast<180)return!1}else{let r=parseInt(String(a).replace(/d$/i,""),10);if(!Number.isNaN(r)){let l=n.daysSinceLast==null?1/0:n.daysSinceLast;if(!ie(l,s.op===":"?"<=":s.op,r))return!1}}break}}}return!0})}function ie(t,e,n){switch(e){case">":return t>n;case"<":return t<n;case">=":return t>=n;case"<=":return t<=n;case"=":case":":return t==n}return!0}function cn(t,e){let n=st||e||[],s=(t||"").trim();if(!s)return{results:n,tokens:[]};O(n);let{tokens:a,filters:r}=gt(s),l=ps(n,r);if(!a.length)return{results:l,tokens:[]};let o=a.join(" ");if(!z){on().then(h=>{!G&&st&&(G=new h(st,re))}).catch(()=>{});let p=y(o).toLowerCase();return{results:l.filter(h=>[h.title,h.artist,h.genreText||h.genre,h.tagText,h.keyText].some(_=>y(_).toLowerCase().includes(p))),tokens:a}}return{results:(l===n&&G?G:new z(l,re)).search(o).map(p=>p.item),tokens:a}}var re,G,z,ae,st,rn,oe=g(()=>{X();tt();re={keys:[{name:"title",weight:.65},{name:"artist",weight:.35},{name:"genreText",weight:.18},{name:"tagText",weight:.14},{name:"keyText",weight:.1}],threshold:.38,ignoreLocation:!0,minMatchCharLength:1,includeScore:!0},G=null,z=null,ae=null,st=null,rn=0});function St(){return localStorage.getItem(dn)||"auto"}function un(){let t=St();return t!=="auto"?t:matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function hs(t){vt.includes(t)||(t="auto"),localStorage.setItem(dn,t),mn();for(let e of bt)e(t,un())}function ys(){let t=St(),e=vt[(vt.indexOf(t)+1)%vt.length];hs(e)}function mn(){let t=St();document.documentElement.setAttribute("data-theme",t);let e=document.getElementById("theme-icon"),n=document.getElementById("theme-label");e&&(e.textContent=fs[t]),n&&(n.textContent=gs[t])}function pn(t){return bt.add(t),()=>bt.delete(t)}function fn(){mn();let t=document.getElementById("theme-toggle");t&&t.addEventListener("click",ys);let e=matchMedia("(prefers-color-scheme: dark)");e.addEventListener&&e.addEventListener("change",()=>{if(St()==="auto")for(let n of bt)n("auto",un())})}var dn,vt,fs,gs,bt,le=g(()=>{dn="yumegawa-theme",vt=["auto","light","dark"],fs={auto:"\u{1F317}",light:"\u2600\uFE0F",dark:"\u{1F319}"},gs={auto:"auto",light:"light",dark:"dark"},bt=new Set});function bs(){return window.Chart?Promise.resolve(window.Chart):wt||(wt=new Promise((t,e)=>{let n=document.createElement("script");n.src=vs,n.async=!0,n.onload=()=>t(window.Chart),n.onerror=()=>e(new Error("Chart.js failed to load")),document.head.appendChild(n)}),wt)}function gn(){let t=getComputedStyle(document.documentElement);ce={ink:t.getPropertyValue("--ink").trim(),inkSoft:t.getPropertyValue("--ink-soft").trim(),inkMute:t.getPropertyValue("--ink-mute").trim(),primary:t.getPropertyValue("--primary").trim(),primaryStrong:t.getPropertyValue("--primary-strong").trim(),primarySoft:t.getPropertyValue("--primary-soft").trim(),accent:t.getPropertyValue("--accent").trim(),accentStrong:t.getPropertyValue("--accent-strong").trim(),border:t.getPropertyValue("--border").trim(),borderSoft:t.getPropertyValue("--border-soft").trim(),surface:t.getPropertyValue("--surface").trim(),gold:t.getPropertyValue("--gold").trim()}}function I(){return ce.ink||gn(),ce}function Ss(){let t=I();return{color:t.ink,borderColor:t.border,font:{family:'"Kanau Noto Sans JP", "Noto Sans JP", "Yu Gothic", "Meiryo", system-ui, sans-serif',size:11},plugins:{legend:{labels:{color:t.inkSoft,font:{size:11}}},tooltip:{backgroundColor:t.surface,titleColor:t.ink,bodyColor:t.inkSoft,borderColor:t.border,borderWidth:1,padding:10,boxPadding:4,cornerRadius:8,titleFont:{size:12,weight:"600"},bodyFont:{size:11}}},scales:{x:{ticks:{color:t.inkMute,font:{size:10}},grid:{color:t.borderSoft,drawBorder:!1}},y:{ticks:{color:t.inkMute,font:{size:10}},grid:{color:t.borderSoft,drawBorder:!1},beginAtZero:!0}}}}function hn(t,e){if(!e)return t;let n=Array.isArray(t)?[...t]:{...t};for(let s of Object.keys(e))e[s]&&typeof e[s]=="object"&&!Array.isArray(e[s])?n[s]=hn(t&&t[s]?t[s]:{},e[s]):n[s]=e[s];return n}function R(t,e,n,s={}){return bs().then(a=>{let r=document.getElementById(t);if(!r)return null;let l=r.getContext("2d");at.has(t)&&at.get(t).destroy();let o=hn(Ss(),s);o.responsive=!0,o.maintainAspectRatio=!1;let c=new a(l,{type:e,data:n,options:o});return at.set(t,c),c}).catch(()=>{let a=document.getElementById(t);a&&a.replaceWith(document.createTextNode("\u30B0\u30E9\u30D5\u3092\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3067\u3057\u305F"))}),null}function ue(){for(let t of at.values())t.destroy();at.clear()}function yn(t){de=t}function F(t,e={}){return`<div class="chart-wrap ${e.class||""}"><canvas id="${t}"></canvas></div>`}var vs,at,wt,ce,de,kt=g(()=>{le();vs="https://cdn.jsdelivr.net/npm/chart.js@4.4.4/dist/chart.umd.min.js",at=new Map,wt=null,ce={};de=null;pn(()=>{gn(),de&&de()})});var ws,vn,$t,mr,pr,me,bn,pe,fr,it=g(()=>{ws="1mM9TQGYm7VAOds90XpSbSzF6xnFeq-95XZwL2mz8B4o",vn={new:{id:"new",label:"\u65B0ch",listGid:"0",setlistGid:"684306666"},old:{id:"old",label:"\u65E7ch",listGid:"959470167",setlistGid:"254288043"}},$t="new",mr=vn.new.listGid,pr=vn.new.setlistGid,me=12,bn=12,pe=20,fr=`https://docs.google.com/spreadsheets/d/${ws}/edit`});function Lt(){let t=new URLSearchParams(window.location.search),e=t.get("tab"),n=t.get("ch");return{tab:ks.has(e)?e:rt.tab,channel:$s.has(n)?n:rt.channel,q:t.get("q")||rt.q}}function P(t={},e={}){let n={...Lt(),...t},s=new URLSearchParams;n.tab!==rt.tab&&s.set("tab",n.tab),n.channel!==rt.channel&&s.set("ch",n.channel),n.q&&s.set("q",n.q);let a=s.toString(),r=a?`${window.location.pathname}?${a}`:window.location.pathname,l=e.replace?"replaceState":"pushState";return window.history[l](null,"",r),n}var ks,$s,rt,fe=g(()=>{ks=new Set(["dashboard","ranking","songs","timeline","analytics"]),$s=new Set(["new","old","all"]),rt={tab:"dashboard",channel:"new",q:""}});var Ln={};U(Ln,{renderDashboard:()=>xs});function ge(t){let e=()=>window.requestAnimationFrame(()=>{window.setTimeout(()=>{"requestIdleCallback"in window?window.requestIdleCallback(t,{timeout:3e3}):window.setTimeout(t,1200)},900)});document.readyState==="complete"?e():window.addEventListener("load",e,{once:!0})}function Sn(t,e){let n=document.getElementById(t)?.parentElement;if(!n||!("IntersectionObserver"in window)){ge(e);return}let s=new IntersectionObserver(a=>{a.some(r=>r.isIntersecting)&&(s.disconnect(),ge(e))},{rootMargin:"0px 0px",threshold:.01});s.observe(n)}function Ls(){return window.matchMedia("(max-width: 760px)").matches}function xs(){let{songs:t,streams:e}=i.data,s=[...t].sort((Nt,Rt)=>Rt.count-Nt.count).slice(0,5),a=s[0]?.count||1,r=e.slice(0,5),l=Q(),o=Be(t,l),c=u("#panel-dashboard"),m=++xt,p=`
    <div class="card col-4">
      <div class="card-title">\u{1F4C8} \u4ECA\u6708\u306E\u6D3B\u52D5</div>
      <div style="display:grid;gap:10px;">
        <div class="activity-row">
          <span class="a-date">\u914D\u4FE1</span>
          <span class="a-meta">\u4ECA\u6708\u306E\u6B4C\u67A0\u6570</span>
          <strong>${Ge(e,l)}\u56DE</strong>
        </div>
        <div class="activity-row">
          <span class="a-date">\u6B4C\u5531</span>
          <span class="a-meta">\u4ECA\u6708\u306E\u7DCF\u6B4C\u5531\u6570</span>
          <strong>${ze(e,l)}\u66F2</strong>
        </div>
        <div class="activity-row">
          <span class="a-date">\u65B0\u66F2</span>
          <span class="a-meta">\u4ECA\u6708\u306E\u521D\u62AB\u9732\u66F2\u6570</span>
          <strong>${o}\u66F2</strong>
        </div>
        <div class="activity-row">
          <span class="a-date">\u6700\u7D42</span>
          <span class="a-meta">\u6700\u65B0\u6B4C\u67A0\u304B\u3089</span>
          <strong>${e[0]?`${E(e[0].date)}\u65E5\u524D`:"\u2014"}</strong>
        </div>
      </div>
    </div>
  `,h=`
    <div class="card col-4">
      <div class="card-title">\u{1F3C6} TOP5 \u697D\u66F2</div>
      <div class="bar-list">
        ${s.length?s.map((Nt,Rt)=>ot(Nt,Rt,a)).join(""):'<div class="empty-state">\u66F2\u30C7\u30FC\u30BF\u306A\u3057</div>'}
      </div>
    </div>
  `;if(Ls()){c.innerHTML=`
      <div class="dashboard-grid" id="dashboard-grid">
        ${p}
        ${h}
      </div>
    `,ge(()=>{m!==xt||i.activeTab!=="dashboard"||Ts(c,e,t,r,m)});return}let _=Yt(e,l);c.innerHTML=`
    <div class="dashboard-grid" id="dashboard-grid">
      <div class="card col-8">
        <div class="card-title">\u{1F4C5} \u914D\u4FE1\u30D2\u30FC\u30C8\u30DE\u30C3\u30D7 <span class="pill">\u76F4\u8FD11\u5E74</span></div>
        ${$n(_)}
      </div>
      ${p}
      <div class="card col-8">
        <div class="card-title">\u{1F3B6} \u6708\u5225 \u6B4C\u5531\u6570 / \u6B4C\u67A0\u6570 <span class="pill">\u6642\u7CFB\u5217</span></div>
        ${F("chart-monthly",{class:""})}
      </div>
      ${h}
      ${wn(e,t,r)}
    </div>
  `;let _t=Qt(e);Sn("chart-monthly",()=>{m!==xt||i.activeTab!=="dashboard"||kn(_t)})}function Ts(t,e,n,s,a){let r=t.querySelector("#dashboard-grid");if(!r||r.dataset.deferred==="1")return;r.dataset.deferred="1",r.insertAdjacentHTML("beforeend",`
    <div class="card col-8">
      <div class="card-title">\u{1F4C5} \u914D\u4FE1\u30D2\u30FC\u30C8\u30DE\u30C3\u30D7 <span class="pill">\u76F4\u8FD11\u5E74</span></div>
      ${$n(Yt(e,Q()))}
    </div>
    <div class="card col-8">
      <div class="card-title">\u{1F3B6} \u6708\u5225 \u6B4C\u5531\u6570 / \u6B4C\u67A0\u6570 <span class="pill">\u6642\u7CFB\u5217</span></div>
      ${F("chart-monthly",{class:""})}
    </div>
    ${wn(e,n,s)}
  `);let l=Qt(e);Sn("chart-monthly",()=>{a!==xt||i.activeTab!=="dashboard"||kn(l)})}function wn(t,e,n){let s=e.filter(o=>o.daysSinceLast>=180).sort((o,c)=>c.count-o.count).slice(0,5),a=e.filter(o=>o.daysSinceLast!=null&&o.daysSinceLast<=30).sort((o,c)=>c.count-o.count).slice(0,5),r=Ut(t,"month",Q()),l=Ut(t,"year",Q());return`
    <div class="card col-6">
      <div class="card-title">\u{1F5F3} \u4ECA\u6708\u306E\u3088\u304F\u6B4C\u308F\u308C\u305F\u66F2 <span class="pill">\u8EFD\u91CF\u7248</span></div>
      <div class="bar-list">
        ${r.length?r.slice(0,5).map((o,c)=>ot(o,c,r[0].count)).join(""):'<div class="empty-state">\u4ECA\u6708\u306E\u6B4C\u5531\u5C65\u6B74\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card col-6">
      <div class="card-title">\u{1F5F3} \u4ECA\u5E74\u306E\u3088\u304F\u6B4C\u308F\u308C\u305F\u66F2 <span class="pill">\u8EFD\u91CF\u7248</span></div>
      <div class="bar-list">
        ${l.length?l.slice(0,5).map((o,c)=>ot(o,c,l[0].count)).join(""):'<div class="empty-state">\u4ECA\u5E74\u306E\u6B4C\u5531\u5C65\u6B74\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card col-6">
      <div class="card-title">\u{1F4A4} \u4E45\u3057\u3076\u308A\u5019\u88DC <span class="pill">180\u65E5\u4EE5\u4E0A</span></div>
      <div class="bar-list">
        ${s.length?s.map((o,c)=>ot(o,c,s[0].count)).join(""):'<div class="empty-state">\u5019\u88DC\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card col-6">
      <div class="card-title">\u2728 \u6700\u8FD1\u6B4C\u3063\u305F\u5B9A\u756A <span class="pill">30\u65E5\u4EE5\u5185</span></div>
      <div class="bar-list">
        ${a.length?a.map((o,c)=>ot(o,c,a[0].count)).join(""):'<div class="empty-state">\u5019\u88DC\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card col-12">
      <div class="card-title">\u{1F4FA} \u76F4\u8FD1\u306E\u6B4C\u67A0 <span class="pill">\u6700\u65B0${n.length}\u4EF6</span></div>
      ${n.map(o=>`
        <div class="activity-row">
          <span class="a-date">${S(o.date)}</span>
          <span class="a-title">${o.url?`<a href="${d(o.url)}" target="_blank" rel="noopener">${d(o.title||"\u914D\u4FE1")}</a>`:d(o.title)}</span>
          <span class="a-meta">\u{1F3A4} ${o.songs.length}\u66F2</span>
        </div>
      `).join("")}
    </div>
  `}function ot(t,e,n){let s=Math.round(t.count/n*100);return`
    <div class="bar-row clickable" data-songkey="${d(t.key)}" data-songtitle="${d(t.title)}" data-songartist="${d(t.artist)}" title="\u30AF\u30EA\u30C3\u30AF\u3067\u914D\u4FE1\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u306B\u7D5E\u308A\u8FBC\u307F">
      <div class="bar-rank">${e+1}</div>
      <div class="bar-content">
        <div class="bar-label">${d(t.title)} <span style="color:var(--ink-mute);font-size:11px;">/ ${d(t.artist)}</span></div>
        <div class="bar-bar" style="width:${s}%;"></div>
      </div>
      <div class="bar-value">${t.count}</div>
    </div>
  `}function kn(t){let e=I();R("chart-monthly","bar",{labels:t.map(n=>ht(n.date)),datasets:[{type:"line",label:"\u6B4C\u67A0\u6570",data:t.map(n=>n.streams),borderColor:e.accentStrong,backgroundColor:e.accentStrong+"88",yAxisID:"y2",tension:.3,fill:!1,pointRadius:3,borderWidth:2},{label:"\u6B4C\u5531\u6570",data:t.map(n=>n.songs),backgroundColor:e.primary+"cc",borderColor:e.primaryStrong,borderWidth:1,yAxisID:"y",borderRadius:4}]},{scales:{y:{position:"left",title:{display:!0,text:"\u6B4C\u5531\u6570",color:e.inkMute,font:{size:10}}},y2:{position:"right",title:{display:!0,text:"\u6B4C\u67A0\u6570",color:e.inkMute,font:{size:10}},grid:{display:!1},beginAtZero:!0}}})}function Ds(t){return t<=0?"":t<8?"l1":t<16?"l2":t<25?"l3":"l4"}function $n(t){let n=["\u65E5","\u6708","\u706B","\u6C34","\u6728","\u91D1","\u571F"].map(a=>`<div>${a}</div>`).join(""),s=t.map(a=>a.inRange?`<div class="heatmap-cell ${Ds(a.value)}" title="${a.iso}: ${a.value}\u66F2"></div>`:'<div class="heatmap-cell" style="visibility:hidden"></div>').join("");return`
    <div class="heatmap-flex">
      <div class="heatmap-row-labels">${n}</div>
      <div class="heatmap-wrap"><div class="heatmap">${s}</div></div>
    </div>
    <div class="heatmap-legend">
      \u5C11\u306A\u3081
      <div class="scale">
        <div class="heatmap-cell"></div>
        <div class="heatmap-cell l1"></div>
        <div class="heatmap-cell l2"></div>
        <div class="heatmap-cell l3"></div>
        <div class="heatmap-cell l4"></div>
      </div>
      \u591A\u3081
    </div>
  `}var xt,xn=g(()=>{C();A();kt();Wt();C();xt=0});var Dn={};U(Dn,{renderRanking:()=>Tn});function Tn(){let{songs:t}=i.data,e=[...t].sort((c,m)=>m.count-c.count||c.title.localeCompare(m.title,"ja")),n=e.slice(0,3),s=["\u{1F947}","\u{1F948}","\u{1F949}"],a=i.rankingLimit,r=e.slice(3,a),l=u("#panel-ranking");l.innerHTML=`
    <div class="section-header">
      <h2>\u{1F3C6} \u6B4C\u5531\u56DE\u6570\u30E9\u30F3\u30AD\u30F3\u30B0</h2>
      <span class="count-pill">${t.length}\u66F2\u4E2D</span>
    </div>
    <div class="podium">
      ${n.map((c,m)=>Ms(c,m,s[m])).join("")}
    </div>
    <div class="song-list">
      ${r.map(Cs).join("")}
    </div>
    ${a<e.length?`
      <div class="timeline-controls">
        <button class="load-more-btn" id="rank-more">\u25BC \u3082\u3063\u3068\u8868\u793A (\u6B8B\u308A${e.length-a}\u66F2)</button>
      </div>`:""}
  `;let o=u("#rank-more");o&&o.addEventListener("click",()=>{i.rankingLimit+=50,Tn()})}function Ms(t,e,n){return`
    <div class="podium-card rank-${e+1}" data-songkey="${d(t.key)}" data-songtitle="${d(t.title)}" data-songartist="${d(t.artist)}" title="\u30AF\u30EA\u30C3\u30AF\u3067\u914D\u4FE1\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u306B\u7D5E\u308A\u8FBC\u307F">
      <div class="podium-medal">${n}</div>
      <div class="song-title">${d(t.title)}</div>
      <button class="song-artist artist-search-btn" type="button" data-artist-search="${d(t.artist)}">${d(t.artist)}</button>
      <div class="count-big">${t.count}<small>\u56DE</small></div>
      <div class="last-sung">${t.lastSung?`\u6700\u7D42: ${S(t.lastSung)} (${t.daysSinceLast}\u65E5\u524D)`:"\u672A\u62AB\u9732"}</div>
    </div>
  `}function Cs(t){let e=t.rank===1?"r1":t.rank===2?"r2":t.rank===3?"r3":"",n=t.lastSung?`<div>${S(t.lastSung)}</div><span class="badge ${W(t.daysSinceLast)}">${t.daysSinceLast}\u65E5\u524D</span>`:'<div>\u672A\u62AB\u9732</div><span class="badge never">\u2014</span>';return`
    <div class="song-row" data-songkey="${d(t.key)}" data-songtitle="${d(t.title)}" data-songartist="${d(t.artist)}" title="\u30AF\u30EA\u30C3\u30AF\u3067\u914D\u4FE1\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u306B\u7D5E\u308A\u8FBC\u307F">
      <div class="rank ${e}">${t.rank}</div>
      <div class="info">
        <div class="title">${d(t.title)}</div>
        <button class="artist artist-search-btn" type="button" data-artist-search="${d(t.artist)}">${d(t.artist)}</button>
      </div>
      <div class="song-row-side">
        <div class="count">${t.count}<small>\u56DE</small></div>
        <div class="last">${n}</div>
      </div>
    </div>
  `}var Mn=g(()=>{C();A();it()});var Rn={};U(Rn,{renderSongs:()=>Es});function Es(){Rs(),O(i.data?.songs||[]);let t=u("#panel-songs");t.innerHTML=`
    <div class="section-header">
      <h2>${i.singerMode?"\u{1F399} \u9078\u66F2\u30DC\u30FC\u30C9":"\u{1F3B5} \u5168\u66F2\u30EA\u30B9\u30C8"}</h2>
      <span class="count-pill" id="songs-count">\u2014</span>
    </div>
    <div class="mobile-panel-switch">
      <button class="btn ghost active" type="button" data-mobile-panel-toggle="filters">\u7D5E\u308A\u8FBC\u307F</button>
    </div>
    <div id="songs-filter-panel" class="mobile-panel mobile-panel-filters is-open">
      <div class="controls">
        <input id="songs-search" class="text-input" type="search" placeholder="\u{1F50D} \u66F2\u540D\u30FB\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u30FBartist:miwa \u306A\u3069\u3067\u691C\u7D22" value="${d(i.songsQuery)}">
        <select id="songs-sort" class="select-input">
          <option value="count-desc">\u56DE\u6570\uFF08\u591A\uFF09</option>
          <option value="count-asc">\u56DE\u6570\uFF08\u5C11\uFF09</option>
          <option value="recent">\u6700\u7D42\u62AB\u9732\uFF08\u65B0\uFF09</option>
          <option value="oldest">\u6700\u7D42\u62AB\u9732\uFF08\u53E4\uFF09</option>
          <option value="title">\u66F2\u540D\uFF08\u3042\u2192\u3093\uFF09</option>
          <option value="artist">\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8</option>
        </select>
        <select id="songs-genre" class="select-input genre-select" title="\u30B8\u30E3\u30F3\u30EB\u3067\u7D5E\u308A\u8FBC\u307F">
          ${Ps()}
        </select>
      </div>
      <p class="search-help">
        ${i.singerMode?"\u66F2\u306E\uFF0B\u30BB\u30C8\u30EA\u304B\u3089\u8FFD\u52A0\u3067\u304D\u307E\u3059\u3002\u30E9\u30F3\u30C0\u30E0\u8FFD\u52A0\u306F\u73FE\u5728\u306E\u691C\u7D22\u30FB\u7D5E\u308A\u8FBC\u307F\u6761\u4EF6\u304B\u3089\u9078\u3073\u307E\u3059\u3002":"\u30BF\u30B0\u3092\u62BC\u3059\u3068\u3001\u305D\u306E\u6761\u4EF6\u3067\u7D5E\u308A\u8FBC\u3081\u307E\u3059\u3002\u66F2\u3092\u62BC\u3059\u3068\u8A73\u7D30\u3092\u958B\u304D\u307E\u3059\u3002"}
      </p>
      <div class="controls" id="songs-filters" style="margin-top:-8px;">
        <button class="btn ghost active" data-filter="all">\u3059\u3079\u3066</button>
        <button class="btn ghost" data-filter="fresh">\u{1F7E2} \u6700\u8FD1 (30\u65E5\u4EE5\u5185)</button>
        <button class="btn ghost" data-filter="stale">\u{1F7E0} \u4E45\u3057\u3076\u308A (180\u65E5\u4EE5\u4E0A)</button>
        <button class="btn ghost" data-filter="never">\u26AA \u5C65\u6B74\u672A\u78BA\u8A8D</button>
        ${i.singerMode?"":'<button class="btn primary" id="recommend-btn" type="button">\u304A\u3059\u3059\u3081\u9078\u66F2</button>'}
      </div>
      ${i.singerMode?`
        <div class="songs-tools">
          <button class="btn ghost" data-singer-preset="keyed" type="button">\u30AD\u30FC\u78BA\u8A8D\u6E08\u307F</button>
          <button class="btn ghost" data-singer-preset="classic" type="button">\u5B9A\u756A</button>
          <button class="btn ghost" data-singer-preset="stale" type="button">\u4E45\u3057\u3076\u308A</button>
          <button class="btn ghost" data-singer-preset="rare" type="button">\u30EC\u30A2</button>
          <button class="btn ghost" id="compact-btn" type="button">\u8868\u793A: ${i.songsView==="compact"?"\u30B3\u30F3\u30D1\u30AF\u30C8":"\u8A73\u7D30"}</button>
          <button class="btn primary" id="setlist-toggle-btn" type="button" aria-controls="setlist-planner" aria-expanded="${i.setlistExpanded?"true":"false"}">${i.setlistExpanded?"\u30BB\u30C8\u30EA\u5236\u4F5C\u3092\u9589\u3058\u308B":"\u30BB\u30C8\u30EA\u5236\u4F5C\u3092\u958B\u304F"}</button>
        </div>
      `:""}
      <div id="recommend-box" class="recommend-box" hidden></div>
    </div>
    ${i.singerMode?'<div id="setlist-planner" class="setlist-planner mobile-panel mobile-panel-setlist"></div>':""}
    <div class="genre-strip" id="songs-genre-chips">${_s()}</div>
    <div id="songs-list" class="song-list"></div>
    <div class="timeline-controls" id="songs-more-wrap"></div>
  `,lt=u("#songs-search"),Tt=u("#songs-sort"),B=u("#songs-genre"),ye=u("#songs-filters"),ve=u("#songs-genre-chips"),Dt=u("#songs-list"),An=u("#songs-count"),Mt=u("#songs-more-wrap"),Tt.value=i.songsSort,B.value=Fs(i.songsGenre)?i.songsGenre:"all",i.songsGenre=B.value,Cn(),he();let e=Ze(()=>{i.songsQuery=lt.value,i.songsLimit=100,P({tab:"songs",q:i.songsQuery},{replace:!0}),L()},120);lt.addEventListener("input",e),Tt.addEventListener("change",()=>{i.songsSort=Tt.value,L()}),B.addEventListener("change",()=>{i.songsGenre=B.value,i.songsLimit=100,he(),L()}),ye.addEventListener("click",n=>{let s=n.target.closest("[data-filter]");s&&(i.songsFilter=s.dataset.filter,i.songsLimit=100,Cn(),L())}),ve.addEventListener("click",n=>{let s=n.target.closest("[data-genre]");s&&(i.songsGenre=s.dataset.genre,B.value=i.songsGenre,i.songsLimit=100,he(),L())});for(let n of t.querySelectorAll("[data-singer-preset]"))n.addEventListener("click",()=>{i.singerMode=!0,i.singerPreset=i.singerPreset===n.dataset.singerPreset?"all":n.dataset.singerPreset,i.songsLimit=100,L()});u("#compact-btn")?.addEventListener("click",()=>{i.songsView=i.songsView==="compact"?"comfortable":"compact",L()}),u("#setlist-toggle-btn")?.addEventListener("click",()=>Is()),u("#recommend-btn")?.addEventListener("click",()=>Ns());for(let n of t.querySelectorAll("[data-mobile-panel-toggle]"))n.addEventListener("click",()=>As(n.dataset.mobilePanelToggle));t.onclick=n=>{if(n.target.closest("[data-recommend-dismiss]")){n.preventDefault(),n.stopPropagation();let c=u("#recommend-box");c&&(c.hidden=!0,c.innerHTML="");return}let a=n.target.closest("[data-setlist-action]");if(a){n.stopPropagation(),Ks(a);return}let r=n.target.closest("[data-artist-search]");if(r){n.stopPropagation();let c=String(r.dataset.artistSearch||"").replace(/"/g,"");i.songsQuery=`artist:"${c}"`,lt.value=i.songsQuery,i.songsLimit=100,P({tab:"songs",q:i.songsQuery}),L();return}let l=n.target.closest("[data-tag-search]");if(!l)return;n.stopPropagation();let o=l.dataset.tagType||"tag";i.songsQuery=`${o}:${l.dataset.tagSearch}`,lt.value=i.songsQuery,i.songsLimit=100,P({tab:"songs",q:i.songsQuery}),L()},t.oninput=n=>{n.target.id==="setlist-theme"&&(i.setlist.theme=n.target.value,ct())},t.onchange=n=>{n.target.id==="setlist-copy-format"&&(i.setlist.copyFormat=n.target.value,ct())},t.onkeydown=n=>{n.key==="Enter"&&n.target.closest(".setlist-custom-add")&&(n.preventDefault(),_n())},L()}function As(t){let e=u("#songs-filter-panel"),n=u("#setlist-planner");if(t==="setlist"&&!i.singerMode){e?.classList.add("is-open"),n?.classList.remove("is-open");for(let a of document.querySelectorAll("[data-mobile-panel-toggle]"))a.classList.toggle("active",a.dataset.mobilePanelToggle==="filters");return}if(i.singerMode){e?.classList.add("is-open"),e?.scrollIntoView({behavior:"smooth",block:"start"});for(let r of document.querySelectorAll("[data-mobile-panel-toggle]"))r.classList.toggle("active",r.dataset.mobilePanelToggle==="filters");return}let s=t==="setlist";e?.classList.toggle("is-open",!s),n?.classList.toggle("is-open",s);for(let a of document.querySelectorAll("[data-mobile-panel-toggle]"))a.classList.toggle("active",a.dataset.mobilePanelToggle===t)}function Is(){if(!i.singerMode)return;i.setlistExpanded=!i.setlistExpanded,$();let t=u("#setlist-planner");i.setlistExpanded&&t?.scrollIntoView({behavior:"smooth",block:"start"})}function Ct(t){return String(t.genre||"\u672A\u5206\u985E").trim()||"\u672A\u5206\u985E"}function Se(){let t=new Map;for(let e of i.data.songs||[]){let n=Ct(e);t.set(n,(t.get(n)||0)+1)}return[...t.entries()].sort((e,n)=>n[1]-e[1]||e[0].localeCompare(n[0],"ja"))}function Fs(t){return t==="all"||Se().some(([e])=>e===t)}function Ps(){let t=['<option value="all">\u5168\u30B8\u30E3\u30F3\u30EB</option>'];for(let[e,n]of Se())t.push(`<option value="${d(e)}">${d(e)} (${n})</option>`);return t.join("")}function _s(){let t=['<button class="genre-chip" type="button" data-genre="all">\u5168\u30B8\u30E3\u30F3\u30EB</button>'];for(let[e,n]of Se())t.push(`
      <button class="genre-chip" type="button" data-genre="${d(e)}">
        <span>${d(e)}</span><small>${n}</small>
      </button>
    `);return t.join("")}function he(){for(let t of ve.querySelectorAll("[data-genre]"))t.classList.toggle("active",t.dataset.genre===i.songsGenre)}function Cn(){for(let t of ye.querySelectorAll("[data-filter]"))t.classList.toggle("primary",t.dataset.filter===i.songsFilter),t.classList.toggle("ghost",t.dataset.filter!==i.songsFilter)}function L(){let{songs:t}=i.data,e=Gt(t,i.songsGenre,Ct),n=Bt(e,{singerMode:i.singerMode,preset:i.singerPreset,keyPublished:i.data?.stats?.keyPublished}),s=zt(n,i.songsFilter),{results:a,tokens:r}=cn(i.songsQuery,s),l=i.songsQuery.trim()?a.filter(c=>s.includes(c)):s;if(l=Xt(l,i.songsSort,!!i.songsQuery.trim()),be=l,An.textContent=`${l.length} / ${t.length}\u66F2`,!l.length){Dt.innerHTML='<div class="empty-state">\u8A72\u5F53\u3059\u308B\u66F2\u304C\u3042\u308A\u307E\u305B\u3093 \u{1F420}</div>',Mt.innerHTML="";return}let o=l.slice(0,i.songsLimit);Dt.classList.toggle("compact",i.songsView==="compact");for(let c of document.querySelectorAll("[data-singer-preset]")){let m=i.singerMode&&i.singerPreset===c.dataset.singerPreset;c.classList.toggle("primary",m),c.classList.toggle("ghost",!m)}u("#compact-btn")&&(u("#compact-btn").textContent=`\u8868\u793A: ${i.songsView==="compact"?"\u30B3\u30F3\u30D1\u30AF\u30C8":"\u8A73\u7D30"}`),Dt.innerHTML=o.map(c=>Vs(c,r)).join(""),$(),i.songsLimit<l.length?(Mt.innerHTML=`<button class="load-more-btn" id="songs-more">\u25BC \u3082\u3063\u3068\u8868\u793A (\u6B8B\u308A${l.length-i.songsLimit}\u66F2)</button>`,u("#songs-more").addEventListener("click",()=>{i.songsLimit+=200,L()})):Mt.innerHTML=""}function Ns(){let t=u("#recommend-box"),e=Xt(Bt(zt(Gt(i.data.songs,"all",Ct),i.songsFilter),{singerMode:i.singerMode,preset:i.singerPreset,keyPublished:i.data?.stats?.keyPublished}).filter(a=>a.lastSung&&(a.displayKey||!i.data.stats.keyPublished)),"oldest",!1);if(!e.length){t.hidden=!1,t.innerHTML='<div class="empty-state">\u6761\u4EF6\u306B\u5408\u3046\u304A\u3059\u3059\u3081\u5019\u88DC\u304C\u3042\u308A\u307E\u305B\u3093</div>';return}let n=e.slice(0,Math.min(80,e.length)),s=n[Math.floor(Math.random()*n.length)];t.hidden=!1,t.innerHTML=`
    <div class="recommend-card" data-songkey="${d(s.key)}" data-songtitle="${d(s.title)}" data-songartist="${d(s.artist)}">
      <div>
        <div class="recommend-label">\u4ECA\u65E5\u306E\u5019\u88DC</div>
        <strong>${d(s.title)}</strong>
        <span>/ ${d(s.artist)}</span>
      </div>
      <div class="recommend-meta">
        <span>${s.count}\u56DE</span>
        <span>${s.daysSinceLast??"\u2014"}\u65E5\u524D</span>
        ${s.displayKey?`<span>\u30AD\u30FC ${d(s.displayKey)}</span>`:""}
      </div>
      <button class="recommend-dismiss" type="button" data-recommend-dismiss aria-label="\u304A\u3059\u3059\u3081\u9078\u66F2\u3092\u9589\u3058\u308B">\xD7</button>
    </div>
  `}function Rs(){try{let t=localStorage.getItem(In);if(!t)return;let e=JSON.parse(t);i.setlist.theme=String(e.theme||""),i.setlist.copyFormat=e.copyFormat==="timestamp"?"timestamp":"simple",i.setlist.items=Array.isArray(e.items)?e.items:[]}catch{i.setlist.items=[]}}function ct(){localStorage.setItem(In,JSON.stringify(i.setlist))}function Fn(t){return(i.data.songs||[]).find(e=>e.key===t)||null}function Pn(t){t&&(i.setlist.items.push({key:t.key,title:t.title,artist:t.artist,displayKey:t.displayKey||"",genre:t.genre||"",moodTags:t.moodTags||[],seasonTags:t.seasonTags||[],daysSinceLast:t.daysSinceLast}),ct(),$("\u8FFD\u52A0\u3057\u307E\u3057\u305F"))}function _n(){let t=u("#setlist-custom-title"),e=u("#setlist-custom-artist"),n=u("#setlist-custom-key"),s=String(t?.value||"").trim(),a=String(e?.value||"").trim(),r=String(n?.value||"").trim();if(!s){$("\u66F2\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044");return}i.setlist.items.push({key:`custom:${Date.now()}:${Math.random().toString(36).slice(2,8)}`,custom:!0,title:s,artist:a,displayKey:r,genre:"\u65B0\u898F",moodTags:[],seasonTags:[],daysSinceLast:null}),ct(),$("\u65B0\u3057\u3044\u66F2\u3092\u8FFD\u52A0\u3057\u307E\u3057\u305F")}function Hs(t){if(t.custom)return t;let e=Fn(t.key);return e?{...t,...e}:t}function Ks(t){let e=t.dataset.setlistAction,n=Number(t.dataset.index);if(e==="add"&&Pn(Fn(t.dataset.songkey)),e==="remove"&&i.setlist.items.splice(n,1),e==="up"&&n>0&&([i.setlist.items[n-1],i.setlist.items[n]]=[i.setlist.items[n],i.setlist.items[n-1]]),e==="down"&&n<i.setlist.items.length-1&&([i.setlist.items[n+1],i.setlist.items[n]]=[i.setlist.items[n],i.setlist.items[n+1]]),e==="copy-item"){Bs(n);return}if(e==="add-custom"){_n();return}e==="random"&&js(),e==="copy"&&zs(),e==="clear"&&confirm("\u30BB\u30C8\u30EA\u3092\u7A7A\u306B\u3057\u307E\u3059\u304B\uFF1F")&&(i.setlist.items=[]),ct(),["add","random","copy"].includes(e)||$()}function js(){let t=new Set(i.setlist.items.map(s=>s.key)),e=(be.length?be:i.data.songs).filter(s=>s.key&&!t.has(s.key));if(!e.length){$("\u8FFD\u52A0\u3067\u304D\u308B\u5019\u88DC\u304C\u3042\u308A\u307E\u305B\u3093");return}let n=e[Math.floor(Math.random()*e.length)];Pn(n)}function we(){return i.setlist.items.map(Hs)}function qs(t){let e=n=>{let s=new Map;for(let a of t)for(let r of n(a))r&&s.set(r,(s.get(r)||0)+1);return[...s.entries()].sort((a,r)=>r[1]-a[1]).slice(0,3)};return{genres:e(n=>[n.genre||"\u672A\u5206\u985E"]),moods:e(n=>n.moodTags||[]),keys:t.filter(n=>n.displayKey).length,stale:t.filter(n=>n.daysSinceLast>=180).length}}function $(t=""){let e=u("#setlist-planner");if(!e)return;if(Us(),e.hidden=!i.singerMode||!i.setlistExpanded,e.classList.toggle("is-open",i.singerMode&&i.setlistExpanded),!i.singerMode){e.innerHTML="";return}let n=we(),s=qs(n),a=n.length*5;e.innerHTML=`
    <div class="setlist-head">
      <div>
        <div class="recommend-label">Setlist Builder</div>
        <h3>\u4ECA\u65E5\u306E\u30BB\u30C8\u30EA</h3>
      </div>
      <div class="setlist-total">${n.length}\u66F2 / \u7D04${a}\u5206</div>
    </div>
    <input id="setlist-theme" class="text-input setlist-theme" type="text" placeholder="\u6B4C\u67A0\u30C6\u30FC\u30DE\u30E1\u30E2" value="${d(i.setlist.theme)}">
    <div class="setlist-custom-add" aria-label="\u65B0\u3057\u3044\u66F2\u3092\u30BB\u30C8\u30EA\u306B\u8FFD\u52A0">
      <input id="setlist-custom-title" class="text-input" type="text" placeholder="\u65B0\u3057\u3044\u66F2\u540D">
      <input id="setlist-custom-artist" class="text-input" type="text" placeholder="\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\uFF08\u4EFB\u610F\uFF09">
      <input id="setlist-custom-key" class="text-input" type="text" placeholder="\u30AD\u30FC\uFF08\u4EFB\u610F\uFF09">
      <button class="btn primary" type="button" data-setlist-action="add-custom">\u8FFD\u52A0</button>
    </div>
    <div class="setlist-balance">
      ${En("\u30B8\u30E3\u30F3\u30EB",s.genres)}
      ${En("\u96F0\u56F2\u6C17",s.moods)}
      <span>\u30AD\u30FC ${s.keys}/${n.length}</span>
      <span>\u4E45\u3057\u3076\u308A ${s.stale}</span>
    </div>
    <div class="setlist-items">
      ${n.length?n.map((r,l)=>Os(r,l)).join(""):'<div class="setlist-empty">\u66F2\u306E\u300C\uFF0B\u30BB\u30C8\u30EA\u300D\u304B\u30E9\u30F3\u30C0\u30E0\u8FFD\u52A0\u304B\u3089\u4F5C\u308C\u307E\u3059</div>'}
    </div>
    <div class="setlist-actions">
      <select id="setlist-copy-format" class="select-input">
        <option value="simple"${i.setlist.copyFormat==="simple"?" selected":""}>\u66F2\u540D / \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8</option>
        <option value="timestamp"${i.setlist.copyFormat==="timestamp"?" selected":""}>\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u5165\u529B\u7528</option>
      </select>
      <button class="btn ghost" type="button" data-setlist-action="random">\u30E9\u30F3\u30C0\u30E0\u8FFD\u52A0</button>
      <button class="btn primary" type="button" data-setlist-action="copy">\u30B3\u30D4\u30FC</button>
      <button class="btn ghost" type="button" data-setlist-action="clear">\u30AF\u30EA\u30A2</button>
      ${t?`<span class="setlist-message">${d(t)}</span>`:""}
    </div>
  `}function En(t,e){return e.length?`<span>${t} ${e.map(([n,s])=>`${d(n)} ${s}`).join(" / ")}</span>`:`<span>${t} \u2014</span>`}function Os(t,e){return`
    <div class="setlist-item">
      <div class="setlist-no">${e+1}</div>
      <div class="setlist-info">
        <strong>${d(t.title)}</strong>
        <span>${t.artist?d(t.artist):"\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u672A\u5165\u529B"}${t.displayKey?` \xB7 key ${d(t.displayKey)}`:""}${t.custom?" \xB7 \u65B0\u898F":""}</span>
      </div>
      <div class="setlist-move">
        <button class="setlist-copy-one" type="button" data-setlist-action="copy-item" data-index="${e}" aria-label="${d(t.title)}\u3092\u30B3\u30D4\u30FC">\u29C9</button>
        <button type="button" data-setlist-action="up" data-index="${e}" aria-label="\u4E0A\u3078">\u2191</button>
        <button type="button" data-setlist-action="down" data-index="${e}" aria-label="\u4E0B\u3078">\u2193</button>
        <button type="button" data-setlist-action="remove" data-index="${e}" aria-label="\u524A\u9664">\xD7</button>
      </div>
    </div>
  `}function Gs(){let t=we(),e=[];return i.setlist.theme&&e.push(`# ${i.setlist.theme}`,""),t.forEach(n=>{e.push(Nn(n))}),e.join(`
`)}function Nn(t){let e=String(t?.title||"").trim(),n=String(t?.artist||"").trim(),s=n?`${e} / ${n}`:e;return i.setlist.copyFormat==="timestamp"?`00:00 ${s}`:s}async function zs(){let t=Gs();if(!t.trim()){$("\u30B3\u30D4\u30FC\u3059\u308B\u66F2\u304C\u3042\u308A\u307E\u305B\u3093");return}try{await navigator.clipboard.writeText(t),$("\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F")}catch{$("\u30B3\u30D4\u30FC\u306B\u5931\u6557\u3057\u307E\u3057\u305F")}}async function Bs(t){let e=we()[t];if(!e){$("\u30B3\u30D4\u30FC\u3059\u308B\u66F2\u304C\u3042\u308A\u307E\u305B\u3093");return}try{await navigator.clipboard.writeText(Nn(e)),$("1\u66F2\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F")}catch{$("\u30B3\u30D4\u30FC\u306B\u5931\u6557\u3057\u307E\u3057\u305F")}}function Vs(t,e){let n=t.rank===1?"r1":t.rank===2?"r2":t.rank===3?"r3":"",s=t.lastSung?`<div>${S(t.lastSung)}</div><span class="badge ${W(t.daysSinceLast)}">${t.daysSinceLast}\u65E5\u524D</span>`:'<div>\u5C65\u6B74\u672A\u78BA\u8A8D</div><span class="badge never">\u8981\u78BA\u8A8D</span>',a=ee(t.title,e),r=ee(t.artist,e),l=te(t,i.songsQuery);return`
    <div class="song-row" data-songkey="${d(t.key)}" data-songtitle="${d(t.title)}" data-songartist="${d(t.artist)}" title="\u30AF\u30EA\u30C3\u30AF\u3067\u66F2\u8A73\u7D30\u3092\u8868\u793A">
      <div class="rank ${n}">${t.rank}</div>
      <div class="info">
        <div class="title">${a}</div>
        <button class="artist artist-search-btn" type="button" data-artist-search="${d(t.artist)}">${r}</button>
        <div class="song-meta-line">
          <span class="genre-badge">${d(Ct(t))}</span>
          ${Qs(t)}
          ${l.map(o=>`<span class="match-badge">${d(o)}\u4E00\u81F4</span>`).join("")}
        </div>
        ${Ys(t)}
      </div>
      <div class="song-row-side">
        <div class="count">${t.count}<small>\u56DE</small></div>
        <div class="last">${s}</div>
      </div>
    </div>
  `}function Us(){let t=u("#setlist-toggle-btn");if(!t)return;let e=i.setlist.items.length;t.setAttribute("aria-expanded",i.setlistExpanded?"true":"false"),t.textContent=i.setlistExpanded?`\u30BB\u30C8\u30EA\u5236\u4F5C\u3092\u9589\u3058\u308B${e?` (${e})`:""}`:`\u30BB\u30C8\u30EA\u5236\u4F5C\u3092\u958B\u304F${e?` (${e})`:""}`}function Qs(t){return[...(t.seasonTags||[]).map(n=>({tag:n,type:"season"})),...(t.moodTags||[]).map(n=>({tag:n,type:"mood"})),...i.singerMode?(t.singerTags||[]).map(n=>({tag:n,type:"tag"})):[]].slice(0,i.songsView==="compact"?2:5).map(({tag:n,type:s})=>`
    <button class="tag-badge tag-click" type="button" data-tag-type="${s}" data-tag-search="${d(n)}">${d(n)}</button>
  `).join("")}function Ys(t){if(!i.singerMode)return"";let e=`<button class="setlist-add-btn" type="button" data-setlist-action="add" data-songkey="${d(t.key)}">\uFF0B\u30BB\u30C8\u30EA</button>`;if(!i.data?.stats?.keyPublished)return`<div class="song-key-line song-key-actions">${e}</div>`;let n=String(t.displayKey||"").trim();return n?`
    <div class="song-key-line song-key-actions">
      <button type="button" class="song-key-badge" title="\u7D71\u5408\u96C6\u8A08 T/U\u5217\u306E\u30AD\u30FC">
        <span>\u30AD\u30FC</span><strong>${d(n)}</strong>
      </button>
      ${e}
    </div>
  `:`<div class="song-key-line song-key-actions"><span class="song-key-empty">\u30AD\u30FC\u672A\u767B\u9332</span>${e}</div>`}var lt,Tt,B,ye,ve,Dt,An,Mt,In,be,Hn=g(()=>{C();tt();A();oe();fe();X();In="kanau-setlist-v1",be=[]});var Kn={};U(Kn,{renderTimeline:()=>Et});function Et(){let{streams:t}=i.data,e=i.timelineFilter,n=e?t.filter(c=>c.songs.some(m=>m.key===e.key)):t,s=Zs(n,i.timelineSort),a=u("#panel-timeline");a.innerHTML=`
    <div class="section-header">
      <h2>\u{1F4C5} \u914D\u4FE1\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3</h2>
      <span class="count-pill">${s.length}\u67A0</span>
    </div>
    <div class="timeline-tools">
      <label class="timeline-sort-field" for="timeline-sort">
        <span>\u4E26\u3073\u66FF\u3048</span>
        <select id="timeline-sort" class="select-input">
          <option value="date-desc"${i.timelineSort==="date-desc"?" selected":""}>\u914D\u4FE1\u65E5\uFF08\u65B0\u3057\u3044\u9806\uFF09</option>
          <option value="date-asc"${i.timelineSort==="date-asc"?" selected":""}>\u914D\u4FE1\u65E5\uFF08\u53E4\u3044\u9806\uFF09</option>
          <option value="songs-desc"${i.timelineSort==="songs-desc"?" selected":""}>\u66F2\u6570\uFF08\u591A\u3044\u9806\uFF09</option>
          <option value="songs-asc"${i.timelineSort==="songs-asc"?" selected":""}>\u66F2\u6570\uFF08\u5C11\u306A\u3044\u9806\uFF09</option>
          <option value="index-desc"${i.timelineSort==="index-desc"?" selected":""}>\u67A0\u756A\u53F7\uFF08\u5927\u304D\u3044\u9806\uFF09</option>
          <option value="index-asc"${i.timelineSort==="index-asc"?" selected":""}>\u67A0\u756A\u53F7\uFF08\u5C0F\u3055\u3044\u9806\uFF09</option>
          <option value="title"${i.timelineSort==="title"?" selected":""}>\u30BF\u30A4\u30C8\u30EB\u9806</option>
        </select>
      </label>
    </div>
    <div id="timeline-filter-banner"></div>
    <div id="timeline" class="timeline"></div>
    <div class="timeline-controls" id="timeline-controls"></div>
  `,u("#timeline-sort")?.addEventListener("change",c=>{i.timelineSort=c.target.value||"date-desc",i.timelineLimit=me,Et()});let r=u("#timeline-filter-banner");if(e){let c=s.reduce((m,p)=>m+p.songs.filter(h=>h.key===e.key).length,0);r.innerHTML=`
      <div class="filter-banner">
        <span class="filter-icon">\u{1F50E}</span>
        <div class="filter-text">
          <strong>${d(e.title)}</strong>
          <span style="color:var(--ink-mute);"> / ${d(e.artist)}</span>
          <span class="meta">\u3053\u306E\u66F2\u3092\u6B4C\u3063\u305F\u914D\u4FE1\u306E\u307F\u8868\u793A\u4E2D\uFF08${s.length}\u67A0 / ${c}\u56DE\u6B4C\u5531\uFF09</span>
        </div>
        <button class="clear-btn" id="clear-filter">\u2715 \u7D5E\u308A\u8FBC\u307F\u3092\u89E3\u9664</button>
      </div>
    `,u("#clear-filter").addEventListener("click",()=>{i.timelineFilter=null,i.timelineLimit=me,Et()})}if(!s.length){u("#timeline").innerHTML='<div class="empty-state">\u8A72\u5F53\u3059\u308B\u914D\u4FE1\u304C\u3042\u308A\u307E\u305B\u3093 \u{1F420}</div>';return}let l=s.slice(0,i.timelineLimit);if(u("#timeline").innerHTML=l.map((c,m)=>Ws(c,m,e)).join(""),i.timelineFocus){let m=document.querySelector(`[data-streamkey="${CSS.escape(i.timelineFocus)}"]`)?.closest(".timeline-item");m?.classList.add("focus"),m?.scrollIntoView({behavior:"smooth",block:"center"}),i.timelineFocus=null}u("#timeline").onclick=async c=>{let m=c.target.closest("[data-copy-stream]");if(!m)return;c.stopPropagation();let p=l[Number(m.dataset.copyStream)];if(p)try{await navigator.clipboard.writeText(Js(p)),m.textContent="\u30B3\u30D4\u30FC\u6E08\u307F",setTimeout(()=>{m.textContent="\u30BB\u30C8\u30EA\u30B3\u30D4\u30FC"},1200)}catch{m.textContent="\u5931\u6557",setTimeout(()=>{m.textContent="\u30BB\u30C8\u30EA\u30B3\u30D4\u30FC"},1200)}};let o=u("#timeline-controls");i.timelineLimit<s.length&&(o.innerHTML=`<button class="load-more-btn" id="load-more">\u25BC \u3082\u3063\u3068\u898B\u308B (\u6B8B\u308A${s.length-i.timelineLimit}\u67A0)</button>`,u("#load-more").addEventListener("click",()=>{i.timelineLimit+=bn,Et()}))}function Ws(t,e,n){let s=!n&&i.timelineSort==="date-desc"&&e<3?"recent":"",a=t.songs.map((c,m)=>{let p=n&&c.key===n.key?" hit":"",h=p?"\u30AF\u30EA\u30C3\u30AF\u3067\u7D5E\u308A\u8FBC\u307F\u89E3\u9664":"\u30AF\u30EA\u30C3\u30AF\u3067\u7D5E\u308A\u8FBC\u307F";return`<span class="setlist-song${p}" data-songkey="${d(c.key)}" data-songtitle="${d(c.title)}" data-songartist="${d(c.artist)}" title="${h}"><span class="sl-num">${m+1}</span>${d(c.title)}<span style="color:var(--ink-mute);"> / ${d(c.artist)}</span></span>`}).join(""),r=t.url?`<a href="${d(t.url)}" target="_blank" rel="noopener">${d(t.title||"\u914D\u4FE1")}</a>`:d(t.title||"\u914D\u4FE1"),l=t.url?`<a class="watch-link" href="${d(t.url)}" target="_blank" rel="noopener">\u25B6 YouTube</a>`:"",o=i.singerMode?`<button class="timeline-copy-btn" type="button" data-copy-stream="${e}">\u30BB\u30C8\u30EA\u30B3\u30D4\u30FC</button>`:"";return`
    <article class="timeline-item ${s}">
      <span class="stream-anchor" data-streamkey="${d(q(t))}"></span>
      <header class="timeline-head">
        <span class="timeline-date">${S(t.date)}</span>
        <span class="timeline-stream-no">\u7B2C${t.index}\u67A0</span>
        <span class="timeline-songcount">\u{1F3A4} ${t.songs.length}\u66F2</span>
        ${o}
        ${l}
      </header>
      <div class="timeline-title">${r}</div>
      <div class="setlist">${a}</div>
    </article>
  `}function Zs(t,e){let n=[...t],s=o=>o.date instanceof Date?o.date.getTime():new Date(o.date||0).getTime(),a=o=>Number(o.index)||0,r=o=>o.songs?.length||0,l=(o,c)=>s(c)-s(o)||a(c)-a(o);switch(e){case"date-asc":n.sort((o,c)=>s(o)-s(c)||a(o)-a(c));break;case"songs-desc":n.sort((o,c)=>r(c)-r(o)||l(o,c));break;case"songs-asc":n.sort((o,c)=>r(o)-r(c)||l(o,c));break;case"index-desc":n.sort((o,c)=>a(c)-a(o)||l(o,c));break;case"index-asc":n.sort((o,c)=>a(o)-a(c)||l(o,c));break;case"title":n.sort((o,c)=>String(o.title||"").localeCompare(String(c.title||""),"ja")||l(o,c));break;case"date-desc":default:n.sort(l);break}return n}function Js(t){return(t.songs||[]).map(e=>{let n=String(e?.title||"").trim(),s=String(e?.artist||"").trim();return s?`${n} / ${s}`:n}).filter(Boolean).join(`
`)}var jn=g(()=>{C();it();A()});var On={};U(On,{renderAnalytics:()=>Xs});function Xs(){let{songs:t,streams:e,artists:n}=i.data,s=u("#panel-analytics");s.innerHTML=`
    <div class="section-header">
      <h2>\u{1F4C8} \u30A2\u30CA\u30EA\u30C6\u30A3\u30AF\u30B9</h2>
      <span class="count-pill">${e.length}\u67A0 \xD7 ${t.length}\u66F2\u3092\u5206\u6790</span>
    </div>

    <div class="dashboard-grid">

      <div class="card col-6">
        <div class="card-title">\u{1F4DA} \u6301\u3061\u66F2\u306E\u7D2F\u7A4D\u6210\u9577 <span class="pill">\u521D\u62AB\u9732\u30D9\u30FC\u30B9</span></div>
        ${F("chart-growth")}
      </div>

      <div class="card col-6">
        <div class="card-title">\u{1F3A4} 1\u67A0\u3042\u305F\u308A\u306E\u66F2\u6570 <span class="pill">\u6642\u7CFB\u5217</span></div>
        ${F("chart-songs-per-stream")}
      </div>

      <div class="card col-6">
        <div class="card-title">\u{1F4C5} \u66DC\u65E5\u5206\u5E03 <span class="pill">\u914D\u4FE1\u65E5</span></div>
        ${F("chart-dow",{class:"short"})}
      </div>

      <div class="card col-6">
        <div class="card-title">\u{1F4CA} \u6B4C\u5531\u56DE\u6570\u306E\u5206\u5E03 <span class="pill">\u30D2\u30B9\u30C8\u30B0\u30E9\u30E0</span></div>
        ${F("chart-histogram",{class:"short"})}
      </div>

      <div class="card col-12">
        <div class="card-title">\u{1F465} \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u5225 \u6B4C\u5531\u5408\u8A08 <span class="pill">TOP${pe}</span></div>
        <div id="artist-bar-list" class="bar-list"></div>
      </div>

      <div class="card col-6">
        <div class="card-title">\u{1F31F} \u4E45\u3057\u3076\u308A\u306B\u6B4C\u308F\u308C\u305F\u66F2 <span class="pill">\u524D\u56DE\u304B\u3089\u9577\u304B\u3063\u305FTOP10</span></div>
        <div id="comeback-list"></div>
      </div>

      <div class="card col-6">
        <div class="card-title">\u23F3 1\u56DE\u3057\u304B\u6B4C\u308F\u308C\u3066\u3044\u306A\u3044\u66F2 <span class="pill">${t.filter(a=>a.count===1).length}\u66F2</span></div>
        <div id="oneshot-list"></div>
      </div>

    </div>
  `,ta(t),ea(e),na(e),sa(t),aa(n.length?n:j(t)),ia(t),ra(t)}function ta(t){let e=I(),n=new Map;for(let m of t){if(!m.firstSung)continue;let p=k(m.firstSung);n.set(p,(n.get(p)||0)+1)}let s=Array.from(n.keys()).sort();if(!s.length)return;let a=[],r=[],l=0,o=qn(s[0]),c=qn(s[s.length-1]);for(;o<=c;){let m=k(o);l+=n.get(m)||0,a.push(ht(o)),r.push(l),o=new Date(o.getFullYear(),o.getMonth()+1,1)}R("chart-growth","line",{labels:a,datasets:[{label:"\u7D2F\u7A4D\u6301\u3061\u66F2\u6570",data:r,borderColor:e.primaryStrong,backgroundColor:e.primary+"33",tension:.25,fill:!0,pointRadius:2,borderWidth:2}]})}function qn(t){let[e,n]=t.split("-").map(Number);return new Date(e,n-1,1)}function ea(t){let e=I(),n=[...t].sort((s,a)=>s.date-a.date);R("chart-songs-per-stream","line",{labels:n.map(s=>S(s.date)),datasets:[{label:"\u66F2\u6570",data:n.map(s=>s.songs.length),borderColor:e.accentStrong,backgroundColor:e.accent+"33",tension:.2,fill:!0,pointRadius:1.5,borderWidth:1.5}]},{scales:{x:{ticks:{maxTicksLimit:8}}}})}function na(t){let e=I(),n=["\u65E5","\u6708","\u706B","\u6C34","\u6728","\u91D1","\u571F"],s=new Array(7).fill(0),a=new Array(7).fill(0);for(let r of t)s[r.dayOfWeek]+=1,a[r.dayOfWeek]+=r.songs.length;R("chart-dow","bar",{labels:n,datasets:[{label:"\u914D\u4FE1\u56DE\u6570",data:s,backgroundColor:e.primary+"cc",borderColor:e.primaryStrong,borderWidth:1,yAxisID:"y",borderRadius:6},{label:"\u6B4C\u5531\u6570",data:a,backgroundColor:e.accent+"cc",borderColor:e.accentStrong,borderWidth:1,yAxisID:"y2",borderRadius:6}]},{scales:{y:{position:"left",title:{display:!0,text:"\u914D\u4FE1",color:e.inkMute,font:{size:10}}},y2:{position:"right",title:{display:!0,text:"\u6B4C\u5531",color:e.inkMute,font:{size:10}},grid:{display:!1},beginAtZero:!0}}})}function sa(t){let e=I(),n=[{label:"1\u56DE",range:[1,1]},{label:"2\u56DE",range:[2,2]},{label:"3\u56DE",range:[3,3]},{label:"4-5\u56DE",range:[4,5]},{label:"6-10\u56DE",range:[6,10]},{label:"11-20\u56DE",range:[11,20]},{label:"21\u56DE\u301C",range:[21,1/0]}],s=n.map(a=>t.filter(r=>r.count>=a.range[0]&&r.count<=a.range[1]).length);R("chart-histogram","bar",{labels:n.map(a=>a.label),datasets:[{label:"\u66F2\u6570",data:s,backgroundColor:e.primary+"cc",borderColor:e.primaryStrong,borderWidth:1,borderRadius:6}]},{plugins:{legend:{display:!1}}})}function aa(t){let e=t.slice(0,pe),n=u("#artist-bar-list");if(!e.length){n.innerHTML='<div class="empty-state">\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u30C7\u30FC\u30BF\u304C\u3042\u308A\u307E\u305B\u3093</div>';return}let s=e[0]?.totalCount||1;n.innerHTML=e.map((a,r)=>{let l=Math.round(a.totalCount/s*100);return`
      <div class="bar-row">
        <div class="bar-rank">${r+1}</div>
        <div class="bar-content">
          <div class="bar-label">${d(a.artist)} <span style="color:var(--ink-mute);font-size:11px;">\uFF08${a.songCount}\u66F2\uFF09</span></div>
          <div class="bar-bar accent" style="width:${l}%;"></div>
        </div>
        <div class="bar-value">${a.totalCount}</div>
      </div>
    `}).join("")}function ia(t){let e=Ve(t,10);u("#comeback-list").innerHTML=e.length?e.map((n,s)=>`
    <div class="activity-row" data-songkey="${d(n.song.key)}" data-songtitle="${d(n.song.title)}" data-songartist="${d(n.song.artist)}" style="cursor:pointer;" title="\u30AF\u30EA\u30C3\u30AF\u3067\u914D\u4FE1\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u306B\u7D5E\u308A\u8FBC\u307F">
      <span class="a-date">${n.maxGap}\u65E5</span>
      <span class="a-title">${d(n.song.title)} <span style="color:var(--ink-mute);">/ ${d(n.song.artist)}</span></span>
      <span class="a-meta">${S(n.gapStart)}\u2192${S(n.gapEnd)}</span>
    </div>
  `).join(""):'<div class="empty-state">\u8A72\u5F53\u30C7\u30FC\u30BF\u306A\u3057</div>'}function ra(t){let e=t.filter(n=>n.count===1).sort((n,s)=>(s.lastSung?.getTime()||0)-(n.lastSung?.getTime()||0)).slice(0,10);u("#oneshot-list").innerHTML=e.length?e.map(n=>`
    <div class="activity-row" data-songkey="${d(n.key)}" data-songtitle="${d(n.title)}" data-songartist="${d(n.artist)}" style="cursor:pointer;" title="\u30AF\u30EA\u30C3\u30AF\u3067\u914D\u4FE1\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u306B\u7D5E\u308A\u8FBC\u307F">
      <span class="a-date">${n.lastSung?S(n.lastSung):"\u2014"}</span>
      <span class="a-title">${d(n.title)} <span style="color:var(--ink-mute);">/ ${d(n.artist)}</span></span>
      <span class="a-meta">${n.daysSinceLast!=null?n.daysSinceLast+"\u65E5\u524D":"\u2014"}</span>
    </div>
  `).join(""):'<div class="empty-state">\u8A72\u5F53\u30C7\u30FC\u30BF\u306A\u3057</div>'}var Gn=g(()=>{C();A();it();kt();pt();Zt()});C();ne();oe();le();kt();A();it();fe();fn();De();var Vn={dashboard:()=>Promise.resolve().then(()=>(xn(),Ln)).then(t=>t.renderDashboard),ranking:()=>Promise.resolve().then(()=>(Mn(),Dn)).then(t=>t.renderRanking),songs:()=>Promise.resolve().then(()=>(Hn(),Rn)).then(t=>t.renderSongs),timeline:()=>Promise.resolve().then(()=>(jn(),Kn)).then(t=>t.renderTimeline),analytics:()=>Promise.resolve().then(()=>(Gn(),On)).then(t=>t.renderAnalytics)},At=new Map,zn=0,It=null;function ke(t){return Object.prototype.hasOwnProperty.call(Vn,t)}async function oa(t){At.has(t)||At.set(t,Vn[t]());try{return await At.get(t)}catch(e){throw At.delete(t),e}}function la(t){return["dashboard","ranking","songs","timeline","analytics"].includes(t)}function ca(){let t=u("#panel-dashboard");if(!t||!i.channelData)return;let e=Object.values(i.channelData.channels||{}).map(s=>s.stats||{}).filter(s=>s.channelLabel||s.channelId),n=e.length?e:[i.channelData.combined?.stats||{}];t.innerHTML=`
    <div class="dashboard-grid">
      ${n.map(s=>`
        <div class="card col-6">
          <div class="card-title">${d(s.channelLabel||s.channelId||"\u5168\u671F\u9593")}</div>
          <div style="display:grid;gap:10px;">
            <div class="activity-row">
              <span class="a-date">\u6B4C\u5531</span>
              <span class="a-meta">\u7DCF\u6B4C\u5531\u6570</span>
              <strong>${N(s.total||0)}\u56DE</strong>
            </div>
            <div class="activity-row">
              <span class="a-date">\u66F2\u6570</span>
              <span class="a-meta">\u6301\u3061\u66F2\u6570</span>
              <strong>${N(s.repertoire||0)}\u66F2</strong>
            </div>
            <div class="activity-row">
              <span class="a-date">\u6B4C\u67A0</span>
              <span class="a-meta">\u914D\u4FE1\u56DE\u6570</span>
              <strong>${N(s.streams||0)}\u56DE</strong>
            </div>
            <div class="activity-row">
              <span class="a-date">\u5E73\u5747</span>
              <span class="a-meta">1\u67A0\u5E73\u5747</span>
              <strong>${s.avgPerStream??"\u2014"}\u66F2</strong>
            </div>
          </div>
        </div>
      `).join("")}
    </div>
  `}function da(t,e={}){if(t==="dashboard"&&e.initial){ca();return}let n=u(`#panel-${t}`);if(!n)return;let s={dashboard:"\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9\u8A73\u7D30",ranking:"\u30E9\u30F3\u30AD\u30F3\u30B0",songs:"\u66F2\u30EA\u30B9\u30C8",timeline:"\u914D\u4FE1\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3",analytics:"\u30A2\u30CA\u30EA\u30C6\u30A3\u30AF\u30B9"};n.innerHTML=`
    <div class="state-card">
      <div class="msg">${d(s[t]||"\u8A73\u7D30\u30C7\u30FC\u30BF")}</div>
      <div class="err-detail">\u8AAD\u307F\u8FBC\u307F\u4E2D\u3067\u3059\u3002</div>
    </div>
  `}function ua(t){let e=u(`#panel-${t}`);e&&(e.innerHTML=`
    <div class="state-card">
      <div class="msg">\u8A73\u7D30\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059</div>
    </div>
  `)}async function ma(){if(i.channelData?.fullLoaded)return;It||(It=se({meta:i.channelData}).finally(()=>{It=null}));let t=await It;i.channelData=t,i.channelData.fullLoaded=!0;let e=V(i.channel)?i.channel:$t;Pt(e,{resetSearch:!1,updateUrl:!1,render:!1})}async function dt(t=i.activeTab,e={}){if(!i.data||!ke(t))return;if(la(t)&&!i.channelData?.fullLoaded)if(e.autoLoad){ua(t);try{await ma()}catch(s){console.error("[data] full load failed",s);let a=u(`#panel-${t}`);a&&(a.innerHTML=`
            <div class="state-card">
              <div class="msg">\u8A73\u7D30\u30C7\u30FC\u30BF\u306E\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F</div>
              <div class="err-detail">${d(s?.message||String(s))}</div>
              <button class="btn primary" type="button" data-load-full-data="${d(t)}">\u518D\u8AAD\u307F\u8FBC\u307F</button>
            </div>
          `,a.querySelector("[data-load-full-data]")?.addEventListener("click",()=>{dt(t,{autoLoad:!0})}));return}}else{da(t,{initial:e.initial});return}let n=++zn;try{let s=await oa(t);if(n!==zn||t!==i.activeTab||!i.data)return;t==="songs"&&ln(i.data.songs||[]),s()}catch(s){console.error(`[${t}] render failed`,s);let a=u(`#panel-${t}`);a&&(a.innerHTML=`
        <div class="state-card">
          <div class="msg">\u8868\u793A\u306B\u5931\u6557\u3057\u307E\u3057\u305F</div>
          <div class="err-detail">${d(s?.message||String(s))}</div>
        </div>
      `)}}function H(t,e={}){ke(t)||(t="dashboard"),i.activeTab=t,x(".tab-btn").forEach(n=>n.classList.toggle("active",n.dataset.tab===t)),x(".panel").forEach(n=>n.classList.toggle("active",n.id===`panel-${t}`)),e.updateUrl!==!1&&P({tab:t}),dt(t,{autoLoad:e.autoLoad!==!1,initial:!!e.initial})}function V(t){return i.channelData?t==="all"?i.channelData.combined:i.channelData.channels[t]||null:null}function Pt(t,e={}){let n=V(t);n&&(i.channel=t,Ca(t),i.data=n,i.timelineFilter=null,i.timelineFocus=null,i.timelineLimit=12,i.songsLimit=100,e.resetSearch!==!1&&(i.songsQuery="",i.songsGenre="all"),ue(),x("#channel-switch [data-channel]").forEach(s=>s.classList.toggle("active",s.dataset.channel===t)),$e(),e.updateUrl!==!1&&P({tab:i.activeTab,channel:t,q:i.songsQuery}),La(),e.render!==!1&&dt(i.activeTab,{autoLoad:e.autoLoad!==!1}))}function Un(t,e={}){i.audience=t==="singer"?"singer":"listener",i.singerMode=i.audience==="singer",i.singerMode||(i.singerPreset="all"),x(".audience-switch [data-audience]").forEach(n=>{n.classList.toggle("active",n.dataset.audience===i.audience)}),document.body.dataset.audience=i.audience,$e(),i.audience==="singer"?(i.songsLimit=100,H("songs",{autoLoad:e.autoLoad!==!1})):i.data&&dt(i.activeTab,{autoLoad:e.autoLoad!==!1,initial:!!e.initial})}function $e(){let t=u("#mobile-menu-label");if(!t)return;let e=u("#channel-switch [data-channel].active")?.textContent?.trim()||"\u65B0ch",n=u("#audience-switch [data-audience].active")?.textContent?.trim()||"\u30EA\u30B9\u30CA\u30FC";t.textContent=`${e} / ${n}`}function pa(){let t=u("#mobile-menu-toggle"),e=u("#mobile-menu-state"),n=u("#topbar-actions");if(!t||!e||!n)return;let s=r=>{e.checked=r,n.classList.toggle("is-open",r),t.setAttribute("aria-expanded",String(r))},a=()=>s(!1);t.addEventListener("click",r=>{r.stopPropagation(),requestAnimationFrame(()=>s(e.checked))}),t.addEventListener("keydown",r=>{r.key!=="Enter"&&r.key!==" "||(r.preventDefault(),s(!e.checked))}),e.addEventListener("change",()=>{s(e.checked)}),document.addEventListener("click",r=>{n.classList.contains("is-open")&&(r.target.closest("#topbar-actions")||r.target.closest("#mobile-menu-toggle")||r.target.closest("#mobile-menu-state")||a())}),document.addEventListener("keydown",r=>{r.key==="Escape"&&a()}),n.addEventListener("click",r=>{r.stopPropagation()}),$e()}function fa(){let t=u("#page-top-toast");if(!t)return;let e=t.querySelector("img[data-src]"),n=!1,s=420,a=()=>{!e||e.src||(e.src=e.dataset.src||"")},r=()=>{n=!1;let o=window.scrollY>s;o&&a(),t.hidden=!o,t.classList.toggle("is-visible",o),t.setAttribute("aria-hidden",String(!o)),t.tabIndex=o?0:-1},l=()=>{n||(n=!0,requestAnimationFrame(r))};t.hidden=!0,t.setAttribute("aria-hidden","true"),t.tabIndex=-1,t.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),window.addEventListener("scroll",l,{passive:!0}),r()}function ga(){if(i.channelData)for(let t of x("#channel-switch [data-channel]")){let e=t.dataset.channel,n=e==="all"?!!i.channelData.combined:!!(i.channelData.channels&&i.channelData.channels[e]);t.disabled=!n,n?t.removeAttribute("title"):t.title="\u30C7\u30FC\u30BF\u3092\u53D6\u5F97\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F"}}function ha({key:t,title:e,artist:n}){i.timelineFilter&&i.timelineFilter.key===t&&i.activeTab==="timeline"?i.timelineFilter=null:i.timelineFilter={key:t,title:e,artist:n},i.timelineFocus=null,i.timelineLimit=12,H("timeline"),u("#panel-timeline").scrollIntoView({behavior:"smooth",block:"start"})}function ya(t,e){i.timelineFilter={key:t.key,title:t.title,artist:t.artist},i.timelineFocus=q(e),i.timelineLimit=9999,H("timeline"),u("#panel-timeline").scrollIntoView({behavior:"smooth",block:"start"})}function va(t){Qn(t.artist||"")}function Qn(t){let e=String(t||"").replace(/"/g,"");i.songsQuery=e?`artist:"${e}"`:"",i.songsLimit=100,P({tab:"songs",q:i.songsQuery}),H("songs",{updateUrl:!1})}function Ft(t){return(i.data?.songs||[]).find(e=>e.key===t)||null}function Le(t){let e=String(t||""),n=[/youtu\.be\/([A-Za-z0-9_-]{11})/,/youtube\.com\/watch\?[^#]*v=([A-Za-z0-9_-]{11})/,/youtube\.com\/live\/([A-Za-z0-9_-]{11})/,/youtube\.com\/shorts\/([A-Za-z0-9_-]{11})/,/youtube\.com\/embed\/([A-Za-z0-9_-]{11})/];for(let s of n){let a=e.match(s);if(a)return a[1]}return""}function ba(t){let e=Le(t);return e?`https://i.ytimg.com/vi/${e}/hqdefault.jpg`:""}function Sa(t){let e=Le(t);return e?`https://i.ytimg.com/vi/${e}/mqdefault.jpg`:""}function wa(t){let e=Le(t);return e?`https://i.ytimg.com/vi/${e}/default.jpg`:""}function ka(t){let e=Ft(t),n=u("#song-modal"),s=u("#song-modal-body"),a=u("#song-modal-title");if(!e||!n||!s||!a)return;yt(e),a.textContent=e.title;let r=(e.streamRefs||[]).slice(0,8).map(o=>({...o,thumbnail:ba(o.url),thumbnailFallback:Sa(o.url),thumbnailTiny:wa(o.url),detailKey:q(o)})),l=[e.genre,...e.seasonTags||[],...e.moodTags||[],...e.singerTags||[]].filter(Boolean);s.innerHTML=`
    <div class="song-detail-main">
      <div>
        <button class="song-detail-artist" type="button" data-detail-action="artist" data-songkey="${d(e.key)}">${d(e.artist)}</button>
        <div class="song-detail-tags">${l.map(o=>`<span class="tag-badge">${d(o)}</span>`).join("")}</div>
      </div>
      <div class="song-detail-stats">
        <div><strong>${e.count}</strong><span>\u6B4C\u5531\u56DE\u6570</span></div>
        <div><strong>${e.displayKey||"\u2014"}</strong><span>\u30AD\u30FC</span></div>
        <div><strong>${e.daysSinceLast??"\u2014"}</strong><span>\u65E5\u524D</span></div>
      </div>
    </div>
    <div class="song-detail-actions">
      <button class="btn primary" type="button" data-detail-action="timeline" data-songkey="${d(e.key)}">\u6B4C\u67A0\u3092\u898B\u308B</button>
      <button class="btn ghost" type="button" data-detail-action="close">\u9589\u3058\u308B</button>
    </div>
    <div class="song-detail-history">
      <h3>\u6B4C\u3063\u305F\u6B4C\u67A0</h3>
      ${r.length?r.map(o=>`
        <div class="song-detail-stream">
          ${o.thumbnail&&o.url?`<a class="song-detail-thumb-link" href="${d(o.url)}" target="_blank" rel="noopener" aria-label="YouTube\u3067\u6B4C\u67A0\u3092\u958B\u304F"><img class="song-detail-thumb" src="${d(o.thumbnail)}" data-fallback="${d(o.thumbnailFallback)}" data-tiny="${d(o.thumbnailTiny)}" alt="" loading="lazy" referrerpolicy="no-referrer"></a>`:'<div class="song-detail-thumb placeholder"></div>'}
          <button class="song-detail-frame" type="button" data-detail-action="stream" data-songkey="${d(e.key)}" data-streamkey="${d(o.detailKey)}">
            <span>${S(o.date)}</span>
            <strong>${d(o.title||"\u914D\u4FE1")}</strong>
          </button>
        </div>
      `).join(""):'<p class="song-detail-empty">\u5C65\u6B74\u672A\u78BA\u8A8D</p>'}
    </div>
  `,n.hidden=!1,u("#song-modal-close")?.focus()}function $a(){let t=u("#song-modal"),e=u("#song-modal-close");if(!t||!e)return;let n=()=>{t.hidden=!0};e.addEventListener("click",n),t.addEventListener("click",s=>{s.target===t&&n();let a=s.target.closest("[data-detail-action]");if(a){if(s.stopPropagation(),a.dataset.detailAction==="close"&&n(),a.dataset.detailAction==="timeline"){let r=Ft(a.dataset.songkey);n(),r&&ha(r)}if(a.dataset.detailAction==="stream"){let r=Ft(a.dataset.songkey),l=r?.streamRefs?.find(o=>q(o)===a.dataset.streamkey);n(),r&&l&&ya(r,l)}if(a.dataset.detailAction==="artist"){let r=Ft(a.dataset.songkey);n(),r&&va(r)}}}),t.addEventListener("error",s=>{let a=s.target.closest?.(".song-detail-thumb");if(!a)return;let r=a.dataset.fallback||a.dataset.tiny||"";if(r&&a.src!==r){a.src=r,a.dataset.fallback===r?delete a.dataset.fallback:delete a.dataset.tiny;return}a.closest(".song-detail-thumb-link")?.classList.add("thumb-missing")},!0),document.addEventListener("keydown",s=>{s.key==="Escape"&&!t.hidden&&n()})}function La(){let{stats:t,streams:e=[]}=i.data,n=e[0]?.date||null,s=E(n),a=t.dataGeneratedDate||i.channelData?.dataGeneratedDate||null,r=E(a),l=t.channelLabel||t.channelId||"",o=l?`<span class="badge accent" style="margin-right:8px;">${d(l)}</span>`:"";u("#updated-info").innerHTML=o+`\u30C7\u30FC\u30BF\u66F4\u65B0\u65E5\uFF1A<strong>${S(a)||"\u2014"}</strong>`+(r!=null?` <span class="badge">${r}\u65E5\u524D</span>`:""),u("#stats-grid").innerHTML=`
    <div class="stat-card">
      <div class="stat-label">\u7DCF\u6B4C\u5531\u6570</div>
      <div class="stat-value">${N(t.total)}<span class="stat-unit">\u56DE</span></div>
    </div>
    <div class="stat-card">
      <div class="stat-label">\u6301\u3061\u66F2\u6570</div>
      <div class="stat-value">${N(t.repertoire)}<span class="stat-unit">\u66F2</span></div>
    </div>
    <div class="stat-card">
      <div class="stat-label">\u6B4C\u67A0\u56DE\u6570</div>
      <div class="stat-value">${N(t.streams)}<span class="stat-unit">\u56DE</span></div>
    </div>
    <div class="stat-card">
      <div class="stat-label">1\u67A0\u5E73\u5747</div>
      <div class="stat-value">${t.avgPerStream}<span class="stat-unit">\u66F2</span></div>
    </div>
    <div class="stat-card accent">
      <div class="stat-label">\u6700\u65B0\u6B4C\u67A0\u304B\u3089</div>
      <div class="stat-value">${s??"\u2014"}<span class="stat-unit">\u65E5</span></div>
    </div>
    <div class="stat-card gold">
      <div class="stat-label">\u6D3B\u52D5\u671F\u9593</div>
      <div class="stat-value">${xa(i.data)}<span class="stat-unit">\u65E5</span></div>
    </div>
  `}function xa(t){if(!t.streams?.length)return"\u2014";let e=t.streams[t.streams.length-1].date,n=t.streams[0].date;return Math.floor((n-e)/864e5)+1}function Ta(){u("#loading").hidden=!1,u("#error").hidden=!0}function Da(){u("#loading").hidden=!0}function Ma(t){u("#loading").hidden=!0,u("#error").hidden=!1,u("#err-detail").textContent=t&&t.message?t.message:String(t)}function Ca(t){let e=document.getElementById("page-title");e&&(t==="new"?(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u65B0ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u65B0ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9"):t==="old"?(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u65E7ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u65E7ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9"):(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9"))}function Ea(){let t=u("#help-modal"),e=u("#help-btn"),n=u("#help-close");if(!t||!e||!n)return;let s=()=>{t.hidden=!1,n.focus()},a=()=>{t.hidden=!0,e.focus()};e.addEventListener("click",s),n.addEventListener("click",a),t.addEventListener("click",r=>{r.target===t&&a()}),document.addEventListener("keydown",r=>{r.key==="Escape"&&!t.hidden&&a()})}function Aa(){let t=u("#welcome-tip"),e=u("#welcome-close");if(!t||!e||window.matchMedia("(max-width: 760px)").matches||localStorage.getItem("kanau-welcome-tip-dismissed")==="1")return;let n=()=>{t.hidden=!1};"requestIdleCallback"in window?window.requestIdleCallback(n,{timeout:5e3}):window.setTimeout(n,2500),e.addEventListener("click",()=>{t.hidden=!0,localStorage.setItem("kanau-welcome-tip-dismissed","1")})}async function xe(){Ta();try{let t=await se();i.channelData=t;let e=Lt();i.songsQuery=e.q;let n=e.channel||i.channel||$t;if(V(n)||(n=$t),!V(n)){let r=Object.keys(t.channels)[0];r&&(n=r)}if(!V(n))throw new Error("No channel data could be loaded");ga(),Da();let s=ke(e.tab)?e.tab:i.activeTab,a=s!=="dashboard";Pt(n,{resetSearch:!1,updateUrl:!1,autoLoad:a}),H(s,{updateUrl:!1,autoLoad:a,initial:!0}),Un(i.audience,{autoLoad:a,initial:!0});for(let r of Object.values(t.channels))r.orphans?.length&&console.warn(`[${r.stats.channelLabel}] \u30BB\u30C8\u30EA\u2192\u30EA\u30B9\u30C8\u672A\u30DE\u30C3\u30C1: ${r.orphans.length}\u4EF6`,r.orphans)}catch(t){console.error(t),Ma(t)}}function Ia(){if(!i.channelData)return;let t=Lt();i.songsQuery=t.q,t.channel!==i.channel&&V(t.channel)&&Pt(t.channel,{resetSearch:!1,updateUrl:!1}),H(t.tab,{updateUrl:!1})}x(".tab-btn").forEach(t=>{t.addEventListener("click",()=>H(t.dataset.tab))});x(".ch-btn").forEach(t=>{t.addEventListener("click",()=>{t.dataset.channel&&(t.disabled||Pt(t.dataset.channel))})});window.addEventListener("popstate",Ia);x("[data-audience]").forEach(t=>{t.addEventListener("click",()=>Un(t.dataset.audience))});document.body.addEventListener("click",t=>{let e=t.target.closest("[data-artist-search]");if(e){t.preventDefault(),t.stopPropagation(),Qn(e.dataset.artistSearch||e.textContent||"");return}if(Je(t.target))return;let n=t.target.closest("[data-songkey]");n&&ka(n.dataset.songkey)});u("#retry-btn").addEventListener("click",xe);u("#reload-btn").addEventListener("click",xe);Ea();$a();pa();fa();Aa();yn(()=>{i.data&&(ue(),(i.activeTab==="dashboard"||i.activeTab==="analytics")&&dt())});function Bn(){window.requestAnimationFrame(()=>{window.setTimeout(xe,0)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Bn,{once:!0}):Bn();
