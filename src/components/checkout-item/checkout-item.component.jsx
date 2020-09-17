import React from 'react'
import { connect } from 'react-redux'
import { addItem, clearItemFromcart, removeItem } from '../../react/cart/cart.actions'
import './checkout-item.styles.scss'

const CheckOutItem = ({ cartItem, clearItem,removeItem,addItem }) => {
    const { name, quantity, price, imageUrl } = cartItem
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt="checkout-item" />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <span className='arrow'onClick={()=> removeItem(cartItem)} >&#10094;</span>
                <span className='value'>{quantity}</span>
                <span className='arrow' onClick={()=> addItem(cartItem)}>&#10095;</span>
            </span>
            <span className='price'>{price}</span>
            <span className='remove-button' onClick={() => clearItem(cartItem)} >&#10005;</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: cartItem => dispatch(clearItemFromcart(cartItem)),
    addItem: cartItem => dispatch(addItem(cartItem)),
    removeItem: cartItem => dispatch(removeItem(cartItem))
})

export default connect(null, mapDispatchToProps)(CheckOutItem)
