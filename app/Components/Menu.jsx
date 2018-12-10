import React from "react";
import Prompt from "./Modal/Prompt";
import ConnectionsForm from "./ConnectionsForm";
import EditForm from "./EditForm";

class Menu extends React.Component {
  state = {
    connection: "",
    template: ""
  };
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.setState({
      savedConnections: this.props.savedConnections,
      templates: this.props.templates
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.savedConnections !== this.props.savedConnections) {
      this.setState({ savedConnections: this.props.savedConnections });
    }
    if (prevProps.templates !== this.props.templates) {
      this.setState({ templates: this.props.templates });
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  editConnection = connection => {
    this.setState({
      connection: connection,
      nowEditing: connection,
      editType: "connection"
    });
  };

  editTemplate = template => {
    this.setState({
      template: template,
      nowEditing: template,
      editType: "template"
    });
  };

  changeEditType = event => {
    this.setState({ editType: event.target.name });
  };

  saveOrEdit = event => {
    event.preventDefault();
    let {
      nowEditing,
      connection,
      savedConnections,
      editType,
      templates,
      template
    } = this.state;
    if (editType === "connection") {
      if (savedConnections.indexOf(nowEditing) === -1) {
        savedConnections.push(connection);
      } else {
        savedConnections[savedConnections.indexOf(nowEditing)] = connection;
      }
      localStorage.setItem(
        "savedConnections",
        JSON.stringify(savedConnections)
      );
      nowEditing = "";
      connection = "";
      this.setState({ savedConnections, nowEditing, connection });
    } else {
      if (templates.indexOf(nowEditing) === -1) {
        templates.push(template);
      } else {
        templates[templates.indexOf(nowEditing)] = template;
      }
      localStorage.setItem("templates", JSON.stringify(templates));
      nowEditing = "";
      template = "";
      this.setState({ templates, nowEditing, template });
    }
  };

  handleDeleteSavedUrl = event => {
    event.preventDefault();
    const { savedConnections } = this.state;
    savedConnections.splice(savedConnections.indexOf(event.target.value), 1);
    this.setState({ savedConnections });
    localStorage.setItem("savedConnections", JSON.stringify(savedConnections));
    console.log("DELETE" + event.target.value);
  };

  render() {
    const { connection, savedConnections, template, templates } = this.state;

    return (
      <Prompt
        showButtons={false}
        show={this.props.showMenu}
        togglePrompt={() => this.props.toggleShowMenu()}
        title={"Editing"}
      >
        {() => (
          <>
            <EditForm
              item={connection}
              itemTitle="connection"
              handleChange={this.handleChange}
              itemList={savedConnections}
              selectItem={this.editConnection}
              saveOrEdit={this.saveOrEdit}
              title="Saved Connections"
              changeEditType={this.changeEditType}
            />
            <hr />
            <EditForm
              title="Message Templates"
              item={template}
              itemTitle="template"
              handleChange={this.handleChange}
              itemList={templates}
              selectItem={this.editTemplate}
              saveOrEdit={this.saveOrEdit}
              changeEditType={this.changeEditType}
            />
          </>
        )}
      </Prompt>
    );
  }
}

export default Menu;
