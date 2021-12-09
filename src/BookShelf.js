import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ListBooks from './ListBooks'

class BookShelf extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onMoveBook: PropTypes.func.isRequired
  }
  
  render() {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.title}</h2>
            <div className="bookshelf-books">
            <ListBooks books={this.props.books} onMoveBook={this.props.onMoveBook}/>
            </div>
        </div>
    )
  }
}

export default BookShelf