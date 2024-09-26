function menuOpen(){

  if (document.getElementById('menuLinks').style.display == "flex") {
    document.getElementById('menuLinks').style.display = "none";
    document.getElementById('btnMenu').style.background = "linear-gradient(to bottom right, #ff00ea, #0051ff)";
    
  } else {
    document.getElementById('menuLinks').style.display = "flex";
    document.getElementById('btnMenu').style.background = "#fff";
  }
}