// routes for the app

// create the express router middleware
express = require('express');
router = express.Router();
dustIssue = require('../controllers/dust_issue.js');

// route for the main page
router.route('/dust_issue').get(dustIssue.main);

module.exports = router;
