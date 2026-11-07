type Data = {
  posts: {
    id: number,
    title: string,
    author:string,
  }[]
}


const data = JSON.parse(`{
  "posts": [
    {
      "id": 1,
      "title": "Learn JSON",
      "author": "John"
    },
    {
      "id": 2,
      "title": "Learn JavaScript",
      "author": "Jane"
    }
  ]
}`) as Data

console.log(data.posts[0]?.author);
