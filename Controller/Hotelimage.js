const hotelimage = require('../Model/Hotelimage');

exports.hotelimage = async (req, res, next) => {

    console.log(req.body.image)
    const create_record = new hotelimage({
        // id: req.body.id,
        image: req.body.image
        // hotel: req.body.hotel,
        // description: req.body.description,
    })

    const result = await create_record.save()

    console.log(result)

    if (result) {
        res.send({ result });
    } else {
        res.send("cant store data");
    }
}

exports.hotelimageall = async (req, res, next) => {

    const result = await hotelimage.find()

    console.log(result)

    if (result) {
        res.send({ result });
    } else {
        res.send("cant store data");
    }
}