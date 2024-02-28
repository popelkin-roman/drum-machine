import React from "react";
import "./DrumPad.css";

const DrumPad = ({letter, sound, path, playSound}) => {
    return (
        <button className="drum-pad" id={sound} onClick={playSound}>
            {letter}
            <audio id={letter} className="clip" src={path} type="audio/wav"></audio>
        </button>
    );
}

export default DrumPad;