function conf(pass) {
  if(pass == "kisaday") {
    document.getElementById("passPort").style.opacity = "0";
    setTimeout( function () {
      document.getElementById("passPort").style.display = "none";
      document.getElementById("messagePort").style.display = "block";
    }, 500)
    setTimeout( function () {
      document.getElementById("messagePort").style.opacity = "1";
    }, 1000)
  }
}
