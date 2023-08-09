const User = require('../db/models/user');
const Quizzes = require('../db/models/quizzes');
const Quiz_Attempts = require('../db/models/quiz_attempts');
const Quiz_Questions = require('../db/models/quiz_questions');

const addModelsToRequest = (req, res, next) => {
  req.db = {
    User,
    Quizzes,
    Quiz_Attempts,
    Quiz_Questions
  };
  next();
};

module.exports = addModelsToRequest;
