async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const post_details = document.querySelector('input[name="post-url"]').value;
  const user_id = document.querySelector('#user_id').value;
  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      post_details,
      user_id

    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/createPost');
  } else {
    alert(response.statusText);
  }
}



async function addCommentBtn(event) {
  event.preventDefault();
  const post_id = document.querySelector('#post_id').value;
  document.location.replace(`/post/${post_id}`);
};
async function editPosttBtn(event) {
  event.preventDefault();
  const post_id = document.querySelector('#post_id').value;
  document.location.replace(`/editPost/${post_id}`);
};


document.querySelector('#addCommentBtn').addEventListener('click', addCommentBtn)
document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
document.querySelector('#editPostBtn').addEventListener('click', editPosttBtn)