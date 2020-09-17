import React from 'react'
import './sign-up.styles.scss'
import FormInput from '../form-input/form-input.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';


class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleSubmit = async event => {
        event.preventDefault()
        console.log(this.state)
        const { displayName, email, password, confirmPassword } = this.state
        if (password !== confirmPassword) {
            alert("Password doesn't match")
            return
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, {displayName} )
            this.setState( {
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })

        } catch (error) {
           console.log("ërror",error)
        }

    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        name='displayName'
                        type="text"
                        label="DisplayName"
                        required
                        handleChange={this.handleChange}
                        value={displayName} />
                    <FormInput
                        name='email'
                        type="email"
                        label="Email"
                        autoComplete="username"
                        required
                        handleChange={this.handleChange}
                        value={email} />

                    <FormInput
                        name='password'
                        type="password"
                        label="Password"
                        autoComplete="new-password"
                        required
                        handleChange={this.handleChange}
                        value={password} />

                    <FormInput
                        name='confirmPassword'
                        type="password"
                        label="Confirm Password"
                        autoComplete="new-password"
                        required
                        handleChange={this.handleChange}
                        value={confirmPassword} />
                    <CustomButton type="button" onClick={this.handleSubmit} >Sign Up</CustomButton>
                </form>


            </div>
        )
    }
}

export default SignUp