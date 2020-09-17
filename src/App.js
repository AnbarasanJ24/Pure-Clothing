import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homePage.component';
import { Route, Switch, Redirect } from 'react-router-dom'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './react/user/user-actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './react/user/user.selectors';
import CheckOut from './pages/checkout/checkout.component';


class App extends React.Component {
  unSubcribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props
    this.unSubcribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {
         let data = snapShot.data()
         setCurrentUser({
            id: snapShot.id,
            ...data
          })
        })
      }
      setCurrentUser(userAuth)
    })
  }

  componentWillUnmount() {
    this.unSubcribeFromAuth()
  }



  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route path='/shop' component={ShopPage}></Route>
          <Route exact path='/checkout' component={CheckOut}></Route>
          <Route exact path='/sign-in' render={ () =>
            this.props.currentUser ?
            (<Redirect to='/'></Redirect>) :
            (<SignInAndSignUp></SignInAndSignUp>)
          }></Route>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

const mapStateToProps =  createStructuredSelector({
  currentUser : selectCurrentUser
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
