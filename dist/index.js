(()=>{"use strict";window.checkIfDisabled=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n="https://fluxconsole.com/api/org/".concat(e);fetch(n).then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(e){e.hasOwnProperty("disabled")&&!0===e.disabled&&window.location.replace("https://www.modiphy.com/disabled")})).catch((function(e){console.error("There was a problem with the fetch operation:",e.message)})),t&&document.addEventListener("DOMContentLoaded",(function(){var e,t,n;(e=document.createElement("script")).textContent="(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n    })(window,document,'script','dataLayer','GTM-W7SN393');",document.head.appendChild(e),t=document.createElement("noscript"),(n=document.createElement("iframe")).src="https://www.googletagmanager.com/ns.html?id=GTM-W7SN393",n.height="0",n.width="0",n.style.display="none",n.style.visibility="hidden",t.appendChild(n),document.body.appendChild(t)}))}})();