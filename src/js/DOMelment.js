"use strict";

var dom = document.getElementById("dom");

function showDOM(node) {
  for (var i = 0; i < node.children.length; i++) {
    var n = node.children[i],
        el ;
    el = "<" + n.tagName + ">";
    console.log(el);

    showDOM(node.children[i]);
  }

}

showDOM(document.body);

