const { error } = require('console');

var jwt = require('jsonwebtoken');

require('dotenv').config();

exports.generateToken = async (data) => {
  const payload = {

    username: data.username,

    passward: data.passward

  }

  const secretkey = "fygjiuydfuyjvkaugfowufhlwihlwihgoihrsefghvjbyugjhb";

  const options = {

    expiresIn: "1d"

  }

  return new Promise((resolve, reject) => {

    jwt.sign(payload, secretkey, options, (error, token) => {

      if (error) reject(error)

      resolve(token)

    });

  })

}