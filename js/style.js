function showMenu(){
    if(document.getElementById("nav").style.display == "none"){
        document.getElementById("nav").style.display = "block";
        // document.getElementById("menuIcon").classList = "eye";
    }
    else{
        document.getElementById("nav").style.display = "none";
        // document.getElementById("menuIcon").className = "bars";
    }
}