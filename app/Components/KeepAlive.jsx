import React from "react";
import { FieldGroup } from "./FieldGroup";
import { Button, Grid, Row, Col } from "react-bootstrap";

const KeepAlive = ({ kaMessage, handleChange, handleKAChange, sendButtonDisabled }) => {
  return (
    <form onSubmit={handleKAChange}>
      <Grid>
        <Row>
          <Col  xs={11} md={4} lg={7}>
            <FieldGroup
              id="kaMessage"
              name="kaMessage"
              type="text"
              label="Enter Keep Alive Message"
              placeholder="ws://..."
              value={kaMessage}
              onChange={handleChange}
            />
          </Col>
          <Col xs={1} md={1} lg={1}>
            <Button className="pull-down" disabled={sendButtonDisabled} bsStyle="primary" type="submit">
              Set
            </Button>
          </Col>
        </Row>
      </Grid>
    </form>
  );
};

export default KeepAlive;
