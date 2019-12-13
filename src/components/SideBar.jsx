import React from 'react';
import { connect } from 'react-redux';

const SideNav = (props) => {
  let greeting = null;
  let content = null;

  const sideNavStyle = {
    height: '100vh',
    backgroundColor: '#ececeb',
    width: '100%',
  };
  const paddingStyle = {
    paddingLeft: '10px',
    paddingRight: '10px'
  }

  const greetingStyle = {
    textAlign: 'center',
  }
  function sideNavConditionalRender() {
    if (props.currentRouterPath === '/Archive') {
      greeting = 'Archive';

    }
    else if (props.currentRouterPath === '/Test') {
      greeting = 'Test';
      console.log(props)
      console.log(props.currentTest.ctrlCondition);
      if (props.currentTest == '')
         content = <p>Test data will appear here as test progresses.</p>
      else {
        content = 
          <div>
            <h5>Info:</h5>
            <ul>
              <li>{props.currentTest.expCondition}</li>
              <li>{props.currentTest.ctrlCondition}</li>
              <li>Start Time: {props.currentTest.time}</li>
              <li>Date: {props.currentTest.date}</li>
            </ul>
            <h5>Reaction Time Tests:</h5>
            <ul>
              {props.currentTest.ReactionTimeTest1 ? (<li>Test 1: {props.currentTest.ReactionTimeTest1}</li>) : (<li>Test 1: </li>)}
              {props.currentTest.ReactionTimeTest2 ? (<li>Test 2: {props.currentTest.ReactionTimeTest2}</li>) : (<li>Test 2: </li>)}
              {props.currentTest.ReactionTimeTest3 ? (<li>Test 3: {props.currentTest.ReactionTimeTest3}</li>) : (<li>Test 3: </li>)}
              {props.currentTest.ReactionTimeTest4 ? (<li>Test 4: {props.currentTest.ReactionTimeTest4}</li>) : (<li>Test 4: </li>)}
              {props.currentTest.ReactionTimeTest5 ? (<li>Test 5: {props.currentTest.ReactionTimeTest5}</li>) : (<li>Test 5: </li>)}
            </ul>
            <h5>Memory Tests:</h5>
            <ul>
              {props.currentTest.MemoryTest1 ? (<li>Test 1: {props.currentTest.MemoryTest1}</li>) : (<li>Test 1: </li>)}
              {props.currentTest.MemoryTest2 ? (<li>Test 2: {props.currentTest.MemoryTest2}</li>) : (<li>Test 2: </li>)}
              {props.currentTest.MemoryTest3 ? (<li>Test 3: {props.currentTest.MemoryTest3}</li>) : (<li>Test 3: </li>)}
              {props.currentTest.MemoryTest4 ? (<li>Test 4: {props.currentTest.MemoryTest4}</li>) : (<li>Test 4: </li>)}
              {props.currentTest.MemoryTest5 ? (<li>Test 5: {props.currentTest.MemoryTest5}</li>) : (<li>Test 5: </li>)}
              {props.currentTest.MemoryTest6 ? (<li>Test 6: {props.currentTest.MemoryTest6}</li>) : (<li>Test 6: </li>)}
              {props.currentTest.MemoryTest7 ? (<li>Test 7: {props.currentTest.MemoryTest7}</li>) : (<li>Test 7: </li>)}
              {props.currentTest.MemoryTest8 ? (<li>Test 8: {props.currentTest.MemoryTest8}</li>) : (<li>Test 8: </li>)}
            </ul>
          </div>;

        
      }

    }
    else if (props.currentRouterPath === '/Analysis') {
      greeting = 'Analysis'
    }
    else if (props.currentRouterPath === '/DashBoard') {
      greeting = 'DashBoard'
    }

  }
  sideNavConditionalRender();
  return (
    <div style={sideNavStyle}>
      <div style={paddingStyle}>
        <br />
        <h3 style={greetingStyle}>{greeting}</h3>
        {content}

      </div>

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