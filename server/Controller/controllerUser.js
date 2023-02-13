const model = require('../Model/modelUser')
const { User } = require('../../db/db.js')
const {validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')
const _ = require('lodash')
const expressJwt = require('express-jwt')
const Sib = require('sib-api-v3-sdk')
require('dotenv').config()
var defaultClient = Sib.ApiClient.instance
var apiKey = defaultClient.authentications['api-key']
apiKey.apiKey = process.env.EMAIL_RESET
const tranEmailApi = new Sib.TransactionalEmailsApi()

var JWTHelper = require('jwthelper');

const sender = {
  email: 'support@cognitiveapp.com',
  name: 'Cognitive App',
}

exports.signUp = (req, res) => {
const errors = validationResult(req)

if(!errors.isEmpty()) {
  return res.send({
    error: errors.array()[0].msg
  })
}

const user = new User(req.body);
user.save((err, user) => {
  if (err) {
    return res.send({
      error: "Email already taken"
    })
  }

   //Create token
   const token = jwt.sign({_id: user._id},  "" + process.env.SECRET)
   //PUT TOKEN IN COOKIE
   res.cookie('token', token, {expire: new Date() + 1})
  return res.status(200).send({
    message: "Success",
    token,
    user
  })
})
}

exports.verifyUser = (req, res) => {
  const token = req.cookies.token;

  User.findOne({token}, (err, user) => {
    // Verify Token
    try {
      if (token) {
        jwt.verify(token, process.env.SECRET, (err, jwtResponse) => {
          if(err) {
            return res.status(401).json({
              error: err.message
            })
          } else {
            return res.status(200).json({
              message: 'Valid token',
              jwtResponse
            })
          }
        })
      }

    } catch (err) {
      console.log(err)
    }
  })
}

exports.getUser = (req, res) => {
  const {_id} = req.query;
  User.findOne({_id}, (err, user) => {
    if(err || !user) {
      return res.status(400).json({
        error: "User with this id not found"
      })
    }
    //Send response
    try {
      const {_id, name, age, email, test1Completion, test2Completion, test3Completion } = user;
      return res.status(200).send({
        user: {
          _id,
          age,
          name,
          email,
          test1Completion,
          test2Completion,
          test3Completion,
        }
      })
    } catch (err) {
      console.log(err)
    }})
}

exports.updateUser = (req, res) => {
  let query = req.query;
  let body = req.body;
  console.log('Req :', req.body)
  let param;
  if (body.test1Completion) {
    param = { test1Completion: body.test1Completion };
  } else if (body.test2Completion) {
    console.log('Req :', req.body)
    param = { test2Completion: body.test2Completion };
  } else if (body.test3Completion) {
    param = { test3Completion: body.test3Completion };
  } else if (body.test4Completion) {
    param = { test4Completion: body.test4Completion };
  }

  User.updateOne({_id: body._id}, {$set: param}, (err, user) => {
    if(err || !user) {
      return res.status(400).json({
        error: "User with this id not found/could not be updated"
      })
    }

  //Send response
  try {
    return res.status(200).send({
     message: "Successful post"
    })
  } catch (err) {
    console.log(err)
  }
 })
}

exports.logIn = (req, res) => {
  // console.log('req :', req.body)
  const {email, password} = req.body;

  User.findOne({email}, (err, user) => {
    if(err || !user) {
      return res.status(400).json({
        error: "Email not found"
      })
    }
    //Authenticate user
    if(user.authenticate(password) === false) {
      console.log('we oucheaa.....')
      return res.status(400).json({
        error: "Email and password do not match"
      })
    }
    //Create token
    const token = jwt.sign({_id: user._id},  "" + process.env.SECRET)
    //PUT TOKEN IN COOKIE
    res.cookie('token', token, {expire: new Date() + 1})
    //Send response
    const {_id, name, email, test1Completion, test2Completion } = user;
    return res.status(200).send({
      token,
      user: {
        _id,
        name,
        email,
        test1Completion,
        test2Completion,
      }
    })
  })
}

exports.logOut = (req, res) => {
  res.clearCookie("token")
  return res.json({
    // console.log('token :': res)
    message: "User sign out successful"
  })
}

exports.forgotPassword = (req, res) => {
  const {email} = req.body;
  User.findOne({email}, (err, user) => {
    if(err || !user) {
      return res.status(400).json({
        error: "User with this email not found"
      })
    }

    const token = jwt.sign({_id: user._id}, "" + process.env.PASSWORD_RESET, {expiresIn: '20m'} );

    return user.updateOne({resetLink: token}, (err, success) => {
      if(err) {
        return res.status(400).json({
          error: "Reset password link error."
        })
      } else {
      const receivers = [
        {
            email: email,
        },
      ]
      tranEmailApi
          .sendTransacEmail({
              sender,
              to: receivers,
              subject: 'Password Reset Link',
              htmlContent: `
              <head>
                <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
                <title>Cognitive App Reset Password Email</title>
                <meta name="description" content="Cognitive App Reset Password Email.">
                <style type="text/css">
                    a:hover {text-decoration: underline !important;}
                </style>
              </head>
              <body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0">
                  <!--100% body table-->
                  <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8"
                      style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;">
                      <tr>
                          <td>
                              <table style="background-color: #f2f3f8; max-width:670px;  margin:0 auto;" width="100%" border="0"
                                  align="center" cellpadding="0" cellspacing="0">
                                  <tr>
                                      <td style="height:80px;">&nbsp;</td>
                                  </tr>
                                  <tr>
                                      <td style="text-align:center;">
                                        <a href="https://entazesystems.com" title="logo" target="_blank">
                                          <img width="60" src="https://i.ibb.co/hL4XZp2/android-chrome-192x192.png" title="logo" alt="logo">
                                        </a>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td style="height:20px;">&nbsp;</td>
                                  </tr>
                                  <tr>
                                      <td>
                                          <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
                                              style="max-width:670px;background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">
                                              <tr>
                                                  <td style="height:40px;">&nbsp;</td>
                                              </tr>
                                              <tr>
                                                  <td style="padding:0 35px;">
                                                      <h1 style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif;">You have
                                                          requested to reset your password</h1>
                                                      <span
                                                          style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
                                                      <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                                                      Someone (hopefully you) has requested a password reset for your CognitiveApp account. To reset your password, click on reset password and follow the instructions.
                                                      </p>
                                                      <a href="${process.env.CLIENT_URL}/resetpassword?id=${token}&user=${email}"
                                                          style="background:#2EB67D;text-decoration:none !important; font-weight:500; margin-top:35px; margin-bottom:30px; color:#fff;text-transform:uppercase; font-size:14px;padding:10px 24px;display:inline-block;border-radius:50px;">Reset
                                                          Password
                                                      </a>
                                                      <p style="color:#455056; font-size:15px;line-height:24px;">
                                                        If you don't wish to reset your password, disregard this email and no action will be taken.
                                                      </p>
                                                      <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                                                      The CognitiveApp Team
                                                      </p>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td style="height:40px;">&nbsp;</td>
                                              </tr>
                                          </table>
                                      </td>
                                  <tr>
                                      <td style="height:20px;">&nbsp;</td>
                                  </tr>

                                  <tr>
                                      <td style="height:80px;">&nbsp;</td>
                                  </tr>
                              </table>
                          </td>
                      </tr>
                  </table>
                  <!--/100% body table-->
              </body>
                       `,
          })
          .then(res.status(200).send('Reset password email successfully sent!'))
          .catch(console.log)
        }
    })
})
}

exports.resetPassword = (req, res) => {
  const {resetLink, newPass} = req.body;
  if (resetLink) {
    jwt.verify(resetLink, process.env.PASSWORD_RESET, function (error, decodedData) {
      if(error) {
        return res.status(401).json({
          error: 'Incorrect/expired token!'
        })
      }
      //Find User
      User.findOne({resetLink}, (err, user) => {
        if(err || !user) {
          return res.status(400).json({
            error: "User with this token not found"
          })
        }
        const obj = {
          password: newPass,
          resetLink: ''
        }
        //Using lodash to extend user object in db
        user = _.extend(user, obj);
        user.save((err, result) => {
          if(err) {
            return res.status(400).json({
              error: "Reset password error."
            })
          } else {
            return res.status(200).json({
              message: "Password successfully changed."
            })
          }
        })
      })
    })
  } else {
    return res.status(401).json({error: 'Authentication error!'});
  }
}

