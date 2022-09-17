import{ Sound } from './sons.js'

export function timer({
  minutesDisplay,
  secondsDisplay,
  resetControls
}) {
  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)

  function updateTimerDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined  ?  0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }

  function reset() {
    updateTimerDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
  }
  
  function countdown() {
    timerTimeOut = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      let isFinished =minutes <= 0 && seconds <= 0

      updateTimerDisplay(minutes, 0)

      if (isFinished) {
        resetControls()
        updateTimerDisplay()
        Sound().timeEnd()
        return
      }

      if (seconds <= 0) {
        seconds = 4
        --minutes
      }

      updateTimerDisplay(minutes, seconds - 1)

      countdown()
    }, 1000)
  }


  function updateMinutes(newMinutes){
    
    minutes = newMinutes
  }

  function pause(){
    clearTimeout(timerTimeOut)
  }

  return { 
    countdown, 
    reset,
    updateTimerDisplay,
    updateMinutes,
    pause
  }
}
