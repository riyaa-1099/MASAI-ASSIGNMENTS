
let carousel_div=document.getElementById("carousel")
function carousel(){
    // https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/7976/1317976-h-e672d8d911fe
    // https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/3064/1323064-h-dcaae091e676
    // https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/370/1350370-h-0a160a9cdc75

let images=["https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/7976/1317976-h-e672d8d911fe","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/3064/1323064-h-dcaae091e676","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/370/1350370-h-0a160a9cdc75"]

let imgElement = document.createElement("img");
imgElement.src=images[0];
carousel_div.append(imgElement)

let i=1;

setInterval(function(){

if(i==images.length){
    i=0;
}

imgElement.src=images[i];
carousel_div.append(imgElement)

    i++;
},3000)

}
carousel()