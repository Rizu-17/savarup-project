let submit = document.querySelector(".submit-button");
let name = document.querySelector(".name");
let password = document.querySelector(".password");
let output = document.querySelector(".output");

submit.addEventListener("click", handleLogin);

async function handleLogin(e) {
  e.preventDefault();

  try {
    const res = await axios.post("http://localhost:3000/api/admin/login", {
      name: name.value,
      password: password.value,
    });
    if (res.status === 200) {
      window.location.replace("./adminHome.html");
    }
  } catch (err) {
    output.innerHTML = "<p>Login Failed</p>";
  }
}
