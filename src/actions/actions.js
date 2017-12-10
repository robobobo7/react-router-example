export const actions = {
    authenticate: ()=>{
        return{
            type: 'AUTHENTICATED'
        }
    },
    unauthenticate: ()=>{
        type: 'UNAUTHENTICATED'
    }
}