import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import API from '../../utils/API';

class DeleteBookButton extends Component {

  deleteBook = (book) => {
    API.deleteBook(book.id).then(() => {
      window.location.reload();
    }).catch((error)=> {
      console.log(error);
    });
  };

  render() {
    return (
      <Button variant="secondary" onClick={() => {this.deleteBook(this.props)}}>Delete Book</Button>
    );
  }
}

export default DeleteBookButton;