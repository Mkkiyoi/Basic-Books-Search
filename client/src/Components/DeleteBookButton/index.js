import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import API from '../../utils/API';

class DeleteBookButton extends Component {

  deleteBook = (id) => {
    API.deleteBook(id).then(() => {
      window.location.reload();
    }).catch((error)=> {
      console.log(this.props)
      console.log(error);
    });
  };

  render() {
    return (
      <Button variant="secondary" onClick={() => {this.deleteBook(this.props.key)}}>Delete Book</Button>
    );
  }
}

export default DeleteBookButton;