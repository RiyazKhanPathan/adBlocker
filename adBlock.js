chrome.webRequest.onBeforeRequest.addListener(
  function(details) { 
    // console.log("ext: ",details)
    return {cancel: true}; 
  },
  { urls: ["*://*.doubleclick.net/*","*://*.googlesyndication.com/*","*://*.ggpht.com/*","*://*.carbonads.net/*","*://youtube.com/api/stats/ads/*"] },
  ["blocking"]
);


function messenger(details){
  chrome.tabs.query(
    {active: true, currentWindow: true}, 
    function(tabs){
      // console.log(tabs);
      chrome.tabs.sendMessage(tabs[0].id, {url: details.url}, function(response) {});  
  });
}

chrome.webRequest.onCompleted.addListener(
    messenger,
    { urls: ["*://cm5.wynk.in/*/32/index.m3u8?*","*://stream-cdn.gaana.com/*/index.m3u8?*"]}
  );


  
