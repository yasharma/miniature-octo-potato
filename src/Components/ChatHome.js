import React, { Component } from 'react';

class ChatHome extends Component {

  messageItems(){
    var ul_style = {
      listStyleType: 'none',
      padding: '2rem'
    }

    const listItems = this.props.messages.map((item) =>
      <li className="Message" key={"item-" + item.id}>
        <strong>{item.sender}</strong>-{item.text}
      </li>
    );
    return <ul style={ul_style}>{listItems}</ul>;
  }

  render() {
    return (
      <div className="Chathome">
      
          {this.messageItems()}
     
      </div>
    );
  }
}

export default ChatHome;
