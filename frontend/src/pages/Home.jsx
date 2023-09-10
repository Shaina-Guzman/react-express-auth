import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";
import React from "react";
import ReactDOM from 'react-dom/client';
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import digiLogo from '../media/digi-buddies.png';
import Addition from '../audio/Addition.mp3';
import Subtraction from '../audio/Subtraction.mp3';
import Multiplication from '../audio/Multiplication.mp3';
import Division from '../audio/Division.mp3';

export default function HomePage() {
  const navigate = useNavigate();
  const audioMap = {
    addition: new Audio(Addition),
    subtraction: new Audio(Subtraction),
    multiplication: new Audio(Multiplication),
    division: new Audio(Division),
}

  return (
    <div className="home">
      <img  className="logo" src={digiLogo} alt="Digi Buddies Logo" />
      <section className="button-card">
      <h5 className="home-title">Learn Your Favorite Arithmetic</h5>
      <div className="arithmetic">
        <button onClick={() => navigate("/video/1")} className="addition" onMouseEnter={() => audioMap.addition.play()} onMouseLeave={() => {
            audioMap.addition.pause()
            audioMap.addition.currentTime = 0
            }}>
          Addition
        </button>
        <button onClick={() => navigate("/video/2")} className="subtraction" onMouseEnter={() => audioMap.subtraction.play()} onMouseLeave={() => {
            audioMap.subtraction.pause()
            audioMap.subtraction.currentTime = 0
            }}>
          Subtraction
        </button>
        <button onClick={() => navigate("/video/3")} className="multiplication" onMouseEnter={() => audioMap.multiplication.play()} onMouseLeave={() => {
            audioMap.multiplication.pause()
            audioMap.multiplication.currentTime = 0
            }}>
          Multiplication
        </button>
        <button onClick={() => navigate("/video/4")} className="division" onMouseEnter={() => audioMap.division.play()} onMouseLeave={() => {
            audioMap.division.pause()
            audioMap.division.currentTime = 0
            }}>
          Division
        </button>
      </div>
</section>
    </div>
  );
}
