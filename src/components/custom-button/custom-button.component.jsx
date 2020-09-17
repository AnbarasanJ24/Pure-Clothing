import React from 'react'
import './custom-button.styles.scss'

const CustomButton = ({ children,inverted, isGoogleSignIn,...otherProps}) => (
    <div className={`${isGoogleSignIn ? 'google-sign-in' : ''} ${inverted ? 'inverted' : null} custom-button`} {...otherProps}>
        {children}
    </div>
)

export default CustomButton