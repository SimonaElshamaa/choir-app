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

// core components
import Button from "../CustomButtons/Button.js";

import styles from "../../assets/jss/material-dashboard-react/components/headerLinksStyle.js";
import {
  ADMIN,
  SERVENT_FIRST_PREP_SATURDAY,
  SERVENT_SECOND_PREP_SATURDAY,
  SERVENT_FIRST_PRIMARY_SUNDAY,
  SERVENT_SECOND_PRIMARY_SUNDAY,
  SERVENT_SECONDRY_MONDAY,
  SERVENT_YOUTH_TUESDAY,
  SERVENT_YOUTH_WEDNESDAY,
  SERVENT_KIDS_WEDNESDAY,
  getRoleName
} from "../../constants/app/roles";

const useStyles = makeStyles(styles);

export default function RolesList(props) {
  const classes = useStyles();
  const [openRolesList, setOpenRolesList] = useState(null);

  const roles = [
    ADMIN,
    SERVENT_FIRST_PREP_SATURDAY,
    SERVENT_SECOND_PREP_SATURDAY,
    SERVENT_FIRST_PRIMARY_SUNDAY,
    SERVENT_SECOND_PRIMARY_SUNDAY,
    SERVENT_SECONDRY_MONDAY,
    SERVENT_YOUTH_TUESDAY,
    SERVENT_YOUTH_WEDNESDAY,
    SERVENT_KIDS_WEDNESDAY,
  ];

  const handleClickRoleSelector = (event) => {
    if (openRolesList && openRolesList.contains(event.target)) {
      setOpenRolesList(null);
    } else {
      setOpenRolesList(event.currentTarget);
    }
  };

  const handleCloseRoleSelector = (role = null) => () => {
    props.setRoleId(role);
    setOpenRolesList(null);
  };

  return (
    <div>
      <div className={classes.manager}>
      <Button 
      color="primary"
      aria-owns={openRolesList ? "profile-menu-list-grow" : null}
      aria-haspopup="true"
      onClick={handleClickRoleSelector}
      >
        {`role${getRoleName(props.roleId)}`}
      </Button>
         <Poppers
          open={Boolean(openRolesList)}
          anchorEl={openRolesList}
          transition
          disablePortal
          className={
            classNames({ [classes.popperClose]: !openRolesList }) +
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
                <ClickAwayListener onClickAway={handleCloseRoleSelector(null)}>
                  <MenuList role="menu">
                    {roles.map((role)=>{
                      return(
                        <MenuItem
                          onClick={handleCloseRoleSelector(role)}
                          className={classes.dropdownItem}
                        >
                          {getRoleName(role)}
                        </MenuItem>
                      )
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

RolesList.defaultProps = {
  roleId:null
};

RolesList.propTypes = {
  setRoleId: PropTypes.func.isRequired,
  roleId: PropTypes.number,
};
