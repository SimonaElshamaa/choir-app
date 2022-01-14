import React, {useState, useEffect} from "react";
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

// core components
import Button from "../../../components/CustomButtons/Button.js";

import styles from "../../../assets/jss/material-dashboard-react/components/headerLinksStyle.js";
import {
  FIRST_PREP_SATURDAY,
  SECOND_PREP_SATURDAY,
  FIRST_PRIMARY_SUNDAY,
  SECOND_PRIMARY_SUNDAY,
  SECONDRY_MONDAY,
  YOUTH_TUESDAY,
  YOUTH_WEDNESDAY,
  KIDS_WEDNESDAY,
  getGroupName,
} from "../../../constants/app/groups";
import {getRoleGroup} from "../../../constants/app/roles";

const useStyles = makeStyles(styles);

export default function GroupsList(props) {
  const classes = useStyles();
  const [openGroupsList, setOpenGroupsList] = useState(null);
  const [menu, setMenu] = useState([
    FIRST_PREP_SATURDAY,
    SECOND_PREP_SATURDAY,
    FIRST_PRIMARY_SUNDAY,
    SECOND_PRIMARY_SUNDAY,
    SECONDRY_MONDAY,
    YOUTH_TUESDAY,
    YOUTH_WEDNESDAY,
    KIDS_WEDNESDAY,
  ]);
  useEffect(() => {
    if(props.role && props.role.index){
      setMenu([getRoleGroup(props.role.index)]);
    }
  }, [props.role]);

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
    return getGroupName(props.groupId)||"";
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
                    {menu.map((day)=>{
                      return(
                        <MenuItem
                        onClick={handleCloseGroupSelector(day)}
                        className={classes.dropdownItem}
                      >
                          {getGroupName(day)}
                      </MenuItem>
                      );
                    })}
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
  role:PropTypes.object,
};
