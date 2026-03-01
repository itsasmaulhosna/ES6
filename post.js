const loadPost = () => {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data);
      displayPost(data);
    });
};
// {
//     "userId": 10,
//     "id": 99,
//     "title": "temporibus sit alias delectus eligendi possimus magni",
//     "body": "quo deleniti praesentium dicta non quod\naut est molestias\nmolestias et officia quis nihil\nitaque dolorem quia"
// }
const displayPost = (posts) => {
  // get container
  const postContainer = document.getElementById('post-container');
  postContainer.innerHTML = '';
  posts.forEach((post) => {
    // creat div
    const postCard = document.createElement('div');
    postCard.innerHTML = `
    <div class="post-card">
        <h2>${post.title}</h2>
        <p>
          ${post.body}
        </p>
      </div>
    
    `;
    // add to container
    postContainer.appendChild(postCard);
  });
};
// const displayPost = (posts) => {
//   // get container
//   const postContainer = document.getElementById('post-container');
//   postContainer.innerHTML = '';
//   //   console.log(postContainer);
//   //   for (let post of posts) {
//   //     console.log(post);
//   //   }
//   //   for (let i = 0; i < posts.length; i++) {
//   //     console.log(posts[i]);
//   //   }
//   posts.forEach((post) => {
//     // console.log(post.id);
//     // 2 creat html element
//     const li = document.createElement('li');
//     li.innerText = post.title;
//     console.log(li);
//     // 3 add to container
//     postContainer.appendChild(li);
//   });
// };
