import {Component} from 'react'
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD2B3Uqt_xVtwUS74pXGQbn0bVN4KPT03E",
    authDomain: "pooptracker-79b4b.firebaseapp.com",
    databaseURL: "https://pooptracker-79b4b.firebaseio.com",
    projectId: "pooptracker-79b4b",
    storageBucket: "pooptracker-79b4b.appspot.com",
    messagingSenderId: "147343750066"
};

firebase.initializeApp(config);


export class FirebaseAPI extends Component{
    constructor(){
        super();
        console.log("ready to listen")
    }
    componentWillMount(){
        this.initAuth();
    }
    //turon on listening for auth changes
    initAuth(){
        firebase.auth().onAuthStateChanged(
           user=>{
            if(user){
                ///are authenticated
                this.setState({
                    authenticated: true
                }, ()=>{
                    ///a good place to update the redux store
                    this.props.onAuthenticationChange(true)
                })
            }else{
                ///not authenticated
                this.setState({
                    authenticated: false
                },()=>{
                    this.props.onAuthenticationChange(false);
                })
            }
            } 
        )
    }
    
    render(){
        return(null);
    }
    
}