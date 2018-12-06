import React from "react";
import { ListGroupItem, ListGroup } from "react-bootstrap";

const TemplateArea = ({ templates, copyTemplate }) => {
  return (
    <ListGroup bsClass="connectionsContainer">
      {templates &&
        templates.map(s => (
          <ListGroupItem key={s} value={s} onClick={() => copyTemplate(s)}>
            {s}
          </ListGroupItem>
        ))}
    </ListGroup>
  );
};

export default TemplateArea;
