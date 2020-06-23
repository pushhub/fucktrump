const express        = require('express');
const app            = express();
var Twitter          = require('twitter');
var follow_id        = undefined;
var last_update_date = new Date();

var client = new Twitter({
    consumer_key:        process.env.CONSUMER_KEY,
    consumer_secret:     process.env.CONSUMER_SECRET,
    access_token_key:    process.env.TOKEN_KEY,
    access_token_secret: process.env.TOKEN_SECRET
});

var params = {
    screen_name:         "realdonaldtrump"
};


setInterval(function() {
    client = new Twitter({
        consumer_key:        process.env.CONSUMER_KEY,
        consumer_secret:     process.env.CONSUMER_SECRET,
        access_token_key:    process.env.TOKEN_KEY,
        access_token_secret: process.env.TOKEN_SECRET
    });
    
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (error)
            throw error;

        if(tweets == undefined || tweets[0] == undefined) {
            console.log("bug, post info about this to https://github.com/0x00002152/fucktrump/issues/1");
            console.log(response);
            return;
        }

        created_at = new Date(Date.parse(tweets[0].created_at.replace(/( \+)/, ' UTC$1')));

        if(created_at.getTime() > last_update_date.getTime())
        {
            last_update_date = created_at;

            var resp_params = {
                status: "fuck you @" + params.screen_name,
                in_reply_to_status_id: tweets[0].id_str
            };

            client.post('statuses/update', resp_params,  function(error, response_tweet, server_response) {
                if(error) throw error;
                console.log(response_tweet);
            });

        }
    });
}, 120000);

// standard 204 responder for heroku, keeps the process running. Must setup an HTTP health check, see README.md for details.

app.get('/', function (req, res) {
    res.set('Content-Type', 'application/x-empty').status(204).send();

});

app.listen(process.env.PORT || 5000);
