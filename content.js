
function get(element, n) {
  // Find the class - if n: return el n, else: return el 0      class doesn't exist                 id doesn't exist
  return document.getElementsByClassName(element)[n ? n : 0] || document.getElementById(element) || document.getElementById("blankDivForGet");
}

function check(element, n) {
  return document.getElementsByClassName(element)[n ? n : 0] || document.getElementById(element);
}

function getNode(element, nodeList) {
  var node = get(element);
  for (var i = 0; i < nodeList.length; i++) {
    node = node.childNodes[nodeList[i]];
  }
  return node;
}

var kaeHidden = false;
window.onload = function() {
  setInterval(function() {
    get("page-container").style.backgroundColor = "rgb(25, 25, 25)"; // Background
    // Header
    get("wrapper_1nzxe8").style.backgroundColor = "rgb(0, 0, 0)"; // Header
    get("navItem_9vq2q-o_O-searchBackground_xzri3v").style.backgroundColor = "rgb(50, 50, 50)"; // Search
    getNode("top-header-container", [0]).onmouseover = function() {
      get("wrapper_1nzxe8-o_O-headerActive_jq320i").style.backgroundColor = "rgb(75, 75, 75)"; // Header
      get("navItem_9vq2q-o_O-searchBackground_xzri3v").style.backgroundColor = "rgb(50, 50, 50)"; // Search
    };
    // Footer
    get("footerContainer_1vgxks2").style.backgroundColor = "rgb(0, 0, 0)"; // Footer-inner
    get("rootStyle_ayypyg").style.cssText = "background-color: rgb(0, 0, 0) !important;"; // Footer-outer
    // Content
    get("titleWrap_13hv8io").style.color = "rgb(255, 255, 255)"; // Program title (editing)
    getNode("title_1wjczhu", [0]).style.color = "rgb(255, 255, 255)"; // Program title (viewing)
     // Comment Section
    get("default_olfzxm-o_O-inlineStyles_k9kem1").style.cssText = "align-items:stretch !important;border-width:0px !important;border-style:solid !important;box-sizing:border-box !important;display:-moz-box !important;display:-ms-flexbox !important;display:-webkit-box !important;display:-webkit-flex !important;display:flex !important;flex-direction:column !important;margin:0px !important;padding:0px !important;position:relative !important;z-index:0 !important;min-height:0px !important;min-width:0px !important;margin-left:auto !important;margin-right:auto !important;max-width:728px !important;padding-left:20px !important;padding-right:20px !important;width:100% !important;background-color:#ffffff !important;-webkit-align-items:stretch !important;-moz-box-sizing:border-box !important;-webkit-flex-direction:column !important;-ms-flex-direction:column !important;-ms-flex-align:stretch !important;-webkit-box-align:stretch !important;-webkit-box-orient:vertical !important;-webkit-box-direction:normal !important; background-color: rgb(25, 25, 25) !important;";
    get("default_olfzxm-o_O-listWrapperExtraSpacing_1homyt1-o_O-inlineStyles_17u7rry").style.cssText = "align-items:stretch !important;border-width:0px !important;border-style:solid !important;box-sizing:border-box !important;display:-moz-box !important;display:-ms-flexbox !important;display:-webkit-box !important;display:-webkit-flex !important;display:flex !important;flex-direction:column !important;margin:0px !important;padding:0px !important;position:relative !important;z-index:0 !important;min-height:0px !important;min-width:0px !important;padding-top:32px !important;background-color:#ffffff !important;-webkit-align-items:stretch !important;-moz-box-sizing:border-box !important;-webkit-flex-direction:column !important;-ms-flex-direction:column !important;-ms-flex-align:stretch !important;-webkit-box-align:stretch !important;-webkit-box-orient:vertical !important;-webkit-box-direction:normal !important; background-color: rgb(25, 25, 25) !important;";
    get("default_olfzxm-o_O-outerRepliesContainer_15ru99x").style.cssText = "align-items:stretch !important;border-width:0px !important;border-style:solid !important;box-sizing:border-box !important;display:-moz-box !important;display:-ms-flexbox !important;display:-webkit-box !important;display:-webkit-flex !important;display:flex !important;flex-direction:column !important;margin:0px !important;padding:0px !important;position:relative !important;z-index:0 !important;min-height:0px !important;min-width:0px !important;background-color:#f7f8fa !important;margin-top:24px !important;padding-top:24px !important;padding-left:24px !important;padding-right:24px !important;max-height:none !important;transition:all 0.2s ease-out !important;-webkit-align-items:stretch !important;-moz-box-sizing:border-box !important;-webkit-flex-direction:column !important;-ms-flex-direction:column !important;-webkit-transition:all 0.2s ease-out !important;-ms-flex-align:stretch !important;-webkit-box-align:stretch !important;-webkit-box-orient:vertical !important;-webkit-box-direction:normal !important; background-color: rgb(50, 50, 50) !important;";

    get("kae-hide-button").onclick = function() {
      kaeHidden = !kaeHidden;
    };
    // "link_1uvuyao-o_O-computing_1uwg40u"
    get("wrapScratchpadInner_poyjc-o_O-wrapScratchpadInnerBorder_1b0rgvs").style.cssText = "display:-moz-box !important;display:-ms-flexbox !important;display:-webkit-box !important;display:-webkit-flex !important;display:flex !important;border:1px solid rgb(255, 255, 255) !important;border-bottom:none !important; background-color: " + (kaeHidden ? "rgb(0, 0, 0);" : "rgb(255, 255, 255);") + "padding-left: " + (kaeHidden ? (get("wrapScratchpadInner_poyjc-o_O-wrapScratchpadInnerBorder_1b0rgvs").offsetWidth / 2 - getNode("output", [0]).offsetWidth / 2) + "px;" : "0px;"); // Scratchpad border (top)
    get("default_olfzxm-o_O-container_7wu8ln").style.cssText = "align-items:stretch !important;border-width:0px !important;border-style:solid !important;box-sizing:border-box !important;display:-moz-box !important;display:-ms-flexbox !important;display:-webkit-box !important;display:-webkit-flex !important;display:flex !important;flex-direction:row !important;margin:0px !important;padding:0px !important;position:relative !important;z-index:0 !important;min-height:66px !important;min-width:0px !important;border:1px solid rgb(255, 255, 255) !important;padding-left:16px !important;padding-right:16px !important;width:100% !important;-webkit-align-items:stretch !important;-moz-box-sizing:border-box !important;-webkit-flex-direction:row !important;-ms-flex-direction:row !important;-ms-flex-align:stretch !important;-webkit-box-align:stretch !important;-webkit-box-orient:horizontal !important;-webkit-box-direction:normal !important;"; // Scratchpad border (bottom)
    var c = ["h1", "h2", "h3", "h4", "h5", "h6", "span", "p", "button", "li"];
    for (var i = 0; i < c.length; i++) {
      for (var j = 0; j < document.getElementsByTagName(c[i]).length; j++) {
        if (document.getElementsByTagName(c[i])[j].parentNode.className !== "ace_line") {
          document.getElementsByTagName(c[i])[j].style.cssText = "color: rgb(255, 255, 255) !important;";
        }
      }
    }
    for (var j = 0; j < document.getElementsByTagName("a").length; j++) {
      if (document.getElementsByTagName("a")[j].className !== "error-buddy-thinking") {
        document.getElementsByTagName("a")[j].style.cssText = "color: rgb(225, 225, 225) !important;";
      }
    }
    getNode("message", [0]).style.color = "rgb(0, 0, 0)"; // Oh noes error message
    getNode("show-me", [0]).style.color = "rgb(25, 100, 150)"; // Oh noes error message
    get("current-pos").style.color = "rgb(0, 0, 0)";
  }, 0);

  // Reserve div just in case the element that is trying to be found with 'get' doesn't exist
  document.body.innerHTML += '<div id="blankDivForGet" style="display: none;"></div>';

};
