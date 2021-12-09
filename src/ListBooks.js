import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onMoveBook: PropTypes.func.isRequired
  }
  
  render() {
    return (
      <ol className="books-grid">
        {this.props.books && this.props.books.map((book) => (
          <li key={book.id}>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("' + book.imageLinks.smallThumbnail + '")' }}></div>
              <div className="book-shelf-changer">
                <select value={book.shelf ? book.shelf : "none"} onChange={(event) => {this.props.onMoveBook(book, event.target.value)}}>
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading" onClick={this.onMoveBook}>Currently Reading</option>
                  <option value="wantToRead" onClick={this.onMoveBook}>Want to Read</option>
                  <option value="read" onClick={this.onMoveBook}>Read</option>
                  <option value="none" onClick={this.onMoveBook}>None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors && book.authors.join(", ")}</div>
          </div>
        </li>
        ))}
      </ol>
    )
  }
}

export default ListBooks