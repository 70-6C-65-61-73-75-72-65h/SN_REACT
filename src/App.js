import React, { Suspense, lazy } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route, withRouter, BrowserRouter} from "react-router-dom";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import UsersContainer from "./components/Users/UsersContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
// import LoginPage from "./components/Login/Login";
import { connect, Provider } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/redux-store';
import withSupspend from './hoc/WithSuspend';

const DialogsContainer = withSupspend(lazy(() => import('./components/Dialogs/DialogsContainer'))); // Ленивая загрузка
const UsersContainer = withSupspend(lazy(() => import('./components/Users/UsersContainer'))); // Ленивая загрузка
const ProfileContainer = withSupspend(lazy(() => import('./components/Profile/ProfileContainer'))); // Ленивая загрузка
const LoginPage = withSupspend(lazy(() => import('./components/Login/Login'))); // Ленивая загрузка

class App extends React.Component {
       componentDidMount() {
              this.props.initializeApp();
            }
       render () {
              if( !this.props.initialized ) return (<Preloader/>)
              return (
                     <div className='app-wrapper'>
                         <HeaderContainer />
                         <Navbar />
                         <div className='app-wrapper-content'>
                             <Route path='/dialogs'
                                    render={ () => <DialogsContainer/> }/>
         
                             <Route path='/profile/:userId?'
                                    render={ () => <ProfileContainer />}/>
         
                             <Route path='/users'
                                    render={ () => <UsersContainer /> }/>
         
                             <Route path='/login'
                                    render={ () => <LoginPage /> }/>
         
         
                         </div>
                     </div>
                 )
       }
}

const mapStateToProps = (state) => ({
       initialized: state.app.initialized
   });


const AppContainer = compose(
       withRouter,
       connect(mapStateToProps, {initializeApp})
)(App);

const SocialApp = (props) => {
       return <BrowserRouter>
       <Provider store={store}>
           <AppContainer/>
       </Provider>
   </BrowserRouter>
}
export default SocialApp;