const YT_API = process.env.YOUTUBE_API_KEY
const youtubeUrl = `https://www.googleapis.com/youtube/v3`
const axios = require('axios')



class YoutubeController {

    static search(req, res, next) {

        axios({
                method: 'get',
                url: `${youtubeUrl}/search?part=id&q=trailer${req.query.title}&type=video&key=${YT_API}&maxResults=1`
            })
            .then(({
                data
            }) => {
                res.status(200).json(data.items[0].id.videoId)
            })
            .catch(next)

    }

}

module.exports = YoutubeController