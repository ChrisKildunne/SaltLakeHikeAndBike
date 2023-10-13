const Review = require('../../models/review')


async function create(req,res){
    try{
        const {text, rating} = req.body;
        const review = await Review.create({
            user: req.user._id,
            text,
            rating,
            trail: req.params.trailId
        })
        const reviews = await Review.find({trail: req.params.trailId}).populate('user').exec();
        console.log(reviews)
        console.log('wevrnjuewce')
        res.json(reviews)
    }catch(err){
        console.error(err)
        res.status(400).json(err)
    }
}

module.exports = {
    create
}