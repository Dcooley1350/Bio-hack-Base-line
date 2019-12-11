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
    }
    onNewUserSubmit(event) {
        event.preventDefault();
        console.log(this.state);

    }
    onInputFieldChange(event) {
        this.setState({
            [event.target.id]: event.target.id
        });
    }



    render() {
        const registerUserStyles = ({
            root: {
                '& > *': {
                    paddingLeft: '10%'

                },
            }
        });
        return (
            <Container maxWidth='md'>
                <Paper>
                    <Container maxWidth='lg'>
                        <form onSubmit={this.onNewUserSubmit}>
                            <h5>Register</h5>
                            <Grid container spacing="3">
                                <Grid item xs={6}>
                                    <label htmlFor="firstName">First Name:</label>
                                    <TextField placeholder='first' margin="normal" fullWidth type="firstName" id="firstName" InputLabelProps={{ shrink: true, }} onChange={this.handleInputFieldChange} />
                                </Grid>
                                <Grid item xs={6}>
                                    <label htmlFor="lastName">Last Name:</label>
                                    <TextField placeholder='last' margin="normal" fullWidth type="lastName" id="lastName" InputLabelProps={{ shrink: true, }} onChange={this.handleInputFieldChange} />
                                </Grid>
                            </Grid>
                            <label htmlFor="email">Email:</label>
                            <TextField placeholder='name@email.com' margin="normal" fullWidth type="email" id="email" InputLabelProps={{ shrink: true, }} onChange={this.handleInputFieldChange} />
                            <label htmlFor="Password">Password</label>
                            <TextField placeholder='*********' fullWidth type="password" id="password" InputLabelProps={{ shrink: true }} onChange={this.handleInputFieldChange} />
                            <Button type='submit' className='btn btn-large'>Register</Button>
                        </form>
                    </Container>
                </Paper>
            </Container>
        );
    }
}

export default RegisterUser;