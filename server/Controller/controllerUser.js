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
  email: 'noreply@cognitiveapp.com',
  name: 'Cognitive App',
}

// exports.signUp = (req, res) => {
// const errors = validationResult(req)

// if(!errors.isEmpty()) {
//   return res.send({
//     error: errors.array()[0].msg
//   })
// }

// const user = new User(req.body);
// user.save((err, user) => {
//   console.log('Error :', err)

//   if (err) {
//     return res.send({
//       error: "Email already taken"
//     })
//   }

  //  //Create token
  //  const token = jwt.sign({_id: user._id},  "" + process.env.SECRET)
  //  //PUT TOKEN IN COOKIE
  //  res.cookie('token', token, {expire: new Date() + 1})

//    return res.status(200).send({
//     message: "Success",
//     token,
//     user
//   })
//  })
// }

exports.signUp = async (req, res) => {
  // Check for errors
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.send({
      error: errors.array()[0].msg
    })
  }
  const { name, age, email, password, gender } = req.body;
  const user = new User(req.body);
  //Save New User
  await user.save((err, user) => {
    if (err) {
      return res.send({
        error: "Email already taken. Reset Password or sign up."
      })
    }
    // const result = { status: 'ok', user }
    const userid = user._id;
    const username = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    //Create token
    const token = jwt.sign({_id: user._id},  "" + process.env.SECRET)
    //PUT TOKEN IN COOKIE
    res.cookie('token', token, {expire: new Date() + 1})
    //Send Email to user to confirm account
    try {
             const receivers = [
              {
                  email: email,
              },
              {
                email: 'tarraxoboy@gmail.com',
              },
            ]
            tranEmailApi
                .sendTransacEmail({
                  sender,
                  to: receivers,
                  subject: `Email Verification`,
                  htmlContent: `
                  <head>
                    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
                    <title>Email Confirmation</title>
                    <meta name="description" content="Cognitive App Email verification.">
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
                                          <td style="height:50px;">&nbsp;</td>
                                      </tr>

                                      <tr>
                                          <td>
                                              <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
                                                  style="max-width:970px;background:#6385bd; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">

                                                  <tr>
                                                    <td style="padding:0 35px;">
                                                        <h1 style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif;">Hello ${username} 📧</h1>
                                                        <span
                                                            style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
                                                        <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                                                        Please complete registration by clicking on the following link.
                                                        </p>
                                                        <a href="${process.env.CLIENT_URL}/confirmaccount?id=${token}&user=${userid}"
                                                            style="background:#00A699;text-decoration:none !important; font-weight:500; margin-top:35px; margin-bottom:30px; color:#fff;text-transform:uppercase; font-size:14px;padding:10px 24px;display:inline-block;border-radius:50px;">
                                                            Confirm Email
                                                        </a>
                                                        <p style="color:#455056; font-size:15px;line-height:24px;">
                                                          If you did not sign up on the cognitive app, disregard this email and no action will be taken.<br /><br />
                                                        </p>
                                                        <span style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:80px;"></span>
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

      res.json({ status: 'ok', message: 'Check your email to confirm account', token })
    } catch (err) {
      console.log(err)
      if (err.code === 11000) {
        return res.json({ status: 'error', error: 'User with this email already exists' })
      }
      throw err
    }
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
      const {_id, name, age, email, test1Completion, test1Completionv2, test2Completion, test2Completionv2, test3Completion, test3Completionv2, test4CompletionSctn1, test4CompletionSctn1v2, test4CompletionSctn2, test4CompletionSctn2v2, test4CompletionSctn3, test4CompletionSctn3v2, test4CompletionSctn4, test4CompletionSctn4v2, test4CompletionSctn5, test4CompletionSctn5v2, test4CompletionSctn6, test4CompletionSctn6v2, Sctn6CompletionTime, Sctn6CompletionTimev2, test4Completion, test4Completionv2, test1CompletionRecallSctn2, test1CompletionRecallSctn2v2, test1CompletionRecall, test1CompletionRecallv2, test2CompletionRecall, test2CompletionRecallv2, test3CompletionRecall, test3CompletionRecallv2, test4CompletionRecall, test4CompletionRecallv2, test4CompletionRecallSctn1, test4CompletionRecallSctn1v2, test4CompletionRecallSctn2, test4CompletionRecallSctn2v2, test4CompletionRecallSctn3, test4CompletionRecallSctn3v2, Test4RecallCompletionTime, Test4RecallCompletionTimev2, Test1Tracker, Test1Trackerv2, Test2Tracker, Test2Trackerv2, userConfirmed, } = user;
      return res.status(200).send({
        user: {
          _id,
          age,
          name,
          email,
          test1Completion,
          test2Completion,
          test3Completion,
          test4CompletionSctn1,
          test4CompletionSctn2,
          test4CompletionSctn3,
          test4CompletionSctn4,
          test4CompletionSctn5,
          test4CompletionSctn6,
          Sctn6CompletionTime,
          test4Completion,
          test1CompletionRecallSctn2,
          test1CompletionRecall,
          test2CompletionRecall,
          test3CompletionRecall,
          test4CompletionRecallSctn1,
          test4CompletionRecallSctn2,
          test4CompletionRecallSctn3,
          test4CompletionRecall,
          Test4RecallCompletionTime,
          Test1Tracker,
          Test2Tracker,
          test1Completionv2,
          test2Completionv2,
          test3Completionv2,
          test4CompletionSctn1v2,
          test4CompletionSctn2v2,
          test4CompletionSctn3v2,
          test4CompletionSctn4v2,
          test4CompletionSctn5v2,
          test4CompletionSctn6v2,
          Sctn6CompletionTimev2,
          test4Completionv2,
          test1CompletionRecallSctn2v2,
          test1CompletionRecallv2,
          test2CompletionRecallv2,
          test3CompletionRecallv2,
          test4CompletionRecallSctn1v2,
          test4CompletionRecallSctn2v2,
          test4CompletionRecallSctn3v2,
          test4CompletionRecallv2,
          Test4RecallCompletionTimev2,
          Test1Trackerv2,
          Test2Trackerv2,
          userConfirmed,

        }
      })
    } catch (err) {
      console.log(err)
    }})
}

exports.updateUser = (req, res) => {
  let query = req.query;
  let body = req.body;
  //For Postman, use: let body = req.query;
  // console.log('Req :', req.body)
  let param;
  if (body.userConfirmed) {
    param = { userConfirmed: body.userConfirmed }
  } else if (body.test1Completion) {
    param = { test1Completion: body.test1Completion };
  } else if (body.Test1Tracker) {
    param = { Test1Tracker: body.Test1Tracker };
  } else if (body.Test2Tracker) {
    param = { Test2Tracker: body.Test2Tracker };
  } else if (body.test2Completion) {
    param = { test2Completion: body.test2Completion };
  } else if (body.test3Completion) {
    param = { test3Completion: body.test3Completion };
  } else if (body.test4CompletionSctn1) {
    param = { test4CompletionSctn1: body.test4CompletionSctn1 };
  } else if (body.test4CompletionSctn2) {
    param = { test4CompletionSctn2: body.test4CompletionSctn2 };
  } else if (body.test4CompletionSctn3) {
    param = { test4CompletionSctn3: body.test4CompletionSctn3 };
  } else if (body.test4CompletionSctn4) {
    param = { test4CompletionSctn4: body.test4CompletionSctn4 };
  } else if (body.test4CompletionSctn5) {
    param = { test4CompletionSctn5: body.test4CompletionSctn5 };
  } else if (body.test4CompletionSctn6) {
    param = { test4CompletionSctn6: body.test4CompletionSctn6, Sctn6CompletionTime: body.Sctn6CompletionTime };
  } else if (body.test4Completion) {
    param = { test4Completion: body.test4Completion };
  } else if (body.test1Completionv2) {
    param = { test1Completionv2: body.test1Completionv2 };
  } else if (body.Test1Trackerv2) {
    param = { Test1Trackerv2: body.Test1Trackerv2 };
  } else if (body.Test2Trackerv2) {
    param = { Test2Trackerv2: body.Test2Trackerv2 };
  } else if (body.test2Completionv2) {
    param = { test2Completionv2: body.test2Completionv2 };
  } else if (body.test3Completionv2) {
    param = { test3Completionv2: body.test3Completionv2 };
  } else if (body.test4CompletionSctn1v2) {
    param = { test4CompletionSctn1v2: body.test4CompletionSctn1v2 };
  } else if (body.test4CompletionSctn2v2) {
    param = { test4CompletionSctn2v2: body.test4CompletionSctn2v2 };
  } else if (body.test4CompletionSctn3v2) {
    param = { test4CompletionSctn3v2: body.test4CompletionSctn3v2 };
  } else if (body.test4CompletionSctn4v2) {
    param = { test4CompletionSctn4v2: body.test4CompletionSctn4v2 };
  } else if (body.test4CompletionSctn5v2) {
    param = { test4CompletionSctn5v2: body.test4CompletionSctn5v2 };
  } else if (body.test4CompletionSctn6v2) {
    param = { test4CompletionSctn6v2: body.test4CompletionSctn6v2, Sctn6CompletionTimev2: body.Sctn6CompletionTimev2 };
  } else if (body.test4Completionv2) {
    param = { test4Completionv2: body.test4Completionv2 };
  } else if (body.test1CompletionRecallSctn2) {
    param = { test1CompletionRecallSctn2: body.test1CompletionRecallSctn2 };
  } else if (body.test1CompletionRecallSctn2v2) {
    param = { test1CompletionRecallSctn2v2: body.test1CompletionRecallSctn2v2 };
  } else if (body.test1CompletionRecall) {
    param = { test1CompletionRecall: body.test1CompletionRecall };
  } else if (body.test1CompletionRecallv2) {
    param = { test1CompletionRecallv2: body.test1CompletionRecallv2 };
  } else if (body.test2CompletionRecall) {
    param = { test2CompletionRecall: body.test2CompletionRecall };
  } else if (body.test2CompletionRecallv2) {
    param = { test2CompletionRecallv2: body.test2CompletionRecallv2 };
  } else if (body.test3CompletionRecall) {
    param = { test3CompletionRecall: body.test3CompletionRecall };
  } else if (body.test3CompletionRecallv2) {
    param = { test3CompletionRecallv2: body.test3CompletionRecallv2 };
  } else if (body.test4CompletionRecallSctn1) {
    param = { test4CompletionRecallSctn1: body.test4CompletionRecallSctn1 };
  } else if (body.test4CompletionRecallSctn2) {
    param = { test4CompletionRecallSctn2: body.test4CompletionRecallSctn2 };
  } else if (body.test4CompletionRecallSctn3) {
    param = { test4CompletionRecallSctn3: body.test4CompletionRecallSctn3, Test4RecallCompletionTime: body.Test4RecallCompletionTime };
  } else if (body.test4CompletionRecall) {
    param = { test4CompletionRecall: body.test4CompletionRecall };
  } else if (body.test4CompletionRecallSctn1v2) {
    param = { test4CompletionRecallSctn1v2: body.test4CompletionRecallSctn1v2 };
  } else if (body.test4CompletionRecallSctn2v2) {
    param = { test4CompletionRecallSctn2v2: body.test4CompletionRecallSctn2v2 };
  } else if (body.test4CompletionRecallSctn3v2) {
    param = { test4CompletionRecallSctn3v2: body.test4CompletionRecallSctn3v2, Test4RecallCompletionTimev2: body.Test4RecallCompletionTimev2 };
  } else if (body.test4CompletionRecallv2) {
    param = { test4CompletionRecallv2: body.test4CompletionRecallv2 };
  }

  User.updateOne({_id: body._id}, {$set: param}, (err, user) => {
    if(err || !user) {
      return res.status(400).json({
        error: "User with this id not found/could not be updated"
      })
    }

  //Send response
  try {
    // if body.test4Completion, send email - Test with postman
    if (body.test4Completion) {
      const username = body.name.charAt(0).toUpperCase() + body.name.slice(1).toLowerCase();
      const receivers = [
        {
            email: body.email,
        },
        {
          email: 'samjmarzi@gmail.com',
        },
      ]
      tranEmailApi
          .sendTransacEmail({
            sender,
            to: receivers,
            subject: `Cognitive Test: Learning Session Completion`,
            htmlContent: `
            <head>
              <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
              <title>Learning Session Completion</title>
              <meta name="description" content="Cognitive Test Learning Session Completion.">
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
                                    <td style="height:50px;">&nbsp;</td>
                                </tr>

                                <tr>
                                    <td>
                                        <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
                                            style="max-width:970px;background:#6385bd; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">

                                            <tr>
                                              <td style="padding:0 35px;">
                                                  <h1 style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif;">Hi ${username} 👋🏼</h1>
                                                  <span
                                                      style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
                                                  <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                                                  We just wanted to say thank you for completing the cognitive tests' learning session. We would like to also inform you that you have to take the recall session within 10 - 14 hours from the time you completed the learning session.
                                                  If you are unable to take the test during this period, the entire test will be invalid.<br />
                                                  Thank you and we look forward to you completing the recall session.<br /><br />
                                                  </p>

                                                  <span style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:80px;"></span>

                                                  <p style="color:#455056; font-size:15px;line-height:24px; margin:0; font-weight:500;">
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
    } else if (body.test4CompletionRecall) {
    // if body.test4CompletionRecall, send email
      const username = body.name.charAt(0).toUpperCase() + body.name.slice(1).toLowerCase();
      const receivers = [
        {
            email: body.email,
        },
      ]
      tranEmailApi
          .sendTransacEmail({
            sender,
            to: receivers,
            subject: `Cognitive Test: Recall Session Completion`,
            htmlContent: `
            <head>
              <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
              <title>Recall Session Completion</title>
              <meta name="description" content="Cognitive Test Recall Session Completion.">
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
                                    <td style="height:50px;">&nbsp;</td>
                                </tr>

                                <tr>
                                    <td>
                                        <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
                                            style="max-width:970px;background:#6385bd; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">

                                            <tr>
                                              <td style="padding:0 35px;">
                                                  <h1 style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif;">Hi ${username} 👋🏼</h1>
                                                  <span
                                                      style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
                                                  <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                                                  We just wanted to say thank you for completing the cognitive tests' recall session. We would like to also inform you that you have to take the second session of the test after a week from today.
                                                  If you are unable to take the test during this period, the entire test will be invalid.<br /><br />
                                                  Thank you and we look forward to you completing the second session.<br /><br />
                                                  </p>

                                                  <span style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:80px;"></span>

                                                  <p style="color:#455056; font-size:15px;line-height:24px; margin:0; font-weight:500;">
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
    }

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
    const {_id, name, email, test1Completion, test2Completion, test3Completion, test4Completion, test1Completionv2, test2Completionv2, test3Completionv2, test4Completionv2, test4CompletionSctn1, test4CompletionSctn2, test4CompletionSctn3, test4CompletionSctn4, test4CompletionSctn5, test4CompletionSctn6, Sctn6CompletionTime, test1CompletionRecallSctn2, test1CompletionRecall, test2CompletionRecall, test3CompletionRecall, test4CompletionRecall, test4CompletionRecallSctn1, test4CompletionRecallSctn2, test4CompletionRecallSctn3, Test4RecallCompletionTime, Test1Tracker, Test2Tracker, userConfirmed, test4CompletionSctn1v2, test4CompletionSctn2v2, test4CompletionSctn3v2, test4CompletionSctn4v2, test4CompletionSctn5v2, test4CompletionSctn6v2, Sctn6CompletionTimev2, test1CompletionRecallSctn2v2, test1CompletionRecallv2, test2CompletionRecallv2, test3CompletionRecallv2, test4CompletionRecallv2, test4CompletionRecallSctn1v2, test4CompletionRecallSctn2v2, test4CompletionRecallSctn3v2, Test4RecallCompletionTimev2, Test1Trackerv2, Test2Trackerv2, } = user;
    return res.status(200).send({
      token,
      user: {
        _id,
        name,
        email,
        test1Completion,
        test2Completion,
        test3Completion,
        test4CompletionSctn1,
        test4CompletionSctn2,
        test4CompletionSctn3,
        test4CompletionSctn4,
        test4CompletionSctn5,
        test4CompletionSctn6,
        Sctn6CompletionTime,
        test4Completion,
        test1CompletionRecallSctn2,
        test1CompletionRecall,
        test2CompletionRecall,
        test3CompletionRecall,
        test4CompletionRecallSctn1,
        test4CompletionRecallSctn2,
        test4CompletionRecallSctn3,
        test4CompletionRecall,
        Test4RecallCompletionTime,
        Test1Tracker,
        Test2Tracker,
        test1Completionv2,
        test2Completionv2,
        test3Completionv2,
        test4CompletionSctn1v2,
        test4CompletionSctn2v2,
        test4CompletionSctn3v2,
        test4CompletionSctn4v2,
        test4CompletionSctn5v2,
        test4CompletionSctn6v2,
        Sctn6CompletionTimev2,
        test4Completionv2,
        test1CompletionRecallSctn2v2,
        test1CompletionRecallv2,
        test2CompletionRecallv2,
        test3CompletionRecallv2,
        test4CompletionRecallSctn1v2,
        test4CompletionRecallSctn2v2,
        test4CompletionRecallSctn3v2,
        test4CompletionRecallv2,
        Test4RecallCompletionTimev2,
        Test1Trackerv2,
        Test2Trackerv2,
        userConfirmed,

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
              subject: 'Password Reset Link 🔗',
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
                                      <td style="height:50px;">&nbsp;</td>
                                  </tr>

                                  <tr>
                                      <td>
                                          <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
                                              style="max-width:970px;background:#6385bd; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">
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
  const {resetLink, userConfirmed, newPass} = req.body;
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
          resetLink: '',
          userConfirmed
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

