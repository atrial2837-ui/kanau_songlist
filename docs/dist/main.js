var ml=Object.defineProperty;var L=(t,e)=>()=>(t&&(e=t(t=0)),e);var wt=(t,e)=>{for(var s in e)ml(t,s,{get:e[s],enumerable:!0})};function us(t){for(let e of gl)e(t)}function ps(){let t=new URLSearchParams(window.location.search),e=t.get("tab"),s=t.get("ch"),n=t.get("v")||"";return{tab:hl.has(e)?e:"dashboard",channel:fl.has(s)?s:"new",q:t.get("q")||"",v:vl.test(n)?n:"",t:Math.max(0,parseInt(t.get("t")||"0",10)||0)}}function bl(t={},e={}){let s={...ps(),...t},n=new URLSearchParams;s.tab!=="dashboard"&&n.set("tab",s.tab),s.channel!=="new"&&n.set("ch",s.channel),s.q&&n.set("q",s.q),s.v&&(n.set("v",s.v),s.t>0&&n.set("t",String(Math.floor(s.t))));let a=n.toString(),i=a?`${window.location.pathname}?${a}`:window.location.pathname,r=e.replace?"replaceState":"pushState";return window.history[r](null,"",i),s}function Mi(){let t=ps(),e=!1;return t.tab!==Pt.tab&&(ct.activeTab=t.tab,e=!0),t.channel!==Pt.channel&&(ct.channel=t.channel,e=!0),t.q!==Pt.q&&(ct.songsQuery=t.q,e=!0),Pt=t,e}function $l(t){let e={};t.includes("tab")&&(e.tab=ct.activeTab),t.includes("channel")&&(e.channel=ct.channel),t.includes("q")&&(e.q=ct.songsQuery),Object.keys(e).length>0&&(bl(e,{replace:!0}),Pt={...Pt,...e})}function A(t){return ct[t]}function H(t,e,s={}){if(!(t in ct))return;let n=A(t);if(ct[t]=e,n!==e&&(us({key:t,prev:n,next:e}),s.updateUrl!==!1)){let a=[];t==="activeTab"&&a.push("tab"),t==="channel"&&a.push("channel"),t==="songsQuery"&&a.push("q"),a.length>0&&$l(a)}}function _i(){try{let t=localStorage.getItem(Ti);if(!t)return new Set;let e=JSON.parse(t);return new Set(Array.isArray(e)?e:[])}catch{return new Set}}function wl(t){try{localStorage.setItem(Ti,JSON.stringify([...t]))}catch(e){console.warn("Failed to save favorites:",e)}}function ms(t){let e=_i();return e.has(t)?e.delete(t):e.add(t),wl(e),ct.favorites=e,us({key:"favorites",prev:null,next:e}),e}function ae(t){return ct.favorites.has(t)}function Ei(){Mi()&&us({key:"url-sync",prev:null,next:Pt}),window.addEventListener("popstate",()=>{Mi()&&us({key:"url-sync",prev:null,next:Pt})})}function Ce(){let t=new Date;return t.setHours(0,0,0,0),t}var hl,Ti,fl,vl,gl,Li,yl,Pt,ct,u,ft=L(()=>{hl=new Set(["dashboard","ranking","songs","timeline","analytics","requests","playlists"]),Ti="kanau-favorites-v1",fl=new Set(["new","old","all"]),vl=/^[\w-]{11}$/,gl=new Set;Li=ps(),yl={activeTab:Li.tab,channel:Li.channel,audience:"listener",timelineLimit:12,timelineFilter:null,timelineFocus:null,timelineSort:"date-desc",songsQuery:"",songsSort:"count-desc",songsLimit:100,songsFilter:"all",songsGenre:"all",songsSeason:"all",songsView:"comfortable",singerMode:!1,singerPreset:"all",setlist:{theme:"",copyFormat:"simple",items:[]},setlistExpanded:!1,rankingLimit:50,rankingPeriod:"all",rankingMonth:"",rankingCompareMonth:"",favorites:_i(),favoritesFilter:!1,fullLoaded:!1,channelData:null,data:null},Pt=ps(),ct={...yl};u={get activeTab(){return A("activeTab")},set activeTab(t){H("activeTab",t)},get channel(){return A("channel")},set channel(t){H("channel",t)},get songsQuery(){return A("songsQuery")},set songsQuery(t){H("songsQuery",t)},get channelData(){return A("channelData")},set channelData(t){H("channelData",t)},get data(){return A("data")},set data(t){H("data",t)},get audience(){return A("audience")},set audience(t){H("audience",t)},get singerMode(){return A("singerMode")},set singerMode(t){H("singerMode",t)},get singerPreset(){return A("singerPreset")},set singerPreset(t){H("singerPreset",t)},get timelineLimit(){return A("timelineLimit")},set timelineLimit(t){H("timelineLimit",t)},get timelineFilter(){return A("timelineFilter")},set timelineFilter(t){H("timelineFilter",t)},get timelineFocus(){return A("timelineFocus")},set timelineFocus(t){H("timelineFocus",t)},get timelineSort(){return A("timelineSort")},set timelineSort(t){H("timelineSort",t)},get songsSort(){return A("songsSort")},set songsSort(t){H("songsSort",t)},get songsLimit(){return A("songsLimit")},set songsLimit(t){H("songsLimit",t)},get songsFilter(){return A("songsFilter")},set songsFilter(t){H("songsFilter",t)},get songsGenre(){return A("songsGenre")},set songsGenre(t){H("songsGenre",t)},get songsSeason(){return A("songsSeason")},set songsSeason(t){H("songsSeason",t)},get songsView(){return A("songsView")},set songsView(t){H("songsView",t)},get setlist(){return A("setlist")},set setlist(t){H("setlist",t)},get setlistExpanded(){return A("setlistExpanded")},set setlistExpanded(t){H("setlistExpanded",t)},get rankingLimit(){return A("rankingLimit")},set rankingLimit(t){H("rankingLimit",t)},get rankingPeriod(){return A("rankingPeriod")},set rankingPeriod(t){H("rankingPeriod",t)},get rankingMonth(){return A("rankingMonth")},set rankingMonth(t){H("rankingMonth",t)},get rankingCompareMonth(){return A("rankingCompareMonth")},set rankingCompareMonth(t){H("rankingCompareMonth",t)},get fullLoaded(){return A("fullLoaded")},set fullLoaded(t){H("fullLoaded",t)},get favorites(){return A("favorites")},get favoritesFilter(){return A("favoritesFilter")},set favoritesFilter(t){H("favoritesFilter",t)}}});var d,W,Ci=L(()=>{d=(t,e=document)=>e.querySelector(t),W=(t,e=document)=>Array.from(e.querySelectorAll(t))});function N(t){return String(t??"").trim().replace(/\s+/g," ").normalize("NFKC")}function m(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Mn(t){return String(t??"").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}var jt=L(()=>{});function J(t){if(!t)return null;if(t instanceof Date){if(Number.isNaN(t.getTime()))return null;let n=new Date(t.getTime());return n.setHours(0,0,0,0),n}let e=String(t).trim().match(/^(\d{4})[-/](\d{1,2})[-/](\d{1,2})/);if(!e)return null;let s=new Date(+e[1],+e[2]-1,+e[3]);return s.setHours(0,0,0,0),Number.isNaN(s.getTime())?null:s}function at(t){if(!t)return"";if(t instanceof Date)return Number.isNaN(t.getTime())?"":`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}`;let e=String(t).trim();return e?e.slice(0,7):""}function Tn(t,e){if(!t)return null;let s=i=>{if(i instanceof Date){let l=new Date(i.getTime());return l.setHours(0,0,0,0),l}let r=String(i).trim(),o=new Date(`${r}T00:00:00`);return Number.isNaN(o.getTime())?null:o},n=s(t);if(!n)return null;let a=s(e);return a?Math.floor((a-n)/864e5):null}function ie(t){if(!t)return"\u2014";if(t instanceof Date)return Number.isNaN(t.getTime())?"\u2014":`${t.getFullYear()}/${String(t.getMonth()+1).padStart(2,"0")}/${String(t.getDate()).padStart(2,"0")}`;let e=J(t);return e?`${e.getFullYear()}/${String(e.getMonth()+1).padStart(2,"0")}/${String(e.getDate()).padStart(2,"0")}`:"\u2014"}function _n(t){if(!t)return"\u2014";if(t instanceof Date)return Number.isNaN(t.getTime())?"\u2014":`${t.getFullYear()}/${String(t.getMonth()+1).padStart(2,"0")}`;let e=J(t);return e?`${e.getFullYear()}/${String(e.getMonth()+1).padStart(2,"0")}`:"\u2014"}function re(t){return t==null?"never":t<=30?"fresh":t>=180?"stale":""}var Ie=L(()=>{});var Ii=L(()=>{jt()});var hs,Vp,En=L(()=>{jt();hs=Object.freeze(["\u30AA\u30EA\u30B8\u30CA\u30EB","\u30C7\u30A3\u30BA\u30CB\u30FC","\u7AE5\u8B21\u30FB\u5531\u6B4C","K-POP","\u30A2\u30A4\u30C9\u30EB","\u30DC\u30AB\u30ED","\u30B2\u30FC\u30E0\u30FB\u30AD\u30E3\u30E9\u30BD\u30F3","\u30A2\u30CB\u30BD\u30F3","J-POP","\u672A\u5206\u985E"]),Vp=new Set(hs)});function fs(t){let e=t.map((a,i)=>({...a,_originalIndex:i})).sort((a,i)=>i.count-a.count),s=null,n=0;return e.forEach((a,i)=>{s!==null&&a.count===s?a.rank=n:(a.rank=i+1,n=a.rank),s=a.count}),e.map(({_originalIndex:a,...i})=>i)}var Ai=L(()=>{});function oe(t){let e=new Map;for(let s of t){let n=s.artist||"(\u4E0D\u660E)";e.has(n)||e.set(n,{artist:n,songs:[],totalCount:0,songCount:0});let a=e.get(n);a.songs.push(s),a.totalCount+=s.count,a.songCount+=1}return Array.from(e.values()).sort((s,n)=>n.totalCount-s.totalCount)}var Pi=L(()=>{});function vs(t,e,s){switch(e){case">":return t>s;case"<":return t<s;case">=":return t>=s;case"<=":return t<=s;case"=":case":":return t==s;default:return!0}}function Cn(t,e){return t.filter(s=>{for(let n of e){let a=n.val;switch(n.key){case"title":if(!N(s.title).toLowerCase().includes(N(a).toLowerCase()))return!1;break;case"artist":if(!N(s.artist).toLowerCase().includes(N(a).toLowerCase()))return!1;break;case"genre":if(!N(s.genreText||s.genre).toLowerCase().includes(N(a).toLowerCase()))return!1;break;case"key":if(!N(s.keyText).toLowerCase().split(/\s+/).includes(N(a).toLowerCase()))return!1;break;case"tag":if(!N(s.tagText).toLowerCase().includes(N(a).toLowerCase()))return!1;break;case"mood":if(!N(s.moodText).toLowerCase().includes(N(a).toLowerCase()))return!1;break;case"season":if(!N(s.seasonText).toLowerCase().includes(N(a).toLowerCase()))return!1;break;case"count":{let i=parseFloat(a);if(Number.isNaN(i)||!vs(s.count,n.op,i))return!1;break}case"days":{let i=parseFloat(a);if(Number.isNaN(i))return!1;let r=s.daysSinceLast==null?1/0:s.daysSinceLast;if(!vs(r,n.op,i))return!1;break}case"last":if(a==="never"||a==="untouched"){if(s.lastSung)return!1}else if(a==="fresh"){if(s.daysSinceLast==null||s.daysSinceLast>30)return!1}else if(a==="stale"){if(s.daysSinceLast==null||s.daysSinceLast<180)return!1}else{let i=parseInt(String(a).replace(/d$/i,""),10);if(!Number.isNaN(i)){let r=s.daysSinceLast==null?1/0:s.daysSinceLast;if(!vs(r,n.op===":"?"<=":n.op,i))return!1}}break}}return!0})}function gs(t,e,s=n=>n.genreText||n.genre||"\u672A\u5206\u985E"){return!e||e==="all"?[...t]:t.filter(n=>s(n)===e)}function bs(t,e){switch(e){case"fresh":return t.filter(s=>s.daysSinceLast!=null&&s.daysSinceLast<=30);case"stale":return t.filter(s=>s.daysSinceLast!=null&&s.daysSinceLast>=180);case"never":return t.filter(s=>!s.lastSung);default:return[...t]}}function ys(t,e){if(!e.singerMode)return[...t];let s=t.filter(n=>n.lastSung);switch(e.preset){case"keyed":return s.filter(n=>n.displayKey);case"classic":return s.filter(n=>n.count>=8);case"stale":return s.filter(n=>n.daysSinceLast>=180);case"rare":return s.filter(n=>n.count<=2);case"chill":return s.filter(n=>{let a=`${n.moodText||""} ${n.tagText||""}`.toLowerCase();return/chill|チル|のんびり|リラックス|ほっこり|まったり|しっとり/.test(a)});case"energetic":return s.filter(n=>{let a=`${n.moodText||""} ${n.tagText||""}`.toLowerCase();return/激しい|アグレッシブ|パンク|メタル|盛り上がる|アップテンポ/.test(a)});case"nostalgic":return s.filter(n=>{let a=`${n.moodText||""} ${n.tagText||""}`.toLowerCase();return/ノスタルジ|レトロ|昭和|平成|青春|初恋|懐かしい/.test(a)});default:return s.filter(n=>n.displayKey||!e.keyPublished||n.count>=5||n.daysSinceLast>=120)}}function In(t,e){let s=N(e).toLowerCase();return t.filter(n=>[n.title,n.artist,n.genreText||n.genre,n.tagText,n.moodText,n.seasonText,n.keyText].some(a=>N(a).toLowerCase().includes(s)))}function vt(t){if(!t)return NaN;if(t instanceof Date)return t.getTime();let e=J(t);return e?e.getTime():NaN}var Ae=L(()=>{jt();Ie()});function An(t,e=10){let s=[];for(let n of t){let a=n.dates||[];if(a.length<2)continue;let i=[...a].sort((c,p)=>vt(c)-vt(p)),r=0,o=null,l=null;for(let c=1;c<i.length;c++){let p=Math.floor((vt(i[c])-vt(i[c-1]))/Sl);p>r&&(r=p,o=i[c-1],l=i[c])}s.push({song:n,maxGap:r,gapStart:o,gapEnd:l})}return s.sort((n,a)=>a.maxGap-n.maxGap),s.slice(0,e)}var Sl,Di=L(()=>{Ae();Sl=864e5});function Pe(t){if(t instanceof Date){let s=new Date(t.getTime());return s.setHours(0,0,0,0),s}let e=J(t);if(!e)throw new Error("Invalid today date");return e}function Pn(t){return t?t instanceof Date?t:J(t):null}function ws(t,e,s){let n=Pe(s),a=at(n),i=n.getFullYear(),r=new Map;for(let o of t){let l=Pn(o.date);if(e==="month"?o.monthKey===a:l&&l.getFullYear()===i)for(let p of o.songs||[])r.has(p.key)||r.set(p.key,{...p,count:0}),r.get(p.key).count+=1}return Array.from(r.values()).sort((o,l)=>l.count-o.count||o.title.localeCompare(l.title,"ja"))}function Dn(t,e){let s=at(Pe(e));return t.filter(n=>n.monthKey===s).length}function Hn(t,e){let s=at(Pe(e));return t.filter(n=>n.monthKey===s).reduce((n,a)=>n+(a.songs?.length||0),0)}function Nn(t,e){let s=at(Pe(e));return t.filter(n=>n.firstSung&&at(n.firstSung)===s).length}function qn(t){let e=new Map;for(let r of t){let o=Pn(r.date);if(!o)continue;e.has(r.monthKey)||e.set(r.monthKey,{key:r.monthKey,date:new Date(o.getFullYear(),o.getMonth(),1),streams:0,songs:0});let l=e.get(r.monthKey);l.streams+=1,l.songs+=r.songs?.length||0}let s=Array.from(e.values()).sort((r,o)=>r.date-o.date);if(!s.length)return[];let n=[],a=new Date(s[0].date),i=new Date(s[s.length-1].date);for(;a<=i;){let r=at(a);n.push(e.get(r)||{key:r,date:new Date(a),streams:0,songs:0}),a.setMonth(a.getMonth()+1)}return n}function $s(t){return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}function Rn(t){return t<=0?"":t<8?"l1":t<16?"l2":t<25?"l3":"l4"}function Bn(t,e){let s=Pe(e),n=new Date(s);n.setDate(n.getDate()-364);let a=new Map;for(let l of t){let c=Pn(l.date);if(!c||c<n||c>s)continue;let p=$s(c);a.set(p,(a.get(p)||0)+(l.songs?.length||0))}let i=[],r=n.getDay(),o=new Date(n);o.setDate(o.getDate()-r);for(let l=0;l<371;l++){let c=o>=n&&o<=s;i.push({date:new Date(o),value:c?a.get($s(o))||0:-1,inRange:c,iso:$s(o)}),o.setDate(o.getDate()+1)}return i}var Hi=L(()=>{Ie();Ae()});function Ni(t){let e=[];return t.displayKey&&e.push("\u30AD\u30FC\u78BA\u8A8D\u6E08\u307F"),(t.count??0)>=15&&e.push("\u6BBF\u5802\u5165\u308A"),(t.count??0)>=10&&e.push("\u5B9A\u756A"),(t.count??0)>=5&&e.push("\u3088\u304F\u6B4C\u3046"),(t.count??0)<=1&&e.push("\u30EC\u30A2"),(t.count??0)>1&&(t.count??0)<=3&&e.push("\u6E96\u30EC\u30A2"),t.daysSinceLast!=null&&(t.daysSinceLast>=365&&e.push("\u8D85\u4E45\u3057\u3076\u308A"),t.daysSinceLast>=180&&e.push("\u4E45\u3057\u3076\u308A"),t.daysSinceLast>=90&&e.push("\u3084\u3084\u4E45\u3057\u3076\u308A"),t.daysSinceLast<=7&&e.push("\u8D85\u6700\u8FD1"),t.daysSinceLast<=30&&e.push("\u6700\u8FD1")),t.lastSung||e.push("\u6B4C\u3063\u305F\u3053\u3068\u306A\u3044"),e}function Vn(t){switch((t||"").trim()){case"\u30DC\u30AB\u30ED":return["\u30DC\u30AB\u30ED","\u30A8\u30EC\u30AF\u30C8\u30ED"];case"\u30A2\u30CB\u30BD\u30F3":return["\u30A2\u30CB\u30BD\u30F3","\u76DB\u308A\u4E0A\u304C\u308B"];case"J-POP":return["J-POP"];case"K-POP":return["K-POP","\u304B\u308F\u3044\u3044","\u30D5\u30A1\u30F3\u30AD\u30FC"];case"\u30A2\u30A4\u30C9\u30EB":return["\u30A2\u30A4\u30C9\u30EB","\u304B\u308F\u3044\u3044","\u660E\u308B\u3044","\u76DB\u308A\u4E0A\u304C\u308B"];case"\u30C7\u30A3\u30BA\u30CB\u30FC":return["\u30C7\u30A3\u30BA\u30CB\u30FC","\u304B\u308F\u3044\u3044","\u660E\u308B\u3044","\u30D5\u30A1\u30DF\u30EA\u30FC"];case"\u7AE5\u8B21\u30FB\u5531\u6B4C":return["\u7AE5\u8B21","\u61D0\u304B\u3057\u3044","\u30CE\u30B9\u30BF\u30EB\u30B8\u30C3\u30AF","\u548C\u98A8"];case"\u30B2\u30FC\u30E0\u30FB\u30AD\u30E3\u30E9\u30BD\u30F3":return["\u30B2\u30FC\u30E0","\u304B\u3063\u3053\u3044\u3044","\u76DB\u308A\u4E0A\u304C\u308B"];case"\u30AA\u30EA\u30B8\u30CA\u30EB":return["\u30AA\u30EA\u30B8\u30CA\u30EB","chill"];default:return[]}}function ks(t){let e=`${t.title||""} ${t.artist||""}`.toLowerCase(),s=[],n=(a,i)=>{i.test(e)&&s.push(a)};return n("\u6625",/春|桜|さくら|卒業|花に亡霊|春泥棒|桜ノ雨|桜流し|チェリー|花見|入学|新学期/),n("\u590F",/夏|サマー|花火|海|青と夏|夏色|君と夏フェス|夏祭り|金魚花火|打上花火|向日葵|ひまわり|水着|夕立/),n("\u79CB",/秋|紅葉|月|十五夜|金木犀|晩餐歌|食欲|読書|運動会|ハロウィン/),n("\u51AC",/冬|雪|クリスマス|白い|粉雪|スノー|snow|ジングル|メリクリ|雪の華|冬至|除夜|お正月|年末/),n("\u96E8",/雨|レイン|rain|傘|カプチーノ|rain stops|梅雨|秋雨|しぐれ/),n("\u591C",/夜|月|星|スター|midnight|ナイト|夜明け|夜に|夜もすがら|ベテルギウス|深夜|宵|黄昏|夕暮れ|月明かり/),n("\u671D",/朝|モーニング|morning|日の出|朝日|目覚め|おはよう|早朝|夜明け|暁/),n("\u604B\u611B",/恋|愛|好き|ラブ|love|告白|プロポーズ|ダーリン|貴方|あなた|恋人|こい|あい/),n("\u5225\u308C",/別れ|さよなら|goodbye|farewell|離|わかれ|袂/),n("\u30A4\u30D9\u30F3\u30C8",/バレンタイン|クリスマス|ハロウィン|誕生日|birthday|ジングル|チョコ|記念日|お祝い|パーティ/),Array.from(new Set(s))}function Ss(t){let e=`${t.title||""} ${t.artist||""} ${t.genre||""}`.toLowerCase(),s=[],n=(a,i)=>{i.test(e)&&s.push(a)};return n("\u76DB\u308A\u4E0A\u304C\u308B",/ロキ|ヒバナ|チュルリラ|天使|お願い|革命|メルト|アイドル|うまぴょい|サンバ|夏色|おジャ魔女|only my railgun|internet|ガチャ|フィーバー|パーティ|cheer|sing|dance|jump|yeah|wow/),n("\u3057\u3063\u3068\u308A",/雨|夜|月|花に亡霊|少女レイ|たばこ|猫|lemon|裸の心|水平線|勿忘|ベテルギウス|糸|奏|炎|雪の華|夕暮れ|黄昏|after the rain|静|しず|落ち着/),n("\u304B\u308F\u3044\u3044",/可愛|かわいい|kawaii|恋愛サーキュレーション|白金ディスコ|だだだだ|だいしきゅう|きゅうくらりん|おじゃま虫|バレンタイン|sweets parade|ぽっぴっぽ|ふわふわ|ぷにぷに|marionette|ぴょん|にゃん|わん|きゅん/),n("\u304B\u3063\u3053\u3044\u3044",/残響散歌|brave shine|i beg you|名前のない怪物|unravel|asphyxia|踊|怪物|インフェルノ|革命|ch4nge|g4l|overdose|紅蓮華|ギラギラ|ビッチ|最強|かっこ|cool|かっけ/),n("\u61D0\u304B\u3057\u3044",/secret base|butter-fly|タッチ|ムーンライト伝説|god knows|創聖|アクエリオン|ラムのラブソング|チェリー|そばかす|残酷な天使|未来への咆哮|17才|夏休み|あの日|思い出|なつか|懐|昔|子供|幼い|あの頃|青春|卒業|同窓|同級生/),n("chill",/chill|チル|のんびり|リラックス|ほっこり|まったり|宵|夕凪|お昼寝|ひなたぼっこ|カフェ|lounge|ambient|downtempo|ballad|眠|ねむ|おやすみ|ゆらゆら|ふわ|そよ風|星屑|夜空|満月|ミッドナイト|midnight|lofi|lo-fi|癒|いやし|安ら|穏や|のどか|落着|peace|calm|serene|そよ|ぼんやり|珈琲|紅茶|ティー|窓辺|本読み|読書|散歩|公園|猫|子猫|ぬいぐるみ|ブランケット|毛布|キャンドル|香り|アロマ|ハーブ|森林|林檎|林/),n("\u6FC0\u3057\u3044",/激しい|アグレッシブ|aggressive|パンク|punk|メタル|metal|スクリーム|scream|叫|怒|暴|war|battle|戦|fight|beat|ドラムンバー|drum.?n.?bass|dubstep|hardcore|テクノ|techno|ヘドバン|headbang|shred|速|疾|猛|烈/),n("\u30DF\u30B9\u30C6\u30EA\u30A2\u30B9",/ミステリ|mystery|怪談|幽|呪|魔女|wizard|magic|魔法|幻想|ファンタジー|fantasy|異世界|ダーク|dark|闇|shadow|phantom|ゴシック|gothic|ヴィクトリアン|謎|なぞ|秘密|隠|迷路|迷宮|labyrinth|ピラミッド|古代|魔術|ウィザード|ドラゴン|竜|fairy|精霊|ゴースト|ghost/),n("\u30CE\u30B9\u30BF\u30EB\u30B8\u30C3\u30AF",/ノスタルジ|nostalg|レトロ|retro|昭和|平成|青春|少年|少女|初恋|あの頃|昔|memory|メモリー|タイムカプセル|年季|classical|クラシック|ジャズ|jazz|往年|昔日|追憶|reminisce|セピア|sepia|analog|レコード|蓄音器/),n("\u30A8\u30E2\u3044",/エモ|emo|せつない|切ない|胸が痛|泣|涙|涙雨|カラス|夕焼け|卒業|別れ|さよなら|goodbye|farwell|悲|哀|愁|lonely|ロンリー|さびしい|孤独|一人|独り|雨空|曇り|灰色|グレイ/),n("\u30C0\u30FC\u30AF",/ダーク|dark|黒|夜|闇|デス|death|死|墓|墓場|ドクロ|骸骨|血|ブラッド|blood|hell|地獄|悪魔|demon|devil|サタン|カオス|chaos|abyss|奈落|深淵|終末|apocalypse|破滅|滅|腐|毒|venom|蛇|サーペント/),n("\u30D5\u30A1\u30F3\u30AD\u30FC",/ファンキー|funk|ファンク|groove|グルーヴ|disco|ディスコ|ソウル|soul|rb|r&b|ラテン|latin|bossa|ボサノバ|ska|スカ|reggae|レゲエ|swing|スウィング|ジャム|jam|ラグタイム|ragtime/),n("\u7518\u3044",/甘|あま|ハニー|honey|シュガ|sugar|キャンディ|candy|チョコ|choco|バニラ|vanilla|クリーム|cream|デザート|dessert|お菓子|ケーキ|cake|恋|ラブ|love|ダーリン|darling|ハグ|hug|kiss|キス|チュー|微笑|ほほえ|にっこり|デート|ロマンス|romance|プロポーズ|結婚|指輪/),n("\u30BB\u30AF\u30B7\u30FC",/セクシー|sexy|セクシ|エロ|ero|色|色艶|艶|誘惑|くびれ|ヒップ|ラブシーン|ナイト|night|ムーンライト|midnight|after dark|アダルト|adult|hot|ホット|spicy|スパイス|毒|venom|棘|トゲ|痛|いた/),n("\u548C\u98A8",/和風|日本|大和|桜|富士|侍|忍者|花見|茶道|お正月|七夕|盆踊り|祭|和太鼓|琴|尺八|三味線|演歌|enka|大和魂|wa|着物|浴衣|花火|提灯|神社|鳥居|風鈴|線香花火|金魚|鯉のぼり|お月見|紅葉|雪見|炉端|畳|障子|浮世絵|武士|刀|扇子|折り紙|千代紙/),n("\u30A8\u30EC\u30AF\u30C8\u30ED",/エレクトロ|electro|エレクトロニカ|electronic|シンセ|synth|テクノ|techno|edm|house|トランス|trance|ビート|beat|bass|ベース|dubstep|dnb|ドラムンバー|remix|リミックス|dj|ディジェー|クラブ|club|rave|レイヴ|サイバー|cyber|デジタル|digital|glitch|グリッチ/),n("\u30A2\u30B3\u30FC\u30B9\u30C6\u30A3\u30C3\u30AF",/アコースティック|acoustic|アコギ|アコースティックギター|ピアノ|piano|ヴァイオリン|violin|チェロ|cello|フルート|flute|クラリネット|オーケストラ|orchestra|ストリング|string|生楽器|弾き語り|camp|キャンプ|焚き火|キャンプファイヤー|星空|広野|草原|牧場|country|カントリー|folk|フォーク/),!s.length&&/ボカロ|アニソン|アイドル/.test(e)&&s.push(t.genre||""),Array.from(new Set(s.filter(Boolean)))}function Fn(t){let e=new Set(t.map(n=>n.toLowerCase())),s=[];return e.has("chill")&&e.has("\u591C")&&s.push("\u591Cchill"),e.has("chill")&&e.has("\u96E8")&&s.push("\u96E8chill"),e.has("chill")&&e.has("\u671D")&&s.push("\u671Dchill"),e.has("\u3057\u3063\u3068\u308A")&&e.has("\u604B\u611B")&&s.push("\u30E9\u30D6\u30BD\u30F3\u30B0"),e.has("\u3057\u3063\u3068\u308A")&&e.has("\u5225\u308C")&&s.push("\u5931\u604B\u30BD\u30F3\u30B0"),e.has("\u30A8\u30E2\u3044")&&e.has("\u604B\u611B")&&s.push("\u30A8\u30E2\u30E9\u30D6"),e.has("\u30A8\u30E2\u3044")&&e.has("\u5225\u308C")&&s.push("\u30A8\u30E2\u5225\u308C"),e.has("\u76DB\u308A\u4E0A\u304C\u308B")&&e.has("\u590F")&&s.push("\u590F\u30D5\u30A7\u30B9"),e.has("\u76DB\u308A\u4E0A\u304C\u308B")&&e.has("\u30A4\u30D9\u30F3\u30C8")&&s.push("\u30D1\u30FC\u30C6\u30A3\u30BD\u30F3\u30B0"),e.has("\u304B\u308F\u3044\u3044")&&e.has("\u6625")&&s.push("\u6625\u306E\u304B\u308F\u3044\u3044\u66F2"),e.has("\u304B\u308F\u3044\u3044")&&e.has("\u604B\u611B")&&s.push("\u30AD\u30E5\u30F3\u30BD\u30F3\u30B0"),e.has("\u61D0\u304B\u3057\u3044")&&e.has("\u6625")&&s.push("\u6625\u306E\u601D\u3044\u51FA"),e.has("\u61D0\u304B\u3057\u3044")&&e.has("\u590F")&&s.push("\u590F\u306E\u601D\u3044\u51FA"),e.has("\u548C\u98A8")&&e.has("\u51AC")&&s.push("\u65E5\u672C\u306E\u51AC"),e.has("\u548C\u98A8")&&e.has("\u6625")&&s.push("\u65E5\u672C\u306E\u6625"),e.has("\u30C7\u30A3\u30BA\u30CB\u30FC")&&e.has("\u604B\u611B")&&s.push("\u30C7\u30A3\u30BA\u30CB\u30FC\u30E9\u30D6"),e.has("k-pop")&&e.has("\u304B\u308F\u3044\u3044")&&s.push("K-POP\u304B\u308F\u3044\u3044"),e.has("k-pop")&&e.has("\u30D5\u30A1\u30F3\u30AD\u30FC")&&s.push("K-POP\u30C0\u30F3\u30B9"),e.has("\u5B9A\u756A")&&e.has("\u76DB\u308A\u4E0A\u304C\u308B")&&s.push("\u5B9A\u756A\u30A2\u30F3\u30BB\u30E0"),e.has("\u5B9A\u756A")&&e.has("\u3057\u3063\u3068\u308A")&&s.push("\u5B9A\u756A\u30D0\u30E9\u30FC\u30C9"),(e.has("\u4E45\u3057\u3076\u308A")||e.has("\u8D85\u4E45\u3057\u3076\u308A"))&&e.has("\u61D0\u304B\u3057\u3044")&&s.push("\u4E45\u3057\u3076\u308A\u306E\u540D\u66F2"),e.has("\u30A2\u30B3\u30FC\u30B9\u30C6\u30A3\u30C3\u30AF")&&e.has("\u604B\u611B")&&s.push("\u30A2\u30B3\u30FC\u30B9\u30C6\u30A3\u30C3\u30AF\u30E9\u30D6"),e.has("\u30A2\u30B3\u30FC\u30B9\u30C6\u30A3\u30C3\u30AF")&&e.has("\u671D")&&s.push("\u30E2\u30FC\u30CB\u30F3\u30B0\u30A2\u30B3\u30FC\u30B9\u30C6\u30A3\u30C3\u30AF"),e.has("\u30A8\u30EC\u30AF\u30C8\u30ED")&&e.has("\u76DB\u308A\u4E0A\u304C\u308B")&&s.push("\u30A8\u30EC\u30AF\u30C8\u30ED\u30C0\u30F3\u30B9"),e.has("\u30C0\u30FC\u30AF")&&e.has("\u30DF\u30B9\u30C6\u30EA\u30A2\u30B9")&&s.push("\u30C0\u30FC\u30AF\u30DF\u30B9\u30C6\u30EA\u30FC"),e.has("\u30D5\u30A1\u30F3\u30AD\u30FC")&&e.has("\u590F")&&s.push("\u30B5\u30DE\u30FC\u30D5\u30A1\u30F3\u30AF"),e.has("\u30BB\u30AF\u30B7\u30FC")&&e.has("\u591C")&&s.push("\u30CA\u30A4\u30C8\u30B0\u30EB\u30FC\u30F4"),e.has("\u7518\u3044")&&e.has("\u304B\u308F\u3044\u3044")&&s.push("\u7518\u304B\u308F"),e.has("\u30CE\u30B9\u30BF\u30EB\u30B8\u30C3\u30AF")&&e.has("\u79CB")&&s.push("\u79CB\u306E\u8FFD\u61B6"),s}function On(t){let e=[];return t.displayKey&&e.push("\u30AD\u30FC\u78BA\u8A8D\u6E08\u307F"),(t.count??0)>=10&&e.push("\u5B9A\u756A"),t.daysSinceLast!=null&&t.daysSinceLast>=180&&e.push("\u4E45\u3057\u3076\u308A\u5019\u88DC"),(t.count??0)<=1&&e.push("\u30EC\u30A2"),e}function jn(t){return t.lastSung?t.daysSinceLast!=null&&t.daysSinceLast<=30?"\u6700\u8FD1":t.daysSinceLast!=null&&t.daysSinceLast>=365?"\u8D85\u4E45\u3057\u3076\u308A":t.daysSinceLast!=null&&t.daysSinceLast>=180?"\u4E45\u3057\u3076\u308A":(t.count??0)<=1?"\u30EC\u30A2":(t.count??0)>=10?"\u5B9A\u756A":"\u901A\u5E38":"\u5C65\u6B74\u672A\u78BA\u8A8D"}function Yn(t){let e=[];return e.push(...Ni(t)),e.push(...Vn(t.genre||"")),e.push(...ks(t)),e.push(...Ss(t)),e.push(...Fn(e)),Array.from(new Set(e.filter(Boolean)))}var zn=L(()=>{});function xs(t,e,s=!1){let n=(i,r,o)=>{let l=i.lastSung?vt(i.lastSung):o==="desc"?-1/0:1/0,c=r.lastSung?vt(r.lastSung):o==="desc"?-1/0:1/0;return o==="desc"?c-l:l-c},a=[...t];switch(e){case"count-asc":a.sort((i,r)=>i.count-r.count||i.title.localeCompare(r.title,"ja"));break;case"recent":a.sort((i,r)=>n(i,r,"desc"));break;case"oldest":a.sort((i,r)=>n(i,r,"asc"));break;case"title":a.sort((i,r)=>i.title.localeCompare(r.title,"ja"));break;case"artist":a.sort((i,r)=>i.artist.localeCompare(r.artist,"ja")||r.count-i.count);break;case"count-desc":default:s||a.sort((i,r)=>r.count-i.count||i.title.localeCompare(r.title,"ja"));break}return a}var qi=L(()=>{Ae()});function De(t){let e=[],s=t;return s=s.replace(xl,(a,i,r,o)=>{let l=o;return l.startsWith('"')&&l.endsWith('"')&&(l=l.slice(1,-1)),e.push({key:i.toLowerCase(),op:r||":",val:l})," "}),s=Ll(s,e),s=s.trim().replace(/\s+/g," "),{tokens:s?s.split(" "):[],filters:e}}function Ll(t,e){let s=t||"",n=e.length;for(let{label:a,patterns:i}of Ml)for(let r of i)if(r.test(s)){Kn(e,"genre",":",a),s=s.replace(r," ");break}for(let{key:a,label:i,patterns:r}of Tl)for(let o of r)if(o.test(s)){Kn(e,a,":",i),s=s.replace(o," ");break}for(let a of _l)a.pattern.test(s)&&(Kn(e,a.key,a.op,a.val),s=s.replace(a.pattern," "));return e.length>n&&(s=s.replace(/[、。]/g," ").replace(/\b(の|な|で|を|が|に|は|だけ|から|曲|楽曲)\b/g," ").replace(/^(の|な|で|を|が|に|は|だけ|から|曲|楽曲)+/g," ").replace(/(の|な|で|を|が|に|は|だけ|から|曲|楽曲)+$/g," "),/^(の|な|で|を|が|に|は|だけ|から|曲|楽曲)+$/.test(s.replace(/\s+/g,""))&&(s=" ")),s}function Kn(t,e,s,n){t.some(a=>a.key===e&&a.op===s&&a.val===n)||t.push({key:e,op:s,val:n})}function El(t){return String(t).replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}var xl,Ml,Tl,_l,Un=L(()=>{En();jt();xl=/(?<key>title|artist|genre|tag|mood|season|key|count|last|days)\s*(?<op>:|<=|>=|=|<|>)\s*(?<val>"[^"]*"|\S+)/gi;Ml=[...hs.map(t=>({label:t,patterns:[new RegExp(El(N(t)),"i")]})),{label:"\u30DC\u30AB\u30ED",patterns:[/ボーカロイド/i,/vocaloid/i]},{label:"\u30A2\u30CB\u30BD\u30F3",patterns:[/アニメソング/i,/アニメ曲/i]},{label:"J-POP",patterns:[/jpop/i,/邦楽/i]}],Tl=[{key:"mood",label:"\u3057\u3063\u3068\u308A",patterns:[/しっとり/i,/バラード/i,/落ち着(い|く)/i,/静か/i,/泣ける/i]},{key:"mood",label:"\u660E\u308B\u3044",patterns:[/明るい/i,/元気/i,/楽しい/i,/盛り上が(る|り)/i,/アップテンポ/i]},{key:"mood",label:"\u304B\u308F\u3044\u3044",patterns:[/かわいい/i,/可愛い/i,/キュート/i]},{key:"mood",label:"\u304B\u3063\u3053\u3044\u3044",patterns:[/かっこいい/i,/格好いい/i,/クール/i,/ロック/i]},{key:"mood",label:"\u5207\u306A\u3044",patterns:[/切ない/i,/せつない/i,/エモい/i,/エモ/i]},{key:"mood",label:"chill",patterns:[/chill/i,/チル/i,/のんびり/i,/リラックス/i,/ほっこり/i,/まったり/i]},{key:"mood",label:"\u6FC0\u3057\u3044",patterns:[/激しい/i,/アグレッシブ/i,/パンク/i,/メタル/i,/スクリーム/i,/叫ぶ/i]},{key:"mood",label:"\u30DF\u30B9\u30C6\u30EA\u30A2\u30B9",patterns:[/ミステリ/i,/怪談/i,/幽霊/i,/魔女/i,/魔法/i,/幻想/i]},{key:"mood",label:"\u30CE\u30B9\u30BF\u30EB\u30B8\u30C3\u30AF",patterns:[/ノスタルジ/i,/レトロ/i,/昭和/i,/平成/i,/青春/i,/初恋/i,/あの頃/i]},{key:"mood",label:"\u30A8\u30E2\u3044",patterns:[/エモい/i,/エモ/i,/胸が痛/i,/涙/i,/夕焼け/i,/卒業/i,/別れ/i,/さよなら/i]},{key:"mood",label:"\u30C0\u30FC\u30AF",patterns:[/ダーク/i,/闇/i,/地獄/i,/悪魔/i,/カオス/i]},{key:"mood",label:"\u30D5\u30A1\u30F3\u30AD\u30FC",patterns:[/ファンキー/i,/ファンク/i,/グルーヴ/i,/ディスコ/i,/ソウル/i]},{key:"mood",label:"\u7518\u3044",patterns:[/甘い/i,/ハニー/i,/シュガー/i,/キャンディ/i,/チョコ/i,/バニラ/i]},{key:"mood",label:"\u30BB\u30AF\u30B7\u30FC",patterns:[/セクシー/i,/セクシ/i,/エロ/i,/色っぽい/i,/誘惑/i]},{key:"mood",label:"\u548C\u98A8",patterns:[/和風/i,/日本風/i,/大和/i,/桜/i,/侍/i,/忍者/i,/演歌/i]},{key:"mood",label:"\u30A8\u30EC\u30AF\u30C8\u30ED",patterns:[/エレクトロ/i,/エレクトロニカ/i,/シンセ/i,/テクノ/i,/edm/i]},{key:"mood",label:"\u30A2\u30B3\u30FC\u30B9\u30C6\u30A3\u30C3\u30AF",patterns:[/アコースティック/i,/アコギ/i,/ピアノ/i,/ヴァイオリン/i,/弾き語り/i]},{key:"season",label:"\u6625",patterns:[/春/i,/桜/i,/卒業/i]},{key:"season",label:"\u590F",patterns:[/夏/i,/海/i,/花火/i]},{key:"season",label:"\u79CB",patterns:[/秋/i]},{key:"season",label:"\u51AC",patterns:[/冬/i,/雪/i,/クリスマス/i]},{key:"tag",label:"\u30AD\u30FC\u78BA\u8A8D\u6E08\u307F",patterns:[/キー\s*(確認済み|あり|有り|公開|わかる|分かる)/i]},{key:"tag",label:"\u5B9A\u756A",patterns:[/定番/i]},{key:"tag",label:"\u4E45\u3057\u3076\u308A\u5019\u88DC",patterns:[/久しぶり候補/i]},{key:"tag",label:"\u30EC\u30A2",patterns:[/レア/i]},{key:"tag",label:"\u6BBF\u5802\u5165\u308A",patterns:[/殿堂入り/i]},{key:"tag",label:"\u3088\u304F\u6B4C\u3046",patterns:[/よく歌う/i,/よく歌っている/i]},{key:"tag",label:"\u6E96\u30EC\u30A2",patterns:[/準レア/i]},{key:"tag",label:"\u8D85\u4E45\u3057\u3076\u308A",patterns:[/超久しぶり/i,/1年以上/i,/365日以上/i]},{key:"tag",label:"\u3084\u3084\u4E45\u3057\u3076\u308A",patterns:[/やや久しぶり/i,/90日以上/i,/3ヶ月以上/i]},{key:"tag",label:"\u8D85\u6700\u8FD1",patterns:[/超最近/i,/1週間以内/i,/7日以内/i]},{key:"tag",label:"\u6B4C\u3063\u305F\u3053\u3068\u306A\u3044",patterns:[/歌ったことない/i,/未歌唱/i,/初めて/i]},{key:"tag",label:"\u30E9\u30D6\u30BD\u30F3\u30B0",patterns:[/ラブソング/i,/恋愛ソング/i,/愛の歌/i]},{key:"tag",label:"\u5931\u604B\u30BD\u30F3\u30B0",patterns:[/失恋ソング/i,/失恋ソング/i,/別れソング/i]},{key:"tag",label:"\u590F\u30D5\u30A7\u30B9",patterns:[/夏フェス/i,/夏祭りソング/i]},{key:"tag",label:"\u30D1\u30FC\u30C6\u30A3\u30BD\u30F3\u30B0",patterns:[/パーティソング/i,/パーティー/i]},{key:"tag",label:"\u30AD\u30E5\u30F3\u30BD\u30F3\u30B0",patterns:[/キュンソング/i,/キュン/i,/ときめき/i]},{key:"tag",label:"\u5B9A\u756A\u30A2\u30F3\u30BB\u30E0",patterns:[/定番アンセム/i,/全員で歌/i,/大合唱/i]},{key:"tag",label:"\u5B9A\u756A\u30D0\u30E9\u30FC\u30C9",patterns:[/定番バラード/i]},{key:"tag",label:"\u4E45\u3057\u3076\u308A\u306E\u540D\u66F2",patterns:[/久しぶりの名曲/i]},{key:"tag",label:"\u591Cchill",patterns:[/夜chill/i,/ナイトチル/i]},{key:"tag",label:"\u671Dchill",patterns:[/朝chill/i,/モーニングチル/i]},{key:"tag",label:"\u30A8\u30E2\u30E9\u30D6",patterns:[/エモラブ/i]},{key:"tag",label:"\u30A8\u30EC\u30AF\u30C8\u30ED\u30C0\u30F3\u30B9",patterns:[/エレクトロダンス/i]},{key:"tag",label:"\u548C\u98A8",patterns:[/和風/i,/日本風/i,/大和/i,/桜/i,/侍/i,/忍者/i,/演歌/i]},{key:"tag",label:"\u30A8\u30EC\u30AF\u30C8\u30ED",patterns:[/エレクトロ/i,/エレクトロニカ/i,/シンセ/i,/テクノ/i,/edm/i]},{key:"tag",label:"\u30A2\u30B3\u30FC\u30B9\u30C6\u30A3\u30C3\u30AF",patterns:[/アコースティック/i,/アコギ/i,/ピアノ/i,/ヴァイオリン/i,/弾き語り/i]},{key:"key",label:"+1",patterns:[/\+1/i,/プラス1/i]},{key:"key",label:"+2",patterns:[/\+2/i,/プラス2/i]},{key:"key",label:"+3",patterns:[/\+3/i,/プラス3/i]},{key:"key",label:"-1",patterns:[/-1/i,/マイナス1/i]},{key:"key",label:"-2",patterns:[/-2/i,/マイナス2/i]},{key:"key",label:"-3",patterns:[/-3/i,/マイナス3/i]}],_l=[{pattern:/最近\s*(歌っ?て)?\s*(いない|ない|なさそう|なさげ)/i,key:"days",op:">",val:"30"},{pattern:/しばらく\s*(歌っ?て)?\s*(いない|ない)/i,key:"days",op:">",val:"30"},{pattern:/(久しぶり|久々|半年以上|180日以上|長く\s*歌っ?て\s*(いない|ない))/i,key:"last",op:":",val:"stale"},{pattern:/(最近\s*(歌った|歌ってる|歌われた)|30日以内)/i,key:"last",op:":",val:"fresh"},{pattern:/(履歴未確認|未歌唱|歌ったこと\s*(が)?\s*ない)/i,key:"last",op:":",val:"never"},{pattern:/(定番|よく歌う|よく歌っている)/i,key:"count",op:">=",val:"8"},{pattern:/(レア|あまり歌っていない|あまり歌わない)/i,key:"count",op:"<=",val:"2"},{pattern:/(10回以上|10回超え|たくさん歌)/i,key:"count",op:">=",val:"10"},{pattern:/(5回以下|5回以内|少なめ)/i,key:"count",op:"<=",val:"5"},{pattern:/(100日以上|3ヶ月以上|半年以上)\s*(歌っ?て)?\s*(いない|ない)/i,key:"days",op:">",val:"100"},{pattern:/(1週間以内|7日以内|超最近)/i,key:"last",op:":",val:"fresh"},{pattern:/(15回以上|殿堂入り)/i,key:"count",op:">=",val:"15"},{pattern:/(3回以下|準レア)/i,key:"count",op:"<=",val:"3"},{pattern:/(2回以下|2回以内)/i,key:"count",op:"<=",val:"2"}]});function Ls(t,e){let s=N(e).toLowerCase();if(!s)return[];let{tokens:n,filters:a}=De(s),i=[];for(let o of a)i.includes(o.key)||i.push(o.key);let r=n.join(" ");if(r){let o=l=>N(l).toLowerCase().includes(r);o(t.title)&&i.push("\u66F2\u540D"),o(t.artist)&&i.push("\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8"),o(t.genreText||t.genre)&&i.push("\u30B8\u30E3\u30F3\u30EB"),o(t.tagText)&&i.push("\u30BF\u30B0"),o(t.moodText)&&i.push("\u96F0\u56F2\u6C17"),o(t.seasonText)&&i.push("\u5B63\u7BC0"),o(t.keyText)&&i.push("\u30AD\u30FC")}return Array.from(new Set(i)).slice(0,4)}var Ri=L(()=>{jt();Un()});var Bi=L(()=>{Ie()});function Gn(t){let e=s=>{let n=new Map;for(let a of t)for(let i of s(a))i&&n.set(i,(n.get(i)||0)+1);return[...n.entries()].sort((a,i)=>i[1]-a[1]).slice(0,3)};return{genres:e(s=>[s.genre||"\u672A\u5206\u985E"]),moods:e(s=>s.moodTags||[]),keys:t.filter(s=>s.displayKey).length,stale:t.filter(s=>(s.daysSinceLast??0)>=180).length}}var Vi=L(()=>{});var Yt=L(()=>{jt();Ie();Ii();En();Ai();Pi();Di();Hi();zn();zn();Ae();qi();Ri();Un();Bi();Vi()});function P(t){let e=String(t||""),s=[/youtu\.be\/([A-Za-z0-9_-]{11})/,/youtube\.com\/watch\?[^#]*v=([A-Za-z0-9_-]{11})/,/youtube\.com\/live\/([A-Za-z0-9_-]{11})/,/youtube\.com\/shorts\/([A-Za-z0-9_-]{11})/,/youtube\.com\/embed\/([A-Za-z0-9_-]{11})/];for(let n of s){let a=e.match(n);if(a)return a[1]}return""}function Qn(t,e){if(!e||!e.length)return m(t);let n=m(t);for(let a of e){if(!a)continue;let i=new RegExp(Mn(m(a)),"gi");n=n.replace(i,r=>`<mark class="hl">${r}</mark>`)}return n}var Il,Dt,T,He,z,K,le,Fi,zt,Oi,it=L(()=>{Ci();Yt();Il=(()=>{let t=new Date;return t.setHours(0,0,0,0),t})(),Dt=(t,e=Il)=>Tn(t,e),T=ie,He=_n,z=t=>`${t?.channelCode||t?.channel||""}:${t?.dateText||t?.streamedOn||t?.date||""}:${t?.url||t?.title||""}`;K=t=>{let e=P(t);return e?`https://i.ytimg.com/vi/${e}/hqdefault.jpg`:""},le=t=>{let e=P(t);return e?`https://i.ytimg.com/vi/${e}/mqdefault.jpg`:""},Fi=(t,e=150)=>{let s;return(...n)=>{clearTimeout(s),s=setTimeout(()=>t(...n),e)}},zt=t=>Number(t||0).toLocaleString(),Oi=t=>!!(t&&t.closest&&t.closest("a, button"))});function ce(t){for(let e of t||[])Ms(e);return t||[]}var Ne=L(()=>{Wn()});function Yi(t){if(!t)return null;if(t instanceof Date)return t;let s=String(t).trim().replaceAll("/","-").match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);if(!s)return null;let n=new Date(+s[1],+s[2]-1,+s[3]);return n.setHours(0,0,0,0),n}function Es(t){if(!t)return null;if(t instanceof Date)return t;let e=new Date(t);return Number.isNaN(e.getTime())?J(t):(e.setHours(0,0,0,0),e)}function Cs(t,e){let s=t||{};return{...s,dataGeneratedAt:e||s.dataGeneratedAt||null,dataGeneratedDate:Es(e||s.dataGeneratedAt)}}function Al(t,e={}){let s=new Map,n=[];for(let c of t){for(let p of c.songs||[]){let h=s.get(p.key);h?(h.count+=p.count,h.channels=Array.from(new Set([...h.channels,...p.channels])),!h.displayKey&&p.displayKey&&(h.displayKey=p.displayKey,h.keyText=p.displayKey),(!h.genre||h.genre==="\u672A\u5206\u985E")&&(h.genre=p.genre||h.genre,h.genreText=h.genre)):s.set(p.key,{...p,channels:[...p.channels],dates:[],streamRefs:[]})}n.push(...c.streams||[])}n.sort((c,p)=>(p.date||0)-(c.date||0));let a=new Map;for(let c of n)for(let p of c.songs||[])a.has(p.key)||a.set(p.key,[]),a.get(p.key).push(c);for(let c of s.values()){let p=a.get(c.key)||[],h=p.map(v=>v.date).filter(Boolean).sort((v,f)=>f-v);c.streamRefs=p,c.dates=h,c.lastSung=h[0]||null,c.firstSung=h[h.length-1]||null,c.daysSinceLast=Dt(c.lastSung)}let i=fs(Array.from(s.values())),r=t.reduce((c,p)=>c+(p.stats?.total||0),0),o=n[0]?.date||null,l={title:"\u5168\u671F\u9593",updateText:o?ie(J(o)):"",updateDate:o,total:r,repertoire:i.length,streams:t.reduce((c,p)=>c+(p.stats?.streams||0),0),avgPerStream:n.length?Math.round(r/n.length*10)/10:0,channelId:"all",channelLabel:"\u5168\u671F\u9593",keyPublished:t.some(c=>c.stats?.keyPublished),...e};return typeof l.updateDate=="string"&&(l.updateDate=J(l.updateDate)),{stats:l,songs:i,streams:n,orphans:[],artists:oe(i)}}function Ms(t){if(!t||t.__tagsReady)return t;t.seasonTags=ks(t),t.seasonText=t.seasonTags.join(" "),t.moodTags=Ss(t),t.moodText=t.moodTags.join(" "),t.trend=jn(t),t.singerTags=On(t),t.singerTagText=t.singerTags.join(" "),t.moodTagText=t.moodTags.join(" ");let e=Yn(t);return t.compositeTags=e.filter(s=>!t.seasonTags.includes(s)&&!t.moodTags.includes(s)&&!t.singerTags.includes(s)&&s!==t.trend),t.compositeTagText=t.compositeTags.join(" "),t.tagText=[t.seasonText,t.moodText,t.singerTagText,t.trend,t.moodTagText,t.compositeTagText].filter(Boolean).join(" "),t.allTags=e,t.__tagsReady=!0,t}function Is(t){if(!t)return null;t.stats=t.stats||{},t.stats.updateDate=Yi(t.stats.updateDate),t.stats.keyPublished=!!t.stats.keyPublished,t.songs=t.songs||[],t.streams=t.streams||[],t.orphans=t.orphans||[],Array.isArray(t.artists)||(t.artists=[]);for(let n of t.streams)n.date=Yi(n.date),n.monthKey=n.monthKey||(n.date?`${n.date.getFullYear()}-${String(n.date.getMonth()+1).padStart(2,"0")}`:""),n.year=n.year||n.date?.getFullYear()||null,n.month=n.month||(n.date?n.date.getMonth()+1:null),n.dayOfWeek=n.dayOfWeek??(n.date?n.date.getDay():null),n.songs=n.songs||[];t.streams.sort((n,a)=>(a.date||0)-(n.date||0));let e=new Map;for(let n of t.songs)n.displayKey=n.displayKey||"",n.keyText=n.keyText||n.displayKey,n.genre=n.genre||"\u672A\u5206\u985E",n.genreText=n.genreText||n.genre,n.channels=Array.isArray(n.channels)?n.channels:Array.from(n.channels||[]),n.count=Number(n.count||0),e.set(n.key,n);for(let n of t.streams)n.songs=(n.songs||[]).map(a=>{let i=e.get(a.key);return{title:a.title||i?.title||"",artist:a.artist||i?.artist||"",key:a.key||i?.key||"",raw:a.raw||""}});let s=new Map;for(let n of t.streams)for(let a of n.songs)s.has(a.key)||s.set(a.key,[]),s.get(a.key).push(n);for(let n of t.songs){let a=s.get(n.key)||[],i=a.map(r=>r.date).filter(Boolean).sort((r,o)=>o-r);n.streamRefs=a,n.dates=i,n.lastSung=i[0]||null,n.firstSung=i[i.length-1]||null,n.daysSinceLast=Dt(n.lastSung),n.seasonTags=[],n.seasonText="",n.moodTags=[],n.moodText="",n.singerTags=[],n.tagText="",n.trend="",n.__tagsReady=!1}return t.songs=fs(t.songs),t.artists.length||(t.artists=oe(t.songs)),t}function Jn(t){let e=t.channels||{};for(let n of Object.keys(e))e[n]=Is(e[n]);let s=t.combined?.songs?Is(t.combined):Al(Object.values(e),t.combined?.stats||{});return{channels:e,combined:s,fullLoaded:!0}}async function _s(t){let e=await fetch(t);if(!e.ok)throw new Error(`${t}: HTTP ${e.status}`);return e.json()}function zi(t,e){let s=t.channels?.[e]||{};return Cs(s.stats||s,t.generatedAt)}function Ki(t){let e=t.combined||{};return Cs(e.stats||e,t.generatedAt)}async function Pl(t=null,e=null){let s=t,n=_s(Ts.songs),a=_s(Ts.streams);s||(s=await _s(Ts.meta));let i=await n;if(e){let c={};for(let[h,v]of Object.entries(i.channels||{})){let f=v.map(g=>(Array.isArray(g.channels)||(g.channels=[h]),g));c[h]={stats:zi(s,h),songs:f,streams:[],orphans:[],artists:[]}}let p=Jn({channels:c,combined:{stats:Ki(s)},generatedAt:s.generatedAt||null,dataGeneratedDate:Es(s.generatedAt)});p.fullLoaded=!1,p.partialLoaded=!0;try{e(p)}catch{}}let r=await a,o={},l=new Set([...Object.keys(s.channels||{}),...Object.keys(i.channels||{}),...Object.keys(r.channels||{})]);for(let c of l){let p=i.channels?.[c]||[];for(let h of p)Array.isArray(h.channels)||(h.channels=[c]);o[c]={stats:zi(s,c),songs:p,streams:r.channels?.[c]||[],orphans:[],artists:[]}}return Jn({channels:o,combined:{stats:Ki(s)},generatedAt:s.generatedAt||null,dataGeneratedDate:Es(s.generatedAt)})}async function Dl(){let t=await _s(Ts.meta),e={};for(let[n,a]of Object.entries(t.channels||{}))e[n]=Is({stats:Cs(a,t.generatedAt),songs:[],streams:[],orphans:[],artists:[]});let s=Is({stats:Cs(t.combined||{},t.generatedAt),songs:[],streams:[],orphans:[],artists:[]});return{channels:e,combined:s,generatedAt:t.generatedAt||null,dataGeneratedDate:Es(t.generatedAt),fullLoaded:!1}}async function Ui(){let t=await fetch(ji,{cache:"no-store"});if(!t.ok){let e="";try{let s=await t.json();e=s.error?`: ${s.error}`:""}catch{e=`: HTTP ${t.status}`}throw new Error(`${ji}${e}`)}return Jn(await t.json())}async function Gi(t={}){try{return await Pl(t.meta||null,t.onSongsReady||null)}catch(e){try{return await Ui()}catch(s){throw new Error(`API\u304B\u3089\u30C7\u30FC\u30BF\u3092\u53D6\u5F97\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F: ${e.message}; ${s.message}`)}}}async function Qi(){try{return await Dl()}catch(t){try{return await Ui()}catch(e){throw new Error(`API\u304B\u3089\u30C7\u30FC\u30BF\u3092\u53D6\u5F97\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F: ${t.message}; ${e.message}`)}}}var Ts,ji,Wn=L(()=>{it();Yt();Ne();Ne();Ts={meta:"/data/meta.json",songs:"/data/songs.json",streams:"/data/streams.json"},ji="/api/data"});var or={};wt(or,{default:()=>Ht});function kt(t){return Array.isArray?Array.isArray(t):nr(t)==="[object Array]"}function Nl(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-Hl?"-0":e}function ql(t){return t==null?"":Nl(t)}function gt(t){return typeof t=="string"}function er(t){return typeof t=="number"}function Rl(t){return t===!0||t===!1||Bl(t)&&nr(t)=="[object Boolean]"}function sr(t){return typeof t=="object"}function Bl(t){return sr(t)&&t!==null}function tt(t){return t!=null}function Zn(t){return!t.trim().length}function nr(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}function ar(t){let e=null,s=null,n=null,a=1,i=null;if(gt(t)||kt(t))n=t,e=Ji(t),s=ta(t);else{if(!Wi.call(t,"name"))throw new Error(jl("name"));let r=t.name;if(n=r,Wi.call(t,"weight")&&(a=t.weight,a<=0))throw new Error(Yl(r));e=Ji(r),s=ta(r),i=t.getFn}return{path:e,id:s,weight:a,src:n,getFn:i}}function Ji(t){return kt(t)?t:t.split(".")}function ta(t){return kt(t)?t.join("."):t}function zl(t,e){let s=[],n=!1,a=(i,r,o)=>{if(tt(i))if(!r[o])s.push(i);else{let l=r[o],c=i[l];if(!tt(c))return;if(o===r.length-1&&(gt(c)||er(c)||Rl(c)))s.push(ql(c));else if(kt(c)){n=!0;for(let p=0,h=c.length;p<h;p+=1)a(c[p],r,o+1)}else r.length&&a(c,r,o+1)}};return a(t,gt(e)?e.split("."):e,0),n?s:s[0]}function Jl(t=1,e=3){let s=new Map,n=Math.pow(10,e);return{get(a){let i=a.match(Wl).length;if(s.has(i))return s.get(i);let r=1/Math.pow(i,.5*t),o=parseFloat(Math.round(r*n)/n);return s.set(i,o),o},clear(){s.clear()}}}function ir(t,e,{getFn:s=S.getFn,fieldNormWeight:n=S.fieldNormWeight}={}){let a=new qe({getFn:s,fieldNormWeight:n});return a.setKeys(t.map(ar)),a.setSources(e),a.create(),a}function Zl(t,{getFn:e=S.getFn,fieldNormWeight:s=S.fieldNormWeight}={}){let{keys:n,records:a}=t,i=new qe({getFn:e,fieldNormWeight:s});return i.setKeys(n),i.setIndexRecords(a),i}function As(t,{errors:e=0,currentLocation:s=0,expectedLocation:n=0,distance:a=S.distance,ignoreLocation:i=S.ignoreLocation}={}){let r=e/t.length;if(i)return r;let o=Math.abs(n-s);return a?r+o/a:o?1:r}function Xl(t=[],e=S.minMatchCharLength){let s=[],n=-1,a=-1,i=0;for(let r=t.length;i<r;i+=1){let o=t[i];o&&n===-1?n=i:!o&&n!==-1&&(a=i-1,a-n+1>=e&&s.push([n,a]),n=-1)}return t[i-1]&&i-n>=e&&s.push([n,i-1]),s}function tc(t,e,s,{location:n=S.location,distance:a=S.distance,threshold:i=S.threshold,findAllMatches:r=S.findAllMatches,minMatchCharLength:o=S.minMatchCharLength,includeMatches:l=S.includeMatches,ignoreLocation:c=S.ignoreLocation}={}){if(e.length>Kt)throw new Error(Ol(Kt));let p=e.length,h=t.length,v=Math.max(0,Math.min(n,h)),f=i,g=v,y=o>1||l,$=y?Array(h):[],w;for(;(w=t.indexOf(e,g))>-1;){let I=As(e,{currentLocation:w,expectedLocation:v,distance:a,ignoreLocation:c});if(f=Math.min(I,f),g=w+p,y){let ht=0;for(;ht<p;)$[w+ht]=1,ht+=1}}g=-1;let C=[],G=1,x=p+h,D=1<<p-1;for(let I=0;I<p;I+=1){let ht=0,$t=x;for(;ht<$t;)As(e,{errors:I,currentLocation:v+$t,expectedLocation:v,distance:a,ignoreLocation:c})<=f?ht=$t:x=$t,$t=Math.floor((x-ht)/2+ht);x=$t;let Ee=Math.max(1,v-$t+1),se=r?h:Math.min(v+$t,h)+p,ne=Array(se+2);ne[se+1]=(1<<I)-1;for(let lt=se;lt>=Ee;lt-=1){let ds=lt-1,xi=s[t.charAt(ds)];if(y&&($[ds]=+!!xi),ne[lt]=(ne[lt+1]<<1|1)&xi,I&&(ne[lt]|=(C[lt+1]|C[lt])<<1|1|C[lt+1]),ne[lt]&D&&(G=As(e,{errors:I,currentLocation:ds,expectedLocation:v,distance:a,ignoreLocation:c}),G<=f)){if(f=G,g=ds,g<=v)break;Ee=Math.max(1,2*v-g)}}if(As(e,{errors:I+1,currentLocation:v,expectedLocation:v,distance:a,ignoreLocation:c})>f)break;C=ne}let B={isMatch:g>=0,score:Math.max(.001,G)};if(y){let I=Xl($,o);I.length?l&&(B.indices=I):B.isMatch=!1}return B}function ec(t){let e={};for(let s=0,n=t.length;s<n;s+=1){let a=t.charAt(s);e[a]=(e[a]||0)|1<<n-s-1}return e}function Zi(t,e){let s=t.match(e);return s?s[1]:null}function ac(t,e={}){return t.split(nc).map(s=>{let n=s.trim().split(sc).filter(i=>i&&!!i.trim()),a=[];for(let i=0,r=n.length;i<r;i+=1){let o=n[i],l=!1,c=-1;for(;!l&&++c<Xi;){let p=oa[c],h=p.isMultiMatch(o);h&&(a.push(new p(h,e)),l=!0)}if(!l)for(c=-1;++c<Xi;){let p=oa[c],h=p.isSingleMatch(o);if(h){a.push(new p(h,e));break}}}return a})}function rc(...t){ca.push(...t)}function da(t,e){for(let s=0,n=ca.length;s<n;s+=1){let a=ca[s];if(a.condition(t,e))return new a(t,e)}return new Ps(t,e)}function rr(t,e,{auto:s=!0}={}){let n=a=>{let i=Object.keys(a),r=oc(a);if(!r&&i.length>1&&!pa(a))return n(tr(a));if(lc(a)){let l=r?a[ua.PATH]:i[0],c=r?a[ua.PATTERN]:a[l];if(!gt(c))throw new Error(Fl(l));let p={keyId:ta(l),pattern:c};return s&&(p.searcher=da(c,e)),p}let o={children:[],operator:i[0]};return i.forEach(l=>{let c=a[l];kt(c)&&c.forEach(p=>{o.children.push(n(p))})}),o};return pa(t)||(t=tr(t)),n(t)}function cc(t,{ignoreFieldNorm:e=S.ignoreFieldNorm}){t.forEach(s=>{let n=1;s.matches.forEach(({key:a,norm:i,score:r})=>{let o=a?a.weight:null;n*=Math.pow(r===0&&o?Number.EPSILON:r,(o||1)*(e?1:i))}),s.score=n})}function dc(t,e){let s=t.matches;e.matches=[],tt(s)&&s.forEach(n=>{if(!tt(n.indices)||!n.indices.length)return;let{indices:a,value:i}=n,r={indices:a,value:i};n.key&&(r.key=n.key.src),n.idx>-1&&(r.refIndex=n.idx),e.matches.push(r)})}function uc(t,e){e.score=t.score}function pc(t,e,{includeMatches:s=S.includeMatches,includeScore:n=S.includeScore}={}){let a=[];return s&&a.push(dc),n&&a.push(uc),t.map(i=>{let{idx:r}=i,o={item:e[r],refIndex:r};return a.length&&a.forEach(l=>{l(i,o)}),o})}var Hl,Vl,Fl,Ol,jl,Yl,Wi,Xn,Kl,Ul,Gl,Ql,S,Wl,qe,Kt,Ps,bt,ea,sa,na,aa,ia,ra,Ds,Hs,oa,Xi,sc,nc,ic,la,ca,Ns,ua,pa,oc,lc,tr,Ht,lr=L(()=>{Hl=1/0;Vl="Incorrect 'index' type",Fl=t=>`Invalid value for key ${t}`,Ol=t=>`Pattern length exceeds max of ${t}.`,jl=t=>`Missing ${t} property in key`,Yl=t=>`Property 'weight' in key '${t}' must be a positive integer`,Wi=Object.prototype.hasOwnProperty,Xn=class{constructor(e){this._keys=[],this._keyMap={};let s=0;e.forEach(n=>{let a=ar(n);this._keys.push(a),this._keyMap[a.id]=a,s+=a.weight}),this._keys.forEach(n=>{n.weight/=s})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}};Kl={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Ul={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},Gl={location:0,threshold:.6,distance:100},Ql={useExtendedSearch:!1,getFn:zl,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1},S={...Ul,...Kl,...Gl,...Ql},Wl=/[^ ]+/g;qe=class{constructor({getFn:e=S.getFn,fieldNormWeight:s=S.fieldNormWeight}={}){this.norm=Jl(s,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((s,n)=>{this._keysMap[s.id]=n})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,gt(this.docs[0])?this.docs.forEach((e,s)=>{this._addString(e,s)}):this.docs.forEach((e,s)=>{this._addObject(e,s)}),this.norm.clear())}add(e){let s=this.size();gt(e)?this._addString(e,s):this._addObject(e,s)}removeAt(e){this.records.splice(e,1);for(let s=e,n=this.size();s<n;s+=1)this.records[s].i-=1}getValueForItemAtKeyId(e,s){return e[this._keysMap[s]]}size(){return this.records.length}_addString(e,s){if(!tt(e)||Zn(e))return;let n={v:e,i:s,n:this.norm.get(e)};this.records.push(n)}_addObject(e,s){let n={i:s,$:{}};this.keys.forEach((a,i)=>{let r=a.getFn?a.getFn(e):this.getFn(e,a.path);if(tt(r)){if(kt(r)){let o=[],l=[{nestedArrIndex:-1,value:r}];for(;l.length;){let{nestedArrIndex:c,value:p}=l.pop();if(tt(p))if(gt(p)&&!Zn(p)){let h={v:p,i:c,n:this.norm.get(p)};o.push(h)}else kt(p)&&p.forEach((h,v)=>{l.push({nestedArrIndex:v,value:h})})}n.$[i]=o}else if(gt(r)&&!Zn(r)){let o={v:r,n:this.norm.get(r)};n.$[i]=o}}}),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}};Kt=32;Ps=class{constructor(e,{location:s=S.location,threshold:n=S.threshold,distance:a=S.distance,includeMatches:i=S.includeMatches,findAllMatches:r=S.findAllMatches,minMatchCharLength:o=S.minMatchCharLength,isCaseSensitive:l=S.isCaseSensitive,ignoreLocation:c=S.ignoreLocation}={}){if(this.options={location:s,threshold:n,distance:a,includeMatches:i,findAllMatches:r,minMatchCharLength:o,isCaseSensitive:l,ignoreLocation:c},this.pattern=l?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;let p=(v,f)=>{this.chunks.push({pattern:v,alphabet:ec(v),startIndex:f})},h=this.pattern.length;if(h>Kt){let v=0,f=h%Kt,g=h-f;for(;v<g;)p(this.pattern.substr(v,Kt),v),v+=Kt;if(f){let y=h-Kt;p(this.pattern.substr(y),y)}}else p(this.pattern,0)}searchIn(e){let{isCaseSensitive:s,includeMatches:n}=this.options;if(s||(e=e.toLowerCase()),this.pattern===e){let g={isMatch:!0,score:0};return n&&(g.indices=[[0,e.length-1]]),g}let{location:a,distance:i,threshold:r,findAllMatches:o,minMatchCharLength:l,ignoreLocation:c}=this.options,p=[],h=0,v=!1;this.chunks.forEach(({pattern:g,alphabet:y,startIndex:$})=>{let{isMatch:w,score:C,indices:G}=tc(e,g,y,{location:a+$,distance:i,threshold:r,findAllMatches:o,minMatchCharLength:l,includeMatches:n,ignoreLocation:c});w&&(v=!0),h+=C,w&&G&&(p=[...p,...G])});let f={isMatch:v,score:v?h/this.chunks.length:1};return v&&n&&(f.indices=p),f}},bt=class{constructor(e){this.pattern=e}static isMultiMatch(e){return Zi(e,this.multiRegex)}static isSingleMatch(e){return Zi(e,this.singleRegex)}search(){}};ea=class extends bt{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){let s=e===this.pattern;return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}},sa=class extends bt{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){let n=e.indexOf(this.pattern)===-1;return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}},na=class extends bt{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){let s=e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}},aa=class extends bt{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){let s=!e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}},ia=class extends bt{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){let s=e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[e.length-this.pattern.length,e.length-1]}}},ra=class extends bt{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){let s=!e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}},Ds=class extends bt{constructor(e,{location:s=S.location,threshold:n=S.threshold,distance:a=S.distance,includeMatches:i=S.includeMatches,findAllMatches:r=S.findAllMatches,minMatchCharLength:o=S.minMatchCharLength,isCaseSensitive:l=S.isCaseSensitive,ignoreLocation:c=S.ignoreLocation}={}){super(e),this._bitapSearch=new Ps(e,{location:s,threshold:n,distance:a,includeMatches:i,findAllMatches:r,minMatchCharLength:o,isCaseSensitive:l,ignoreLocation:c})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}},Hs=class extends bt{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let s=0,n,a=[],i=this.pattern.length;for(;(n=e.indexOf(this.pattern,s))>-1;)s=n+i,a.push([n,s-1]);let r=!!a.length;return{isMatch:r,score:r?0:1,indices:a}}},oa=[ea,Hs,na,aa,ra,ia,sa,Ds],Xi=oa.length,sc=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,nc="|";ic=new Set([Ds.type,Hs.type]),la=class{constructor(e,{isCaseSensitive:s=S.isCaseSensitive,includeMatches:n=S.includeMatches,minMatchCharLength:a=S.minMatchCharLength,ignoreLocation:i=S.ignoreLocation,findAllMatches:r=S.findAllMatches,location:o=S.location,threshold:l=S.threshold,distance:c=S.distance}={}){this.query=null,this.options={isCaseSensitive:s,includeMatches:n,minMatchCharLength:a,findAllMatches:r,ignoreLocation:i,location:o,threshold:l,distance:c},this.pattern=s?e:e.toLowerCase(),this.query=ac(this.pattern,this.options)}static condition(e,s){return s.useExtendedSearch}searchIn(e){let s=this.query;if(!s)return{isMatch:!1,score:1};let{includeMatches:n,isCaseSensitive:a}=this.options;e=a?e:e.toLowerCase();let i=0,r=[],o=0;for(let l=0,c=s.length;l<c;l+=1){let p=s[l];r.length=0,i=0;for(let h=0,v=p.length;h<v;h+=1){let f=p[h],{isMatch:g,indices:y,score:$}=f.search(e);if(g){if(i+=1,o+=$,n){let w=f.constructor.type;ic.has(w)?r=[...r,...y]:r.push(y)}}else{o=0,i=0,r.length=0;break}}if(i){let h={isMatch:!0,score:o/i};return n&&(h.indices=r),h}}return{isMatch:!1,score:1}}},ca=[];Ns={AND:"$and",OR:"$or"},ua={PATH:"$path",PATTERN:"$val"},pa=t=>!!(t[Ns.AND]||t[Ns.OR]),oc=t=>!!t[ua.PATH],lc=t=>!kt(t)&&sr(t)&&!pa(t),tr=t=>({[Ns.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});Ht=class{constructor(e,s={},n){this.options={...S,...s},this.options.useExtendedSearch,this._keyStore=new Xn(this.options.keys),this.setCollection(e,n)}setCollection(e,s){if(this._docs=e,s&&!(s instanceof qe))throw new Error(Vl);this._myIndex=s||ir(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){tt(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){let s=[];for(let n=0,a=this._docs.length;n<a;n+=1){let i=this._docs[n];e(i,n)&&(this.removeAt(n),n-=1,a-=1,s.push(i))}return s}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:s=-1}={}){let{includeMatches:n,includeScore:a,shouldSort:i,sortFn:r,ignoreFieldNorm:o}=this.options,l=gt(e)?gt(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return cc(l,{ignoreFieldNorm:o}),i&&l.sort(r),er(s)&&s>-1&&(l=l.slice(0,s)),pc(l,this._docs,{includeMatches:n,includeScore:a})}_searchStringList(e){let s=da(e,this.options),{records:n}=this._myIndex,a=[];return n.forEach(({v:i,i:r,n:o})=>{if(!tt(i))return;let{isMatch:l,score:c,indices:p}=s.searchIn(i);l&&a.push({item:i,idx:r,matches:[{score:c,value:i,norm:o,indices:p}]})}),a}_searchLogical(e){let s=rr(e,this.options),n=(o,l,c)=>{if(!o.children){let{keyId:h,searcher:v}=o,f=this._findMatches({key:this._keyStore.get(h),value:this._myIndex.getValueForItemAtKeyId(l,h),searcher:v});return f&&f.length?[{idx:c,item:l,matches:f}]:[]}let p=[];for(let h=0,v=o.children.length;h<v;h+=1){let f=o.children[h],g=n(f,l,c);if(g.length)p.push(...g);else if(o.operator===Ns.AND)return[]}return p},a=this._myIndex.records,i={},r=[];return a.forEach(({$:o,i:l})=>{if(tt(o)){let c=n(s,o,l);c.length&&(i[l]||(i[l]={idx:l,item:o,matches:[]},r.push(i[l])),c.forEach(({matches:p})=>{i[l].matches.push(...p)}))}}),r}_searchObjectList(e){let s=da(e,this.options),{keys:n,records:a}=this._myIndex,i=[];return a.forEach(({$:r,i:o})=>{if(!tt(r))return;let l=[];n.forEach((c,p)=>{l.push(...this._findMatches({key:c,value:r[p],searcher:s}))}),l.length&&i.push({idx:o,item:r,matches:l})}),i}_findMatches({key:e,value:s,searcher:n}){if(!tt(s))return[];let a=[];if(kt(s))s.forEach(({v:i,i:r,n:o})=>{if(!tt(i))return;let{isMatch:l,score:c,indices:p}=n.searchIn(i);l&&a.push({score:c,key:e,value:i,idx:r,norm:o,indices:p})});else{let{v:i,n:r}=s,{isMatch:o,score:l,indices:c}=n.searchIn(i);o&&a.push({score:l,key:e,value:i,norm:r,indices:c})}return a}};Ht.version="7.0.0";Ht.createIndex=ir;Ht.parseIndex=Zl;Ht.config=S;Ht.parseQuery=rr;rc(la)});function Rs(){try{let t=localStorage.getItem(qs);if(!t)return[];let e=JSON.parse(t);return Array.isArray(e)?e.slice(0,dr):[]}catch{return[]}}function fa(t){let e=(t||"").trim();if(!e)return;let s=Rs().filter(n=>n!==e);s.unshift(e),localStorage.setItem(qs,JSON.stringify(s.slice(0,dr)))}function ur(t){let e=Rs().filter(s=>s!==t);localStorage.setItem(qs,JSON.stringify(e))}function pr(){localStorage.removeItem(qs)}function mr(){return ue?Promise.resolve(ue):(ma||(ma=Promise.resolve().then(()=>(lr(),or)).then(t=>(ue=t.default,ue))),ma)}function hr(t){ce(t),Re=t,de=null;let e=++cr,s=()=>{mr().then(n=>{e===cr&&Re===t&&(de=new n(t,ha))}).catch(()=>{})};"requestIdleCallback"in window?window.requestIdleCallback(s,{timeout:3e3}):window.setTimeout(s,1500)}function Bs(t,e){let s=Re||e||[],n=(t||"").trim();if(!n)return{results:s,tokens:[]};ce(s);let{tokens:a,filters:i}=De(n),r=Cn(s,i);if(!a.length)return{results:r,tokens:[]};let o=a.join(" ");return ue?{results:(r===s&&de?de:new ue(r,ha)).search(o).map(p=>p.item),tokens:a}:(mr().then(p=>{!de&&Re&&(de=new p(Re,ha))}).catch(()=>{}),{results:In(r,o),tokens:a})}var qs,dr,ha,de,ue,ma,Re,cr,Vs=L(()=>{Yt();Ne();qs="kanau-search-history-v1",dr=10;ha={keys:[{name:"title",weight:.65},{name:"artist",weight:.35},{name:"genreText",weight:.18},{name:"tagText",weight:.14},{name:"moodText",weight:.12},{name:"seasonText",weight:.1},{name:"keyText",weight:.1},{name:"moodTagText",weight:.1},{name:"singerTagText",weight:.08}],threshold:.38,ignoreLocation:!0,minMatchCharLength:1,includeScore:!0},de=null,ue=null,ma=null,Re=null,cr=0});function b(t,e="ui-icon"){let s=fr[t]||fr.music;return`<svg class="${e}" viewBox="0 0 24 24" aria-hidden="true">${s}</svg>`}var fr,dt=L(()=>{fr={analytics:'<path d="M4 19V5"/><path d="M4 19h16"/><path d="M7 15l3-4 4 2 5-7"/><circle cx="7" cy="15" r="1"/><circle cx="10" cy="11" r="1"/><circle cx="14" cy="13" r="1"/><circle cx="19" cy="6" r="1"/>',artist:'<path d="M16 11a4 4 0 1 0-8 0"/><path d="M4 21a8 8 0 0 1 16 0"/><path d="M18 5v7"/><path d="M18 5l3-1v3l-3 1"/>',bookmark:'<path d="M6 4h12a1 1 0 0 1 1 1v15l-7-4-7 4V5a1 1 0 0 1 1-1z"/>',calendar:'<path d="M7 3v4"/><path d="M17 3v4"/><path d="M4 8h16"/><rect x="4" y="5" width="16" height="16" rx="3"/><path d="M8 13h3"/><path d="M13 13h3"/><path d="M8 17h3"/>',chart:'<path d="M4 13h5v7H4z"/><path d="M10 4h5v16h-5z"/><path d="M16 9h4v11h-4z"/>',check:'<path d="M5 12l4 4L19 6"/>',close:'<path d="M6 6l12 12"/><path d="M18 6L6 18"/>',copy:'<rect x="8" y="8" width="10" height="12" rx="2"/><path d="M6 16H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',dice:'<rect x="5" y="5" width="14" height="14" rx="3"/><circle cx="9" cy="9" r="1"/><circle cx="15" cy="9" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="9" cy="15" r="1"/><circle cx="15" cy="15" r="1"/>',external:'<path d="M14 4h6v6"/><path d="M20 4l-9 9"/><path d="M10 5H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-4"/>',heart:'<path d="M20.8 5.6a5.4 5.4 0 0 0-7.6 0L12 6.8l-1.2-1.2a5.4 5.4 0 0 0-7.6 7.6L12 22l8.8-8.8a5.4 5.4 0 0 0 0-7.6z"/>',lightbulb:'<path d="M9 18h6"/><path d="M10 22h4"/><path d="M8 14a6 6 0 1 1 8 0c-1 1-1.5 2-1.5 4h-5c0-2-.5-3-1.5-4z"/>',link:'<path d="M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1"/>',mic:'<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0"/><path d="M12 18v3"/><path d="M8 21h8"/>',moon:'<path d="M20 15.5A8.5 8.5 0 0 1 8.5 4a7 7 0 1 0 11.5 11.5z"/>',music:'<path d="M9 18V5l10-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="16" cy="16" r="3"/>',next:'<path d="M5 5v14l11-7z"/><path d="M19 5v14"/>',pause:'<path d="M8 5v14"/><path d="M16 5v14"/>',play:'<path d="M7 5v14l11-7z"/>',playlist:'<path d="M5 6h10"/><path d="M5 11h10"/><path d="M5 16h7"/><path d="M18 8v10l3-2 3 2V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1z"/>',plus:'<path d="M12 5v14"/><path d="M5 12h14"/>',previous:'<path d="M19 5v14L8 12z"/><path d="M5 5v14"/>',rank:'<path d="M8 4h8v3a4 4 0 0 1-8 0z"/><path d="M6 5H3v2a4 4 0 0 0 4 4"/><path d="M18 5h3v2a4 4 0 0 1-4 4"/><path d="M12 11v5"/><path d="M8 20h8"/><path d="M9 16h6v4H9z"/>',repeat:'<path d="M17 2l4 4-4 4"/><path d="M3 11V9a3 3 0 0 1 3-3h15"/><path d="M7 22l-4-4 4-4"/><path d="M21 13v2a3 3 0 0 1-3 3H3"/>',search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>',sparkle:'<path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8z"/><path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z"/>',time:'<circle cx="12" cy="12" r="8"/><path d="M12 8v5l3 2"/>',video:'<rect x="4" y="6" width="12" height="12" rx="2"/><path d="M16 10l5-3v10l-5-3z"/>',volume:'<path d="M4 10v4h4l5 4V6L8 10z"/><path d="M16 9a5 5 0 0 1 0 6"/><path d="M18.5 6.5a9 9 0 0 1 0 11"/>'}});function js(){return localStorage.getItem(vr)||"auto"}function gr(){let t=js();return t!=="auto"?t:matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function fc(t){Fs.includes(t)||(t="auto"),localStorage.setItem(vr,t),br();for(let e of Os)e(t,gr())}function va(){let t=js(),e=Fs[(Fs.indexOf(t)+1)%Fs.length];fc(e)}function br(){let t=js();document.documentElement.setAttribute("data-theme",t);let e=document.getElementById("theme-icon"),s=document.getElementById("theme-label");e&&(e.innerHTML=b(mc[t]||"sparkle")),s&&(s.textContent=hc[t])}function yr(t){return Os.add(t),()=>Os.delete(t)}function $r(){br();let t=document.getElementById("theme-toggle");t&&t.addEventListener("click",va);let e=matchMedia("(prefers-color-scheme: dark)");e.addEventListener&&e.addEventListener("change",()=>{if(js()==="auto")for(let s of Os)s("auto",gr())})}var vr,Fs,mc,hc,Os,ga=L(()=>{dt();vr="yumegawa-theme",Fs=["auto","light","dark"],mc={auto:"sparkle",light:"lightbulb",dark:"moon"},hc={auto:"auto",light:"light",dark:"dark"},Os=new Set});function gc(){return window.Chart?Promise.resolve(window.Chart):Ys||(Ys=new Promise((t,e)=>{let s=document.createElement("script");s.src=vc,s.async=!0,s.onload=()=>t(window.Chart),s.onerror=()=>e(new Error("Chart.js failed to load")),document.head.appendChild(s)}),Ys)}function wr(){let t=getComputedStyle(document.documentElement);ba={ink:t.getPropertyValue("--ink").trim(),inkSoft:t.getPropertyValue("--ink-soft").trim(),inkMute:t.getPropertyValue("--ink-mute").trim(),primary:t.getPropertyValue("--primary").trim(),primaryStrong:t.getPropertyValue("--primary-strong").trim(),primarySoft:t.getPropertyValue("--primary-soft").trim(),accent:t.getPropertyValue("--accent").trim(),accentStrong:t.getPropertyValue("--accent-strong").trim(),border:t.getPropertyValue("--border").trim(),borderSoft:t.getPropertyValue("--border-soft").trim(),borderStrong:t.getPropertyValue("--border-strong").trim(),surface:t.getPropertyValue("--surface").trim(),gold:t.getPropertyValue("--gold").trim()}}function pe(){return ba.ink||wr(),ba}function bc(){let t=pe();return{color:t.ink,borderColor:t.border,font:{family:'"Kanau Noto Sans JP", "Noto Sans JP", "Yu Gothic", "Meiryo", system-ui, sans-serif',size:11},plugins:{legend:{labels:{color:t.inkSoft,font:{size:11}}},tooltip:{backgroundColor:t.surface,titleColor:t.ink,bodyColor:t.ink,borderColor:t.borderStrong,borderWidth:1,padding:10,boxPadding:4,cornerRadius:8,titleFont:{size:12,weight:"600"},bodyFont:{size:11}}},scales:{x:{ticks:{color:t.inkSoft,font:{size:10}},grid:{color:t.border,drawBorder:!1}},y:{ticks:{color:t.inkSoft,font:{size:10}},grid:{color:t.border,drawBorder:!1},beginAtZero:!0}}}}function kr(t,e){if(!e)return t;let s=Array.isArray(t)?[...t]:{...t};for(let n of Object.keys(e))e[n]&&typeof e[n]=="object"&&!Array.isArray(e[n])?s[n]=kr(t&&t[n]?t[n]:{},e[n]):s[n]=e[n];return s}function Ve(t,e,s,n={}){return gc().then(a=>{let i=document.getElementById(t);if(!i)return null;let r=i.getContext("2d");Be.has(t)&&Be.get(t).destroy();let o=kr(bc(),n);o.responsive=!0,o.maintainAspectRatio=!1;let l=new a(r,{type:e,data:s,options:o});return Be.set(t,l),l}).catch(()=>{let a=document.getElementById(t);a&&a.replaceWith(document.createTextNode("\u30B0\u30E9\u30D5\u3092\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3067\u3057\u305F"))}),null}function $a(){for(let t of Be.values())t.destroy();Be.clear()}function Sr(t){ya=t}function Fe(t,e={}){return`<div class="chart-wrap ${e.class||""}"><canvas id="${t}"></canvas></div>`}var vc,Be,Ys,ba,ya,wa=L(()=>{ga();vc="https://cdn.jsdelivr.net/npm/chart.js@4.4.4/dist/chart.umd.min.js",Be=new Map,Ys=null,ba={};ya=null;yr(()=>{wr(),ya&&ya()})});var yc,xr,Oe,Gm,Qm,ka,Lr,zs,Sa,Wm,je=L(()=>{yc="1mM9TQGYm7VAOds90XpSbSzF6xnFeq-95XZwL2mz8B4o",xr={new:{id:"new",label:"\u65B0ch",listGid:"0",setlistGid:"684306666"},old:{id:"old",label:"\u65E7ch",listGid:"959470167",setlistGid:"254288043"}},Oe="new",Gm=xr.new.listGid,Qm=xr.new.setlistGid,ka=12,Lr=12,zs=50,Sa=20,Wm=`https://docs.google.com/spreadsheets/d/${yc}/edit`});function St(){let t=new URLSearchParams(window.location.search),e=t.get("tab"),s=t.get("ch"),n=t.get("v")||"";return{tab:$c.has(e)?e:me.tab,channel:wc.has(s)?s:me.channel,q:t.get("q")||me.q,v:kc.test(n)?n:me.v,t:Math.max(0,parseInt(t.get("t")||"0",10)||0)}}function et(t={},e={}){let s={...St(),...t},n=new URLSearchParams;s.tab!==me.tab&&n.set("tab",s.tab),s.channel!==me.channel&&n.set("ch",s.channel),s.q&&n.set("q",s.q),s.v&&(n.set("v",s.v),s.t>0&&n.set("t",String(Math.floor(s.t))));let a=n.toString(),i=a?`${window.location.pathname}?${a}`:window.location.pathname,r=e.replace?"replaceState":"pushState";return window.history[r](null,"",i),s}var $c,wc,kc,me,xa=L(()=>{$c=new Set(["dashboard","ranking","songs","timeline","analytics","requests","playlists"]),wc=new Set(["new","old","all"]),kc=/^[\w-]{11}$/,me={tab:"dashboard",channel:"new",q:"",v:"",t:0}});var Dr={};wt(Dr,{renderDashboard:()=>_c});function _c(){let{songs:t,streams:e}=u.data,n=[...t].sort((g,y)=>y.count-g.count).slice(0,5),a=n[0]?.count||1,i=e.slice(0,5),r=Ce(),o=Nn(t,r),l=d("#panel-dashboard"),c=Bn(e,r),p=qn(e).slice(-12),h=Math.max(1,...p.map(g=>g.songs)),v=`
    <div class="card dashboard-card dashboard-activity-card">
      <div class="card-title">${b("analytics")} \u4ECA\u6708\u306E\u6D3B\u52D5</div>
      <div class="dashboard-metric-list">
        <div class="activity-row">
          <span class="a-date">\u914D\u4FE1</span>
          <span class="a-meta">\u4ECA\u6708\u306E\u6B4C\u67A0\u6570</span>
          <strong>${Dn(e,r)}\u56DE</strong>
        </div>
        <div class="activity-row">
          <span class="a-date">\u6B4C\u5531</span>
          <span class="a-meta">\u4ECA\u6708\u306E\u7DCF\u6B4C\u5531\u6570</span>
          <strong>${Hn(e,r)}\u66F2</strong>
        </div>
        <div class="activity-row">
          <span class="a-date">\u65B0\u66F2</span>
          <span class="a-meta">\u4ECA\u6708\u306E\u521D\u62AB\u9732\u66F2\u6570</span>
          <strong>${o}\u66F2</strong>
        </div>
        <div class="activity-row">
          <span class="a-date">\u6700\u7D42</span>
          <span class="a-meta">\u6700\u65B0\u6B4C\u67A0\u304B\u3089</span>
          <strong>${e[0]?`${Dt(e[0].date)}\u65E5\u524D`:"\u2014"}</strong>
        </div>
      </div>
    </div>
  `,f=`
    <div class="card dashboard-card dashboard-top-card">
      <div class="card-title">${b("rank")} TOP5 \u697D\u66F2</div>
      <div class="bar-list">
        ${n.length?n.map((g,y)=>Ue(g,y,a)).join(""):'<div class="empty-state">\u66F2\u30C7\u30FC\u30BF\u306A\u3057</div>'}
      </div>
    </div>
  `;l.innerHTML=`
    <div class="dashboard-grid" id="dashboard-grid">
      <div class="dashboard-overview-grid">
        ${v}
        ${f}
        <div class="card dashboard-card dashboard-genre-card">
          <div class="card-title">${b("chart")} \u30B8\u30E3\u30F3\u30EB\u5206\u5E03 <span class="pill">\u697D\u66F2\u6570</span></div>
          ${qc(t)}
        </div>
        <div class="card dashboard-card dashboard-heatmap-card">
          <div class="card-title">${b("calendar")} \u914D\u4FE1\u30D2\u30FC\u30C8\u30DE\u30C3\u30D7 <span class="pill">\u76F4\u8FD11\u5E74</span></div>
          ${Bc(c)}
        </div>
        <div class="card dashboard-card dashboard-monthly-card">
          <div class="card-title">${b("music")} \u6708\u5225 \u6B4C\u5531\u6570 <span class="pill">\u76F4\u8FD112\u304B\u6708</span></div>
          ${Rc(p,h)}
        </div>
      </div>
      ${Dc()}
      ${Ec()}
      ${Nc(e,t,i)}
    </div>
  `,Hc(),Ac(e,t)}function Ec(){return`
    <div class="card dashboard-card dashboard-recap-card" id="dashboard-recap-card">
      <div class="card-title">
        ${b("chart")} \u304B\u306A\u3046\u306E\u307E\u3068\u3081
        <span class="dashboard-recap-toggle" id="dashboard-recap-toggle">
          <button class="btn ghost" type="button" data-recap-period="year" id="recap-btn-year">\u4ECA\u5E74</button>
          <button class="btn ghost" type="button" data-recap-period="month" id="recap-btn-month">\u4ECA\u6708</button>
        </span>
      </div>
      <div id="dashboard-recap-body"></div>
    </div>
  `}function Cc(t,e,s,n){let a=n.getFullYear(),i=n.getMonth();function r($){let w=$.date instanceof Date?$.date:new Date($.date);return s==="year"?w.getFullYear()===a:w.getFullYear()===a&&w.getMonth()===i}let o=t.filter(r);if(!o.length)return null;let l=o.length,c=o.reduce(($,w)=>$+(w.songs?.length||0),0),p=new Set;for(let $ of o)for(let w of $.songs||[])w.key&&p.add(w.key);let h=p.size,v=new Map;for(let $ of o)for(let w of $.songs||[]){if(!w.key)continue;let C=v.get(w.key)||{title:w.title,count:0};C.count++,v.set(w.key,C)}let f=null,g=0;for(let[,$]of v)$.count>g&&(g=$.count,f=$);let y=0;for(let $ of e){if(!$.firstSung)continue;let w=$.firstSung instanceof Date?$.firstSung:new Date($.firstSung);(s==="year"&&w.getFullYear()===a||s==="month"&&w.getFullYear()===a&&w.getMonth()===i)&&y++}return{streamCount:l,totalSongs:c,distinctCount:h,topSong:f,topCount:g,newSongCount:y}}function Ic(t,e){if(!t)return'<div class="empty-state">\u3053\u306E\u671F\u9593\u306E\u8A18\u9332\u306F\u307E\u3060\u3042\u308A\u307E\u305B\u3093</div>';let s=t.topSong?`${m(t.topSong.title)} <span class="recap-sub">(${t.topCount}\u56DE)</span>`:"\u2014";return`
    <div class="recap-period-label">${m(e)}</div>
    <div class="recap-tiles">
      <div class="recap-tile">
        <strong>${t.streamCount}</strong>
        <span>\u6B4C\u67A0\u6570</span>
      </div>
      <div class="recap-tile">
        <strong>${t.totalSongs}</strong>
        <span>\u7DCF\u6B4C\u5531\u6570</span>
      </div>
      <div class="recap-tile">
        <strong>${t.distinctCount}</strong>
        <span>\u66F2\u306E\u7A2E\u985E</span>
      </div>
      <div class="recap-tile">
        <strong>${t.newSongCount}</strong>
        <span>\u521D\u62AB\u9732\u66F2</span>
      </div>
    </div>
    <div class="recap-top-song">
      ${b("rank")} \u6700\u591A\u6B4C\u5531: ${s}
    </div>
  `}function Ac(t,e){let s=d("#dashboard-recap-body"),n=d("#recap-btn-year"),a=d("#recap-btn-month");if(!s)return;let i=Ce(),r="year";function o(c){r=c;let p=i.getFullYear(),h=i.getMonth(),f=c==="year"?`${p}\u5E74`:`${p}\u5E74 ${["1\u6708","2\u6708","3\u6708","4\u6708","5\u6708","6\u6708","7\u6708","8\u6708","9\u6708","10\u6708","11\u6708","12\u6708"][h]}`,g=Cc(t,e,c,i);s.innerHTML=Ic(g,f),n?.classList.toggle("primary",c==="year"),n?.classList.toggle("ghost",c!=="year"),a?.classList.toggle("primary",c==="month"),a?.classList.toggle("ghost",c!=="month")}o("year");let l=d("#dashboard-recap-toggle");l&&l.addEventListener("click",c=>{let p=c.target.closest("[data-recap-period]");p&&o(p.dataset.recapPeriod)})}function _a(){try{return JSON.parse(localStorage.getItem(Pr)||"[]")}catch{return[]}}function Pc(t){let e=Math.max(0,Math.floor(t)),s=Math.floor(e/3600),n=Math.floor(e%3600/60),a=e%60;return s>0?`${s}:${String(n).padStart(2,"0")}:${String(a).padStart(2,"0")}`:`${n}:${String(a).padStart(2,"0")}`}function Dc(){let t=_a().slice(0,6);return t.length?`
    <div class="card dashboard-card dashboard-resume-card">
      <div class="card-title">${b("play")} \u7D9A\u304D\u304B\u3089\u898B\u308B
        <span class="dashboard-resume-actions">
          <button class="dashboard-resume-clear dashboard-resume-queue" id="dashboard-resume-queue" type="button" title="\u5C65\u6B74\u3092\u30AD\u30E5\u30FC\u3068\u3057\u3066\u518D\u751F">\u30AD\u30E5\u30FC\u518D\u751F</button>
          <button class="dashboard-resume-clear" id="dashboard-resume-clear" type="button" title="\u5C65\u6B74\u3092\u6D88\u53BB">\u6D88\u53BB</button>
        </span>
      </div>
      <div class="dashboard-resume-list" id="dashboard-resume-list">
        ${t.map((e,s)=>{let n=K(e.url),a=Math.floor((Date.now()-(e.updatedAt||0))/864e5),i=a<=0?"\u4ECA\u65E5":`${a}\u65E5\u524D`;return`
          <button class="dashboard-resume-item" type="button" data-resume-idx="${s}" title="${m(e.title||"")}">
            ${n?`<img class="dashboard-resume-thumb" src="${m(n)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="dashboard-resume-thumb"></div>'}
            <span class="dashboard-resume-title">${m(e.title||"\u52D5\u753B")}</span>
            <span class="dashboard-resume-meta">${b("time")} ${Pc(e.t)} \u304B\u3089 \u30FB ${i}</span>
          </button>`}).join("")}
      </div>
    </div>`:""}function Hc(){let t=d("#dashboard-resume-list");t&&(t.onclick=n=>{let a=n.target.closest("[data-resume-idx]");if(!a)return;let i=_a()[Number(a.dataset.resumeIdx)];if(!i?.url)return;let r=null;i.channel!=null&&i.index!=null&&(r=(u.channelData?.combined?.streams||u.data?.streams||[]).find(l=>l.channel===i.channel&&l.index===i.index)||null),window.__openStreamViewer?.(r||{url:i.url,title:i.title,isMv:!!i.isMv},i.t)});let e=d("#dashboard-resume-clear");e&&(e.onclick=()=>{try{localStorage.removeItem(Pr)}catch{}d("#panel-dashboard .dashboard-resume-card")?.remove()});let s=d("#dashboard-resume-queue");s&&(s.onclick=()=>{let n=_a(),a=u.channelData?.combined?.streams||u.data?.streams||[],i=n.map((r,o)=>{let l=r.channel!=null&&r.index!=null?a.find(c=>c.channel===r.channel&&c.index===r.index):null;return l?.url?{kind:"stream",key:`${l.channel}:${l.index}`,stream:l}:r.url?{kind:"mv",key:`history:${o}`,video:{url:r.url,title:r.title||"\u52D5\u753B",isMv:!!r.isMv}}:null}).filter(Boolean);i.length&&window.__playMyListInViewer?.({name:"\u8996\u8074\u5C65\u6B74",items:i,idx:0})})}function Nc(t,e,s){let n=e.filter(o=>o.daysSinceLast>=180).sort((o,l)=>l.count-o.count).slice(0,5),a=e.filter(o=>o.daysSinceLast!=null&&o.daysSinceLast<=30).sort((o,l)=>l.count-o.count).slice(0,5),i=ws(t,"month",Ce()),r=ws(t,"year",Ce());return`
    <div class="card dashboard-card dashboard-list-card dashboard-list-month">
      <div class="card-title">${b("rank")} \u4ECA\u6708\u306E\u3088\u304F\u6B4C\u308F\u308C\u305F\u66F2 <span class="pill">\u8EFD\u91CF\u7248</span></div>
      <div class="bar-list">
        ${i.length?i.slice(0,5).map((o,l)=>Ue(o,l,i[0].count)).join(""):'<div class="empty-state">\u4ECA\u6708\u306E\u6B4C\u5531\u5C65\u6B74\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-list-card dashboard-list-year">
      <div class="card-title">${b("rank")} \u4ECA\u5E74\u306E\u3088\u304F\u6B4C\u308F\u308C\u305F\u66F2 <span class="pill">\u8EFD\u91CF\u7248</span></div>
      <div class="bar-list">
        ${r.length?r.slice(0,5).map((o,l)=>Ue(o,l,r[0].count)).join(""):'<div class="empty-state">\u4ECA\u5E74\u306E\u6B4C\u5531\u5C65\u6B74\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-list-card dashboard-list-stale">
      <div class="card-title">${b("time")} \u4E45\u3057\u3076\u308A\u5019\u88DC <span class="pill">180\u65E5\u4EE5\u4E0A</span></div>
      <div class="bar-list">
        ${n.length?n.map((o,l)=>Ue(o,l,n[0].count)).join(""):'<div class="empty-state">\u5019\u88DC\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-list-card dashboard-list-recent">
      <div class="card-title">${b("sparkle")} \u6700\u8FD1\u6B4C\u3063\u305F\u5B9A\u756A <span class="pill">30\u65E5\u4EE5\u5185</span></div>
      <div class="bar-list">
        ${a.length?a.map((o,l)=>Ue(o,l,a[0].count)).join(""):'<div class="empty-state">\u5019\u88DC\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-recent-card">
      <div class="card-title">${b("video")} \u76F4\u8FD1\u306E\u6B4C\u67A0 <span class="pill">\u6700\u65B0${s.length}\u4EF6</span></div>
      ${s.map(o=>`
        <div class="activity-row">
          <span class="a-date">${T(o.date)}</span>
          <span class="a-title">${o.url?`<a href="${m(o.url)}" target="_blank" rel="noopener">${m(o.title||"\u914D\u4FE1")}</a>`:m(o.title)}</span>
          <span class="a-meta">${b("mic")} ${o.songs.length}\u66F2</span>
        </div>
      `).join("")}
    </div>
  `}function Ue(t,e,s){let n=Math.round(t.count/s*100);return`
    <div class="bar-row clickable" data-songkey="${m(t.key)}" data-songtitle="${m(t.title)}" data-songartist="${m(t.artist)}" title="\u30AF\u30EA\u30C3\u30AF\u3067\u914D\u4FE1\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u306B\u7D5E\u308A\u8FBC\u307F">
      <div class="bar-rank">${e+1}</div>
      <div class="bar-content">
        <div class="bar-label">${m(t.title)} <span style="color:var(--ink-mute);font-size:11px;">/ ${m(t.artist)}</span></div>
        <div class="bar-bar" style="width:${n}%;"></div>
      </div>
      <div class="bar-value">${t.count}</div>
    </div>
  `}function qc(t){let e=new Map;for(let l of t){let c=l.genre||l.genreText||"\u672A\u5206\u985E";!c||c==="\u672A\u5206\u985E"||e.set(c,(e.get(c)||0)+1)}let s=Array.from(e.entries()).sort((l,c)=>c[1]-l[1]),n=s.reduce((l,[,c])=>l+c,0);if(!s.length)return'<div class="empty-state">\u30B8\u30E3\u30F3\u30EB\u30C7\u30FC\u30BF\u306A\u3057</div>';let a=t.length||0,i=Math.max(0,a-n),r=s[0],o=a?Math.round(r[1]/a*100):0;return`
    <div class="genre-meter" aria-label="\u30B8\u30E3\u30F3\u30EB\u5206\u5E03">
      <div class="genre-meter-track">
        ${s.map(([l,c],p)=>`
          <span class="genre-meter-segment g${p%8}" style="width:${Math.max(3,c/n*100)}%" title="${m(l)}: ${c}\u66F2"></span>
        `).join("")}
      </div>
      <div class="genre-breakdown">
        ${s.slice(0,8).map(([l,c],p)=>`
          <div class="genre-row">
            <span class="genre-dot g${p%8}"></span>
            <span class="genre-name">${m(l)}</span>
            <strong>${c}</strong>
          </div>
        `).join("")}
      </div>
      <div class="genre-insights" aria-label="\u30B8\u30E3\u30F3\u30EB\u96C6\u8A08">
        <div class="genre-insight">
          <span>\u5206\u985E\u6E08\u307F</span>
          <strong>${n}<small>\u66F2</small></strong>
        </div>
        <div class="genre-insight">
          <span>\u672A\u5206\u985E</span>
          <strong>${i}<small>\u66F2</small></strong>
        </div>
        <div class="genre-insight">
          <span>\u30B8\u30E3\u30F3\u30EB\u6570</span>
          <strong>${s.length}<small>\u7A2E</small></strong>
        </div>
        <div class="genre-insight">
          <span>${m(r[0])}</span>
          <strong>${o}<small>%</small></strong>
        </div>
      </div>
    </div>
  `}function Rc(t,e){return t.length?`
    <div class="monthly-bars" aria-label="\u6708\u5225\u6B4C\u5531\u6570">
      ${t.map(s=>{let n=Math.max(5,Math.round(s.songs/e*100));return`
          <div class="month-bar" title="${He(s.date)}: ${s.songs}\u66F2 / ${s.streams}\u67A0">
            <div class="month-bar-track"><span style="height:${n}%"></span></div>
            <div class="month-label">${He(s.date).replace(/^\d{4}\//,"")}</div>
            <strong>${s.songs}</strong>
          </div>
        `}).join("")}
    </div>
  `:'<div class="empty-state">\u6708\u5225\u30C7\u30FC\u30BF\u306A\u3057</div>'}function Bc(t){let s=["\u65E5","\u6708","\u706B","\u6C34","\u6728","\u91D1","\u571F"].map(a=>`<div>${a}</div>`).join(""),n=t.map(a=>a.inRange?`<div class="heatmap-cell ${Rn(a.value)}" title="${a.iso}: ${a.value}\u66F2"></div>`:'<div class="heatmap-cell" style="visibility:hidden"></div>').join("");return`
    <div class="heatmap-flex">
      <div class="heatmap-row-labels">${s}</div>
      <div class="heatmap-wrap"><div class="heatmap">${n}</div></div>
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
  `}var Pr,Hr=L(()=>{ft();it();Yt();ft();dt();Pr="kanau-watch-history-v1"});var qr={};wt(qr,{renderRanking:()=>fe});function fe(){let{songs:t,streams:e=[]}=u.data,s=u.rankingPeriod||"all",n=d("#panel-ranking");if(!n)return;let a=s==="all"?null:jc(e,s),i=a?Yc(t,a):[...t].sort((f,g)=>g.count-f.count||f.title.localeCompare(g.title,"ja")),r=u.rankingLimit,o=i.slice(0,r),l=!!u.channelData?.fullLoaded;n.innerHTML=`
    <div class="section-header">
      <h2>${b("rank")} \u6B4C\u5531\u56DE\u6570\u30E9\u30F3\u30AD\u30F3\u30B0</h2>
      <span class="count-pill">${t.length}\u66F2\u4E2D</span>
    </div>
    ${Vc(e,s,l)}
    ${a?Oc(a):""}
    ${a?a.counts.size===0?`
      <div class="empty-state">\u3053\u306E\u671F\u9593\u306B\u6B4C\u5531\u8A18\u9332\u304C\u3042\u308A\u307E\u305B\u3093 \u{1F420}</div>
    `:"":`
      <div class="podium">
        ${o.slice(0,3).map((f,g)=>Kc(f,g)).join("")}
      </div>
    `}
    ${a?.counts.size!==0||!a?`
      <div class="song-list${a?" has-delta":""}">
        ${o.map((f,g)=>Uc(f,g+1,a)).join("")}
      </div>
      ${r<i.length?`
        <div class="timeline-controls">
          <button class="load-more-btn" id="rank-more">\u25BC \u3082\u3063\u3068\u8868\u793A (\u6B8B\u308A${i.length-r}\u66F2)</button>
        </div>`:""}
    `:""}
  `,Fc(n),n.addEventListener("click",f=>{let g=f.target.closest("[data-ranking-period]");if(!g)return;let y=g.closest(".period-tabs")?.querySelector(".period-tab-track");y&&(y.style.left=g.offsetLeft+"px",y.style.width=g.offsetWidth+"px");let $=g.dataset.rankingPeriod;$!==s&&(u.rankingPeriod=$,u.rankingLimit=zs,fe())});let c=document.getElementById("ranking-month-select");c&&c.addEventListener("change",f=>{f.target.value&&(u.rankingMonth=f.target.value,u.rankingPeriod="month-select",u.rankingLimit=zs,fe())});let p=document.getElementById("ranking-compare-select");p&&p.addEventListener("change",f=>{u.rankingCompareMonth=f.target.value,fe()});let h=document.getElementById("ranking-swap-compare");h&&h.addEventListener("click",()=>{let f=u.rankingMonth||"",g=u.rankingCompareMonth||"";!f||!g||(u.rankingMonth=g,u.rankingCompareMonth=f,u.rankingPeriod="month-select",u.rankingLimit=zs,fe())});let v=document.getElementById("rank-more");v&&v.addEventListener("click",()=>{u.rankingLimit+=50,fe()})}function Vc(t,e,s){let n=[{key:"all",label:"\u5168\u671F\u9593"},{key:"month",label:"\u4ECA\u6708"},{key:"prev-month",label:"\u5148\u6708"},{key:"week",label:"\u76F4\u8FD17\u65E5"}],a=zc(t),i=u.rankingMonth||"";return`
    <div class="ranking-period-selector">
      <div class="period-tabs" role="group" aria-label="\u8868\u793A\u671F\u9593">
        <span class="period-tab-track" aria-hidden="true"></span>
        ${n.map(r=>`
          <button
            class="period-btn${e===r.key?" active":""}"
            type="button"
            data-ranking-period="${r.key}"
            ${!s&&r.key!=="all"?'disabled title="\u914D\u4FE1\u30C7\u30FC\u30BF\u8AAD\u307F\u8FBC\u307F\u4E2D"':""}
          >${r.key==="all"||s?r.label:r.label+" \u2026"}</button>
        `).join("")}
      </div>
      ${a.length&&s?`
        <select id="ranking-month-select" class="select-input period-month-select" title="\u6708\u3092\u6307\u5B9A">
          <option value="">\u6708\u3092\u9078\u629E\u2026</option>
          ${a.map(r=>{let[o,l]=r.split("-"),c=`${o}\u5E74${Number(l)}\u6708`;return`<option value="${r}"${e==="month-select"&&i===r?" selected":""}>${c}</option>`}).join("")}
        </select>
      `:""}
      ${e!=="all"&&a.length&&s?`
        <select id="ranking-compare-select" class="select-input period-month-select" title="\u5897\u6E1B\uFF08\u2191\u2193\uFF09\u306E\u6BD4\u8F03\u5148\u3092\u9078\u3076">
          <option value="">\u6BD4\u8F03: \u76F4\u524D\u306E\u671F\u9593\uFF08\u81EA\u52D5\uFF09</option>
          ${a.map(r=>{let[o,l]=r.split("-"),c=`\u6BD4\u8F03: ${o}\u5E74${Number(l)}\u6708`;return`<option value="${r}"${(u.rankingCompareMonth||"")===r?" selected":""}>${c}</option>`}).join("")}
        </select>
        ${e==="month-select"&&i&&u.rankingCompareMonth?`
          <button id="ranking-swap-compare" class="period-btn ranking-swap-btn" type="button" title="\u8868\u793A\u6708\u3068\u6BD4\u8F03\u6708\u3092\u5165\u308C\u66FF\u3048\u308B">\u2194 \u5165\u308C\u66FF\u3048</button>
        `:""}
      `:""}
    </div>
  `}function Fc(t){let e=t.querySelector(".period-tabs .period-btn.active"),s=t.querySelector(".period-tab-track");!e||!s||(s.style.left=e.offsetLeft+"px",s.style.width=e.offsetWidth+"px")}function Oc(t){let{label:e,prevLabel:s,counts:n,totalSongs:a}=t;return`
    <div class="ranking-period-header">
      <span class="ranking-period-label">${m(e)}</span>
      <span class="ranking-period-meta">${n.size}\u66F2\u30FB\u5408\u8A08${a}\u56DE\u6B4C\u5531
        ${s?`<span class="ranking-prev-label">\uFF08\u524D\uFF1A${m(s)}\u6BD4\uFF09</span>`:""}
      </span>
    </div>
  `}function jc(t,e){let s=new Date,n,a,i,r,o,l;if(e==="week")a=new Date(s),n=new Date(s),n.setDate(s.getDate()-6),n.setHours(0,0,0,0),r=new Date(n),r.setDate(r.getDate()-1),i=new Date(r),i.setDate(r.getDate()-6),i.setHours(0,0,0,0),o="\u76F4\u8FD17\u65E5",l="\u524D\u306E7\u65E5";else if(e==="month"){let f=s.getFullYear(),g=s.getMonth();n=new Date(f,g,1),a=new Date(f,g+1,0,23,59,59),i=new Date(f,g-1,1),r=new Date(f,g,0,23,59,59),o=`${f}\u5E74${g+1}\u6708`,l=`${f}\u5E74${g||12}\u6708`}else if(e==="prev-month"){let f=s.getFullYear(),g=s.getMonth()-1,y=g<0?f-1:f,$=(g%12+12)%12;n=new Date(y,$,1),a=new Date(y,$+1,0,23,59,59),i=new Date(y,$-1,1),r=new Date(y,$,0,23,59,59),o=`${y}\u5E74${$+1}\u6708\uFF08\u5148\u6708\uFF09`,l=`${y}\u5E74${$||12}\u6708`}else if(e==="month-select"&&u.rankingMonth){let[f,g]=u.rankingMonth.split("-").map(Number);n=new Date(f,g-1,1),a=new Date(f,g,0,23,59,59),i=new Date(f,g-2,1),r=new Date(f,g-1,0,23,59,59),o=`${f}\u5E74${g}\u6708`,l=`${g===1?f-1:f}\u5E74${g===1?12:g-1}\u6708`}else return null;let c=u.rankingCompareMonth||"";if(c){let[f,g]=c.split("-").map(Number);f&&g&&(i=new Date(f,g-1,1),r=new Date(f,g,0,23,59,59),l=`${f}\u5E74${g}\u6708`)}let p=Nr(t,n,a),h=Nr(t,i,r),v=[...p.values()].reduce((f,g)=>f+g,0);return{label:o,prevLabel:l,start:n,end:a,counts:p,prevCounts:h,totalSongs:v}}function Nr(t,e,s){let n=new Map;for(let a of t){let i=a.date instanceof Date?a.date:new Date(a.date||0);if(i>=e&&i<=s)for(let r of a.songs||[])n.set(r.key,(n.get(r.key)||0)+1)}return n}function Yc(t,{counts:e,prevCounts:s}){let n=new Map(t.map(i=>[i.key,i])),a=[];for(let[i,r]of e){let o=n.get(i);if(!o)continue;let l=s.get(i)||0;a.push({...o,periodCount:r,delta:r-l,isNew:l===0})}return a.sort((i,r)=>r.periodCount-i.periodCount||i.title.localeCompare(r.title,"ja")),a.forEach((i,r)=>{i.periodRank=r+1}),a}function zc(t){let e=new Set;for(let s of t){let n=s.date instanceof Date?s.date:new Date(s.date||0);isNaN(n)||e.add(`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`)}return[...e].sort().reverse()}function Kc(t,e){let s=["1","2","3"];return`
    <div class="podium-card rank-${e+1}"
      data-songkey="${m(t.key)}"
      data-songtitle="${m(t.title)}"
      data-songartist="${m(t.artist)}"
      title="\u30AF\u30EA\u30C3\u30AF\u3067\u914D\u4FE1\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u306B\u7D5E\u308A\u8FBC\u307F">
      <div class="podium-medal" aria-label="${e+1}\u4F4D"><span>${s[e]}</span></div>
      <div class="song-title">${m(t.title)}</div>
      <button class="song-artist artist-search-btn" type="button" data-artist-search="${m(t.artist)}">${m(t.artist)}</button>
      <div class="count-big">${t.count}<small>\u56DE</small></div>
      <div class="last-sung">${t.lastSung?`\u6700\u7D42: ${T(t.lastSung)} (${t.daysSinceLast}\u65E5\u524D)`:"\u672A\u62AB\u9732"}</div>
    </div>
  `}function Uc(t,e,s){let n=s?t.periodCount:t.count,a=s?t.periodRank:t.rank??e,i=a===1?"r1":a===2?"r2":a===3?"r3":"",r=s?`<div class="count">${n}<small>\u56DE</small></div>
       <div class="rank-delta ${Gc(t)}">${Qc(t)}</div>`:`<div class="count">${n}<small>\u56DE</small></div>
       <div class="last">${t.lastSung?`<span class="last-date">${T(t.lastSung)}</span><span class="badge ${re(t.daysSinceLast)}">${t.daysSinceLast}\u65E5\u524D</span>`:'<span class="last-date">\u672A\u62AB\u9732</span><span class="badge never">\u2014</span>'}</div>`;return`
    <div class="song-row" data-songkey="${m(t.key)}" data-songtitle="${m(t.title)}" data-songartist="${m(t.artist)}" title="\u30AF\u30EA\u30C3\u30AF\u3067\u8A73\u7D30\u3092\u8868\u793A">
      <div class="rank ${i}">${a}</div>
      <div class="info">
        <div class="title">${m(t.title)}</div>
        <button class="artist artist-search-btn" type="button" data-artist-search="${m(t.artist)}">${m(t.artist)}</button>
      </div>
      <div class="song-row-side">
        ${r}
      </div>
    </div>
  `}function Gc(t){return t.isNew?"new":t.delta>0?"up":t.delta<0?"down":"same"}function Qc(t){return t.isNew?"NEW":t.delta>0?`\u25B2${t.delta}`:t.delta<0?`\u25BC${Math.abs(t.delta)}`:"\u2014"}var Rr=L(()=>{ft();it();je();dt()});var Kr={};wt(Kr,{renderSongs:()=>Zc});function Ha(){Ge&&(Ge.disconnect(),Ge=null)}function Jc(t){if(Ha(),u.songsLimit>=t)return;let e=document.getElementById("songs-infinite-sentinel");e&&(Ge=new IntersectionObserver(s=>{s[0].isIntersecting&&(u.songsLimit+=100,Q())},{rootMargin:"200px"}),Ge.observe(e))}function Zc(){Ha(),rd(),ld(),ce(u.data?.songs||[]);let t=d("#panel-songs");t.innerHTML=`
    <div class="section-header">
      <h2>${u.singerMode?`${b("mic")} \u9078\u66F2\u30DC\u30FC\u30C9`:`${b("music")} \u5168\u66F2\u30EA\u30B9\u30C8`}</h2>
      <span class="count-pill" id="songs-count">\u2014</span>
    </div>
    <div class="mobile-panel-switch">
      <button class="btn ghost active" type="button" data-mobile-panel-toggle="filters">\u7D5E\u308A\u8FBC\u307F</button>
    </div>
    <div id="songs-filter-panel" class="mobile-panel mobile-panel-filters is-open">
      <div class="songs-search-shell">
        <div class="search-input-wrap">
          <span class="songs-search-icon" aria-hidden="true">\u2315</span>
          <input id="songs-search" class="text-input songs-search-input" type="search" placeholder="\u66F2\u540D\u30FB\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u30FB\u96F0\u56F2\u6C17\u3067\u691C\u7D22" value="${m(u.songsQuery)}">
          <div id="search-history-dropdown" class="search-history-dropdown" hidden></div>
        </div>
        <button class="songs-fav-toggle ${u.favoritesFilter?"is-active":""}" type="button" data-filter="favorites" aria-pressed="${u.favoritesFilter?"true":"false"}" title="\u304A\u6C17\u306B\u5165\u308A\u3060\u3051\u8868\u793A">${b("heart")}</button>
        ${u.singerMode?'<button class="songs-setlist-mini btn primary" id="setlist-toggle-btn" type="button" aria-controls="setlist-planner" aria-expanded="'+(u.setlistExpanded?"true":"false")+'">'+(u.setlistExpanded?"\u30BB\u30C8\u30EA\u3092\u9589\u3058\u308B":"\u30BB\u30C8\u30EA\u5236\u4F5C")+"</button>":""}
      </div>
      <!-- \u96F0\u56F2\u6C17\u30B5\u30B8\u30A7\u30B9\u30C8\u30C1\u30C3\u30D7\uFF08\u5E38\u6642\u8868\u793A\u30FB8\u7A2E\u306E\u307F\uFF09 -->
      <div id="search-suggest" class="suggest-strip songs-suggest-strip" role="group" aria-label="\u96F0\u56F2\u6C17\u3067\u7D20\u65E9\u304F\u691C\u7D22">
        ${[["chill","\u30C1\u30EB\u306A\u66F2"],["\u3042\u3064\u3044","\u3042\u3064\u3044\u66F2"],["\u3057\u3063\u3068\u308A","\u3057\u3063\u3068\u308A"],["\u30A8\u30E2\u3044","\u30A8\u30E2\u3044"],["\u304B\u308F\u3044\u3044","\u304B\u308F\u3044\u3044"]].map(([n,a])=>`<button type="button" class="suggest-chip" data-suggest="${m(a)}">${n}</button>`).join("")}
      </div>
      <details class="songs-advanced">
        <summary>
          <span>\u7D5E\u308A\u8FBC\u307F</span>
          <small>\u4E26\u3073\u9806\u30FB\u30B8\u30E3\u30F3\u30EB\u30FB\u72B6\u614B</small>
        </summary>
        <div class="songs-advanced-body">
          <div class="controls songs-control-grid">
        <select id="songs-sort" class="select-input">
          <option value="count-desc">\u56DE\u6570\uFF08\u591A\uFF09</option>
          <option value="count-asc">\u56DE\u6570\uFF08\u5C11\uFF09</option>
          <option value="recent">\u6700\u7D42\u62AB\u9732\uFF08\u65B0\uFF09</option>
          <option value="oldest">\u6700\u7D42\u62AB\u9732\uFF08\u53E4\uFF09</option>
          <option value="title">\u66F2\u540D\uFF08\u3042\u2192\u3093\uFF09</option>
          <option value="artist">\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8</option>
        </select>
        <select id="songs-genre" class="select-input genre-select" title="\u30B8\u30E3\u30F3\u30EB\u3067\u7D5E\u308A\u8FBC\u307F">
          ${sd()}
        </select>
          </div>
      <!-- \u7D5E\u308A\u8FBC\u307F\u30DC\u30BF\u30F3\u884C -->
      <div class="controls songs-filter-row" id="songs-filters">
        <button class="btn ghost" data-filter="all">\u3059\u3079\u3066</button>
        <button class="btn ghost" data-filter="fresh">\u{1F7E2} \u6700\u8FD1</button>
        <button class="btn ghost" data-filter="stale">\u{1F7E0} \u4E45\u3057\u3076\u308A</button>
        <button class="btn ghost" data-filter="never">\u26AA \u672A\u78BA\u8A8D</button>
        <button class="btn ghost songs-favorites-filter" data-filter="favorites">${b("heart")} \u304A\u6C17\u306B\u5165\u308A</button>
        ${u.singerMode?"":`<button class="btn ghost" id="recommend-btn" type="button">${b("lightbulb")} \u304A\u3059\u3059\u3081</button><button class="btn ghost" id="todays-song-btn" type="button">${b("dice")} \u4ECA\u65E5\u306E\u4E00\u66F2</button>`}
      </div>
      ${u.singerMode?`
        <div class="songs-tools">
          <button class="btn ghost" data-singer-preset="keyed" type="button">\u30AD\u30FC\u78BA\u8A8D\u6E08\u307F</button>
          <button class="btn ghost" data-singer-preset="classic" type="button">\u5B9A\u756A</button>
          <button class="btn ghost" data-singer-preset="stale" type="button">\u4E45\u3057\u3076\u308A</button>
          <button class="btn ghost" data-singer-preset="rare" type="button">\u30EC\u30A2</button>
          <button class="btn ghost" data-singer-preset="chill" type="button">Chill</button>
          <button class="btn ghost" data-singer-preset="energetic" type="button">\u6FC0\u3057\u3044</button>
          <button class="btn ghost" data-singer-preset="nostalgic" type="button">\u30CE\u30B9\u30BF\u30EB\u30B8\u30C3\u30AF</button>
          <button class="btn ghost" id="compact-btn" type="button">\u8868\u793A: ${u.songsView==="compact"?"\u30B3\u30F3\u30D1\u30AF\u30C8":"\u8A73\u7D30"}</button>
          <button class="btn ghost" id="todays-song-btn" type="button">${b("dice")} \u4ECA\u65E5\u306E\u4E00\u66F2</button>
        </div>
      `:""}
          <div class="genre-strip" id="songs-genre-chips">${nd()}</div>
        </div>
      </details>
    </div>
    ${u.singerMode?'<div id="setlist-planner" class="setlist-planner mobile-panel mobile-panel-setlist"></div>':""}
    <div id="todays-song-box" class="todays-song-box" hidden></div>
    <div id="songs-list" class="song-list"></div>
    <div class="timeline-controls" id="songs-more-wrap"></div>
  `,ut=d("#songs-search"),Gs=d("#songs-sort"),ve=d("#songs-genre"),Aa=d("#songs-filters"),Pa=d("#songs-genre-chips"),Zs=d("#songs-list"),Or=d("#songs-count"),Xs=d("#songs-more-wrap"),Gs.value=u.songsSort,ve.value=ed(u.songsGenre)?u.songsGenre:"all",u.songsGenre=ve.value,Ca(),Ia(),Ea();let e=document.getElementById("search-suggest"),s=Fi(()=>{u.songsQuery=ut.value,u.songsLimit=100,fa(u.songsQuery),Js(),et({tab:"songs",q:u.songsQuery},{replace:!0}),Ia(),Q()},120);ut.addEventListener("input",()=>{s()}),ut.addEventListener("focus",()=>{Br()}),ut.addEventListener("blur",()=>{setTimeout(()=>{Js()},200)}),e&&e.addEventListener("click",n=>{let a=n.target.closest("[data-suggest]");if(!a)return;let i=a.dataset.suggest;ut.value===i?(ut.value="",u.songsQuery=""):(ut.value=i,u.songsQuery=i),u.songsLimit=100,fa(u.songsQuery||i),et({tab:"songs",q:u.songsQuery},{replace:!0}),Ia(),Q()}),Gs.addEventListener("change",()=>{u.songsSort=Gs.value,Q()}),ve.addEventListener("change",()=>{u.songsGenre=ve.value,u.songsLimit=100,Ea(),Q()}),Aa.addEventListener("click",n=>{let a=n.target.closest("[data-filter]");a&&(a.dataset.filter==="favorites"?u.favoritesFilter=!u.favoritesFilter:(u.songsFilter=a.dataset.filter,u.favoritesFilter=!1),u.songsLimit=100,Ca(),Q())}),t.querySelector(".songs-fav-toggle")?.addEventListener("click",()=>{u.favoritesFilter=!u.favoritesFilter,u.favoritesFilter&&(u.songsFilter="all"),u.songsLimit=100,Ca(),Q()}),Pa.addEventListener("click",n=>{let a=n.target.closest("[data-genre]");a&&(u.songsGenre=a.dataset.genre,ve.value=u.songsGenre,u.songsLimit=100,Ea(),Q())});for(let n of t.querySelectorAll("[data-singer-preset]"))n.addEventListener("click",()=>{u.singerMode=!0,u.singerPreset=u.singerPreset===n.dataset.singerPreset?"all":n.dataset.singerPreset,u.songsLimit=100,Q()});d("#compact-btn")?.addEventListener("click",()=>{u.songsView=u.songsView==="compact"?"comfortable":"compact",Q()}),d("#setlist-toggle-btn")?.addEventListener("click",()=>td()),d("#recommend-btn")?.addEventListener("click",()=>id()),d("#todays-song-btn")?.addEventListener("click",()=>Vr());for(let n of t.querySelectorAll("[data-mobile-panel-toggle]"))n.addEventListener("click",()=>Xc(n.dataset.mobilePanelToggle));t.onclick=n=>{if(n.target.closest("#search-history-clear")){n.preventDefault(),n.stopPropagation(),pr(),Js();return}let i=n.target.closest(".search-history-remove");if(i){n.preventDefault(),n.stopPropagation(),ur(i.dataset.remove),Br();return}let r=n.target.closest(".search-history-item");if(r){n.preventDefault(),n.stopPropagation();let y=r.dataset.query;u.songsQuery=y,ut.value=y,u.songsLimit=100,Js(),et({tab:"songs",q:y}),Q();return}if(n.target.closest("[data-recommend-dismiss]")){n.preventDefault(),n.stopPropagation();let y=d("#recommend-box");y&&(y.hidden=!0,y.innerHTML="");return}if(n.target.closest("[data-todays-song-dismiss]")){n.preventDefault(),n.stopPropagation();let y=d("#todays-song-box");y&&(y.hidden=!0,y.innerHTML="");return}if(n.target.closest("[data-todays-song-reroll]")){n.preventDefault(),n.stopPropagation(),Vr();return}let p=n.target.closest("[data-setlist-action]");if(p){n.stopPropagation(),ud(p);return}let h=n.target.closest("[data-artist-search]");if(h){n.stopPropagation();let y=String(h.dataset.artistSearch||"").replace(/"/g,"");u.songsQuery=`artist:"${y}"`,ut.value=u.songsQuery,u.songsLimit=100,et({tab:"songs",q:u.songsQuery}),Q();return}let v=n.target.closest("[data-fav-toggle]");if(v){n.preventDefault(),n.stopPropagation();let y=v.dataset.favToggle;ms(y);let $=ae(y);v.classList.toggle("is-active",$),v.setAttribute("aria-pressed",String($)),v.innerHTML=b("heart");return}let f=n.target.closest("[data-tag-search]");if(!f)return;n.stopPropagation();let g=f.dataset.tagType||"tag";u.songsQuery=`${g}:${f.dataset.tagSearch}`,ut.value=u.songsQuery,u.songsLimit=100,et({tab:"songs",q:u.songsQuery}),Q()},t.oninput=n=>{n.target.id==="setlist-theme"&&(u.setlist.theme=n.target.value,Gt())},t.onchange=n=>{n.target.id==="setlist-copy-format"&&(u.setlist.copyFormat=n.target.value,Gt())},t.onkeydown=n=>{n.key==="Enter"&&(!n.target.closest(".setlist-custom-add")&&!n.target.closest(".setlist-custom-details")||n.target.tagName!=="BUTTON"&&(n.preventDefault(),Yr()))},Q()}function Br(){let t=Rs(),e=d("#search-history-dropdown");e&&(Wc=e,t.length?e.innerHTML=`
      <div class="search-history-header">
        <span>\u691C\u7D22\u5C65\u6B74</span>
        <button class="search-history-clear-btn" type="button" id="search-history-clear">\u3059\u3079\u3066\u524A\u9664</button>
      </div>
      ${t.map(s=>`
        <div class="search-history-item" data-query="${m(s)}">
          <span class="search-history-query">${m(s)}</span>
          <button class="search-history-remove" type="button" data-remove="${m(s)}" aria-label="\u524A\u9664">\xD7</button>
        </div>
      `).join("")}
    `:e.innerHTML='<div class="search-history-empty">\u691C\u7D22\u5C65\u6B74\u304C\u3042\u308A\u307E\u305B\u3093</div>',e.hidden=!1)}function Js(){let t=d("#search-history-dropdown");t&&(t.hidden=!0)}function Xc(t){let e=d("#songs-filter-panel"),s=d("#setlist-planner");if(t==="setlist"&&!u.singerMode){e?.classList.add("is-open"),s?.classList.remove("is-open");for(let a of document.querySelectorAll("[data-mobile-panel-toggle]"))a.classList.toggle("active",a.dataset.mobilePanelToggle==="filters");return}if(u.singerMode){e?.classList.add("is-open"),e?.scrollIntoView({behavior:"smooth",block:"start"});for(let i of document.querySelectorAll("[data-mobile-panel-toggle]"))i.classList.toggle("active",i.dataset.mobilePanelToggle==="filters");return}let n=t==="setlist";e?.classList.toggle("is-open",!n),s?.classList.toggle("is-open",n);for(let a of document.querySelectorAll("[data-mobile-panel-toggle]"))a.classList.toggle("active",a.dataset.mobilePanelToggle===t)}function td(){if(!u.singerMode)return;u.setlistExpanded=!u.setlistExpanded,Y();let t=d("#setlist-planner");u.setlistExpanded&&t?.scrollIntoView({behavior:"smooth",block:"start"})}function en(t){return String(t.genre||"\u672A\u5206\u985E").trim()||"\u672A\u5206\u985E"}function Na(){let t=new Map;for(let e of u.data.songs||[]){let s=en(e);t.set(s,(t.get(s)||0)+1)}return[...t.entries()].sort((e,s)=>s[1]-e[1]||e[0].localeCompare(s[0],"ja"))}function ed(t){return t==="all"||Na().some(([e])=>e===t)}function sd(){let t=['<option value="all">\u5168\u30B8\u30E3\u30F3\u30EB</option>'];for(let[e,s]of Na())t.push(`<option value="${m(e)}">${m(e)} (${s})</option>`);return t.join("")}function nd(){let t=['<button class="genre-chip" type="button" data-genre="all">\u5168\u30B8\u30E3\u30F3\u30EB</button>'];for(let[e,s]of Na())t.push(`
      <button class="genre-chip" type="button" data-genre="${m(e)}">
        <span>${m(e)}</span><small>${s}</small>
      </button>
    `);return t.join("")}function Ea(){for(let t of Pa.querySelectorAll("[data-genre]"))t.classList.toggle("active",t.dataset.genre===u.songsGenre)}function Ca(){for(let e of Aa.querySelectorAll("[data-filter]"))e.dataset.filter==="favorites"?(e.classList.toggle("primary",u.favoritesFilter),e.classList.toggle("ghost",!u.favoritesFilter)):(e.classList.toggle("primary",e.dataset.filter===u.songsFilter&&!u.favoritesFilter),e.classList.toggle("ghost",e.dataset.filter!==u.songsFilter||u.favoritesFilter));let t=document.querySelector(".songs-fav-toggle");t&&(t.classList.toggle("is-active",u.favoritesFilter),t.setAttribute("aria-pressed",String(u.favoritesFilter)),t.innerHTML=b("heart"))}function Ia(){let t=document.getElementById("search-suggest");if(!t)return;let e=(u.songsQuery||"").trim();for(let s of t.querySelectorAll("[data-suggest]"))s.classList.toggle("is-active",s.dataset.suggest===e)}function Q(){let{songs:t}=u.data,e=gs(t,u.songsGenre,en),s=ys(e,{singerMode:u.singerMode,preset:u.singerPreset,keyPublished:u.data?.stats?.keyPublished}),n=bs(s,u.songsFilter),{results:a,tokens:i}=Bs(u.songsQuery,n),r=u.songsQuery.trim()?a.filter(l=>n.includes(l)):n;if(u.favoritesFilter&&(r=r.filter(l=>u.favorites.has(l.key))),r=xs(r,u.songsSort,!!u.songsQuery.trim()),ge=r,Or.textContent=`${r.length} / ${t.length}\u66F2`,!r.length){Zs.innerHTML='<div class="empty-state">\u8A72\u5F53\u3059\u308B\u66F2\u304C\u3042\u308A\u307E\u305B\u3093 \u{1F420}</div>',Xs.innerHTML="";return}let o=r.slice(0,u.songsLimit);Zs.classList.toggle("compact",u.songsView==="compact");for(let l of document.querySelectorAll("[data-singer-preset]")){let c=u.singerMode&&u.singerPreset===l.dataset.singerPreset;l.classList.toggle("primary",c),l.classList.toggle("ghost",!c)}d("#compact-btn")&&(d("#compact-btn").textContent=`\u8868\u793A: ${u.songsView==="compact"?"\u30B3\u30F3\u30D1\u30AF\u30C8":"\u8A73\u7D30"}`),Zs.innerHTML=o.map(l=>yd(l,i)).join(""),Y(),u.songsLimit<r.length?(Xs.innerHTML=`
      <div id="songs-infinite-sentinel" style="height:1px;width:100%;"></div>
      <button class="load-more-btn" id="songs-more">\u25BC \u3082\u3063\u3068\u8868\u793A (\u6B8B\u308A${r.length-u.songsLimit}\u66F2)</button>
    `,d("#songs-more").addEventListener("click",()=>{u.songsLimit+=200,Q()}),Jc(r.length)):(Ha(),Xs.innerHTML="")}function Vr(){let t=d("#todays-song-box");if(!t)return;if(!ge.length){t.hidden=!1,t.innerHTML='<div class="empty-state">\u6761\u4EF6\u306B\u5408\u3046\u66F2\u304C\u3042\u308A\u307E\u305B\u3093</div>';return}let e=ge[Math.floor(Math.random()*ge.length)];t.hidden=!1,t.innerHTML=ad(e)}function ad(t){let e=t.lastSung?`${T(t.lastSung)} \xB7 ${t.daysSinceLast}\u65E5\u524D`:"\u5C65\u6B74\u672A\u78BA\u8A8D",s=t.displayKey?`<span class="todays-song-key">\u30AD\u30FC ${m(t.displayKey)}</span>`:"",n=u.singerMode?`<button class="btn primary" type="button" data-setlist-action="todays-song-add" data-songkey="${m(t.key)}">${b("plus")} \u30BB\u30C8\u30EA\u306B\u8FFD\u52A0</button>`:"";return`
    <div class="todays-song-card">
      <div class="todays-song-header">
        <span class="todays-song-label">${b("dice")} \u4ECA\u65E5\u306E\u4E00\u66F2</span>
        <button class="todays-song-dismiss" type="button" data-todays-song-dismiss aria-label="\u9589\u3058\u308B">\xD7</button>
      </div>
      <div class="todays-song-info">
        <div class="todays-song-title">${m(t.title)}</div>
        <div class="todays-song-artist">${m(t.artist)}</div>
        <div class="todays-song-meta">
          <span class="todays-song-count">${t.count}\u56DE</span>
          <span class="todays-song-last">${e}</span>
          ${s}
        </div>
      </div>
      <div class="todays-song-actions">
        ${n}
        <button class="btn ghost" type="button" data-todays-song-reroll>\u5225\u306E\u3082\u3046\u4E00\u56DE</button>
      </div>
    </div>
  `}function id(){let t=d("#recommend-box"),e=xs(ys(bs(gs(u.data.songs,"all",en),u.songsFilter),{singerMode:u.singerMode,preset:u.singerPreset,keyPublished:u.data?.stats?.keyPublished}).filter(a=>a.lastSung&&(a.displayKey||!u.data.stats.keyPublished)),"oldest",!1);if(!e.length){t.hidden=!1,t.innerHTML='<div class="empty-state">\u6761\u4EF6\u306B\u5408\u3046\u304A\u3059\u3059\u3081\u5019\u88DC\u304C\u3042\u308A\u307E\u305B\u3093</div>';return}let s=e.slice(0,Math.min(80,e.length)),n=s[Math.floor(Math.random()*s.length)];t.hidden=!1,t.innerHTML=`
    <div class="recommend-card" data-songkey="${m(n.key)}" data-songtitle="${m(n.title)}" data-songartist="${m(n.artist)}">
      <div>
        <div class="recommend-label">\u4ECA\u65E5\u306E\u5019\u88DC</div>
        <strong>${m(n.title)}</strong>
        <span>/ ${m(n.artist)}</span>
      </div>
      <div class="recommend-meta">
        <span>${n.count}\u56DE</span>
        <span>${n.daysSinceLast??"\u2014"}\u65E5\u524D</span>
        ${n.displayKey?`<span>\u30AD\u30FC ${m(n.displayKey)}</span>`:""}
      </div>
      <button class="recommend-dismiss" type="button" data-recommend-dismiss aria-label="\u304A\u3059\u3059\u3081\u9078\u66F2\u3092\u9589\u3058\u308B">\xD7</button>
    </div>
  `}function rd(){try{let t=localStorage.getItem(jr);if(!t)return;let e=JSON.parse(t);u.setlist.theme=String(e.theme||""),u.setlist.copyFormat=e.copyFormat==="timestamp"?"timestamp":"simple",u.setlist.items=Array.isArray(e.items)?e.items:[]}catch{u.setlist.items=[]}}function od(){let t=u.setlist.items;if(!t.length)return window.location.href.split("?")[0];let e=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),s=new URL(window.location.href.split("?")[0]);return s.searchParams.set("setlist",e),s.toString()}function ld(){try{let e=new URLSearchParams(window.location.search).get("setlist");if(!e)return;let s=decodeURIComponent(escape(atob(e))),n=JSON.parse(s);if(!Array.isArray(n)||!n.length)return;let a=new Set(u.setlist.items.map(r=>r.key)),i=n.filter(r=>!a.has(r.key));i.length&&(u.setlist.items=[...u.setlist.items,...i],Gt())}catch{}}async function cd(){let t=od();if(!u.setlist.items.length){Y("\u5171\u6709\u3059\u308B\u66F2\u304C\u3042\u308A\u307E\u305B\u3093");return}try{await navigator.clipboard.writeText(t),Y("\u5171\u6709URL\u3092\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F")}catch{Y("\u30B3\u30D4\u30FC\u306B\u5931\u6557\u3057\u307E\u3057\u305F")}}function Gt(){localStorage.setItem(jr,JSON.stringify(u.setlist))}function Da(t){return(u.data.songs||[]).find(e=>e.key===t)||null}function tn(t){t&&(u.setlist.items.push({key:t.key,title:t.title,artist:t.artist,displayKey:t.displayKey||"",genre:t.genre||"",moodTags:t.moodTags||[],seasonTags:t.seasonTags||[],daysSinceLast:t.daysSinceLast}),Gt(),Y("\u8FFD\u52A0\u3057\u307E\u3057\u305F"))}function Yr(){let t=d("#setlist-custom-title"),e=d("#setlist-custom-artist"),s=d("#setlist-custom-key"),n=String(t?.value||"").trim(),a=String(e?.value||"").trim(),i=String(s?.value||"").trim();if(!n){Y("\u66F2\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044");return}u.setlist.items.push({key:`custom:${Date.now()}:${Math.random().toString(36).slice(2,8)}`,custom:!0,title:n,artist:a,displayKey:i,genre:"\u65B0\u898F",moodTags:[],seasonTags:[],daysSinceLast:null}),Gt(),Y("\u65B0\u3057\u3044\u66F2\u3092\u8FFD\u52A0\u3057\u307E\u3057\u305F")}function dd(t){if(t.custom)return t;let e=Da(t.key);return e?{...t,...e}:t}function ud(t){let e=t.dataset.setlistAction,s=Number(t.dataset.index);if(e==="add"&&tn(Da(t.dataset.songkey)),e==="todays-song-add"&&tn(Da(t.dataset.songkey)),e==="remove"&&u.setlist.items.splice(s,1),e==="up"&&s>0&&([u.setlist.items[s-1],u.setlist.items[s]]=[u.setlist.items[s],u.setlist.items[s-1]]),e==="down"&&s<u.setlist.items.length-1&&([u.setlist.items[s+1],u.setlist.items[s]]=[u.setlist.items[s],u.setlist.items[s+1]]),e==="copy-item"){bd(s);return}if(e==="add-custom"){Yr();return}if(e==="random"&&pd(),e==="copy"&&gd(),e==="share"){cd();return}e==="clear"&&confirm("\u30BB\u30C8\u30EA\u3092\u7A7A\u306B\u3057\u307E\u3059\u304B\uFF1F")&&(u.setlist.items=[]),Gt(),["add","random","copy"].includes(e)||Y()}function pd(){let t=new Set(u.setlist.items.map(n=>n.key)),e=(ge.length?ge:u.data.songs).filter(n=>n.key&&!t.has(n.key));if(!e.length){Y("\u8FFD\u52A0\u3067\u304D\u308B\u5019\u88DC\u304C\u3042\u308A\u307E\u305B\u3093");return}let s=e[Math.floor(Math.random()*e.length)];tn(s)}function qa(){return u.setlist.items.map(dd)}function Y(t=""){let e=d("#setlist-planner");if(!e)return;if($d(),e.hidden=!u.singerMode||!u.setlistExpanded,e.classList.toggle("is-open",u.singerMode&&u.setlistExpanded),!u.singerMode){e.innerHTML="";return}let s=qa(),n=Gn(s),a=s.length*5;e.innerHTML=`
    <div class="setlist-head">
      <div>
        <div class="recommend-label">Setlist Builder</div>
        <h3>\u4ECA\u65E5\u306E\u30BB\u30C8\u30EA</h3>
      </div>
      <div class="setlist-total">${s.length}\u66F2 / \u7D04${a}\u5206</div>
    </div>
    <input id="setlist-theme" class="text-input setlist-theme" type="text" placeholder="\u6B4C\u67A0\u30C6\u30FC\u30DE\u30E1\u30E2" value="${m(u.setlist.theme)}">
    <div class="setlist-search-add">
      <div class="setlist-search-wrap">
        <input id="setlist-search-input" class="text-input setlist-search-input"
               type="text" placeholder="\u66F2\u540D\u3092\u5165\u529B\u3057\u3066\u8FFD\u52A0\u2026" autocomplete="off" spellcheck="false">
        <div id="setlist-search-dropdown" class="setlist-search-dropdown" hidden></div>
      </div>
      <details class="setlist-custom-details">
        <summary>\u691C\u7D22\u3067\u898B\u3064\u304B\u3089\u306A\u3044\u66F2\u3092\u8FFD\u52A0\u3059\u308B</summary>
        <div class="setlist-custom-add">
          <input id="setlist-custom-title" class="text-input" type="text"
                 placeholder="\u66F2\u540D\uFF08\u4F8B\uFF1A\u30B7\u30E3\u30EB\u30EB\uFF09" autocomplete="off">
          <div class="setlist-custom-row2">
            <input id="setlist-custom-artist" class="text-input" type="text"
                   placeholder="\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u540D\uFF08\u4EFB\u610F\uFF09" autocomplete="off">
            <input id="setlist-custom-key" class="text-input setlist-custom-key-inp" type="text"
                   placeholder="\u30AD\u30FC" maxlength="5" autocomplete="off">
            <button class="btn primary" type="button" data-setlist-action="add-custom">\u8FFD\u52A0</button>
          </div>
        </div>
      </details>
    </div>
    <div class="setlist-balance">
      ${Fr("\u30B8\u30E3\u30F3\u30EB",n.genres)}
      ${Fr("\u96F0\u56F2\u6C17",n.moods)}
      <span>\u30AD\u30FC ${n.keys}/${s.length}</span>
      <span>\u4E45\u3057\u3076\u308A ${n.stale}</span>
    </div>
    <div class="setlist-items">
      ${s.length?s.map((i,r)=>md(i,r)).join(""):'<div class="setlist-empty">\u66F2\u306E\u300C\u30BB\u30C8\u30EA\u300D\u30DC\u30BF\u30F3\u304B\u30E9\u30F3\u30C0\u30E0\u8FFD\u52A0\u304B\u3089\u4F5C\u308C\u307E\u3059</div>'}
    </div>
    <div class="setlist-actions">
      <select id="setlist-copy-format" class="select-input">
        <option value="simple"${u.setlist.copyFormat==="simple"?" selected":""}>\u66F2\u540D / \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8</option>
        <option value="timestamp"${u.setlist.copyFormat==="timestamp"?" selected":""}>\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u5165\u529B\u7528</option>
      </select>
      <button class="btn ghost" type="button" data-setlist-action="random">\u30E9\u30F3\u30C0\u30E0\u8FFD\u52A0</button>
      <button class="btn primary" type="button" data-setlist-action="copy">\u30B3\u30D4\u30FC</button>
      <button class="btn ghost" type="button" data-setlist-action="share">${b("link")} \u5171\u6709</button>
      <button class="btn ghost" type="button" data-setlist-action="clear">\u30AF\u30EA\u30A2</button>
      ${t?`<span class="setlist-message">${m(t)}</span>`:""}
    </div>
  `,hd(),fd()}function Fr(t,e){return e.length?`<span>${t} ${e.map(([s,n])=>`${m(s)} ${n}`).join(" / ")}</span>`:`<span>${t} \u2014</span>`}function md(t,e){return`
    <div class="setlist-item" data-index="${e}">
      <div class="setlist-no">${e+1}</div>
      <div class="setlist-drag-handle" title="\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u4E26\u3073\u66FF\u3048" aria-label="\u30C9\u30E9\u30C3\u30B0\u30CF\u30F3\u30C9\u30EB">\u283F</div>
      <div class="setlist-info">
        <strong>${m(t.title)}</strong>
        <span>${t.artist?m(t.artist):"\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u672A\u5165\u529B"}${t.displayKey?` \xB7 key ${m(t.displayKey)}`:""}${t.custom?" \xB7 \u65B0\u898F":""}</span>
      </div>
      <div class="setlist-move">
        <button class="setlist-copy-one" type="button" data-setlist-action="copy-item" data-index="${e}" aria-label="${m(t.title)}\u3092\u30B3\u30D4\u30FC">\u29C9</button>
        <button type="button" data-setlist-action="up" data-index="${e}" aria-label="\u4E0A\u3078">\u2191</button>
        <button type="button" data-setlist-action="down" data-index="${e}" aria-label="\u4E0B\u3078">\u2193</button>
        <button type="button" data-setlist-action="remove" data-index="${e}" aria-label="\u524A\u9664">\xD7</button>
      </div>
    </div>
  `}function hd(){let t=document.getElementById("setlist-search-input"),e=document.getElementById("setlist-search-dropdown");if(!t||!e)return;let s=[],n=-1;function a(o){let l=o.trim().toLowerCase();if(!l){e.hidden=!0,s=[],n=-1;return}let p=(u.data?.songs||[]).filter(v=>v.title.toLowerCase().includes(l)||(v.artist||"").toLowerCase().includes(l)).sort((v,f)=>{let g=v.title.toLowerCase().startsWith(l)?2:v.title.toLowerCase().includes(l)?1:0,y=f.title.toLowerCase().startsWith(l)?2:f.title.toLowerCase().includes(l)?1:0;return g!==y?y-g:f.count-v.count}).slice(0,8),h={_isNew:!0,title:o.trim()};p.length?(e.innerHTML=p.map((v,f)=>`
          <div class="setlist-dd-item" data-dd-idx="${f}">
            <span class="setlist-dd-icon">${b("music")}</span>
            <div class="setlist-dd-body">
              <div class="setlist-dd-title">${m(v.title)}</div>
              <div class="setlist-dd-meta">${m(v.artist||"\u2014")} \xB7 ${v.count}\u56DE</div>
            </div>
          </div>`).join("")+`<div class="setlist-dd-item setlist-dd-new" data-dd-idx="${p.length}">
          <span class="setlist-dd-plus">${b("plus")}</span>
          <div class="setlist-dd-body">
            <div class="setlist-dd-title">\u300C${m(o.trim())}\u300D\u3092\u65B0\u898F\u8FFD\u52A0</div>
            <div class="setlist-dd-meta">\u66F2\u30EA\u30B9\u30C8\u306B\u306A\u3044\u66F2\u3068\u3057\u3066\u8FFD\u52A0</div>
          </div>
        </div>`,s=[...p,h]):(e.innerHTML=`
        <div class="setlist-dd-item setlist-dd-new" data-dd-idx="0">
          <span class="setlist-dd-plus">${b("plus")}</span>
          <div class="setlist-dd-body">
            <div class="setlist-dd-title">\u300C${m(o.trim())}\u300D\u3092\u65B0\u898F\u8FFD\u52A0</div>
            <div class="setlist-dd-meta">\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u540D\u3092\u5165\u529B\u3057\u3066\u8FFD\u52A0\u3067\u304D\u307E\u3059</div>
          </div>
        </div>`,s=[h]),n=-1,e.hidden=!1,i()}function i(){e.querySelectorAll("[data-dd-idx]").forEach((o,l)=>o.classList.toggle("is-selected",l===n))}function r(o){let l=s[o];if(l)if(e.hidden=!0,s=[],n=-1,l._isNew){let c=document.querySelector(".setlist-custom-details"),p=document.getElementById("setlist-custom-title");c&&p?(c.open=!0,p.value=l.title,t.value="",document.getElementById("setlist-custom-artist")?.focus()):t.value=""}else t.value="",tn(l)}t.addEventListener("input",()=>a(t.value)),t.addEventListener("keydown",o=>{if(e.hidden)return;let l=s.length;o.key==="ArrowDown"?(o.preventDefault(),n=(n+1)%l,i()):o.key==="ArrowUp"?(o.preventDefault(),n=(n-1+l)%l,i()):o.key==="Enter"?(o.preventDefault(),o.stopPropagation(),r(n>=0?n:0)):o.key==="Escape"&&(e.hidden=!0,n=-1)}),e.addEventListener("mousedown",o=>{let l=o.target.closest("[data-dd-idx]");l&&(o.preventDefault(),r(Number(l.dataset.ddIdx)))}),Qs&&document.removeEventListener("click",Qs),Qs=o=>{!t.contains(o.target)&&!e.contains(o.target)&&(e.hidden=!0,n=-1)},document.addEventListener("click",Qs)}function fd(){Ws&&(Ws(),Ws=null);let t=document.querySelector(".setlist-items");if(!t)return;let e=null,s=()=>{e&&(e.rows.forEach(r=>{r.style.transform=""}),e.row.classList.remove("is-dragging"),t.classList.remove("is-drag-active"),e.row.removeEventListener("pointermove",n),e.row.removeEventListener("pointerup",a),e.row.removeEventListener("pointercancel",i),e=null)};function n(r){if(!e)return;r.preventDefault();let o=r.clientY-e.startY;if(!e.moved&&Math.abs(o)<3)return;e.moved=!0,e.row.style.transform=`translateY(${o}px)`;let l=e.mids[e.startIdx]+o,c=0;for(let p=0;p<e.mids.length;p++)p!==e.startIdx&&l>e.mids[p]&&c++;c!==e.targetIdx&&(e.targetIdx=c,e.rows.forEach((p,h)=>{if(h===e.startIdx)return;let v=0;e.startIdx<c&&h>e.startIdx&&h<=c?v=-e.rowH:e.startIdx>c&&h>=c&&h<e.startIdx&&(v=e.rowH),p.style.transform=v?`translateY(${v}px)`:""}))}function a(){if(!e)return;let{startIdx:r,targetIdx:o,moved:l}=e;if(s(),!l||o===r)return;let c=u.setlist.items;if(r<c.length){let[p]=c.splice(r,1);c.splice(o,0,p),Gt(),Y()}}function i(){s()}t.addEventListener("pointerdown",r=>{if(e||r.button!=null&&r.button!==0)return;let o=!!r.target.closest(".setlist-drag-handle");if(r.pointerType==="touch"&&!o||r.target.closest("button, a, input, select, textarea"))return;let l=r.target.closest(".setlist-item");if(!l)return;r.preventDefault();let c=Array.from(t.querySelectorAll(".setlist-item")),p=c.indexOf(l);if(p<0)return;let h=c.map(f=>{let g=f.getBoundingClientRect();return g.top+g.height/2}),v=l.getBoundingClientRect();e={rows:c,mids:h,startIdx:p,targetIdx:p,startY:r.clientY,rowH:v.height+(parseFloat(getComputedStyle(t).rowGap||getComputedStyle(t).gap)||0),row:l,moved:!1},l.classList.add("is-dragging"),t.classList.add("is-drag-active");try{l.setPointerCapture(r.pointerId)}catch{}l.addEventListener("pointermove",n,{passive:!1}),l.addEventListener("pointerup",a),l.addEventListener("pointercancel",i)}),Ws=s}function vd(){let t=qa(),e=[];return u.setlist.theme&&e.push(`# ${u.setlist.theme}`,""),t.forEach(s=>{e.push(zr(s))}),e.join(`
`)}function zr(t){let e=String(t?.title||"").trim(),s=String(t?.artist||"").trim(),n=s?`${e} / ${s}`:e;return u.setlist.copyFormat==="timestamp"?`00:00\u3000${n}\u300000:00`:n}async function gd(){let t=vd();if(!t.trim()){Y("\u30B3\u30D4\u30FC\u3059\u308B\u66F2\u304C\u3042\u308A\u307E\u305B\u3093");return}try{await navigator.clipboard.writeText(t),Y("\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F")}catch{Y("\u30B3\u30D4\u30FC\u306B\u5931\u6557\u3057\u307E\u3057\u305F")}}async function bd(t){let e=qa()[t];if(!e){Y("\u30B3\u30D4\u30FC\u3059\u308B\u66F2\u304C\u3042\u308A\u307E\u305B\u3093");return}try{await navigator.clipboard.writeText(zr(e)),Y("1\u66F2\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F")}catch{Y("\u30B3\u30D4\u30FC\u306B\u5931\u6557\u3057\u307E\u3057\u305F")}}function yd(t,e){let s=t.rank===1?"r1":t.rank===2?"r2":t.rank===3?"r3":"",n=t.lastSung?`<span class="last-date">${T(t.lastSung)}</span><span class="badge ${re(t.daysSinceLast)}">${t.daysSinceLast}\u65E5\u524D</span>`:'<span class="last-date">\u5C65\u6B74\u672A\u78BA\u8A8D</span><span class="badge never">\u8981\u78BA\u8A8D</span>',a=Qn(t.title,e),i=Qn(t.artist,e),r=Ls(t,u.songsQuery),o=ae(t.key);return`
    <div class="song-row" data-songkey="${m(t.key)}" data-songtitle="${m(t.title)}" data-songartist="${m(t.artist)}" title="\u30AF\u30EA\u30C3\u30AF\u3067\u66F2\u8A73\u7D30\u3092\u8868\u793A">
      <div class="rank ${s}">${t.rank}</div>
      <div class="info">
        <div class="title song-title-line"><span class="song-title-text">${a}</span><button class="fav-btn ${o?"is-active":""}" type="button" data-fav-toggle="${m(t.key)}" aria-label="\u304A\u6C17\u306B\u5165\u308A" aria-pressed="${o?"true":"false"}" title="\u304A\u6C17\u306B\u5165\u308A">${b("heart")}</button></div>
        <button class="artist artist-search-btn" type="button" data-artist-search="${m(t.artist)}">${i}</button>
        <div class="song-meta-line">
          <span class="genre-badge">${m(en(t))}</span>
          ${wd(t)}
          ${r.map(l=>`<span class="match-badge">${m(l)}\u4E00\u81F4</span>`).join("")}
        </div>
        ${kd(t)}
      </div>
      <div class="song-row-side">
        <div class="count">${t.count}<small>\u56DE</small></div>
        <div class="last">${n}</div>
      </div>
    </div>
  `}function $d(){let t=d("#setlist-toggle-btn");if(!t)return;let e=u.setlist.items.length;t.setAttribute("aria-expanded",u.setlistExpanded?"true":"false"),t.textContent=u.setlistExpanded?`\u30BB\u30C8\u30EA\u5236\u4F5C\u3092\u9589\u3058\u308B${e?` (${e})`:""}`:`\u30BB\u30C8\u30EA\u5236\u4F5C\u3092\u958B\u304F${e?` (${e})`:""}`}function wd(t){return[...(t.seasonTags||[]).map(s=>({tag:s,type:"season"})),...(t.moodTags||[]).map(s=>({tag:s,type:"mood"})),...u.singerMode?(t.singerTags||[]).map(s=>({tag:s,type:"tag"})):[]].slice(0,u.songsView==="compact"?2:5).map(({tag:s,type:n})=>`
    <button class="tag-badge tag-click" type="button" data-tag-type="${n}" data-tag-search="${m(s)}">${m(s)}</button>
  `).join("")}function kd(t){if(!u.singerMode)return"";let e=`<button class="setlist-add-btn" type="button" data-setlist-action="add" data-songkey="${m(t.key)}">${b("plus")} \u30BB\u30C8\u30EA</button>`;if(!u.data?.stats?.keyPublished)return`<div class="song-key-line song-key-actions">${e}</div>`;let s=String(t.displayKey||"").trim();return s?`
    <div class="song-key-line song-key-actions">
      <button type="button" class="song-key-badge" title="\u7D71\u5408\u96C6\u8A08 T/U\u5217\u306E\u30AD\u30FC">
        <span>\u30AD\u30FC</span><strong>${m(s)}</strong>
      </button>
      ${e}
    </div>
  `:`<div class="song-key-line song-key-actions"><span class="song-key-empty">\u30AD\u30FC\u672A\u767B\u9332</span>${e}</div>`}var ut,Gs,ve,Aa,Pa,Zs,Or,Xs,Wc,jr,ge,Qs,Ws,Ge,Ur=L(()=>{ft();Ne();it();Vs();xa();Yt();dt();Wc=null,jr="kanau-setlist-v1",ge=[],Qs=null,Ws=null,Ge=null});var Qt={};wt(Qt,{adoptExternalPlayer:()=>Ad,closeMusicPlayer:()=>Ba,initMusicPlayer:()=>Td,isMusicBarVisible:()=>Cd,notifyYtReady:()=>xd,pauseMusicPlayer:()=>Ed,playMusicBarVideo:()=>Id,playMusicQueue:()=>_d,playNext:()=>an,playPrev:()=>Jr,releaseMusicPlayerVideo:()=>Zr,restoreExternalPlayer:()=>Oa,setApiLoader:()=>Ld,takeOverMusicPlayerVideo:()=>Xr});function xd(){Gr=!0,Qr.splice(0).forEach(t=>t())}function Ld(t){Ra=t}function Md(t){if(Gr&&window.YT?.Player){t();return}Qr.push(t)}function Td(){if(d("#music-bar"))return;let t=document.createElement("div");t.id="music-bar",t.hidden=!0,t.innerHTML=`
    <div class="mbar-progress-track" id="mbar-progress-track">
      <div class="mbar-progress-fill" id="mbar-progress-fill"></div>
    </div>
    <div class="mbar-body">
      <div class="mbar-track-info">
        <div class="mbar-thumb-wrap">
          <div class="mbar-video-wrap" id="mbar-video-wrap"></div>
          <button class="mbar-thumb-overlay" id="mbar-thumb-overlay" type="button" aria-label="\u52D5\u753B\u3092\u958B\u304F" title="\u52D5\u753B\u3092\u958B\u304F"></button>
        </div>
        <button class="mbar-text" id="mbar-track-info-btn" type="button" title="\u52D5\u753B\u3092\u958B\u304F">
          <span class="mbar-title" id="mbar-title">\u2014</span>
          <span class="mbar-sub"   id="mbar-sub">\u2014</span>
        </button>
        <span class="mbar-type-badge" id="mbar-type-badge"></span>
      </div>
      <div class="mbar-controls">
        <button class="mbar-mode-btn is-on" id="mbar-continuous" type="button" aria-pressed="true" title="\u9023\u7D9A\u518D\u751F">\u221E</button>
        <button class="mbar-ctrl-btn" id="mbar-prev" type="button" aria-label="\u524D\u306E\u66F2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 6h2v12H6zm3.5 6 8.5 6V6z"/>
          </svg>
        </button>
        <button class="mbar-play-btn" id="mbar-play" type="button" data-playing="0" aria-label="\u518D\u751F/\u505C\u6B62"></button>
        <button class="mbar-ctrl-btn" id="mbar-next" type="button" aria-label="\u6B21\u306E\u66F2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 18l8.5-6L6 6v12zM16 6h2v12h-2z"/>
          </svg>
        </button>
        <button class="mbar-mode-btn" id="mbar-repeat" type="button" aria-pressed="false" title="1\u66F2\u30EA\u30D4\u30FC\u30C8">\u21BB</button>
        <button class="mbar-mode-btn${st?" is-on":""}" id="mbar-shuffle" type="button" aria-pressed="${st?"true":"false"}" title="\u30B7\u30E3\u30C3\u30D5\u30EB\u518D\u751F">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10.59 9.17 5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"/>
          </svg>
        </button>
        <button class="mbar-mode-btn${Nt?" is-on":""}" id="mbar-repeat-all" type="button" aria-pressed="${Nt?"true":"false"}" title="\u5168\u4F53\u30EA\u30D4\u30FC\u30C8\uFF08ON: \u6700\u5F8C\u306E\u66F2\u304C\u7D42\u308F\u3063\u305F\u3089\u5148\u982D\u3078\u623B\u308B\uFF09">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/>
          </svg>
        </button>
        <button class="mbar-mode-btn mbar-queue-btn" id="mbar-queue-btn" type="button" title="\u518D\u751F\u30AD\u30E5\u30FC\uFF08\u6B21\u306B\u6D41\u308C\u308B\u66F2\uFF09" aria-label="\u518D\u751F\u30AD\u30E5\u30FC">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z"/>
          </svg>
        </button>
      </div>
      <div class="mbar-end">
        <div class="mbar-volume">
          <button class="vol-btn" id="mbar-vol-btn" type="button" aria-label="\u97F3\u91CF">${b("volume")}</button>
          <input class="vol-slider" id="mbar-vol-slider" type="range" min="0" max="100" value="100" aria-label="\u97F3\u91CF">
        </div>
        <button class="mbar-expand-btn" id="mbar-expand" type="button" title="\u73FE\u5728\u4F4D\u7F6E\u304B\u3089\u52D5\u753B\u30D3\u30E5\u30FC\u30EF\u30FC\u3067\u898B\u308B" aria-label="\u73FE\u5728\u4F4D\u7F6E\u304B\u3089\u52D5\u753B\u30D3\u30E5\u30FC\u30EF\u30FC\u3067\u898B\u308B">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h16v12H4V6zm5.5 3.5 5 3-5 3v-6z"/></svg>
          <span>\u52D5\u753B\u3067\u898B\u308B</span>
        </button>
        <span class="mbar-queue-info" id="mbar-queue-info"></span>
        <button class="mbar-close-btn" id="mbar-close" type="button" aria-label="\u9589\u3058\u308B">${b("close")}</button>
      </div>
    </div>
    <div class="mbar-queue-popup" id="mbar-queue-popup" hidden></div>`,document.body.appendChild(t),d("#mbar-play").addEventListener("click",Pd),d("#mbar-prev").addEventListener("click",Jr),d("#mbar-next").addEventListener("click",an),d("#mbar-continuous").addEventListener("click",Dd),d("#mbar-repeat").addEventListener("click",Hd),d("#mbar-shuffle").addEventListener("click",a=>{st=!st;try{localStorage.setItem("kanaShuffle",st?"1":"0")}catch{}a.currentTarget.setAttribute("aria-pressed",st?"true":"false"),a.currentTarget.classList.toggle("is-on",st)}),d("#mbar-repeat-all").addEventListener("click",Nd),d("#mbar-queue-btn").addEventListener("click",a=>{a.stopPropagation(),Bd()}),d("#mbar-close").addEventListener("click",Ba);let e=d("#mbar-vol-slider"),s=d("#mbar-vol-btn");if(e){let a=Wr();e.value=a,e.style.setProperty("--pct",`${a}%`),s&&(s.innerHTML=nn(a)),e.addEventListener("input",i=>{let r=parseInt(i.target.value);i.target.style.setProperty("--pct",`${r}%`),Sd(r),s&&(s.innerHTML=nn(r));let o=Lt();if(o)try{o.setVolume(r)}catch{}})}if(s){let a=80;s.addEventListener("click",()=>{if(!e)return;let i=parseInt(e.value),r=i>0?0:a||80;i>0&&(a=i),e.value=r,e.style.setProperty("--pct",`${r}%`),s.innerHTML=nn(r);let o=Lt();if(o)try{o.setVolume(r)}catch{}})}let n=()=>{let a=_[E];if(!a?.url)return;let i=0;try{i=Lt()?.getCurrentTime?.()||0}catch{}if(nt?.restore){Oa();return}let r=_.slice(),o=E;if(window.__openMusicQueueInViewer?.(r,o,i))return;Zr({hideBar:!0});let l=a._stream||{url:a.url,title:a.title,isMv:!0};window.__openStreamViewer?.(l,i)};d("#mbar-expand").addEventListener("click",n),d("#mbar-thumb-overlay").addEventListener("click",n),d("#mbar-track-info-btn").addEventListener("click",n),d("#mbar-progress-track").addEventListener("click",a=>{let i=Lt();if(!i)return;let r=a.currentTarget.getBoundingClientRect(),o=Math.max(0,Math.min(1,(a.clientX-r.left)/r.width));try{let l=i.getDuration?.()||0;l>0&&i.seekTo(o*l,!0)}catch{}}),document.addEventListener("keydown",a=>{if(a.key!=="Escape")return;if(ye){a.stopPropagation(),Fa();return}let i=document.getElementById("stream-viewer");i&&!i.hidden||d("#music-bar")?.hidden||Ba()}),document.addEventListener("click",a=>{if(!ye||a.target.closest?.("#mbar-queue-popup, #mbar-queue-btn, .mbar-qp-row"))return;let i=d("#mbar-queue-popup");i&&!i.contains(a.target)&&Fa()})}function _d(t,e=0,s={}){if(t?.length){try{window.__closeStreamMiniPlayer?.()}catch{}if(_=t.slice(),E=Math.max(0,Math.min(e,_.length-1)),s.shuffle!=null){st=!!s.shuffle;try{localStorage.setItem("kanaShuffle",st?"1":"0")}catch{}}qt(E)}}function an(){if(_.length){if(st&&_.length>1){let t=E;for(;t===E;)t=Math.floor(Math.random()*_.length);E=t}else E=(E+1)%_.length;qt(E)}}function Jr(){_.length&&(E=(E-1+_.length)%_.length,qt(E))}function Ba(){let t=d("#music-bar");if(!t)return;if(t.hidden=!0,document.body.classList.remove("has-music-bar"),$e(),nt?.close){let s=nt.close;Je();try{s()}catch{}}if(j){try{j.destroy()}catch{}j=null}_=[],E=-1;let e=d("#mbar-video-wrap");e&&(e.innerHTML="")}function Ed(){let t=Lt();if(t)try{t.pauseVideo()}catch{}}function Zr(t={}){if($e(),nt){let s=nt.close;if(Je(),t.closeExternal!==!1&&s)try{s()}catch{}}if(j){try{j.destroy()}catch{}j=null}let e=d("#mbar-video-wrap");if(e){e.innerHTML="";let s=_[E],n=s?P(s.url):"";n&&(e.innerHTML=`<img src="${m(K(n))}" alt="" style="width:100%;height:100%;object-fit:cover;">`)}if(d("#mbar-play")?.setAttribute("data-playing","0"),t.hideBar){let s=d("#music-bar");s&&(s.hidden=!0),document.body.classList.remove("has-music-bar")}}function Cd(){return!d("#music-bar")?.hidden}function Id(t,e=0){if(!t?.url)return;let s=_.findIndex(n=>n.url===t.url);if(s>=0){E=s,qt(s,e);return}_=[t],E=0,qt(0,e)}function Ad(t,e,s={}){if(!t?.url||!e)return;if($e(),j){try{j.destroy()}catch{}j=null}nt={player:e,restore:s.restore,close:s.close};let n=_.findIndex(a=>a.url===t.url);n>=0?(E=n,_[E]={..._[E],...t}):(_=[t],E=0),to(_[E]),eo(),Va(),ao()}function Xr(t){if(!j||nt)return null;let e=_[E];if(!e?.url||P(e.url)!==P(t))return null;let s=0;try{s=j.getCurrentTime?.()||0}catch{}let n=null;try{n=j.getIframe?.()||null}catch{}let a=j;j=null,$e();let i=d("#music-bar");return i&&(i.hidden=!0),document.body.classList.remove("has-music-bar"),d("#mbar-play")?.setAttribute("data-playing","0"),{player:a,iframe:n,video:e,currentTime:s}}function Oa(){if(!nt?.restore)return!1;let t=nt.restore;Je(),$e();let e=d("#music-bar");e&&(e.hidden=!0),document.body.classList.remove("has-music-bar"),d("#mbar-play")?.setAttribute("data-playing","0");try{t()}catch{}return!0}function qt(t,e=0){let s=_[t];if(!s)return;if(nt?.close){let i=nt.close;Je();try{i()}catch{}}else Je();to(s),eo();let n=P(s.url);if(!n)return;Ra&&Ra();let a=Math.max(0,Math.floor(e));Md(()=>{let i=d("#mbar-video-wrap");if(!i)return;if(j)try{j.loadVideoById({videoId:n,startSeconds:a});return}catch{}i.innerHTML="";let r=document.createElement("div");i.appendChild(r);try{j=new window.YT.Player(r,{videoId:n,width:"100%",height:"100%",playerVars:{autoplay:1,playsinline:1,rel:0,controls:0,disablekb:1,modestbranding:1,...a>1?{start:a}:{}},events:{onReady:o=>{let l=Wr();try{o.target.setVolume(l)}catch{}let c=d("#mbar-vol-slider");c&&(c.value=l,c.style.setProperty("--pct",`${l}%`));let p=d("#mbar-vol-btn");p&&(p.innerHTML=nn(l)),Va()},onStateChange:o=>{let l=o.data===window.YT?.PlayerState?.PLAYING,c=d("#mbar-play");c&&c.setAttribute("data-playing",l?"1":"0"),l&&Va(),o.data===window.YT?.PlayerState?.ENDED&&!be&&(be=!0,so())}}})}catch{}})}function to(t){let e=d("#mbar-title"),s=d("#mbar-sub"),n=d("#mbar-type-badge"),a=d("#mbar-queue-info"),i=d("#mbar-prev"),r=d("#mbar-next");if(e&&(e.textContent=t.title||"\u2014"),s&&(t.sub?s.textContent=t.sub:t.type==="cover"?s.textContent=t.originalArtist||"\u30AB\u30D0\u30FC\u66F2":t.type==="office"?s.textContent="Re:AcT":t.type==="character"?s.textContent=t.character||"\u30AD\u30E3\u30E9\u30BD\u30F3":s.textContent="\u304B\u306A\u3046\u30AA\u30EA\u30B8\u30CA\u30EB"),n){let o={original:"\u30AA\u30EA\u30B8\u30CA\u30EB",office:"Re:AcT",character:"\u30AD\u30E3\u30E9",cover:"\u30AB\u30D0\u30FC",stream:"\u6B4C\u67A0"};n.textContent=o[t.type]||"\u30AA\u30EA\u30B8\u30CA\u30EB",n.dataset.type=t.type}a&&(a.textContent=_.length>1?`${E+1} / ${_.length}`:""),i&&(i.disabled=_.length<=1),r&&(r.disabled=_.length<=1),rn(),ye&&no()}function eo(){let t=d("#music-bar");t&&(t.hidden=!1,document.body.classList.add("has-music-bar"))}function Pd(){let t=Lt();if(!t){E>=0&&_.length&&qt(E);return}try{t.getPlayerState?.()===window.YT?.PlayerState?.PLAYING?t.pauseVideo():t.playVideo()}catch{}}function Va(){$e(),be=!1,sn=setInterval(()=>{let t=Lt();if(t)try{let e=t.getDuration?.()||0,s=t.getCurrentTime?.()||0,n=e>0?Math.min(s/e*100,100):0,a=d("#mbar-progress-fill");a&&(a.style.width=`${n}%`),ao();let i=t.getPlayerState?.();i===window.YT?.PlayerState?.ENDED?(be||so(),be=!0):i===window.YT?.PlayerState?.PLAYING&&(be=!1)}catch{}},500)}function $e(){sn&&(clearInterval(sn),sn=null)}function Lt(){return nt?.player||j}function Je(){nt=null}function so(){let t=Lt();if(We&&t){try{t.seekTo(0,!0),t.playVideo()}catch{}return}if(st&&_.length>1){an();return}let e=E>=_.length-1;Qe&&_.length>1?e?Nt?(E=0,qt(E)):d("#mbar-play")?.setAttribute("data-playing","0"):an():d("#mbar-play")?.setAttribute("data-playing","0")}function Dd(){Qe=!Qe,rn()}function Hd(){We=!We,rn()}function Nd(){Nt=!Nt;try{localStorage.setItem("kanaRepeatAll",Nt?"1":"0")}catch{}rn()}function rn(){let t=d("#mbar-continuous");t&&(t.classList.toggle("is-on",Qe),t.setAttribute("aria-pressed",Qe?"true":"false"));let e=d("#mbar-repeat");e&&(e.classList.toggle("is-on",We),e.setAttribute("aria-pressed",We?"true":"false"));let s=d("#mbar-repeat-all");s&&(s.classList.toggle("is-on",Nt),s.setAttribute("aria-pressed",Nt?"true":"false"));let n=d("#mbar-shuffle");n&&(n.classList.toggle("is-on",st),n.setAttribute("aria-pressed",st?"true":"false"))}function qd(t){return{original:"\u30AA\u30EA\u30B8\u30CA\u30EB",office:"Re:AcT",character:"\u30AD\u30E3\u30E9",cover:"\u30AB\u30D0\u30FC",stream:"\u6B4C\u67A0"}[t]||"\u30AA\u30EA\u30B8\u30CA\u30EB"}function no(){let t=d("#mbar-queue-popup");if(!t)return;if(!_.length){t.innerHTML='<div class="mbar-qp-empty">\u30AD\u30E5\u30FC\u306F\u7A7A\u3067\u3059</div>';return}t.innerHTML=_.map((s,n)=>{let a=n===E,i=qd(s.type);return`<button class="mbar-qp-row${a?" is-current":""}" type="button" data-qp-idx="${n}">
      <span class="mbar-qp-num">${n+1}</span>
      <span class="mbar-qp-title">${m(s.title||"\u2014")}</span>
      <span class="mbar-qp-badge" data-type="${m(s.type||"")}">${m(i)}</span>
    </button>`}).join("");let e=t.querySelector(".is-current");e&&requestAnimationFrame(()=>{e.scrollIntoView({block:"nearest",behavior:"smooth"})})}function Rd(){let t=d("#mbar-queue-popup");if(!t)return;ye=!0,t.hidden=!1,t.onclick=s=>{let n=s.target.closest("[data-qp-idx]");if(!n)return;let a=parseInt(n.dataset.qpIdx,10);isNaN(a)||(E=a,qt(a))},no();let e=d("#mbar-queue-btn");e&&e.classList.add("is-on")}function Fa(){let t=d("#mbar-queue-popup");t&&(t.hidden=!0),ye=!1;let e=d("#mbar-queue-btn");e&&e.classList.remove("is-on")}function Bd(){ye?Fa():Rd()}function ao(){let t=Lt(),e=d("#mbar-play");if(!(!t||!e))try{let s=t.getPlayerState?.();e.setAttribute("data-playing",s===window.YT?.PlayerState?.PLAYING?"1":"0")}catch{}}var _,E,j,nt,sn,Qe,We,Nt,be,st,ye,Gr,Qr,Ra,Wr,Sd,nn,Wt=L(()=>{it();dt();_=[],E=-1,j=null,nt=null,sn=null,Qe=!0,We=!1,Nt=localStorage.getItem("kanaRepeatAll")==="1",be=!1,st=localStorage.getItem("kanaShuffle")==="1",ye=!1,Gr=!1,Qr=[],Ra=null,Wr=()=>Math.max(0,Math.min(100,parseInt(localStorage.getItem("kanaVol")??"100")||100)),Sd=t=>localStorage.setItem("kanaVol",String(t)),nn=()=>b("volume");window.__takeOverMusicPlayerVideo=Xr;window.__restoreMusicExternalPlayer=Oa});var es={};wt(es,{addStreamToPlaylist:()=>po,createPlaylist:()=>Wa,deletePlaylist:()=>uo,getMusicVideos:()=>Xd,getPlaylists:()=>F,isStreamInAnyPlaylist:()=>Zt,removeStreamFromPlaylist:()=>mo,renderPlaylists:()=>Mt,resolveMusicVideoId:()=>ts,showAddToPlaylistModal:()=>Qa});function F(){try{return JSON.parse(localStorage.getItem(lo)||"[]")}catch{return[]}}function Bt(t){try{localStorage.setItem(lo,JSON.stringify(t))}catch{}}function Wa(t){let e=F(),s={id:String(Date.now()),name:t.trim(),createdAt:new Date().toISOString(),streams:[]};return e.unshift(s),Bt(e),s}function uo(t){Bt(F().filter(e=>e.id!==t))}function po(t,e){let s=F(),n=s.find(a=>a.id===t);return!n||n.streams.includes(e)?!1:(n.streams.push(e),Bt(s),!0)}function mo(t,e){let s=F(),n=s.find(a=>a.id===t);n&&(n.streams=n.streams.filter(a=>a!==e),Bt(s))}function Zt(t){return F().some(e=>e.streams.includes(t))}function Mt(){let t=d("#panel-playlists");if(!t)return;let e=u.data?.streams||[];if(U==="my-playlists"&&q===null){let a=un();a.length?q=a:vo().then(i=>{q===null&&(q=Array.isArray(i)?i:[]),U==="my-playlists"&&Mt()})}let s=document.activeElement?.id==="pl-music-search",n=null;if(s){try{n=document.activeElement.selectionStart}catch{}Xe=document.activeElement.value||""}if(t.innerHTML=`
    <nav class="panel-topnav" aria-label="\u30DA\u30FC\u30B8\u30CA\u30D3\u30B2\u30FC\u30B7\u30E7\u30F3">
      <button class="panel-topnav-btn" type="button" data-nav-tab="dashboard"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 13h5v7H4z"/><path d="M10 4h5v16h-5z"/><path d="M16 9h4v11h-4z"/></svg>\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9</button>
      <button class="panel-topnav-btn" type="button" data-nav-tab="ranking"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 4h8v3a4 4 0 0 1-8 0z"/><path d="M6 5H3v2a4 4 0 0 0 4 4"/><path d="M18 5h3v2a4 4 0 0 1-4 4"/><path d="M12 11v5"/><path d="M8 20h8"/><path d="M9 16h6v4H9z"/></svg>\u30E9\u30F3\u30AD\u30F3\u30B0</button>
      <button class="panel-topnav-btn" type="button" data-nav-tab="songs"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18V5l10-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="16" cy="16" r="3"/></svg>\u5168\u66F2\u30EA\u30B9\u30C8</button>
      <button class="panel-topnav-btn" type="button" data-nav-tab="timeline"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3v4"/><path d="M17 3v4"/><path d="M4 8h16"/><rect x="4" y="5" width="16" height="16" rx="3"/><path d="M8 13h3"/><path d="M13 13h3"/><path d="M8 17h3"/></svg>\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3</button>
      <button class="panel-topnav-btn" type="button" data-nav-tab="analytics"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19V5"/><path d="M4 19h16"/><path d="M7 15l3-4 4 2 5-7"/><circle cx="7" cy="15" r="1"/><circle cx="10" cy="11" r="1"/><circle cx="14" cy="13" r="1"/><circle cx="19" cy="6" r="1"/></svg>\u30A2\u30CA\u30EA\u30C6\u30A3\u30AF\u30B9</button>
      <button class="panel-topnav-btn active" type="button" data-nav-tab="playlists"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 6h10"/><path d="M5 11h10"/><path d="M5 16h7"/><path d="M18 8v10l3-2 3 2V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1z"/></svg>\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8</button>
    </nav>
    <div class="pl-wrap">
      <nav class="pl-subtabs" role="tablist" aria-label="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u30B5\u30D6\u30BF\u30D6">
        <button class="pl-subtab${U==="all-streams"?" active":""}"
          data-pl-subtab="all-streams"  role="tab"
          aria-selected="${U==="all-streams"}">\u6B4C\u67A0\u4E00\u89A7</button>
        <button class="pl-subtab${U==="music"?" active":""}"
          data-pl-subtab="music" role="tab"
          aria-selected="${U==="music"}">\u6B4C\u307F\u305F\u30FB\u30AA\u30EA\u66F2</button>
        <button class="pl-subtab${U==="my-playlists"?" active":""}"
          data-pl-subtab="my-playlists" role="tab"
          aria-selected="${U==="my-playlists"}">
          \u30DE\u30A4\u30EA\u30B9\u30C8
          <span class="pl-subtab-count">${F().length}</span>
        </button>
      </nav>
      <div class="pl-subtab-body" id="pl-subtab-body">
        ${U==="all-streams"?ho(e,Ze):U==="music"?Od():eu(e)}
      </div>
    </div>
  `,U==="music"&&jd(),s){let a=d("#pl-music-search");if(a&&(a.focus(),n!==null))try{a.setSelectionRange(n,n)}catch{}}t.onclick=a=>{let i=a.target.closest("[data-nav-tab]");if(i){document.querySelector(`[data-tab="${i.dataset.navTab}"]`)?.click();return}let r=a.target.closest("[data-pl-subtab]");if(r){U=r.dataset.plSubtab,U==="all-streams"&&(Ze=1),Mt();return}let o=a.target.closest("[data-pl-sort]");if(o){Ga=o.dataset.plSort,Ze=1,io(e);return}let l=a.target.closest("[data-pl-page]");if(l&&!l.disabled){Ze=Number(l.dataset.plPage),io(e);return}let c=a.target.closest("[data-music-view]:not([data-music-select-toggle])");if(c){Rt=c.dataset.musicView,ln();return}if(a.target.closest("[data-music-select-toggle]")){Jt=!Jt,Jt||rt.clear(),Ka();return}let p=a.target.closest("[data-mv-select]");if(p){let f=p.dataset.mvSelect,g=!rt.has(f);g?rt.add(f):rt.delete(f);let y=p.classList.contains("mv-list-row")?p:p.closest(".mv-card");y&&y.classList.toggle("is-selected",g);let $=y?.querySelector(".mv-card-checkbox, .mv-list-checkbox");$&&($.innerHTML=g?b("check"):""),p.setAttribute("aria-pressed",String(g)),Kd();return}if(a.target.closest("[data-music-select-all]")){pn(q||[]).forEach(({v:f})=>rt.add(f.id)),Ka();return}if(a.target.closest("[data-music-select-clear]")){rt.clear(),Ka();return}if(a.target.closest("[data-music-select-add]")){if(!rt.size)return;let f=[...q||[]].filter(g=>rt.has(g.id)).map(g=>"mv:"+g.id);Qa(f);return}let h=a.target.closest("[data-playlist-add-mv]");if(h){let f=h.dataset.playlistAddMv,g=h.dataset.streamTitle||"";Qa("mv:"+f,g);return}let v=a.target.closest("[data-mv-watch]");if(v&&q?.length){if(a.metaKey||a.ctrlKey||a.shiftKey||a.button===1)return;a.preventDefault();let f=q[Number(v.dataset.mvWatch)];f?.url&&window.__openStreamViewer?.({url:f.url,title:f.title,isMv:!0});return}U==="my-playlists"&&nu(a,e)},t.oninput=a=>{let i=a.target.closest("#pl-music-search");i&&(Xe=i.value||"",clearTimeout(Ya),Ya=setTimeout(ln,100))},t.oncompositionend=a=>{let i=a.target.closest("#pl-music-search");i&&(Xe=i.value||"",clearTimeout(Ya),ln())},t.addEventListener("error",a=>{let i=a.target;if(!i.classList.contains("pl-sg-thumb"))return;let r=i.dataset.fallback;r&&i.src!==r&&(i.src=r,delete i.dataset.fallback)},!0),ru()}function Fd(t,e){let s=t.slice();return e==="oldest"?s.reverse():e==="most-songs"?s.sort((n,a)=>(a.songs?.length??0)-(n.songs?.length??0)):e==="fewest-songs"?s.sort((n,a)=>(n.songs?.length??0)-(a.songs?.length??0)):s}function ho(t,e){if(!t.length)return`
      <div class="pl-empty-state">
        <p>\u914D\u4FE1\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059\u2026</p>
        <p class="pl-empty-hint">\u5148\u306B\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u30BF\u30D6\u3092\u958B\u304F\u3068\u3059\u3050\u306B\u8868\u793A\u3055\u308C\u307E\u3059</p>
      </div>`;let s=Fd(t,Ga),n=s.length,a=Math.max(1,Math.ceil(n/ja)),i=Math.min(Math.max(1,e),a),r=(i-1)*ja,l=s.slice(r,r+ja).map(h=>{let v=z(h),f=K(h.url),g=le(h.url),y=h.songs?.length??0;return`
      <button class="pl-sg-card" type="button" data-stream-play="${m(v)}"
        title="${m(h.title||"\u914D\u4FE1")}">
        <div class="pl-sg-thumb-wrap">
          ${f?`<img class="pl-sg-thumb" src="${m(f)}"
                data-fallback="${m(g)}"
                alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="pl-sg-thumb-placeholder"></div>'}
          <span class="pl-sg-song-badge">${y}<span class="pl-sg-badge-unit">\u66F2</span></span>
          <span class="pl-sg-add${Zt(v)?" is-saved":""}" role="button" tabindex="0"
            aria-label="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0"
            data-playlist-add="${m(v)}" data-stream-title="${m(h.title||"\u914D\u4FE1")}"
            title="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0">${Xa}</span>
        </div>
        <div class="pl-sg-info">
          <span class="pl-sg-title">${m(h.title||"\u914D\u4FE1")}</span>
          <span class="pl-sg-date">${m(T(h.date)||"")}</span>
        </div>
      </button>`}).join(""),c=a>1?`
    <div class="pl-pagination">
      <button class="pl-page-btn" data-pl-page="${i-1}"
        ${i<=1?"disabled":""} type="button" aria-label="\u524D\u306E\u30DA\u30FC\u30B8">\u524D\u3078</button>
      <span class="pl-page-info">${i} / ${a}</span>
      <button class="pl-page-btn" data-pl-page="${i+1}"
        ${i>=a?"disabled":""} type="button" aria-label="\u6B21\u306E\u30DA\u30FC\u30B8">\u6B21\u3078</button>
    </div>`:"";return`${`
    <div class="pl-sort-bar">
      ${Vd.map(h=>`
        <button class="pl-sort-opt${Ga===h.key?" active":""}"
          data-pl-sort="${h.key}" type="button">${h.label}</button>`).join("")}
    </div>`}<div class="pl-stream-grid" id="pl-stream-grid">${l}</div>${c}`}function io(t){let e=d("#pl-subtab-body");if(!e){Mt();return}e.innerHTML=ho(t,Ze);let s=d("#panel-playlists");s&&s.addEventListener("error",n=>{let a=n.target;if(!a.classList.contains("pl-sg-thumb"))return;let i=a.dataset.fallback;i&&a.src!==i&&(a.src=i,delete a.dataset.fallback)},{once:!0,capture:!0}),e.scrollIntoView({behavior:"smooth",block:"start"})}function Od(){if(q===null){let t=un();t.length&&(q=t)}return Ja(q||[])}async function jd(){if(q!==null){za();return}q=un(),cn=!0,za();let t=await vo();cn=!1,q=Array.isArray(t)?t:[],za()}function za(){if(U!=="music")return;let t=d("#pl-subtab-body");t&&(d("#pl-music-search")?ln():t.innerHTML=Ja(q||[]))}function Ja(t){return Yd(t)+`<div id="pl-music-results">${fo(t)}</div>`}function Yd(t){let e=Za(),n=pn(t).length;return`
    <div class="pl-music-viewbar">
      <label class="pl-music-search-wrap">
        <span class="pl-music-search-icon" aria-hidden="true">\u2315</span>
        <input id="pl-music-search" class="pl-music-search" type="search"
          value="${m(e)}"
          placeholder="\u66F2\u540D / \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u3067\u691C\u7D22"
          aria-label="\u6B4C\u307F\u305F\u30FB\u30AA\u30EA\u66F2\u3092\u691C\u7D22">
      </label>
      <span class="pl-music-count">${n}${n===t.length?"":` / ${t.length}`}\u4EF6</span>
      <div class="pl-music-views">
        <button class="pl-music-view-btn${Rt==="grid"?" active":""}" data-music-view="grid"     type="button">\u30B0\u30EA\u30C3\u30C9</button>
        <button class="pl-music-view-btn${Rt==="list"?" active":""}" data-music-view="list"     type="button">\u30EA\u30B9\u30C8</button>
        <button class="pl-music-view-btn${Rt==="category"?" active":""}" data-music-view="category" type="button">\u30AB\u30C6\u30B4\u30EA</button>
        <button class="pl-music-view-btn pl-music-select-toggle${Jt?" active":""}" data-music-select-toggle="1" type="button" ${n?"":"disabled"} title="\u8907\u6570\u9078\u629E\u3057\u3066\u307E\u3068\u3081\u3066\u8FFD\u52A0">\u2611 \u9078\u629E</button>
      </div>
    </div>
    ${Jt?zd():""}`}function zd(){let t=rt.size;return`
    <div class="pl-music-selbar">
      <span class="pl-music-selcount" id="pl-music-selcount">${t}\u66F2\u3092\u9078\u629E\u4E2D</span>
      <div class="pl-music-selactions">
        <button class="pl-sel-btn" data-music-select-all="1" type="button">\u8868\u793A\u4E2D\u3092\u3059\u3079\u3066\u9078\u629E</button>
        <button class="pl-sel-btn" data-music-select-clear="1" type="button" ${t?"":"disabled"}>\u9078\u629E\u89E3\u9664</button>
        <button class="pl-sel-btn primary" data-music-select-add="1" type="button" ${t?"":"disabled"}>${b("plus")} ${t}\u66F2\u3092\u307E\u3068\u3081\u3066\u8FFD\u52A0</button>
        <button class="pl-sel-btn" data-music-select-toggle="1" type="button">\u5B8C\u4E86</button>
      </div>
    </div>`}function fo(t){let e=pn(t);return cn&&!t.length?'<div class="pl-empty-state"><p>\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</p><p class="pl-empty-hint">\u691C\u7D22\u6B04\u306F\u3053\u306E\u307E\u307E\u5165\u529B\u3067\u304D\u307E\u3059</p></div>':t.length?e.length?Rt==="grid"?ro(e):Rt==="list"?Jd(e):Rt==="category"?Zd(e):ro(e):cn?`<div class="pl-empty-state"><p>\u6700\u65B0\u30C7\u30FC\u30BF\u3092\u78BA\u8A8D\u4E2D\u2026</p><p class="pl-empty-hint">\u300C${m(Za())}\u300D\u306E\u5019\u88DC\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059</p></div>`:'<div class="pl-empty-state"><p>\u4E00\u81F4\u3059\u308B\u52D5\u753B\u304C\u3042\u308A\u307E\u305B\u3093</p><p class="pl-empty-hint">\u300C\u66F2\u540D / \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u300D\u306E\u3088\u3046\u306B\u533A\u5207\u3063\u3066\u691C\u7D22\u3067\u304D\u307E\u3059</p></div>':'<div class="pl-empty-state"><p>\u52D5\u753B\u304C\u767B\u9332\u3055\u308C\u3066\u3044\u307E\u305B\u3093</p><p class="pl-empty-hint">\u7BA1\u7406\u753B\u9762\u304B\u3089\u767B\u9332\u3067\u304D\u307E\u3059</p></div>'}function Za(){let t=d("#pl-music-search");return t&&(Xe=t.value||""),Xe}function Ka(){let t=d("#pl-subtab-body");t&&(t.innerHTML=Ja(q||[]))}function Kd(){let t=rt.size,e=d("#pl-music-selcount");e&&(e.textContent=`${t}\u66F2\u3092\u9078\u629E\u4E2D`);let s=document.querySelector("[data-music-select-add]");s&&(s.disabled=!t,s.innerHTML=`${b("plus")} ${t}\u66F2\u3092\u307E\u3068\u3081\u3066\u8FFD\u52A0`);let n=document.querySelector("[data-music-select-clear]");n&&(n.disabled=!t)}function ln(){let t=q||[],e=d(".pl-music-count");if(e){let n=pn(t).length;e.textContent=`${n}${n===t.length?"":` / ${t.length}`}\u4EF6`}document.querySelectorAll("[data-music-view]").forEach(n=>{n.classList.toggle("active",n.dataset.musicView===Rt)});let s=d("#pl-music-results");s&&(s.innerHTML=fo(t))}function un(){try{let t=JSON.parse(localStorage.getItem(co)||"null");return Array.isArray(t?.videos)?t.videos:[]}catch{return[]}}function Ud(t){try{localStorage.setItem(co,JSON.stringify({videos:t,cachedAt:Date.now()}))}catch{}}async function vo(){return on||(on=fetch("/data/music.json",{cache:"no-store"}).then(t=>t.ok?t.json():Promise.reject(new Error(`music.json ${t.status}`))).then(t=>{let e=Array.isArray(t?.videos)?t.videos:[];return Ud(e),e}).catch(()=>q||un()),on)}function go(t){return String(t||"").normalize("NFKC").toLowerCase().replace(/[！-～]/g,e=>String.fromCharCode(e.charCodeAt(0)-65248)).replace(/[‐-‒–—―ー]/g,"-").replace(/\s+/g," ").trim()}function Gd(t){return go(t).split(/[\/／|｜\s]+/).map(e=>e.trim()).filter(Boolean)}function Qd(t){let e=t.title||"",s=e.split(/[\/／|｜]/).map(a=>a.trim()).filter(Boolean),n=mn(t).label;return go([e,...s,t.originalArtist,t.character,t.type,n].filter(Boolean).join(" "))}function pn(t){let e=Gd(Za()),s=t.map((n,a)=>({v:n,i:a}));return e.length?s.filter(({v:n})=>{let a=Qd(n);return e.every(i=>a.includes(i))}):s}function mn(t){switch(t.type){case"cover":return{label:"\u30AB\u30D0\u30FC",cls:"mv-badge-cover",sub:t.originalArtist||"\u30AB\u30D0\u30FC\u66F2"};case"office":return{label:"Re:AcT",cls:"mv-badge-office",sub:"Re:AcT"};case"character":return{label:"\u30AD\u30E3\u30E9",cls:"mv-badge-character",sub:t.character||"\u30AD\u30E3\u30E9\u30BD\u30F3"};default:return{label:"\u30AA\u30EA\u30B8\u30CA\u30EB",cls:"mv-badge-original",sub:"\u304B\u306A\u3046"}}}function dn(t){return t.publishedAt?String(t.publishedAt).replaceAll("-","/"):"\u516C\u958B\u65E5\u672A\u767B\u9332"}function bo(t,e){let s=K(t.url),n=le(t.url),{label:a,cls:i}=mn(t),r=Zt("mv:"+t.id);if(Jt){let o=rt.has(t.id);return`
    <div class="mv-card mv-card--select${o?" is-selected":""}">
      <button class="mv-card-thumb-btn" type="button" data-mv-select="${m(t.id)}" aria-pressed="${o}">
        ${s?`<img class="mv-card-thumb" src="${m(s)}" data-fallback="${m(n)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="mv-card-thumb mv-card-thumb-placeholder"></div>'}
        <span class="mv-card-checkbox">${o?b("check"):""}</span>
        <span class="mv-type-badge ${i}">${a}</span>
      </button>
      <div class="mv-card-info">
        <span class="mv-card-title">${m(t.title||"\u2014")}</span>
        <span class="mv-card-sub">${m(dn(t))}</span>
      </div>
    </div>`}return`
    <div class="mv-card">
      <a class="mv-card-thumb-btn" href="${m(t.url||"#")}" target="_blank" rel="noopener"
        data-mv-watch="${e}" aria-label="\u52D5\u753B\u30D3\u30E5\u30FC\u30EF\u30FC\u3067\u898B\u308B">
        ${s?`<img class="mv-card-thumb" src="${m(s)}" data-fallback="${m(n)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="mv-card-thumb mv-card-thumb-placeholder"></div>'}
        <span class="mv-card-play-icon">${b("play")}</span>
        <span class="mv-type-badge ${i}">${a}</span>
      </a>
      <button class="pl-sg-add mv-add-btn mv-add-btn--overlay${r?" is-saved":""}" type="button"
        data-playlist-add-mv="${m(t.id)}"
        data-stream-title="${m(t.title||"")}"
        aria-label="${r?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0"}"
        title="${r?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0"}">${Xa}</button>
      <div class="mv-card-info">
        <span class="mv-card-title">${m(t.title||"\u2014")}</span>
        <span class="mv-card-sub">${m(dn(t))}</span>
      </div>
    </div>`}function Wd(t,e){let s=K(t.url),n=le(t.url),{label:a,cls:i,sub:r}=mn(t),o=Zt("mv:"+t.id);if(Jt){let l=rt.has(t.id);return`
    <div class="mv-list-row mv-list-row--select${l?" is-selected":""}" data-mv-select="${m(t.id)}" role="button" aria-pressed="${l}">
      <span class="mv-list-checkbox">${l?b("check"):""}</span>
      <span class="mv-list-thumb">
        ${s?`<img src="${m(s)}" data-fallback="${m(n)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:""}
      </span>
      <div class="mv-list-info">
        <span class="mv-list-title">${m(t.title||"\u2014")}</span>
        <span class="mv-list-sub">${m(dn(t))}</span>
      </div>
      <span class="mv-type-badge ${i}">${a}</span>
    </div>`}return`
    <div class="mv-list-row">
      <a class="mv-list-thumb" href="${m(t.url||"#")}" target="_blank" rel="noopener" aria-label="YouTube\u3067\u958B\u304F">
        ${s?`<img src="${m(s)}" data-fallback="${m(n)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:""}
      </a>
      <div class="mv-list-info">
        <span class="mv-list-title">${m(t.title||"\u2014")}</span>
        <span class="mv-list-sub">${m(dn(t))}</span>
      </div>
      <span class="mv-type-badge ${i}">${a}</span>
      <button class="mv-add-btn${o?" is-saved":""}" type="button"
        data-playlist-add-mv="${m(t.id)}"
        data-stream-title="${m(t.title||"")}"
        title="${o?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0"}">${b("bookmark")}</button>
    </div>`}function ro(t){return`<div class="mv-grid">${t.map(({v:e,i:s})=>bo(e,s)).join("")}</div>`}function Jd(t){return`<div class="mv-list">${t.map(({v:e,i:s})=>Wd(e,s)).join("")}</div>`}function Zd(t){return`
    <div class="mv-category">
      ${[{key:"original",label:"\u30AA\u30EA\u30B8\u30CA\u30EB\u66F2\uFF08\u500B\u4EBA\uFF09"},{key:"office",label:"Re:AcT \u30AA\u30EA\u66F2"},{key:"character",label:"\u30AD\u30E3\u30E9\u30BD\u30F3 / \u58F0\u512A\u30AA\u30EA\u66F2"},{key:"cover",label:"\u30AB\u30D0\u30FC\u66F2\uFF08\u6B4C\u307F\u305F\uFF09"}].map(({key:s,label:n})=>({label:n,items:t.filter(({v:a})=>a.type===s)})).filter(({items:s})=>s.length>0).map(({label:s,items:n})=>`
      <div class="mv-cat-section">
        <h3 class="mv-cat-heading">${s} <span class="mv-cat-count">${n.length}</span></h3>
        <div class="mv-grid">${n.map(({v:a,i})=>bo(a,i)).join("")}</div>
      </div>`).join("")}
    </div>`}function Xd(){return q||[]}function ts(t){if(!t?.startsWith("mv:"))return null;let e=t.slice(3);return(q||[]).find(s=>s.id===e)||null}function yo(t,e){return(t.streams||[]).map(s=>{if(s.startsWith("mv:")){let a=ts(s);return a?.url?P(a.url):""}let n=e.find(a=>z(a)===s);return n?.url?P(n.url):""}).filter(Boolean)}function tu(t){if(!t.length){alert("YouTube\u3067\u518D\u751F\u3067\u304D\u308B\u52D5\u753B\u304C\u3042\u308A\u307E\u305B\u3093");return}let e;if(t.length===1)e=`https://www.youtube.com/watch?v=${t[0]}`;else{let s=t.slice(0,50);t.length>50&&alert(`\u52D5\u753B\u304C${t.length}\u672C\u3042\u308A\u307E\u3059\u3002\u5148\u982D50\u672C\u3067\u9023\u7D9A\u518D\u751F\u3057\u307E\u3059\u3002`),e=`https://www.youtube.com/watch_videos?video_ids=${s.join(",")}`}window.open(e,"_blank","noopener noreferrer")}function eu(t){let e=F();return e.length?`
    <div class="pl-my-actions">
      <span class="pl-my-count">${e.length}\u4EF6\u306E\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8</span>
      <button class="pl-new-btn" id="pl-new-btn" type="button">${b("plus")} \u65B0\u898F\u4F5C\u6210</button>
    </div>
    <div class="pl-grid">
      ${e.map(s=>su(s,t)).join("")}
    </div>`:`
      <div class="pl-empty-state">
        <p>\u307E\u3060\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u304C\u3042\u308A\u307E\u305B\u3093</p>
        <p class="pl-empty-hint">\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u306E\u914D\u4FE1\u67A0\u304B\u3089 <strong>\u681E\u30DC\u30BF\u30F3</strong> \u3092\u62BC\u3057\u3066\u8FFD\u52A0\u3067\u304D\u307E\u3059</p>
      </div>
      <div class="pl-my-actions">
        <button class="pl-new-btn" id="pl-new-btn" type="button">${b("plus")} \u65B0\u898F\u4F5C\u6210</button>
      </div>`}function su(t,e){let s=t.streams.map(l=>{let c=l.startsWith("mv:"),p=c?ts(l):null;return{skey:l,isMv:c,mv:p,stream:c?null:e.find(h=>z(h)===l)}}),n=s.find(({stream:l,mv:c})=>l?.url||c?.url)?.stream?.url||s.find(({mv:l})=>l?.url)?.mv?.url,a=n?`<img class="pl-card-cover" src="${m(K(n))}" alt="" loading="lazy" referrerpolicy="no-referrer">`:"",i=s.length,r=s.map(({skey:l,isMv:c,mv:p,stream:h})=>{let v=m(t.id+"|:|"+l),f='<span class="pl-drag-handle" aria-hidden="true" title="\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u4E26\u3073\u66FF\u3048">\u283F</span>',g=`<button class="pl-rm-btn" data-pl-rm-stream="${v}" type="button" title="\u524A\u9664">${b("close")}</button>`;if(c){if(!p)return`
        <div class="pl-stream-row pl-stream-missing" data-pl-skey="${m(l)}" data-pl-id="${m(t.id)}">${f}
          <div class="pl-stream-info"><span class="pl-stream-title">\uFF08\u52D5\u753B\u30C7\u30FC\u30BF\u306A\u3057\uFF09</span></div>
          <div class="pl-stream-actions">${g}</div>
        </div>`;let{label:y,sub:$}=mn(p),w=p.type||"original",C=(q||[]).indexOf(p);return`
        <div class="pl-stream-row" data-pl-skey="${m(l)}" data-pl-id="${m(t.id)}">
          ${f}
          <div class="pl-stream-info">
            <span class="pl-stream-date"><span class="mv-badge-inline mv-type-${w}">${y}</span></span>
            <span class="pl-stream-title">${m(p.title||"\u2014")}</span>
            <span class="pl-stream-meta">${m($)}</span>
          </div>
          <div class="pl-stream-actions">
            ${C>=0?`<button class="pl-play-stream-btn" data-play-music-pl="${C}" type="button" title="\u518D\u751F">${b("play")}</button>`:""}
            ${g}
          </div>
        </div>`}return h?`
      <div class="pl-stream-row" data-pl-skey="${m(l)}" data-pl-id="${m(t.id)}">
        ${f}
        <div class="pl-stream-info">
          <span class="pl-stream-date">${T(h.date)}</span>
          <span class="pl-stream-title">${m(h.title||"\u914D\u4FE1")}</span>
          <span class="pl-stream-meta">\u7B2C${h.index}\u67A0 \xB7 ${h.songs?.length??0}\u66F2</span>
        </div>
        <div class="pl-stream-actions">
          ${h.url?`<button class="pl-play-stream-btn" data-pl-play-stream="${m(l)}"
                type="button" title="\u518D\u751F">${b("play")}</button>`:""}
          ${g}
        </div>
      </div>`:`
      <div class="pl-stream-row pl-stream-missing" data-pl-skey="${m(l)}" data-pl-id="${m(t.id)}">${f}
        <div class="pl-stream-info"><span class="pl-stream-title">\uFF08\u914D\u4FE1\u30C7\u30FC\u30BF\u306A\u3057\uFF09</span></div>
        <div class="pl-stream-actions">${g}</div>
      </div>`}).join(""),o=yo(t,e);return`
    <div class="pl-card">
      <div class="pl-card-head">
        ${a?`<div class="pl-card-cover-wrap">${a}</div>`:""}
        <div class="pl-card-head-info">
          <button class="pl-card-name" data-pl-rename="${m(t.id)}"
            type="button" title="\u30AF\u30EA\u30C3\u30AF\u3067\u540D\u524D\u5909\u66F4">${m(t.name)}</button>
          <span class="pl-card-count">${t.streams.length}\u4EF6</span>
        </div>
        <button class="pl-del-btn" data-pl-del="${m(t.id)}"
          type="button" title="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3092\u524A\u9664">\u{1F5D1}</button>
      </div>
      <div class="pl-stream-list">
        ${r||'<div class="pl-stream-empty">\u914D\u4FE1\u304C\u8FFD\u52A0\u3055\u308C\u3066\u3044\u307E\u305B\u3093</div>'}
      </div>
      ${o.length||t.streams.length?`
      <div class="pl-card-footer">
        ${o.length?`
        <button class="pl-yt-share-btn" data-pl-yt-share="${m(t.id)}"
          type="button" title="YouTube\u3067\u9023\u7D9A\u518D\u751F\uFF08\u4E00\u6642\u7684\u306A\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3068\u3057\u3066\u958B\u304D\u307E\u3059\uFF09">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z"/></svg>
          YouTube\u3067\u9023\u7D9A\u518D\u751F (${o.length}\u672C)
        </button>`:""}
        ${t.streams.length?`
        <button class="pl-yt-share-btn" data-pl-share="${m(t.id)}"
          type="button" title="\u3053\u306E\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306E\u5171\u6709\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC">${b("link")} \u30EA\u30F3\u30AF\u3092\u5171\u6709</button>`:""}
      </div>`:""}
    </div>`}function nu(t,e){if(t.target.closest("#pl-new-btn")){au();return}let s=t.target.closest("[data-pl-share]");if(s){let c=F().find(g=>g.id===s.dataset.plShare);if(!c)return;let p=JSON.stringify({n:c.name,s:c.streams}),h=btoa(String.fromCharCode(...new TextEncoder().encode(p))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,""),v=`${location.origin}${location.pathname}?pl=${h}`,f=g=>{s.innerHTML=g?`${b("check")} \u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F`:"\u30B3\u30D4\u30FC\u3067\u304D\u307E\u305B\u3093",setTimeout(()=>{s.innerHTML=`${b("link")} \u30EA\u30F3\u30AF\u3092\u5171\u6709`},1600)};navigator.clipboard?.writeText(v).then(()=>f(!0)).catch(()=>{try{let g=document.createElement("textarea");g.value=v,g.style.cssText="position:fixed;opacity:0;",document.body.appendChild(g),g.select();let y=document.execCommand("copy");g.remove(),f(y)}catch{f(!1)}});return}let n=t.target.closest("[data-pl-del]");if(n){let c=n.dataset.plDel,p=F().find(h=>h.id===c);p&&confirm(`\u300C${p.name}\u300D\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F`)&&(uo(c),Mt());return}let a=t.target.closest("[data-pl-rm-stream]");if(a){let[c,p]=a.dataset.plRmStream.split("|:|");mo(c,p),Mt();return}let i=t.target.closest("[data-pl-play-stream]");if(i){let c=i.closest(".pl-stream-row");if(c&&oo(c,e))return;let p=i.dataset.plPlayStream,h=e.find(v=>z(v)===p);h?.url&&window.__openStreamViewer?.(h);return}let r=t.target.closest("[data-play-music-pl]");if(r){let c=r.closest(".pl-stream-row");if(c&&oo(c,e))return;if(q?.length){let p=Number(r.dataset.playMusicPl);Promise.resolve().then(()=>(Wt(),Qt)).then(h=>h.playMusicQueue(q,p))}return}let o=t.target.closest("[data-pl-rename]");if(o){let c=o.dataset.plRename,p=F().find(v=>v.id===c);if(!p)return;let h=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D",p.name)?.trim();if(h){let v=F(),f=v.find(g=>g.id===c);f&&(f.name=h,Bt(v),Mt())}return}let l=t.target.closest("[data-pl-yt-share]");if(l){let c=l.dataset.plYtShare,p=F().find(h=>h.id===c);if(!p)return;tu(yo(p,e));return}}function au(){let t=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044")?.trim();t&&(Wa(t),Mt())}function iu(t){let e=u.data?.streams||[];for(let s of t.streams||[])if(s.startsWith("mv:")){let n=ts(s);if(n?.url)return n.url}else{let n=e.find(a=>z(a)===s);if(n?.url)return n.url}return""}function Qa(t,e,s={}){let n=Array.isArray(t)?t.filter(Boolean):[t].filter(Boolean);if(!n.length)return;let a=n.length>1,i=()=>{try{s.onChange?.(n.some(f=>Zt(f)))}catch{}},r=d("#pl-add-modal");r||(r=document.createElement("div"),r.id="pl-add-modal",r.setAttribute("role","dialog"),r.setAttribute("aria-modal","true"),document.body.appendChild(r));let o=f=>n.every(g=>(f.streams||[]).includes(g)),l=f=>{let g=o(f),y=iu(f),$=y?K(y):"";return`
      <button class="pl-modal-item${g?" is-saved":""}" data-pl-add="${m(f.id)}"
        type="button" role="checkbox" aria-checked="${g}">
        <span class="pl-modal-item-cover">
          ${$?`<img src="${m($)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<span class="pl-modal-item-cover--empty">\u266A</span>'}
        </span>
        <span class="pl-modal-item-info">
          <span class="pl-modal-item-name">${m(f.name)}</span>
          <span class="pl-modal-item-count">${f.streams.length}\u66F2</span>
        </span>
        <span class="pl-modal-bookmark${g?" is-saved":""}" aria-hidden="true">${Xa}</span>
      </button>`},c=()=>{let f=F();return f.length?f.map(l).join(""):'<p class="pl-modal-empty">\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u304C\u3042\u308A\u307E\u305B\u3093<br><span style="font-size:11px">\u4E0B\u306E\u300C\u65B0\u3057\u3044\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3092\u4F5C\u6210\u300D\u304B\u3089\u8FFD\u52A0\u3067\u304D\u307E\u3059</span></p>'},p=a?`${n.length}\u66F2\u3092\u307E\u3068\u3081\u3066\u4FDD\u5B58`:e||"\u914D\u4FE1",h=()=>{r.innerHTML=`
      <div class="pl-modal-backdrop" id="pl-modal-backdrop"></div>
      <div class="pl-modal-box" role="dialog" aria-modal="true" aria-label="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58">
        <div class="pl-modal-head">
          <span class="pl-modal-head-title">\u4FDD\u5B58\u5148</span>
          <button class="pl-modal-close" id="pl-modal-close" type="button" aria-label="\u9589\u3058\u308B">${b("close")}</button>
        </div>
        <div class="pl-modal-sub">${m(p)}</div>
        <div class="pl-modal-list" id="pl-modal-list">${c()}</div>
        <button class="pl-modal-new" id="pl-modal-new" type="button">
          <span class="pl-modal-new-icon">${b("plus")}</span> \u65B0\u3057\u3044\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3092\u4F5C\u6210
        </button>
      </div>`,r.hidden=!1,r.querySelector("#pl-modal-close").addEventListener("click",v),r.querySelector("#pl-modal-backdrop").addEventListener("click",v),r.querySelector("#pl-modal-new").addEventListener("click",()=>{let f=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D")?.trim();if(!f)return;let g=Wa(f);n.forEach(w=>po(g.id,w)),Ua(a?`\u300C${f}\u300D\u306B${n.length}\u66F2\u4FDD\u5B58\u3057\u307E\u3057\u305F`:`\u300C${f}\u300D\u306B\u4FDD\u5B58\u3057\u307E\u3057\u305F`);let y=r.querySelector("#pl-modal-list");y?.querySelector(".pl-modal-empty")&&(y.innerHTML=""),y&&y.insertAdjacentHTML("afterbegin",l(F().find(w=>w.id===g.id))),i()}),r.querySelector("#pl-modal-list").addEventListener("click",f=>{let g=f.target.closest("[data-pl-add]");if(!g)return;let y=g.dataset.plAdd,$=F(),w=$.find(C=>C.id===y);w&&(Array.isArray(w.streams)||(w.streams=[]),o(w)?(n.forEach(C=>{w.streams=w.streams.filter(G=>G!==C)}),Bt($),Ua(a?`${n.length}\u66F2\u3092\u524A\u9664\u3057\u307E\u3057\u305F`:"\u524A\u9664\u3057\u307E\u3057\u305F")):(n.forEach(C=>{w.streams.includes(C)||w.streams.push(C)}),Bt($),Ua(a?`\u300C${w.name}\u300D\u306B${n.length}\u66F2\u4FDD\u5B58\u3057\u307E\u3057\u305F`:`\u300C${w.name}\u300D\u306B\u4FDD\u5B58\u3057\u307E\u3057\u305F`)),g.outerHTML=l(F().find(C=>C.id===y)),i())})},v=()=>{r.hidden=!0};h(),document.addEventListener("keydown",function f(g){g.key==="Escape"&&(v(),document.removeEventListener("keydown",f))})}function Ua(t){let e=d("#pl-toast");e||(e=document.createElement("div"),e.id="pl-toast",document.body.appendChild(e)),e.textContent=t,e.classList.add("pl-toast--show"),clearTimeout(e._timer),e._timer=setTimeout(()=>e.classList.remove("pl-toast--show"),2500)}function oo(t,e){let s=F().find(i=>i.id===t.dataset.plId);if(!s||!window.__playMyListInViewer)return!1;let n=[];for(let i of s.streams)if(i.startsWith("mv:")){let r=ts(i);r?.url&&n.push({kind:"mv",key:i,video:r})}else{let r=e.find(o=>z(o)===i);r?.url&&n.push({kind:"stream",key:i,stream:r})}if(!n.length)return!1;let a=n.findIndex(i=>i.key===t.dataset.plSkey);return a<0&&(a=0),window.__playMyListInViewer({name:s.name||"\u30DE\u30A4\u30EA\u30B9\u30C8",items:n,idx:a}),!0}function ru(){if(U!=="my-playlists")return;let t=d("#panel-playlists");t&&t.querySelectorAll(".pl-stream-list").forEach(e=>{e.addEventListener("pointerdown",ou,{passive:!1})})}function ou(t){if(we)return;let e=t.target.closest(".pl-drag-handle");if(!e)return;let s=e.closest(".pl-stream-row"),n=e.closest(".pl-stream-list");if(!s||!n)return;t.preventDefault();let a=Array.from(n.querySelectorAll(".pl-stream-row")),i=a.indexOf(s);if(i<0)return;let r=a.map(l=>{let c=l.getBoundingClientRect();return c.top+c.height/2}),o=s.getBoundingClientRect();we={list:n,row:s,rows:a,mids:r,startIdx:i,targetIdx:i,startY:t.clientY,rowH:o.height+(parseFloat(getComputedStyle(n).rowGap||getComputedStyle(n).gap)||0),plId:s.dataset.plId,moved:!1},s.classList.add("is-dragging"),n.classList.add("is-drag-active");try{s.setPointerCapture(t.pointerId)}catch{}s.addEventListener("pointermove",$o,{passive:!1}),s.addEventListener("pointerup",wo),s.addEventListener("pointercancel",ko)}function $o(t){let e=we;if(!e)return;t.preventDefault();let s=t.clientY-e.startY;if(!e.moved&&Math.abs(s)<3)return;e.moved=!0,e.row.style.transform=`translateY(${s}px)`;let n=e.mids[e.startIdx]+s,a=0;for(let i=0;i<e.mids.length;i++)i!==e.startIdx&&n>e.mids[i]&&a++;a!==e.targetIdx&&(e.targetIdx=a,e.rows.forEach((i,r)=>{if(r===e.startIdx)return;let o=0;e.startIdx<a&&r>e.startIdx&&r<=a?o=-e.rowH:e.startIdx>a&&r>=a&&r<e.startIdx&&(o=e.rowH),i.style.transform=o?`translateY(${o}px)`:""}))}function wo(){let t=we;if(!t)return;let{plId:e,startIdx:s,targetIdx:n,moved:a}=t;if(So(),!a||n===s)return;let i=F(),r=i.find(o=>o.id===e);if(r&&s<r.streams.length){let o=r.streams.slice(),[l]=o.splice(s,1);o.splice(n,0,l),r.streams=o,Bt(i)}Mt()}function ko(){So()}function So(){let t=we;t&&(t.rows.forEach(e=>{e.style.transform=""}),t.row.classList.remove("is-dragging"),t.list.classList.remove("is-drag-active"),t.row.removeEventListener("pointermove",$o),t.row.removeEventListener("pointerup",wo),t.row.removeEventListener("pointercancel",ko),we=null)}var lo,co,ja,U,Ze,Ga,Rt,q,on,cn,Xe,Ya,Jt,rt,Vd,Xa,we,ke=L(()=>{ft();it();dt();lo="kanau-playlists",co="kanau-music-videos-cache-v2",ja=24,U="all-streams",Ze=1,Ga="newest",Rt="grid",q=null,on=null,cn=!1,Xe="",Ya=null,Jt=!1,rt=new Set;Vd=[{key:"newest",label:"\u65B0\u3057\u3044\u9806"},{key:"oldest",label:"\u53E4\u3044\u9806"},{key:"most-songs",label:"\u66F2\u6570\u2193"},{key:"fewest-songs",label:"\u66F2\u6570\u2191"}];Xa='<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M6 4h12a1 1 0 0 1 1 1v15l-7-4-7 4V5a1 1 0 0 1 1-1z"/></svg>';we=null});var xo={};wt(xo,{renderTimeline:()=>hn});function hn(){let{streams:t}=u.data,e=u.timelineFilter,s=e?t.filter(l=>l.songs.some(c=>c.key===e.key)):t,n=uu(s,u.timelineSort),a=d("#panel-timeline");a.innerHTML=`
    <div class="section-header">
      <h2>${b("calendar")} \u914D\u4FE1\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3</h2>
      <span class="count-pill">${n.length}\u67A0</span>
    </div>
    <div class="timeline-tools">
      <label class="timeline-sort-field" for="timeline-sort">
        <span>\u4E26\u3073\u66FF\u3048</span>
        <select id="timeline-sort" class="select-input">
          <option value="date-desc"${u.timelineSort==="date-desc"?" selected":""}>\u914D\u4FE1\u65E5\uFF08\u65B0\u3057\u3044\u9806\uFF09</option>
          <option value="date-asc"${u.timelineSort==="date-asc"?" selected":""}>\u914D\u4FE1\u65E5\uFF08\u53E4\u3044\u9806\uFF09</option>
          <option value="songs-desc"${u.timelineSort==="songs-desc"?" selected":""}>\u66F2\u6570\uFF08\u591A\u3044\u9806\uFF09</option>
          <option value="songs-asc"${u.timelineSort==="songs-asc"?" selected":""}>\u66F2\u6570\uFF08\u5C11\u306A\u3044\u9806\uFF09</option>
          <option value="index-desc"${u.timelineSort==="index-desc"?" selected":""}>\u67A0\u756A\u53F7\uFF08\u5927\u304D\u3044\u9806\uFF09</option>
          <option value="index-asc"${u.timelineSort==="index-asc"?" selected":""}>\u67A0\u756A\u53F7\uFF08\u5C0F\u3055\u3044\u9806\uFF09</option>
          <option value="title"${u.timelineSort==="title"?" selected":""}>\u30BF\u30A4\u30C8\u30EB\u9806</option>
        </select>
      </label>
    </div>
    <div id="timeline-filter-banner"></div>
    <div id="timeline" class="timeline"></div>
    <div class="timeline-controls" id="timeline-controls"></div>
  `,d("#timeline-sort")?.addEventListener("change",l=>{u.timelineSort=l.target.value||"date-desc",u.timelineLimit=ka,hn()});let i=d("#timeline-filter-banner");if(e){let l=n.reduce((c,p)=>c+p.songs.filter(h=>h.key===e.key).length,0);i.innerHTML=`
      <div class="filter-banner">
        <span class="filter-icon">${b("search")}</span>
        <div class="filter-text">
          <strong>${m(e.title)}</strong>
          <span style="color:var(--ink-mute);"> / ${m(e.artist)}</span>
          <span class="meta">\u3053\u306E\u66F2\u3092\u6B4C\u3063\u305F\u914D\u4FE1\u306E\u307F\u8868\u793A\u4E2D\uFF08${n.length}\u67A0 / ${l}\u56DE\u6B4C\u5531\uFF09</span>
        </div>
        <button class="clear-btn" id="clear-filter">${b("close")} \u7D5E\u308A\u8FBC\u307F\u3092\u89E3\u9664</button>
      </div>
    `,d("#clear-filter").addEventListener("click",()=>{u.timelineFilter=null,u.timelineLimit=ka,hn()})}if(!n.length){d("#timeline").innerHTML='<div class="empty-state">\u8A72\u5F53\u3059\u308B\u914D\u4FE1\u304C\u3042\u308A\u307E\u305B\u3093 \u{1F420}</div>';return}let r=n.slice(0,u.timelineLimit);if(d("#timeline").innerHTML=r.map((l,c)=>du(l,c,e)).join(""),u.timelineFocus){let c=document.querySelector(`[data-streamkey="${CSS.escape(u.timelineFocus)}"]`)?.closest(".timeline-item");c?.classList.add("focus"),c?.scrollIntoView({behavior:"smooth",block:"center"}),u.timelineFocus=null}d("#timeline").onclick=async l=>{let c=l.target.closest("[data-copy-stream]");if(!c)return;l.preventDefault(),l.stopPropagation();let p=r[Number(c.dataset.copyStream)];if(p)try{await navigator.clipboard.writeText(pu(p)),c.classList.add("is-copied"),c.setAttribute("aria-label","\u30B3\u30D4\u30FC\u6E08\u307F"),c.title="\u30B3\u30D4\u30FC\u6E08\u307F",setTimeout(()=>{c.classList.remove("is-copied"),c.setAttribute("aria-label","\u30BB\u30C8\u30EA\u3092\u30B3\u30D4\u30FC"),c.title="\u30BB\u30C8\u30EA\u3092\u30B3\u30D4\u30FC"},1200)}catch{c.classList.add("is-error"),c.setAttribute("aria-label","\u30B3\u30D4\u30FC\u306B\u5931\u6557"),c.title="\u30B3\u30D4\u30FC\u306B\u5931\u6557",setTimeout(()=>{c.classList.remove("is-error"),c.setAttribute("aria-label","\u30BB\u30C8\u30EA\u3092\u30B3\u30D4\u30FC"),c.title="\u30BB\u30C8\u30EA\u3092\u30B3\u30D4\u30FC"},1200)}};let o=d("#timeline-controls");u.timelineLimit<n.length&&(o.innerHTML=`<button class="load-more-btn" id="load-more">\u25BC \u3082\u3063\u3068\u898B\u308B (\u6B8B\u308A${n.length-u.timelineLimit}\u67A0)</button>`,d("#load-more").addEventListener("click",()=>{u.timelineLimit+=Lr,hn()}))}function du(t,e,s){let n=!s&&u.timelineSort==="date-desc"&&e<3?"recent":"",a=t.songs.map((v,f)=>`
      <li class="setlist-item${s&&v.key===s.key?" hit":""}">
        <span class="setlist-num">${f+1}.</span>
        <button class="setlist-title" type="button"
          data-songkey="${m(v.key)}"
          data-songtitle="${m(v.title)}"
          data-songartist="${m(v.artist)}"
          title="\u66F2\u8A73\u7D30\u3092\u8868\u793A">${m(v.title)}</button>
        <span class="setlist-separator">/</span>
        <button class="setlist-artist" type="button"
          data-artist-search="${m(v.artist)}"
          title="\u5168\u66F2\u30EA\u30B9\u30C8\u3067\u7D5E\u308A\u8FBC\u307F">${m(v.artist)}</button>
      </li>`).join(""),i=t.url?`<a href="${m(t.url)}" target="_blank" rel="noopener">${m(t.title||"\u914D\u4FE1")}</a>`:m(t.title||"\u914D\u4FE1"),r=t.url?`<span class="watch-actions"><a class="watch-open-link" href="${m(t.url)}" target="_blank" rel="noopener" aria-label="YouTube\u3067\u958B\u304F" title="YouTube\u3067\u958B\u304F">${cu}</a></span>`:"",o=z(t),l=Zt(o),c=`<button class="timeline-save-btn${l?" is-saved":""}" type="button" data-playlist-add="${m(o)}" data-stream-title="${m(t.title||"\u914D\u4FE1")}" title="${l?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58"}">${b("bookmark")}</button>`,p=`<button class="timeline-copy-btn" type="button" data-copy-stream="${e}" aria-label="\u30BB\u30C8\u30EA\u3092\u30B3\u30D4\u30FC" title="\u30BB\u30C8\u30EA\u3092\u30B3\u30D4\u30FC">${lu}</button>`;return`
    <details class="timeline-item ${n}"${s?" open":""}>
      <span class="stream-anchor" data-streamkey="${m(z(t))}"></span>
      <summary class="timeline-summary">
        <span class="timeline-date-badge">${T(t.date).replace(/^\d{4}\//,"")}</span>
        <span class="timeline-summary-main">
          <span class="timeline-head">
            <span class="timeline-stream-no">\u7B2C${t.index}\u67A0</span>
            <span class="timeline-songcount">${b("check")} ${t.songs.length}\u66F2</span>
          </span>
          <span class="timeline-title">${i}</span>
        </span>
        <span class="timeline-actions">
          ${c}
          ${p}
          ${r}
        </span>
      </summary>
      <div class="timeline-setlist"><ol class="setlist-list">${a}</ol></div>
    </details>
  `}function uu(t,e){let s=[...t],n=o=>o.date instanceof Date?o.date.getTime():new Date(o.date||0).getTime(),a=o=>Number(o.index)||0,i=o=>o.songs?.length||0,r=(o,l)=>n(l)-n(o)||a(l)-a(o);switch(e){case"date-asc":s.sort((o,l)=>n(o)-n(l)||a(o)-a(l));break;case"songs-desc":s.sort((o,l)=>i(l)-i(o)||r(o,l));break;case"songs-asc":s.sort((o,l)=>i(o)-i(l)||r(o,l));break;case"index-desc":s.sort((o,l)=>a(l)-a(o)||r(o,l));break;case"index-asc":s.sort((o,l)=>a(o)-a(l)||r(o,l));break;case"title":s.sort((o,l)=>String(o.title||"").localeCompare(String(l.title||""),"ja")||r(o,l));break;case"date-desc":default:s.sort(r);break}return s}function pu(t){return(t.songs||[]).map(e=>{let s=String(e?.title||"").trim(),n=String(e?.artist||"").trim();return n?`${s} / ${n}`:s}).filter(Boolean).join(`
`)}var lu,cu,Lo=L(()=>{ft();je();it();ke();dt();lu='<svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true"><rect x="9" y="2" width="6" height="4" rx="1"/><path d="M9 4H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2"/></svg>',cu='<svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true"><polygon points="6 4 19 12 6 20 6 4"/></svg>'});var To={};wt(To,{renderAnalytics:()=>mu});function mu(){let{songs:t,streams:e,artists:s}=u.data,n=d("#panel-analytics");n.innerHTML=`
    <div class="section-header">
      <h2>${b("analytics")} \u30A2\u30CA\u30EA\u30C6\u30A3\u30AF\u30B9</h2>
      <span class="count-pill">${e.length}\u67A0 \xD7 ${t.length}\u66F2\u3092\u5206\u6790</span>
    </div>

    <div class="analytics-grid">

      <div class="card col-6">
        <div class="card-title">${b("chart")} \u6301\u3061\u66F2\u306E\u7D2F\u7A4D\u6210\u9577 <span class="pill">\u521D\u62AB\u9732\u30D9\u30FC\u30B9</span></div>
        ${Fe("chart-growth")}
      </div>

      <div class="card col-6">
        <div class="card-title">${b("mic")} 1\u67A0\u3042\u305F\u308A\u306E\u66F2\u6570 <span class="pill">\u6642\u7CFB\u5217</span></div>
        ${Fe("chart-songs-per-stream")}
      </div>

      <div class="card col-6">
        <div class="card-title">${b("calendar")} \u66DC\u65E5\u5206\u5E03 <span class="pill">\u914D\u4FE1\u65E5</span></div>
        ${Fe("chart-dow",{class:"short"})}
      </div>

      <div class="card col-6">
        <div class="card-title">${b("chart")} \u6B4C\u5531\u56DE\u6570\u306E\u5206\u5E03 <span class="pill">\u30D2\u30B9\u30C8\u30B0\u30E9\u30E0</span></div>
        ${Fe("chart-histogram",{class:"short"})}
      </div>

      <div class="card col-12">
        <div class="card-title">${b("artist")} \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u5225 \u6B4C\u5531\u5408\u8A08 <span class="pill">TOP${Sa}</span></div>
        <div id="artist-bar-list" class="bar-list"></div>
      </div>

      <div class="card col-6">
        <div class="card-title">${b("sparkle")} \u4E45\u3057\u3076\u308A\u306B\u6B4C\u308F\u308C\u305F\u66F2 <span class="pill">\u524D\u56DE\u304B\u3089\u9577\u304B\u3063\u305FTOP10</span></div>
        <div id="comeback-list"></div>
      </div>

      <div class="card col-6">
        <div class="card-title">${b("time")} 1\u56DE\u3057\u304B\u6B4C\u308F\u308C\u3066\u3044\u306A\u3044\u66F2 <span class="pill">${t.filter(a=>a.count===1).length}\u66F2</span></div>
        <div id="oneshot-list"></div>
      </div>

    </div>
  `,hu(t),fu(e),vu(e),gu(t),bu(s.length?s:oe(t)),yu(t),$u(t)}function hu(t){let e=pe(),s=new Map;for(let c of t){if(!c.firstSung)continue;let p=at(c.firstSung);s.set(p,(s.get(p)||0)+1)}let n=Array.from(s.keys()).sort();if(!n.length)return;let a=[],i=[],r=0,o=Mo(n[0]),l=Mo(n[n.length-1]);for(;o<=l;){let c=at(o);r+=s.get(c)||0,a.push(He(o)),i.push(r),o=new Date(o.getFullYear(),o.getMonth()+1,1)}Ve("chart-growth","line",{labels:a,datasets:[{label:"\u7D2F\u7A4D\u6301\u3061\u66F2\u6570",data:i,borderColor:e.primaryStrong,backgroundColor:e.primary+"33",tension:.25,fill:!0,pointRadius:2,borderWidth:2}]})}function Mo(t){let[e,s]=t.split("-").map(Number);return new Date(e,s-1,1)}function fu(t){let e=pe(),s=[...t].sort((n,a)=>n.date-a.date);Ve("chart-songs-per-stream","line",{labels:s.map(n=>T(n.date)),datasets:[{label:"\u66F2\u6570",data:s.map(n=>n.songs.length),borderColor:e.accentStrong,backgroundColor:e.accent+"33",tension:.2,fill:!0,pointRadius:1.5,borderWidth:1.5}]},{scales:{x:{ticks:{maxTicksLimit:8}}}})}function vu(t){let e=pe(),s=["\u65E5","\u6708","\u706B","\u6C34","\u6728","\u91D1","\u571F"],n=new Array(7).fill(0),a=new Array(7).fill(0);for(let i of t)n[i.dayOfWeek]+=1,a[i.dayOfWeek]+=i.songs.length;Ve("chart-dow","bar",{labels:s,datasets:[{label:"\u914D\u4FE1\u56DE\u6570",data:n,backgroundColor:e.primary+"cc",borderColor:e.primaryStrong,borderWidth:1,yAxisID:"y",borderRadius:6},{label:"\u6B4C\u5531\u6570",data:a,backgroundColor:e.accent+"cc",borderColor:e.accentStrong,borderWidth:1,yAxisID:"y2",borderRadius:6}]},{scales:{y:{position:"left",title:{display:!0,text:"\u914D\u4FE1",color:e.inkMute,font:{size:10}}},y2:{position:"right",title:{display:!0,text:"\u6B4C\u5531",color:e.inkMute,font:{size:10}},grid:{display:!1},beginAtZero:!0}}})}function gu(t){let e=pe(),s=[{label:"1\u56DE",range:[1,1]},{label:"2\u56DE",range:[2,2]},{label:"3\u56DE",range:[3,3]},{label:"4-5\u56DE",range:[4,5]},{label:"6-10\u56DE",range:[6,10]},{label:"11-20\u56DE",range:[11,20]},{label:"21\u56DE\u301C",range:[21,1/0]}],n=s.map(a=>t.filter(i=>i.count>=a.range[0]&&i.count<=a.range[1]).length);Ve("chart-histogram","bar",{labels:s.map(a=>a.label),datasets:[{label:"\u66F2\u6570",data:n,backgroundColor:e.primary+"cc",borderColor:e.primaryStrong,borderWidth:1,borderRadius:6}]},{plugins:{legend:{display:!1}}})}function bu(t){let e=t.slice(0,Sa),s=d("#artist-bar-list");if(!e.length){s.innerHTML='<div class="empty-state">\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u30C7\u30FC\u30BF\u304C\u3042\u308A\u307E\u305B\u3093</div>';return}let n=e[0]?.totalCount||1;s.innerHTML=e.map((a,i)=>{let r=Math.round(a.totalCount/n*100);return`
      <div class="bar-row" data-artist-search="${m(a.artist)}" style="cursor:pointer;" title="\u30AF\u30EA\u30C3\u30AF\u3067\u3053\u306E\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u306E\u66F2\u3092\u8868\u793A">
        <div class="bar-rank">${i+1}</div>
        <div class="bar-content">
          <div class="bar-label">${m(a.artist)} <span style="color:var(--ink-mute);font-size:11px;">\uFF08${a.songCount}\u66F2\uFF09</span></div>
          <div class="bar-bar accent" style="width:${r}%;"></div>
        </div>
        <div class="bar-value">${a.totalCount}</div>
      </div>
    `}).join("")}function yu(t){let e=An(t,10);d("#comeback-list").innerHTML=e.length?e.map((s,n)=>`
    <div class="activity-row" data-songkey="${m(s.song.key)}" data-songtitle="${m(s.song.title)}" data-songartist="${m(s.song.artist)}" style="cursor:pointer;" title="\u30AF\u30EA\u30C3\u30AF\u3067\u914D\u4FE1\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u306B\u7D5E\u308A\u8FBC\u307F">
      <span class="a-date">${s.maxGap}\u65E5</span>
      <span class="a-title">${m(s.song.title)} <span style="color:var(--ink-mute);">/ ${m(s.song.artist)}</span></span>
      <span class="a-meta">${T(s.gapStart)}\u2192${T(s.gapEnd)}</span>
    </div>
  `).join(""):'<div class="empty-state">\u8A72\u5F53\u30C7\u30FC\u30BF\u306A\u3057</div>'}function $u(t){let e=t.filter(s=>s.count===1).sort((s,n)=>(n.lastSung?.getTime()||0)-(s.lastSung?.getTime()||0)).slice(0,10);d("#oneshot-list").innerHTML=e.length?e.map(s=>`
    <div class="activity-row" data-songkey="${m(s.key)}" data-songtitle="${m(s.title)}" data-songartist="${m(s.artist)}" style="cursor:pointer;" title="\u30AF\u30EA\u30C3\u30AF\u3067\u914D\u4FE1\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u306B\u7D5E\u308A\u8FBC\u307F">
      <span class="a-date">${s.lastSung?T(s.lastSung):"\u2014"}</span>
      <span class="a-title">${m(s.title)} <span style="color:var(--ink-mute);">/ ${m(s.artist)}</span></span>
      <span class="a-meta">${s.daysSinceLast!=null?s.daysSinceLast+"\u65E5\u524D":"\u2014"}</span>
    </div>
  `).join(""):'<div class="empty-state">\u8A72\u5F53\u30C7\u30FC\u30BF\u306A\u3057</div>'}var _o=L(()=>{ft();it();je();wa();Yt();dt()});var Co={};wt(Co,{renderRequests:()=>wu});function wu(){let t=d("#panel-requests");t&&(t.innerHTML=`
    <div class="req-layout">
      <div class="card req-form-card">
        <div class="req-form-head">
          <span class="help-kicker">Request</span>
          <h2 class="req-form-title">\u66F2\u30EA\u30AF\u30A8\u30B9\u30C8</h2>
          <p class="req-form-lead">\u6B4C\u3063\u3066\u307B\u3057\u3044\u66F2\u3092\u9001\u308C\u307E\u3059\u3002\u65E2\u306B\u3042\u308B\u66F2\u306F\u4E00\u89A7\u304B\u3089\u300C\u8074\u304D\u305F\u3044\u300D\u3092\u62BC\u3057\u3066\u304F\u3060\u3055\u3044\u3002</p>
        </div>
        <form id="req-form" class="req-form" novalidate>
          <div class="req-field">
            <label class="req-label" for="req-title">\u66F2\u540D <span class="req-required">*</span></label>
            <input class="text-input req-input" id="req-title" name="title" type="text" placeholder="\u66F2\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044" maxlength="120" autocomplete="off" required>
          </div>
          <div class="req-field">
            <label class="req-label" for="req-artist">\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8</label>
            <input class="text-input req-input" id="req-artist" name="artist" type="text" placeholder="\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u540D\uFF08\u4EFB\u610F\uFF09" maxlength="120" autocomplete="off">
          </div>
          <div class="req-field">
            <label class="req-label" for="req-url">URL</label>
            <input class="text-input req-input" id="req-url" name="url" type="url" placeholder="YouTube \u306A\u3069\u306E URL\uFF08\u4EFB\u610F\uFF09" maxlength="2000" autocomplete="off">
          </div>
          <div class="req-field">
            <label class="req-label" for="req-name">\u304A\u540D\u524D</label>
            <input class="text-input req-input" id="req-name" name="requesterName" type="text" placeholder="\u30CB\u30C3\u30AF\u30CD\u30FC\u30E0\uFF08\u4EFB\u610F\uFF09" maxlength="40" autocomplete="off">
          </div>
          <div id="req-form-msg" class="req-msg" hidden></div>
          <button class="btn primary req-submit" id="req-submit" type="submit">
            <span class="req-submit-icon" aria-hidden="true">+</span>
            <span>\u30EA\u30AF\u30A8\u30B9\u30C8\u3059\u308B</span>
          </button>
        </form>
      </div>

      <section class="card req-list-section">
        <div class="req-list-head">
          <div>
            <span class="help-kicker">Queue</span>
            <h3 class="req-list-title">\u307F\u3093\u306A\u306E\u30EA\u30AF\u30A8\u30B9\u30C8</h3>
          </div>
          <span class="req-list-note">\u6295\u7968\u6570\u9806</span>
        </div>
        <div id="req-list" class="req-list">
          <div class="state-card"><div class="spinner"></div><div class="msg">\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div></div>
        </div>
      </section>

    </div>
  `,ku(),Eo())}function ku(){let t=d("#req-form");t&&t.addEventListener("submit",async e=>{e.preventDefault();let s=d("#req-submit"),n=d("#req-form-msg"),a=d("#req-title").value.trim();if(!a){ti(n,"\u66F2\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044","error"),d("#req-title").focus();return}s.disabled=!0,s.textContent="\u9001\u4FE1\u4E2D\u2026",Lu(n);try{let i=await fetch(ei,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:a,artist:d("#req-artist").value.trim(),url:d("#req-url").value.trim(),requesterName:d("#req-name").value.trim()})}),r=await i.json();if(!i.ok)throw new Error(r.error||"\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F");ti(n,"\u2705 \u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u9001\u4FE1\u3057\u307E\u3057\u305F\uFF01\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059","success"),t.reset(),await Eo()}catch(i){ti(n,`\u26A0\uFE0F ${i.message}`,"error")}finally{s.disabled=!1,s.textContent="\u30EA\u30AF\u30A8\u30B9\u30C8\u3059\u308B"}})}async function Eo(){let t=d("#req-list");if(t)try{let e=await fetch(`${ei}?limit=100`);if(!e.ok)throw new Error("\u53D6\u5F97\u306B\u5931\u6557\u3057\u307E\u3057\u305F");let{items:s}=await e.json();Su(t,s||[])}catch(e){t.innerHTML=`<div class="state-card"><div class="msg">\u26A0\uFE0F ${m(e.message)}</div></div>`}}function Su(t,e){if(!e.length){t.innerHTML=`
      <div class="req-empty">
        <strong>\u307E\u3060\u30EA\u30AF\u30A8\u30B9\u30C8\u304C\u3042\u308A\u307E\u305B\u3093</strong>
        <span>\u6700\u521D\u306E\u66F2\u3092\u9001\u308B\u3068\u3053\u3053\u306B\u8868\u793A\u3055\u308C\u307E\u3059\u3002</span>
      </div>`;return}t.innerHTML=e.map((s,n)=>`
    <div class="req-card" data-id="${s.id}">
      <span class="req-rank">${n+1}</span>
      <div class="req-card-body">
        <div class="req-card-main">
          <span class="req-card-title">${m(s.title)}</span>
          ${s.artist?`<span class="req-card-artist">${m(s.artist)}</span>`:""}
        </div>
        <div class="req-card-meta">
          ${s.url?`<a class="req-card-url" href="${m(s.url)}" target="_blank" rel="noopener noreferrer">\u30EA\u30F3\u30AF\u3092\u958B\u304F</a>`:""}
          ${s.requesterName?`<span class="req-card-name">by ${m(s.requesterName)}</span>`:""}
          ${s.createdAt?`<span class="req-card-date">${T(s.createdAt)}</span>`:""}
        </div>
      </div>
      <button class="req-vote-btn" data-id="${s.id}" type="button" aria-label="\u8074\u304D\u305F\u3044">
        <span class="req-vote-icon" aria-hidden="true">\u2661</span>
        <span class="req-vote-count">${s.voteCount??s.vote_count??0}</span>
      </button>
    </div>
  `).join(""),t.querySelectorAll(".req-vote-btn").forEach(s=>{s.addEventListener("click",()=>xu(s))})}async function xu(t){if(t.disabled)return;let e=t.dataset.id;t.disabled=!0;let s=t.querySelector(".req-vote-icon"),n=t.querySelector(".req-vote-count"),a=s.textContent;s.textContent="\u2665";try{let i=await fetch(`${ei}/${e}/vote`,{method:"POST"}),r=await i.json();if(!i.ok)throw new Error(r.error||"\u30A8\u30E9\u30FC");let o=r.item?.voteCount??r.item?.vote_count;o!=null&&(n.textContent=o),t.classList.add("req-voted")}catch{s.textContent=a,t.disabled=!1}}function ti(t,e,s){t.textContent=e,t.className=`req-msg req-msg--${s}`,t.hidden=!1}function Lu(t){t.hidden=!0}var ei,Io=L(()=>{it();ei="/api/song-requests"});ft();Wn();Vs();ga();wa();it();je();xa();ft();it();Vs();dt();var Z=-1,xt=[],La=null,Ut=null,Ks=null;function Er(t){La=t;let e=document.createElement("div");e.id="omni-backdrop",e.hidden=!0,e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label","\u30B5\u30A4\u30C8\u5185\u691C\u7D22"),e.innerHTML=`
    <div id="omni-box">
      <div class="omni-input-row">
        <span class="omni-search-icon" aria-hidden="true">${b("search")}</span>
        <input
          id="omni-input"
          class="omni-input"
          type="search"
          placeholder="\u66F2\u30FB\u914D\u4FE1\u30FB\u52D5\u753B\u3092\u691C\u7D22\uFF08\u30B9\u30DA\u30FC\u30B9\u533A\u5207\u308A\u3067\u7D5E\u308A\u8FBC\u307F\uFF09"
          autocomplete="off"
          spellcheck="false"
          aria-label="\u30B5\u30A4\u30C8\u5185\u691C\u7D22"
          aria-autocomplete="list"
          aria-controls="omni-listbox"
        >
        <kbd class="omni-esc-key">Esc</kbd>
      </div>
      <div id="omni-listbox" class="omni-listbox" role="listbox" aria-label="\u691C\u7D22\u7D50\u679C"></div>
      <div class="omni-footer">
        <span><kbd>\u2191</kbd><kbd>\u2193</kbd> \u79FB\u52D5</span>
        <span><kbd>Enter</kbd> \u9078\u629E</span>
        <span><kbd>Esc</kbd> \u9589\u3058\u308B</span>
      </div>
    </div>
  `,document.body.appendChild(e),e.addEventListener("click",n=>{n.target===e&&Ke()});let s=document.getElementById("omni-input");s.addEventListener("input",()=>Ma(s.value)),s.addEventListener("keydown",Sc),document.getElementById("omni-listbox").addEventListener("click",n=>{let a=n.target.closest("[data-omni-idx]");a&&Ir(Number(a.dataset.omniIdx))})}function Cr(){let t=document.getElementById("omni-backdrop");if(!t)return;t.hidden=!1,Z=-1,xt=[];let e=document.getElementById("omni-input");e&&(e.value="",e.focus(),e.select()),Ma(""),Lc().then(()=>{if(!Ta())return;let s=document.getElementById("omni-input")?.value||"";s.trim()&&Ma(s)})}function Ke(){let t=document.getElementById("omni-backdrop");t&&(t.hidden=!0),Z=-1}function Ta(){let t=document.getElementById("omni-backdrop");return!!(t&&!t.hidden)}function Sc(t){let e=document.querySelectorAll("#omni-listbox [data-omni-idx]");t.key==="ArrowDown"?(t.preventDefault(),Z=Math.min(Z+1,e.length-1),Mr(e)):t.key==="ArrowUp"?(t.preventDefault(),Z=Math.max(Z-1,-1),Mr(e)):t.key==="Enter"?(t.preventDefault(),Z>=0&&xt[Z]&&Ir(Z)):t.key==="Escape"&&(t.preventDefault(),Ke())}function Mr(t){t.forEach((e,s)=>{e.classList.toggle("is-active",s===Z),e.setAttribute("aria-selected",String(s===Z))}),Z>=0&&t[Z]?.scrollIntoView({block:"nearest"})}function Ir(t){let e=xt[t];!e||!La||(Ke(),La(e))}function Ma(t){let e=document.getElementById("omni-listbox");if(!e)return;Z=-1,xt=[];let s=u.data?.songs||[],n=u.data?.streams||[],a=Ut||[],i=he(t),r="",o=0;if(!u.data){e.innerHTML='<div class="omni-empty">\u30C7\u30FC\u30BF\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div>';return}if(!i){let h=s.slice(0,8);if(h.length){r+=Ye("rank","\u3088\u304F\u6B4C\u308F\u308C\u308B\u66F2");for(let v of h)xt.push({type:"song",song:v}),r+=Tr(v,o++,"")}e.innerHTML=r||'<div class="omni-empty">\u691C\u7D22\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044</div>';return}let l=[];try{l=(Bs(t,s).results||[]).slice(0,8)}catch{}if(l.length||(l=s.filter(h=>_r(t,`${h.title} ${h.artist}`)).slice(0,8)),l.length){r+=Ye("music","\u66F2");for(let h of l)xt.push({type:"song",song:h}),r+=Tr(h,o++,i)}if(a.length){let h=a.filter(v=>Mc(v,t)).slice(0,6);if(h.length){r+=Ye("video","\u6B4C\u307F\u305F\u30FB\u30AA\u30EA\u66F2");for(let v of h)xt.push({type:"music-video",video:v}),r+=xc(v,o++,t)}}let c=new Set,p=[];for(let h of s)if(h.artist&&_r(t,h.artist)&&!c.has(h.artist)&&(c.add(h.artist),p.push(h.artist),p.length>=4))break;if(p.length){r+=Ye("artist","\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8");for(let h of p){let v=s.filter(f=>f.artist===h).length;xt.push({type:"artist",artist:h}),r+=`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${o++}">
        <span class="omni-item-icon">${b("artist")}</span>
        <div class="omni-item-body">
          <span class="omni-item-title">${ze(m(h),i)}</span>
          <span class="omni-item-meta">${v}\u66F2 \xB7 \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u7D5E\u308A\u8FBC\u307F</span>
        </div>
      </div>`}}if(n.length){let h=n.filter(v=>{let f=he(`${v.title||""} ${(v.songs||[]).map(y=>`${y.title||""} ${y.artist||""}`).join(" ")}`),g=Us(t);return g.length>0&&g.every(y=>f.includes(y))}).slice(0,5);if(h.length){r+=Ye("calendar","\u914D\u4FE1\u67A0");for(let v of h){xt.push({type:"stream",stream:v});let f=v.channel==="new"?"\u65B0ch":v.channel==="old"?"\u65E7ch":"";r+=`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${o++}">
          <span class="omni-item-icon">${b("calendar")}</span>
          <div class="omni-item-body">
            <span class="omni-item-title">${ze(m(v.title||"\u914D\u4FE1"),i)}</span>
            <span class="omni-item-meta">${T(v.date)}${f?" \xB7 "+f:""} \xB7 ${v.songs?.length||0}\u66F2 \xB7 \u30AF\u30EA\u30C3\u30AF\u3067\u518D\u751F</span>
          </div>
        </div>`}}}r||(r=`<div class="omni-empty">\u300C${m(t)}\u300D\u306B\u4E00\u81F4\u3059\u308B\u7D50\u679C\u304C\u3042\u308A\u307E\u305B\u3093 \u{1F420}</div>`),e.innerHTML=r}function Ye(t,e){return`<div class="omni-section-label" role="presentation">${b(t)} ${e}</div>`}function Tr(t,e,s){return`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${e}">
    <span class="omni-item-icon">${b("music")}</span>
    <div class="omni-item-body">
      <span class="omni-item-title">${ze(m(t.title),s)}</span>
      <span class="omni-item-meta">${ze(m(t.artist||""),s)} \xB7 ${t.count}\u56DE\u6B4C\u5531</span>
    </div>
    <span class="omni-item-count">${t.count}<small>\u56DE</small></span>
  </div>`}function xc(t,e,s){let n=Ar(t),a=t.originalArtist||t.character||n;return`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${e}">
    <span class="omni-item-icon">${b("video")}</span>
    <div class="omni-item-body">
      <span class="omni-item-title">${ze(m(t.title||"\u52D5\u753B"),s)}</span>
      <span class="omni-item-meta">${m(n)}${a?" \xB7 "+m(a):""} \xB7 \u52D5\u753B\u3067\u898B\u308B</span>
    </div>
  </div>`}function Lc(){return Ut!==null?Promise.resolve(Ut):Ks||(Ks=fetch("/data/music.json",{cache:"no-store"}).then(t=>t.ok?t.json():Promise.reject(new Error(`music.json ${t.status}`))).then(t=>(Ut=Array.isArray(t?.videos)?t.videos:[],Ut)).catch(()=>(Ut=[],Ut)),Ks)}function Mc(t,e){let s=Us(e);if(!s.length)return!1;let n=Tc(t);return s.every(a=>n.includes(a))}function Tc(t){let e=t.title||"",s=e.split(/[\/／|｜]/).map(n=>n.trim()).filter(Boolean);return he([e,...s,t.originalArtist,t.character,t.type,Ar(t)].filter(Boolean).join(" "))}function Ar(t){switch(t?.type){case"cover":return"\u6B4C\u307F\u305F";case"office":return"Re:AcT\u30AA\u30EA\u66F2";case"character":return"\u30AD\u30E3\u30E9\u30BD\u30F3";default:return"\u30AA\u30EA\u66F2"}}function Us(t){return he(t).split(/[\/／|｜\s]+/).map(e=>e.trim()).filter(Boolean)}function _r(t,e){let s=Us(t);if(!s.length)return!1;let n=he(e);return s.every(a=>n.includes(a))}function he(t){return String(t||"").normalize("NFKC").toLowerCase().replace(/\s+/g," ").trim()}function ze(t,e){let n=Us(e).find(r=>r&&t.toLowerCase().includes(r))||he(e);if(!n)return t;let i=t.toLowerCase().indexOf(n);return i<0?t:t.slice(0,i)+'<mark class="hl">'+t.slice(i,i+n.length)+"</mark>"+t.slice(i+n.length)}dt();$r();Ei();var Bo={dashboard:()=>Promise.resolve().then(()=>(Hr(),Dr)).then(t=>t.renderDashboard),ranking:()=>Promise.resolve().then(()=>(Rr(),qr)).then(t=>t.renderRanking),songs:()=>Promise.resolve().then(()=>(Ur(),Kr)).then(t=>t.renderSongs),timeline:()=>Promise.resolve().then(()=>(Lo(),xo)).then(t=>t.renderTimeline),analytics:()=>Promise.resolve().then(()=>(_o(),To)).then(t=>t.renderAnalytics),requests:()=>Promise.resolve().then(()=>(Io(),Co)).then(t=>t.renderRequests),playlists:()=>Promise.resolve().then(()=>(ke(),es)).then(t=>t.renderPlaylists)},fn=new Map,Ao=0,Se=null;function oi(t){return Object.prototype.hasOwnProperty.call(Bo,t)}async function Mu(t){fn.has(t)||fn.set(t,Bo[t]());try{return await fn.get(t)}catch(e){throw fn.delete(t),e}}function Vo(t){return["dashboard","timeline","analytics"].includes(t)}function Tu(t,e={}){let s=d(`#panel-${t}`);if(!s)return;let n={dashboard:"\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9\u8A73\u7D30",ranking:"\u30E9\u30F3\u30AD\u30F3\u30B0",songs:"\u66F2\u30EA\u30B9\u30C8",timeline:"\u914D\u4FE1\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3",analytics:"\u30A2\u30CA\u30EA\u30C6\u30A3\u30AF\u30B9"};s.innerHTML=`
    <div class="state-card">
      <div class="msg">${m(n[t]||"\u8A73\u7D30\u30C7\u30FC\u30BF")}</div>
      <div class="err-detail">\u8AAD\u307F\u8FBC\u307F\u4E2D\u3067\u3059\u3002</div>
    </div>
  `}function _u(t){let e=d(`#panel-${t}`);e&&(e.innerHTML=`
    <div class="state-card">
      <div class="msg">\u8A73\u7D30\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059</div>
    </div>
  `)}function Eu(t){if(u.channelData?.fullLoaded)return;u.channelData=t;let e=Ft(u.channel)?u.channel:Oe,s=Ft(e);s&&(u.data=s),!Vo(u.activeTab)&&u.data&&ee(u.activeTab,{autoLoad:!1})}function Cu(t){u.channelData=t,u.channelData.fullLoaded=!0;let e=Ft(u.channel)?u.channel:Oe;Sn(e,{resetSearch:!1,updateUrl:!1,render:!1}),ee(u.activeTab,{autoLoad:!1})}function Fo(){return Se=Gi({meta:u.channelData,onSongsReady:Eu}).then(Cu).finally(()=>{Se=null}),Se}async function li(){u.channelData?.fullLoaded||(Se||Fo(),await Se)}async function ee(t=u.activeTab,e={}){if(!oi(t)||!["playlists","requests"].includes(t)&&!u.data)return;let s=u.channelData?.partialLoaded||u.channelData?.fullLoaded,n=u.channelData?.fullLoaded;if(["playlists","requests"].includes(t)?!1:Vo(t)?!n:!s)if(e.autoLoad){_u(t);try{await li()}catch(r){console.error("[data] full load failed",r);let o=d(`#panel-${t}`);o&&(o.innerHTML=`
            <div class="state-card">
              <div class="msg">\u8A73\u7D30\u30C7\u30FC\u30BF\u306E\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F</div>
              <div class="err-detail">${m(r?.message||String(r))}</div>
              <button class="btn primary" type="button" data-load-full-data="${m(t)}">\u518D\u8AAD\u307F\u8FBC\u307F</button>
            </div>
          `,o.querySelector("[data-load-full-data]")?.addEventListener("click",()=>{ee(t,{autoLoad:!0})}));return}}else{Tu(t,{initial:e.initial});return}let i=++Ao;try{let r=await Mu(t);if(i!==Ao||t!==u.activeTab||!u.data)return;t==="songs"&&hr(u.data.songs||[]),r()}catch(r){console.error(`[${t}] render failed`,r);let o=d(`#panel-${t}`);o&&(o.innerHTML=`
        <div class="state-card">
          <div class="msg">\u8868\u793A\u306B\u5931\u6557\u3057\u307E\u3057\u305F</div>
          <div class="err-detail">${m(r?.message||String(r))}</div>
        </div>
      `)}}function mt(t,e={}){oi(t)||(t="dashboard");let s=d("#stream-viewer");if(t!=="player"&&s&&!s.hidden&&!pt&&!At(s)){cs=t,$n=e,os();return}u.activeTab=t,ci(t),e.updateUrl!==!1&&et({tab:t}),ee(t,{autoLoad:e.autoLoad!==!1,initial:!!e.initial})}function ci(t){W(".tab-btn").forEach(n=>{let a=n.dataset.tab===t;n.classList.toggle("active",a),n.setAttribute("aria-selected",a?"true":"false")}),W(".mobile-tab-item").forEach(n=>{let a=n.dataset.mobileTab===t;n.classList.toggle("is-active",a),n.setAttribute("aria-current",a?"page":"false")});let e=d("#mobile-tab-current"),s=d(`.tab-btn[data-tab="${t}"] span:last-child`)?.textContent?.trim();e&&s&&(e.textContent=s),W(".panel").forEach(n=>n.classList.toggle("active",n.id===`panel-${t}`)),document.body.dataset.activeTab=t,kn(t==="playlists")}function kn(t){let e=d("nav.tabs"),s=d(".topbar");e&&(t?(e.style.display="none",document.body.style.paddingLeft="0",s&&(s.style.left="0",s.style.width="100%")):(e.style.display="",document.body.style.paddingLeft="",s&&(s.style.left="",s.style.width="")))}function Iu(){let t=d("#db-sidebar-toggle"),e="kanau-sidebar-collapsed",s=r=>{document.body.classList.toggle("sidebar-collapsed",r),t?.setAttribute("aria-pressed",r?"true":"false");let o=r?"\u30E1\u30CB\u30E5\u30FC\u3092\u5C55\u958B":"\u30E1\u30CB\u30E5\u30FC\u3092\u6298\u308A\u7573\u3080";t?.setAttribute("title",o),t?.setAttribute("aria-label",o);try{localStorage.setItem(e,r?"1":"0")}catch{}};try{s(localStorage.getItem(e)==="1")}catch{s(!1)}t?.addEventListener("click",()=>{s(!document.body.classList.contains("sidebar-collapsed"))});let n=d("#db-profile-button"),a=d("#db-profile-menu"),i=r=>{!a||!n||(a.hidden=!r,n.setAttribute("aria-expanded",r?"true":"false"))};n?.addEventListener("click",r=>{r.stopPropagation(),i(a?.hidden??!0)}),a?.querySelector("[data-ch-modal]")?.addEventListener("click",()=>{i(!1)}),document.addEventListener("click",r=>{!a||a.hidden||r.target.closest?.("#db-profile-menu, #db-profile-button")||i(!1)}),document.addEventListener("keydown",r=>{r.key==="Escape"&&i(!1)})}function Ft(t){return u.channelData?t==="all"?u.channelData.combined:u.channelData.channels[t]||null:null}function Sn(t,e={}){let s=Ft(t);s&&(u.channel=t,kp(t),u.data=s,u.timelineFilter=null,u.timelineFocus=null,u.timelineLimit=12,u.songsLimit=100,e.resetSearch!==!1&&(u.songsQuery="",u.songsGenre="all"),$a(),W("#channel-switch [data-channel]").forEach(n=>n.classList.toggle("active",n.dataset.channel===t)),di(),e.updateUrl!==!1&&et({tab:u.activeTab,channel:t,q:u.songsQuery}),bp(),e.render!==!1&&ee(u.activeTab,{autoLoad:e.autoLoad!==!1,initial:!!e.initial}))}function Au(t,e={}){u.audience=t==="singer"?"singer":"listener",u.singerMode=u.audience==="singer",u.singerMode||(u.singerPreset="all"),W(".audience-switch [data-audience]").forEach(s=>{s.classList.toggle("active",s.dataset.audience===u.audience)}),document.body.dataset.audience=u.audience,di(),u.audience==="singer"?(u.songsLimit=100,mt("songs",{autoLoad:e.autoLoad!==!1})):u.data&&ee(u.activeTab,{autoLoad:e.autoLoad!==!1,initial:!!e.initial})}function di(){let t=d("#mobile-menu-label");if(!t)return;let e=d("#channel-switch [data-channel].active")?.textContent?.trim()||"\u65B0ch",s=d("#audience-switch [data-audience].active")?.textContent?.trim()||"\u30EA\u30B9\u30CA\u30FC";t.textContent=`${e} / ${s}`}function Pu(){let t=d("#mobile-menu-toggle"),e=d("#mobile-menu-state"),s=d("#topbar-actions");if(!t||!e||!s)return;let n=i=>{e.checked=i,s.classList.toggle("is-open",i),t.setAttribute("aria-expanded",String(i))},a=()=>{n(!1),t.focus()};t.addEventListener("click",i=>{i.stopPropagation(),requestAnimationFrame(()=>n(e.checked))}),t.addEventListener("keydown",i=>{i.key!=="Enter"&&i.key!==" "||(i.preventDefault(),n(!e.checked))}),e.addEventListener("change",()=>{n(e.checked)}),document.addEventListener("click",i=>{s.classList.contains("is-open")&&(i.target.closest("#topbar-actions")||i.target.closest("#mobile-menu-toggle")||i.target.closest("#mobile-menu-state")||a())}),document.addEventListener("keydown",i=>{i.key==="Escape"&&a()}),s.addEventListener("click",i=>{i.stopPropagation()}),di()}function Du(){let t=d("#mobile-tab-nav"),e=d("#mobile-tab-toggle"),s=d("#mobile-tab-panel");if(!t||!e||!s)return;let n=a=>{s.hidden=!a,t.classList.toggle("is-open",a),document.body.classList.toggle("has-mobile-tab-open",a),e.setAttribute("aria-expanded",String(a))};e.addEventListener("click",a=>{a.stopPropagation(),n(s.hidden)}),s.addEventListener("click",a=>{let i=a.target.closest("[data-mobile-tab]");if(!i)return;let r=i.dataset.mobileTab;n(!1),mt(r),document.querySelector(".tabs")?.scrollIntoView({behavior:"smooth",block:"start"})}),document.addEventListener("click",a=>{s.hidden||a.target.closest("#mobile-tab-nav")||n(!1)}),document.addEventListener("keydown",a=>{a.key==="Escape"&&n(!1)}),ci(u.activeTab||"dashboard")}function Hu(){let t=d("#page-top-toast");if(!t)return;let e=t.querySelector("img[data-src]"),s=!1,n=420,a=()=>{!e||e.src||(e.src=e.dataset.src||"")},i=()=>{s=!1;let o=window.scrollY>n;o&&a(),t.hidden=!o,t.classList.toggle("is-visible",o),t.setAttribute("aria-hidden",String(!o)),t.tabIndex=o?0:-1},r=()=>{s||(s=!0,requestAnimationFrame(i))};t.hidden=!0,t.setAttribute("aria-hidden","true"),t.tabIndex=-1,t.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),window.addEventListener("scroll",r,{passive:!0}),i()}function Nu(){if(u.channelData)for(let t of W("#channel-switch [data-channel]")){let e=t.dataset.channel,s=e==="all"?!!u.channelData.combined:!!(u.channelData.channels&&u.channelData.channels[e]);t.disabled=!s,s?t.removeAttribute("title"):t.title="\u30C7\u30FC\u30BF\u3092\u53D6\u5F97\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F"}}function qu({key:t,title:e,artist:s}){u.timelineFilter&&u.timelineFilter.key===t&&u.activeTab==="timeline"?u.timelineFilter=null:u.timelineFilter={key:t,title:e,artist:s},u.timelineFocus=null,u.timelineLimit=12,mt("timeline"),d("#panel-timeline").scrollIntoView({behavior:"smooth",block:"start"})}function Ru(t,e){u.timelineFilter={key:t.key,title:t.title,artist:t.artist},u.timelineFocus=z(e),u.timelineLimit=9999,mt("timeline"),d("#panel-timeline").scrollIntoView({behavior:"smooth",block:"start"})}function Bu(t){ui(t.artist||"")}function ui(t){let e=String(t||"").replace(/"/g,"");u.songsQuery=e?`artist:"${e}"`:"",u.songsLimit=100,et({tab:"songs",q:u.songsQuery}),mt("songs",{updateUrl:!1})}function gn(t){return(u.data?.songs||[]).find(e=>e.key===t)||null}function Oo(){return window.matchMedia("(max-width: 700px)").matches}function jo(t,e=0){let s=String(t||""),n=P(s);if(!n)return s;let a=Math.max(0,Math.floor(Number(e)||0));return`https://www.youtube.com/watch?v=${n}${a>0?`&t=${a}s`:""}`}function Yo(t){let e=P(t);return e?`https://i.ytimg.com/vi/${e}/default.jpg`:""}function ls(){bn&&(clearInterval(bn),bn=null)}function pi(){ls(),bn=setInterval(()=>{if(O(),!!M)try{let t=M.getDuration?.()||0,e=M.getCurrentTime?.()||0;X&&Yu(X,e);let s=t>0?Math.min(e/t*100,100):0,n=d("#yt-mini-progress-fill");n&&(n.style.width=`${s}%`);let i=M.getPlayerState?.()===window.YT?.PlayerState?.PLAYING,r=d("#yt-mini-play");r&&r.setAttribute("data-playing",i?"1":"0")}catch{}},400)}function _e(){if(ls(),M){try{M.destroy()}catch{}M=null}let t=d("#yt-player-container");t&&(t.innerHTML="")}function Vu(){if(M?.getCurrentTime)try{return M.getCurrentTime()}catch{}return Math.max(0,is+(Date.now()-vi)/1e3)}function At(t=d("#stream-viewer")){return!!t&&(t.classList.contains("sv-minified")||t.classList.contains("sv-music-minified"))}function O(){let t=d("#stream-viewer");if(!At(t))return;let e=d("#sv-player-wrap"),s=t.classList.contains("sv-music-minified")?document.querySelector("#music-bar .mbar-video-wrap"):document.querySelector("#yt-player-panel .yt-mini-video-wrap");if(!e||!s)return;let n=s.getBoundingClientRect();e.style.left=`${n.left}px`,e.style.top=`${n.top}px`,e.style.width=`${n.width}px`,e.style.height=`${n.height}px`}function Fu(){let t=d("#stream-viewer"),e=t?._currentStream;if(!t||!e||!k)return!1;hi();let s=d("#yt-player-panel");if(!s)return!1;X=e;try{is=Math.floor(k.getCurrentTime?.()??0)}catch{is=0}vi=Date.now();let n=d("#yt-mini-title");n&&(n.textContent=e.title||"");let a=d("#yt-mini-hint");a&&(a.textContent="\u25B2 \u30BF\u30C3\u30D7\u3057\u3066\u914D\u4FE1\u30D3\u30E5\u30FC\u30EF\u30FC\u3078\u623B\u308B"),s.classList.add("has-stream"),s.hidden=!1,M=k,k=null,t.classList.add("sv-minified"),document.body.classList.add("has-sv-mini"),document.body.style.overflow="",Ln(),yt(),O(),requestAnimationFrame(O),setTimeout(O,120),setTimeout(O,400),window.addEventListener("resize",O),pi();try{let i=M.getPlayerState?.();d("#yt-mini-play")?.setAttribute("data-playing",i===window.YT?.PlayerState?.PLAYING?"1":"0")}catch{}return Le(d("#yt-mini-vol-slider"),d("#yt-mini-vol-btn"),null,Xt()),!0}function zo(){let t=d("#stream-viewer");if(!t?.classList.contains("sv-minified"))return!1;window.removeEventListener("resize",O),ls(),t.classList.remove("sv-minified"),document.body.classList.remove("has-sv-mini");let e=d("#sv-player-wrap");e&&(e.style.cssText=""),k=M,M=null;let s=d("#yt-player-panel");return s&&(s.hidden=!0),gi(),yt(),setTimeout(()=>{d("#sv-close")?.focus({preventScroll:!0})},50),!0}function Ko(){let t=d("#stream-viewer");if(!t?.classList.contains("sv-music-minified"))return!1;window.removeEventListener("resize",O),ls(),t.classList.remove("sv-music-minified"),document.body.classList.remove("has-sv-music");let e=d("#sv-player-wrap");return e&&(e.style.cssText=""),k=M,M=null,gi(),yt(),setTimeout(()=>{d("#sv-close")?.focus({preventScroll:!0})},50),!0}function Uo(){let t=d("#stream-viewer");if(!t?.classList.contains("sv-music-minified"))return!1;window.removeEventListener("resize",O),ls(),Te(),++_t,t.classList.remove("sv-music-minified"),document.body.classList.remove("has-sv-music"),t.hidden=!0,t._currentStream=null;let e=d("#sv-player-wrap");return e&&(e.style.cssText="",e.innerHTML=""),_e(),X=null,yt(),!0}function Ou(){let t=d("#stream-viewer"),e=t?._currentStream;if(!t||t.hidden||!e?.url)return;let s=mi(St().t),n={...e,title:e.title||(e.isMv?"\u52D5\u753B":"\u6B4C\u67A0"),type:e.isMv?e.type||"original":"stream",sub:e.isMv?e.originalArtist||e.character||e.sub||"":`${T(e.date)} \u7B2C${e.index}\u67A0`,_stream:e};if(!k){Promise.resolve().then(()=>(Wt(),Qt)).then(i=>i.playMusicBarVideo?.(n,s)).catch(()=>{});return}try{is=Math.floor(k.getCurrentTime?.()??s)}catch{is=s}vi=Date.now(),M=k,k=null,X=null,pt=!1,t.classList.remove("sv-fullscreen","sv-minified"),t.classList.add("sv-music-minified"),document.body.classList.remove("has-sv-fullscreen","has-sv-mini"),document.body.classList.add("has-sv-music"),document.body.style.overflow="",t.hidden=!1;let a=d("#yt-player-panel");a&&(a.hidden=!0),Ln(),yt(),O(),requestAnimationFrame(O),setTimeout(O,120),setTimeout(O,400),window.addEventListener("resize",O),pi(),Promise.resolve().then(()=>(Wt(),Qt)).then(i=>{i.adoptExternalPlayer?.(n,M,{restore:Ko,close:Uo}),O(),requestAnimationFrame(O),setTimeout(O,120),setTimeout(O,400)}).catch(()=>{})}function xn(){let t=d("#stream-viewer");if(t?.classList.contains("sv-music-minified"))return Uo();if(!t?.classList.contains("sv-minified"))return!1;window.removeEventListener("resize",O),Te(),++_t,t.classList.remove("sv-minified"),document.body.classList.remove("has-sv-mini"),t.hidden=!0,t._currentStream=null;let e=d("#sv-player-wrap");e&&(e.style.cssText="",e.innerHTML=""),_e();let s=d("#yt-player-panel");return s&&(s.hidden=!0),X=null,kn(document.body.dataset.activeTab==="playlists"),yt(),!0}var Go="kanau-watch-history-v1",Po=0;function ju(){try{return JSON.parse(localStorage.getItem(Go)||"[]")}catch{return[]}}function Qo(t,e){if(!(!t?.url||e<10))try{let s=ju().filter(n=>n.url!==t.url);s.unshift({url:t.url,title:t.title||"",t:Math.max(0,Math.floor(e)),isMv:!!t.isMv,channel:t.channel??null,index:t.index??null,date:t.date??null,updatedAt:Date.now()}),localStorage.setItem(Go,JSON.stringify(s.slice(0,10)))}catch{}}function Yu(t,e){let s=Date.now();s-Po<5e3||(Po=s,Qo(t,e))}var ss=null;function mi(t=0){let e=[k,M];for(let s of e)try{let n=s?.getCurrentTime?.();if(Number.isFinite(n))return Math.max(0,Math.floor(n))}catch{}return Math.max(0,Math.floor(Number(t)||0))}function zu(t,e=0,s={}){if(!t)return"";let n=St(),a=new URLSearchParams,i=n.channel||u.channel;return i&&i!=="new"&&a.set("ch",i),a.set("v",t),s.includeTime!==!1&&e>5&&a.set("t",String(Math.floor(e))),`${location.origin}${location.pathname}?${a}`}function yt(){let t=d("#stream-viewer"),s=t&&!t.hidden&&!At(t)&&t._currentStream?.url?P(t._currentStream.url):"",n=s?mi(St().t):0;et({v:s||"",t:n>5?n:0},{replace:!0}),s&&Qo(t._currentStream,n),s&&!ss&&(ss=setInterval(yt,5e3)),!s&&ss&&(clearInterval(ss),ss=null)}function Ku(){if(d("#sv-share-modal"))return;let t=document.createElement("div");t.id="sv-share-modal",t.hidden=!0,t.innerHTML=`
    <div class="sv-share-backdrop"></div>
    <div class="sv-share-dialog" role="dialog" aria-modal="true" aria-label="\u52D5\u753B\u3092\u5171\u6709">
      <div class="sv-share-head">
        <span class="sv-share-head-icon">${b("heart")}</span>
        <span class="sv-share-head-title">\u3053\u306E\u6B4C\u67A0\u3092\u304A\u3059\u305D\u308F\u3051</span>
        <button class="sv-share-close" id="sv-share-close" type="button" aria-label="\u9589\u3058\u308B">${b("close")}</button>
      </div>
      <div class="sv-share-charm" aria-hidden="true">
        <span></span><span></span><span></span>
      </div>
      <div class="sv-share-video">
        <span class="sv-share-video-icon">\u266A</span>
        <span class="sv-share-video-title" id="sv-share-video-title"></span>
      </div>
      <label class="sv-share-ts" id="sv-share-ts-row">
        <input type="checkbox" id="sv-share-ts-check">
        <span class="sv-share-ts-toggle" aria-hidden="true"></span>
        <span class="sv-share-ts-text"><strong id="sv-share-ts-label">0:00</strong> \u304B\u3089\u8074\u3044\u3066\u3082\u3089\u3046</span>
      </label>
      <div class="sv-share-url-row">
        <input class="sv-share-url" id="sv-share-url" type="text" readonly aria-label="\u5171\u6709\u30EA\u30F3\u30AF">
        <button class="sv-share-copy" id="sv-share-copy" type="button">\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC</button>
      </div>
      <div class="sv-share-sns">
        <a class="sv-share-sns-btn sv-share-x" id="sv-share-x" href="#" target="_blank" rel="noopener">X\u306B\u306E\u305B\u308B</a>
        <a class="sv-share-sns-btn sv-share-line" id="sv-share-line" href="#" target="_blank" rel="noopener">LINE\u3067\u9001\u308B</a>
        <button class="sv-share-sns-btn sv-share-native" id="sv-share-native" type="button" hidden>\u307B\u304B\u306B\u3082\u5171\u6709</button>
      </div>
      <div class="sv-share-foot">\u597D\u304D\u306A\u3068\u3053\u308D\u304B\u3089\u3001\u305D\u3063\u3068\u5C4A\u3051\u3089\u308C\u307E\u3059</div>
    </div>`,document.body.appendChild(t);let e=()=>{t.hidden=!0};t.querySelector(".sv-share-backdrop").addEventListener("click",e),d("#sv-share-close").addEventListener("click",e),document.addEventListener("keydown",a=>{a.key==="Escape"&&!t.hidden&&(a.preventDefault(),a.stopPropagation(),e())},{capture:!0});let s=()=>{let a=t._shareState;if(!a)return;let i=d("#sv-share-ts-check")?.checked&&a.t>0,r=zu(a.id,a.t,{includeTime:i}),o=d("#sv-share-url");o&&(o.value=r);let l=a.title?`${a.title}`:"\u5922\u5DDD\u304B\u306A\u3046 \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9",c=d("#sv-share-x");c&&(c.href=`https://twitter.com/intent/tweet?text=${encodeURIComponent(l)}&url=${encodeURIComponent(r)}`);let p=d("#sv-share-line");return p&&(p.href=`https://line.me/R/share?text=${encodeURIComponent(`${l}
${r}`)}`),r};d("#sv-share-ts-check").addEventListener("change",s),t._rebuild=s,d("#sv-share-url").addEventListener("focus",a=>a.target.select()),d("#sv-share-copy").addEventListener("click",async()=>{let a=d("#sv-share-url")?.value;if(!a)return;let i=!1;try{await navigator.clipboard.writeText(a),i=!0}catch{try{d("#sv-share-url").select(),i=document.execCommand("copy")}catch{}}let r=d("#sv-share-copy");r&&(r.textContent=i?"\u30B3\u30D4\u30FC\u3067\u304D\u307E\u3057\u305F":"\u30B3\u30D4\u30FC\u3067\u304D\u307E\u305B\u3093",r.classList.add("copied"),setTimeout(()=>{r.textContent="\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC",r.classList.remove("copied")},1600))});let n=d("#sv-share-native");navigator.share&&n&&(n.hidden=!1,n.addEventListener("click",async()=>{let a=t._shareState,i=d("#sv-share-url")?.value;if(i)try{await navigator.share({title:a?.title||"",url:i})}catch{}}))}function Uu(){let e=d("#stream-viewer")?._currentStream;if(!e?.url)return;let s=P(e.url);if(!s)return;Ku();let n=d("#sv-share-modal"),a=mi(St().t);n._shareState={id:s,t:a,title:e.title||""};let i=d("#sv-share-video-title");i&&(i.textContent=e.title||"(\u30BF\u30A4\u30C8\u30EB\u306A\u3057)");let r=d("#sv-share-ts-row"),o=d("#sv-share-ts-check"),l=d("#sv-share-ts-label");r&&(r.hidden=a<=5),o&&(o.checked=a>5),l&&(l.textContent=It(a)),n._rebuild?.(),n.hidden=!1}var Do=new URLSearchParams(location.search).get("pl");async function Gu(){if(!Do)return;let t=null;try{let n=Do.replace(/-/g,"+").replace(/_/g,"/"),a=Uint8Array.from(atob(n),i=>i.charCodeAt(0));t=JSON.parse(new TextDecoder().decode(a))}catch{return}if(!t||typeof t.n!="string"||!Array.isArray(t.s))return;let e=t.n.slice(0,60)||"\u5171\u6709\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8",s=t.s.filter(n=>typeof n=="string"&&n.length<100).slice(0,300);if(s.length){if(!confirm(`\u5171\u6709\u3055\u308C\u305F\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u300C${e}\u300D\uFF08${s.length}\u4EF6\uFF09\u3092\u53D6\u308A\u8FBC\u307F\u307E\u3059\u304B\uFF1F`)){et({},{replace:!0});return}try{let n=await Promise.resolve().then(()=>(ke(),es)),a=n.createPlaylist(e);for(let i of s)n.addStreamToPlaylist(a.id,i);et({tab:"playlists"},{replace:!0}),mt("playlists",{updateUrl:!1})}catch{}}}async function Qu(){let t=St();if(!t.v)return!1;let e=t.v,s=t.t;try{await li()}catch{}let n=[];u.channelData?.combined&&n.push(u.channelData.combined),Object.values(u.channelData?.channels||{}).forEach(a=>{a&&n.push(a)});for(let a of n){let i=(a.streams||[]).find(r=>P(r.url)===e);if(i)return V(i,s),!0}try{let r=((await(await fetch("data/music.json")).json())?.videos||[]).find(o=>P(o.url)===e);if(r)return V({url:r.url,title:r.title,isMv:!0},s),!0}catch{}return V({url:`https://www.youtube.com/watch?v=${e}`,title:"",isMv:!0},s),!0}function Wu(t,e=0,s=""){let n=P(t);if(!n)return;if(Oo()){window.open(jo(t,e),"_blank","noopener");return}{let l=d("#stream-viewer");if(l&&!l.hidden&&!pt)if(At(l))xn();else{++_t,l.hidden=!0,l._currentStream=null,k=null;let c=d("#sv-player-wrap");c&&(c.innerHTML=""),document.body.style.overflow="",X=null,$n={},Ln(),yt()}}fi(),hi();let a=d("#yt-player-container"),i=d("#yt-player-panel");if(!a||!i)return;_e();let r=d("#yt-mini-title");r&&(r.textContent=s||"\u30A4\u30F3\u30E9\u30A4\u30F3\u518D\u751F");let o=d("#yt-mini-hint");o&&(o.textContent=X?"\u25B2 \u30BF\u30C3\u30D7\u3057\u3066\u914D\u4FE1\u30D3\u30E5\u30FC\u30EF\u30FC\u3078\u623B\u308B":""),i.classList.toggle("has-stream",!!X),i.hidden=!1,Zo(()=>{let l=document.createElement("div");a.appendChild(l);try{M=new window.YT.Player(l,{videoId:n,width:"100%",height:"100%",playerVars:{autoplay:1,playsinline:1,rel:0,controls:0,disablekb:1,modestbranding:1,...e>0?{start:Math.floor(e)}:{}},events:{onReady:c=>{let p=Xt();try{c.target.setVolume(p)}catch{}if(Le(d("#yt-mini-vol-slider"),d("#yt-mini-vol-btn"),null,p),e>5)try{c.target.seekTo(e,!0)}catch{}pi()},onStateChange:c=>{let p=c.data===window.YT.PlayerState.PLAYING,h=d("#yt-mini-play");h&&h.setAttribute("data-playing",p?"1":"0")}}})}catch{let p=e>0?`&start=${Math.floor(e)}`:"";a.innerHTML=`<iframe src="https://www.youtube.com/embed/${n}?autoplay=1&playsinline=1${p}" frameborder="0" allowfullscreen allow="autoplay; encrypted-media; picture-in-picture"></iframe>`}})}function hi(){if(d("#yt-player-panel"))return;let t=document.createElement("div");t.id="yt-player-panel",t.hidden=!0,t.innerHTML=`
    <div class="yt-mini-video-wrap">
      <div id="yt-player-container"></div>
    </div>
    <div class="yt-mini-progress-wrap">
      <div class="yt-mini-progress-bar" id="yt-mini-progress-bar" title="\u30AF\u30EA\u30C3\u30AF\u3067\u30B7\u30FC\u30AF">
        <div class="yt-mini-progress-fill" id="yt-mini-progress-fill"></div>
      </div>
    </div>
    <div class="yt-mini-bar">
      <button class="yt-mini-play-btn" id="yt-mini-play" type="button" data-playing="0" aria-label="\u518D\u751F/\u505C\u6B62"></button>
      <button class="yt-mini-info yt-mini-restore" id="yt-mini-restore" type="button" aria-label="\u914D\u4FE1\u30D3\u30E5\u30FC\u30EF\u30FC\u3078\u623B\u308B">
        <span class="yt-mini-stream-title" id="yt-mini-title">\u30A4\u30F3\u30E9\u30A4\u30F3\u518D\u751F</span>
        <span class="yt-mini-hint" id="yt-mini-hint"></span>
      </button>
      <div class="yt-mini-vol-wrap">
        <button class="vol-btn" id="yt-mini-vol-btn" type="button" aria-label="\u97F3\u91CF">${b("volume")}</button>
        <input class="vol-slider" id="yt-mini-vol-slider" type="range" min="0" max="100" value="100" aria-label="\u97F3\u91CF">
      </div>
      <button id="yt-player-close" type="button" class="yt-mini-close-btn" aria-label="\u9589\u3058\u308B">${b("close")}</button>
    </div>
  `,document.body.appendChild(t),d("#yt-player-close").addEventListener("click",()=>{t.hidden=!0,!xn()&&(_e(),X=null)}),d("#yt-mini-play").addEventListener("click",()=>{if(M)try{M.getPlayerState?.()===window.YT?.PlayerState?.PLAYING?M.pauseVideo():M.playVideo()}catch{}}),d("#yt-mini-restore").addEventListener("click",()=>{zo()||X&&V(X,Vu())}),d("#yt-mini-progress-bar").addEventListener("click",n=>{if(!M)return;let i=n.currentTarget.getBoundingClientRect(),r=Math.max(0,Math.min(1,(n.clientX-i.left)/i.width));try{let o=M.getDuration?.()||0;o>0&&M.seekTo(r*o,!0)}catch{}});let e=d("#yt-mini-vol-slider"),s=d("#yt-mini-vol-btn");if(e){let n=Xt();e.value=n,e.style.setProperty("--pct",`${n}%`),s&&(s.innerHTML=as(n)),e.addEventListener("input",a=>{let i=parseInt(a.target.value);if(a.target.style.setProperty("--pct",`${i}%`),ii(i),s&&(s.innerHTML=as(i)),M)try{M.setVolume(i)}catch{}})}if(s){let n=80;s.addEventListener("click",()=>{if(!e)return;let a=parseInt(e.value),i=a>0?0:n||80;a>0&&(n=a),Le(e,s,M,i)})}}var Wo=!1,Jo=[];window.onYouTubeIframeAPIReady=()=>{Wo=!0,Jo.splice(0).forEach(t=>t()),Promise.resolve().then(()=>(Wt(),Qt)).then(t=>t.notifyYtReady()).catch(()=>{})};function fi(){if(document.getElementById("yt-iframe-api-script"))return;let t=document.createElement("script");t.id="yt-iframe-api-script",t.src="https://www.youtube.com/iframe_api",document.head.appendChild(t)}function Zo(t){if(Wo&&window.YT?.Player){t();return}Jo.push(t)}var Xt=()=>Math.max(0,Math.min(100,parseInt(localStorage.getItem("kanaVol")??"100")||100)),ii=t=>localStorage.setItem("kanaVol",String(t)),as=()=>b("volume");function Le(t,e,s,n){if(t&&(t.value=n,t.style.setProperty("--pct",`${n}%`)),e&&(e.innerHTML=as(n)),s)try{s.setVolume(n)}catch{}}var k=null,_t=0,X=null,is=0,vi=0,pt=!1,cs="timeline",$n={},ot={},si=new Map,Et=!1,Ct=!1,M=null,bn=null,yn=null,Xo="kanauViewerSetlistCollapsed",Tt=!1;function gi(){cs=u.activeTab||"timeline",u.activeTab="player",W(".tab-btn").forEach(t=>{t.classList.remove("active"),t.setAttribute("aria-selected","false")}),W(".panel").forEach(t=>t.classList.toggle("active",t.id==="panel-player")),document.body.dataset.activeTab="player"}function Ln(){let t=$n;$n={},mt(cs||"timeline",t)}function Ju(){pt=!0;let t=d("#stream-viewer");if(!t)return;t.classList.add("sv-fullscreen"),document.body.classList.add("has-sv-fullscreen"),document.body.style.overflow="hidden";let e=d("#sv-close");e&&(e.title="\u901A\u5E38\u8868\u793A\u306B\u623B\u308B\uFF08Esc\uFF09");let s=d("#sv-fullscreen-btn");s&&s.setAttribute("aria-pressed","true")}function It(t){let e=Math.floor(t),s=Math.floor(e/3600),n=Math.floor(e%3600/60),a=e%60;return s>0?`${s}:${String(n).padStart(2,"0")}:${String(a).padStart(2,"0")}`:`${n}:${String(a).padStart(2,"0")}`}function tl(t){return`kanau-ts-${t.channel||""}-${t.index||""}`}function te(t){try{return JSON.parse(localStorage.getItem(tl(t))||"null")||{}}catch{return{}}}function ni(t,e){try{localStorage.setItem(tl(t),JSON.stringify(e))}catch{}}var Ot=-1;function Zu(t,e,s,n){let a=e===n,i=s[e],r=i!=null?`<button class="sv-ts-badge" data-idx="${e}" data-action="seek" title="${m(It(i))} \u306B\u79FB\u52D5">${m(It(i))}</button><button class="sv-ts-del" data-idx="${e}" data-action="del-ts" aria-label="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u524A\u9664">${b("close")}</button>`:"",l=(ot[e]||[]).map(h=>`<button class="sv-cts-badge" data-idx="${e}" data-action="cts-seek" data-cts-seconds="${h.timeSeconds}" title="\u307F\u3093\u306A\u306E\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7: ${m(It(h.timeSeconds))}">${m(It(h.timeSeconds))}</button>`).join(""),c=`<button class="sv-cts-propose" data-idx="${e}" data-action="cts-propose" type="button">+ \u63D0\u6848</button>`,p=`<div class="sv-cts-row">${l}${c}</div>`;return`<div class="sv-song${a?" is-current":""}" data-idx="${e}">
    <span class="sv-song-num">${e+1}</span>
    <div class="sv-song-info">
      <span class="sv-song-title">${m(t.title)}</span>
      <span class="sv-song-artist">${m(t.artist)}</span>
    </div>
    <div class="sv-song-actions">${r}<button class="sv-ts-set" data-idx="${e}" data-action="set-ts" title="\u73FE\u5728\u306E\u518D\u751F\u6642\u523B\u3092\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306B\u8A18\u9332">${b("time")} \u30E1\u30E2</button></div>
    ${p}
  </div>`}async function Xu(t){if(ot={},!t?.channel||t?.index==null)return;let e=`${t.channel}:${t.index}`;if(si.has(e)){ot=si.get(e)||{};let a=d("#stream-viewer");if(!a||a._currentStream!==t)return;let i=d("#sv-setlist");i&&xe(i,t.songs,te(t),Ot),Ho(t);return}try{let a=`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,i=await fetch(a);if(!i.ok)return;let r=await i.json();for(let o of r.items||[])ot[o.songIndex]||(ot[o.songIndex]=[]),ot[o.songIndex].push({timeSeconds:o.timeSeconds,note:o.note??null});si.set(e,ot)}catch{}let s=d("#stream-viewer");if(!s||s._currentStream!==t)return;let n=d("#sv-setlist");n&&xe(n,t.songs,te(t),Ot),Ho(t)}function tp(t,e,s){d("#sv-cts-modal")?.remove();let n=k?.getCurrentTime?.()??0,a=It(Math.floor(n)),i=document.createElement("div");i.id="sv-cts-modal",i.className="sv-cts-modal-overlay",i.innerHTML=`
    <div class="sv-cts-modal-box" role="dialog" aria-modal="true" aria-label="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u63D0\u6848">
      <div class="sv-cts-modal-head">
        <span class="sv-cts-modal-title">\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u63D0\u6848</span>
        <button class="sv-cts-modal-close" type="button" aria-label="\u9589\u3058\u308B">${b("close")}</button>
      </div>
      <p class="sv-cts-modal-song">${m(s)}</p>
      <label class="sv-cts-modal-label">
        \u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\uFF08MM:SS \u307E\u305F\u306F H:MM:SS\uFF09
        <input class="sv-cts-modal-input" id="sv-cts-ts-input" type="text" value="${m(a)}" placeholder="0:00" autocomplete="off">
      </label>
      <label class="sv-cts-modal-label">
        \u30B3\u30E1\u30F3\u30C8\uFF08\u4EFB\u610F\u30FB200\u6587\u5B57\u4EE5\u5185\uFF09
        <input class="sv-cts-modal-input" id="sv-cts-note-input" type="text" maxlength="200" placeholder="">
      </label>
      <p class="sv-cts-modal-hint">\u63D0\u6848\u306F\u7BA1\u7406\u8005\u306E\u5BE9\u67FB\u5F8C\u306B\u516C\u958B\u3055\u308C\u307E\u3059\u3002</p>
      <div class="sv-cts-modal-btns">
        <button class="sv-cts-modal-submit" id="sv-cts-submit" type="button">\u63D0\u6848\u3059\u308B</button>
        <button class="sv-cts-modal-cancel" type="button">\u30AD\u30E3\u30F3\u30BB\u30EB</button>
      </div>
      <p class="sv-cts-modal-status" id="sv-cts-status" hidden></p>
    </div>
  `,document.body.appendChild(i);let r=()=>i.remove();i.querySelector(".sv-cts-modal-close").addEventListener("click",r),i.querySelector(".sv-cts-modal-cancel").addEventListener("click",r),i.addEventListener("click",o=>{o.target===i&&r()}),i.querySelector("#sv-cts-submit").addEventListener("click",async()=>{let o=i.querySelector("#sv-cts-ts-input").value.trim(),l=i.querySelector("#sv-cts-note-input").value.trim()||null,c=ki(o),p=i.querySelector("#sv-cts-status");if(c===null){p.textContent="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306E\u5F62\u5F0F\u304C\u6B63\u3057\u304F\u3042\u308A\u307E\u305B\u3093\uFF08\u4F8B: 1:23 \u307E\u305F\u306F 1:23:45\uFF09",p.className="sv-cts-modal-status error",p.hidden=!1;return}let h=i.querySelector("#sv-cts-submit");h.disabled=!0,h.textContent="\u9001\u4FE1\u4E2D\u2026";try{let v=await fetch(`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({songIndex:e,timeSeconds:c,submitterNote:l})});if(v.ok)p.textContent="\u63D0\u6848\u3092\u9001\u4FE1\u3057\u307E\u3057\u305F\uFF01\u5BE9\u67FB\u5F8C\u306B\u516C\u958B\u3055\u308C\u307E\u3059\u3002",p.className="sv-cts-modal-status success",p.hidden=!1,h.hidden=!0,i.querySelector(".sv-cts-modal-cancel").textContent="\u9589\u3058\u308B";else{let f=await v.json().catch(()=>({}));p.textContent=`\u9001\u4FE1\u306B\u5931\u6557\u3057\u307E\u3057\u305F: ${f.error||v.statusText}`,p.className="sv-cts-modal-status error",p.hidden=!1,h.disabled=!1,h.textContent="\u63D0\u6848\u3059\u308B"}}catch(v){p.textContent=`\u9001\u4FE1\u306B\u5931\u6557\u3057\u307E\u3057\u305F: ${v.message}`,p.className="sv-cts-modal-status error",p.hidden=!1,h.disabled=!1,h.textContent="\u63D0\u6848\u3059\u308B"}}),setTimeout(()=>i.querySelector("#sv-cts-ts-input")?.focus(),50),document.addEventListener("keydown",function o(l){l.key==="Escape"&&(r(),document.removeEventListener("keydown",o))})}function Ho(t){let e=d("#sv-cts-bulk-btn");if(!e||!t?.songs?.length)return;let n=Object.keys(ot).length>=t.songs.length;e.textContent=n?"\u4FEE\u6B63\u7533\u8ACB":"\u30BB\u30C8\u30EA\u767B\u9332",e.hidden=!1}function ep(t){d("#sv-bulk-modal")?.remove();let e=te(t),a=Object.keys(ot).length>=t.songs.length,i=t.songs.map((l,c)=>{let p=e[c]!=null?It(e[c]):"",h=ot[c]?.[0]?.timeSeconds!=null?It(ot[c][0].timeSeconds):"",v=p||h;return`
      <div class="sv-bulk-row" data-idx="${c}">
        <span class="sv-bulk-num">${c+1}</span>
        <span class="sv-bulk-title" title="${m(l.title)}">${m(l.title)}</span>
        <input class="sv-bulk-ts-input" type="text" value="${m(v)}"
          placeholder="0:00" autocomplete="off" data-bulk-ts-idx="${c}">
        <button class="sv-bulk-ts-now" type="button" title="\u73FE\u5728\u6642\u523B\u3092\u5165\u529B" data-bulk-now="${c}">${b("time")}</button>
      </div>`}).join(""),r=document.createElement("div");r.id="sv-bulk-modal",r.className="sv-cts-modal-overlay",r.innerHTML=`
    <div class="sv-cts-modal-box sv-bulk-modal-box" role="dialog" aria-modal="true"
      aria-label="${a?"\u4FEE\u6B63\u7533\u8ACB":"\u30BB\u30C8\u30EA\u767B\u9332"}">
      <div class="sv-cts-modal-head">
        <span class="sv-cts-modal-title">${a?"\u4FEE\u6B63\u7533\u8ACB":"\u30BB\u30C8\u30EA\u767B\u9332"}</span>
        <button class="sv-cts-modal-close" type="button" aria-label="\u9589\u3058\u308B">${b("close")}</button>
      </div>
      <details class="sv-paste-area">
        <summary class="sv-paste-summary">\u914D\u4FE1\u30B3\u30E1\u30F3\u30C8\u304B\u3089\u4E00\u62EC\u5165\u529B</summary>
        <textarea class="sv-paste-textarea" placeholder="\u914D\u4FE1\u306E\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u30B3\u30E1\u30F3\u30C8\u3092\u8CBC\u308A\u4ED8\u3051&#10;\u4F8B: 23:16\u3000\u5FAE\u304B\u306A\u30AB\u30AA\u30EA / Perfume\u300027:58"></textarea>
        <div class="sv-paste-btns">
          <button class="sv-paste-apply btn ghost" type="button">\u89E3\u6790\u3057\u3066\u5165\u529B</button>
          <span class="sv-paste-result" hidden></span>
        </div>
      </details>
      <p class="sv-bulk-hint">\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u5165\u529B\u3057\u3066\u4E00\u62EC\u7533\u8ACB\u3067\u304D\u307E\u3059\u3002\u7A7A\u6B04\u306E\u66F2\u306F\u30B9\u30AD\u30C3\u30D7\u3055\u308C\u307E\u3059\u3002</p>
      <div class="sv-bulk-rows">${i}</div>
      <label class="sv-cts-modal-label" style="margin-top:10px">
        \u5171\u901A\u30B3\u30E1\u30F3\u30C8\uFF08\u4EFB\u610F\u30FB200\u6587\u5B57\u4EE5\u5185\uFF09
        <input class="sv-cts-modal-input" id="sv-bulk-note" type="text" maxlength="200" placeholder="">
      </label>
      <p class="sv-cts-modal-hint">\u63D0\u6848\u306F\u7BA1\u7406\u8005\u306E\u5BE9\u67FB\u5F8C\u306B\u516C\u958B\u3055\u308C\u307E\u3059\u3002</p>
      <div class="sv-cts-modal-btns">
        <button class="sv-cts-modal-submit" id="sv-bulk-submit" type="button">\u4E00\u62EC\u7533\u8ACB\u3059\u308B</button>
        <button class="sv-cts-modal-cancel" type="button">\u30AD\u30E3\u30F3\u30BB\u30EB</button>
      </div>
      <p class="sv-cts-modal-status" id="sv-bulk-status" hidden></p>
    </div>
  `,document.body.appendChild(r);let o=()=>r.remove();r.querySelector(".sv-cts-modal-close").addEventListener("click",o),r.querySelector(".sv-cts-modal-cancel").addEventListener("click",o),r.addEventListener("click",l=>{l.target===r&&o()}),r.querySelector(".sv-paste-apply").addEventListener("click",()=>{let c=(r.querySelector(".sv-paste-textarea")?.value||"").split(`
`).map(v=>v.trim()).filter(Boolean),p=0;for(let v of c){let f=mp(v);if(!f)continue;let g=vp(f.title,f.artist,t.songs);if(g>=0){let y=r.querySelector(`[data-bulk-ts-idx="${g}"]`);y&&(y.value=f.start,p++)}}let h=r.querySelector(".sv-paste-result");h&&(h.textContent=p>0?`${c.length}\u884C\u3092\u89E3\u6790 \u2192 ${p}\u66F2\u306B\u5165\u529B\u3057\u307E\u3057\u305F`:"\u4E00\u81F4\u3059\u308B\u66F2\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F",h.hidden=!1)}),r.querySelector(".sv-bulk-rows").addEventListener("click",l=>{let c=l.target.closest("[data-bulk-now]");if(!c)return;let p=parseInt(c.dataset.bulkNow,10),h=k?.getCurrentTime?.();if(h!=null){let v=r.querySelector(`[data-bulk-ts-idx="${p}"]`);v&&(v.value=It(Math.floor(h)))}}),r.querySelector("#sv-bulk-submit").addEventListener("click",async()=>{let l=r.querySelector("#sv-bulk-note").value.trim()||null,c=r.querySelector("#sv-bulk-status"),p=r.querySelector("#sv-bulk-submit"),h=[];if(r.querySelectorAll("[data-bulk-ts-idx]").forEach(g=>{let y=parseInt(g.dataset.bulkTsIdx,10),$=ki(g.value.trim());$!==null&&h.push({songIndex:y,timeSeconds:$})}),!h.length){c.textContent="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u304C1\u3064\u3082\u5165\u529B\u3055\u308C\u3066\u3044\u307E\u305B\u3093",c.className="sv-cts-modal-status error",c.hidden=!1;return}p.disabled=!0,p.textContent=`\u7533\u8ACB\u4E2D\u2026 (0/${h.length})`,c.hidden=!0;let v=0,f=0;await Promise.all(h.map(async g=>{try{(await fetch(`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({songIndex:g.songIndex,timeSeconds:g.timeSeconds,submitterNote:l})})).ok?v++:f++}catch{f++}p.textContent=`\u7533\u8ACB\u4E2D\u2026 (${v+f}/${h.length})`})),f===0?(c.textContent=`${v}\u66F2\u5206\u306E\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u7533\u8ACB\u3057\u307E\u3057\u305F\uFF01\u5BE9\u67FB\u5F8C\u306B\u516C\u958B\u3055\u308C\u307E\u3059\u3002`,c.className="sv-cts-modal-status success",p.hidden=!0,r.querySelector(".sv-cts-modal-cancel").textContent="\u9589\u3058\u308B"):(c.textContent=`${v}\u4EF6\u6210\u529F / ${f}\u4EF6\u5931\u6557\u3002\u5931\u6557\u5206\u3092\u518D\u8A66\u884C\u3057\u3066\u304F\u3060\u3055\u3044\u3002`,c.className="sv-cts-modal-status error",p.disabled=!1,p.textContent="\u4E00\u62EC\u7533\u8ACB\u3059\u308B"),c.hidden=!1}),document.addEventListener("keydown",function l(c){c.key==="Escape"&&(o(),document.removeEventListener("keydown",l))})}function sp(){try{return JSON.parse(localStorage.getItem("kanau-playlists")||"null")||[]}catch{return[]}}var bi="kanauViewerQueueCollapsed",R=null,rs=!1;function Me(t){let e=R,s=e?.items?.[t];if(s){e.idx=t,rs=!0;try{s.kind==="mv"?V({url:s.video.url,title:s.video.title,isMv:!0}):V(s.stream)}finally{rs=!1}}}window.__playMyListInViewer=t=>{t?.items?.length&&(R={name:t.name||"\u30DE\u30A4\u30EA\u30B9\u30C8",items:t.items,idx:0,repeat:localStorage.getItem("kanauListRepeat")==="1",collapsed:localStorage.getItem(bi)==="1"},Me(Math.max(0,Math.min(t.idx||0,t.items.length-1))))};window.__openMusicQueueInViewer=(t,e=0,s=0)=>{if(!t?.length)return!1;let n=t.filter(i=>i?.url).map((i,r)=>i._stream?{kind:"stream",key:i._stream.url||`stream:${r}`,stream:i._stream}:{kind:"mv",key:`mv:${P(i.url)||r}`,video:{...i,isMv:!0}});if(!n.length)return!1;R={name:"\u97F3\u697D\u30D7\u30EC\u30A4\u30E4\u30FC\u306E\u30AD\u30E5\u30FC",items:n,idx:Math.max(0,Math.min(e,n.length-1)),repeat:localStorage.getItem("kanauListRepeat")==="1",collapsed:localStorage.getItem(bi)==="1"};let a=R.items[R.idx];rs=!0;try{a.kind==="mv"?V({...a.video,isMv:!0},s):V(a.stream,s)}finally{rs=!1}return!0};function yi(){let t=R;if(!t?.items?.length)return"";let e=t.items[t.idx],s=e?.kind==="mv"?e.video?.title||"\u52D5\u753B":e?.stream?.title||"\u914D\u4FE1";return`
    <div class="sv-bp-section sv-queue-section${t.collapsed?" is-collapsed":""}">
      <div class="sv-bp-sh sv-queue-head">${b("playlist")} ${m(t.name)}
        <span class="sv-bp-sh-sub">\uFF08${t.idx+1} / ${t.items.length}\uFF09</span>
        <span class="sv-queue-current">${m(s)}</span>
        <button class="sv-queue-toggle" type="button"
          data-svq-action="toggle" aria-expanded="${!t.collapsed}"
          title="${t.collapsed?"\u30AD\u30E5\u30FC\u3092\u958B\u304F":"\u30AD\u30E5\u30FC\u3092\u9589\u3058\u308B"}">${t.collapsed?"\u958B\u304F":"\u9589\u3058\u308B"}</button>
        <button class="sv-queue-repeat${t.repeat?" is-on":""}" type="button"
          data-svq-action="repeat" aria-pressed="${t.repeat}"
          title="\u30EA\u30B9\u30C8\u30EA\u30D4\u30FC\u30C8\uFF08ON: \u6700\u5F8C\u307E\u3067\u518D\u751F\u3057\u305F\u3089\u5148\u982D\u3078\u623B\u308B\uFF09">${b("repeat")} \u30EA\u30D4\u30FC\u30C8</button>
      </div>
      <div class="sv-queue-list">
        ${t.items.map((n,a)=>{let i=n.kind==="mv"?n.video?.title||"\u52D5\u753B":n.stream?.title||"\u914D\u4FE1",r=n.kind==="mv"?b("video"):b("calendar"),o=n.kind==="mv"?"\u52D5\u753B":`${T(n.stream?.date)}\u3000\u7B2C${n.stream?.index}\u67A0`;return`<button class="sv-queue-row${a===t.idx?" is-current":""}" type="button"
            data-svq-action="jump" data-svq-idx="${a}">
            <span class="sv-queue-num">${a+1}</span>
            <span class="sv-queue-title">${m(i)}</span>
            <span class="sv-queue-meta">${r} ${m(o)}</span>
          </button>`}).join("")}
      </div>
    </div>`}function el(t){let e=t.target.closest("[data-svq-action]");if(!e||!R)return!1;if(e.dataset.svqAction==="jump"){let s=parseInt(e.dataset.svqIdx,10);return!Number.isNaN(s)&&s!==R.idx&&Me(s),!0}if(e.dataset.svqAction==="repeat"){R.repeat=!R.repeat;try{localStorage.setItem("kanauListRepeat",R.repeat?"1":"0")}catch{}return e.classList.toggle("is-on",R.repeat),e.setAttribute("aria-pressed",String(R.repeat)),!0}if(e.dataset.svqAction==="toggle"){R.collapsed=!R.collapsed;try{localStorage.setItem(bi,R.collapsed?"1":"0")}catch{}let s=e.closest(".sv-queue-section");return s&&(s.outerHTML=yi()),$i(d("#sv-below-player")),!0}return!1}function $i(t){if(R?.collapsed)return;let e=t?.querySelector?.(".sv-queue-list"),s=e?.querySelector(".sv-queue-row.is-current");e&&s&&(e.scrollTop=Math.max(0,s.offsetTop-e.clientHeight/2))}function sl(){let t=u.data?.streams||[],s=d("#stream-viewer")?._currentStream;if(!s)return;let n=t.findIndex(a=>a.channel===s.channel&&a.index===s.index);n<0||n>=t.length-1||V(t[n+1])}async function nl(t){let e=await wi(),s=P(t?.url);if(!s||!e.length)return;let n=e.findIndex(i=>P(i.url)===s);if(n<0||n>=e.length-1)return;let a=e[n+1];V({...a,isMv:!0})}async function np(t){let e=await wi(),s=P(t?.url);if(!s||!e.length)return;let n=e.findIndex(a=>P(a.url)===s);n<=0||V({...e[n-1],isMv:!0})}function al(t){if(!t||At(t))return;let e=k||M;if(Ct&&e){try{e.seekTo(0,!0),e.playVideo()}catch{}return}if(R?.items?.length){let n=R;n.idx<n.items.length-1?Me(n.idx+1):n.repeat&&Me(0);return}if(!Et)return;let s=t._currentStream;s?.isMv?nl(s):sl()}function Te(){yn&&(clearInterval(yn),yn=null)}function ap(t,e){Te();let s=!1;yn=setInterval(()=>{if(t!==_t||e.hidden||!k){Te();return}try{let n=k.getPlayerState?.();n===window.YT?.PlayerState?.ENDED?(s||al(e),s=!0):n===window.YT?.PlayerState?.PLAYING&&(s=!1);let a=k.getCurrentTime?.()??0,i=e._currentStream;if(i?.songs?.length){let r=te(i),o=-1;for(let l=0;l<i.songs.length;l++)r[l]!=null&&a>=r[l]&&(o=l);o!==Ot&&(Ot=o,ip(o))}}catch{}},700)}function ip(t){let e=d("#sv-setlist");if(!e)return;e.querySelectorAll(".sv-song").forEach((n,a)=>n.classList.toggle("is-current",a===t))}function il(t){Tt=!!t;try{localStorage.setItem(Xo,Tt?"1":"0")}catch{}let e=d("#stream-viewer .sv-panel"),s=d("#sv-setlist-toggle");e&&e.classList.toggle("is-setlist-collapsed",Tt),s&&(s.textContent=Tt?"\u958B\u304F":"\u7573\u3080",s.title=Tt?"\u30BB\u30C3\u30C8\u30EA\u30B9\u30C8\u3092\u958B\u304F":"\u30BB\u30C3\u30C8\u30EA\u30B9\u30C8\u3092\u6298\u308A\u305F\u305F\u3080",s.setAttribute("aria-expanded",String(!Tt)))}function rp(){try{Tt=localStorage.getItem(Xo)==="1"}catch{}il(Tt)}function op(){let t=u.data?.streams||[],s=d("#stream-viewer")?._currentStream;if(!s)return;let n=t.findIndex(a=>a.channel===s.channel&&a.index===s.index);n<=0||V(t[n-1])}function rl(){let t=k||M;if(t)try{t.getPlayerState?.()===window.YT?.PlayerState?.PLAYING?t.pauseVideo?.():t.playVideo?.()}catch{}}function wn(t){W('.sv-bp-control-btn[data-bp-action="toggle-play"]').forEach(e=>{e.innerHTML=t?b("pause"):b("play"),e.title=t?"\u4E00\u6642\u505C\u6B62":"\u518D\u751F",e.setAttribute("aria-label",t?"\u4E00\u6642\u505C\u6B62":"\u518D\u751F"),e.setAttribute("aria-pressed",String(t))})}function ol(){return'<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M6 4h12a1 1 0 0 1 1 1v15l-7-4-7 4V5a1 1 0 0 1 1-1z"/></svg>'}function ll(t){return sp().some(e=>(e.streams||[]).includes(t))}function cl(t,e,s){Promise.resolve().then(()=>(ke(),es)).then(n=>{n.showAddToPlaylistModal(t,e,{onChange:a=>{s?.classList.toggle("is-saved",!!a),s?.setAttribute("aria-pressed",String(!!a)),s&&(s.title=a?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58")}})}).catch(()=>{})}function lp(t){return t.length?t.map(e=>{let s=Yo(e.stream.url)||K(e.stream.url);return`<button class="sv-side-rel-card" type="button" data-bp-action="open-stream" data-bp-channel="${m(e.stream.channel)}" data-bp-index="${e.stream.index}">
      ${s?`<img class="sv-side-rel-thumb" src="${m(s)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<span class="sv-side-rel-thumb sv-side-rel-thumb--empty"></span>'}
      <span class="sv-side-rel-body">
        <span class="sv-side-rel-title">${m(e.stream.title||"\u914D\u4FE1")}</span>
        <span class="sv-side-rel-meta">${T(e.stream.date)} / ${e.overlap}\u66F2\u4E00\u81F4</span>
        <span class="sv-side-rel-songs">${e.sharedSongs.map(n=>m(n)).join("\u3001")}</span>
      </span>
    </button>`}).join(""):'<div class="sv-side-empty">\u540C\u3058\u66F2\u3092\u6B4C\u3063\u305F\u914D\u4FE1\u306F\u307E\u3060\u3042\u308A\u307E\u305B\u3093</div>'}function cp(t){let e=d("#sv-side-related");e&&(e.innerHTML=`
    <div class="sv-side-related-head">
      <span>\u95A2\u9023\u914D\u4FE1</span>
      <span>${t.length?`${t.length}\u4EF6`:""}</span>
    </div>
    <div class="sv-side-related-list">${lp(t)}</div>
  `)}function dl(t){return/縦型|たて配信|タテ|#?shorts|ショート|vertical/i.test(t?.title||"")||/\/shorts\//.test(t?.url||"")}function No(t,e){if(!t)return`<div class="sv-bp-nav-card sv-bp-nav-empty">${m(e==="newer"?"\u6700\u65B0\u914D\u4FE1":"\u6700\u521D\u306E\u914D\u4FE1")}</div>`;let s=K(t.url),n=e==="newer"?"\u65B0\u3057\u3044\u914D\u4FE1 \u2192":"\u2190 \u53E4\u3044\u914D\u4FE1";return`<button class="sv-bp-nav-card ${dl(t)?"sv-bp-nav-card--portrait":"sv-bp-nav-card--landscape"}" type="button" data-bp-action="open-stream" data-bp-channel="${m(t.channel)}" data-bp-index="${t.index}">
    <div class="sv-bp-nav-dir">${m(n)}</div>
    ${s?`<img class="sv-bp-nav-thumb" src="${m(s)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="sv-bp-nav-thumb sv-bp-nav-thumb--empty"></div>'}
    <div class="sv-bp-nav-info">
      <div class="sv-bp-nav-title">${m(t.title||"\u914D\u4FE1")}</div>
      <div class="sv-bp-nav-meta">${T(t.date)}\u3000${t.songs.length}\u66F2</div>
    </div>
  </button>`}function dp(t){let e=d("#sv-below-player");if(!e)return;let s=u.data?.streams||[],n=s.findIndex(p=>p.channel===t.channel&&p.index===t.index),a=n>=0&&n<s.length-1?s[n+1]:null,i=n>0?s[n-1]:null,r=new Set(t.songs.map(p=>p.title)),o=s.filter((p,h)=>h!==n).map(p=>{let h=p.songs.filter(v=>r.has(v.title));return{stream:p,overlap:h.length,sharedSongs:h.slice(0,3).map(v=>v.title)}}).filter(p=>p.overlap>0).sort((p,h)=>h.overlap-p.overlap).slice(0,8),l=z(t),c=ll(l);e.innerHTML=`
    <div class="sv-bp-wrap">
      ${yi()}

      <!-- \u64CD\u4F5C + \u524D\u5F8C\u30CA\u30D3 -->
      <div class="sv-bp-section sv-bp-section--nav">
        <div class="sv-bp-control-bar">
          <button class="sv-bp-control-btn" type="button" data-bp-action="prev-stream"
            ${i?"":"disabled"} title="\u524D\u306E\u914D\u4FE1" aria-label="\u524D\u306E\u914D\u4FE1">${b("previous")}</button>
          <button class="sv-bp-control-btn sv-bp-control-btn--play" type="button" data-bp-action="toggle-play"
            title="\u518D\u751F / \u4E00\u6642\u505C\u6B62" aria-label="\u518D\u751F / \u4E00\u6642\u505C\u6B62">${b("play")}</button>
          <button class="sv-bp-control-btn" type="button" data-bp-action="next-stream"
            ${a?"":"disabled"} title="\u6B21\u306E\u914D\u4FE1" aria-label="\u6B21\u306E\u914D\u4FE1">${b("next")}</button>
          <label class="sv-bp-ap-label" for="sv-ap-check">
            <span class="sv-bp-ap-switch${Et?" sv-bp-ap-switch--on":""}">
              <input type="checkbox" id="sv-ap-check" class="sv-bp-ap-check"${Et?" checked":""}>
              <span class="sv-bp-ap-knob"></span>
            </span>
            \u9023\u7D9A\u518D\u751F
          </label>
          <label class="sv-bp-ap-label" for="sv-repeat-check">
            <span class="sv-bp-ap-switch${Ct?" sv-bp-ap-switch--on":""}">
              <input type="checkbox" id="sv-repeat-check" class="sv-bp-ap-check"${Ct?" checked":""}>
              <span class="sv-bp-ap-knob"></span>
            </span>
            \u30EA\u30D4\u30FC\u30C8
          </label>
          <button class="sv-bp-control-btn sv-bp-bookmark-btn${c?" is-saved":""}" type="button"
            data-bp-action="bookmark-stream" aria-pressed="${c}" title="${c?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58"}"
            aria-label="${c?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58"}">${ol()}</button>
        </div>
        <div class="sv-bp-next-hint">
          ${a?`\u6B21\uFF1A${m(a.title||"\u6B21\u306E\u914D\u4FE1")}`:"\u6700\u5F8C\u306E\u914D\u4FE1\u3067\u3059"}
        </div>
        <div class="sv-bp-nav-cards">
          ${No(i,"newer")}
          ${No(a,"older")}
        </div>
        <div class="sv-bp-info-compact">
          <span>${T(t.date)}</span>
          <span>\u7B2C${t.index}\u67A0</span>
          <span>${t.songs.length}\u66F2</span>
        </div>
      </div>

    </div>
  `,cp(o),e.onchange=p=>{let h=p.target.closest("#sv-ap-check"),v=p.target.closest("#sv-repeat-check");if(h){Et=h.checked;let f=h.closest(".sv-bp-ap-switch");f&&f.classList.toggle("sv-bp-ap-switch--on",Et)}if(v){Ct=v.checked;let f=v.closest(".sv-bp-ap-switch");f&&f.classList.toggle("sv-bp-ap-switch--on",Ct)}},e.onclick=p=>{if(el(p))return;let h=p.target.closest("[data-bp-action]");if(!h)return;let v=h.dataset.bpAction;if(v==="open-stream"){let f=h.dataset.bpChannel,g=parseInt(h.dataset.bpIndex,10),y=(u.data?.streams||[]).find($=>$.channel===f&&$.index===g);y&&V(y)}else v==="prev-stream"?op():v==="next-stream"?sl():v==="toggle-play"?rl():v==="bookmark-stream"&&cl(l,t.title||"\u914D\u4FE1",h)},$i(e);try{let p=(k||M)?.getPlayerState?.()===window.YT?.PlayerState?.PLAYING;wn(p)}catch{}}var ns=null;async function wi(){if(ns)return ns;try{ns=(await(await fetch("data/music.json")).json())?.videos||[]}catch{ns=[]}return ns}function up(t){let e=String(t||"");return e=e.replace(/【[^】]*】/g," "),e=e.replace(/^\s*MV[⌇|｜♪♬:：\-\s]*/i," "),e=e.split(/[\/／|｜]/)[0],e=e.replace(/歌ってみた|covered?\s*(by.*)?$/gi," "),e.trim()}async function pp(t){let e=d("#sv-below-player");if(!e)return;try{await li()}catch{}let s=await wi();if(d("#stream-viewer")?._currentStream!==t)return;let n=u.channelData?.combined?.streams||u.data?.streams||[],a=Vt(up(t.title)),i=[];if(a.length>1)for(let x of n){let D=(x.songs||[]).find(B=>{let I=Vt(B.title);return I===a||I.length>1&&(I.includes(a)||a.includes(I))});D&&i.push({stream:x,songTitle:D.title})}let r=i.slice(0,8),o={original:"\u30AA\u30EA\u30B8\u30CA\u30EB",office:"Re:AcT",character:"\u30AD\u30E3\u30E9\u30BD\u30F3",cover:"\u30AB\u30D0\u30FC"},l=s.find(x=>x.url===t.url),c=s.filter(x=>x.url!==t.url).sort((x,D)=>{let B=l&&x.type===l.type?1:0,I=l&&D.type===l.type?1:0;return B!==I?I-B:(D.publishedAt||"").localeCompare(x.publishedAt||"")}).slice(0,12),p=s.findIndex(x=>P(x.url)===P(t.url)),h=p>=0&&p<s.length-1?s[p+1]:null,v=p>0?s[p-1]:null,f=l||s.find(x=>P(x.url)===P(t.url)),g=f?"mv:"+f.id:"",y=g?ll(g):!1,$=R,w=!!$?.items?.length,C=w&&$.idx>0||!!v,G=w&&$.idx<$.items.length-1||!!h;e.innerHTML=`
    <div class="sv-bp-wrap">
      ${yi()}
      <!-- \u64CD\u4F5C\uFF08\u6B4C\u67A0\u30D3\u30E5\u30FC\u30EF\u30FC\u3068\u540C\u3058: \u524D\u3078 / \u518D\u751F\u505C\u6B62 / \u6B21\u3078 / \u9023\u7D9A\u518D\u751F / \u30EA\u30D4\u30FC\u30C8 / \u681E\uFF09-->
      <div class="sv-bp-section sv-bp-section--nav">
        <div class="sv-bp-control-bar">
          <button class="sv-bp-control-btn" type="button" data-mv-action="mv-prev"
            ${C?"":"disabled"} title="\u524D\u306E\u52D5\u753B" aria-label="\u524D\u306E\u52D5\u753B">${b("previous")}</button>
          <button class="sv-bp-control-btn sv-bp-control-btn--play" type="button" data-mv-action="toggle-play"
            title="\u518D\u751F / \u4E00\u6642\u505C\u6B62" aria-label="\u518D\u751F / \u4E00\u6642\u505C\u6B62">${b("play")}</button>
          <button class="sv-bp-control-btn" type="button" data-mv-action="mv-next"
            ${G?"":"disabled"} title="\u6B21\u306E\u52D5\u753B" aria-label="\u6B21\u306E\u52D5\u753B">${b("next")}</button>
          <label class="sv-bp-ap-label" for="sv-ap-check">
            <span class="sv-bp-ap-switch${Et?" sv-bp-ap-switch--on":""}">
              <input type="checkbox" id="sv-ap-check" class="sv-bp-ap-check"${Et?" checked":""}>
              <span class="sv-bp-ap-knob"></span>
            </span>
            \u9023\u7D9A\u518D\u751F
          </label>
          <label class="sv-bp-ap-label" for="sv-repeat-check">
            <span class="sv-bp-ap-switch${Ct?" sv-bp-ap-switch--on":""}">
              <input type="checkbox" id="sv-repeat-check" class="sv-bp-ap-check"${Ct?" checked":""}>
              <span class="sv-bp-ap-knob"></span>
            </span>
            \u30EA\u30D4\u30FC\u30C8
          </label>
          <button class="sv-bp-control-btn sv-bp-bookmark-btn${y?" is-saved":""}" type="button"
            data-mv-action="bookmark-mv" data-mv-key="${m(g)}" aria-pressed="${y}"
            title="${y?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58"}"
            aria-label="${y?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58"}">${ol()}</button>
        </div>
        <div class="sv-bp-next-hint">
          ${h?`\u6B21\uFF1A${m(h.title||"\u6B21\u306E\u52D5\u753B")}`:'<span class="sv-bp-ap-hint--end">\uFF08\u6700\u5F8C\u306E\u52D5\u753B\uFF09</span>'}
        </div>
      </div>
      ${r.length?`
      <div class="sv-bp-section">
        <div class="sv-bp-sh">${b("mic")} \u3053\u306E\u66F2\u304C\u6B4C\u308F\u308C\u305F\u6B4C\u67A0 <span class="sv-bp-sh-sub">\uFF08\u5168${i.length}\u56DE\uFF09</span></div>
        <div class="sv-bp-related-list">
          ${r.map(x=>{let D=K(x.stream.url);return`<button class="sv-bp-rel-card" type="button" data-mv-action="open-stream" data-mv-channel="${m(x.stream.channel)}" data-mv-index="${x.stream.index}">
              ${D?`<img class="sv-bp-rel-thumb" src="${m(D)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="sv-bp-rel-thumb sv-bp-rel-thumb--empty"></div>'}
              <div class="sv-bp-rel-info">
                <div class="sv-bp-rel-title">${m(x.stream.title||"\u914D\u4FE1")}</div>
                <div class="sv-bp-rel-meta">${T(x.stream.date)}\u3000\u7B2C${x.stream.index}\u67A0</div>
                <div class="sv-bp-rel-songs">${b("music")} ${m(x.songTitle)}</div>
              </div>
            </button>`}).join("")}
        </div>
      </div>
      `:""}

      ${c.length?`
      <div class="sv-bp-section">
        <div class="sv-bp-sh">${b("video")} \u307B\u304B\u306E\u52D5\u753B <button class="sv-mv-all-btn" type="button" data-mv-action="all-videos">\u3059\u3079\u3066\u898B\u308B \u2192</button></div>
        <div class="sv-mv-grid">
          ${c.map(x=>{let D=K(x.url);return`<button class="sv-mv-card" type="button" data-mv-action="open-mv" data-mv-url="${m(x.url)}" data-mv-title="${m(x.title)}">
              ${D?`<img class="sv-mv-card-thumb" src="${m(D)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="sv-mv-card-thumb"></div>'}
              <div class="sv-mv-card-body">
                <div class="sv-mv-card-title">${m(x.title)}</div>
                <div class="sv-mv-card-type">${o[x.type]||"\u30AA\u30EA\u30B8\u30CA\u30EB"}</div>
              </div>
            </button>`}).join("")}
        </div>
      </div>
      `:""}
    </div>
  `,e.onchange=x=>{let D=x.target.closest("#sv-ap-check"),B=x.target.closest("#sv-repeat-check");if(D){Et=D.checked;let I=D.closest(".sv-bp-ap-switch");I&&I.classList.toggle("sv-bp-ap-switch--on",Et)}if(B){Ct=B.checked;let I=B.closest(".sv-bp-ap-switch");I&&I.classList.toggle("sv-bp-ap-switch--on",Ct)}},e.onclick=x=>{if(el(x))return;let D=x.target.closest("[data-mv-action]");if(!D)return;let B=D.dataset.mvAction;if(B==="open-stream"){let I=D.dataset.mvChannel,ht=parseInt(D.dataset.mvIndex,10),Ee=(u.channelData?.combined?.streams||u.data?.streams||[]).find(se=>se.channel===I&&se.index===ht);Ee&&V(Ee)}else B==="open-mv"?V({url:D.dataset.mvUrl,title:D.dataset.mvTitle,isMv:!0}):B==="all-videos"?mt("playlists"):B==="toggle-play"?rl():B==="mv-prev"?w&&$.idx>0?Me($.idx-1):np(t):B==="mv-next"?w&&$.idx<$.items.length-1?Me($.idx+1):nl(t):B==="bookmark-mv"&&cl(D.dataset.mvKey,t.title||"\u52D5\u753B",D)},$i(e);try{let x=(k||M)?.getPlayerState?.()===window.YT?.PlayerState?.PLAYING;wn(x)}catch{}}function xe(t,e,s,n){t.innerHTML=e.map((a,i)=>Zu(a,i,s,n)).join("")}var ul=/\b\d{1,2}:\d{2}(?::\d{2})?\b/g;function ki(t){let e=String(t||"").match(/(\d+):(\d{2}):(\d{2})|(\d+):(\d{2})/);return e?e[1]!==void 0?parseInt(e[1])*3600+parseInt(e[2])*60+parseInt(e[3]):parseInt(e[4])*60+parseInt(e[5]):null}function mp(t){let e=String(t||"").trim();if(!e)return null;let s=e.match(ul)||[];if(!s.length)return null;let n=hp(e);if(!n)return null;let{title:a,artist:i}=fp(n);return a?{start:s[0].trim(),title:a,artist:i,end:s.length>1?s[s.length-1].trim():"",raw:n}:null}function hp(t){return String(t||"").replace(ul," ").replace(/https?:\/\/\S+/gi," ").replace(/^\s*(?:\d+[\).．、:]|[#＃]\d+|[・\-*＊•▶▷♪♫🎵🎶]+)\s*/u,"").replace(/^[\s　\[\]【】()（）<>＜＞「」『』"'`]+|[\s　\[\]【】()（）<>＜＞「」『』"'`]+$/g,"").replace(/\s*(?:[-–—~〜→⇒>|｜]{2,}|[|｜])\s*$/g,"").replace(/[ \t　]+/g," ").trim()}function ai(t){return String(t||"").replace(/^[\s　\[\]【】()（）<>＜＞「」『』"'`・\-*＊•▶▷♪♫🎵🎶]+/u,"").replace(/[\s　\[\]【】()（）<>＜＞「」『』"'`]+$/g,"").trim()}function fp(t){let e=ai(t);if(!e)return{title:"",artist:""};let s=[/^(.+?)\s*(?:\/|／)\s*(.+)$/,/^(.+?)\s+(?:by|BY|By)\s+(.+)$/,/^(.+?)\s*(?:-|－|–|—|~|〜|｜|\|)\s*(.+)$/,/^(.+?)\s+(?:covered\s+by|cover\s+by|歌[:：])\s+(.+)$/i];for(let n of s){let a=e.match(n);if(!a)continue;let i=ai(a[1]),r=ai(a[2]);if(i&&r)return{title:i,artist:r}}return{title:e,artist:""}}function Vt(t){return(t||"").toLowerCase().replace(/[\s　]/g,"").replace(/[！-～]/g,e=>String.fromCharCode(e.charCodeAt(0)-65248)).replace(/[・｡。、，,．.！!？?「」『』【】（）()]/g,"")}function vp(t,e,s){let n=Vt(t),a=Vt(e),i=-1,r=0;for(let o=0;o<s.length;o++){let l=Vt(s[o].title),c=Vt(s[o].artist),p=0;l===n?p+=80:n.length>1&&(l.includes(n)||n.includes(l))&&(p+=40),a&&c===a?p+=20:a&&a.length>1&&(c.includes(a)||a.includes(c))&&(p+=10),p>r&&(r=p,i=o)}if(r<40&&a)for(let o=0;o<s.length;o++){let l=Vt(s[o].title),c=Vt(s[o].artist),p=0;l===a?p+=70:a.length>1&&(l.includes(a)||a.includes(l))&&(p+=35),c&&c===n?p+=20:n.length>1&&(c.includes(n)||n.includes(c))&&(p+=10),p>r&&(r=p,i=o)}return r>=40?i:-1}function pl(){if(d("#stream-viewer"))return;let t=d("#panel-player");if(!t)return;let e=document.createElement("div");e.id="stream-viewer",e.hidden=!0,e.setAttribute("aria-label","\u914D\u4FE1\u30D7\u30EC\u30A4\u30E4\u30FC"),e.innerHTML=`
    <nav class="sv-topnav" aria-label="\u30DA\u30FC\u30B8\u30CA\u30D3\u30B2\u30FC\u30B7\u30E7\u30F3">
      <button class="sv-topnav-btn" type="button" data-bc-tab="dashboard"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 13h5v7H4z"/><path d="M10 4h5v16h-5z"/><path d="M16 9h4v11h-4z"/></svg>\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9</button>
      <button class="sv-topnav-btn" type="button" data-bc-tab="ranking"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 4h8v3a4 4 0 0 1-8 0z"/><path d="M6 5H3v2a4 4 0 0 0 4 4"/><path d="M18 5h3v2a4 4 0 0 1-4 4"/><path d="M12 11v5"/><path d="M8 20h8"/><path d="M9 16h6v4H9z"/></svg>\u30E9\u30F3\u30AD\u30F3\u30B0</button>
      <button class="sv-topnav-btn" type="button" data-bc-tab="songs"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18V5l10-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="16" cy="16" r="3"/></svg>\u5168\u66F2\u30EA\u30B9\u30C8</button>
      <button class="sv-topnav-btn" type="button" data-bc-tab="timeline"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3v4"/><path d="M17 3v4"/><path d="M4 8h16"/><rect x="4" y="5" width="16" height="16" rx="3"/><path d="M8 13h3"/><path d="M13 13h3"/><path d="M8 17h3"/></svg>\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3</button>
      <button class="sv-topnav-btn" type="button" data-bc-tab="analytics"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19V5"/><path d="M4 19h16"/><path d="M7 15l3-4 4 2 5-7"/><circle cx="7" cy="15" r="1"/><circle cx="10" cy="11" r="1"/><circle cx="14" cy="13" r="1"/><circle cx="19" cy="6" r="1"/></svg>\u30A2\u30CA\u30EA\u30C6\u30A3\u30AF\u30B9</button>
      <button class="sv-topnav-btn" type="button" data-bc-tab="playlists"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 6h10"/><path d="M5 11h10"/><path d="M5 16h7"/><path d="M18 8v10l3-2 3 2V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1z"/></svg>\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8</button>
    </nav>
    <div class="sv-container">
      <div class="sv-header">
        <button class="sv-close-btn" id="sv-close" type="button" title="\u30DF\u30CB\u30D7\u30EC\u30A4\u30E4\u30FC\u3067\u518D\u751F\u3092\u7D9A\u3051\u306A\u304C\u3089\u623B\u308A\u307E\u3059\uFF08Esc\uFF09">
          \u2190 <span class="sv-close-label">\u623B\u308B</span><span class="sv-esc-hint">Esc</span>
        </button>
        <div class="sv-title-area">
          <nav class="sv-breadcrumb" aria-label="\u73FE\u5728\u5730">
            <button class="sv-bc-btn" type="button" data-bc-tab="dashboard">\u30DB\u30FC\u30E0</button>
            <span class="sv-bc-sep" aria-hidden="true">/</span>
            <button class="sv-bc-btn" type="button" data-bc-tab="timeline">\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3</button>
            <span class="sv-bc-sep" aria-hidden="true">/</span>
            <span class="sv-bc-current" id="sv-bc-title"></span>
          </nav>
          <div class="sv-stream-meta" id="sv-stream-meta"></div>
        </div>
        <button class="sv-fullscreen-btn" id="sv-fullscreen-btn" type="button"
          title="\u5927\u753B\u9762\u3067\u518D\u751F" aria-pressed="false">${b("external")}</button>
        <div class="sv-volume-wrap">
          <button class="vol-btn" id="sv-vol-btn" type="button" aria-label="\u97F3\u91CF">${b("volume")}</button>
          <input class="vol-slider" id="sv-vol-slider" type="range" min="0" max="100" value="100" aria-label="\u97F3\u91CF">
        </div>
        <button class="sv-music-btn" id="sv-music-btn" type="button" title="\u73FE\u5728\u4F4D\u7F6E\u304B\u3089\u97F3\u697D\u30D7\u30EC\u30A4\u30E4\u30FC\u3067\u8074\u304F">
          <span class="sv-music-icon">${b("music")}</span><span class="sv-music-label">\u97F3\u697D\u30D7\u30EC\u30A4\u30E4\u30FC\u3067\u8074\u304F</span>
        </button>
        <button class="sv-share-btn" id="sv-share-btn" type="button" title="\u3053\u306E\u52D5\u753B\u306E\u5171\u6709\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC">
          <span class="sv-share-icon">${b("link")}</span><span class="sv-share-label">\u5171\u6709</span>
        </button>
        <a class="sv-yt-link" id="sv-yt-link" href="#" target="_blank" rel="noopener" title="YouTube\u3067\u958B\u304F">
          <span class="sv-yt-icon">${b("external")}</span><span class="sv-yt-label">YouTube\u3067\u958B\u304F</span>
        </a>
      </div>
      <div class="sv-body">
        <div class="sv-player-section">
          <div class="sv-player-wrap" id="sv-player-wrap">
            <div class="sv-player-loading">\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div>
          </div>
          <div class="sv-below-player" id="sv-below-player"></div>
        </div>
        <div class="sv-panel">
          <div class="sv-panel-head">
            <span>\u30BB\u30C3\u30C8\u30EA\u30B9\u30C8</span>
            <div class="sv-panel-head-right">
              <button class="sv-setlist-toggle" id="sv-setlist-toggle" type="button" aria-expanded="true">\u7573\u3080</button>
              <button class="sv-import-toggle" id="sv-import-toggle" type="button">\u4E00\u62EC\u5165\u529B</button>
              <button class="sv-cts-bulk-btn" id="sv-cts-bulk-btn" type="button" hidden>\u30BB\u30C8\u30EA\u767B\u9332</button>
              <span class="sv-song-count" id="sv-song-count"></span>
            </div>
          </div>
          <div class="sv-import-area" id="sv-import-area" hidden>
            <p class="sv-import-desc">\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u30921\u884C\u306B1\u3064\u5165\u529B\uFF08\u4E0A\u304B\u3089\u9806\u306B\u66F2\u3078\u5272\u308A\u5F53\u3066\uFF09</p>
            <textarea class="sv-import-input" id="sv-import-input" rows="6"
              placeholder="\u4F8B:&#10;15:59&#10;21:12&#10;25:57&#10;1:08:13"></textarea>
            <div class="sv-import-btns">
              <button class="sv-import-apply" id="sv-import-apply" type="button">\u9069\u7528</button>
              <button class="sv-import-cancel" id="sv-import-cancel" type="button">\u30AD\u30E3\u30F3\u30BB\u30EB</button>
            </div>
          </div>
      <div class="sv-panel-hint">${b("time")} \u3067\u73FE\u5728\u6642\u523B\u3092\u30E1\u30E2 \uFF0F \u30D0\u30C3\u30B8\u3092\u30BF\u30C3\u30D7\u3067\u79FB\u52D5</div>
          <div class="sv-setlist" id="sv-setlist"></div>
          <div class="sv-side-related" id="sv-side-related"></div>
        </div>
      </div>
    </div>
  `,t.appendChild(e),d("#sv-close").addEventListener("click",()=>os()),d("#sv-share-btn").addEventListener("click",Uu),d("#sv-music-btn").addEventListener("click",Ou),d("#sv-fullscreen-btn").addEventListener("click",Ju),d("#sv-setlist-toggle")?.addEventListener("click",()=>il(!Tt)),d("#sv-side-related")?.addEventListener("click",a=>{let i=a.target.closest('[data-bp-action="open-stream"]');if(!i)return;let r=i.dataset.bpChannel,o=parseInt(i.dataset.bpIndex,10),l=(u.data?.streams||[]).find(c=>c.channel===r&&c.index===o);l&&V(l)});let s=d("#sv-vol-slider"),n=d("#sv-vol-btn");if(s){let a=Xt();s.value=a,s.style.setProperty("--pct",`${a}%`),n&&(n.innerHTML=as(a)),s.addEventListener("input",i=>{let r=parseInt(i.target.value);if(i.target.style.setProperty("--pct",`${r}%`),ii(r),n&&(n.innerHTML=as(r)),k)try{k.setVolume(r)}catch{}})}if(n){let a=80;n.addEventListener("click",()=>{if(!s)return;let i=parseInt(s.value),r=i>0?0:a||80;i>0&&(a=i),Le(s,n,k,r),ii(r)})}e.querySelectorAll("[data-bc-tab]").forEach(a=>{a.addEventListener("click",()=>{cs=a.dataset.bcTab,os()})}),d("#sv-import-toggle").addEventListener("click",()=>{let a=d("#sv-import-area");a&&(a.hidden=!a.hidden,a.hidden||d("#sv-import-input")?.focus())}),d("#sv-import-cancel").addEventListener("click",()=>{let a=d("#sv-import-area");a&&(a.hidden=!0);let i=d("#sv-import-input");i&&(i.value="")}),d("#sv-import-apply").addEventListener("click",()=>{let a=e._currentStream;if(!a)return;let i=d("#sv-import-input");if(!i)return;let o=i.value.split(`
`).map(p=>ki(p)).filter(p=>p!==null);if(!o.length)return;let l=te(a);o.forEach((p,h)=>{h<a.songs.length&&(l[h]=p)}),ni(a,l),xe(d("#sv-setlist"),a.songs,l,Ot);let c=d("#sv-import-area");c&&(c.hidden=!0),i.value=""}),d("#sv-cts-bulk-btn").addEventListener("click",()=>{let a=e._currentStream;a&&ep(a)}),d("#sv-setlist").addEventListener("click",a=>{let i=a.target.closest("[data-action]");if(!i)return;let r=parseInt(i.dataset.idx,10),o=e._currentStream;if(!o)return;let l=te(o);if(i.dataset.action==="seek"){if(l[r]!=null&&k?.seekTo){k.seekTo(l[r],!0);try{k.playVideo()}catch{}}}else if(i.dataset.action==="set-ts"){let c=k?.getCurrentTime?.();c!=null&&(l[r]=Math.floor(c),ni(o,l),xe(d("#sv-setlist"),o.songs,l,Ot))}else if(i.dataset.action==="del-ts")delete l[r],ni(o,l),xe(d("#sv-setlist"),o.songs,l,Ot);else if(i.dataset.action==="cts-seek"){let c=Number(i.dataset.ctsSeconds);if(!isNaN(c)&&k?.seekTo){k.seekTo(c,!0);try{k.playVideo()}catch{}}}else if(i.dataset.action==="cts-propose"){let c=o.songs[r];tp(o,r,c?.title||`\u66F2 ${r+1}`)}})}function V(t,e=0){if(!t?.url)return;let s=P(t.url);if(!s){Wu(t.url);return}if(Oo()){window.open(jo(t.url,e),"_blank","noopener");return}pl(),fi(),Te(),rs||(R=null);let n=d("#stream-viewer");if(At(n)){if(n._currentStream?.url===t.url){if(!zo()&&!window.__restoreMusicExternalPlayer?.()&&Ko(),e>0)try{k?.seekTo(Math.floor(e),!0),k?.playVideo()}catch{}return}xn()}let a=window.__takeOverMusicPlayerVideo?.(t.url)||null;a||Promise.resolve().then(()=>(Wt(),Qt)).then($=>($.releaseMusicPlayerVideo||$.pauseMusicPlayer)()).catch(()=>{});let i=d("#yt-player-panel");if(i&&!i.hidden){try{M?.pauseVideo()}catch{}i.hidden=!0,_e()}if(X=null,pt){pt=!1;let $=d("#stream-viewer");$&&$.classList.remove("sv-fullscreen"),document.body.classList.remove("has-sv-fullscreen"),document.body.style.overflow=""}pt=!1,gi();let r=d("#stream-viewer");r.classList.remove("sv-fullscreen"),r.classList.toggle("sv-mv-mode",!!t.isMv);let o=dl(t);r.classList.toggle("sv-portrait",o),r._currentStream=t,rp();let l=++_t,c=r.querySelectorAll("[data-bc-tab]");c[1]&&(t.isMv?(c[1].dataset.bcTab="playlists",c[1].textContent="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8"):(c[1].dataset.bcTab="timeline",c[1].textContent="\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3"));let p=d("#sv-bc-title");p&&(p.textContent=t.title||"\u914D\u4FE1");let h=d("#sv-stream-meta");h&&(h.innerHTML=t.isMv?"":`${T(t.date)}\u3000\u7B2C${t.index}\u67A0\u3000${b("mic")} ${t.songs.length}\u66F2`);let v=d("#sv-yt-link");v&&(v.href=t.url);let f=d("#sv-song-count");if(f&&(f.textContent=t.isMv?"":`${t.songs.length}\u66F2`),ot={},t.isMv){let $=d("#sv-setlist");$&&($.innerHTML="");let w=d("#sv-below-player");w&&(w.innerHTML="");let C=d("#sv-side-related");C&&(C.innerHTML=""),pp(t)}else{let $=te(t);xe(d("#sv-setlist"),t.songs,$,Ot),Xu(t),dp(t)}r.hidden=!1,kn(!0),document.body.style.overflow="",yt(),window.scrollTo({top:0,behavior:"auto"}),setTimeout(()=>{d("#sv-close")?.focus({preventScroll:!0})},50),k=null;let g=d("#sv-player-wrap");g.innerHTML='<div class="sv-player-loading">\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div>';let y=Math.floor(e||a?.currentTime||0);if(a?.player){g.innerHTML="",a.iframe?(a.iframe.style.width="100%",a.iframe.style.height="100%",g.appendChild(a.iframe)):g.innerHTML='<div class="sv-player-loading">\u518D\u751F\u3092\u5F15\u304D\u7D99\u304E\u307E\u3057\u305F</div>',k=a.player;try{k.setVolume?.(Xt()),y>1&&k.seekTo?.(y,!0),k.playVideo?.()}catch{}Le(d("#sv-vol-slider"),d("#sv-vol-btn"),null,Xt()),wn(!0),ap(l,r);return}Zo(()=>{if(l!==_t||r.hidden)return;g.innerHTML="";let $=document.createElement("div");g.appendChild($);try{k=new window.YT.Player($,{videoId:s,width:"100%",height:"100%",playerVars:{autoplay:1,playsinline:1,origin:location.origin,rel:0,modestbranding:1,...y>0?{start:y}:{}},events:{onReady:w=>{let C=Xt();try{w.target.setVolume(C)}catch{}Le(d("#sv-vol-slider"),d("#sv-vol-btn"),null,C);try{w.target.setPlaybackQuality("hd1080")}catch{}try{w.target.setPlaybackQualityRange("hd720","hd1080")}catch{}if(y>5)try{w.target.seekTo(y,!0)}catch{}},onStateChange:w=>{if(l===_t){if(wn(w.data===window.YT.PlayerState.PLAYING),w.data===window.YT.PlayerState.PLAYING)try{w.target.setPlaybackQuality("hd1080")}catch{}w.data===window.YT.PlayerState.ENDED&&al(r)}},onError:()=>{l===_t&&(g.innerHTML=`<iframe src="https://www.youtube.com/embed/${m(s)}?autoplay=1&playsinline=1&rel=0&origin=${encodeURIComponent(location.origin)}${y>0?`&start=${y}`:""}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`)}}})}catch{g.innerHTML=`<iframe src="https://www.youtube.com/embed/${m(s)}?autoplay=1&playsinline=1&rel=0&origin=${encodeURIComponent(location.origin)}${y>0?`&start=${y}`:""}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`}})}function os(){let t=d("#stream-viewer");if(!t||t.hidden||At(t))return;if(pt){pt=!1,t.classList.remove("sv-fullscreen"),document.body.classList.remove("has-sv-fullscreen"),document.body.style.overflow="";let s=d("#sv-close");s&&(s.title="\u30DF\u30CB\u30D7\u30EC\u30A4\u30E4\u30FC\u3067\u518D\u751F\u3092\u7D9A\u3051\u306A\u304C\u3089\u623B\u308A\u307E\u3059\uFF08Esc\uFF09");let n=d("#sv-fullscreen-btn");n&&n.setAttribute("aria-pressed","false");return}if(Fu())return;++_t,t.hidden=!0,t._currentStream=null,Te(),k=null;let e=d("#sv-player-wrap");e&&(e.innerHTML=""),document.body.style.overflow="",kn(document.body.dataset.activeTab==="playlists"),Ln(),yt()}window.__openStreamViewer=V;window.__closeStreamMiniPlayer=()=>{let t=d("#stream-viewer");if(At(t))return xn(),!0;let e=d("#yt-player-panel");return e&&!e.hidden?(e.hidden=!0,_e(),X=null,!0):!1};function ri(t){let e=gn(t),s=d("#song-modal"),n=d("#song-modal-body"),a=d("#song-modal-title");if(!e||!s||!n||!a)return;Ms(e),a.textContent=e.title;let i=(e.streamRefs||[]).slice(0,8).map(l=>({...l,thumbnail:K(l.url),thumbnailFallback:le(l.url),thumbnailTiny:Yo(l.url),detailKey:z(l)})),r=[e.genre,...e.seasonTags||[],...e.moodTags||[],...e.singerTags||[]].filter(Boolean),o=ae(e.key);n.innerHTML=`
    <div class="song-detail-main">
      <div>
        <button class="song-detail-artist" type="button" data-detail-action="artist" data-songkey="${m(e.key)}">${m(e.artist)}</button>
        <div class="song-detail-tags">${r.map(l=>`<span class="tag-badge">${m(l)}</span>`).join("")}</div>
      </div>
      <div class="song-detail-stats">
        <div><strong>${e.count}</strong><span>\u6B4C\u5531\u56DE\u6570</span></div>
        <div><strong>${e.displayKey||"\u2014"}</strong><span>\u30AD\u30FC</span></div>
        <div><strong>${e.daysSinceLast??"\u2014"}</strong><span>\u65E5\u524D</span></div>
        <div><strong>${T(e.firstSung)||"\u2014"}</strong><span>\u521D\u62AB\u9732</span></div>
      </div>
    </div>
    <div class="song-detail-actions">
      <button class="btn ${o?"primary":"ghost"}" type="button" data-detail-action="favorite" data-songkey="${m(e.key)}">${b("heart")} ${o?"\u304A\u6C17\u306B\u5165\u308A\u89E3\u9664":"\u304A\u6C17\u306B\u5165\u308A\u306B\u8FFD\u52A0"}</button>
      <button class="btn primary" type="button" data-detail-action="timeline" data-songkey="${m(e.key)}">\u6B4C\u67A0\u3092\u898B\u308B</button>
      <button class="btn ghost" type="button" data-detail-action="close">\u9589\u3058\u308B</button>
    </div>
    <div class="song-detail-history">
      <h3>\u6B4C\u3063\u305F\u6B4C\u67A0</h3>
      ${i.length?i.map(l=>`
        <div class="song-detail-stream">
          ${l.thumbnail&&l.url?`<a class="song-detail-thumb-link" href="${m(l.url)}" target="_blank" rel="noopener" aria-label="YouTube\u3067\u958B\u304F"><img class="song-detail-thumb" src="${m(l.thumbnail)}" data-fallback="${m(l.thumbnailFallback)}" data-tiny="${m(l.thumbnailTiny)}" alt="" loading="lazy" referrerpolicy="no-referrer"></a>`:'<div class="song-detail-thumb placeholder"></div>'}
          <button class="song-detail-frame" type="button" data-detail-action="stream" data-songkey="${m(e.key)}" data-streamkey="${m(l.detailKey)}">
            <span>${T(l.date)}</span>
            <strong>${m(l.title||"\u914D\u4FE1")}</strong>
          </button>
        </div>
      `).join(""):'<p class="song-detail-empty">\u5C65\u6B74\u672A\u78BA\u8A8D</p>'}
    </div>
  `,s.hidden=!1,d("#song-modal-close")?.focus()}function gp(){let t=d("#song-modal"),e=d("#song-modal-close");if(!t||!e)return;let s=()=>{t.hidden=!0};e.addEventListener("click",s),t.addEventListener("click",n=>{n.target===t&&s();let a=n.target.closest("[data-detail-action]");if(a){if(n.stopPropagation(),a.dataset.detailAction==="close"&&s(),a.dataset.detailAction==="favorite"){let i=a.dataset.songkey;ms(i);let r=ae(i);a.innerHTML=`${b("heart")} ${r?"\u304A\u6C17\u306B\u5165\u308A\u89E3\u9664":"\u304A\u6C17\u306B\u5165\u308A\u306B\u8FFD\u52A0"}`,a.classList.toggle("primary",r),a.classList.toggle("ghost",!r)}if(a.dataset.detailAction==="timeline"){let i=gn(a.dataset.songkey);s(),i&&qu(i)}if(a.dataset.detailAction==="stream"){let i=gn(a.dataset.songkey),r=i?.streamRefs?.find(o=>z(o)===a.dataset.streamkey);s(),i&&r&&Ru(i,r)}if(a.dataset.detailAction==="artist"){let i=gn(a.dataset.songkey);s(),i&&Bu(i)}}}),t.addEventListener("error",n=>{let a=n.target.closest?.(".song-detail-thumb");if(!a)return;let i=a.dataset.fallback||a.dataset.tiny||"";if(i&&a.src!==i){a.src=i,a.dataset.fallback===i?delete a.dataset.fallback:delete a.dataset.tiny;return}a.closest(".song-detail-thumb-link")?.classList.add("thumb-missing")},!0),document.addEventListener("keydown",n=>{n.key==="Escape"&&!t.hidden&&s()})}var qo=!1;function bp(){if(!u.data)return;let{stats:t,streams:e=[]}=u.data,s=e[0]?.date||null,n=Dt(s),a=t.dataGeneratedDate||u.channelData?.dataGeneratedDate||null,i=Dt(a),r=t.channelLabel||t.channelId||"",o=r?`<span class="badge accent" style="margin-right:8px;">${m(r)}</span>`:"";d("#updated-info").innerHTML=o+`\u30C7\u30FC\u30BF\u66F4\u65B0\u65E5\uFF1A<strong>${T(a)||"\u2014"}</strong>`+(i!=null?` <span class="badge">${i}\u65E5\u524D</span>`:"");let l=d("#stats-grid");if(!qo)l.innerHTML=`
      <div class="stat-card">
        <div class="stat-label">\u7DCF\u6B4C\u5531\u6570</div>
        <div class="stat-value">${zt(t.total)}<span class="stat-unit">\u56DE</span></div>
      </div>
      <div class="stat-card">
        <div class="stat-label">\u6301\u3061\u66F2\u6570</div>
        <div class="stat-value">${zt(t.repertoire)}<span class="stat-unit">\u66F2</span></div>
      </div>
      <div class="stat-card">
        <div class="stat-label">\u6B4C\u67A0\u56DE\u6570</div>
        <div class="stat-value">${zt(t.streams)}<span class="stat-unit">\u56DE</span></div>
      </div>
      <div class="stat-card">
        <div class="stat-label">1\u67A0\u5E73\u5747</div>
        <div class="stat-value">${t.avgPerStream}<span class="stat-unit">\u66F2</span></div>
      </div>
      <div class="stat-card accent">
        <div class="stat-label">\u6700\u65B0\u6B4C\u67A0\u304B\u3089</div>
        <div class="stat-value">${n??"\u2014"}<span class="stat-unit">\u65E5</span></div>
      </div>
      <div class="stat-card gold">
        <div class="stat-label">\u6D3B\u52D5\u671F\u9593</div>
        <div class="stat-value">${Ro(u.data)}<span class="stat-unit">\u65E5</span></div>
      </div>
    `,qo=!0;else{let c=l.querySelectorAll(".stat-value");c.length>=6&&(c[0].textContent=zt(t.total),c[0].innerHTML+='<span class="stat-unit">\u56DE</span>',c[1].textContent=zt(t.repertoire),c[1].innerHTML+='<span class="stat-unit">\u66F2</span>',c[2].textContent=zt(t.streams),c[2].innerHTML+='<span class="stat-unit">\u56DE</span>',c[3].textContent=t.avgPerStream,c[3].innerHTML+='<span class="stat-unit">\u66F2</span>',c[4].textContent=n??"\u2014",c[4].innerHTML+='<span class="stat-unit">\u65E5</span>',c[5].textContent=Ro(u.data),c[5].innerHTML+='<span class="stat-unit">\u65E5</span>')}}function Ro(t){if(!t.streams?.length)return"\u2014";let e=t.streams[t.streams.length-1].date,s=t.streams[0].date;return Math.floor((s-e)/864e5)+1}function yp(){d("#loading").hidden=!1,d("#error").hidden=!0}function $p(){d("#loading").hidden=!0}function wp(t){let e=d("#loading"),s=d("#error"),n=d("#err-detail");e&&(e.hidden=!0),s&&(s.hidden=!1),n&&(n.textContent=t&&t.message?t.message:String(t))}function kp(t){let e=document.getElementById("page-title");if(!e)return;t==="new"?(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u65B0ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u65B0ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9"):t==="old"?(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u65E7ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u65E7ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9"):(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9");let s=document.getElementById("hero-ch-bg");s&&(s.dataset.mode=t||"all")}var Sp={new:{name:"\u5922\u5DDD\u304B\u306A\u3046 - Kanau Yumekawa",handle:"@YumekawaKanau",url:"https://www.youtube.com/@YumekawaKanau",label:"\u65B0ch",desc:`Re:AcT\u6240\u5C5E\u306E\u6D77\u306E\u304A\u59EB\u3055\u307E\u306B\u306A\u308A\u305F\u3044\u3001\u6CE1\u6CAB\u305F\u3086\u305F\u3046Vsinger \u{1F41F}
\u5922\u5DDD\u304B\u306A\u3046\u3058\u3083\u3088\u3001\u3061\u3087\u3063\u3068\u4F11\u61A9\u3057\u3066\u3044\u3053\u301C
\u30A4\u30E1\u30FC\u30B8\u661F\u5EA7\u4E00\u9B5A\u5EA7 \uFF0F \u661F\u8A00\u8449\u306F\u300C\u9B45\u529B\u3042\u3075\u308C\u308B\u82B8\u8853\u7684\u80FD\u300D`,links:[{icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',label:"X (Twitter)",url:"https://twitter.com/Kanau_Yumekawa"},{icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.58 7.17a2.51 2.51 0 0 0-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.4A2.51 2.51 0 0 0 2.42 7.17 26.9 26.9 0 0 0 2 12a26.9 26.9 0 0 0 .42 4.83 2.51 2.51 0 0 0 1.77 1.77c1.56.4 7.81.4 7.81.4s6.25 0 7.81-.4a2.51 2.51 0 0 0 1.77-1.77A26.9 26.9 0 0 0 22 12a26.9 26.9 0 0 0-.42-4.83ZM10 15.43V8.57L16 12l-6 3.43Z"/></svg>',label:"YouTube",url:"https://www.youtube.com/@YumekawaKanau"},{icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>',label:"official store",url:"https://react.booth.pm"},{icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"/></svg>',label:"official site",url:"https://v-react.com"},{icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>',label:"Apple Music",url:"https://music.apple.com/jp/artist/1614216914"},{icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>',label:"Spotify",url:"https://open.spotify.com/intl-ja/artist/0sVSaI5Q6w9zNWeNkILwLQ"}],avatarUrl:"https://yt3.googleusercontent.com/n3rxKDtxPPTKJvicX3gH7Zcsb0POnFranvtpOJVNEHiIoO5byTcKBSJkdixlfvFs1KqMzxLfG78=s176-c-k-c0x00ffffff-no-rj-mo",bannerUrl:"https://yt3.googleusercontent.com/khwuxCUEYr__Mkl4ReGfyihrgGNoL0bh5yjGOO_XIBO03pXgqpVpp7_Ebv1IlUDy_EDryDjyXA=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"},old:{name:"\u5922\u5DDD\u304B\u306A\u3046 / Kanau ch",handle:"@Kanau_Yumekawa",url:"https://www.youtube.com/@Kanau_Yumekawa",label:"\u65E7ch",desc:`\u{1F41F}\u59EB\u306B\u306A\u308A\u305F\u3044\u30A2\u30A4\u30C9\u30EBVtuber\u5922\u5DDD\u304B\u306A\u3046 \u{1F41F}
\u30A4\u30E1\u30FC\u30B8\u661F\u5EA7:\u3046\u304A\u5EA7 \uFF0F \u661F\u8A00\u8449\u300A\u9B45\u529B\u3042\u3075\u308C\u308B\u82B8\u8853\u7684\u624D\u80FD\u300B
\u6B32\u3057\u3044\u8A00\u8449\u3092\u6B32\u3057\u3044\u58F0\u3067\u5C4A\u3051\u307E\u3059*.+\u309C
\u548C\u83D3\u5B50\u304C\u5927\u597D\u7269\u306A\u3093\u3058\u3083\u3042\u301C( \u02D9\u02D9 ) \u548C\u83D3\u5B50\u60C5\u5831\u3084\u304A\u3059\u3059\u3081\u30B2\u30FC\u30E0\u306A\u3069\u4F55\u304B\u3042\u308C\u3070
#\u5922\u5DDD\u805E\u3044\u3066 \u3092\u6C17\u8EFD\u306B\u4F7F\u3063\u3066\u30C4\u30A4\u30FC\u30C8\u3057\u3066\u304F\u308C\uFF01\u4F55\u3067\u3082\u826F\u3044\u305E\uFF01@Re:AcT\u6240\u5C5E`,links:[{icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.58 7.17a2.51 2.51 0 0 0-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.4A2.51 2.51 0 0 0 2.42 7.17 26.9 26.9 0 0 0 2 12a26.9 26.9 0 0 0 .42 4.83 2.51 2.51 0 0 0 1.77 1.77c1.56.4 7.81.4 7.81.4s6.25 0 7.81-.4a2.51 2.51 0 0 0 1.77-1.77A26.9 26.9 0 0 0 22 12a26.9 26.9 0 0 0-.42-4.83ZM10 15.43V8.57L16 12l-6 3.43Z"/></svg>',label:"\u65B0\u30C1\u30E3\u30F3\u30CD\u30EB\u306F\u3053\u3061\u3089",url:"https://www.youtube.com/@YumekawaKanau"},{icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',label:"X (Twitter)",url:"https://twitter.com/Kanau_Yumekawa"}],avatarUrl:"https://yt3.googleusercontent.com/RzGaNftqAH8jHQ_o4jwgzi28yV6Qm6kl_-UdxfQOTG69PmumlfgSb1gNj0rtduR5eQywPzoiuA=s900-c-k-c0x00ffffff-no-rj",bannerUrl:"https://yt3.googleusercontent.com/o5PE0uSJL6gWyisa1As1SRmJgerzaf2BG4OdBwEz-9slJ2KQGONpciczZbHNNfUgJ7_549G3=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"}};function vn(t){let e=Sp[t];if(!e)return"";let s=e.bannerUrl?`<img class="ch-card-banner-img" src="${m(e.bannerUrl)}" alt="" loading="lazy" referrerpolicy="no-referrer">
       <span class="ch-card-banner-label ch-card-banner-label--over">${m(e.label)}</span>`:`<span class="ch-card-banner-label">${m(e.label)}</span>`,n=e.avatarUrl?`<img class="ch-card-avatar-img" src="${m(e.avatarUrl)}" alt="${m(e.name)}" loading="lazy" referrerpolicy="no-referrer">`:t==="new"?"\u65B0":"\u65E7",a=e.desc?`<p class="ch-card-desc">${e.desc.split(`
`).map(r=>m(r)).join("<br>")}</p>`:"",i=e.links?.length?`
    <div class="ch-card-links">
      ${e.links.map(r=>`
        <a class="ch-card-link" href="${m(r.url)}" target="_blank" rel="noopener">
          <span class="ch-card-link-icon" aria-hidden="true">${r.icon}</span>
          <span>${m(r.label)}</span>
        </a>`).join("")}
    </div>`:"";return`
    <div class="ch-card ch-card--${t}">
      <div class="ch-card-banner ch-card-banner--${t}${e.bannerUrl?" ch-card-banner--img":""}">
        ${s}
      </div>
      <div class="ch-card-body">
        <div class="ch-card-header">
          <div class="ch-card-avatar ch-card-avatar--${t}${e.avatarUrl?" ch-card-avatar--img":""}">${n}</div>
          <div class="ch-card-meta">
            <div class="ch-card-name">${m(e.name)}</div>
            <div class="ch-card-handle">${m(e.handle)}</div>
          </div>
        </div>
        ${a}
        ${i}
        <div class="ch-card-actions">
          <a class="ch-card-yt-btn" href="${m(e.url)}" target="_blank" rel="noopener">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z"/></svg>
            YouTube\u30C1\u30E3\u30F3\u30CD\u30EB\u3078
          </a>
        </div>
      </div>
    </div>`}function xp(t){let e=d("#ch-modal"),s=d("#ch-modal-body");if(!e||!s)return;let n="";t==="new"?n=vn("new"):t==="old"?n=vn("old"):n=vn("new")+vn("old"),s.innerHTML=n,e.hidden=!1,d("#ch-modal-close")?.focus()}function Lp(){let t=d("#ch-modal"),e=d("#ch-modal-close");if(!t||!e)return;let s=()=>{t.hidden=!0};e.addEventListener("click",s),t.addEventListener("click",n=>{n.target===t&&s()}),document.querySelectorAll("[data-ch-modal]").forEach(n=>{n.addEventListener("click",()=>xp(n.dataset.chModal))})}function Mp(){let t=d("#help-modal"),e=d("#help-btn"),s=d("#help-close");if(!t||!e||!s)return;let n=()=>{t.hidden=!1,s.focus()},a=()=>{t.hidden=!0,e.focus()};e.addEventListener("click",n),s.addEventListener("click",a),t.addEventListener("click",i=>{i.target===t&&a()}),document.addEventListener("keydown",i=>{i.key==="Escape"&&!t.hidden&&a()})}function Tp(){let t=d("#welcome-tip"),e=d("#welcome-close");if(!t||!e||window.matchMedia("(max-width: 760px)").matches||localStorage.getItem("kanau-welcome-tip-dismissed")==="1")return;let s=()=>{t.hidden=!1};"requestIdleCallback"in window?window.requestIdleCallback(s,{timeout:5e3}):window.setTimeout(s,2500),e.addEventListener("click",()=>{t.hidden=!0,localStorage.setItem("kanau-welcome-tip-dismissed","1")})}async function Si(){yp();try{let t=await Qi();u.channelData=t,!Se&&!t.fullLoaded&&Fo();let e=St(),s=!!e.v;u.songsQuery=e.q,u.activeTab=s?"player":oi(e.tab)?e.tab:"dashboard",ci(u.activeTab);let n=e.channel||u.channel||Oe;if(Ft(n)||(n=Oe),!Ft(n)){let a=Object.keys(t.channels)[0];a&&(n=a)}if(!Ft(n))throw new Error("No channel data could be loaded");Nu(),Sn(n,{resetSearch:!1,updateUrl:!1,autoLoad:!0,initial:!0,render:!s}),s&&(await Qu()||mt(e.tab,{updateUrl:!1,initial:!0})),$p(),Gu()}catch(t){console.error("[init] failed:",t),wp(t)}}function _p(){if(!u.channelData)return;let t=St();u.songsQuery=t.q,t.channel!==u.channel&&Ft(t.channel)&&Sn(t.channel,{resetSearch:!1,updateUrl:!1}),mt(t.tab,{updateUrl:!1})}W(".tab-btn").forEach(t=>{t.addEventListener("click",()=>{let e=t.dataset.tab,s=d("#stream-viewer");if(e!=="player"&&s&&!s.hidden&&!pt&&!At(s)){cs=e,os();return}mt(e)})});W(".ch-btn").forEach(t=>{t.addEventListener("click",()=>{t.dataset.channel&&(t.disabled||Sn(t.dataset.channel))})});window.addEventListener("popstate",_p);W("[data-audience]").forEach(t=>{t.addEventListener("click",()=>Au(t.dataset.audience))});document.body.addEventListener("click",t=>{let e=t.target.closest(".timeline-setlist .setlist-title[data-songkey]");if(e){t.preventDefault(),t.stopPropagation(),ri(e.dataset.songkey);return}let s=t.target.closest("[data-artist-search]");if(s){t.preventDefault(),t.stopPropagation(),ui(s.dataset.artistSearch||s.textContent||"");return}let n=t.target.closest("[data-playlist-add]");if(n){t.preventDefault(),t.stopPropagation();let r=n.dataset.playlistAdd,o=n.dataset.streamTitle||"",l=c=>{n.classList.toggle("is-saved",c),n.classList.contains("timeline-save-btn")&&(n.innerHTML=b("bookmark")),n.title=c?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58"};Promise.resolve().then(()=>(ke(),es)).then(c=>c.showAddToPlaylistModal(r,o,{onChange:l}));return}let a=t.target.closest("[data-stream-play]");if(a){t.preventDefault(),t.stopPropagation();let r=a.dataset.streamPlay,o=(u.data?.streams||[]).find(l=>z(l)===r);o?.url&&V(o);return}if(Oi(t.target))return;let i=t.target.closest("[data-songkey]");i&&ri(i.dataset.songkey)});d("#retry-btn").addEventListener("click",Si);d("#reload-btn").addEventListener("click",Si);Mp();Lp();hi();pl();gp();Iu();Pu();Du();Hu();Tp();Promise.resolve().then(()=>(Wt(),Qt)).then(t=>{t.setApiLoader(fi),t.initMusicPlayer()}).catch(()=>{});Er(t=>{t.type==="song"?ri(t.song.key):t.type==="artist"?ui(t.artist):t.type==="stream"?V(t.stream):t.type==="music-video"&&V({...t.video,isMv:!0})});document.addEventListener("keydown",t=>{let e=document.activeElement?.tagName,s=e==="INPUT"||e==="TEXTAREA"||e==="SELECT";if(!s&&!t.metaKey&&!t.ctrlKey&&!t.altKey){let a=d("#stream-viewer");if(a&&!a.hidden&&!a.classList.contains("sv-minified")&&!a.classList.contains("sv-music-minified")&&d("#sv-share-modal")?.hidden!==!1&&k){if(t.key===" "){t.preventDefault();try{k.getPlayerState?.()===window.YT?.PlayerState?.PLAYING?k.pauseVideo():k.playVideo()}catch{}return}if(t.key==="ArrowLeft"||t.key==="ArrowRight"){t.preventDefault();try{let r=k.getCurrentTime?.()??0,o=Math.max(0,r+(t.key==="ArrowRight"?10:-10));k.seekTo(o,!0)}catch{}return}}}if(t.key==="/"&&!s&&!t.metaKey&&!t.ctrlKey||t.key==="k"&&(t.ctrlKey||t.metaKey)&&!t.shiftKey){t.preventDefault(),Cr();return}if(t.key==="t"&&!s&&!t.metaKey&&!t.ctrlKey){t.preventDefault(),va();return}if(t.key==="?"&&!s&&!t.metaKey&&!t.ctrlKey){t.preventDefault();let a=d("#help-modal");a&&a.hidden&&(a.hidden=!1,d("#help-close")?.focus());return}if(t.key==="Escape"&&!t.metaKey&&!t.ctrlKey){let a=d("#stream-viewer"),i=!!d("#panel-player.active");if(a&&!a.hidden&&(pt||i)){t.preventDefault(),os();return}if(Ta()){t.preventDefault(),Ke();return}let r=d("#song-modal");if(r&&!r.hidden)return;let o=d("#ch-modal");if(o&&!o.hidden){o.hidden=!0;return}let l=d("#help-modal");if(l&&!l.hidden){l.hidden=!0,d("#help-btn")?.focus();return}let c=d("#songs-search");c&&document.activeElement===c&&c.value&&(t.preventDefault(),c.value="",c.dispatchEvent(new Event("input",{bubbles:!0})))}});Sr(()=>{u.data&&($a(),(u.activeTab==="dashboard"||u.activeTab==="analytics")&&ee())});function Ep(){Si()}Ep();export{ju as getWatchHistory};
