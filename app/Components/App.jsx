import React from "react";
import UrlInput from "./UrlInput";
import SendMessageInput from "./SendMessageInput";
import MessageArea from "./MessageArea";
import KeepAlive from "./KeepAlive";
import { Grid, Row, Col } from "react-bootstrap";
import NavigationBar from "./NavigationBar";
import Menu from "./Menu";
import TemplateArea from "./TemplateArea.jsx";

class App extends React.Component {
  state = {
    message: "no message",
    kaMessage: "",
    url: "ws://echo.websocket.org",
    connectButtonText: "Connect",
    connectButtonClass: "primary",
    sendButtonDisabled: true,
    responseMessages: [],
    showMenu: false,
    savedConnections:
      JSON.parse(localStorage.getItem("savedConnections")) || [],
    templates: JSON.parse(localStorage.getItem("templates")) || []
  };
  componentDidMount() {
    // this.setState(ws);
    // this.state.ws.send("OK!");
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleKAChange = event => {
    event.preventDefault();
    const kaInterval = setInterval(() => {
      this.state.ws.send(this.state.kaMessage);
    }, 3000);
    this.setState({ kaInterval });
  };

  saveConnection = () => {
    var savedConn = JSON.parse(localStorage.getItem("savedConnections"));
    if (savedConn == null || savedConn == undefined) {
      savedConn = [];
    }
    savedConn.indexOf(this.state.url) == -1 && savedConn.push(this.state.url);
    localStorage.setItem("savedConnections", JSON.stringify(savedConn));
    this.setState({ savedConnections: savedConn });
  };

  copySavedUrl = event => {
    console.log(event.target.value);
    this.setState({ url: event.target.value });
  };

  handleDeleteSavedUrl = event => {
    event.preventDefault();
    const { savedConnections } = this.state;
    savedConnections.splice(savedConnections.indexOf(event.target.value), 1);
    this.setState({ savedConnections });
    localStorage.setItem("savedConnections", JSON.stringify(savedConnections));
    console.log("DELETE" + event.target.value);
  };

  handleConnectSubmit = event => {
    var { ws, sendButtonDisabled, kaInterval } = this.state;
    let connectButtonText, connectButtonClass;
    event.preventDefault();

    if (ws == null || ws == undefined || ws.readyState == 0) {
      ws = new WebSocket(this.state.url);
      this.registerWsHandlers(ws);
    } else {
      ws.close();
    }

    this.setState({
      ws,
      connectButtonText,
      connectButtonClass,
      sendButtonDisabled,
      kaInterval
    });
  };

  handleMessageSend = event => {
    event.preventDefault();
    var { ws, inputMessage } = this.state;
    ws != null && ws.readyState != 0 && ws.send(inputMessage);
  };

  registerWsHandlers = ws => {
    var { sendButtonDisabled, kaInterval } = this.state;
    let connectButtonText, connectButtonClass;
    ws.onopen = event => {
      console.log("WS opened");
      connectButtonClass = "danger";
      connectButtonText = "Disconnect";
      sendButtonDisabled = !sendButtonDisabled;
      kaInterval && clearInterval(kaInterval);
      this.setState({
        ws,
        connectButtonText,
        connectButtonClass,
        sendButtonDisabled,
        kaInterval
      });
    };
    ws.onmessage = message => {
      const { responseMessages } = this.state;
      var responseMessage = {
        id: Math.random()
          .toString(36)
          .substring(7),
        message: message.data
      };
      responseMessages.push(responseMessage);
      this.setState({ responseMessages });
    };

    ws.onclose = event => {
      console.log("WS closed");
      ws = null;
      sendButtonDisabled = !sendButtonDisabled;
      connectButtonText = "Connect";
      connectButtonClass = "primary";
      kaInterval && clearInterval(kaInterval);
      this.setState({
        ws,
        connectButtonText,
        connectButtonClass,
        sendButtonDisabled,
        kaInterval
      });
    };
  };

  clearMessages = event => {
    var { responseMessages } = this.state;
    responseMessages = [];
    this.setState({ responseMessages });
  };

  toggleShowMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    });
  };

  copyTemplate = template => {
    this.setState({ inputMessage: template });
  };

  render() {
    const {
      message,
      url,
      inputMessage,
      responseMessages,
      savedConnections,
      kaMessage,
      connectButtonText,
      connectButtonClass,
      sendButtonDisabled,
      showMenu,
      templates
    } = this.state;
    return (
      <>
        <NavigationBar toggleShowMenu={this.toggleShowMenu} />
        <Menu
          showMenu={showMenu}
          toggleShowMenu={this.toggleShowMenu}
          savedConnections={savedConnections}
          templates={templates}
        />
        <div id="container">
          <Grid>
            <Row>
              <Col sm={12} lg={12}>
                <UrlInput
                  buttonText={connectButtonText}
                  handleChange={this.handleChange}
                  handleConnectSubmit={this.handleConnectSubmit}
                  saveConnection={this.saveConnection}
                  savedConnections={savedConnections}
                  copySavedUrl={this.copySavedUrl}
                  handleDeleteSavedUrl={this.handleDeleteSavedUrl}
                  connectButtonClass={connectButtonClass}
                  url={url}
                />{" "}
              </Col>
            </Row>
            <Row>
              <Col sm={11} md={6} lg={8}>
                <SendMessageInput
                  handleChange={this.handleChange}
                  handleMessageSend={this.handleMessageSend}
                  inputMessage={inputMessage}
                  sendButtonDisabled={sendButtonDisabled}
                />
                <KeepAlive
                  handleKAChange={this.handleKAChange}
                  handleChange={this.handleChange}
                  kaMessage={kaMessage}
                  sendButtonDisabled={sendButtonDisabled}
                />
              </Col>

              <Col sm={11} md={6} lg={4}>
                <TemplateArea
                  templates={templates}
                  copyTemplate={this.copyTemplate}
                />
              </Col>
            </Row>
            <Row>
              <Col sm={12} lg={12}>
                <MessageArea
                  messages={responseMessages}
                  clearMessages={this.clearMessages}
                  disconnected={sendButtonDisabled}
                  url={url}
                />
              </Col>
            </Row>
          </Grid>
        </div>
      </>
    );
  }
}

export default App;
