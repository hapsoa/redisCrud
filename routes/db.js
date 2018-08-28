const redis = require('redis');
const client = redis.createClient(6379, '127.0.0.1');
const _ = require('lodash');

const db = {
  createUser: (key, value) => {
    return new Promise((resolve, reject) => {
      client.set(key, value, (err) => {
        if (_.isNil(err)) resolve();
        else reject();
      });
    });
  },

  createUserCallback: (key, value, callback) => {
    client.set(key, value, (err) => callback(err));
  },
  
  deleteUser: () => {

  },
}


async function test() {
  await db.createUser('hyunwoo', {age: 31});
}

module.exports = db;