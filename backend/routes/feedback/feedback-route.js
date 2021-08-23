const router = require('express').Router();
let Feedback = require("../../model/feedback/feedback.model");
 
router.route('/').get((req, res) => {
 Feedback.find()
    .then(feedbacks => res.json(feedbacks))
    .catch(err => res.status(400).json('Error: ' + err));
});
 
router.route('/add').post((req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
 
  const newFeedback = new Feedback({
    name,
    email,
    message,
  });
 
  newFeedback.save()
  .then(() => res.json('Feedback added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});
 
module.exports = router;