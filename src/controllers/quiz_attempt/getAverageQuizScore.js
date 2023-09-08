const session = require("express-session");

const getAverageQuizScore = async (req, res) => {
    const {
      db: { Quiz_Attempts }, // this req.db.User property is put here by the addModelsToRequest middleware
      session: { userId }, // this req.params.id is a part of the request URL
    } = req;
    
    const quiz_attempts = await Quiz_Attempts.getAverageQuizScore(userId);
    if (!quiz_attempts) return res.sendStatus(404);
  
    res.send(quiz_attempts);
  };
  
  module.exports = getAverageQuizScore;
  