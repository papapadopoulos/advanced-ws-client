import React from "react";
import { Panel, ListGroup, ListGroupItem, Button } from "react-bootstrap";

class MessageArea extends React.Component {
  constructor() {
    super();
    this.messageList = React.createRef();
  }

  // shouldComponentUpdate(nextProps, nextState) {

  // }

  copyToClipboard = (e) => {
    console.log(e.value);
    this.messageItem.props.children.select();
    document.execCommand("copy");
    // This is just personal preference.
    // I prefer to not show the the whole text area selected.
    e.target.focus();
    // this.setState({ copySuccess: 'Copied!' });
  };

  render() {
    const messages = this.props.messages.slice();
    // messages.reverse();

    return (
      <Panel className="panelHeading">
        <Panel.Heading>
          <Panel.Title componentClass="h2">
            Messages
            <Button className="pull-right zeropadding" bsStyle="link" type="submit" onClick={this.props.clearMessages}>
              Clear
            </Button>
          </Panel.Title>
        </Panel.Heading>

        <ListGroup bsClass="messagesContainer">
          {messages
            .reverse()
            .slice(0, 50)
            .map(m => (
              <ListGroupItem onClick={this.copyToClipboard} ref={(messageItem) => this.messageItem = messageItem} key={m.id}>{m.message}</ListGroupItem>
            ))}
        </ListGroup>
      </Panel>
    );
  }
}

export default MessageArea;
