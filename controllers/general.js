module.exports.getWelcomePage = function(req, res){
  res.render('welcome-page')
}

module.exports.getRegistrationPage = function(req, res){
  res.render('registration-page')
}

module.exports.getRegistrationFacePage = function(req, res){
  res.render('registration-face-page')
}

module.exports.getRegistrationDefaultPage = function(req, res){
  res.render('registration-default-page')
}