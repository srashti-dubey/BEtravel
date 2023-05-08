const test = require('../Model/Hotel');

exports.Hotel = async (req, res, next) => {

    console.log(req.body)
    const create_record = new test({
        id: req.body.id,
        image: req.body.image,
        hotel: req.body.hotel,
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