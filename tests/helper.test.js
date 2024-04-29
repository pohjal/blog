const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')

const empty = []
    const errorProne = [  {
        _id: "5a422a851b54a676234d17f7",
        title: "React patterns",
        author: "Michael Chan",
        url: "https://reactpatterns.com/",
        __v: 0
      }, 
       {
        _id: "5a422a851b54a676234d17f7",
        title: "React patterns",
        author: "Michael Chan",
        url: "https://reactpatterns.com/",
        __v: 0
      },]



    const blogs = [
        {
          _id: "5a422a851b54a676234d17f7",
          title: "React patterns",
          author: "Michael Chan",
          url: "https://reactpatterns.com/",
          likes: 7,
          __v: 0
        },
        {
          _id: "5a422aa71b54a676234d17f8",
          title: "Go To Statement Considered Harmful",
          author: "Edsger W. Dijkstra",
          url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
          likes: 5,
          __v: 0
        },
        {
          _id: "5a422b3a1b54a676234d17f9",
          title: "Canonical string reduction",
          author: "Edsger W. Dijkstra",
          url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
          likes: 12,
          __v: 0
        },
        {
          _id: "5a422b891b54a676234d17fa",
          title: "First class tests",
          author: "Robert C. Martin",
          url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
          likes: 10,
          __v: 0
        },
        {
          _id: "5a422ba71b54a676234d17fb",
          title: "TDD harms architecture",
          author: "Robert C. Martin",
          url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
          likes: 0,
          __v: 0
        },
        {
          _id: "5a422bc61b54a676234d17fc",
          title: "Type wars",
          author: "Robert C. Martin",
          url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
          likes: 2,
          __v: 0
        }  
      ]

test('dummy returns one', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  assert.strictEqual(result, 1)
})

describe('MostBlogs', () => {
    test('author with the most blogs written', () => {
        const result = listHelper.mostBlogs(blogs)
        assert.deepStrictEqual(result,{
            author: "Robert C. Martin",
            blogsWritten: 3
        })
      })
    

    
})

describe('author with the most liked blogs', () => {
  test('most likes on all blogs', () => {
      const result = listHelper.authorWithMostLikedBlog(blogs)
      assert.deepStrictEqual(result,{
        author: "Edsger W. Dijkstra",
        likes: 17
      })
    })
  

  
})

describe('Favourite blog', () => {

    const mostLikes = {
        _id: "5a422b3a1b54a676234d17f9",
        title: "Canonical string reduction",
        author: "Edsger W. Dijkstra",
        url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
        likes: 12,
        __v: 0
          }

    test('Favourite blog when array is empty', () => {
        const result = listHelper.mostLikes(empty)
        assert.strictEqual(result, null)
      })

      test('Favourite blog full array', () => {

        const expected = { 
            title: "Canonical string reduction",
            author: "Edsger W. Dijkstra",
            likes: 12
        };
        const result = listHelper.mostLikes(blogs)
        assert.deepStrictEqual(result, expected)
  
})
})

describe('total likes', () => {
    const listWithOneBlog = [
      {
        _id: '5a422aa71b54a676234d17f8',
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 5,
        __v: 0
      }
    ]
  
    test('when list has only one blog equals the likes of that', () => {
      const result = listHelper.totalLikes(listWithOneBlog)
      assert.strictEqual(result, 5)
    })

    test('multiple blogs', () => {
        const result = listHelper.totalLikes(blogs)
        assert.strictEqual(result, 36)
    })

    test('empty', () => {
        const result = listHelper.totalLikes(empty)
        assert.strictEqual(result, 0)
    })
    test('no likes in array', () => {
        const result = listHelper.totalLikes(errorProne)
        assert.strictEqual(result, 0)
    })
  })