const inititalState={
    authenticated: false,
    online: false
}

//reducer for firebase authentication state
export function authReducer(state=inititalState, action){
    switch(action.type){
        
        case'UNAUTHENTICATED':
            console.log("you're unauthenticated")
            
            
            
            return{
                authenticated:false
            };
            case 'AUTHENTICATED':
                return Object.assign({}, state, {
                    authenticated: true
                })
            default:
            return state;
    }
}
export function onlineReducer(state=inititalState, action){
    switch(action.type){
        case 'online':
            return{
                online: true
            }
        case 'offline':
            return{
                online:false
            }
        default:
            return state
    }
}