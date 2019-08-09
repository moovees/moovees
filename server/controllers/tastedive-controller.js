const axios = require('axios')

class TasteDiveController {
    static getRecommendation (req, res, next) {
        const { title } = req.query
        const new_title = title.replace(' ','%20')

        axios({
            method: 'GET',
            url: `https://tastedive.com/api/similar?q=${new_title}&type=movies&k=${process.env.TASTEDIVE_API_ACCESS_KEY}`
        })
        .then(({ data })=> {
            res.status(200).json(data)
        })
        .catch(next)
    }
}

module.exports = TasteDiveController