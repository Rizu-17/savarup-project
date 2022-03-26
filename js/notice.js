let notices = document.querySelector(".notices");
let output = document.querySelector(".output");

function getNotices() {
  const data = localStorage.getItem("notices");
  const notices = JSON.parse(data);
  return notices;
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
