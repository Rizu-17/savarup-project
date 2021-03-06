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
        <b>${data[post].title}</b>:<br /> ${data[post].body}
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
