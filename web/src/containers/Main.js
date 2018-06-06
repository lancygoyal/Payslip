import React, { Component } from 'react';
import { Paper, RaisedButton, TextField } from 'material-ui';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { genrate } from '../redux/modules/app';

class Main extends Component {
  state = {
    firstName: '',
    lastName: '',
    annualSalary: 0,
    superRate: 0,
    startDate: ''
  };
  handleClick = () => {
    this.props.genrate(this.state);
  };
  render() {
    return (
      <div style={styles.container}>
        <Helmet>
          <title>PaySlip</title>
        </Helmet>
        <Paper style={styles.form} zDepth={1}>
          <TextField
            fullWidth
            hintText="Lancy"
            floatingLabelText="First Name"
            onChange={(event, newValue) => this.setState({ firstName: newValue })}
          />
          <br />
          <TextField
            fullWidth
            hintText="Goyal"
            floatingLabelText="Last Name"
            onChange={(event, newValue) => this.setState({ lastName: newValue })}
          />
          <br />
          <TextField
            type="number"
            fullWidth
            hintText="50000"
            floatingLabelText="Annual Salary"
            onChange={(event, newValue) => this.setState({ annualSalary: newValue })}
          />
          <br />
          <TextField
            type="number"
            fullWidth
            hintText="10"
            floatingLabelText="Super Rate"
            onChange={(event, newValue) => this.setState({ superRate: newValue })}
          />
          <br />
          <TextField
            fullWidth
            hintText="May 2018"
            floatingLabelText="Start Date"
            onChange={(event, newValue) => this.setState({ startDate: newValue })}
          />
          <br />
          <RaisedButton
            label="Submit"
            fullWidth
            secondary
            style={styles.button}
            onClick={this.handleClick}
          />
        </Paper>
      </div>
    );
  }
}

const styles = {
  container: {
    minWidth: 320,
    maxWidth: 400,
    height: 'auto',
    position: 'absolute',
    top: '20%',
    left: 0,
    right: 0,
    margin: 'auto'
  },
  form: {
    padding: 20,
    overflow: 'auto'
  },
  buttonsDiv: {
    textAlign: 'center',
    padding: 10
  },
  button: {
    float: 'right',
    marginTop: 20
  }
};

const mapDispatchToProps = {
  genrate
};

export default connect(null, mapDispatchToProps)(Main);
