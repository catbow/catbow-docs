"use strict";(self.webpackChunkcatbow=self.webpackChunkcatbow||[]).push([[232],{8179:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const i={sidebar_position:2,slug:"/scrollview",title:"Catbow scrollview",description:"Scrollview is `easy to use` and an `useful app` that helps moving images by scrolling the webpage.",image:"https://catbow.github.io/catbow-docs/img/catbow.png",keywords:["catbow","scrollview","library","open source","scroll","event"]},l="Scrollview Tutorial",r={unversionedId:"ScrollView",id:"ScrollView",title:"Catbow scrollview",description:"Scrollview is `easy to use` and an `useful app` that helps moving images by scrolling the webpage.",source:"@site/docs/ScrollView.md",sourceDirName:".",slug:"/scrollview",permalink:"/catbow-docs/scrollview",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"/scrollview",title:"Catbow scrollview",description:"Scrollview is `easy to use` and an `useful app` that helps moving images by scrolling the webpage.",image:"https://catbow.github.io/catbow-docs/img/catbow.png",keywords:["catbow","scrollview","library","open source","scroll","event"]},sidebar:"tutorialSidebar",previous:{title:"Catbow Tutorial",permalink:"/catbow-docs/"}},s={},p=[{value:"Getting Started with Scrollview",id:"getting-started-with-scrollview",level:2},{value:"\u2749\u2749 The image address path must have consecutive numbers.",id:"-the-image-address-path-must-have-consecutive-numbers",level:4},{value:"How to use viewItem option",id:"how-to-use-viewitem-option",level:3},{value:"you can try Components styling,",id:"you-can-try-components-styling",level:4},{value:"You must use css &#39;position absolute&#39; at the top of Components",id:"you-must-use-css-position-absolute-at-the-top-of-components",level:4},{value:"\ud83d\udc49 Catbow Github",id:"-catbow-github",level:4},{value:"Detailed explaination",id:"detailed-explaination",level:3},{value:"1. Explained with JSDoc for your better understanding",id:"1-explained-with-jsdoc-for-your-better-understanding",level:4},{value:"2. position: sticky",id:"2-position-sticky",level:4},{value:"3. viewPort is <code>&lt;img /&gt;</code> Tag itself",id:"3-viewport-is-img--tag-itself",level:4},{value:"4. viewItem is a special option to render JSX inside",id:"4-viewitem-is-a-special-option-to-render-jsx-inside",level:4},{value:"5. option.top",id:"5-optiontop",level:4},{value:"6. Issues",id:"6-issues",level:4},{value:"7. Catbow",id:"7-catbow",level:4}],u={toc:p};function c(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"scrollview-tutorial"},"Scrollview Tutorial"),(0,a.kt)("p",null,"Let's discover ",(0,a.kt)("strong",{parentName:"p"},"scrollview")," created by ",(0,a.kt)("em",{parentName:"p"},"Catbow"),"!"),(0,a.kt)("h2",{id:"getting-started-with-scrollview"},"Getting Started with Scrollview"),(0,a.kt)("p",null,"Scrollview is ",(0,a.kt)("inlineCode",{parentName:"p"},"easy to use")," and an ",(0,a.kt)("inlineCode",{parentName:"p"},"useful app")," that helps moving images by scrolling the webpage."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"gif for scrollview",src:n(2913).Z,width:"354",height:"416"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\ud83d\ude3a\ud83c\udf08 Catbow tips!")," ",(0,a.kt)("br",null),"\nHave you got a video that you would like to to make as scrollview effect as above? ",(0,a.kt)("br",null),"\nYou can covert your video (less than 30s) to photos ",(0,a.kt)("strong",{parentName:"p"},"for free")," from catbow converter!",(0,a.kt)("br",null),"\nwebsite : ",(0,a.kt)("a",{parentName:"p",href:"https://catbow.github.io/catbow-photo-converter/"},"https://catbow.github.io/catbow-photo-converter/"))),(0,a.kt)("a",{href:"https://catbow.github.io/catbow-photo-converter/"},(0,a.kt)("img",{src:"img/catbowConverter.png",alt:"Catbow image converter",width:"200"})),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-terminal"},"$ npm i react-catbow-scrollview\n")),(0,a.kt)("p",null,"You can make a code section and edit setting as below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const option = {\n    imgUrl: './images/004/', //  Address before image\n    videoImageCount: 754, // Total-number-of-images\n    startNum: 10000, // Image-path-start-number\n    extension: '.jpg', // Available-with-any-image-extension\n    scrollAreaY: 50000, // scrollArea,\n    top: 20 // top: 20px\n    viewPort: {\n        // all-imgTag-styles-available\n        width: '500px',\n    },\n};\n// Render\n<ScollView option={option} viewItem={<Components />} />;\n// viewItem is optional\n// you can render Components in ScollView\n")),(0,a.kt)("h4",{id:"-the-image-address-path-must-have-consecutive-numbers"},"\u2749\u2749 The image address path must have consecutive numbers."),(0,a.kt)("br",null),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"option"),(0,a.kt)("th",{parentName:"tr",align:null},"discription"),(0,a.kt)("th",{parentName:"tr",align:null},"type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"imgUrl"),(0,a.kt)("td",{parentName:"tr",align:null},"Address before image"),(0,a.kt)("td",{parentName:"tr",align:null},"String")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"videoImageCount"),(0,a.kt)("td",{parentName:"tr",align:null},"Total-number-of-images"),(0,a.kt)("td",{parentName:"tr",align:null},"String")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"startNum"),(0,a.kt)("td",{parentName:"tr",align:null},"Image-path-start-number"),(0,a.kt)("td",{parentName:"tr",align:null},"Number")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"extension"),(0,a.kt)("td",{parentName:"tr",align:null},"Available-with-any-image-extension"),(0,a.kt)("td",{parentName:"tr",align:null},"String")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"scrollAreaY"),(0,a.kt)("td",{parentName:"tr",align:null},"scrollArea"),(0,a.kt)("td",{parentName:"tr",align:null},"Number")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"viewPort?"),(0,a.kt)("td",{parentName:"tr",align:null},"img-style"),(0,a.kt)("td",{parentName:"tr",align:null},"Object")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"top?"),(0,a.kt)("td",{parentName:"tr",align:null},"css style top"),(0,a.kt)("td",{parentName:"tr",align:null},"Number")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"viewItem?"),(0,a.kt)("td",{parentName:"tr",align:null},"Jsx components can be rendered in ScrollVIew"),(0,a.kt)("td",{parentName:"tr",align:null},"JSX Components")))),(0,a.kt)("h3",{id:"how-to-use-viewitem-option"},"How to use viewItem option"),(0,a.kt)("h4",{id:"you-can-try-components-styling"},"you can try Components styling,"),(0,a.kt)("h4",{id:"you-must-use-css-position-absolute-at-the-top-of-components"},"You must use css 'position absolute' at the top of Components"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'// this is components\nexport default function Hello() {\n  return (\n    <div style={{ top: "10px", position: "absolute" }}>\n      <h1 style={{ fontSize: "5rem" }}>hello world</h1>\n      <h1 style={{ marginTop: "600px", fontSize: "5rem" }}>\n        React-catbow-ScrollView\n      </h1>\n    </div>\n  );\n}\n//\nfunction App() {\n  const option = {\n    videoImageCount: 754,\n    imgUrl: "./images/004/",\n    startNum: 10000,\n    extension: ".jpg",\n    scrollAreaY: 4970,\n    top: 30,\n    viewPort: {\n      width: "550px",\n      height: "550px",\n      margin: "100px 100px",\n      borderRadius: "9999px",\n    },\n  };\n  return <ScrollView option={option} viewItem={<Btton />} />;\n}\n')),(0,a.kt)("p",null,"\ud83d\uddc2 ",(0,a.kt)("a",{parentName:"p",href:"https://drive.google.com/file/d/1i-CypIWeH-LSh3XjOvFtBMfgiIgxtzfn/view?usp=share_link"},"Test Img Zip")),(0,a.kt)("br",null),(0,a.kt)("h4",{id:"-catbow-github"},"\ud83d\udc49 ",(0,a.kt)("a",{parentName:"h4",href:"https://github.com/catbow/react-catbow-scrollview"},"Catbow Github")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\ud83d\ude3a\ud83c\udf08 Catbow tips!")," ",(0,a.kt)("br",null),"\nif those names of images are like 'IMG",(0,a.kt)("em",{parentName:"p"},"1', 'IMG_2'....'IMG_100' (because in the example on the top, the image names are composed of numbers only) you should set the option as below. the part of the name `IMG"),(0,a.kt)("inlineCode",{parentName:"p"},"should be in"),"imgUrl",(0,a.kt)("inlineCode",{parentName:"p"},"and numbers should be in"),"startNum`")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"please look carefully the option of",(0,a.kt)("inlineCode",{parentName:"p"}," imgUrl"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"videoImageCount "),"& ",(0,a.kt)("inlineCode",{parentName:"p"},"startNum"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const option = {\n    imgUrl: './images/004/IMG_', //  Address before image\n    videoImageCount: 100, // Total-number-of-images\n    startNum: 1, // Image-path-start-number\n    extension: '.jpg', // Available-with-any-image-extension\n    scrollAreaY: 50000, // scrollArea,\n    top: 20 // top: 20px\n    viewPort: {\n        // all-imgTag-styles-available\n        width: '500px',\n    },\n};\n<ScollView option={option} viewItem={<Components />} />;\n")),(0,a.kt)("h3",{id:"detailed-explaination"},"Detailed explaination"),(0,a.kt)("h4",{id:"1-explained-with-jsdoc-for-your-better-understanding"},"1. Explained with JSDoc for your better understanding"),(0,a.kt)("img",{src:"https://velog.velcdn.com/images/juno97/post/1de0d31a-26e8-4213-b506-3ee29e60499e/image.png",alt:"caputured code for scrollview explaination"}),(0,a.kt)("p",null,"Scrollview supports to show how to set the options in the Code Editor.\nYou can just hover the cursor on the component!"),(0,a.kt)("p",null,"If you still don't understand certain things, please refer to the options in the README.md on ",(0,a.kt)("a",{href:"https://github.com/catbow/react-catbow-scrollview"},"Github react-catbow-scrollview repository"),"."),(0,a.kt)("h4",{id:"2-position-sticky"},"2. position: sticky"),(0,a.kt)("p",null,"Scrollview component has the CSS ",(0,a.kt)("inlineCode",{parentName:"p"},"position: sticky")," property because the bunch of images should not disappear from the screen."),(0,a.kt)("p",null,"Therefore, you should keep the following situations in mind and style them."),(0,a.kt)("p",null,"a. If it's not set as full screen, you should decorate the surroundings, or it would be showing as below."),(0,a.kt)("img",{src:"https://velog.velcdn.com/images/juno97/post/2ecd4ff5-b4dd-4c28-8318-d434e3ff41e8/image.gif",alt:"gif for how the screen would be seen without any decoration"}),(0,a.kt)("p",null,"when it is set as a full-screen, the result would be:"),(0,a.kt)("img",{src:"img/gif-scrollview.gif",alt:"fullscreen"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const option = {\n  videoImageCount: 754,\n  imgUrl: "./004/",\n  startNum: 10000,\n  extension: ".jpg",\n  scrollAreaY: 6000,\n  viewPort: {\n    width: "100vw",\n    height: "100vh",\n  },\n};\n')),(0,a.kt)("p",null,"B. the scroll area : ",(0,a.kt)("inlineCode",{parentName:"p"},"ScrollAreaY")," increases the playback length.\nEach user would have their own desired percentage, so if you increase it to 100 units step by step and test it, you will get your desired percentage."),(0,a.kt)("img",{src:"https://velog.velcdn.com/images/juno97/post/d3d7e21b-943c-4fa7-b4ad-7acad968fe70/image.gif",alt:"img"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const option = {\n  videoImageCount: 754,\n  imgUrl: "./004/",\n  startNum: 10000,\n  extension: ".jpg",\n  scrollAreaY: 100000, // It\'s hard to scroll because it\'s 100,000.\n  viewPort: {\n    width: "100vw",\n    height: "100vh",\n  },\n};\n')),(0,a.kt)("h4",{id:"3-viewport-is-img--tag-itself"},"3. viewPort is ",(0,a.kt)("inlineCode",{parentName:"h4"},"<img />")," Tag itself"),(0,a.kt)("p",null,"This is an example of making a circle with border properties."),(0,a.kt)("img",{src:"https://velog.velcdn.com/images/juno97/post/278df54d-97ac-4739-83f5-667220cf7110/image.gif",alt:"img"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const option = {\n  videoImageCount: 754,\n  imgUrl: "./004/",\n  startNum: 10000,\n  extension: ".jpg",\n  scrollAreaY: 10000,\n  viewPort: {\n    //  img tag!!\n    width: "500px",\n    height: "500px",\n    margin: "100px 100px",\n    borderRadius: "9999px",\n  },\n};\n')),(0,a.kt)("h4",{id:"4-viewitem-is-a-special-option-to-render-jsx-inside"},"4. viewItem is a special option to render JSX inside"),(0,a.kt)("p",null,"I thought a lot about this option.\nWhen I made a library, I aimed to make it easy to use, easy to access\nThis option gives you the option to customize your library\nAt the same time, I felt compelled to act. (But I did!))"),(0,a.kt)("p",null,'I simply added the phrase "hello" as showing below.'),(0,a.kt)("img",{src:"https://velog.velcdn.com/images/juno97/post/2c796d9d-d5c9-4254-8c56-8d814ca9ac8d/image.gif",alt:"img"}),(0,a.kt)("p",null,"There are only two rules to follow."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"For the components to be handed over, make sure to put the css position: absolute property at the top."),(0,a.kt)("li",{parentName:"ol"},"You have to pass it to JSX syntax. If you turn over the prop with the viewItem, it will render inside the component.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'// Components to render within ScrollView\nfunction Component() {\n  return (\n    <div style={{ position: "absolute", top: "95px", left: "75px" }}>\n      <div style={{ fontSize: "150px" }}>hello</div>\n    </div>\n  );\n}\n\nfunction App() {\n  const option = {\n    videoImageCount: 754,\n    imgUrl: "./004/",\n    startNum: 10000,\n    extension: ".jpg",\n    scrollAreaY: 10000,\n    // top: 30,  => css top property\n    viewPort: {\n      width: "500px",\n      height: "500px",\n      margin: "100px 500px",\n      borderRadius: "9999px",\n    },\n  };\n\n  return (\n    <>\n      <div\n        className=\'App\'\n        style={{ height: "1000px", background: "skyblue" }}\n      />\n      // When you pass it over, like this!\n      <ScrollView option={option} viewItem={<Component />} />\n      <div\n        className=\'App\'\n        style={{ height: "1000px", background: "skyblue" }}\n      />\n    </>\n  );\n}\n')),(0,a.kt)("h4",{id:"5-optiontop"},"5. option.top"),(0,a.kt)("p",null,"This is the top option of example code number 4, which is the CSS top property of the view area that moves with ",(0,a.kt)("inlineCode",{parentName:"p"},"position: sticky"),"."),(0,a.kt)("h4",{id:"6-issues"},"6. Issues"),(0,a.kt)("p",null,"If there are any improvements or bugs while using it, please leave the issue of ",(0,a.kt)("a",{href:"https://github.com/catbow/react-catbow-scrollview/issues"},"recat-catbow-scrollview"),"\nIt's a great help to maintain this library!"),(0,a.kt)("h4",{id:"7-catbow"},"7. Catbow"),(0,a.kt)("p",null,"Catbow will continue to add libraries that provide easy-to-use, interactive features.\nI've started with React-components-library first, but I will make it a library that works in other frameworks as well."),(0,a.kt)("p",null,"Thank you."))}c.isMDXComponent=!0},2913:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/scrollviewGif-29b58c000727d55e4e692e243cddca3e.gif"}}]);