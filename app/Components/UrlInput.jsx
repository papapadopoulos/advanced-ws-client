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
  Clearfix
} from "react-bootstrap";
import { FieldGroup } from "./FieldGroup";

const UrlInput = ({
  buttonText,
  handleConnectSubmit,
  handleChange,
  url,
  saveConnection,
  savedConnections,
  copySavedUrl,
  handleDeleteSavedUrl,
  connectButtonClass
}) => {
  const popoverFocus = (
    <Popover id="popover-trigger-focus">
      Select item and right click to delete!
    </Popover>
  );

  return (
    <form onSubmit={handleConnectSubmit}>
      <Grid>
        <Row>
          <Col md={5} lg={5} xs={10}>
            <FieldGroup
              id="url"
              name="url"
              type="text"
              placeholder="ws://..."
              value={url}
              onChange={handleChange}
            />
          </Col>
          <Col md={2} lg={2} xs={2}>
            <Button className={"pull-down pull-left"} bsStyle={connectButtonClass} type="submit">
              {buttonText}
            </Button>
          </Col>
          {/* <Clearfix visibleSmBlock /> */}
          <Col md={4} lg={4} xs={10}>
            <ControlLabel>or select from saved</ControlLabel>
            <OverlayTrigger
              trigger="focus"
              placement="top"
              overlay={popoverFocus}
            >
              <FormControl
                componentClass="select"
                placeholder="select"
                onChange={copySavedUrl}
                onContextMenu={handleDeleteSavedUrl}
              >
                {savedConnections &&
                  savedConnections.map(s => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
              </FormControl>
            </OverlayTrigger>
          </Col>
          
          <Col md={1} lg={1} xs={2}>
            <Button
              className="pull-down"
              bsStyle="info"
              onClick={saveConnection}
            >
              Save
            </Button>
          </Col>
        </Row>
      </Grid>
    </form>
  );
};

export default UrlInput;
