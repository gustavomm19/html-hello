const multiPosts = document.getElementById('multi-posts');
const singlePosts = document.getElementById('single-posts');

const multiBtn = document.getElementById('btnradio1');
const singleBtn = document.getElementById('btnradio2');

const showMultiPosts = () => {
  multiPosts.classList.remove('hide');
  singlePosts.classList.add('hide');
}

const showSinglePosts = () => {
  singlePosts.classList.remove('hide');
  multiPosts.classList.add('hide');
}

multiBtn.addEventListener('click', showMultiPosts);
singleBtn.addEventListener('click', showSinglePosts);