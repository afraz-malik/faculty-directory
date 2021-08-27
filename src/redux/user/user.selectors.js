import {createSelector} from 'reselect';

const userSelector = state => state.user;
export const currentUserSelector = createSelector(
    [userSelector],
    user => user.currentUser
)

export const Loading = createSelector(
    [userSelector],
    user=>user.isSigningIn
)
export const signInFailed = createSelector(
    [userSelector],
    user=>user.error
)