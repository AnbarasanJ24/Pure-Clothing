import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import './stripe-checkout.styles.scss'

const StripeCheckoutButton = ({ price }) => {
    const stripekey = "pk_test_51HS2n0ID4yWimajAbpKsqshFUuubh2FDfiF4UmKvMRSFuJA2cSZ9fMOJsywHnTKWngleOCW17mzPcCREyXiS9rcZ00HEA7gpnN"
    const priceForStripe = price * 100
    const onToken = (token)=>{
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Pure Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={stripekey}
        />
    )
}

export default StripeCheckoutButton