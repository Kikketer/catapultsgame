/**
 * Chris Weed (chris@cjweed.com)
 * Copyright 2018
 */

;(function() {
  var startSound = new Audio('/sounds/game-start.mp3')
  var warningSound = new Audio('/sounds/warning-sound.mp3')
  var endSound = new Audio('/sounds/end-game.mp3')
  var timer = document.getElementById('timer')
  var button = document.getElementById('btn-timer')

  // Show/hide the instructions based on the navigator
  var userAgent = navigator.userAgent
  if(userAgent.match(/mobile/i) && userAgent.match(/safari/i) && !window.navigator.standalone) {
  //   // If you aren't using safari on iOS... you will get android treatment
    // Wow android, you qualify for that if statement?!
  //   document.getElementsByClassName('install-instructions')[0].setAttribute('style', 'display: block')
  }

  document.getElementById('btn-timer').addEventListener('click', function() {
    startSound.play()

    // Hack on mobile:
    warningSound.play()
    warningSound.pause()
    endSound.play()
    endSound.pause()

    var time = 30
    timer.innerHTML = time
    timer.classList.remove('warning-timer')
    timer.classList.remove('end-timer')
    button.innerHTML = 'BUILD!'
    button.setAttribute('disabled', 'true')

    var interval = setInterval(function() {
      time -= 1
      timer.innerHTML = time
      if (time < 10) {
        timer.classList.add('warning-timer')
        warningSound.play()
      }

      if (time <= 0) {
        clearInterval(interval)
        endSound.play()
        timer.classList.remove('warning-timer')
        timer.classList.add('end-timer')
        button.innerHTML = 'Start Timer'
        button.removeAttribute('disabled')

        setTimeout(function() {
          time = 30
          timer.classList.remove('warning-timer')
          timer.classList.remove('end-timer')
          timer.innerHTML = time
        }, 5000)
      }
    }, 1000)
  })
})()
