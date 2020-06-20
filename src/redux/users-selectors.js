import { createSelector } from "reselect";

export const getUsersPrimitiveSelector = state => {
    return  state.usersPage.users;//.filter(u => true);
}

// export const getUsersSelector = state => {
//     return getUsers().filter(u => true);
// }


export const getUsers = createSelector( getUsersPrimitiveSelector, (users) => {
    return users.filter(u => true);
})



export const getPageSize = state => {
    return  state.usersPage.pageSize;
}

export const getTotalUsersCount = state => {
    return  state.usersPage.totalUsersCount;
}


export const getCurrentPage = state => {
    return  state.usersPage.currentPage;
}


export const getIsFetching = state => {
    return  state.usersPage.isFetching;
}


export const getFollowingInProgress = state => {
    return  state.usersPage.followingInProgress;
}


// export const getUsersSuperSelector2 = createSelector( getUsers, getIsFetching, (users, isFetching) => {
//     return users.filter(u => true);
// })
