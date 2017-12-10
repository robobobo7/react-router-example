import {connect} from 'react-redux';
import {AppLayout} from '../components/app';

export const AppContainer = connect(
    function mapStateToProps(state){
        return{
            authenticated: state.authReducer.authenticated
        }
    },
    function mapDispatchToProps(dispatch){
        return{
            
        }
    }
)(AppLayout);