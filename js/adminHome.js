let notices = document.querySelector(".notices");
let output = document.querySelector(".output");

async function getNotices() {
  const res = await axios.get("http://localhost:3000/api/notice");
  return res.data.data.data;
}

function getOutputHTML(data) {
  let outputHTML = "";
  for (let post in data) {
    outputHTML += `<p>
    Notice ID: <span class='notice-id'>${data[post]._id}</span><br/>
        <b>${data[post].title}</b>:<br /> ${data[post].body}<br/>
        <a href="./updateNotice.html?id=${data[post]._id}&title=${data[post].title}&body=${data[post].body}">
        <button class='update-notice'>Edit</button>
        </a>
      </p>`;
  }
  return outputHTML;
}

async function renderNotices() {
  const data = await getNotices();
  const outputHTML = getOutputHTML(data);
  output.innerHTML = outputHTML;
}

renderNotices();
