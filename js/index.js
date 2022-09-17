import { controls } from './controls.js'
import { timer } from './timer.js'
import{ Sound } from './sons.js'
import  Events from './events.js'
import { 
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  minutesDisplay,
  secondsDisplay
 } from './elements.js'


const Controls = controls({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet, 
})

const Timer = timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: Controls.reset
})

const sound = Sound()
Events({Controls,Timer,sound})

