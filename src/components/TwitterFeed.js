import React from 'react';
import Tweet from './Tweet.js';

//const TwitterFeed = () => <div />;
const TwitterFeed = props => {
  let data = props.data.map(user => {

    let replyIcon = () => alert('reply')
    let retweetIcon = () => alert('retweet')
    let likeIcon = () => alert('like')
    let moreIcon = () => alert('favorite')

    return (
      <Tweet
        favorite = {user.favorited}
        retweeted = {user.retweeted}
        key = {user.id_str}
        text = {user.text}
        name = {user.user.name}
        profilePicture = {user.user.profile_image_url}
        screenName = {user.user.screen_name}
        retweetCount = {user.retweet_count}
        favoriteCount = {user.favorite_count}
        replyIcon = {replyIcon}
        retweetIcon = {retweetIcon}
        likeIcon = {likeIcon}
        moreIcon = {moreIcon}
      />
    );
  });
  return(
    <ul>
      {data}
    </ul>
  );
};

export default TwitterFeed;
