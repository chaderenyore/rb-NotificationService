const Redis = require('ioredis');
const fs = require('fs');
const KEYS = require("./keys");


const redis = new Redis({
    host: KEYS.redisHost,
    port: KEYS.redisPort,
    password: KEYS.redisPassword
});

// handle connection event

redis.on("connect", () => {
 console.log("Reddis Connected....")
})

// handle error

redis.on("error", (error) => {
  console.error(error)
});

module.exports = redis;



// const redis = require("redis");
// const KEYS = require("./keys");

// const redisClient = redis.createClient({
//   host: KEYS.redisHost,
//   port: KEYS.redisPort,
//   no_ready_check: true,
//   auth_pass: KEYS.redisPassword
// });

// redisClient.on("error", function (error) {
//   console.error(error);
// });

// module.exports = redisClient;
