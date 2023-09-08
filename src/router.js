const express = require('express');
const userController = require('./controllers/user');
const quizAttemptController = require('./controllers/quiz_attempt');
const addModelsToRequest = require('./middleware/add-models-to-request');
const checkAuthentication = require('./middleware/check-authentication');
const quizQuestionController = require('./controllers/quiz_question');

const Router = express.Router();
Router.use(addModelsToRequest);

Router.get('/users', userController.list);
Router.post('/users', userController.create);
Router.get('/users/:id', userController.show);

Router.post('/login', userController.login);
Router.delete('/logout', userController.logout);
Router.get('/me', userController.showMe);

// These actions require authentication (only valid logged in users can do these things)
// The checkAuthentication middleware will only run for these specified routes.
Router.patch('/users/:id', checkAuthentication, userController.update);
Router.get('/logged-in-secret', checkAuthentication, (req, res) => {
  res.send({ msg: 'The secret is: there is no secret.' });
});
Router.post('/quiz-attempts', quizAttemptController.create);
Router.get('/quiz-attempts', quizAttemptController.list);
Router.patch('/quiz-attempts/update', quizAttemptController.update);
Router.get('/quiz-attempts/average', quizAttemptController.getAverageQuizScore);
Router.get('/quiz-attempts/:id', quizAttemptController.find);
// Router.post('/quiz-attempts/:id', quizAttemptController.update);
// Router.post('/quiz-attempts', (req, res) => {
//   const { user_id, quiz_id, percentage } = req.body 
//   res.send({ user_id, quiz_id, percentage })
// });

Router.get('/quiz-questions/:quiz_id', quizQuestionController.find);
Router.get('/quiz-questions', quizQuestionController.list);

module.exports = Router;
