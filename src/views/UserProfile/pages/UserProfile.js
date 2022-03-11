import React, { useState } from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import AddAlert from "@material-ui/icons/AddAlert";
// core components
import GridItem from "../../../components/Grid/GridItem.js";
import GridContainer from "../../../components/Grid/GridContainer.js";
import CustomInput from "../../../components/CustomInput/CustomInput.js";
import Button from "../../../components/CustomButtons/Button.js";
import Card from "../../../components/Card/Card.js";
import CardHeader from "../../../components/Card/CardHeader.js";
import PropTypes from "prop-types";
import Snackbar from "../../../components/Snackbar/Snackbar.js";

// import CardAvatar from "../../components/Card/CardAvatar.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardFooter from "../../../components/Card/CardFooter.js";
import GroupsList from "./GroupsList.js";

// import avatar from "../../assets/img/faces/marc.jpg";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};

const useStyles = makeStyles(styles);

export default function UserProfile(props) {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [confessionPriest, setConfessionPriest] = useState("");
  const [church, setChurch] = useState("");
  const [fatherMobileNumber, setFatherMobileNumber] = useState("");
  const [motherMobileNumber, setMotherMobileNumber] = useState("");
  const [fatherJob, setFatherJob] = useState("");
  const [fatherConfessionPriest, setFatherConfessionPriest] = useState("");
  const [motherConfessionPriest, setMotherConfessionPriest] = useState("");
  const [motherJob, setMotherJob] = useState("");
  const [note, setNote] = useState("");
  const [groupId, setGroupId] = useState(null);
  const [submitPopup, setSubmitPopup] = useState(false);
  const [errorPopup, setErrorPopup] = useState(false);
  const [error, setError] = useState("");
  
  const onPressAddMember = () => {
    let user = {
      email,
      password,
      fullName,
      address,
      mobile,
      dateOfBirth,
      confessionPriest,
      church,
      fatherMobileNumber,
      motherMobileNumber,
      fatherJob,
      motherJob,
      fatherConfessionPriest,
      motherConfessionPriest,
      note,
      groupId,
    };
    props
      .addUser(user)
      .then(()=>{
        setSubmitPopup(true);
        setTimeout(function () {
          setSubmitPopup(false);
        }, 6000);
        props.history.push("/admin/addattendance")
      })
      .catch((e) => {
        getError(e);
        setErrorPopup(true);
        setTimeout(function () {
          setErrorPopup(false);
        }, 6000);
        console.log("eroooor",e)
      });
  };

  const getError=(e)=>{
    if(typeof e.details === 'object'){
      setError(e.details.map((detail)=>detail.msg).join(', '))
    }else{
      setError(e.details)
    }
  };

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Add Member</h4>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText="Email address"
                    id="email"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      onChange: (event) => setEmail(event.target.value),
                      value: email,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Password"
                    id="password"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      type: "password",
                      onChange: (event) => setPassword(event.target.value),
                      value: password,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Full Name"
                    id="full_name"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      onChange: (event) => setFullName(event.target.value),
                      value: fullName,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Address"
                    id="address"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      onChange: (event) => setAddress(event.target.value),
                      value: address,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Mobile"
                    id="mobile"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      type: "number",
                      onChange: (event) => setMobile(event.target.value),
                      value: mobile,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Date of Birth"
                    id="date_of_birth"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      type: "date",
                      onChange: (event) => setDateOfBirth(event.target.value),
                      value: dateOfBirth,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Confession Priest"
                    id="confession_priest"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      onChange: (event) =>
                        setConfessionPriest(event.target.value),
                      value: confessionPriest,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Church"
                    id="church"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      onChange: (event) => setChurch(event.target.value),
                      value: church,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Father Mobile Number"
                    id="father_mobile_number"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      type: "number",
                      onChange: (event) =>
                        setFatherMobileNumber(event.target.value),
                      value: fatherMobileNumber,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Mother Mobile Number"
                    id="mother_mobile_number"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      type: "number",
                      onChange: (event) =>
                        setMotherMobileNumber(event.target.value),
                      value: motherMobileNumber,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Father Confession Priest"
                    id="father_confession_priest"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      onChange: (event) =>
                        setFatherConfessionPriest(event.target.value),
                      value: fatherConfessionPriest,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Mother Confession Priest"
                    id="mother_confession_priest"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      onChange: (event) =>
                        setMotherConfessionPriest(event.target.value),
                      value: motherConfessionPriest,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Father Job"
                    id="father_job"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      onChange: (event) => setFatherJob(event.target.value),
                      value: fatherJob,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Mother Job"
                    id="mother_job"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      onChange: (event) => setMotherJob(event.target.value),
                      value: motherJob,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Write a note !"
                    id="note"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5,
                      onChange: (event) => setNote(event.target.value),
                      value: note,
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <GroupsList groupId={groupId} setGroupId={setGroupId} role={props.role} buttonTitle={'Group'}/>
              <Button color="primary" onClick={onPressAddMember}>
                Add Member
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
        <Snackbar
          place="tc"
          color="success"
          icon={AddAlert}
          message="Your registration is successfully submited."
          open={submitPopup}
          closeNotification={() => setSubmitPopup(false)}
          close
        />
        <Snackbar
          place="tc"
          color="danger"
          icon={AddAlert}
          message={error}
          open={errorPopup}
          closeNotification={() => setErrorPopup(false)}
          close
        />
      </GridContainer>
    </div>
  );
}

UserProfile.propTypes = {
  addUser: PropTypes.func,
  role: PropTypes.object,
};

UserProfile.defaultProps = {};
