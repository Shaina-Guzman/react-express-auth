const { isAuthorized } = require('../../utils/auth-utils');

const updateQuizAttempt = async (req, res) => {
  const {
    session, // this req.session property is put here by the handleCookieSessions middleware
    db: { Quiz_Attempts }, // this req.db.User property is put here by the addModelsToRequest middleware
    body: { quiz_id, percentage, score_count }, // this req.body property is put here by the client
  } = req;

  const user_id = session.userId;
  console.log(user_id, quiz_id, percentage, score_count)
  const quiz_attempt = await Quiz_Attempts.update(user_id, quiz_id, percentage, score_count);
  if (!quiz_attempt) return res.sendStatus(404);

  //const updatedQuizAttempt = await quiz_attempt.update();
  res.send(quiz_attempt);
};

module.exports = updateQuizAttempt;
