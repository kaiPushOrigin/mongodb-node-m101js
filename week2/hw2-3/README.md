If you have any difficulty using MongoProc, here are <a href="https://www.youtube.com/playlist?list=PL4RCxklHWZ9vb8rR55iKEffkY-5GhCGvC" target="_blank"> 2 video lectures </a>showing how to set it up.

<a href="https://university.mongodb.com/mongoproc?_ga=1.186297961.1763948397.1439684476" target="_blank"> Download MongoProc</a>

Blog User Sign-up and Login

Download hw2-3.zip from the Download Handout link and uncompress it.

You should see four files in the 'blog' directory: app.js, users.js, posts.js and sessions.js. There is also a 'views' directory which contains the templates for the project and a 'routes' directory which contains our express routes.

If everything is working properly, you should be able to start the blog by typing
```node.js
npm install
node app.js
```

Note that this requires Node.js to be correctly installed on your computer.
After you run the blog, you should see the message:
<code>
Express server listening on port 8082
</code>

If you goto http://localhost:8082 you should see the front page of the blog. Here are some URLs that must work when you are done.

<code>
http://localhost:8082/signup
http://localhost:8082/login
http://localhost:8082/logout
</code>

When you login or sign-up, the blog will redirect to http://localhost:8082/welcome and that must work properly, welcoming the user by username.

We have removed parts of the code that uses the Node.js driver to query MongoDB from users.js and marked the area where you need to work with "TODO: hw2.3". You should not need to touch any other code. The database calls that you are going to add will add a new user upon sign-up and validate a login by retrieving the right user document.

The blog stores its data in the blog database in two collections, users and sessions. Here are two example docs for a username ‘sverch’ with password ‘salty’. You can insert these if you like, but you don’t need to.
```mongodb
> use blog
switched to db blog
> db.users.find()
```

```JSON
{ "_id" : "sverch", "password" : "$2a$10$wl4bNB/5CqwWx4bB66PoQ.lmYvxUHigM1ehljyWQBupen3uCcldoW" }
> db.sessions.find()
{ "username" : "sverch", "_id" : "8d25917b27e4dc170d32491c6247aabba7598533" }
>
```

Once you have the the project working, the following steps should work:
go to http://localhost:8082/signup
create a user

It should redirect you to the welcome page and say: welcome username, where username is the user you signed up with. Now:
    Goto http://localhost:8082/logout
    Now login http://localhost:8082/login

Ok, now it’s time to validate you got it all working.

From the top of this page, there was one additional program that should have been downloaded: mongoProc.

With it, you can test your code and look at the Feedback section. When it says "user creation successful" and "user login successful", you can Turn in your assignment.

You will see a message below about your number of submissions, but you must submit this assignment using MongoProc.
