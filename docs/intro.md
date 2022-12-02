---
sidebar_position: 1
slug: /
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
import React from "react";
import ScrollView from "react-catbow-scrollview";

function App() {
  const option = {
    videoImageCount: 754, // 이미지 개수
    imgUrl: "./images/004/", // 이미지 경로
    startNum: 10000, // 이미지 시작 넘버
    extension: ".JPG", // 이미지 확장자
    scrollAreaY: "50000px", // 스크롤 공간 확보
    viewPort: {
      // img style
      width: "500px",
    },
  };

  return <ScrollView option={option} />;
}

export default App;
```
