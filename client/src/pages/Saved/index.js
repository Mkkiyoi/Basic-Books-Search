import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Jumbotron, Container} from 'react-bootstrap';
import API from '../../utils/API';
import BookList from '../../Components/BookList';

class Search extends Component {

  state = {
    books: []
  };

  componentDidMount() {
    API.getBooks().then((result) => {
      this.setState({
        books: result.data
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
            <h1 className="text-center mb-5">Saved Books!</h1>
          </Container>
        </Jumbotron>
      
        {(this.state.books && this.state.books.length > 0) ? 
          <div>
            {this.state.books.map(book => {
              return (
                <div>
                  <BookList 
                    key={book._id}
                    id={book._id}
                    title={book.title}
                    authors={book.authors}
                    description={book.description}
                    link={book.link}
                    thumbnail={book.image}
                    onSaved={true}
                  />
                </div>
              );
            })}
          </div> 
          : 
          <div></div>
        }
      </div>
    );
  }
}

export default Search;

