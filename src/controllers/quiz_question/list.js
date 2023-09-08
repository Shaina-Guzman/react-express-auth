const listQuestions = async (req, res) => {
    const { 
      db: { Quiz_Questions } // this req.db.User property is put here by the addModelsToRequest middleware
    } = req; 
  
    const quiz_questions = await Quiz_Questions.list();
    res.send(quiz_questions);
  };
  
  module.exports = listQuestions;
  