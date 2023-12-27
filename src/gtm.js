// Function to add the Google Tag Manager script to the <head>
export function addGtmToHead() {
  var gtmScript = document.createElement('script')
  gtmScript.textContent = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-W7SN393');`

  document.head.appendChild(gtmScript)
}

// Function to add the noscript Google Tag Manager iframe to the <body>
export function addGtmToBody() {
  var gtmNoScript = document.createElement('noscript')
  var gtmIframe = document.createElement('iframe')
  gtmIframe.src = 'https://www.googletagmanager.com/ns.html?id=GTM-W7SN393'
  gtmIframe.height = '0'
  gtmIframe.width = '0'
  gtmIframe.style.display = 'none'
  gtmIframe.style.visibility = 'hidden'

  gtmNoScript.appendChild(gtmIframe)
  document.body.appendChild(gtmNoScript)
}
