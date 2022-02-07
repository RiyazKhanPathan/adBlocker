chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse){
    sendResponse('Recieved');
    hostname = document.location.hostname
    payload = {"url": msg.url,"hostname": hostname}
    
    hostname.includes("gaana.com") ? payload["title"] = document.querySelector("#bottomplayer strong.t_over").innerText : "";

    downloadBtn = document.getElementById("extdownloadLink")   
    if(!downloadBtn){
        node = document.querySelector("body")
        div = document.createElement("div")
        div.style ="position: fixed; bottom: 50%; right: 40px; cursor:pointer; background-color: #333333; padding: 2px;border:2px solid red"
        div.innerHTML = `<svg width="20" height="20" viewBox="0 0 19 33"><g fill="none" fill-rule="evenodd"><g style="fill: hsl(0deg 100% 50%);" fill-rule="nonzero" transform="translate(-169 -1057)"><path d="M17.484 29.701c.796 0 1.442.645 1.442 1.442v.416c0 .796-.646 1.441-1.442 1.441H1.441C.645 33 0 32.355 0 31.559v-.416c0-.797.645-1.442 1.441-1.442h16.043zM9.6 0c.796 0 1.441.645 1.441 1.441v20.34l5.348-6.367c.033-.04.07-.078.107-.114.572-.547 1.478-.526 2.024.046.625.653.646 1.676.05 2.354l-8.016 9.112c-.043.049-.089.094-.138.137-.601.521-1.512.457-2.033-.145L.49 17.708c-.594-.685-.57-1.708.057-2.362.039-.042.08-.08.125-.116.604-.497 1.496-.41 1.993.195l5.22 6.356V1.44C7.886.645 8.53 0 9.327 0z" transform="translate(15 985) translate(154 72)"></path></g></g></svg> Download`
        div.id = "extdownloadLink"
        node.appendChild(div)
        downloadBtn = document.getElementById("extdownloadLink")
    }
    
    
   
    downloadBtn.addEventListener("click",()=>{
        fetch("http://127.0.0.1/",{
            method: 'POST', 
            mode: 'no-cors', // for no-cors content-type doesn't support application/json 
            cache: 'no-cache', 
            credentials: 'same-origin',
            referrerPolicy: 'no-referrer', 
            body: JSON.stringify(payload)
          });        
        },{once:true});

    
});

