//initial commentlet arrayOfPosts;
let arrayOfPosts;

// this function waits for the web page to be loaded, when it does it will run the code inside of it which happen to be getPosts()
window.onload = function() {
  getPosts()

}

// this function is going to make a fetch request to the url inside it's parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as posts and saved into the variable, arrayOfPosts
const getPosts = () => {
  fetch('https://randomuser.me/api/?results=100')
    .then(res => res.json())
    .then(posts => arrayOfPosts = posts)
}

// this function logs the results in your browsers console
const consolePosts = () => {
  console.log(arrayOfPosts)
}

// this function creates elements inside the all-posts ul, then appends text inside it with the posts that were returned in the request.
const displayPost = () => {
  const allPosts = document.getElementById('all-posts')
  arrayOfPosts.results.map((post) => {
    const li = document.createElement('li')
    const photo = document.createElement('img')
    const text = document.createTextNode(`${post.name.first} ${post.name.last}`)
    const details = document.createElement('p')
    const detailsButton = document.createElement('button')
    const postId = post.login.username;

    detailsButton.setAttribute('onclick', "addDetails(" + postId +")")
    detailsButton.innerHTML = 'See details'
    details.innerHTML = `Email: ${post.email} DOB: ${post.dob.date}`
    photo.setAttribute('src', post.picture.medium)
    details.setAttribute('id', postId)
    // li.setAttribute('id', postId)
    li.appendChild(photo)
    li.appendChild(text)
    li.appendChild(details)
    li.appendChild(detailsButton)
    allPosts.append(li)
    document.getElementById(postId).style.display = 'none';

  })
}

const addDetails = (postId) => {
  document.getElementById(postId.id).style.display = "block"
}

