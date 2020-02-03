import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Col, Row, Image, Card} from 'react-bootstrap';
import SaveBookButton from '../SaveBookButton';

class BookList extends Component {
  render () {
    return (
      <Row className="mb-4">
        <Col xs={2}>
          <Image src={this.props.thumbnail} thumbnail />
        </Col>
        <Col>
          <Card>
            <Card.Header as="h5">{this.props.title}</Card.Header>
            <Card.Body>
              <Card.Title>{this.props.authors}</Card.Title>
              <Card.Text>
                {this.props.description}
              </Card.Text>
              <Button variant="secondary" href={this.props.link} className="mr-3" target="_blank">View Book</Button>
              <SaveBookButton
                title={this.props.title}
                authors={this.props.authors}
                description={this.props.description}
                link={this.props.link}
                thumbnail={this.props.thumbnail}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default BookList;