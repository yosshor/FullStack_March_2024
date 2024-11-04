// document.addEventListener("DOMContentLoaded", () => {
//     const registerButton = document.getElementById("register");

//     registerButton.addEventListener("click", async (event) => {
//       event.preventDefault();
//       const username = (document.getElementById("register-username") as HTMLInputElement).value;
//       const email = (document.getElementById("register-email") as HTMLInputElement).value;
//       const password = (document.getElementById("register-password") as HTMLInputElement).value;
//       const firstName = (document.getElementById("register-firstname") as HTMLInputElement).value;
//       const lastName = (document.getElementById("register-lastname") as HTMLInputElement).value;
//       const bio = (document.getElementById("register-bio") as HTMLInputElement).value;
//       const profilePicture = (document.getElementById("register-profile-picture") as HTMLInputElement).files[0];

//       const formData = new FormData();
//       formData.append("username", username);
//       formData.append("email", email);
//       formData.append("password", password);
//       formData.append("firstName", firstName);
//       formData.append("lastName", lastName);
//       if (profilePicture) {
//         formData.append("profilePicture", profilePicture);
//       }

//       const response = await fetch("/api/auth/register", {
//         method: "POST",
//         body: formData
//       });

//       if (response.ok) {
//         alert("Registration successful");
//         window.location.href = "login.html";
//       } else {
//         alert("Registration failed");
//       }
//     });
//   });

async function handleRegisterSubmit(event: any): Promise<void> {
  try {
    event.preventDefault();
    const form = event.target;
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const profilePicture = form.profilePicture.files[0];
    console.log(username, email, password, firstName, lastName, profilePicture);
    await registerUser(
      username,
      email,
      password,
      firstName,
      lastName,
      profilePicture
    );
  } catch (error) {
    console.error(error);
  }
}

async function registerUser(
  username: string,
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  profilePicture: any
): Promise<void> {
  try {
    console.log(username, email, password, firstName, lastName, profilePicture);
    const data = {
      username: username,
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      profilePicture: profilePicture ?? null,
    };
    console.log(data);

    const response:any = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("Registration successful");
      const { token } = await response.json();
      console.log(token);
      document.cookie = `auth=${token}; path=/`;
      window.location.href = "../posts/index.html";
    } else {
      console.error("User already exists, please try again");
    }
  } catch (error) {
    console.error(error);
  }
}
