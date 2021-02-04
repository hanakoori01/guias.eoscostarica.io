(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),o=(n(0),n(130)),i={id:"instalacion-de-nodos",title:"Instalaci\xf3n de Nodos",sidebar_label:"Instalaci\xf3n de Nodos"},s={unversionedId:"tutoriales/instalacion-de-nodos",id:"tutoriales/instalacion-de-nodos",isDocsHomePage:!1,title:"Instalaci\xf3n de Nodos",description:"Versi\xf3n EOSIO : v2.0.6",source:"@site/docs/tutoriales/instalacion-de-nodos.md",slug:"/tutoriales/instalacion-de-nodos",permalink:"/docs/tutoriales/instalacion-de-nodos",editUrl:"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/tutoriales/instalacion-de-nodos.md",version:"current",lastUpdatedBy:"Leister Francisco Alvarez Campos",lastUpdatedAt:1612469641,sidebar_label:"Instalaci\xf3n de Nodos",sidebar:"docs",previous:{title:"Componentes EOSIO",permalink:"/docs/aprender-eosio/componentes-eosio"},next:{title:"Contrato Hola Mundo",permalink:"/docs/tutoriales/contrato-hola-mundo"}},c=[{value:"Instale EOSIO desde Binarios Precompilados",id:"instale-eosio-desde-binarios-precompilados",children:[{value:"Desinstalar Script",id:"desinstalar-script",children:[]}]},{value:"Configurar el Nodo Jungle Testnet",id:"configurar-el-nodo-jungle-testnet",children:[{value:"Iniciar y Detener Nodeos",id:"iniciar-y-detener-nodeos",children:[]}]}],l={toc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Versi\xf3n EOSIO : ",Object(o.b)("inlineCode",{parentName:"p"},"v2.0.6")),Object(o.b)("p",null,"Chain ID: ",Object(o.b)("inlineCode",{parentName:"p"},"2a02a0053e5a8cf73a56ba0fda11e4d92e0238a4a2aa74fccf46d5a910746840")),Object(o.b)("p",null,"Archivo G\xe9nesis : ",Object(o.b)("inlineCode",{parentName:"p"},"genesis.json")),Object(o.b)("h2",{id:"instale-eosio-desde-binarios-precompilados"},"Instale EOSIO desde Binarios Precompilados"),Object(o.b)("p",null,"Descargue la \xfaltima versi\xf3n de EOSIO para su sistema operativo desde: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/EOSIO/eos/releases/tag/v2.0.6"},"Github"),"."),Object(o.b)("p",null,"Por ejemplo, para ubuntu 18.04 necesitas descargar ",Object(o.b)("inlineCode",{parentName:"p"},"eosio_2.0.6-1-ubuntu-18.04_amd64.deb"),"."),Object(o.b)("p",null,"Puedes usar apt para instalarlo:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/eosio/eos/releases/download/v2.0.6/eosio_2.0.6-1-ubuntu-18.04_amd64.deb\nsudo apt install ./eosio_2.0.6-1-ubuntu-18.04_amd64.deb\n")),Object(o.b)("p",null,"Descargar\xe1 todas las dependencias e instalar\xe1 EOSIO a ",Object(o.b)("inlineCode",{parentName:"p"},"/usr/opt/eosio/v2.0.6"),"."),Object(o.b)("h3",{id:"desinstalar-script"},"Desinstalar Script"),Object(o.b)("p",null,"Para desinstalar los binarios y dependencias instaladas de EOSIO, ejecute:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"./scripts/eosio_uninstall.sh\n")),Object(o.b)("h2",{id:"configurar-el-nodo-jungle-testnet"},"Configurar el Nodo Jungle Testnet"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"mkdir ~/Jungle-testnet\ncd ~/Jungle-testnet\ngit clone https://github.com/Jungle/testnet.git ./\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Editar config.ini"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Ingrese la direcci\xf3n externa de su servidor: ",Object(o.b)("inlineCode",{parentName:"li"},"p2p-server-address = YOUR_DOMAIN_OR_IP: 9876")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Abra los puertos TCP (8888, 9876) en su firewall / enrutador"))),Object(o.b)("p",null,"Especifique un archivo genesis.json la primera vez que ejecute nodeos."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"./start.sh --delete-all-blocks --genesis-json genesis.json\n")),Object(o.b)("p",null,"Siga los registros para verificar que su nodo est\xe9 funcionando correctamente."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"tail -f stderr.txt\n")),Object(o.b)("p",null,"Compruebe si puede acceder a su nodo mediante el enlace ",Object(o.b)("inlineCode",{parentName:"p"},"http://**SERVIDOR**/v1/chain/get_info"),"."),Object(o.b)("p",null,"Aqu\xed hay una API ",Object(o.b)("a",{parentName:"p",href:"https://lacchain.eosio.cr/v1/chain/get_info"},"Ejemplo"),"."),Object(o.b)("h3",{id:"iniciar-y-detener-nodeos"},"Iniciar y Detener Nodeos"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"./start.sh"),": Inicia y reinicia el servicio Nodeos.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"./stop.sh"),": Realiza un cierre ordenado del servicio Nodeos."))))}d.isMDXComponent=!0},130:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(n),b=a,O=p["".concat(i,".").concat(b)]||p[b]||u[b]||o;return n?r.a.createElement(O,s(s({ref:t},l),{},{components:n})):r.a.createElement(O,s({ref:t},l))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);