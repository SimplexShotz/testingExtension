
// function getNode(element, nodeList) {
//   var node = document.getElementById(element);
//   for (var i = 0; i < nodeList.length; i++) {
//     node = node.childNodes[nodeList[i]];
//   }
//   return node;
// }

function get(element, n) {
  return document.getElementsByClassName(element)[n ? n : 0];
}

window.onload = function() {
  setInterval(function() {
    // Header
    get("wrapper_1nzxe8").style.backgroundColor = "rgb(0, 0, 0)"; // Header
    get("wrapper_1nzxe8-o_O-headerActive_jq320i").style.backgroundColor = "rgb(0, 0, 0)"; // Header-active
    getNode("top-header-container", [0, 0, 0, 0, 0, 0, 0]).style.color = "rgb(255, 255, 255)"; // Content
    getNode("top-header-container", [0, 0, 0, 0, 1, 0]).style.backgroundColor = "rgb(50, 50, 50)"; // Search
    getNode("top-header-container", [0]).onmouseover = function() {
      get("wrapper_1nzxe8").style.backgroundColor = "rgb(0, 0, 0)"; // Header
      getNode("top-header-container", [0, 0, 0, 0, 1, 0]).style.backgroundColor = "rgb(50, 50, 50)"; // Search
      getNode("top-header-container", [0, 0, 0, 0, 0, 0, 0]).style.color = "rgb(255, 255, 255)"; // Content
      getNode("top-header-container", [0, 0, 0, 0, 1, 0, 0, 0]).style.color = "rgb(255, 255, 255)"; // Search
    };
    // getNode("top-header-container", [0, 0, 0, 0, 1, 0]).onmouseover = function() {
    //   getNode("top-header-container", [0, 0, 0, 0, 1, 0]).style.backgroundColor = "rgb(50, 50, 50)";
    // };
  }, 0);
};
