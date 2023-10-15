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
    try{
    const trailId = req.params.trailId
    const reviews = await Review.find({ trail: trailId }).populate('user').exec();
    res.json(reviews)
    }catch(err){
        console.error(err)
    }
}
async function deleteReview(req,res){
    try{
        const trailId = req.params.trailId; 
        const reviewId = req.params.reviewId
        const reviews = await Review.findOne({ trail: trailId, _id: reviewId });
        await Review.deleteOne({ _id: reviewId, trail: trailId})
        res.json(reviews)
    }catch(err){
        console.log(err)
    }
}
async function editReview(req,res){
    try{
        const trailId = req.params.trailId
        const reviewId = req.params.reviewId
        const { text, rating } = req.body;
        const existingReview= await Review.findOneAndUpdate(
        {_id: reviewId, trail: trailId},
        {text,rating}).populate('user').exec();
        existingReview.text = text
        existingReview.rating = rating
        console.log(existingReview.text,'this')
        // const reviews = await Review.find({ trail: trailId }).populate('user').exec();
        // console.log(reviews.text,'existingreview')
        // res.json(existingReview)
    }  catch(err){
        console.error(err)
    }
}

module.exports = {
    create,
    getAll,
    deleteReview,
    editReview
}