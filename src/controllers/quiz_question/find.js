const findQuiz = async (req, res) => {
    const {
      db: { Quiz_Questions }, // this req.db.User property is put here by the addModelsToRequest middleware
      params: { quiz_id }, // this req.params.id is a part of the request URL
    } = req;
  
    const quiz_questions = await Quiz_Questions.find(quiz_id);
    if (!quiz_questions) return res.sendStatus(404);
  
    res.send(quiz_questions);
  };
  
  module.exports = findQuiz;
  