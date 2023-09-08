import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";
import React from "react";
import ReactDOM from 'react-dom/client';
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import digiLogo from '../media/digi-buddies.png';


export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="home">
      <img  className="logo" src={digiLogo} alt="Digi Buddies Logo" />
      <section className="button-card">
      <h5 className="home-title">Learn Your Favorite Arithmetic</h5>
      <div className="arithmetic">
        <button onClick={() => navigate("/quiz/1")} className="addition">
          +
        </button>
        <button onClick={() => navigate("/quiz/2")} className="subtraction">
          -
        </button>
        <button onClick={() => navigate("/quiz/3")} className="multiplication">
          ×
        </button>
        <button onClick={() => navigate("/quiz/4")} className="division">
          ÷
        </button>
      </div>
</section>
      {/* <div>
				<div className="button-demo flipcover-buttons">
					<label>Flip Cover Buttons</label>
					<div className="demo-buttons-group">
						<div className="flip-cover-twiter"></div>
						<br />
						<br />
						<div className="flip-cover-linkedin"></div>
						<br />
						<br />
						<div className="flip-cover-email"></div>
					</div>
				</div>
			</div> */}

    </div>
  );
}
