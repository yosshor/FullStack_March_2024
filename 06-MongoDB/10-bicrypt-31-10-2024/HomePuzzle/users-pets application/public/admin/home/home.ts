async function getUsers(): Promise<void> {
  try {
    const request = await fetch("/api/admin/getAllUsers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await request.json();
    if (response.users) {
      console.log(response.users);
      displayUsers(response.users);
    } else {
      alert(response.error);
    }
  } catch (error) {
    console.error(error);
  }
}

function displayUsers(users: any[]): void {
  const table = document.getElementById("usersTable") as HTMLTableElement;
  if (!table) {
    console.error("Element not found");
    return;
  }
  let html = `<div style='display:flex;display-flex:row;justify-content:space-around;' class="table-head"><div class="table-cell">Name</div>
    <div class="table-cell">Email</div><div class="table-cell">Role</div></div>`;
  users.forEach((user) => {
    html += `<div  style='display:flex;display-flex:row;justify-content:space-around;' class="table-row"><div class="table-cell
        ">${user.name}</div><div class="table-cell">${user.email}</div>
        <div class="table-cell">${
          user.isAdmin === true ? "Admin" : "User"
        }</div></div>`;
  });
  table.innerHTML = html;
}

function helloAdmin() {
  console.log("Hello Admin");
  const div = document.getElementById("userName") as HTMLDivElement;
  if (!div) {
    console.error("Element not found");
    return;
  }
  //read the user name from the cookie and display it
  const userDetails = getCookie("userId");
  console.log(document.cookie);
  div.innerHTML = "Hello Admin";
}
// the cookie or `null`, if the key is not found.
function getCookie(name: string): string | null {
  const nameLenPlus = name.length + 1;
  return (
    document.cookie
      .split(";")
      .map((c) => c.trim())
      .filter((cookie) => {
        return cookie.substring(0, nameLenPlus) === `${name}=`;
      })
      .map((cookie) => {
        return decodeURIComponent(cookie.substring(nameLenPlus));
      })[0] || null
  );
}

async function logout() {
  const req = await fetch("/api/admin/logout", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const response = await req.json();
  if (response.message) {
    console.log(response.message);
    window.location.href = './../loginAdmin/loginAdmin.html';
  } else {
    alert(response.error);
  }
}
