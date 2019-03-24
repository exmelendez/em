function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

let youtubeId = getQueryVariable("id");
const mainCont = document.getElementById("watchContainer");

if(!youtubeId) {
    var para = document.createElement("P");
    para.innerText = "An Error has occured, please return to Worship + Programs to choose a video to watch";
    mainCont.appendChild(para);  
} else {
    const iframeElement = document.createElement("iframe");

    iframeElement.setAttribute("src", "https://www.youtube.com/embed/" + youtubeId);
    iframeElement.setAttribute("frameborder", "0");
    iframeElement.setAttribute("allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");
    
    mainCont.appendChild(iframeElement);
}


