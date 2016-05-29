# nerdy-girls-twitterbot

* GitHub stores code, and it can be used for static websites.
* Heroku supports executable code. https://www.heroku.com/
* Twit is a wrapper around Twitter's API. https://github.com/ttezel/twit We might just use the Twitter API.
* Codecademy has a great scratchpad for Javascript code: http://labs.codecademy.com/#:workspace
* Sourcetree is an alternative to using the command line with Git: https://www.sourcetreeapp.com/
* Promises ensure that code is executed in a certain order.
* Meetup has an API that we could use to post events: http://www.meetup.com/meetup_api/
* An API allows you to access a third-party system: https://en.wikipedia.org/wiki/Application_programming_interface

Git Courses:
* Code School (only the first one is free): https://www.codeschool.com/courses/try-git 
* Codecademy: https://www.codecademy.com/learn/learn-git
* Lynda (You can access these for free if you have a Metropolitan Library System card): http://www.metrolibrary.org/research?search-databases=lynda.com
* Pluralsight: https://www.pluralsight.com/

Reference Project:
* http://carmalou.com/projects/2016/03/27/twitter-bot.html
* https://github.com/carmalou/80s-movie-twitterbot
* https://twitter.com/80s_movie_bot

Steps we (mostly Carmen) took on 5/29/2016:
* Created the Twitter account: https://twitter.com/nerdyladyquotes
* Set up an application at https://apps.twitter.com/
  * Gave permission to 'Read, Write, and Access direct messages'
  * Clicked 'Generate API Keys' on the 'API Keys' tab.
* Cloned the repository locally.
* Created a gitignore file https://git-scm.com/docs/gitignore
* Created index.js and wrote a function to post a test tweet to Twitter.
* Created config.js to store Twitter secret keys.
  * Copied Application Settings and Access Token from Twitter into config.js
* Called function to post test tweet.

Steps to take:
* Set up environment variables.
* Find some quotes to tweet.
* Store the quotes in array.
* Write a function to get a random quote from the array.
* Write a function to post the quote to Twitter.
