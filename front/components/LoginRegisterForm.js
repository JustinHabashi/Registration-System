import React from 'react'

const LoginRegisterForm = ({email, setEmail, pass, setPass, buttonName, handleSubmit}) => {
    return(
            <div className="col-md-6">
                <div className = "form-group">
                    <label>Email</label>
                    <input 
                    type = "email" onChange = {(e) => setEmail(e.target.value)} 
                    value={email} 
                    className = "form-control"
                    />
                    <small>Your email will never be shared</small>
                </div>

                <div className = "form-group">
                    <label>Password</label>
                    <input 
                    type = "password" 
                    onChange = {(e) => setPass(e.target.value)} 
                    value={pass} 
                    className = "form-control"
                    />
                    
                </div>

                <div>
                    <button onClick={handleSubmit} className="btn btn-primary">
                        {buttonName}
                    </button>
                </div>
            </div>
    )
};

export default LoginRegisterForm;