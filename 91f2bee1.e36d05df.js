(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{100:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return o})),n.d(a,"metadata",(function(){return c})),n.d(a,"toc",(function(){return l})),n.d(a,"default",(function(){return u}));var t=n(3),i=n(7),r=(n(0),n(133)),o={id:"funciones-importantes",title:"Funciones Importantes en EOSIO",sidebar_label:"Funciones Importantes"},c={unversionedId:"aprender-eosio/funciones-importantes",id:"aprender-eosio/funciones-importantes",isDocsHomePage:!1,title:"Funciones Importantes en EOSIO",description:"Cuenta Privilegiada EOSIO",source:"@site/docs/aprender-eosio/funciones-importantes.md",slug:"/aprender-eosio/funciones-importantes",permalink:"/docs/aprender-eosio/funciones-importantes",editUrl:"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/aprender-eosio/funciones-importantes.md",version:"current",lastUpdatedBy:"Steph Delgado",lastUpdatedAt:1613054094,sidebar_label:"Funciones Importantes",sidebar:"docs",previous:{title:"Cuentas y Permisos",permalink:"/docs/aprender-eosio/cuentas-permisos"},next:{title:"Manejo de Llaves Privadas",permalink:"/docs/aprender-eosio/llaves-privadas"}},l=[{value:"Cuenta Privilegiada EOSIO",id:"cuenta-privilegiada-eosio",children:[]},{value:"Funciones Privilegiadas EOSIO",id:"funciones-privilegiadas-eosio",children:[{value:"set_resource_limits",id:"set_resource_limits",children:[]},{value:"set_prods",id:"set_prods",children:[]},{value:"set_params",id:"set_params",children:[]},{value:"set_privileged",id:"set_privileged",children:[]}]},{value:"Acciones de Sistema",id:"acciones-de-sistema",children:[{value:"new_account",id:"new_account",children:[]},{value:"set code",id:"set-code",children:[]},{value:"set abi",id:"set-abi",children:[]},{value:"updateauth",id:"updateauth",children:[]},{value:"deleteauth",id:"deleteauth",children:[]},{value:"linkauth",id:"linkauth",children:[]},{value:"unlinkauth",id:"unlinkauth",children:[]}]},{value:"Contrato Nativo <code>eosio.token</code>",id:"contrato-nativo-eosiotoken",children:[{value:"create",id:"create",children:[]},{value:"issue",id:"issue",children:[]},{value:"retire",id:"retire",children:[]},{value:"transfer",id:"transfer",children:[]}]}],s={toc:l};function u(e){var a=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(t.a)({},s,n,{components:a,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"cuenta-privilegiada-eosio"},"Cuenta Privilegiada EOSIO"),Object(r.b)("p",null,"Esta cuenta tiene acceso ilimitado a los recursos de CPU, NET y RAM que representan la m\xe1xima autoridad de la red que puede ejecutar funciones privilegiadas."),Object(r.b)("p",null,'Por lo general, esta autoridad se invoca mediante un contrato de firma m\xfaltiple (o "firma m\xfaltiple") que requerir\xe1 el consentimiento de una supermayor\xeda de los productores de bloques. Esta cuenta privilegiada se llamar\xe1 cuenta ',Object(r.b)("inlineCode",{parentName:"p"},"eosio"),"."),Object(r.b)("h2",{id:"funciones-privilegiadas-eosio"},"Funciones Privilegiadas EOSIO"),Object(r.b)("p",null,"Los contratos inteligentes de EOSIO son simples archivos de WebAssembly. El formato WebAssembly permite definir importaciones, funciones que no se declaran en WASM en s\xed pero en el entorno en el que se ejecuta el c\xf3digo de WebAssembly. EOSIO utiliza estas funciones integradas (intr\xednsecas) para intercambiar datos entre el c\xf3digo de contrato de WebAssembly y el nodo EOSIO ",Object(r.b)("inlineCode",{parentName:"p"},"nodeos"),". Cada vez que la m\xe1quina virtual EOS (EOSVM), que ejecuta el c\xf3digo de WebAssembly, llega a un nivel intr\xednseco, el control del programa se transfiere al c\xf3digo del controlador de nodo para resolverlo. Una lista completa de funciones intr\xednsecas para EOSIO 2.0.X se puede encontrar ",Object(r.b)("a",{parentName:"p",href:"https://github.com/EOSIO/eosio.cdt/blob/a6b8d3fc289d46f4612588cdd7223a3d549238f6/libraries/native/native/eosio/intrinsics_def.hpp#L42-L160"},"aqu\xed"),"."),Object(r.b)("h3",{id:"set_resource_limits"},"set_resource_limits"),Object(r.b)("p",null,"Actualiza los limites de recursos asociados a una cuenta."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"account:  La cuenta destino\nram_bytes:  El limite de RAM en bytes\nnet_weight:  El weight para determinar su capacidad de NET\ncpu_weight:  El weight para determinar su capacidad de CPU\n")),Object(r.b)("h3",{id:"set_prods"},"set_prods"),Object(r.b)("p",null,"Establece una nueva lista de productores(validadores) activos. Una vez que el bloque con la propuesta se vuelve irreversible los nuevos productores se vuelven activos."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"schedule: JSON con lista de productores y sus signing keys\n")),Object(r.b)("h3",{id:"set_params"},"set_params"),Object(r.b)("p",null,"Modifica uno o varios par\xe1metros de la blockchain."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"max_block_net_usage"),": La cantidad maxima de uso de net en un bloque."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"target_block_net_usage_pct"),": El porcentaje de uso maximo de net, pasado este limite la red entra en modo congestion."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"max_transaction_net_usage"),": El uso maximo de net que la chain va a permitir, mas alla de los limites de la cuenta."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"base_per_transaction_net_usage"),": El monto base de uso neto facturado por una transacci\xf3n para cubrir imprevistos."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"context_free_discount_net_usage_num"),": El numerador para el descuento en el uso neto de datos sin contexto."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"context_free_discount_net_usage_den"),": El denominador para el descuento en el uso neto de datos sin contexto."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"max_block_cpu_usage"),": El uso m\xe1ximo de la CPU facturable (en microsegundos) para un bloque."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"target_block_cpu_usage_pct"),": El porcentaje objetivo (1% == 100, 100% = 10,000) del uso m\xe1ximo de CPU; exceder esto desencadena el manejo de la congesti\xf3n."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"max_transaction_cpu_usage"),": El uso m\xe1ximo de CPU facturable (en microsegundos) que la cadena permitir\xe1 independientemente de los l\xedmites de la cuenta."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"min_transaction_cpu_usage"),": El uso m\xednimo de CPU facturable (en microsegundos) que requiere la cadena."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"max_transaction_lifetime"),": El n\xfamero m\xe1ximo de segundos que la caducidad de una transacci\xf3n de entrada puede adelantarse a la hora del bloque en el que se incluye por primera vez."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"deferred_trx_expiration_window"),": El n\xfamero de segundos despu\xe9s del tiempo en que una transacci\xf3n diferida puede ejecutarse primero hasta que caduque."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"max_transaction_delay"),": El n\xfamero m\xe1ximo de segundos que pueden imponerse como requisito de retraso mediante verificaciones de autorizaci\xf3n."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"max_inline_action_size"),": Tama\xf1o m\xe1ximo permitido (en bytes) de una acci\xf3n en l\xednea."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"max_inline_action_depth"),": L\xedmite de profundidad de recursi\xf3n al enviar acciones en l\xednea."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"max_authority_depth"),": L\xedmite de profundidad de recursi\xf3n para verificar si una autoridad est\xe1 satisfecha.")),Object(r.b)("h3",{id:"set_privileged"},"set_privileged"),Object(r.b)("p",null,"Permite establecer como privilegiada a una cuenta."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"account: La cuenta que se quiere setear como privilegiada.\nis_priv:  0 para falso, mayor a 0 para verdadero.\n")),Object(r.b)("h2",{id:"acciones-de-sistema"},"Acciones de Sistema"),Object(r.b)("p",null,"Estas acciones no requieren ser ejecutadas por una cuenta privilegiada."),Object(r.b)("h3",{id:"new_account"},"new_account"),Object(r.b)("p",null,"Crea una cuenta nueva."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"creator: Nombre de la cuenta que crea la cuenta nueva.\nname: Nombre de la cuenta nueva.\nowner: Owner public key.\nactive: Active public key.\n")),Object(r.b)("h3",{id:"set-code"},"set code"),Object(r.b)("p",null,"Set code establecer o actualizar un contrato inteligente en una cuenta."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"account: La cuenta a la que se desea publicar un contrato.\ncode: El c\xf3digo en forma de BLOB binario.\n")),Object(r.b)("h3",{id:"set-abi"},"set abi"),Object(r.b)("p",null,"Permite establecer o actualizar el abi para el contrato inteligente, se identifica por account_name."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"account: El nombre de la cuenta destino.\nabi:  El abi.\n")),Object(r.b)("h3",{id:"updateauth"},"updateauth"),Object(r.b)("p",null,"Actualiza los permisos de una cuenta."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"account:  La cuenta que se desea modificar.\npemission:  El nombre del nuevo permiso.\nparent: El permiso padre del nuevo permiso.\nauth: El json definiendo la autorizaci\xf3n de permisos.\n")),Object(r.b)("h3",{id:"deleteauth"},"deleteauth"),Object(r.b)("p",null,"elimina la autorizaci\xf3n de permisos de una cuenta."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"account: La cuenta destino.\npermission: El nombre del permiso que se desea eliminar.\n")),Object(r.b)("h3",{id:"linkauth"},"linkauth"),Object(r.b)("p",null,"Asigna una acci\xf3n especifica de un contrato a un permiso especifico, cinco acciones no pueden ser linkeadas updateauth, deleteauth, linkauth, unlikauth, canceldelay."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"account: Cuenta destino.\ncode: Cuenta owner de la acci\xf3n que se desea linkear.\ntype: La accion que se desea linkear.\nrequirement: El permiso a linkear.\n")),Object(r.b)("h3",{id:"unlinkauth"},"unlinkauth"),Object(r.b)("p",null,"Es la reversa de linkauth."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"account: Cuenta destino.\ncode: Cuenta owner de la accion que se desea deslinkear.\ntype: La acci\xf3n que se desea deslinkear.\n")),Object(r.b)("h2",{id:"contrato-nativo-eosiotoken"},"Contrato Nativo ",Object(r.b)("inlineCode",{parentName:"h2"},"eosio.token")),Object(r.b)("p",null,"Estas acciones pueden ser ejecutadas por cualquier cuenta con el fin de emitir un token propio."),Object(r.b)("h3",{id:"create"},"create"),Object(r.b)("p",null,"Le permite a una cuenta issuer crear un token."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"issuer: La cuenta que crea el token.\nmaximum_supply: La cantidad maxima junto al simbolo del token.\n")),Object(r.b)("h3",{id:"issue"},"issue"),Object(r.b)("p",null,"Esta acci\xf3n distribuye a una cuenta una cantidad de tokens determinada."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"to: Cuenta a la que se distribuyen los tokens.\nquantity: La cantidad de tokens a distribuir.\nmemo: memo que acompa\xf1a la distribuci\xf3n inicial de tokens.\n")),Object(r.b)("h3",{id:"retire"},"retire"),Object(r.b)("p",null,"El opuesto a crear un token."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"quantity: La cantidad de tokens a retirar.\nmemo : El memo que acompa\xf1a la transacci\xf3n.\n")),Object(r.b)("h3",{id:"transfer"},"transfer"),Object(r.b)("p",null,'Transfiere de una cuenta origen a una cuenta destino una cantidad "n" de tokens.'),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"from: Cuenta origen desde donde se debitan los tokens.\no: Cuenta destino a la que acreditar los tokens.\nquantity: La cantidad de tokens.\nmemo: Memo que acompa\xf1a la transacci\xf3n.\n")))}u.isMDXComponent=!0},133:function(e,a,n){"use strict";n.d(a,"a",(function(){return d})),n.d(a,"b",(function(){return m}));var t=n(0),i=n.n(t);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var a=i.a.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):c(c({},a),e)),n},d=function(e){var a=u(e.components);return i.a.createElement(s.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return i.a.createElement(i.a.Fragment,{},a)}},b=i.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),b=t,m=d["".concat(o,".").concat(b)]||d[b]||p[b]||r;return n?i.a.createElement(m,c(c({ref:a},s),{},{components:n})):i.a.createElement(m,c({ref:a},s))}));function m(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var r=n.length,o=new Array(r);o[0]=b;var c={};for(var l in a)hasOwnProperty.call(a,l)&&(c[l]=a[l]);c.originalType=e,c.mdxType="string"==typeof e?e:t,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);