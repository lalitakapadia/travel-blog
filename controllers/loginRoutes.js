const router = require('express').Router();

//login handler
 router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');     
    } else {
        res.render('login');
   }
});

module.exports = router;
