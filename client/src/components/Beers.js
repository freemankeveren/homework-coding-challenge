import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Header, Button, Segment, Form } from 'semantic-ui-react';

class Beers extends Component {


  render() {
    return(
      <Segment basic>
        <Header as='h1' style={{color: 'white'}}textAlign='center'>Beer</Header>
      </Segment>
    )
  }
}

export default connect()(Beers);
