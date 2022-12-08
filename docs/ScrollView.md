---
sidebar_position: 2
slug: /scrollview
title: Catbow scrollview
description: Scrollview is `easy to use` and an `useful app` that helps moving images by scrolling the webpage.
image: "../static/img/catbow.png"
keywords: [catbow, scrollview, library, open source, scroll, event]
---

# Scrollview Tutorial

Let's discover **scrollview** created by _Catbow_!

## Getting Started with Scrollview

Scrollview is `easy to use` and an `useful app` that helps moving images by scrolling the webpage.

![Alt Text](../static/img/scrollviewGif.gif)

# Installation

```terminal
$ npm i react-catbow-scrollview
```

You can make a code section and edit setting as below:

```javascript
const option = {
	imgUrl: './images/004/', //  Address before image
	videoImageCount: 754, // Total-number-of-images
	startNum: 10000, // Image-path-start-number
	extension: '.jpg', // Available-with-any-image-extension
	scrollAreaY: 50000, // scrollArea,
	top: 20 // top: 20px
	viewPort: {
		// all-imgTag-styles-available
		width: '500px',
	},
};
// Render
<ScollView option={option} viewItem={<Components />} />;
// viewItem is optional
// you can render Components in ScollView
```

#### ❉❉ The image address path must have consecutive numbers.

<br/>

| option          | discription                                  | type           |
| --------------- | -------------------------------------------- | -------------- |
| imgUrl          | Address before image                         | String         |
| videoImageCount | Total-number-of-images                       | String         |
| startNum        | Image-path-start-number                      | Number         |
| extension       | Available-with-any-image-extension           | String         |
| scrollAreaY     | scrollArea                                   | Number         |
| viewPort?       | img-style                                    | Object         |
| top?            | css style top                                | Number         |
| viewItem?       | Jsx components can be rendered in ScrollVIew | JSX Components |

### How to use viewItem option

#### you can try Components styling,

#### You must use css 'position absolute' at the top of Components

```javascript
// this is components
export default function Hello() {
  return (
    <div style={{ top: "10px", position: "absolute" }}>
      <h1 style={{ fontSize: "5rem" }}>hello world</h1>
      <h1 style={{ marginTop: "600px", fontSize: "5rem" }}>
        React-catbow-ScrollView
      </h1>
    </div>
  );
}
//
function App() {
  const option = {
    videoImageCount: 754,
    imgUrl: "./images/004/",
    startNum: 10000,
    extension: ".jpg",
    scrollAreaY: 4970,
    top: 30,
    viewPort: {
      width: "550px",
      height: "550px",
      margin: "100px 100px",
      borderRadius: "9999px",
    },
  };
  return <ScrollView option={option} viewItem={<Btton />} />;
}
```

<!-- <img src='https://i.ibb.co/vZV4zxT/scroll-View.gif' style='height:200px; border: 1px solid black; padding:10px'/> -->

[Test Img Zip](https://drive.google.com/file/d/1i-CypIWeH-LSh3XjOvFtBMfgiIgxtzfn/view?usp=share_link)

<br/>

#### [Catbow Github](https://github.com/catbow/react-catbow-scrollview)
