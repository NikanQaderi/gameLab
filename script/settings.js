const resgraContainer = document.querySelector(".resolutiongraphicContainer")
const qualityContainer = document.getElementById("QualityContainer")

//resolution part
let resolutionItemValue = [
    {id:1,resData:"resolution",pic:""},
    {id:2,resData:"",pic:"Rain-Blood-Chronicles-Mirage/setting/left.png"},
    {id:3,resData:"1280*720",pic:""},
    {id:4,resData:"1360*768",pic:""},
    {id:5,resData:"1366*768",pic:""},
    {id:6,resData:"1600*900",pic:""},
    {id:7,resData:"1920*1080",pic:""},
    {id:8,resData:"",pic:"Rain-Blood-Chronicles-Mirage/setting/right.png"}]

    for(let i = 0  ; i < resolutionItemValue.length ; i++ ){
    let resvalue = document.createElement("span");
    resvalue.className = "SettingText";
    resvalue.innerHTML = resolutionItemValue[i].resData ;
    let resimage = document.createElement("img")
    resimage.src = resolutionItemValue[i].pic;
    resvalue.appendChild(resimage); 
    resgraContainer.appendChild(resvalue);
}

//quality part
let qualityItemValue = [
    {id:1,quaData:"GRAPHIC QUAlity"},
    {id:2,quaData:"LOWEST"},
    {id:2,quaData:"LOW"},
    {id:2,quaData:"MEDIUM"},
    {id:2,quaData:"HIGH"},
    {id:2,quaData:"HIGHEST"}]

    for(let i = 0 ; i < qualityItemValue.length ; i++ ){
        let quavalue = document.createElement("span")
        quavalue.className = "SettingText";
        quavalue.innerHTML = qualityItemValue[i].quaData;
        
        
        qualityContainer.appendChild(quavalue);
    
    }