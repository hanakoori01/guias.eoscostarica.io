(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{107:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),b=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=b(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=b(r),p=n,m=l["".concat(c,".").concat(p)]||l[p]||d[p]||a;return r?o.a.createElement(m,s(s({ref:t},u),{},{components:r})):o.a.createElement(m,s({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var u=2;u<a;u++)c[u]=r[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},72:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return b}));var n=r(2),o=r(6),a=(r(0),r(107)),c={id:"devops",title:"DevOps",sidebar_label:"DevOps"},s={unversionedId:"devops",id:"devops",isDocsHomePage:!1,title:"DevOps",description:"En EOS Costa Rica seguimos los principios de DevOps para construir y desplegar software.",source:"@site/docs/devops.md",slug:"/devops",permalink:"/docs/devops",editUrl:"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/devops.md",version:"current",lastUpdatedBy:"Xavier Fernandez",lastUpdatedAt:1599080038,sidebar_label:"DevOps",sidebar:"docs",previous:{title:"Metodolog\xedas Agiles",permalink:"/docs/metodologias-agiles"},next:{title:"Nuestras Herramientas Favoritas",permalink:"/docs/herramientas-para-desarrolladores"}},i=[{value:"Infraestructura como C\xf3digo (IAC)",id:"infraestructura-como-c\xf3digo-iac",children:[{value:"Introducci\xf3n a <strong>Terraform</strong>",id:"introducci\xf3n-a-terraform",children:[]},{value:"Introducci\xf3n a <strong>HashiCorp Terraform</strong>",id:"introducci\xf3n-a-hashicorp-terraform",children:[]}]},{value:"Infrastructura como c\xf3digo en EOS CR",id:"infrastructura-como-c\xf3digo-en-eos-cr",children:[]},{value:"Introducci\xf3n a Docker y Kubernetes",id:"introducci\xf3n-a-docker-y-kubernetes",children:[{value:"\xbfQu\xe9 es un <strong>contenedor</strong>?",id:"\xbfqu\xe9-es-un-contenedor",children:[]},{value:"Contenedores 101",id:"contenedores-101",children:[]},{value:"\xbfQu\xe9 es <strong>Docker</strong>?",id:"\xbfqu\xe9-es-docker",children:[]},{value:"<strong>Kubernetes</strong> en 5 minutos",id:"kubernetes-en-5-minutos",children:[]},{value:"Kubernetes vs. Docker: No es una pregunta de ambos o uno",id:"kubernetes-vs-docker-no-es-una-pregunta-de-ambos-o-uno",children:[]}]},{value:"Kubernetes en EOS Costa Rica",id:"kubernetes-en-eos-costa-rica",children:[]}],u={rightToc:i};function b(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"En EOS Costa Rica seguimos los principios de DevOps para construir y desplegar software."),Object(a.b)("p",null,"La automatizaci\xf3n es una de nuestras prioridades, todo desde organizaci\xf3n de archivos hasta optimizaci\xf3n de c\xf3digo, pruebas, despliegue y entrega."),Object(a.b)("p",null,"Comunicaci\xf3n continua y frecuentes llamadas de uno en uno as\xed como programaci\xf3n en parejas/grupos son partes esenciales de nuestro trabajo d\xeda a d\xeda."),Object(a.b)("hr",null),Object(a.b)("h2",{id:"infraestructura-como-c\xf3digo-iac"},"Infraestructura como C\xf3digo (IAC)"),Object(a.b)("figure",{class:"video_container"},Object(a.b)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/53X-HAw7BbA",frameborder:"0",allowfullscreen:"true"}," ")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"introducci\xf3n-a-terraform"},"Introducci\xf3n a ",Object(a.b)("strong",{parentName:"h3"},"Terraform")),Object(a.b)("figure",{class:"video_container"},Object(a.b)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/cpxKbf51ccU",frameborder:"0",allowfullscreen:"true"}," ")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"introducci\xf3n-a-hashicorp-terraform"},"Introducci\xf3n a ",Object(a.b)("strong",{parentName:"h3"},"HashiCorp Terraform")),Object(a.b)("figure",{class:"video_container"},Object(a.b)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/h970ZBgKINg",frameborder:"0",allowfullscreen:"true"}," ")),Object(a.b)("h2",{id:"infrastructura-como-c\xf3digo-en-eos-cr"},"Infrastructura como c\xf3digo en EOS CR"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Documentaci\xf3n de Openstack")),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/edenia/openstack-docs"}),"https://github.com/edenia/openstack-docs")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Documentaci\xf3n de Kubernetes ")),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/edenia/openstack-docs/blob/master/Kubernetes.md"}),"https://github.com/edenia/openstack-docs/blob/master/Kubernetes.md")),Object(a.b)("h2",{id:"introducci\xf3n-a-docker-y-kubernetes"},"Introducci\xf3n a Docker y Kubernetes"),Object(a.b)("h3",{id:"\xbfqu\xe9-es-un-contenedor"},"\xbfQu\xe9 es un ",Object(a.b)("strong",{parentName:"h3"},"contenedor"),"?"),Object(a.b)("figure",{class:"video_container"},Object(a.b)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/EnJ7qX9fkcU",frameborder:"0",allowfullscreen:"true"}," ")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"contenedores-101"},"Contenedores 101"),Object(a.b)("figure",{class:"video_container"},Object(a.b)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/VqLcWftIaQI",frameborder:"0",allowfullscreen:"true"}," ")),Object(a.b)("p",null,"Mira la completa introducci\xf3n a la lista de reproducci\xf3n de los contenedores aqu\xed:\n",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.youtube.com/embed/EnJ7qX9fkcU&list=PL7bmigfV0EqQt5_pBPQ8tsZjI1w68-e0H"}),"https://www.youtube.com/embed/EnJ7qX9fkcU&list=PL7bmigfV0EqQt5_pBPQ8tsZjI1w68-e0H")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"\xbfqu\xe9-es-docker"},"\xbfQu\xe9 es ",Object(a.b)("strong",{parentName:"h3"},"Docker"),"?"),Object(a.b)("figure",{class:"video_container"},Object(a.b)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/PfTKwblbkpE",frameborder:"0",allowfullscreen:"true"}," ")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"kubernetes-en-5-minutos"},Object(a.b)("strong",{parentName:"h3"},"Kubernetes")," en 5 minutos"),Object(a.b)("figure",{class:"video_container"},Object(a.b)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/PH-2FfFD2PU",frameborder:"0",allowfullscreen:"true"}," ")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"kubernetes-vs-docker-no-es-una-pregunta-de-ambos-o-uno"},"Kubernetes vs. Docker: No es una pregunta de ambos o uno"),Object(a.b)("figure",{class:"video_container"},Object(a.b)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/2vMEQ5zs1ko",frameborder:"0",allowfullscreen:"true"}," ")),Object(a.b)("h2",{id:"kubernetes-en-eos-costa-rica"},"Kubernetes en EOS Costa Rica"),Object(a.b)("p",null,"A continuaci\xf3n puedes encontrar un conjunto de sencillos tutoriales para aprender kubernetes desde cero:"),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://kubernetes.io/es/docs/tutorials/kubernetes-basics/"}),"https://kubernetes.io/es/docs/tutorials/kubernetes-basics/")),Object(a.b)("p",null,"Par probar los anteriores tutoriales en un ambiente real, podr\xedas utilizar nuestra instalaci\xf3n de kubernetes sobre Openstack.\nSi as\xed lo prefieres, tambi\xe9n puedes crear un cluster local en tu propia m\xe1quina: "),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://computingforgeeks.com/how-to-install-minikube-on-ubuntu-debian-linux/"}),"https://computingforgeeks.com/how-to-install-minikube-on-ubuntu-debian-linux/"),". "),Object(a.b)("p",null,"P\xeddele a alguno de nuestros administradores accesso al dashboard de nuestra instalaci\xf3n de Openstack y el projecto Sandbox.\nLuego puedes seguir los siguientes pasos:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Antes que nada conectate al nodo maestro usando tu herramienta de SSH:")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"ssh -i key.pem user@master-sandbox\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Obt\xe9n informaci\xf3n acerca del cluster:")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"kubectl cluster-info\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Mostrar los nodos disponibles en el cluster:")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"kubectl get nodes\n")))}b.isMDXComponent=!0}}]);