import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import { reduxForm, Field } from 'redux-form';
import { TextArea } from '../common/FormsControls/FormsControls';
import { requiredField, maxLength50 } from '../../utils/validators/validators';


const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}> {/* + к этому контейнерная компонента  вызывает props.onSubmit*/}
            <div className=''>
                <Field placeholder={'Enter your message'} name={"newMessageBody"} component={TextArea} validate={[requiredField, maxLength50]} />
            </div>
            <div className=''>
                <button>Send</button>
            </div>
        </form>
    )
}   
// a unique name for the form
const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)


const Dialogs = (props) => {


    const addNewMessage = (formData) => {
        props.sendMessage(formData.newMessageBody);
    }

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />);


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage} />
            </div>
        </div>
    )
}

export default Dialogs;


    // let newMessageBody = state.newMessageBody;

    // let onSendMessageClick = () => {
    //     props.sendMessage();
    // }

    // let onNewMessageChange = (e) => {
    //     let body = e.target.value;
    //     props.updateNewMessageBody(body);
    // }

    // if (!props.isAuth) return <Redirect to={"/login"} /> ;
//     <div>
//     <div><textarea value={newMessageBody}
//                    onChange={onNewMessageChange}
//                    placeholder='Enter your message'></textarea></div>
//     <div><button onClick={onSendMessageClick}>Send</button></div>
// </div> 



















