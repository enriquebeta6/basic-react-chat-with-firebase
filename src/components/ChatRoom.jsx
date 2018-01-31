import React from 'react';

import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';


export default class ChatRoom extends React.Component {

  constructor(){
    super();

    this.state = {
      message: '',
      messages: [
        // {id: 0, text: 'texto 1'},
        // {id: 1, text: 'texto 2'},
        // {id: 2, text: 'texto 3'}
      ]
    }
  }

  updateMessage = e => {
    this.setState({
      message: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();

    const { message } = this.state;
    const newMessage = {
      id: this.state.messages.length,
      text: message
    };

    //messages.push(newMessage);
    this.setState({
      //messages,
      message: ''
    });

    window.firebase.database().ref(`messages/${newMessage.id}`)
      .set(newMessage);
  }

  componentDidMount() {
    window.firebase.database().ref('messages/').on('value', snap => {
      const currentMessages = snap.val();

      if (currentMessages !== null) {
        this.setState({
          messages: currentMessages
        });
      }
    });
  }

  render() {
    const { messages } = this.state;
    const messagesList = messages.map(message => {
      return <li key={message.id} >{message.text}</li>
    })

    return (
      <div>
        <ul>
          {messagesList}
        </ul>

        <form onSubmit={this.handleSubmit} >
          <TextField 
            type="text"
            value={this.state.message}
            onChange={this.updateMessage}
          />

          <Button type="submit">
            Send
          </Button>
        </form>
      </div>
    )
  }
}