nameo= localStorage.getItem("name")
Imag= localStorage.getItem("myimg");
function plsload(){
    if(nameo == null){
        window.location="index.html"
    }else{
        document.getElementById("pointo").innerHTML="<b style='color: red'>"+"Wellcome "+nameo+"!"+"</b>"
        document.getElementById("ento").src= Imag
    }
}
function dio(){
    document.getElementById("hodof").style.display = "none";
}
function myFunction(){
    document.getElementById("agag").src="Alarm-Clock Sound!!!.mp3"
    document.getElementById("hodof").style.display = "block";
}