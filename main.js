// binding to hold requested posts
let arrayOfPosts;

// loads posts into the arrayOfPosts array upon window load
window.onload = function() {
  getPosts()

}

// binding to request posts through the API
const getPosts = () => {
  fetch('https://randomuser.me/api/?results=100')
    .then(res => res.json())
    .then(posts => arrayOfPosts = posts)
}

// logs the arrayOfPosts array in the browsers console
const consolePosts = () => {
  console.log(arrayOfPosts)
}

// this function creates DOM elements and adds the correct properties/text so they can be viewed.
const displayPost = () => {
  const allPosts = document.getElementById('all-posts')
  arrayOfPosts.results.map((post) => {
    const li = document.createElement('li')
    const photo = document.createElement('img')
    const postId = post.login.username;
    const text = document.createTextNode(`${post.name.first} ${post.name.last}`)

    // these bindings will be called when the See Details button is clicked, displaying more granular details for each post
    const details = document.createElement('p')
    const detailsButton = document.createElement('button')
    detailsButton.setAttribute('onclick', "addDetails(" + postId +")")
    detailsButton.innerHTML = 'See details'
    details.innerHTML = `Email: ${post.login.username} <br> ${post.email} <br> Username DOB: ${post.dob.date}`
    details.setAttribute('id', postId)

    // these lines will add all of the elements to the DOM. Details will be hidden initially
    photo.setAttribute('src', post.picture.medium)
    li.appendChild(photo)
    li.appendChild(text)
    li.appendChild(details)
    li.appendChild(detailsButton)
    allPosts.append(li)
    document.getElementById(postId).style.display = 'none';
  })
}

// this function will display the details that were hidden when the post element was created
const addDetails = (postId) => {
  document.getElementById(postId.id).style.display = "block"
}

