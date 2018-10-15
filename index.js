const redis = require("redis");
const client = redis.createClient({
  host: `${process.env.HOST}`,
  port: `${process.env.PORT}`
});



client.on("error", function (err) {
  console.log("Error " + err);
});

client.set("string key", "string val", redis.print);

client.get("string key", function (err, reply) {
  // reply is null when the key is missing
  if (err) throw err;
  console.log(reply);
});
