import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import API from '../../utils/API';

class SaveBookButton extends Component {

  state = {
    saved: false
  }

  saveBook = (book) => {
    let dbBook = {
      title: book.title,
      authors: book.author,
      description: book.description,
      image: book.thumbnail,
      link: book.link
    }
    API.saveBook(dbBook).then(() => {
      this.setState({
        save: true
      });
    }).catch((error)=> {
      console.log(error);
    })
  };

  render() {
    return (
      <>
        {this.state.saved ?
          (<Button variant="success">Saved!</Button>)
          :
          (<Button variant="secondary" 
            onClick={() => {
              this.saveBook(this.props)
            }}
          >
            Save Book
          </Button>)
        }
      </>
    );
  }
}

export default SaveBookButton;