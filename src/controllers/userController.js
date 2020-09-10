const userCtrl = { };

userCtrl.signupForm = (req, res) => {
    res.render('user/signup');
}; 

userCtrl.signup = (req, res) => {
    res.send('signup');
};

userCtrl.signinForm = (req, res) => {
    res.render('user/signin');
}

userCtrl.signin = (req,res) => {
    res.send('signin');
};

userCtrl.logout = (req, res) => {
    res.send('Logout');
}

module.exports = userCtrl;