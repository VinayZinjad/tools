if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let t={};const l=e=>i(e,o),c={module:{uri:o},exports:t,require:l};s[o]=Promise.all(n.map((e=>c[e]||l(e)))).then((e=>(r(...e),t)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-9qyKyCgq.css",revision:null},{url:"assets/index-bJKEk2ou.js",revision:null},{url:"index.html",revision:"925b47e73fb29f1d5e78a4dea2dc1d41"},{url:"registerSW.js",revision:"4295883455732da3e09adfd58fd0406c"},{url:"logo.png",revision:"cc3405b8413883e284e69c32a0b611fc"},{url:"logo.svg",revision:"6b4ed6996cca75c407f73a6d62a9e731"},{url:"manifest.webmanifest",revision:"869d85c11cdb3fe6270a271fbd93e621"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
