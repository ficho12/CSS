!function(){var n="tsdtocl",e="!-#@",t="ul",i="https:",o=atob("aHR0cHM6Ly90c2R0b2NsLmNvbQ=="),d={},r=i,a=-1,c,s;try{var w=function n(e){d[e.id]&&(d[e.id](e),delete d[e.id])},u=function e(t){var i;try{i=JSON.parse(t.data)}catch(n){}i&&i.namespace===n&&w(i)},f=function e(t,i,o,r){if(c){d[++a]=r;var s={namespace:n,id:a,action:t,key:i,value:o};return c&&c.contentWindow&&c.contentWindow.postMessage(JSON.stringify(s),"*"),s}},l=function n(e,t,i){return f("append",e,t,i)},g=function n(t){if(t&&"string"==typeof t&&-1!==t.indexOf(e)){var i=new Image;return i.src="".concat(r,"//trc.taboola.com/sg/taboola-ifs/1/um/?uils=").concat(encodeURIComponent(t)),i}},p=function n(e){if(e&&e.success){if(e.wasAppended&&e.value)return g(e.value)}else window.__trcDebug&&window.__trcDebug("ifsDebug=".concat(e?JSON.stringify(e):"null"));c&&c.remove(),window.removeEventListener("message",u,!1)},m=function n(){if(s)return l(t,s,p)},C=function n(){var e=window.TFASC&&window.TFASC.tfaUserId&&"function"==typeof window.TFASC.tfaUserId.getUserId?window.TFASC.tfaUserId.getUserId():null,t=window.TRC&&window.TRC.pageManager&&"function"==typeof window.TRC.pageManager.getUserId?window.TRC.pageManager.getUserId():null;return e||t},v=function n(e){window.addEventListener("message",u,!1),(c=document.createElement("iframe")).style.display="none",c.addEventListener("load",e),c.src=o,document.body.appendChild(c)},T=function n(){window.TRC.ifs.initialized||((s=C())&&(document.body?v(m):document.addEventListener("DOMContentLoaded",function(){v(m)})),window.TRC.ifs.initialized=!0)};window.TRC=window.TRC||{},window.TRC.ifs=window.TRC.ifs||{},T()}catch(n){window.__trcError&&window.__trcError("ifsError",n)}}();