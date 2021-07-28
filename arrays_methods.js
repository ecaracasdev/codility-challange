const posts = [
  {
    id: 1,
    title: 'title1',
    image: 'image1',
    tags: ['javascript', 'webdevelopment']
  },
  {
    id: 2,
    title: 'title2',
    image: 'image2',
    tags: ['javascript', 'webdevelopment', 'react']
  },
  {
    id: 3,
    title: 'title3',
    image: 'image3',
    tags: ['javascript', 'webdevelopment', 'angular']
  }
]

const postFind = posts.find( post => post.title === 'title1')
const postSome = posts.some( post => post.id === 1)
const postSomeIncludes = posts.some( post => post.tags.includes('react'))
const postEvery = posts.every( post => post.tags.includes('javascript'))

console.log(postFind)
console.log(postSome)
console.log(postSomeIncludes)
console.log(postEvery)

const postTitles = posts.map(post => post.title)

console.log(postTitles)

const postFiltered = posts.filter(post => post.tags.includes('react'))

console.log(postFiltered)

const postReduced = posts.reduce((allTags, post) => {
  return [
    ...allTags,
    ...post.tags
  ]
}, [])

console.log(postReduced)

const postReducedNoDuplicated = posts.reduce((allTags, post) => {
  return Array.from(new Set([
    ...allTags,
    ...post.tags
  ]))
}, [])

console.log(postReducedNoDuplicated)