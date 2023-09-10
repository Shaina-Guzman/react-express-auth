import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { getUser } from "../adapters/user-adapter";
import { logUserOut } from "../adapters/auth-adapter";
import { getAverageQuizScore } from "../adapters/quiz-adapter";
import UpdateUsernameForm from "../components/UpdateUsernameForm";
import "../styles/user.css";
import Five from "../media/five.png";
import Six from "../media/six.png";

export default function UserPage() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [userProfile, setUserProfile] = useState(null);
  const [averageScores, setAverageScores] = useState(null);
  const [errorText, setErrorText] = useState(null);
  const { id } = useParams();
  const isCurrentUserProfile = currentUser && currentUser.id === Number(id);

  useEffect(() => {
    const loadUser = async () => {
      const [user, error] = await getUser(id);
      if (error) return setErrorText(error.statusText);
      setUserProfile(user);
    };

    loadUser();
  }, [id]);

  useEffect(() => {
    const getAverageScores = async () => {
      const [averageScores] = await getAverageQuizScore();
      console.log(averageScores);
      setAverageScores(averageScores);
      // Initialize an array to hold the keyframes animation names
      const reportTypes = [
        "addition",
        "subtraction",
        "multiplication",
        "division",
      ];

      // Iterate through the report types and set the CSS variable for each
      reportTypes.forEach((type, index) => {
        const roundedPercentage = Math.round(
          averageScores[index].average_percentage
        );
        document.documentElement.style.setProperty(
          `--${type}-percentage`,
          `${roundedPercentage}%`
        );
      });
    };
    getAverageScores();
  }, []);

  const handleLogout = async () => {
    logUserOut();
    setCurrentUser(null);
    navigate("/");
  };

  if (!userProfile && !errorText) return null;
  if (errorText) return <p>{errorText}</p>;

  const profileUsername = isCurrentUserProfile
    ? currentUser.username
    : userProfile.username;

  return (
    <div className="user-main">
      <div className="aurora"
        ></div>
      <div className="user">
        <div className="progress-header">
        <img className="img-1" src={ Five } height={100}/>
        <h1 className="profile-username">
          {profileUsername}'s <br></br> Progress Report
        </h1>
        <img className="img-1" src={ Six } height={100}/>
        </div>
        {/* { !!isCurrentUserProfile && <button onClick={handleLogout}>Log Out</button> }
    <p>If the user had any data, here it would be</p>
    <p>Fake Bio or something</p> */}
        {/* {
      !!isCurrentUserProfile
        && <UpdateUsernameForm currentUser={currentUser} setCurrentUser={setCurrentUser}/>
    } */}
        <div className="progress">
          <div className="skills">
            <h2 style={{ color: "#35f6ea" }}>Addition</h2>
            <div className="progress-bar">
              <div className="addition-report">
                {averageScores && averageScores[0] && (
                  <span style={{ animation: "addition-report 1s linear" }}>
                    {Math.round(averageScores[0].average_percentage)}%
                  </span>
                )}
              </div>
            </div>

            <h2 style={{ color: "#ffe000" }}>Subtraction</h2>
            <div className="progress-bar">
              <div className="subtraction-report">
                {averageScores && averageScores[1] && (
                  <span style={{ animation: "subtraction-report 1s linear" }}>
                    {Math.round(averageScores[1].average_percentage)}%
                  </span>
                )}
              </div>
            </div>

            <h2 style={{ color: "#ff3399" }}>Multiplication</h2>
            <div className="progress-bar">
              <div className="multiplication-report">
                {averageScores && averageScores[2] && (
                  <span
                    style={{ animation: "multiplication-report 1s linear" }}
                  >
                    {Math.round(averageScores[2].average_percentage)}%
                  </span>
                )}
              </div>
            </div>

            <h2 style={{ color: "#c9f153" }}>Division</h2>
            <div className="progress-bar">
              <div className="division-report">
                {averageScores && averageScores[3] && (
                  <span style={{ animation: "division-report 1s linear" }}>
                    {Math.round(averageScores[3].average_percentage)}%
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
