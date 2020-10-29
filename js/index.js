function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date())
  return {
    'total': t,
    'days': Math.floor(t / (1000 * 60 * 60 * 24)),
    'hours': Math.floor((t / (1000 * 60 * 60)) % 24),
    'minutes': Math.floor((t / 1000 / 60) % 60),
    'seconds': Math.floor((t / 1000) % 60)
  };
}
 
function initializeClock(selector, endtime) {
  const clock = document.querySelector(selector);
  const days = clock.querySelector('.day.number');
  const hours = clock.querySelector('.hour.number');
  const minutes = clock.querySelector('.minute.number');
  const seconds = clock.querySelector('.second.number');
 
  function updateClock() {
    var t = getTimeRemaining(endtime);
 
    days.innerHTML = t.days;
    hours.innerHTML = ('0' + t.hours).slice(-2);
    minutes.innerHTML = ('0' + t.minutes).slice(-2);
    seconds.innerHTML = ('0' + t.seconds).slice(-2);
 
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }
 
  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}
 
var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
initializeClock('.timer-container', deadline);