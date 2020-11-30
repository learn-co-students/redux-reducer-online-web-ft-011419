export function manageFriends(state, action){

    let removeByAttr = (arr, value) => {
        return arr.filter((friend, index) => {
            return friend.id != value
        })
    }

    switch (action.type) {
        case 'ADD_FRIEND':
            return {friends: [...state.friends, {...action.friend}]}
        case 'REMOVE_FRIEND':
            return {friends: removeByAttr(state.friends, action.id)}
        default:
            return state
    }
}
