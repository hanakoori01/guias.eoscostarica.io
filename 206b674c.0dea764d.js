(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{130:function(e,a,r){"use strict";r.d(a,"a",(function(){return p})),r.d(a,"b",(function(){return b}));var o=r(0),n=r.n(o);function t(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function i(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?i(Object(r),!0).forEach((function(a){t(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function l(e,a){if(null==e)return{};var r,o,n=function(e,a){if(null==e)return{};var r,o,n={},t=Object.keys(e);for(o=0;o<t.length;o++)r=t[o],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(o=0;o<t.length;o++)r=t[o],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),d=function(e){var a=n.a.useContext(s),r=a;return e&&(r="function"==typeof e?e(a):c(c({},a),e)),r},p=function(e){var a=d(e.components);return n.a.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},m=n.a.forwardRef((function(e,a){var r=e.components,o=e.mdxType,t=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(r),m=o,b=p["".concat(i,".").concat(m)]||p[m]||u[m]||t;return r?n.a.createElement(b,c(c({ref:a},s),{},{components:r})):n.a.createElement(b,c({ref:a},s))}));function b(e,a){var r=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var t=r.length,i=new Array(t);i[0]=m;var c={};for(var l in a)hasOwnProperty.call(a,l)&&(c[l]=a[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<t;s++)i[s]=r[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},133:function(e,a,r){"use strict";r.d(a,"b",(function(){return t})),r.d(a,"a",(function(){return i}));var o=r(22),n=r(136);function t(){var e=Object(o.default)().siteConfig,a=(e=void 0===e?{}:e).baseUrl,r=void 0===a?"/":a,t=e.url;return{withBaseUrl:function(e,a){return function(e,a,r,o){var t=void 0===o?{}:o,i=t.forcePrependBaseUrl,c=void 0!==i&&i,l=t.absolute,s=void 0!==l&&l;if(!r)return r;if(r.startsWith("#"))return r;if(Object(n.b)(r))return r;if(c)return a+r;var d=r.startsWith(a)?r:a+r.replace(/^\//,"");return s?e+d:d}(t,r,e,a)}}}function i(e,a){return void 0===a&&(a={}),(0,t().withBaseUrl)(e,a)}},136:function(e,a,r){"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!o(e)}r.d(a,"b",(function(){return o})),r.d(a,"a",(function(){return n}))},80:function(e,a,r){"use strict";r.r(a),r.d(a,"frontMatter",(function(){return c})),r.d(a,"metadata",(function(){return l})),r.d(a,"toc",(function(){return s})),r.d(a,"default",(function(){return p}));var o=r(3),n=r(7),t=(r(0),r(130)),i=r(133),c={id:"programacion-parejas-grupos",title:"Programaci\xf3n en Parejas o Grupos",sidebar_label:"Programaci\xf3n en Parejas o Grupos"},l={unversionedId:"programacion-parejas-grupos",id:"programacion-parejas-grupos",isDocsHomePage:!1,title:"Programaci\xf3n en Parejas o Grupos",description:"El desarrollo de un software nuevo no es un proceso sencillo, dependiendo del tama\xf1o del programa, se deber\xe1 tener en cuenta una gran cantidad de posibles coyunturas, funciones y cuestiones problem\xe1ticas.",source:"@site/docs/programacion-parejas-grupos.md",slug:"/programacion-parejas-grupos",permalink:"/docs/programacion-parejas-grupos",editUrl:"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/programacion-parejas-grupos.md",version:"current",lastUpdatedBy:"Leister Francisco Alvarez Campos",lastUpdatedAt:1612469641,sidebar_label:"Programaci\xf3n en Parejas o Grupos",sidebar:"docs",previous:{title:"Metodolog\xedas \xc1giles",permalink:"/docs/metodologias-agiles"},next:{title:"DevOps",permalink:"/docs/devops"}},s=[{value:"Pair Programming",id:"pair-programming",children:[{value:"\xbfQu\xe9 es Pair Programming?",id:"\xbfqu\xe9-es-pair-programming",children:[]},{value:"\xbfC\xf3mo se hace?",id:"\xbfc\xf3mo-se-hace",children:[]},{value:"Roles:",id:"roles",children:[]},{value:"Tipos de Pair Programming:",id:"tipos-de-pair-programming",children:[]},{value:"Beneficios",id:"beneficios",children:[]}]},{value:"Mob Programming",id:"mob-programming",children:[{value:"\xbfQu\xe9 es Mob Programming?",id:"\xbfqu\xe9-es-mob-programming",children:[]},{value:"\xbfC\xf3mo se hace?",id:"\xbfc\xf3mo-se-hace-1",children:[]},{value:"Roles:",id:"roles-1",children:[]},{value:"Bias for Action:",id:"bias-for-action",children:[]},{value:"Artefactos:",id:"artefactos",children:[]},{value:"Tipos de Mob Programming:",id:"tipos-de-mob-programming",children:[]},{value:"El Valor del Mobbing:",id:"el-valor-del-mobbing",children:[]},{value:"Beneficios para Otras Organizaciones y Servicios",id:"beneficios-para-otras-organizaciones-y-servicios",children:[]}]}],d={toc:s};function p(e){var a=e.components,r=Object(n.a)(e,["components"]);return Object(t.b)("wrapper",Object(o.a)({},d,r,{components:a,mdxType:"MDXLayout"}),Object(t.b)("p",null,"El desarrollo de un software nuevo no es un proceso sencillo, dependiendo del tama\xf1o del programa, se deber\xe1 tener en cuenta una gran cantidad de posibles coyunturas, funciones y cuestiones problem\xe1ticas.",Object(t.b)("br",{parentName:"p"}),"\n","De ah\xed que en estos \xfaltimos a\xf1os se hayan ido desarrollando otros m\xe9todos de trabajo m\xe1s modernos que permiten programar con mayor eficiencia y generar un c\xf3digo libre de errores."),Object(t.b)("h2",{id:"pair-programming"},"Pair Programming"),Object(t.b)("h3",{id:"\xbfqu\xe9-es-pair-programming"},"\xbfQu\xe9 es Pair Programming?"),Object(t.b)("p",null,"El pair programming espec\xedfica que siempre haya dos personas trabajando al mismo tiempo en el c\xf3digo y que, en la medida de lo posible, se sienten juntas. Una se encarga de escribir el c\xf3digo y la otra de supervisarlo en tiempo real. Al mismo tiempo, est\xe1n constantemente intercambiando impresiones: debaten problemas, encuentran soluciones y desarrollan ideas creativas. "),Object(t.b)("div",{style:{textAlign:"center"}},Object(t.b)("img",{alt:"Imagen Pair Programing",src:Object(i.a)("img/metodosProgramacion/PairProgramming.png")})," "),Object(t.b)("h3",{id:"\xbfc\xf3mo-se-hace"},"\xbfC\xf3mo se hace?"),Object(t.b)("p",null,Object(t.b)("strong",{parentName:"p"},"Tama\xf1o del equipo:")," 2 personas."),Object(t.b)("h3",{id:"roles"},"Roles:"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},Object(t.b)("strong",{parentName:"li"},"Conductor:")," Se encarga de escribir el c\xf3digo. "),Object(t.b)("li",{parentName:"ul"},Object(t.b)("strong",{parentName:"li"},"Navegador:")," Se encarga de supervisar ese c\xf3digo. ")),Object(t.b)("p",null,"Una de las reglas del pair programming establece que estos dos roles se intercambien con regularidad, de esta manera se evita una posible brecha jer\xe1rquica."),Object(t.b)("h3",{id:"tipos-de-pair-programming"},"Tipos de Pair Programming:"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},Object(t.b)("strong",{parentName:"li"},"Navegador:")," El navegador asume m\xe1s de los roles t\xe1cticos del conductor. En la navegaci\xf3n, el controlador sigue controlando el teclado y escribiendo, pero el navegador dicta instrucciones sint\xe1cticas, como qu\xe9 nombre llamar a una variable o qu\xe9 m\xe9todo espec\xedfico llamar. El estilo de navegador del asiento trasero funciona mejor con un principiante como conductor y experto como el navegante, permitiendo que el principiante aprenda haciendo."),Object(t.b)("li",{parentName:"ul"},Object(t.b)("strong",{parentName:"li"},"Ping Pong Pairing:"),"  Permite a los roles cambiar con frecuencia y obliga a los ingenieros a prestar atenci\xf3n a los aspectos de codificaci\xf3n y pruebas del desarrollo, ganando familiaridad con el proceso."),Object(t.b)("li",{parentName:"ul"},Object(t.b)("strong",{parentName:"li"},"Pomodoro:")," Una sesi\xf3n de emparejamiento t\xedpica al estilo Pomodoro dura 25 minutos seguida de un descanso de 5 minutos. El controlador y el navegador cambian de posici\xf3n. Despu\xe9s de cuatro sesiones de 25 minutos, ambos programadores toman un descanso m\xe1s largo de 20 minutos. Los descansos forzados y el cambio de posici\xf3n regular ayudan a garantizar que ambos programadores est\xe9n siempre productivos, enfocados y actualizados cuando comienza una sesi\xf3n.")),Object(t.b)("h3",{id:"beneficios"},"Beneficios"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},"Puede mejorar la productividad general a trav\xe9s del proceso de colaboraci\xf3n."),Object(t.b)("li",{parentName:"ul"},"C\xf3digo de mayor calidad como resultado de la revisi\xf3n en tiempo real."),Object(t.b)("li",{parentName:"ul"},"Mejores soluciones dise\xf1adas a trav\xe9s de la colaboraci\xf3n compartida."),Object(t.b)("li",{parentName:"ul"},"Entrega m\xe1s r\xe1pida porque las soluciones a problemas desafiantes se encuentran m\xe1s r\xe1pidamente."),Object(t.b)("li",{parentName:"ul"},"Mayor enfoque en el c\xf3digo y la tarea de programaci\xf3n sin distracciones."),Object(t.b)("li",{parentName:"ul"},"Desbloqueo a los desarrolladores atascados."),Object(t.b)("li",{parentName:"ul"},"Feedback r\xe1pido."),Object(t.b)("li",{parentName:"ul"},"Menos distracciones en los equipos de desarrollo."),Object(t.b)("li",{parentName:"ul"},"Pr\xe1cticas recomendadas compartidas.")),Object(t.b)("h2",{id:"mob-programming"},"Mob Programming"),Object(t.b)("h3",{id:"\xbfqu\xe9-es-mob-programming"},"\xbfQu\xe9 es Mob Programming?"),Object(t.b)("p",null,"Un grupo de personas con mucha inteligencia, con grandes retos trabajando en equipo para resolver los retos de manera creativa, con excelencia operacional y trabajando enfocado en entrega de valor constante."),Object(t.b)("div",{style:{textAlign:"center"}},Object(t.b)("img",{alt:"Imagen Mob Programing",width:"70%",src:Object(i.a)("img/metodosProgramacion/MobProgramming.png")})," "),Object(t.b)("h3",{id:"\xbfc\xf3mo-se-hace-1"},"\xbfC\xf3mo se hace?"),Object(t.b)("p",null,Object(t.b)("strong",{parentName:"p"},"Tama\xf1o del equipo:")," 3-6 personas."),Object(t.b)("h3",{id:"roles-1"},"Roles:"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},Object(t.b)("strong",{parentName:"li"},"Conductor:")," Recibe input del equipo y ejecuta la implementaci\xf3n de las ideas."),Object(t.b)("li",{parentName:"ul"},Object(t.b)("strong",{parentName:"li"},"Navegadores:")," Son los que le dan direcci\xf3n al conductor, tambi\xe9n es la voz del equipo.")),Object(t.b)("h3",{id:"bias-for-action"},"Bias for Action:"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},"Evitar quedarse en conversaciones abstractas por mucho tiempo."),Object(t.b)("li",{parentName:"ul"},"No discuta un problema por m\xe1s de 10 minutos (Recomendado)."),Object(t.b)("li",{parentName:"ul"},"Si hay m\xe1s de una soluci\xf3n a un problema experimente con dos o 3 (Use\nparetto)."),Object(t.b)("li",{parentName:"ul"},"Use ejemplos para mantener la conversaci\xf3n caminando."),Object(t.b)("li",{parentName:"ul"},"Las ideas de los navegadores solo se implementan por el conductor."),Object(t.b)("li",{parentName:"ul"},"El nivel de habilidad del conductor es clave para que los navegadores desarrollen m\xe1s las instrucciones."),Object(t.b)("li",{parentName:"ul"},"Feedback inmediato."),Object(t.b)("li",{parentName:"ul"},"Aprender o contribuir."),Object(t.b)("li",{parentName:"ul"},"Agilidad en comunicaci\xf3n."),Object(t.b)("li",{parentName:"ul"},"Retrospectiva."),Object(t.b)("li",{parentName:"ul"},"Empat\xeda y respeto.")),Object(t.b)("h3",{id:"artefactos"},"Artefactos:"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},"Backlog de problemas espec\xedficos definidos por el product owner o el tech lead."),Object(t.b)("li",{parentName:"ul"},"Alineaci\xf3n en programaci\xf3n de katas (C\xf3digo nuevo, correcci\xf3n de errores, desarrollo impulsado por pruebas, refactorizaci\xf3n)."),Object(t.b)("li",{parentName:"ul"},"Test automation."),Object(t.b)("li",{parentName:"ul"},"Repo - DevOps.")),Object(t.b)("h3",{id:"tipos-de-mob-programming"},"Tipos de Mob Programming:"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},Object(t.b)("strong",{parentName:"li"},"Expert-Expert:")," Mayor productividad y resultados de alta calidad, m\xednima disrupci\xf3n de los acercamientos y exploraci\xf3n a retar soluciones existentes."),Object(t.b)("li",{parentName:"ul"},Object(t.b)("strong",{parentName:"li"},"Expert-Novice:")," Mayor oportunidad de exploraci\xf3n de soluciones y oportunidades de mentorship para personas nuevas en el equipo. El novato es m\xe1s propenso a retar soluciones existentes y aporta disrupci\xf3n, y el experto al ense\xf1ar se puede replantear paradigmas existentes. El riesgo de que los expertos no puedan desarrollar paciencia para ense\xf1ar puede traer conflicto y afectar la\ncultura de la organizaci\xf3n."),Object(t.b)("li",{parentName:"ul"},Object(t.b)("strong",{parentName:"li"},"Novice-Novice:")," Normalmente no es recomendado para soluciones complejas pero bueno para innovaci\xf3n siempre y cuando se pueda desarrollar con un mentor que pueda generar un role model."),Object(t.b)("li",{parentName:"ul"},Object(t.b)("strong",{parentName:"li"},"With audience:")," El equipo est\xe1 trabajando con una audiencia de partes interesadas o usuarios.")),Object(t.b)("h3",{id:"el-valor-del-mobbing"},"El Valor del Mobbing:"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},"Soluciones se entregan m\xe1s r\xe1pido, con mayor calidad por medio del incremento del enfoque."),Object(t.b)("li",{parentName:"ul"},"Mitiga las tareas tediosas, tiene visibilidad 360 y mejora la automatizaci\xf3n."),Object(t.b)("li",{parentName:"ul"},"Apalanca el entrenamiento entre miembros del equipo."),Object(t.b)("li",{parentName:"ul"},"Entrega resultados m\xe1s r\xe1pido reduciendo el tiempo del work in progress y eliminando tiempos de handoff entre equipos y mitiga los problemas de comunicaci\xf3n."),Object(t.b)("li",{parentName:"ul"},"Puede incrementar el tiempo de entrega de una tarea por la cantidad de personas pensando alrededor de una tarea individual, pero bajan aproximadamente 15% de defectos o margen de error, se mitiga refactoring, retrabajo y soporte de la tarea o el entregable."),Object(t.b)("li",{parentName:"ul"},"Satisfacci\xf3n se incrementa un 96% entre programadores."),Object(t.b)("li",{parentName:"ul"},"Entrenamiento \xe1gil."),Object(t.b)("li",{parentName:"ul"},"Team building y comunicaci\xf3n."),Object(t.b)("li",{parentName:"ul"},"M\xe1s opciones de soluciones para varios problemas a la vez.")),Object(t.b)("h3",{id:"beneficios-para-otras-organizaciones-y-servicios"},"Beneficios para Otras Organizaciones y Servicios"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},"Reclutamiento."),Object(t.b)("li",{parentName:"ul"},"Dise\xf1o (Servicio, UX, Producci\xf3n)."),Object(t.b)("li",{parentName:"ul"},"Deuda tecnol\xf3gica y refactorizaci\xf3n.")),Object(t.b)("blockquote",null,Object(t.b)("p",{parentName:"blockquote"},"Informaci\xf3n brindada por:\n",Object(t.b)("strong",{parentName:"p"},"Julian Alvarado")),Object(t.b)("ul",{parentName:"blockquote"},Object(t.b)("li",{parentName:"ul"},"Twitter ",Object(t.b)("a",{parentName:"li",href:"https://twitter.com/jascorecr"},"@jascorecr"),"  "),Object(t.b)("li",{parentName:"ul"},"Linkedin: ",Object(t.b)("a",{parentName:"li",href:"https://www.linkedin.com/in/alvaradolj1/"},"alvarado.lj.1")),Object(t.b)("li",{parentName:"ul"},"Telegram: ",Object(t.b)("a",{parentName:"li",href:"https://t.me/joinchatJWCCqxZZe7tk7ITpztxTsw"},"https://t.me/joinchatJWCCqxZZe7tk7ITpztxTsw"),"  "),Object(t.b)("li",{parentName:"ul"},"Youtube: ",Object(t.b)("a",{parentName:"li",href:"https://www.youtube.com/channel/UC8elsb71RJlP9mG6aQgTc_A"},"Kata Collective")))))}p.isMDXComponent=!0}}]);