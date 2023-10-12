const Trail =  require('../../models/trails')

async function create(req,res){
    try{
        const trail = await Trail.create(req.body)
        
        res.json(trail)
    } catch (err) {
        console.error(err);
        res.status(400).json(err);
    }
}

module.exports = {
    create
}