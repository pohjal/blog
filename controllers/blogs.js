const blogRouter = require("express").Router();
const Blog = require("../models/blog");
console.log("Blog router loaded"); // This confirms the file is loaded and executed

blogRouter.get("/", (request, response) => {
  console.log("GET request to /api/blogs");
  Blog.find({}).then((blogs) => {
    response.json(blogs);
  });
});

blogRouter.post("/", (request, response) => {
  console.log("POST request to /api/blogs");
  const blog = new Blog(request.body);

  blog.save().then((result) => {
    response.status(201).json(result);
  });
});

module.exports = blogRouter;
