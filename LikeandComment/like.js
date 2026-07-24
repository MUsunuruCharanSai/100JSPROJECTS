let likes = 0;
let click = false;
function Likes() {
  if (!click) {
    likes++;
    click = true;
  } else {
    likes--;
    click = false;
  }
  document.getElementById("likes").innerHTML = `${likes} Likes`;
}
function Comment() {
  let comment = document.getElementById("comment");
  let parent = document.getElementById("comment-list");
  let newEle = document.createElement("li");
  newEle.innerHTML = `${comment.value}`;
  parent.appendChild(newEle);
  comment.value = "";
}
