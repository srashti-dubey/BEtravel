const test = require('../Model/Model');

exports.Signup = async (req, res, next) => {

    console.log(req.body)
    const create_record = new test({
        email: req.body.email,
        username: req.body.username,
        pass: req.body.pass,
    })

    const result = await create_record.save()

    console.log(result)

    if (result) {
        res.send({ result });
    } else {
        res.send("cant store data");
    }
}
