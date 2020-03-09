var express = require('express');
var router = express.Router();
const { Kafka } = require('kafkajs');

var longpoll = require('express-longpoll')(router, { DEBUG: true });
longpoll.create('/cp');


function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function proccessKey(keyObj){
  flatKey = {};
  flatKey["windowstart"] = keyObj["window"]["start"];
  flatKey["windowend"] = keyObj["window"]["end"];
  flatKey["channel"] = keyObj["channel"];
  flatKey["node_id"] = keyObj["node_id"];
  return flatKey;
}

function extend(dest, src) {
  for(var key in src) {
    dest[key] = src[key];
  }
  return dest;
}

const run = async () => {
  const kafka = new Kafka({
    clientId: 'deep-cdn-ui',
    brokers: ['kafka_kafkanet:9092']
  });
  const consumer = kafka.consumer({ groupId: 'hhkfqawqmzqqqwfq' });
  // Consuming
  await consumer.connect();
  await consumer.subscribe({ topic: 'channel_performance', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      /* console.log({
         partition,
         offset: message.offset,
         key: message.key.toString(),
         value: message.value.toString(),
       });*/
      await sleep(200);
      let keyObject = JSON.parse(message.key.toString());
      keyObject = proccessKey(keyObject);
      keyObject['offset']= parseInt(message.offset);
      let valueObject = JSON.parse(message.value.toString());
      let wholeObject = extend(keyObject,valueObject);
      //console.log("processed record: ", wholeObject);
      longpoll.publish("/cp", wholeObject);

    },
  })
};



/* GET home page. */
router.get('/', function(req, res, next) {
  run().catch(console.error);
  res.render('index', { title: 'Express' });
});


module.exports = router;
