# Overview
- An automated twitter bot to assist in telling Donald Trump to go fuck himself so you don't have to. Easy to setup and free!
- Replies to every bullshit, inane, tweet that orange asshole posts with "fuck you @realdonaldtrump" one time, checking for new every 120 seconds after it starts running.


# Setup
You need a few things to get started
## Twitter API keys
- Open [https://developer.twitter.com/en/apps] and click 'Create an app'
- Fill out all of the info
- Once it's created  make note of the keys and tokens or go back to [https://developer.twitter.com/en/apps] and click 'Details' on the app you created
- Click the 'Keys and tokens' tab

## Heroku
- Go to https://heroku.com and sign up
- Follow this guide to install https://devcenter.heroku.com/articles/heroku-cli
- Clone this repository
- `cd` to this repository
- Run `heroku login`
- Run `heroku create`
- Run `heroku config:set CONSUMER_KEY=replace_me_with_your_twitter_consumer_key`
- Run `heroku config:set CONSUMER_SECRET=replace_me_with_your_twitter_consumer_secret`
- Run `heroku config:set TOKEN_KEY=replace_me_with_your_twitter_token_key`
- Run `heroku config:set TOKEN_SECRET=replace_me_with_your_twitter_token_secret`
- Run `git push heroku master`
- Run `heroku ps:scale web=1`
- Run `heroku logs --tail` and check the dashboard [https://dashboard.heroku.com/] to make sure it worked correctly.

