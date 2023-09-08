const createAttempt = async (req, res) => {
    const {
      session, // this req.session property is put here by the handleCookieSessions middleware
      db: { Quiz_Attempts }, // this req.db.User property is put here by the addModelsToRequest middleware
      body: { quiz_id, percentage, score_count }, // this req.body property is put here by the client
    } = req;
    const userId = session.userId
    console.log("controller quiz attempt",userId)
    // TODO: check if username is taken, what should you return?
    const quiz_attempts = await Quiz_Attempts.create(userId, quiz_id, percentage, score_count);
  
    res.send(quiz_attempts);
  };
  
  module.exports = createAttempt;
  