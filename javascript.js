
function set(key, value, callback) {
  if (typeof callback === "function") {
    chrome.storage.sync.set({[key]: value}, callback());
  } else {
    chrome.storage.sync.set({[key]: value}, function() {});
  }
}
async function get(key, callback) {
  // var r;
  if (typeof callback === "function") {
    chrome.storage.sync.get([key], callback);
  } else {
    // console.log("before await: ");
    // await chrome.storage.sync.get([key], function(result) { r = result; console.log("during awiat: "); console.log(r); console.log("-"); });
    // console.log("after await: " + r);
    // return r;
    var a = await new Promise((succ) => chrome.storage.sync.get([key], succ));
    return a[key];
  }
}
function run(code, ret) {
  var type = typeof code === "string" ? "css" : "js";
  var code = code.toString();
  switch (type) {
    case "js":
      if (ret) {
        return function() {
          chrome.tabs.query({"active": true, "lastFocusedWindow": true}, function(tabs) {
            chrome.tabs.executeScript(tabs[0].id, {
              "code": "(" + code + ")()"
            });
          });
        };
      }
      console.log(code);
      chrome.tabs.query({"active": true, "lastFocusedWindow": true}, function(tabs) {
        chrome.tabs.executeScript(tabs[0].id, {
          "code": "(" + code + ")()"
        });
      });
    break;
    case "css":
      if (ret) {
        return function() {
          chrome.tabs.query({"active": true, "lastFocusedWindow": true}, function(tabs) {
            chrome.tabs.insertCSS(tabs[0].id, {
              "code": code
            });
          });
        }
      }
      chrome.tabs.query({"active": true, "lastFocusedWindow": true}, function(tabs) {
        chrome.tabs.insertCSS(tabs[0].id, {
          "code": code
        });
      });
    break;
  }
};

window.addEventListener("load", function load(event) {
  
});
