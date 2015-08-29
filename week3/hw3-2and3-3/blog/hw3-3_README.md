<h2>HOMEWORK: HOMEWORK 3.3 (MONGOPROC VERSION)</h2>

<h3>QUESTION: </h3>

If you have any difficulty using MongoProc, here are 2 video lectures showing how to set it up.

Download MongoProc

<b>Making your blog accept comments<b> <br>
In this homework you will add code to your blog so that it accepts comments. Download and unpack the files for this homework from the Download Handout link. You will be using the same code as you downloaded for homework 3.2, along with the changes you made.

We have removed parts of the code that uses the Node.js driver to query MongoDB from posts.js and marked the area where you need to work for HW 3.3 with "hw3.3 TODO".

In a terminal:

Linux/Mac: <br>
<code>
cd blog/
grep -rn "hw3.3 TODO" *
</code>

Windows: <br>
<code>
cd blog/
find /n "hw3.3 TODO" *
</code>

You should not need to touch any other code. The database call that you are going to add will add a new comment to a given post.

This assignment has fairly little code, but it's a little more subtle than the previous assignment because you are going to be manipulating an array within the Mongo document. For the sake of clarity, here is a document out of the posts collection from a working project that also has comments.

```JSON
{
"_id" : ObjectId("513d396da0ee6e58987bae74"),
"author" : "andrew",
"body" : "Representatives from the planet Mars announced today that the planet would adopt MongoDB as a planetary standard. Head Martian Flipblip said that MongoDB was the perfect tool to store the diversity of life that exists on Mars.",
"comments" : [
{
"author" : "Larry Ellison",
"body" : "While I am deeply disappointed that Mars won't be standardizing on a relational database, I understand their desire to adopt a more modern technology for the red planet.",
"email" : "larry@oracle.com"
},
{
"author" : "Salvatore Sanfilippo",
"body" : "This make no sense to me. Redis would have worked fine."
}
],
"date" : ISODate("2013-03-11T01:54:53.692Z"),
"permalink" : "martians_to_use_mongodb",
"tags" : [
"martians",
"seti",
"nosql",
"worlddomination"
],
"title" : "Martians to use MongoDB"
}
```

As a reminder, to run your blog, go into the blog directory and type:
<code>
npm install
node app.js
</code>

Note that you add comments in this blog from the blog post detail page, which appears at

http://localhost:8082/post/post_slug<br>
where post_slug is the permalink. For the sake of eliminating doubt, the permalink for the example blog post above is<br>
http://localhost:8082/post/martians_to_use_mongodb<br>
Ok, now it’s time to validate you got it all working.

From the top of this page, there was one additional program that should have been downloaded: mongoProc.

With it, you can test your code and look at the Feedback section. When it says "user creation successful" and "user login successful", you can Turn in your assignment.

You will see a message below about your number of submissions, but you must submit this assignment using MongoProc.
