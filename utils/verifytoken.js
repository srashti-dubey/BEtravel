const jwt = require("jsonwebtoken");
const test = require('../Model/Model');
exports.verifyToken = async (data) => {
    const token = data

    const secretkey = "fygjiuydfuyjvkaugfowufhlwihlwihgoihrsefghvjbyugjhb";

    try {
console.log(data)
        const rawdata = jwt.verify(token, secretkey, (error, payload) => {

            if (error) {

                console.log(error);
                throw { error: { code: 400, msg: error.message } }
            }
            return payload

        });

        console.log(rawdata)
        // const result = await user.findOne(rawdata.username);
        let result = await test.findOne({"username": rawdata.username});

        if (!result) {

            return { error: { msg: "invalid token" } }

        }
        return rawdata

    } catch (error) {

        return error;

    }
}