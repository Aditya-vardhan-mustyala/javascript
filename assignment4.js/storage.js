if(!localStorage.getItem("count"))
{
    localStorage.setItem("count",0);
}
if(!sessionStorage.getItem("count"))
{
    sessionStorage.setItem("count",0);
}

document.querySelector("#local").innerHTML=localStorage.getItem("count");
document.querySelector("#session").innerHTML=sessionStorage.getItem("count");

document.querySelector("#bt1").addEventListener("click",()=>{
    var l=Number(localStorage.getItem("count"));
    localStorage.setItem("count",++l);
    document.querySelector("#local").innerHTML=localStorage.getItem("count");
    
});

document.querySelector("#bt2").addEventListener("click",()=>{
    var l=Number(sessionStorage.getItem("count"));
    sessionStorage.setItem("count",++l);
    document.querySelector("#session").innerHTML=sessionStorage.getItem("count");
    
});