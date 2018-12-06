import React from "react";
import { Modal, Button } from "react-bootstrap";

class Prompt extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      show: props.show
    };
  }

  handleHide = () => {
    console.log("HandlHide");
    this.props.togglePrompt();
    this.setState({ show: false, showPrompt: false });
  };

  handleAction = () => {
    this.props.action();
  };

  render() {
    return (
      <Modal bsSize="large"
        show={this.props.show}
        onHide={this.props.togglePrompt}
        container={this}
        aria-labelledby="contained-modal-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title">
            {this.props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{this.props.children()}</Modal.Body>
        {this.props.showButtons && (
          <Modal.Footer>
            <Button bsStyle="danger" onClick={this.handleAction}>
              {this.props.actionTitle}
            </Button>
            <Button onClick={this.props.togglePrompt}>Close</Button>
          </Modal.Footer>
        )}
      </Modal>
    );
  }
}

export default Prompt;
