import React, { Component } from 'react';
import { Overlay, Content } from './Modal.styled';

export class Modal extends Component {
  render() {
    return (
      <Overlay>
        <Content>
          <img
            src={this.props.modalData.largeImageURL}
            alt={this.props.modalData.tags}
          />
        </Content>
      </Overlay>
    );
  }
}
