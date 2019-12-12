import React from 'react';
import { connect } from 'react-redux';

const SideNav = (props) => {
  let greeting = null;
  const sideNavStyle= {
    height: '100vh',
    backgroundColor: '#ececeb',
    width: '100%'
  };

  const greetingStyle={
    textAlign: 'center',
  }

  if(props.currentRouterPath === '/Archive'){
    greeting ='Archive';
  }
  else if(props.currentRouterPath === '/Test'){
    greeting ='Test';
      
  }
  else if(props.currentRouterPath === '/Analysis'){
      greeting ='Analysis'
  }
  else if(props.currentRouterPath === '/DashBoard'){
      greeting ='DashBoard'
  }
  return ( 
    <div style={sideNavStyle}>
      <br/>
      <h3 style={greetingStyle}>{greeting}</h3>

    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
  testsById: state.testsById,
  currentTest: state.currentTest,
  testScriptPosition: state.testScriptPosition
});
 
export default connect(mapStateToProps)(SideNav);