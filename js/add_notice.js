let title = document.querySelector(".title");
let body = document.querySelector(".body");
let submit = document.querySelector(".submit-button");
let output = document.querySelector(".output");

submit.addEventListener("click", addNewNotice);

function addNoticeToLocalStorage(title, body) {
  console.log("got", title, body);
  let data = localStorage.getItem("notices");
  let notices = JSON.parse(data);
  notices.push({
    id: notices.length + 1,
    title,
    body,
  });

  localStorage.setItem("notices", JSON.stringify(notices));
}

function addNewNotice(e) {
  e.preventDefault();
  const notice_title = title.value;
  const notice_body = body.value;
  if (!notice_body || !notice_title) {
    output.innerHTML = "<p>Notice Must have a title and body!</p>";
    return;
  }
  addNoticeToLocalStorage(notice_title, notice_body);
  output.innerHTML = "<p>Notice Added!</p>";
}
