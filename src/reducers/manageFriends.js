export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return { ...state,
      friends:[
        ...state.friends, action.friend
      
      ]}
     ///review this again we find the index using find index then slice  
     //to get two protions of the array and we speard those two , to build the new array 
     // another option might be splice 
    case 'REMOVE_FRIEND':
      const removalIndex = state.friends.findIndex(friend => friend.id === action.id);
      return {
        ...state,
        friends: [
         // ...state.friends.slice(0, removalIndex),
        ///  ...state.friends.slice(removalIndex+ 1)
        ],
      }


    default:
      return state;
}
}
