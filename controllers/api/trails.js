const Trail =  require('../../models/trails')
// const ApiTrail = require('../../models/apiTrail.js'); 




async function create(req, res) {
    try {
        const { name, difficulty, mileage, trailStyle, description } = req.body;
        
        const trail = await Trail.create({
            name, 
            difficulty, 
            mileage, 
            trailStyle, 
            description
        });
        console.log(trail)
        res.json(trail);
    } catch (err) {
        console.error(err);
        res.status(400).json(err);
    }
}
async function addAPITrail(req,res){
    const trailData = req.body;
    const apiTrail = new APITrail.create(trailData)
    await apiTrail.save()
    res.json(apiTrail)
}

async function index(req, res){
    const trails = await Trail.find({}).sort('name').exec();
    console.log(trails)
    res.json(trails)
}

async function show(req,res){
    const trail = await Trail.findById(req.params.id);
    console.log(trail)
    res.json(trail)
}

module.exports = {
    create,
    show,
    index,
    addAPITrail
}