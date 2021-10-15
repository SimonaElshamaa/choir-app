import React, {useState} from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Poppers from "@material-ui/core/Popper";
import Divider from "@material-ui/core/Divider";

// core components
import Button from "../../../components/CustomButtons/Button.js";

import styles from "../../../assets/jss/material-dashboard-react/components/headerLinksStyle.js";
import {
  SATURDAY,
  SUNDAY,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY
} from "../../../constants/app/groups";

const useStyles = makeStyles(styles);

export default function GroupsList(props) {
  const classes = useStyles();
  const [openGroupsList, setOpenGroupsList] = useState(null);

  const week = [
    {name:"Saturday", id:SATURDAY},
    {name:"Sunday", id:SUNDAY},
    {name:"Monday", id:MONDAY},
    {name:"Tuesday", id:TUESDAY},
    {name:"Wednesday", id:WEDNESDAY},
    {name:"Thuresday", id:THURSDAY},
    {name:"Friday", id:FRIDAY},
  ];
  const handleClickGroupSelector = (event) => {
    if (openGroupsList && openGroupsList.contains(event.target)) {
      setOpenGroupsList(null);
    } else {
      setOpenGroupsList(event.currentTarget);
    }
  };
  const handleCloseGroupSelector = (group = null) => () => {
    props.setGroupId(group);
    setOpenGroupsList(null);
  };

  const groupName =()=>{
    const name= week.find((day)=>day.id === props.groupId)?.name;
    return name?`: ${name}`:"";
  };

  return (
    <div>
      <div className={classes.manager}>
      <Button 
      color="primary"
      aria-owns={openGroupsList ? "profile-menu-list-grow" : null}
      aria-haspopup="true"
      onClick={handleClickGroupSelector}
      >
        {`group${groupName()}`}
      </Button>
         <Poppers
          open={Boolean(openGroupsList)}
          anchorEl={openGroupsList}
          transition
          disablePortal
          className={
            classNames({ [classes.popperClose]: !openGroupsList }) +
            " " +
            classes.popperNav
          }
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="profile-menu-list-grow"
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleCloseGroupSelector(null)}>
                  <MenuList role="menu">
                    <MenuItem
                      onClick={handleCloseGroupSelector(WEDNESDAY)}
                      className={classes.dropdownItem}
                    >
                      Wednesday
                    </MenuItem>
                    <MenuItem
                      onClick={handleCloseGroupSelector(SATURDAY)}
                      className={classes.dropdownItem}
                    >
                      Saterday
                    </MenuItem>
                    <Divider light />
                    <MenuItem
                      onClick={handleCloseGroupSelector(SUNDAY)}
                      className={classes.dropdownItem}
                    >
                      Sunday
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Poppers>
      </div>
    </div>
  );
}

GroupsList.defaultProps = {
  groupId:null
};

GroupsList.propTypes = {
  setGroupId: PropTypes.func.isRequired,
  groupId: PropTypes.number,
};
