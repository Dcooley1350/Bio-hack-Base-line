import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Splash from './Splash';
import SignIn from './SignIn';
import SignOut from './SignOut';
import Register from './Register';
import DashBoard from './DashBoard';
import Archive from './Archive';
import Analysis from './Analysis';
import Test from './Test';
import Error404 from './Error404';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Application = (props) => {
    return (
        <div>
            <Router>
                <Header/>
                    <Route exact path='/' component={Splash}/>
                    <Route path='/SignIn' component={SignIn}/>
                    <Route path='/SignOut' component={SignOut}/>
                    <Route path='/Register' component={Register}/>
                    <Route path='/DashBoard' component={DashBoard}/>
                    <Route path='/Archive' component={Archive}/>
                    <Route path='/Analysis' component={Analysis}/>
                    <Route path='/Test' component = {Test}/>
                    <Route path='/Error404' component={Error404}/>
                <Footer/>
            </Router>
        </div>

      );
}
 
export default Application;