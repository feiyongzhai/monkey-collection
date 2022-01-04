// ==UserScript==
// @name          Hello World_yongfeizhai
// @namespace
// @description   test
// @match      https://feiyongzhai.github.io/
// @require    http://cdn.bootcss.com/jquery/1.8.3/jquery.min.js
// @version 0.0.1.20190108085849
// @namespace https://feiyongzhai.github.io/
// ==/UserScript==



(function () {
    'use strict';
    var button = document.createElement("input"); //创建一个input对象（提示框按钮）
    button.setAttribute("type", "button");
    button.setAttribute("value", "一键评分");
    button.style.width = "100px";
    button.style.align = "left";
    button.style.marginLeft = "10px";
    button.style.marginBottom = "10px";
    button.style.background = "#b46300";
    button.style.border = "1px solid " + "#b46300";//52
    button.style.color = "yellow";
    var x = document.getElementById("org9251ff5");
    x.appendChild(button);

    alert("Hello World");
})();
