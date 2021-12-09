import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import ListBooks from './ListBooks'

class SearchBooks extends Component {
  static propTypes = {
    allbooks: PropTypes.array.isRequired,
    query: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired,
    onMoveBook: PropTypes.func.isRequired,
    shelfs: PropTypes.object.isRequired
  }
  
  render() {
    return (
        <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input 
                  type="text" 
                  placeholder="Search by title or author"
                  value={this.props.query}
                  onChange={(event) => this.props.onSearch(event.target.value)}
                />

              </div>
            </div>
            <div className="search-books-results">
              <ListBooks books={this.props.allbooks} onMoveBook={this.props.onMoveBook} shelfs={this.props.shelfs}/>
            </div>
          </div>
    )
  }
}

export default SearchBooks