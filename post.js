const loadPost = () => {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data);
      displayPost(data);
    });
};
const displayPost = (posts) => {
  // get container
  const postContainer = document.getElementById('post-container');
  //   console.log(postContainer);
  //   for (let post of posts) {
  //     console.log(post);
  //   }
  //   for (let i = 0; i < posts.length; i++) {
  //     console.log(posts[i]);
  //   }
  posts.forEach((post) => {
    // console.log(post.id);
    // 2 creat html element
    const li = document.createElement('li');
    li.innerText = post.title;
    console.log(li);
    // 3 add to container
    postContainer.appendChild(li);
  });
};
