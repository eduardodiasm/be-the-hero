const connection = require('../database/connection')

module.exports = {
    async index(req, res) {
        const ngo_id = req.headers.authorization
        
        const incidents = await connection('incidents')
        .where('ngo_id', ngo_id).select('*')

        // if(Object.keys(incidents).length === 0) {
        //     return res.json({error: "Either this NGO has no incidents or it doesn't exist"})
        // }

        return res.json(incidents)
    }
}
