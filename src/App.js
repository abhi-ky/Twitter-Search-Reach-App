
import React, { Component } from 'react';
import {BrowserRouter as Router  } from 'react-router-dom';
import { Route } from 'react-router-dom';
import {Link }from 'react-router-dom';
import './App.scss';
import twitterIcon from  './assets/images/twitter_icon.png';
import SearchResult from './components/SearchResult/SearchResult';
import SearchPage from './components/SearchPage/SearchPage';
import UserMentionedTweets from './components/UserMentionedTweet/UserMentionedTweet'
import Axios from 'axios';
import * as actionType from './store/actions';
import { connect } from 'react-redux';

class App extends Component {

  state = {
    search : '',
    data : [],
    localData  :  ''
  }
  componentDidMount(){
  
  }
  inputSearchHandler = (event) =>{
    this.setState({
      [event.target.name] : event.target.value  
    })
  }

  getSearchVal = ( value ) =>{
    this.setState({ searchFor : value })
    return 0
  }

  render(){

    return (
      <Router>
        <div>
          <Route exact = { true }  path = { "/" } component = { ()=>< SearchPage /> } />
          <Route exact = { true } path = { "/searchResult" }          component = { ()=> <SearchResult  /> } />
          <Route exact = { true } path = { "/userMentionedTweets" }          component = { ()=> <UserMentionedTweets propUserVal={ this.props.storeUserVal}  /> } />
        </div>
      </Router>
    );
  }



}

const mapStateToProps = ( state ) =>{
  return {
      storeSearchVal : state.appRed.SEARCH_VAL,
      storeUserVal : state.appRed.USER_VAL
  }
}
const mapDispatchToProps = dispatch =>{
  return{
    setSearchVal : ( val )=>dispatch( { type : actionType.SET_SEARCH_VAL , data : val }),
    getSearchVal : () => dispatch( { type : actionType.GET_SEARCH_VAL })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;
