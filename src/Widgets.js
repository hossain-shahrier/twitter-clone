import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";
function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="search twitter" type="text"></input>
      </div>
      <div className="widgets__widgetContainer">
        <h3>What's happaning</h3>
        <TwitterTweetEmbed tweetId={"1313503909961441281"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="shahrier Hossain"
          option={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://www.facebook.com/profile.php?id=100009906885262"}
          option={{ text: "#reactJs is Awesome", via: "HossainShahrier" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
