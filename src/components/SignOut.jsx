import React from 'react';
import Button from '@material-ui/core/Button';

class SignOut extends React.Component {
    constructor(props) {
        super(props)
    let state = {}
    }

    handleSignOut(event) {
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSignOut}>
                    <div className="input-field">
                        <h5>Are you sure you would like to sign out?</h5>
                    </div>
                    <div className="input-field">
                    <br/>
                        <Button type='submit' variant='outlined' color='secondary'className='btn btn-large'>Sign Out</Button>
                    </div>
                </form>
            </div>
        );
    }
}


export default SignOut;