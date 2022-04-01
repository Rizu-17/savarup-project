const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

let doc_title = document.querySelector(".title");
let doc_body = document.querySelector(".body");
let submit = document.querySelector(".submit-button");
let output = document.querySelector(".output");
let delete_b = document.querySelector(".delete-button");

let title = params.title;
let body = params.body;
let id = params.id;

doc_title.value = title;
doc_body.value = body;

submit.addEventListener("click", updateNotice);
delete_b.addEventListener("click", deleteNotice);

async function updateNotice(event) {
  event.preventDefault();
  try {
    const res = await axios.patch(`http://localhost:3000/api/notice/${id}`, {
      title: doc_title.value,
      body: doc_body.value,
    });
    if (res.status === 200) {
      output.innerHTML = "<p>Notice Updated!</p>";
    }
  } catch (err) {
    output.innerHTML = "<p>Notice Updating Failed!</p>";
    console.log(err);
  }
}

async function deleteNotice(event) {
  event.preventDefault();
  try {
    const res = await axios.delete(`http://localhost:3000/api/notice/${id}`);

    if (res.status === 204) {
      output.innerHTML = "<p>Notice Deleted!</p>";
    }
  } catch (err) {
    output.innerHTML = "<p>Notice Updating Failed!</p>";
    console.log(err);
  }
}
