import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks'
import MyReads from './MyReads'

class BooksApp extends React.Component {
  state = {
    myBooks : [],
    allBooks: [],
    query: '',
    shelfs: {
      "currentlyReading": [],
      "wantToRead": [],
      "read": []
    }
  }

  componentDidMount() {
    this.getMyBooks();
  }

  getMyBooks = () => {
    this.setState(() => ({
      shelfs: {
        "currentlyReading": [],
        "wantToRead": [],
        "read": []
      }
    }))
    BooksAPI.getAll()
    .then((books) => {
        this.setState(() =>({
          myBooks: books
        }))
        
        books.map((book) => {
          let tempShelfs = this.state.shelfs
          tempShelfs[book.shelf] = tempShelfs[book.shelf].concat([book])  
          this.setState(() => ({
            shelfs: tempShelfs
          }))
          return null;
        })
      })
  }

  updateQuery = (query) => {
    this.setState(() => ({
      query
    }))
  }

  moveBook = (book, newShelf) => {
    BooksAPI.update(book, newShelf)
    .then((res) => {
      this.getMyBooks()
    })
    
  }

  search = (query) => {
    this.updateQuery(query)
    BooksAPI.search(query)
    .then((books) => {
      books && books.length > 0 ?
       this.setState(() =>({
        allBooks : books
        }))
        :this.setState(() =>({
          allBooks: []
        }))
      })
  }

  render() {
    const { query } = this.state
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <SearchBooks allbooks={this.state.allBooks} shelfs={this.state.shelfs} query={query} onSearch={this.search} onMoveBook={this.moveBook}/>
        )} />
        <Route exact path="/" render={() =>  (
          <MyReads shelfs={this.state.shelfs} onMoveBook={this.moveBook}/>
        )} />
      </div>
    )
  }
}

export default BooksApp
