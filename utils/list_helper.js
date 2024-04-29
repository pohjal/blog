const dummy = (blogs) => {
    return 1
  }
  
const totalLikes = (blogs) => {
    if(blogs.length === 0) return 0;
    const allLikes = blogs.reduce((sum, blog) => {
        if (blog.hasOwnProperty('likes')) {
    return sum + blog.likes
        }
        else{
            return sum
        }
    }, 0)
return allLikes
}

const mostLikes = (blogs) => {
    if(blogs.length === 0) return null;
    const mostLiked = blogs.reduce((mostLikedBlog, comparisonBlog) =>{
        if(mostLikedBlog.likes < comparisonBlog.likes){
            return comparisonBlog
        }else{
            return mostLikedBlog;
        }
    }, blogs[0])

   return {
        title: mostLiked.title,
        author: mostLiked.author,
        likes: mostLiked.likes
   }
   
}
const mostBlogs = (blogs) => {
    if (blogs.length === 0) return null;

    const authors = []
    blogs.forEach(blog => {
        const onko = authors.find((author => author.author === blog.author))
        if(onko){
            onko.blogsWritten += 1
        }else{
            authors.push({author: blog.author, blogsWritten: 1})
        }
        
    });

    var mostBlogsWritten = authors[0];

    authors.forEach(author => {
        if(mostBlogsWritten.blogsWritten < author.blogsWritten){
            mostBlogsWritten = author
        }
    });
    return mostBlogsWritten
};

const authorWithMostLikedBlog = (blogs) => {
    const authors = []
    blogs.forEach(blog => {
        const onko = authors.find((author => author.author === blog.author))
        if(onko){
            onko.blogLikes += blog.likes
        }else{
            authors.push({author: blog.author, blogLikes: blog.likes})
        }
        
    });
    var mostBlogsWritten = authors[0];
    authors.forEach(author => {
        if(mostBlogsWritten.blogLikes < author.blogLikes){
            mostBlogsWritten = author
        }
    });
    return {
        author: mostBlogsWritten.author,
        likes: mostBlogsWritten.blogLikes
        }
}


  module.exports = {
    dummy,
    totalLikes,
    mostLikes,
    mostBlogs,
    authorWithMostLikedBlog,
  }


