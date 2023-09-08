const listAttempts = async (req, res) => {
    const { 
      db: { Quiz_Attempts } // this req.db.User property is put here by the addModelsToRequest middleware
    } = req; 
  
    const quiz_attempts = await Quiz_Attempts.list();
    res.send(quiz_attempts);
  };
  
  module.exports = listAttempts;
  