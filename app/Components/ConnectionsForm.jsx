import React from "react";
import {
  Button,
  Grid,
  Row,
  Col,
  FormControl,
  ControlLabel,
  OverlayTrigger,
  Popover,
  Panel,
  ListGroup,
  ListGroupItem
} from "react-bootstrap";
import { FieldGroup } from "./FieldGroup";

const ConnectionsForm = ({
  handleChange,
  url,
  savedConnections,
  editConnection,
  saveOrEdit,
  templateMessage,
  saveTemplateMessage,
  fieldName,
  templates
}) => {
  return (
    <>
      <h4>Saved Connections</h4>
      <ListGroup bsClass="connectionsContainer">
        {savedConnections &&
          savedConnections.map(s => (
            <ListGroupItem key={s} value={s} onClick={() => editConnection(s)}>
              {s}
            </ListGroupItem>
          ))}
      </ListGroup>

      {url != "" && (
        <form onSubmit={saveOrEdit}>
          <Grid>
            <Row>
              <Col md={6} xs={8} s={5} lg={5}>
                <FieldGroup
                  id="url"
                  name="url"
                  type="text"
                  label="Edit URL"
                  placeholder="ws://..."
                  value={url}
                  onChange={handleChange}
                />
              </Col>
              <Col>
                <Button className="pull-down" bsStyle="primary" type="submit">
                  Edit
                </Button>
              </Col>
            </Row>
          </Grid>
        </form>
      )}

      <form onSubmit={saveTemplateMessage}>
        <Grid>
          <Row>
            <Col md={6} xs={8} s={5} lg={5}>
              <FieldGroup
                id="templateMessage"
                name="templateMessage"
                type="text"
                label="Enter Message..."
                placeholder="..."
                value={templateMessage}
                onChange={handleChange}
              />
            </Col>
            <Col>
              <Button className="pull-down" bsStyle="primary" type="submit">
                Save
              </Button>
            </Col>
          </Row>
        </Grid>
      </form>
    </>
  );
};

export default ConnectionsForm;
