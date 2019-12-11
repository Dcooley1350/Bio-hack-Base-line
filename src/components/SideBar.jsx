import React from 'react';

const SideNav = (props) => {
  let greeting = null;
  let details = null;
  let newKegButton = null;
  const sideNavStyle= {
    height: '100%',
    backgroundColor: '#ececeb',
    width: '100%'
  };
  const buttonStyle = {
    width: '100%',
    backgroundColor: '#e25822',
    margin: '3px'
  };
  if(props.currentRouterPath === '/Archive'){
    greeting = <p>Welcome to Archive</p>;
  }
  else if(props.currentRouterPath === '/Test'){
    greeting = <p>Welcome to Test</p>;
  }
  else if(props.currentRouterPath === '/Analysis'){
      greeting = <p>Welcome to Analysis</p>
  }
  return ( 
    <div style={sideNavStyle}>
      {greeting}<br/>
      {details}<br/>
      <div>{newKegButton}</div>
    </div>
  );
};
 
export default SideNav;