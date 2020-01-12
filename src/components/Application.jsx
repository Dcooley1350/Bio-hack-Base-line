import React from 'react';
import Header from './Header';
import Splash from './Splash';
import SignIn from './SignIn';
import SignOut from './SignOut';
import Register from './Register';
import DashBoard from './DashBoard';
import Archive from './Archive/Archive';
import Analysis from './Analysis';
import Test from './Tests/Test';
import Error404 from './Error404';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { watchAuthStateChanged } from '../actions';
import { connect } from 'react-redux';

class Application extends React.Component {
    constructor(props){
        super(props)
    }
    componentWillMount(){
        this.props.listenForUser();
        // this.props.listenForTests();
    }
    render(){
        return (
            <div>
                <Router>
                    <Header/>
                        <Route exact path='/' component={Splash}/>
                        <Route path='/SignIn' component={SignIn}/>
                        <Route path='/SignOut' component={SignOut}/>
                        <Route path='/Register' component={Register}/>
                        <Route path='/DashBoard' render={()=> <DashBoard currentRouterPath='/DashBoard'/>}/>
                        <Route path='/Archive' render={()=><Archive currentRouterPath='/Archive'/>}/>
                        <Route path='/Analysis' render={()=><Analysis currentRouterPath='/Analysis'/>}/>
                        <Route path='/Test' render={()=><Test currentRouterPath='/Test'/>}/>
                        <Route path='/Error404' component={Error404}/>
                </Router>
            </div>
    
          );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        listenForUser: () => {
            dispatch(watchAuthStateChanged())
        },
    }
}
 
export default connect(null, mapDispatchToProps)(Application);