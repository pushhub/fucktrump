# Overview
- An automated twitter bot to assist in telling Donald Trump to go fuck himself so that you don't have to. Easy to setup and free!
- Replies to every bullshit, inane, tweet that orange asshole posts with "fuck you @realdonaldtrump" one time as a reply to the latest new message after it starts running. 
- Easy to setup, just create Twitter API keys, and deploy to Heroku using the 1 click button below, then just setup an HTTP status checker (keeps it running 24/7 on Heroku, several free checkers described below.)
- You'll never have to do this again, with this bot it's all handled for you:

![alt text](https://github.com/0x00002152/fucktrump/blob/master/example.png?raw=true)


# Setup
You need a few things to get started, everything you need to make this work is free and relatively easy to setup even if you're not a programmer.
## Twitter API keys
- Open https://developer.twitter.com/en/apps and under the drop down in the torp right hand corner click Apps. When the page loads, click 'Create an app.'
- Fill out all of the info, For the terms of service or website URL you can just put anything. For app usage specify that it's a bot to tell Donald Trump to go sodomize himself. Totally legit. 
- Once it's created  make note of the keys and tokens or go back to https://developer.twitter.com/en/apps and click 'Details' on the app you created.
- Click the 'Keys and tokens' tab, generate or re-generate the keys/tokens and make note of them for the next deployment step.

## Heroku
You can deploy this on Heroku manually or using the 1-click deployment. You need to sign up for an account on Heroku, it's free, and there's no credit card requirement to sign up. After you have deployed your bot, you must setup an HTTP health checker (see UptimeRobot, StatusCake, or FreshPing below for free ones, I used all 3 but you probably only need one.) This is to ensure that Heroku doesn't suspend the process from running. Heroku suspends web applications from running until an HTTP request is made, and starts the process again. The timeout for Heroku is reset after each HTTP request. Since this is a Twitter bot, the HTTP server simply responds with a 204 (No Content) and an empty response. This is fine for most HTTP checkers but your YMMV. All of the checkers described below work fine.

- You get 550 hours of free dyno time on Heroku (22.95 days) each month, after that the bot will stop running. However, you become eligible for an addition 450 hours (a total of 1000 hours, or 41 days each month) just for *verifying* your account with a credit card: https://devcenter.heroku.com/articles/free-dyno-hours#dyno-sleeping

- Simple solution to verifying with a credit card: get a $25 prepaid Visa Vanilla gift card (these can be purchased with Ethereum): https://www.egifter.com/giftcards?search=vanilla You only need it to verify once, and you're not even charged.

### 1-click deployment 
- Click the "Deploy to Heroku' button to deploy the bot on Heroku (you will be prompted for your Twitter API keys): [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/0x00002152/fucktrump/master)

### Manual deployment

- Go to https://heroku.com and sign up, then check your e-mail and activate it. 
- Follow this guide to install https://devcenter.heroku.com/articles/heroku-cli
- Download and install git if you don't have it: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
- Clone this repository, example: `git clone https://github.com/0x00002152/fucktrump.git`
- Change working directory to the cloned directory: `cd fucktrump`
- Run `heroku login`
- Run `heroku create`
- Run `heroku config:set CONSUMER_KEY=replace_me_with_your_twitter_consumer_key`
- Run `heroku config:set CONSUMER_SECRET=replace_me_with_your_twitter_consumer_secret`
- Run `heroku config:set TOKEN_KEY=replace_me_with_your_twitter_token_key`
- Run `heroku config:set TOKEN_SECRET=replace_me_with_your_twitter_token_secret`
- Run `git push heroku master`
- Run `heroku ps:scale web=1`
- Run `heroku logs --tail` and check the dashboard https://dashboard.heroku.com/ to make sure it worked correctly.

## UptimeRobot 
This helps keep the process running. By default Heroku stops running the process of there are no HTTP requests being made. And, uptime robot is FREE!
- Go to https://uptimerobot.com/signUp sign up for a free account. Check your e-mail and activate it.
- Go to https://uptimerobot.com/dashboard#mainDashboard and click 'Add New Monitor.'
- Under monitor type select HTTP(s)
- For friendly name just put 'fucktrump' or something.
- For URL or IP put in the address that Heroku gave you (ex: https://desolate-wave-01801.herokuapp.com) you can find it if you go to https://dashboard.heroku.com/apps/ then click on your app, and click the settings tab and scroll down to the domains section.
- Set interval for 5 minutes.
- Click 'Create Monitor.'
- Run `heroku logs --tail` to make sure the pinger is working.

## StatusCake 
Setup another pinger just in case 5 minutes interval is not enough, this one is also FREE:
- Go to https://app.statuscake.com/Try/ sign up, it should ask you for the URL put the same as specified for UptimeRobot
- Go to https://app.statuscake.com/YourStatus2.php and click the gear 'settings' button next to your domain
- Under 'Select test type' select 'HEAD'
- For 'Check rate' select 5 Min.
- Under the 'HTTP communications options' pocket, click the [x] on the 204 status to remove it from the list of statuses that will generate an alert.
- Scroll down and click 'Save Now.'
- Run `heroku logs --tail` to make sure the pinger is working.

## FreshPing 
Another free http checker, the more the marrier but I've only needed UptimeRobot so far:

- Go to https://www.freshworks.com/website-monitoring/ and fill out the form, it asks for the website up front so put in the URL of the heroku app and email address then click 'Start Monitoring.'
- Click skip on the "Setup your profile" form that it presents.
- Click on the monitor for your heroku app, and when the page loads click 'edit app.'
- Click the 1 minute check interval button then click 'Edit check' to save the form.
- Fresh pinger should now be ponging.
