import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import "../styles/quiz.css";
import { getLesson } from "../adapters/video-adapter";
import CurrentUserContext from "../contexts/current-user-context";
import { fetchHandler } from "../utils";


export default function QuizPage() {
  const { currentUser } = useContext(CurrentUserContext);
  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  let pageId = window.location.href;
  pageId = pageId.split("/");
  pageId = pageId.pop()
  console.log(pageId);

  const [url, setUrl] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const loadVideo = async (id) =>{
      const [video , error ] = await fetchHandler(`/api/video/${pageId}`);
      console.log(video.url)
      setUrl(video.url);
    }

    loadVideo(pageId)
  }, []);

  return (
    <>
      <h1>Video</h1>
      <div className="video">
      <iframe
          width="90%"
          height="600px"
          src={url}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen = "yes"
        >
      </iframe>
      <br></br>
         <button onClick={() => navigate(`/quiz/${pageId}`)} className="start-quiz">
          Start Quiz
        </button>
        </div>
    </>
  );
}
