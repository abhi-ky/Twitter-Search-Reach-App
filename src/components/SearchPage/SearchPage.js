import React, { Component } from 'react';

import twitterIcon from '../../assets/images/twitter_icon.png';
import './SearchPage.scss';
import {Link }from 'react-router-dom';
import Axios from 'axios';
import * as actionType from '../../store/actions';
import { connect } from 'react-redux';


class SearchPage extends Component { 

    state = {
      localData : {}
    }
    inputSearchHandler = (event) =>{
        this.setState({
          [event.target.name] : event.target.value  
        })
    }

    render(){
        return(
        <div className="App">
          <div className='box'>
            <div className='title'>TWEET<img src={twitterIcon} ></img> SEARCH</div>
            <input className='inputField' name='search' placeholder='Name or HashTag' onChange={ this.inputSearchHandler } type='text' value={this.state.search} id='search' />
            <Link to = '/searchResult' style={{ textDecoration:'none'}} className='searchB'>
              <button type='button' id='searchButton' onClick={ () => this.props.setSearchVal(this.state.search) } value='SEARCH' ><strong>SEARCH</strong></button>
            </Link> 
          </div>
        </div>
        )
    }

    
}

const mapDispatchToProps = dispatch =>{
  return{
    setSearchVal : ( val )=>dispatch( { type : actionType.SET_SEARCH_VAL , data : val }),
   
  }
}

export default connect(null, mapDispatchToProps)(SearchPage);
