import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";
const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Twitter Logo */}
      <TwitterIcon className="sidebar__twitterIcon"/>
      {/* SIdebarOption */}
      <SidebarOption active Icon={HomeIcon} text="Home" />
      {/* SIdebarOption */}
      <SidebarOption Icon={SearchIcon} text="Explore" />
      {/* SIdebarOption */}
      <SidebarOption Icon={NotificationsIcon} text="Notifications" />
      {/* SIdebarOption */}
      <SidebarOption Icon={MailOutlineIcon} text="Messages" />
      {/* SIdebarOption */}
      <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
      {/* SIdebarOption */}
      <SidebarOption Icon={ListAltIcon} text="Lists" />
      {/* SIdebarOption */}
      <SidebarOption Icon={PermIdentityIcon} text="Profile" />
      {/* SIdebarOption */}
      <SidebarOption Icon={MoreHorizIcon} text="More" />
      {/* Button => tweet */}
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
};

export default Sidebar;
