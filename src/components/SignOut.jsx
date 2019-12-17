import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { logOutUser } from '../actions';
import { connect } from 'react-redux';

class SignOut extends React.Component {
    constructor(props) {
        super(props)
        let state = {
        }
    }

    handleSignOut(event) {
        event.preventDefault();
        logOutUser()();
    }

    render() {
        const buttonStyle={
            marginBottom: '10px'
        }
        const conditionalRender = (props) => {
            if (this.props.currentUser.email != null) {
                return (
                    <form onSubmit={this.handleSignOut}>
                        <div className="input-field">
                            <h5>Are you sure you would like to sign out?</h5>
                        </div>
                        <div className="input-field">
                            <br />
                            <Button style={buttonStyle} type='submit' variant='outlined' color='secondary' className='btn btn-large' onClick={this.handleSignOut}>Sign Out</Button>
                        </div>
                    </form>
                )
            }
            else {
                return(<h1>Successfully Signed Out</h1>)
            }
        }
                
        return (
            <Container maxWidth='md'>
                <Paper>
                    <Container maxWidth='lg'>
                        {conditionalRender()}
                    </Container>
                </Paper>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(SignOut);