const Trail =  require('../../models/trails')

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

async function index(req, res){
    const trails = await Trail.find({}).sort('name').exec();
    res.json(trails)
}

async function show(req,res){
    const trail = await Trail.findById(req.params.id);
    res.json(trail)
}

module.exports = {
    create,
    show,
    index
}