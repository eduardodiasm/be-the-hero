const connection = require('../database/connection')

module.exports = {
    async create(req, res) {
        const {title, description, value} = req.body
        const ngo_id = req.headers.authorization
        
        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ngo_id,
        })
        return res.json({ id })
    }
}
