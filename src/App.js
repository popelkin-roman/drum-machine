import './App.css';
import './Components/DrumPad/DrumPad.js';
import { useEffect } from 'react';
import DrumPad from './Components/DrumPad/DrumPad.js';

function App() {
  const triggerSound = (e) => {
    let audioEl;
    if (e.type === "click") audioEl = e.target.querySelector("audio");
    if (e.type === "keydown") {
      let audioID = "#" + e.key.toUpperCase();
      audioEl = document.querySelector(audioID);
    }
    if (audioEl) {
      audioEl.currentTime = 0;
      audioEl.play();
      let displayText = audioEl.closest(".drum-pad").id.replaceAll("_", " ");
      // console.log(displayText);
      document.querySelector("#display").innerHTML = displayText;
    } 
  }

  useEffect(()=>{
    document.addEventListener('keydown', triggerSound); 
}, []);

  return (
    <div className="App">
      <div className="container" id="drum-machine">
        <div className='display-container'>
        <span className="display" id="display">808</span>
        </div>
        <div className="pads">
          <DrumPad playSound={triggerSound} letter="Q" sound="Bass_Drum" path="./sounds/BD.WAV"/>
          <DrumPad playSound={triggerSound} letter="W" sound="Cow_Bell" path="./sounds/CB.WAV"/>
          <DrumPad playSound={triggerSound} letter="E" sound="Claves" path="./sounds/CL.WAV"/>
          <DrumPad playSound={triggerSound} letter="A" sound="Clap" path="./sounds/CP.WAV"/>
          <DrumPad playSound={triggerSound} letter="S" sound="Cymbal" path="./sounds/CY.WAV"/>
          <DrumPad playSound={triggerSound} letter="D" sound="Hi_Conga" path="./sounds/HC.WAV"/>
          <DrumPad playSound={triggerSound} letter="Z" sound="Hi_Tom" path="./sounds/HT.WAV"/>
          <DrumPad playSound={triggerSound} letter="X" sound="Maracas" path="./sounds/MA.WAV"/>
          <DrumPad playSound={triggerSound} letter="C" sound="Open_Hi_Hat" path="./sounds/OH.WAV"/>
        </div>
      </div>
    </div>
  );
}

export default App;
