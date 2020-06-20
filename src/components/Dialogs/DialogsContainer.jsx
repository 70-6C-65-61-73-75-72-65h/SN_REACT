// import React from 'react';
import {sendMessage} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import withAuthRedirect from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';
import withSupspend from "../../hoc/WithSuspend";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}


// let mapDispatchToProps = (dispatch) => {
//     return {
//         sendMessage: () => {
//             dispatch(sendMessageCreator());
//         },
//         updateNewMessageBody: (body) => {
//             dispatch(updateNewMessageBodyCreator(body));
//         }
//     }
// }

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

// export default withAuthRedirect(DialogsContainer);

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {sendMessage},
    )
)(Dialogs);