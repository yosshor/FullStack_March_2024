import './styles/dist/login.css'
import './styles/dist/buttons.css'
import { handleClickSignUp } from "../controllers/signup";



export function renderRegisterForm(div: HTMLDivElement): undefined {
    try {
        if (!div) throw new Error("No div element provided");
        const registerDiv = `
                        <div class='signup-wrapper'>
                            <div class="header">
                                <h1>ToDo-List SignUp Page</h1>
                                <h5 id="loginError"></h5>
                            </div>
                            <div class="register">
                                <form id="registerForm" >
                                    <h2>Sign Up</h2>
                                    <p>Please fill in this form to create an account.</p>
                                    <div class="row">
                                        <label>First Name :</label>
                                        <input name="fname" type="text" id="fname" placeholder="First Name" required>
                                    </div>

                                    <div class="row">
                                        <label>Last Name :</label>
                                        <input name="lname" type="text" id="lname" placeholder="Last Name" required> 
                                    </div>

                                    <div class="row">
                                        <label>Email :</label>
                                        <input name="email" type="text" id="email" placeholder="Email" required>
                                    </div>

                                    <div class="row">
                                        <label>Password :</label>
                                        <input name="password" type="password" id="password" placeholder="Password" required>
                                    </div>

                                    <button class="buttons buttons__register" id="register-btn">Register</button>
                                </form>
                            </div>
                         </div>`
        div.innerHTML = registerDiv;
        div.addEventListener('submit', handleClickSignUp)
    } catch (error) {
        console.error(error);
        return undefined;
    }
}

