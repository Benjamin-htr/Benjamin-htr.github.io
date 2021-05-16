function timer(str) {
  console.log('main[data-barba-namespace="'+str+']'+' .timer');
  let p = document.querySelector('main[data-barba-namespace="'+str+'"]'+' .timer');
  console.log(p)
  let date = p.dataset.date;
  var countDownDate = new Date(date).getTime();


  // Update the count down every 1 second
  var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    p.innerText = days + "d " + hours + "h "+ minutes + "m " + seconds + "s ";

    if (distance < 0) {
      clearInterval(x);
      p.innerText = "COMING VERY SOON";
    }
  }, 1000);
};