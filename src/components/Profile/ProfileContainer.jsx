import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, updateStatus, getStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
// import WithAuthRedirect from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.userId; // 8705 //this.props.userId; // getting from withAuthRedirect
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        // console.log(`${userId}`);
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }


    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
            updateStatus = {this.props.updateStatus}
            />
        )
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth,
    userId: state.auth.userId
});

export default compose(
    // WithAuthRedirect,
    connect(mapStateToProps, {getUserProfile, updateStatus, getStatus}),
    withRouter
)(ProfileContainer)
