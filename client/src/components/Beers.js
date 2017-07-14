import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Header, Button, Segment, Form, Grid, Divider, List } from 'semantic-ui-react';
import { getBeers } from '../actions/beers'
import Beer from './Beer';

class Beers extends Component {
  state = { beer: ''}

  componentDidMount() {
    this.props.dispatch(getBeers());
  }

  displayBeers = (id, name) => {
    return this.props.beers.map( beer => {
      return(
        <Beer key={beer.id} beer={beer} />
      );
    });
  }

  render() {
    return(
      <Segment basic>
        <Header as='h1' style={{color: 'white'}}textAlign='center'>Beer</Header>
        <Grid columns='equal' divided inverted padded>
        <Divider horizontal>beers</Divider>
        <List>
          { this.displayBeers() }
        </List>
        </Grid>
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return { beers: state.beers };
}

export default connect(mapStateToProps)(Beers);
