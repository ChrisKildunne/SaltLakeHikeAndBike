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
        
        res.json(reviews)
    }catch(err){
        console.error(err)
        res.status(400).json(err)
    }
}
async function getAll(req,res){
    const trailId = req.params.trailId
    const reviews = await Review.find({ trail: trailId }).populate('user').exec();
    res.json(reviews)
}
async function deleteReview(req,res){
    try{
        const trailId = req.params.trailId; 
        const reviewId = req.params.reviewId
        console.log(reviewId, 'this is the reviewId'); // Log the reviewId first
        console.log(trailId, 'this is the trailId');        
        const reviews = await Review.findOne({ trail: trailId, _id: reviewId });
        console.log(reviews)
        await Review.deleteOne({ _id: reviewId, trail: trailId})
        res.json(reviews)
    }catch(err){
        console.log(err)
    }
}
module.exports = {
    create,
    getAll,
    deleteReview
}