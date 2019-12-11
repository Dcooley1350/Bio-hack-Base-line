import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

class RegisterUser extends React.Component {
    constructor(props) {
        super(props)
        let state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        }
        this.onInputFieldChange= this.onInputFieldChange.bind(this);
        this.onNewUserSubmit= this.onNewUserSubmit.bind(this);
    }
    onInputFieldChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    onNewUserSubmit(event) {
        event.preventDefault();
        console.log(this.state);

    }



    render() {
        const buttonStyle={
            marginBottom: '10px'
        }
        return (
            <Container maxWidth='md'>
                <Paper>
                    <Container maxWidth='lg'>
                        <form onSubmit={this.onNewUserSubmit}>
                            <h5>Register</h5>
                            <Grid container spacing={0}>
                                <Grid item xs={6}>
                                    <label htmlFor="firstName">First Name:</label>
                                    <TextField placeholder='first' margin="normal" fullWidth type="firstName" id="firstName" InputLabelProps={{ shrink: true, }} onChange={this.onInputFieldChange} />
                                </Grid>
                                <Grid item xs={6}>
                                    <label htmlFor="lastName">Last Name:</label>
                                    <TextField placeholder='last' margin="normal" fullWidth type="lastName" id="lastName" InputLabelProps={{ shrink: true, }} onChange={this.onInputFieldChange} />
                                </Grid>
                            </Grid>
                            <label htmlFor="email">Email:</label>
                            <TextField placeholder='name@email.com' margin="normal" fullWidth type="email" id="email" InputLabelProps={{ shrink: true, }} onChange={this.onInputFieldChange} />
                            <label htmlFor="Password">Password</label>
                            <TextField placeholder='*********' fullWidth type="password" id="password" InputLabelProps={{ shrink: true }} onChange={this.onInputFieldChange} />
                            <div>
                                <br/>
                                <Button style={buttonStyle} type='submit' color='primary' variant='outlined' className='btn btn-large'>Register</Button>
                                <br/>
                            </div>
                        </form>
                    </Container>
                </Paper>
            </Container>
        );
    }
}

export default RegisterUser;