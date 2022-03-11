/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState,useEffect } from "react";

// @material-ui/icons
import AddAlert from "@material-ui/icons/AddAlert";
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
/* will be used later
* import Search from "@material-ui/icons/Search";
* import Button from "../../../components/CustomButtons/Button.js";
*/
import Snackbar from "../../../components/Snackbar/Snackbar.js";
import CardBody from "../../../components/Card/CardBody.js";
// import CustomInput from "../../../components/CustomInput/CustomInput.js";
import GroupsList from "./GroupsList";
import CustomInput from "../../../components/CustomInput/CustomInput.js";
import Search from "@material-ui/icons/Search";
import Button from "../../../components/CustomButtons/Button.js";

import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

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
  const [selectedDay, setSelectedDay]= useState(undefined);
  const [currentServent, setCurrentServent] = useState({});
  const [searchResult, setSearchResult] = useState([]);
  const [hasMembers, setHasMembers] = useState([]);
  const [infoPopup, setInfoPopup] = useState(false);


  useEffect(() => {
    if(groupId != null){
      props.changeGroup();
    }
  }, [groupId]);

  useEffect(() => {
    props.getMe().then((res)=>{
      setCurrentServent(res.user)
      setGroupId(res.user.roleId.index)
    }
      );
  }, []);

  useEffect(()=>{
    props.changeGroup();
    if(groupId && selectedDay){
      props.listUsers(groupId);    
      props.listGroupAttendance(groupId, new Date(selectedDay)).then(()=>{
        if(props.attendances.length <0){
         setHasMembers(false)
        }
      });
    } else if(!selectedDay){
      setInfoPopup(true);
    }
  },[selectedDay, groupId]);

  const isAttended = (userId)=>{
    return props.attendances.find((attendance) => attendance.userId === userId)?.attend;
  }
  
  const attendanceButton = (userId) => {
    isAttended(userId)
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12} style={{flexDirection:"row"}}>
         { isAttended(userId) &&
          <h6>Attended</h6>
          }
          { !isAttended(userId) &&
          <h6>not Attended</h6>
          }
        </GridItem>
      </GridContainer>
    );
  };
  const searchButton=()=>{
    return(
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
          if(searchedName&&groupId){
            props.search(searchedName,groupId)
            .then((res)=>{
              setSearchResult(res.users);
            })
            .catch((e)=>{
              console.log('error',e)
            });
          }         
          else
          setInfoPopup(true)
        }}>
          <Search />
        </Button>
      </div>
    );
  }
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary" className={classes.headerCard}>
            <GroupsList groupId={groupId} setGroupId={setGroupId} role={currentServent?.roleId}  buttonTitle={'Please select group!'}/>
          </CardHeader>
          <CardBody>
            <p>Choose a day</p>
            <DayPickerInput 
            style={{height:30}}
            onDayChange={setSelectedDay} />
            {searchButton()}
            {!hasMembers &&
            <h7>sorry this day wasn\'t your group day, OR you didn't add attendance!</h7>}
            <Table
              tableHeaderColor="primary"
              tableHead={["Name","Note", "attendance"]}
              tableData={
                (searchedName&&searchResult&&searchResult.length>0)?
                  searchResult.map((user) => {
                    return [user.fullName,note, attendanceButton(user.id)];
                })
                :
                  props.users.map((user) => {
                    return [user.fullName,note, attendanceButton(user.id)];
                  })
              }
            /> 
          </CardBody>
        </Card>
      </GridItem>
      <Snackbar
          place="tc"
          color="info"
          icon={AddAlert}
          message="please make sure you select both group and date!"
          open={infoPopup}
          closeNotification={() => setInfoPopup(false)}
          close
        />
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
  listUsers: PropTypes.func,
  changeGroup: PropTypes.func,
  addAttendance: PropTypes.func,
  listGroupAttendance: PropTypes.func,
  search:PropTypes.func,
  getMe:PropTypes.func
};
