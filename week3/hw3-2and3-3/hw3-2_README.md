<h2>HOMEWORK: HOMEWORK 3.2</h2>

<h3>QUESTION: </h3>

If you have any difficulty using MongoProc, here are 2 video lectures showing how to set it up.

Download MongoProc

<b>Making your blog accept posts</b><br>
In this homework you will be enhancing the blog project to insert entries into the posts collection. After this, the blog will have the basic functionality. It will allow you to add blog posts with a title, body and tags and have it be added to the posts collection properly.

We have provided the code that creates users and allows you to login (the assignment from last week). Download and unpack the files for this homework from the Download Handout link.

We have removed parts of the code that uses the Node.js driver to query MongoDB from posts.js and marked the area where you need to work for hw3.2 with "hw3.2 TODO".

In a terminal:

Linux/Mac:<br>
<code>
cd blog/
grep -rn "hw3.2 TODO" *
</code>

Windows: <br>
<code>
cd blog/
find /n "hw3.2 TODO" *
</code>
You should not need to touch any other code. The database call that you are going to add will insert a new post into the posts collection. Here is an example of valid blog post:
```mongodb
> db.posts.find().pretty()
```

```JSON
{
"_id" : ObjectId("513d396da0ee6e58987bae74"),
"title" : "Martians to use MongoDB",
"author" : "andrew",
"body" : "Representatives from the planet Mars announced today that the planet would adopt MongoDB as a planetary standard. Head Martian Flipblip said that MongoDB was the perfect tool to store the diversity of life that exists on Mars.",
"permalink" : "martians_to_use_mongodb",
"tags" : [
"martians",
"seti",
"nosql",
"worlddomination"
],
"comments" : [ ],
"date" : ISODate("2013-03-11T01:54:53.692Z")
}
```

As a reminder, to run your blog, go into the blog directory and type:
npm install
node app.js
To play with the blog you can navigate to the following URLs: <br>

http://localhost:8082/  <br>
http://localhost:8082/signup <br>
http://localhost:8082/login <br>
http://localhost:8082/newpost <br>


Ok, now it’s time to validate you got it all working.

From the top of this page, there was one additional program that should have been downloaded: mongoProc.

With it, you can test your code and look at the Feedback section. When it says "user creation successful" and "user login successful", you can Turn in your assignment.

You will see a message below about your number of submissions, but you must submit this assignment using MongoProc.
