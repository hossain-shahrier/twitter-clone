import { Button } from "@material-ui/core";
import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar } from "@material-ui/core";
import db from "./Firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Shahrier Hossain",
      userName: "Hossain_shahrier",
      varified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "https://pbs.twimg.com/profile_images/1313507874652344320/Jo7lvPyv_400x400.jpg"
    });
    setTweetImage("");
    setTweetMessage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="what's happening?"
            type="text"
          ></input>
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional : Enter Your URL"
          type="text"
        ></input>
        <Button
          type="submit"
          onClick={sendTweet}
          className="tweetbox__tweet__button"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
