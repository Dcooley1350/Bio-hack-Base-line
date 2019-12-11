import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'

class SignIn extends React.Component {
  constructor(props) {
    super(props)
    let state = {
      email: '',
      password: ''
    }
    this.onInputFieldChange= this.onInputFieldChange.bind(this);
    this.onSignIn = this.onSignIn.bind(this);
  }
  onInputFieldChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  onSignIn(event) {
    event.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <Container maxWidth='md'>
        <Paper>
          <Container maxWidth='lg'>
            <form onSubmit={this.onSignIn}>
              <div className="input-field">
                <label htmlFor="email">Email:</label>
                <TextField placeholder='name@email.com' margin="normal" fullWidth type="email" id="email" InputLabelProps={{ shrink: true, }} onChange={this.onInputFieldChange} />
                <label htmlFor="password">Password:</label>
                <TextField placeholder='*********' fullWidth type="password" id="password" InputLabelProps={{ shrink: true }} onChange={this.onInputFieldChange} />
              </div>
              <div className="input-field">
                <Button type='submit' className='btn btn-large'>Sign In</Button>
              </div>
            </form>
          </Container>
        </Paper>
      </Container>
    );
  }
}


export default SignIn;