import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
class SignOut extends React.Component {
    constructor(props) {
        super(props)
        let state = {}
    }

    handleSignOut(event) {
        event.preventDefault();
    }

    render() {
        const buttonStyle={
            marginBottom: '10px'
        }
        return (
            <Container maxWidth='md'>
                <Paper>
                    <Container maxWidth='lg'>
                        <form onSubmit={this.handleSignOut}>
                            <div className="input-field">
                                <h5>Are you sure you would like to sign out?</h5>
                            </div>
                            <div className="input-field">
                                <br />
                                <Button style={buttonStyle} type='submit' variant='outlined' color='secondary' className='btn btn-large'>Sign Out</Button>
                            </div>
                        </form>
                    </Container>
                </Paper>
            </Container>
        );
    }
}


export default SignOut;