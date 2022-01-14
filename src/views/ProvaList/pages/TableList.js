/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState,useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import styles from "../../../assets/jss/material-dashboard-react/components/headerLinksStyle.js";

// core components
import GridItem from "../../../components/Grid/GridItem.js";
import GridContainer from "../../../components/Grid/GridContainer.js";
import Table from "../../../components/Table/Table.js";
import Card from "../../../components/Card/Card.js";
import CardHeader from "../../../components/Card/CardHeader.js";
import Search from "@material-ui/icons/Search";
import Button from "../../../components/CustomButtons/Button.js";
import CardBody from "../../../components/Card/CardBody.js";
import CustomInput from "../../../components/CustomInput/CustomInput.js";
import GroupsList from "../../AttendancesList/pages/GroupsList";
import { TextField } from "@material-ui/core";

const componentStyles = {
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
  headerCard:{
    flexDirection:"column"
  },
};

const useStyles = makeStyles(componentStyles,styles);

export default function TableList(props) {
  const classes = useStyles();
  const [groupId,setGroupId]=useState(null)
  const [searchedName,setSearchedName]=useState(null)
  const note = useState("")


  useEffect(() => {
    if(groupId != null){
      const date = new Date();
      props.changeGroup();
      props.listUsers(groupId);
      props.listGroupAttendance(groupId, date);
    }
  }, [groupId]);


  useEffect(()=>{
    if(props.attendances.length > 0){
      console.log(props.attendances)
    }
  },[props.attendances]);

  const isAttended = (userId)=>{
    return props.attendances.find((attendance) => attendance.userId === userId)?.attend;
  }
  
  const attendanceButton = (userId) => {
    isAttended(userId)
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12} style={{flexDirection:"row"}}>
         { isAttended(userId) &&
          <TextField value='Attended'/>&&
          <Button color="warning" onClick={()=>{
             return props.addAttendance(
              userId,
              new Date(),
              false,
              groupId,
            )
          }}>
                not Attend
          </Button>
          }
          { !isAttended(userId) &&
          <Button color="primary" onClick={()=>{
            return props.addAttendance(
             userId,
             new Date(),
             true,
             groupId,
           )
         }}>
               Attend
         </Button>
          }
        </GridItem>
      </GridContainer>
    );
  };

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary" className={classes.headerCard}>
            <GroupsList groupId={groupId} setGroupId={setGroupId} role={props.role}/>
          </CardHeader>
          <div className={classes.searchWrapper} style={{paddingTop:10}}>
            <CustomInput
              formControlProps={{
                className: classes.margin + " " + classes.search,
              }}
              inputProps={{
                placeholder: "Search",
                inputProps: {
                  "aria-label": "Search",
                },
                onChange: (event) =>setSearchedName(event.target.value),
                value: searchedName,
              }}
            />
            <Button color="white" aria-label="edit" justIcon round  onClick={() => { 
              console.log('searchedName,groupId',searchedName,groupId)   
              if(searchedName&&groupId){
                const searched =  props.search(searchedName,groupId);
                console.log('search result',searched)
              }         
              else
               alert('please make sure that you choose group and name to search!');
            }}>
              <Search />
            </Button>
          </div>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Name","Note", "attendance"]}
              tableData={props.users.map((user) => {
                return [user.fullName,note, attendanceButton(user.id)];
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
  attendances:[],
};

TableList.propTypes = {
  users: PropTypes.array,
  attendances:PropTypes.array,
  role:PropTypes.object,
  listUsers: PropTypes.func,
  changeGroup: PropTypes.func,
  addAttendance: PropTypes.func,
  listGroupAttendance: PropTypes.func,
  search:PropTypes.func,
  groups: PropTypes.func,
};
