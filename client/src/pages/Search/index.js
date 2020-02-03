import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button, Jumbotron, Container, Col} from 'react-bootstrap';
import API from '../../utils/API';
import BookList from '../../Components/BookList';

class Search extends Component {

  state = {
    books: [],
    query: ""
  };

  handleInput = event => {
    let { name, value }  = event.target;
    this.setState({
      [name]: value
    });
  };

  searchGoogleBooks = event => {
    event.preventDefault();
    let queryString = this.state.query.split(' ').join('+');
    API.search(queryString).then(result => {
      this.setState({
        books: result.data.items
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <Jumbotron fluid>
          <Container>
            <h1 className="text-center mb-5">Find Books!</h1>
            <Form>
              <Form.Row className="ml-5">
                <Col xs = {{ offset: 3 }}>
                  <Form.Group controlId="search">              
                    <Form.Control type="search" placeholder="Search" name="query" onChange={this.handleInput}/>
                  </Form.Group>
                </Col>
                <Col>
                  <Button variant="secondary" type="submit" onClick={this.searchGoogleBooks}>Submit</Button>
                </Col>
              </Form.Row>
            </Form>
          </Container>
        </Jumbotron>
      
        {(this.state.books && this.state.books.length > 0) ? 
          <div>
            {this.state.books.map(book => {
              return (
                <BookList 
                  key={book.id}
                  title={book.volumeInfo.title}
                  authors={book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : "No Authors Available"}
                  description={book.volumeInfo.description ? book.volumeInfo.description : "No Description Available"}
                  link={book.volumeInfo.infoLink}
                  thumbnail={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "#"}
                />
              );
            })};
          </div> 
          : 
          <div></div>
        }
      </div>
    );
  }
}

export default Search;

