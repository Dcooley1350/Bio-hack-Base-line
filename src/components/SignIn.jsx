import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container';
import { logInUser } from '../actions';
import { connect } from 'react-redux'

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
    logInUser(this.state.email, this.state.password)();
    console.log(this.state);
  }
  render() {
    const conditionalRender = (props) => {
      if (this.props.currentUser.email == null){
        return(
          <form onSubmit={this.onSignIn}>
            <h5>Sign In:</h5>
            <div className="input-field">
              <label htmlFor="email">Email:</label>
              <TextField placeholder='name@email.com' margin="normal" fullWidth type="email" id="email" InputLabelProps={{ shrink: true, }} onChange={this.onInputFieldChange} />
              <label htmlFor="password">Password:</label>
              <TextField placeholder='*********' fullWidth type="password" id="password" InputLabelProps={{ shrink: true }} onChange={this.onInputFieldChange} />
            </div>
            <div className="input-field">
              <br />
              <Button style={buttonStyle} type='submit' color='primary' variant='outlined' className='btn btn-large'>Sign In</Button>
              <br />
            </div>
          </form>
        )
      }
          else{
            return(
              <h1>Successfully signed in as {this.props.currentUser.email}</h1>
            )
      }
    }
    const buttonStyle={
      marginBottom: '10px'
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


export default connect(mapStateToProps)(SignIn);