let posts = [];
let lastActivityTime = null;

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      resolve();
    }, 1000);
  });
}

function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      lastActivityTime = new Date();
      resolve();
    }, 1000);
  });
}

function deleteLastPost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length > 0) {
        const deletedPost = posts.pop();
        resolve(deletedPost);
      } else {
        reject("ERROR: ARRAY IS EMPTY");
      }
    }, 1000);
  });
}

function displayPostsAndLastActivityTime() {
  console.log("Posts:", posts);
  console.log("Last activity time:", lastActivityTime);
}

createPost({ title: "POST1" })
  .then(() => updateLastUserActivityTime())
  .then(() => {
    displayPostsAndLastActivityTime();
    return createPost({ title: "POST2" });
  })
  .then(() => updateLastUserActivityTime())
  .then(() => {
    displayPostsAndLastActivityTime();
    return deleteLastPost();
  })
  .then((deletedPost) => {
    console.log("Deleted post:", deletedPost);
    console.log("New posts:", posts);
  })
  .catch((error) => console.error(error));
