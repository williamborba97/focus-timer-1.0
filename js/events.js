import { 
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
   buttonSound,
   buttonMute 
   } from './elements.js'

export default function({Controls , Timer, sound}){

    
buttonPlay.addEventListener('click', function () {
    Controls.play()
    Timer.countdown()
    sound.pressButton()
  })
  
  buttonPause.addEventListener('click', function () {
    Controls.pause()
    Timer.pause()
    sound.pressButton()
  })
  
  buttonStop.addEventListener('click', function () {
    Controls.reset()
    Timer.reset()
    sound.pressButton()
  })
  
  buttonSet.addEventListener('click', function () {
    let newMinutes = Controls.getMinutes()
  
    if (!newMinutes) {
      Timer.reset()
      return
    }
  
   
    Timer.updateTimerDisplay(newMinutes, 0)
    Timer.updateMinutes(newMinutes)
  })
  
  buttonSound.addEventListener('click', function () {
    buttonSound.classList.add('hide')
    buttonMute.classList.remove('hide')
    sound.bgAudio.pause()
})

buttonMute.addEventListener('click', function () {
    buttonMute.classList.add('hide')
    buttonSound.classList.remove('hide')
    sound.bgAudio.play()
  })

  return{}
}