// Set the date we're counting down to
var countDownDate = new Date("Apr 2, 2022 13:00:00").getTime();

// Update the count down every 1 second
var countdownfunction = setInterval(function () {
  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

window.onload = function () {
  document.getElementById("bgimg").style.backgroundImage =
    "url('https://coris.com.br/blog/wp-content/uploads/2019/06/05-07-19-.jpg')";
  var feriasImgs = [
    "https://blog.bonitour.com.br/wp-content/uploads/2020/11/Blog-Praias-brasileiras-famosas-internacionalmente-Bonitour-Viagens_Destaque-04-1024x545.png",
    "https://f.i.uol.com.br/fotografia/2019/01/25/15484613165c4ba504e6db6_1548461316_3x2_md.jpg",
    "https://www.lng.com.br/wp-content/uploads/2020/06/lng_estradas_do_brasil_2.jpg",
    "https://www.reviewbox.com.br/wp-content/uploads/2019/07/rede-de-descanso.jpg"
  ];

  setInterval(function () {
    var i = Math.floor(Math.random() * feriasImgs.length);
    document.getElementById("bgimg").style.backgroundImage =
      "url('" + feriasImgs[i] + "')";
  }, 3000); // Change 2000 to 10000.
};
