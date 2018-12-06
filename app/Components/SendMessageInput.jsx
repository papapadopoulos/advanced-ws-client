import React from "react";
import {
  ControlLabel,
  FormControl,
  Button,
  Grid,
  Row,
  Col
} from "react-bootstrap";

const SendMessageInput = ({
  handleMessageSend,
  handleChange,
  inputMessage,
  sendButtonDisabled
}) => {
  return (
    <form onSubmit={handleMessageSend}>
      <Grid>
        <Row>
          <Col xs={11} md={4} lg={7}>
            <ControlLabel>Send Message</ControlLabel>
            <FormControl
              onChange={handleChange}
              name="inputMessage"
              componentClass="textarea"
              placeholder="Send..."
              value={inputMessage}
            />
          </Col>
          <Col className="stick-bot" xs={1} md={1} lg={1}>
            <Button className="pull-down" disabled={sendButtonDisabled} bsStyle="primary" type="submit">
              Send
            </Button>
          </Col>
        </Row>
      </Grid>
    </form>
  );
};

export default SendMessageInput;
