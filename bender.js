// index.js
require("dotenv").config();
const Twit = require("twit");
const axios = require("axios");
("use strict");

const client = new Twit({
  consumer_key: "SlCpj47RVwBGpSfKWx2P7eUZH",
  consumer_secret: "zQPDwI9dmRBuxjqcOyl4QWr8K6GB8sm3UVra8AVXNIz4Ld8uVD",
  access_token: "1512537654147133443-k4BamMV7KTMDtWRPgKenhtUOPBhLv6",
  access_token_secret: "XWMMyDA3cSEAe3x3GMGOYUwx8d5Foxj7Lw1sRKvTy6cf5",
  timeout_ms: 60 * 1000, // seconds. Defaults to 360
  strictSSL: true,
});

// POST TWEET

var tweet;
const getBenderTweet = async () => {
  const response = await axios
    .get("https://api.jsonbin.io/b/6250a30cd20ace068f959fd7/8")
    .then((response) => {
      //console.log(response.data);
      const data = response.data ? response.data : {};
      if (data.frasi && data.frasi.length) {
        let randomNumber = getRandomInt(data.frasi.length);
        tweet = data.frasi[randomNumber].frase + " #bender #futurama";
      } else {
        tweet = "Nothing happened today :)";
      }
    })
    .catch((err) => {
      console.error(err);
    });
  return tweet;
  console.log(response.data);
};

const quoteLimitChecked = async () => {
  const benderQuotetweet = await getBenderTweet();
  if (benderQuotetweet.length < 220) {
    return benderQuotetweet;
  } else {
    return quoteLimitChecked();
  }
};

const postTweet = async () => {
  client.post(
    "statuses/update",
    { status: await quoteLimitChecked() },
    function (err, data, response) {
      console.log(data);
    }
  );
};

function getTodayDate() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = dd + "." + mm;
  return today;
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

setInterval(postTweet, 30800000);

// RETWEET BOT ==========================

// find latest tweet according the query 'q' in params
var retweetTweet = function () {
  var params = {
    q: "vaffanchiappola OR #futurama OR #bender", // REQUIRED
    result_type: "mixed",
    count: 25,
  };
  // for more parameters, see: https://dev.twitter.com/rest/reference/get/search/tweets

  client.get("search/tweets", params, function (err, data) {
    // if there no errors
    if (!err) {
      // grab ID of tweet to retweet
      var randomNumber = Math.floor(Math.random() * 10);

      var retweetId = data.statuses[randomNumber].id_str;

      // Tell TWITTER to retweet
      client.post(
        "statuses/retweet/:id",
        {
          id: retweetId,
        },
        function (err, response) {
          if (response) {
            console.log("Retweeted!!!");
          }
          // if there was an error while tweeting
          if (err) {
            console.log(
              "Something went wrong while RETWEETING... Duplication maybe..."
            );
          }
        }
      );
    }
    // if unable to Search a tweet
    else {
      console.log("Something went wrong while SEARCHING...");
    }
  });
};
setInterval(retweetTweet, 1720000);

//REPLY BOT

const getBenderReply = async (username) => {
  const response = await axios
    .get("https://api.jsonbin.io/b/6250a30cd20ace068f959fd7/8")
    .then((response) => {
      //console.log(response.data);
      const data = response.data ? response.data : {};
      if (data.risposte && data.risposte.length) {
        let randomNumber = getRandomInt(data.risposte.length);

        tweet =
          data.risposte[randomNumber].saluto +
          username +
          data.risposte[randomNumber].frase +
          " #bender";
      } else {
        tweet = "Nothing happened today :)";
      }
    })
    .catch((err) => {
      console.error(err);
    });
  return tweet;
  console.log(response.data);
};

const quoteLimitReplyChecked = async (username) => {
  const benderReplytweet = await getBenderReply(username);
  if (benderReplytweet.length < 270) {
    return benderReplytweet;
  } else {
    return quoteLimitReplyChecked(username);
  }
};

const stream = client.stream("statuses/filter", { track: "@BenderPiegare" });

stream.on("tweet", (event) => {
  console.log(event);
});

const postReply = async (event) => {
  const user = event.user.screen_name;
  const username = event.user.name;
  const tweetId = event.id_str;
  const twittext = event.text;
  const usermentions = event.entities.user_mentions;
  var listautentiMezionati = [];
  for (var i = 0; i < usermentions.length; i++) {
    listautentiMezionati.push(`@` + usermentions[i].screen_name);
  }
  listautentiMezionati.push(`@` + user);
  const userIntext = twittext.substring(twittext.lastIndexOf("@"));
  if (user !== "BenderPiegare") {
    client.post(
      "statuses/update",
      {
        //status: `@${user}   ${await quoteLimitReplyChecked(username)}`,
        status: `${listautentiMezionati}   ${await quoteLimitReplyChecked(
          username
        )}`,
        in_reply_to_status_id: tweetId,
      },
      function (err, data, response) {
        console.log(`Sent tweet to ${event.user.screen_name}: ${data.text}`);
      }
    );
  }
};

stream.on("tweet", postReply);
