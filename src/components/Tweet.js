import React from 'react';

const Tweet = props => {
  let favoriteClassName;

  if (props.favorite) {
    favoriteClassName = "red-text";
    console.log(props.favorited);
  } else {
    favoriteClassName = "";
  }

  let retweetClassName;

  if (props.retweeted) {
    retweetClassName = "red-text";
  } else {
    retweetClassName = "";
  }
  
  return (
    <div className = "row box">
      <div className = "small-8 small-centered columns tweetbox">
        <div className = "row allContent">
          <div className = "small-2 columns">
            <img src={props.profilePicture}></img>
          </div>
          <div className = "small-10 columns">
            <div className = "row">
              <div className = "small-10 end columns">
                <ul>
                  <li>
                    {props.name}
                  </li>
                  <li>
                    {props.screenName}
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="small-12 columns">
                <p className="tweettext">{props.text}</p>
              </div>
            </div>
              <div className="row">
                <div className = "small-8 columns">
                  <ul>
                    <li>
                      <i className="fa fa-reply" aria-hidden="true" onClick={props.replyIcon}></i>
                    </li>
                    <li>
                      <div className={retweetClassName}>
                        <i className="fa fa-retweet" aria-hidden="true" onClick={props.retweetIcon}></i>
                      </div>
                    </li>
                    <li>
                      <div className={favoriteClassName}>
                        <i className="fa fa-heart" aria-hidden="true" onClick={props.likeIcon}></i>
                      </div>
                    </li>
                  </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
