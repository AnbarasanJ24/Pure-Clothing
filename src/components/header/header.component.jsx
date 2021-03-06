import React from 'react'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { Link } from 'react-router-dom'
import './header.styles.scss'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { selectCartHidden } from '../../react/cart/cart.selector'
import { selectCurrentUser } from '../../react/user/user.selectors'
import { createStructuredSelector} from 'reselect'

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT</Link>
            {
                currentUser ?
                    (<div className='sign-out' onClick={() => { auth.signOut() }}>SIGN OUT</div>) :
                    <Link className='option' to='/sign-in'>SIGN IN</Link>
            }
            <CartIcon />
        </div>
        {
            hidden ? null : <CartDropdown />
        }

    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden : selectCartHidden,
})
export default connect(mapStateToProps)(Header)