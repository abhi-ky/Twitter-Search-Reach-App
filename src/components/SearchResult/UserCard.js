import React from 'react';
import './UserCard.scss';
import RetweetIcon from '../../assets/images/retweet.png'
import CommentIcon from '../../assets/images/comment.png'
import {Link }from 'react-router-dom';
import * as actionType from '../../store/actions';
import { connect } from 'react-redux';


const searchCard = (props) =>{
    let len = 163;
    let desc ;
    let str = props.description || ''
    // console.log(str)
    if( str.length > len ){
        desc = str.substring(0,len)+'...'
    }
    desc = props.description
    return(
        <Link to = '/userMentionedTweets' className='clickcard' onClick={ () => props.setUserVal('@'+props.username) }>
            <div className='cardbox'>
                <div className='contents'>
                    <div className='info'>
                        <img src={ props.profileImage }></img>
                        <div className='identity'>
                            <div className='name'>
                                <strong>{props.name}</strong>
                            </div>
                            <div className='username'>
                                @{props.username}
                            </div>
                        </div>
                        <div className='created'>
                            { props.created}
                        </div>
                    </div>
                    <div className='textbox'>
                        <p> { desc } </p>
                    </div>

                    <div className='statistics'>
                        {/* <div className='comments' >
                            <img src={CommentIcon}></img>
                            <div>5.3k</div>
                        </div> */}
                        {
                            props.retweetCount ? 
                        <div className='retweets' >
                            <img src={RetweetIcon}></img>
                        <div>{ props.retweetCount }</div>
                        </div> :
                        <div></div>
                        }

                    </div>
                </div>
            
            </div>
        </Link>
        
    )
}

const mapDispatchToProps = dispatch =>{
    return{
      setUserVal : ( val )=>dispatch( { type : actionType.SET_USER_VAL , data : val }),
    }
  }
  
  export default connect(null, mapDispatchToProps)(searchCard);
// export default searchCard;