import React, { Component } from 'react';
import { Icon, List, Segment, Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';

class Beer extends Component {
  state = { beerName: this.props.beer.name};

render() {
  const { beer } = this.props;




    return(
      <Segment>
      <List.Item>
        <List.Content>
          <List.Header>
            {beer.name}
            </List.Header>
        </List.Content>
      </List.Item>

    </Segment>
  )
}
}

export default connect()(Beer);
