async function handleRegister(e) {
  try {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    const response = await fetch("/api/admin/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const jsonResponse = await response.json();
    console.log(jsonResponse);
    if (jsonResponse.ok) {
      window.location.href = "./../loginAdmin/loginAdmin.html";
    } else {
      alert(jsonResponse.error);
    }
  } catch (error) {
    console.error(error);
  }
}
