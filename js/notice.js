let notices = document.querySelector(".notices");
let output = document.querySelector(".output");

async function getNotices() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
}

function getOutputHTML(data) {
  let outputHTML = "";
  let trimmedData = data.slice(0, 5);
  for (let post in trimmedData) {
    outputHTML += `<p>
        <b>${data[post].title}</b>:<br /> ${data[post].body}
      </p>`;
  }
  return outputHTML;
}

async function renderNotices() {
  const data = await getNotices();
  const outputHTML = getOutputHTML(data);
  test();
  output.innerHTML = outputHTML;
}

renderNotices();

function test() {
  console.log("here");
  localStorage.setItem("file", true);
}
