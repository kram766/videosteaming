(function getData(){
//   console.log("ok..");
    axios.get('http://localhost:3000/videos')
    .then(res=>console.log(res))
    .catch(Error=>console.log(Error));
// var xhttp = new XMLHttpRequest();
//    var url= "http://localhost:3000";
//    xhttp.onreadystatechange = function() {
//    if (this.readyState == 4 && this.status == 200) {
//     console.log(this.responseText);
//    }
//      else{
//          console.log();
//      }
//  };
//  xhttp.open("GET",url, true);
//  xhttp.send();
    
})();
document.getElementById("clickthis").addEventListener("click",function(){
    window.location.href = "https://streamdatabasevideo.herokuapp.com/videos/1245kp325";
})