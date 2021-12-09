import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

class MyReads extends Component {
  static propTypes = {
    shelfs: PropTypes.object.isRequired,
    onMoveBook: PropTypes.func.isRequired
  }
  
  render() {
    return (
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf title="Currently Reading" books={this.props.shelfs["currentlyReading"]} onMoveBook={this.props.onMoveBook} />
                <BookShelf title="Want to Read" books={this.props.shelfs["wantToRead"]} onMoveBook={this.props.onMoveBook} />
                <BookShelf title="Read" books={this.props.shelfs["read"]} onMoveBook={this.props.onMoveBook} />
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
    )
  }
}

export default MyReads