const SignUpForm = () => {
    return (
        <div>
            <h1>Sign up with your email and passowrd</h1>
            <form>
                <label>Profile Name</label>
                <input type="text" required/>

                <label>Email</label>
                <input type="text" required/>

                <label>Password</label>
                <input type="text" required/>

                <label>Confirm Password</label>
                <input type="text" required/>
            </form>
        </div>
    )
}