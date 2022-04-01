let title = document.querySelector(".title");
let body = document.querySelector(".body");
let submit = document.querySelector(".submit-button");
let output = document.querySelector(".output");

submit.addEventListener("click", addNewNotice);

function addNoticeToLocalStorage(title, body) {
  let data = localStorage.getItem("notices");
  let notices = JSON.parse(data);
  notices.push({
    id: notices.length + 1,
    title,
    body,
  });

  localStorage.setItem("notices", JSON.stringify(notices));
}

async function addNewNotice(e) {
  e.preventDefault();
  const notice_title = title.value;
  const notice_body = body.value;
  if (!notice_body || !notice_title) {
    output.innerHTML = "<p>Notice Must have a title and body!</p>";
    return;
  }

  try {
    const res = await axios.post("http://localhost:3000/api/notice", {
      title: notice_title,
      body: notice_body,
    });
    if (res.status === 201) {
      output.innerHTML = "<p>Notice Added!</p>";
    }
  } catch (err) {
    output.innerHTML = "<p>Notice Adding Failed!</p>";
  }
}
