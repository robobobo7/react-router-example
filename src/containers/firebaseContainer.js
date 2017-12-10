import {connect} from 'react-redux';
import {FirebaseAPI} from '../components/firebaseComponent';
import {actions} from  '../actions/actions';

export const FirebaseContainer = connect(
    function mapDispatchToProps(dispatch){
        return{
            onAuthenticationChange: (value)=>{
                console.log('I want to tell the store!!')
                console.log('Authenticared: ' + value)
                if(value){
                    //authenticated
                    actions.authenticate();
                }else{
                    //not authentiacted
                    actions.unauthenticate();
                }
            }
        }
    }
)(FirebaseAPI)