import { useState } from 'react'
import './App.css'

function App() {
    // State for showing/hiding the password
    const [showPassword, setShowPassword] = useState(false);

    // Toggle password visibility
    const handleShowPassword = () => {
        setShowPassword(prev => !prev);
    };

    // Placeholder for Google login option
    const googleLoginOption = () => {
        // You can customize it yourself.
    };

    // Placeholder for Facebook login option
    const facebookLoginOption = () => {
        // You can customize it yourself.
    };

    // Placeholder for Apple login option
    const appleLoginOption = () => {
        // You can customize it yourself.
    };

    // Placeholder for forgot password functionality
    const forgotPassword = () => {
        // You can customize it yourself.
    };

    // Placeholder for submit function
    const submitFunction = () => {
        // You can customize it yourself.
    };

    return (
        // Main page container centered with Flexbox
        <div className="page-container">
            {/* Card container for the login form */}
            <div className="card-container">
                {/* Icon at the top of the card */}
                <div className="icon-container">
                    <img src="public/login-icon.png" alt="login-icon" className='icon-design' />
                </div>
                {/* Headline and introduction text */}
                <div className="text-container">
                    <h1 className="headline">Sign in with email</h1>
                    <p className="text">
                        Access your account and enjoy all features.
                    </p>
                </div>
                {/* Input fields for email and password */}
                <div className="input-container">
                    <input type="email" name="email" id="email" className="input-design" placeholder='Email' />
                    <div className="password-eye-container">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            id="password"
                            className="input-design"
                            placeholder='Password'
                        />
                        {/* Button to toggle password visibility */}
                        <button onClick={handleShowPassword} className='pw-eye-btn' tabIndex={-1}>
                            <img src="public/eye-icon.png" alt="show-password" className='pw-eye-img' />
                        </button>
                    </div>
                </div>
                {/* Forgot password link */}
                <div className="option-container">
                    <a href="#" onClick={forgotPassword} className="hyperlink">Forgot password?</a>
                </div>
                {/* Submit button */}
                <div className="submit-btn-container">
                    <button type="submit" onClick={submitFunction} className='submit-btn-design'>Get Started</button>
                </div>
                {/* Divider with text */}
                <div className="divider">
                    <span>Or sign in with</span>
                </div>
                {/* Social login options */}
                <div className="login-option-container">
                    <button className="login-option-btn" onClick={googleLoginOption}>
                        <img src="public/google.png" alt="google" className="login-option-img" />
                    </button>
                    <button className="login-option-btn" onClick={facebookLoginOption}>
                        <img src="public/facebook.png" alt="facebook" className="login-option-img" />
                    </button>
                    <button className="login-option-btn" onClick={appleLoginOption}>
                        <img src="public/apple.png" alt="apple" className="login-option-img" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default App
