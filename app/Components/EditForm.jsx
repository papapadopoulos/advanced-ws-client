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

const EditForm = ({
  handleChange,
  title,
  item,
  itemTitle,
  itemList,
  selectItem,
  saveOrEdit,
  changeEditType,
  handleDeleteItem
}) => {
  const popoverFocus = (
    <Popover id="popover-trigger-focus">
      Right click to delete!
    </Popover>
  );
  return (
    <>
      <h4>{title}</h4>
      <ListGroup bsClass="connectionsContainer">
        {itemList &&
          itemList.map(s => (
            <OverlayTrigger
              key={s}
              trigger={["hover", "focus"]}
              placement="top"
              overlay={popoverFocus}
            >
              <ListGroupItem
                onClick={e => selectItem(e, s)}
                onContextMenu={e => handleDeleteItem(e, itemTitle)}
              >
                {s}
              </ListGroupItem>
            </OverlayTrigger>
          ))}
      </ListGroup>

      {
        <form onSubmit={saveOrEdit}>
          <Grid>
            <Row>
              <Col xs={8} lg={8}>
                <FieldGroup
                  id={itemTitle}
                  name={itemTitle}
                  type="text"
                  label={"Edit " + itemTitle}
                  value={item}
                  onChange={handleChange}
                  onFocus={changeEditType}
                />
              </Col>
              <Col xs={1} lg={1}>
                <Button className="pull-down" bsStyle="primary" type="submit">
                  Save
                </Button>
              </Col>
            </Row>
          </Grid>
        </form>
      }
    </>
  );
};

export default EditForm;
