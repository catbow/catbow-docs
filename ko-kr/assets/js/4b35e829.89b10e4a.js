"use strict";(self.webpackChunkcatbow=self.webpackChunkcatbow||[]).push([[232],{8179:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var a=n(7462),l=(n(7294),n(3905));const o={sidebar_position:2,slug:"/scrollview",title:"Catbow scrollview",description:"Scrollview is `easy to use` and an `useful app` that helps moving images by scrolling the webpage.",image:"../static/img/catbow.png",keywords:["catbow","scrollview","library","open source","scroll","event"]},i="Scrollview Tutorial",r={unversionedId:"ScrollView",id:"ScrollView",title:"Catbow scrollview",description:"Scrollview is `easy to use` and an `useful app` that helps moving images by scrolling the webpage.",source:"@site/docs/ScrollView.md",sourceDirName:".",slug:"/scrollview",permalink:"/catbow-docs/ko-kr/scrollview",draft:!1,editUrl:"https://github.com/catbow/catbow-docs/tree/main/docs/ScrollView.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"/scrollview",title:"Catbow scrollview",description:"Scrollview is `easy to use` and an `useful app` that helps moving images by scrolling the webpage.",image:"../static/img/catbow.png",keywords:["catbow","scrollview","library","open source","scroll","event"]},sidebar:"tutorialSidebar",previous:{title:"Welcome to catbow \ud83d\udc31\ud83c\udf08",permalink:"/catbow-docs/ko-kr/"}},s={},p=[{value:"Getting Started with Scrollview",id:"getting-started-with-scrollview",level:2},{value:"\u2749\u2749 The image address path must have consecutive numbers.",id:"-the-image-address-path-must-have-consecutive-numbers",level:4},{value:"How to use viewItem option",id:"how-to-use-viewitem-option",level:3},{value:"you can try Components styling,",id:"you-can-try-components-styling",level:4},{value:"You must use css &#39;position absolute&#39; at the top of Components",id:"you-must-use-css-position-absolute-at-the-top-of-components",level:4},{value:"Catbow Github",id:"catbow-github",level:4}],m={toc:p};function u(t){let{components:e,...o}=t;return(0,l.kt)("wrapper",(0,a.Z)({},m,o,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"scrollview-tutorial"},"Scrollview Tutorial"),(0,l.kt)("p",null,"Let's discover ",(0,l.kt)("strong",{parentName:"p"},"scrollview")," created by ",(0,l.kt)("em",{parentName:"p"},"Catbow"),"!"),(0,l.kt)("h2",{id:"getting-started-with-scrollview"},"Getting Started with Scrollview"),(0,l.kt)("p",null,"Scrollview is ",(0,l.kt)("inlineCode",{parentName:"p"},"easy to use")," and an ",(0,l.kt)("inlineCode",{parentName:"p"},"useful app")," that helps moving images by scrolling the webpage."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Alt Text",src:n(2913).Z,width:"354",height:"416"})),(0,l.kt)("h1",{id:"installation"},"Installation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-terminal"},"$ npm i react-catbow-scrollview\n")),(0,l.kt)("p",null,"You can make a code section and edit setting as below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const option = {\n    imgUrl: './images/004/', //  Address before image\n    videoImageCount: 754, // Total-number-of-images\n    startNum: 10000, // Image-path-start-number\n    extension: '.jpg', // Available-with-any-image-extension\n    scrollAreaY: 50000, // scrollArea,\n    top: 20 // top: 20px\n    viewPort: {\n        // all-imgTag-styles-available\n        width: '500px',\n    },\n};\n// Render\n<ScollView option={option} viewItem={<Components />} />;\n// viewItem is optional\n// you can render Components in ScollView\n")),(0,l.kt)("h4",{id:"-the-image-address-path-must-have-consecutive-numbers"},"\u2749\u2749 The image address path must have consecutive numbers."),(0,l.kt)("br",null),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"option"),(0,l.kt)("th",{parentName:"tr",align:null},"discription"),(0,l.kt)("th",{parentName:"tr",align:null},"type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"imgUrl"),(0,l.kt)("td",{parentName:"tr",align:null},"Address before image"),(0,l.kt)("td",{parentName:"tr",align:null},"String")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"videoImageCount"),(0,l.kt)("td",{parentName:"tr",align:null},"Total-number-of-images"),(0,l.kt)("td",{parentName:"tr",align:null},"String")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"startNum"),(0,l.kt)("td",{parentName:"tr",align:null},"Image-path-start-number"),(0,l.kt)("td",{parentName:"tr",align:null},"Number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"extension"),(0,l.kt)("td",{parentName:"tr",align:null},"Available-with-any-image-extension"),(0,l.kt)("td",{parentName:"tr",align:null},"String")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"scrollAreaY"),(0,l.kt)("td",{parentName:"tr",align:null},"scrollArea"),(0,l.kt)("td",{parentName:"tr",align:null},"Number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"viewPort?"),(0,l.kt)("td",{parentName:"tr",align:null},"img-style"),(0,l.kt)("td",{parentName:"tr",align:null},"Object")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"top?"),(0,l.kt)("td",{parentName:"tr",align:null},"css style top"),(0,l.kt)("td",{parentName:"tr",align:null},"Number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"viewItem?"),(0,l.kt)("td",{parentName:"tr",align:null},"Jsx components can be rendered in ScrollVIew"),(0,l.kt)("td",{parentName:"tr",align:null},"JSX Components")))),(0,l.kt)("h3",{id:"how-to-use-viewitem-option"},"How to use viewItem option"),(0,l.kt)("h4",{id:"you-can-try-components-styling"},"you can try Components styling,"),(0,l.kt)("h4",{id:"you-must-use-css-position-absolute-at-the-top-of-components"},"You must use css 'position absolute' at the top of Components"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'// this is components\nexport default function Hello() {\n  return (\n    <div style={{ top: "10px", position: "absolute" }}>\n      <h1 style={{ fontSize: "5rem" }}>hello world</h1>\n      <h1 style={{ marginTop: "600px", fontSize: "5rem" }}>\n        React-catbow-ScrollView\n      </h1>\n    </div>\n  );\n}\n//\nfunction App() {\n  const option = {\n    videoImageCount: 754,\n    imgUrl: "./images/004/",\n    startNum: 10000,\n    extension: ".jpg",\n    scrollAreaY: 4970,\n    top: 30,\n    viewPort: {\n      width: "550px",\n      height: "550px",\n      margin: "100px 100px",\n      borderRadius: "9999px",\n    },\n  };\n  return <ScrollView option={option} viewItem={<Btton />} />;\n}\n')),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://drive.google.com/file/d/1i-CypIWeH-LSh3XjOvFtBMfgiIgxtzfn/view?usp=share_link"},"Test Img Zip")),(0,l.kt)("br",null),(0,l.kt)("h4",{id:"catbow-github"},(0,l.kt)("a",{parentName:"h4",href:"https://github.com/catbow/react-catbow-scrollview"},"Catbow Github")))}u.isMDXComponent=!0},2913:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/scrollviewGif-29b58c000727d55e4e692e243cddca3e.gif"}}]);