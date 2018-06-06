const Sequelize = require("sequelize");
const {models} = require("../models");

/*
 * Tallies how many quizzes there are and
 * renders the number on the home page
 */
exports.numQuiz = (req, res, next) => {
    Sequelize.Promise.resolve()
        .then(() => {
            return models.quiz.count()
                .then(numQuiz => {
                    res.render('index', {numQuiz});
                })
                .catch(error => {
                    req.flash('Unexpected error');
                    next(error);
                });
        })
        .catch(error => {
            req.flash('Unexpected error');
            next(error);
        });
};