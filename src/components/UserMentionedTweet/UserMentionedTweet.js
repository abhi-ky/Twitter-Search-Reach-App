import React, { Component } from 'react';
import axios from 'axios';
// import SearchPage from '../SearchPage/SearchPage';
import UserCard from '../SearchResult/UserCard';
import twitterIcon from '../../assets/images/twitter_icon.png';
import './UserMentionedTweet.scss';
import {Link }from 'react-router-dom';

import * as actionType from '../../store/actions';
import { connect } from 'react-redux';

class UserMentionedTweet extends Component{

    state = {
        data : [],
        usersData : [],
        users : {},
        headerSearch : this.props.storeSearchVal,
    }

    componentDidMount(){
        let userName = this.props.propUserVal

        let url = `http://localhost:5000/hashtags/${userName}`;
        axios.get(url)
        .then( res =>{
          
            let data = res.data
            this.setState({ usersData : data.statuses })
            
          // console.log(res)
        }).catch(err =>{
            console.log(err)
        })
    }
    inputSearchHandler= (event) =>{
      this.setState({ 
        [event.target.name] : event.target.value
      })
    }

    months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

    handleSearchClick= () =>{
      // console.log('search clicked', this.state.headerSearch)
      this.setState({ headerSearch : this.state.headerSearch })
    } 

    render(){
        // console.log( this.props.storeSearchVal )
        
        return(

            <div className='searchResult'>
              <div className='headerbox'>
                <div className='headerContent'>
                <Link to = '/' className='homeClick'>
                  <div className='headerTitle'>TWEET<img id='twitlogo' src={twitterIcon} style={{ height: '52px', width:'64px', paddingLeft: '8px', position:'relative', top:'20px'}} ></img> SEARCH</div>
                  </Link>
                  <input className='inputtext' name='headerSearch' onChange={ this.inputSearchHandler } type='text' value={this.state.headerSearch} id='search' />
                  <Link to = '/searchResult' className='headerSearchB'>
                    <button type='button' id='searchButton' 
                    // onClick={ () => this.props.searchVal(this.state.search) }
                    onClick={ () => this.props.setSearchVal( this.state.headerSearch) }
                     value='SEARCH' >SEARCH</button>
                  </Link> 

                </div>
              </div>

              <div className='cardDisplay'>
                {
                  this.state.usersData.map( item =>{
                    let date = new Date(item.created_at);
                    let newDate = date.getDate()
                    let mon = this.months[date.getMonth()]
                    let year = date.getFullYear()
                    let newCreated = mon+' '+newDate+', '+year
                    return <UserCard 
                    key = {item.id}
                    profileImage = { item.profile_image_url || item.user.profile_image_url_https }
                    name = { item.name || item.user.name}
                    username= { item.screen_name || item.user.screen_name }
                    description = {item.description || item.text }
                    created  = { newCreated }
                    retweetCount = { item.retweet_count }
                    />
                  })
                }
              </div>
            </div>
        )
    }
}


const mapStateToProps = ( state ) =>{
  return {
      storeSearchVal : state.appRed.SEARCH_VAL
  }
}
const mapDispatchToProps = dispatch =>{
  return{
    setSearchVal : ( val )=>dispatch( { type : actionType.SET_SEARCH_VAL , data : val }),
    getSearchVal : () => dispatch( { type : actionType.GET_SEARCH_VAL })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMentionedTweet);