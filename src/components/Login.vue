<template>
    <div class="main">
        <div class="container">
            <div class="form-container">
                <h1>Login</h1>
                <form id="login-form">
                    <div class="form-group">
                        <input type="email" id="login-email" v-model="email" placeholder="Email" required>
                    </div>
                    <div class="form-group eye-sec">
                        <input type="password" id="login-password" v-model="password" placeholder="Password" required>
                        <span class="password-toggle" id="password-toggle" @click="togglePasswordVisibility('login-password')">👁️</span>
                    </div>
                    <button type="submit" id="login-btn" @click="login">Login</button>
                </form>
                <p>Don't have an account? <router-link to="/signup" id="signup-link">Sign Up</router-link></p>
            </div>
        </div>
    </div>
</template>
<script>
    export default
    {
        name:"Login"
    }
</script>

<script setup>
    import { ref} from 'vue'
    const email = ref(null);
    const password = ref(null);


    const login=()=>{
        email = email.value;
        password = password.value;

        
        const loginData = {
            email,
            password,
        };
        localStorage.setItem("loginData", JSON.stringify(loginData));
        console.log(loginData);

        // Basic email format validation
        if (!isValidEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Check if password is not empty
        if (password === "") {
            alert("Password cannot be empty.");
            return;
        }
        console.log("Login successful!");
    };
</script>
<style scoped>
    /* Add responsive CSS here */
    body {
        font-family: Arial, Helvetica, sans-serif;
        background-color: #f2f2f2;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
    .main
    {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    .container {
        background-color: #ffffff;
        border-radius: 8px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        padding: 20px;
        max-width: 400px;
        width: 100%;
        text-align: center;
    }

    .form-container {
        transition: transform 0.3s ease;
    }

    .form-container.hidden {
        transform: translateX(100%);
    }

    .form-group {
        margin-bottom: 15px;
    }

    input[type="text"],
    input[type="email"],
    input[type="password"],
    input[type="tel"],
    input[type="file"] {
        width: 90%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 16px;
    }

    .live-picture
    {
        width: 90%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 16px;
    }

    button[type="submit"] {
        background-color: #007BFF;
        color: #fff;
        border: none;
        border-radius: 5px;
        padding: 10px 20px;
        font-size: 18px;
        cursor: pointer;
    }

    #signup-link,
    #login-link {
        color: #007BFF;
        text-decoration: none;
        font-weight: bold;
    }

    .password-toggle {
        cursor: pointer;
        user-select: none;
    }

    .hidden {
        display: none;
    }
    .eye-sec{
        position: relative;
    
    }
    .eye-sec span{
        position: absolute ;
        top: 7px;
        right: 23px;
    }
    .password-toggle{
        position: absolute;
    }
    .live-captured
    {
        width: 96%;
        padding: 10px;
        background-color: #36b311;
        border-radius: 5px;
        font-size: 16px;
        color: white;
        font-weight: bold;
        border: 1px;
    }
    #captured-image
    {
        width: 80%;
        height: 80%;
    }
</style>