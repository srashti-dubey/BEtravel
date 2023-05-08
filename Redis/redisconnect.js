const redis = require('redis')
const test = require('../Model/City')

let redisclient;
 (async () => {

        redisclient = redis.createClient()

        redisclient.on('error', (error) => {

            console.log('error connecting redis' + error)
        })
        await redisclient.connect()

    })()


async function removeRedisData(cacheKey) {

    try {
        await redisclient.del(cacheKey)

        console.log(`Removed ${cacheKey} from Redis cache`)

    } catch (err) {

        console.error(`Error removing ${cacheKey} from Redis cache:`, err)
    }
}


async function getDataFromCacheOrMongoDB(cacheKey) {

    try {
        const cacheData = null
        await redisclient.get(cacheKey)

        if (cacheData) {

            console.log('cache hit', "heyyyy redis")

            const fetchedData = JSON.parse(cacheData)

            return fetchedData

        } else {

            console.log('cache miss')

            let fetchedData = await test.find();

            await redisclient.set(cacheKey, JSON.stringify(fetchedData), 'EX', 3000)

            return fetchedData

        }

    } catch (err) {

        console.error(err)

        return null
    }
}

module.exports = {

    getDataFromCacheOrMongoDB,

    removeRedisData,

}

