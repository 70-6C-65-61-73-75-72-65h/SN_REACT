import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input, createField } from '../common/FormsControls/FormsControls';
import { requiredField, maxLength30 } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import styles from '../common/FormsControls/FormsControls.module.css'


const LoginForm = ({handleSubmit, error}) => {
    return (
            <form onSubmit={handleSubmit}> {/* + к этому контейнерная компонента  вызывает props.onSubmit*/}
                {createField('Email', "email", Input, [requiredField])}
                {createField('Password', "password", Input, [requiredField], {type: "password"})}
                {createField(null, "rememberMe", Input, null, {type: "checkbox"}, "remember me")}
                {
                error && 
                <div className={styles.formSummaryError}>
                    {error}
                </div>
                }
                <div className=''>
                    <button>Login</button>
                </div>
            </form>
    )
}
 // a unique name for the form
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
        // console.log(`${formData}`);

        // здесь можем их задиспатчить в санку ( типо тут схватили и разширили уже зохочений из редакс-форм )
    }

    if(props.isAuth) return (<Redirect to='/profile'/>)

    return (
        <>
            <div className=''>
                <h1>LOGIN</h1>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        </>
    )
}


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
});


export default connect(mapStateToProps, {login})(Login);