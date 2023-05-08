const test = require('../Model/City');

exports.Travel = async (req, res, next) => {

    console.log(req.body)
    const create_record = new test({
        image: req.body.image,
        city: req.body.city,
        description: req.body.description,
    })

    const result = await create_record.save()

    console.log(result)

    if (result) {
        res.send({ result });
    } else {
        res.send("cant store data");
    }
}

