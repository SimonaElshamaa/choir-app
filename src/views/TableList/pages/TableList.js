import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

// core components
import GridItem from "../../../components/Grid/GridItem.js";
import GridContainer from "../../../components/Grid/GridContainer.js";
import Table from "../../../components/Table/Table.js";
import Card from "../../../components/Card/Card.js";
import CardHeader from "../../../components/Card/CardHeader.js";
import CardBody from "../../../components/Card/CardBody.js";
import CustomInput from "../../../components/CustomInput/CustomInput.js";
import GroupsList from "./GroupsList";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

const useStyles = makeStyles(styles);

export default function TableList(props) {
  const classes = useStyles();
  const attendances = useState[[]];
  const attendanceButton = (userId) => {
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={2}>
          <CustomInput
            id={userId.toString()}
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: "checkbox",
              onChange: () => props.isAttended(),
              checked: attendances.find((attendance) => attendance.id === userId)
                .isAttend,
            }}
          />
        </GridItem>
      </GridContainer>
    );
  };

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary">
            <GroupsList />
            <p className={classes.cardCategoryWhite}>Selected Group</p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["ID", "Name", "attendance"]}
              tableData={props.users.map((user) => {
                return [user.id, user.name, attendanceButton(6)];
              })}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

TableList.defaultProps = {
  users: [],
};

TableList.propTypes = {
  users: PropTypes.array,
  listUsers: PropTypes.func,
  addAttendance: PropTypes.func,
  search:PropTypes.func,
  groups: PropTypes.func,
};
