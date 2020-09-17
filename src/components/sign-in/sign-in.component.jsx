import React from 'react'
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { signInWithGoogle, auth } from '../../firebase/firebase.utils'


class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault()
        const {email,password} = this.state
        try{
            await auth.signInWithEmailAndPassword(email,password)
            this.setState({ email: '', password: '' })
        }catch(error){
            console.log("ërror", error)

        }
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have a account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type="email"
                        label="Email"
                        required
                         autoComplete="username"
                        handleChange={this.handleChange}
                        value={this.state.email} />

                    <FormInput
                        name='password'
                        type="password"
                        label="Password"
                        required
                         autoComplete="current-password"
                        handleChange={this.handleChange}
                        value={this.state.password} />
                    <div className='buttons'>
                        <CustomButton type="submit" onClick={this.handleSubmit}>Sign In</CustomButton>
                        <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn >Sign In With Google</CustomButton>
                    </div>
                </form>

            </div>
        )
    }
}

export default SignIn