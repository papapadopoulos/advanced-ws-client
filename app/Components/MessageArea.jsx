import React, { useRef } from "react";
import { Panel, ListGroup, ListGroupItem, Button } from "react-bootstrap";

class MessageArea extends React.Component {
  constructor() {
    super();
    this.messageItem = React.createRef();
  }

  copyToClipboard = e => {
    const textField = document.createElement("textarea");
    textField.innerText = e.target.firstChild.data;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  render() {
    const messages = this.props.messages.slice();
    const { url, disconnected } = this.props;
    // messages.reverse();

    return (
      <Panel className="panelHeading">
        <Panel.Heading>
          <Panel.Title componentClass="h2">
            Messages
            <small className="align-center">
              {!disconnected ? "Connected to: " + url : "Disconnected"}
            </small>
            <Button
              className="pull-right zeropadding"
              bsStyle="link"
              type="submit"
              onClick={this.props.clearMessages}
            >
              Clear
            </Button>
          </Panel.Title>
        </Panel.Heading>

        <ListGroup bsClass="messagesContainer">
          {messages
            .reverse()
            .slice(0, 50)
            .map(m => (
              <ListGroupItem
                onClick={this.copyToClipboard}
                ref={this.messageItem}
                key={m.id}
              >
                {m.message}
              </ListGroupItem>
            ))}
        </ListGroup>
      </Panel>
    );
  }
}

export default MessageArea;
