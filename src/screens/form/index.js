import React, { Component, useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Modal,
  ActivityIndicator,
} from "react-native";
import { Metrics } from "../../global/constants/";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import {
  setClearData,
  setUserData,
  saveUsersData,
} from "../../redux/userdata/userdata.actions";
import { selectData } from "../../redux/userdata/userdata.selectors";
import * as yup from "yup";

// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
// const formValidator = yup.object({
//   name: yup
//     .string()
//     .required()
//     .min(4),
//   country: yup.string().required(),
//   favPhone: yup.string().required(),
//   contact: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
// });
class formscreen extends Component {
  handleSubmit = async () => {
    await this.props.saveUsersData(this.props.data);
    await this.props.setClearData();
  };
  onHandleChange = (key, value) => {
    this.props.setUserData({
      key,
      value,
    });
  };
  render() {
    const { data } = this.props;
    return (
      <View
        style={{
          flex: 1,
          width: Metrics.screenWidth,
          height: Metrics.screenHeight,
          marginTop: Metrics.subHeadingTop,
        }}
      >
        <View style={{ marginHorizontal: 10 }}>
          <Text>Name</Text>
          <TextInput
            style={{
              height: 40,
              width: "100%",
              borderWidth: 1,
              borderColor: "#d3d3d3",
              marginBottom: 5,
              padding: 10,
              borderRadius: 5,
              marginTop: 5,
            }}
            value={data.name}
            onChangeText={(text) => this.onHandleChange("name", text)}
            placeholder={"Name"}
          />
          <Text style={{ marginTop: 10 }}>Country</Text>
          <TextInput
            style={{
              height: 40,
              width: "100%",
              borderWidth: 1,
              borderColor: "#d3d3d3",
              marginBottom: 5,
              padding: 10,
              borderRadius: 5,
              marginTop: 5,
            }}
            value={data.country}
            onChangeText={(text) => this.onHandleChange("country", text)}
            placeholder={"Country"}
          />
          <Text style={{ marginTop: 10 }}>Favorite Phone Brand</Text>
          <TextInput
            style={{
              height: 40,
              width: "100%",
              borderWidth: 1,
              borderColor: "#d3d3d3",
              marginBottom: 5,
              padding: 10,
              borderRadius: 5,
              marginTop: 5,
            }}
            value={data.favPhone}
            onChangeText={(text) => this.onHandleChange("favPhone", text)}
            placeholder={"Favourite Phone Brand"}
          />
          <Text style={{ marginTop: 10 }}>Phone Number</Text>
          <TextInput
            style={{
              height: 40,
              width: "100%",
              borderWidth: 1,
              borderColor: "#d3d3d3",
              marginBottom: 5,
              padding: 10,
              borderRadius: 5,
              marginTop: 5,
            }}
            value={data.contact}
            onChangeText={(text) => this.onHandleChange("contact", text)}
            placeholder={"Contact No."}
            keyboardType={"number-pad"}
          />
          <TouchableOpacity
            style={{
              backgroundColor: "#000080",
              height: 50,
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: "#000080",
              elevation: 4,
            }}
            onPress={this.handleSubmit}
          >
            <Text style={{ color: "#fff", fontSize: 18 }}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  data: selectData,
});
const mapDispatchToProps = {
  setClearData,
  setUserData,
  saveUsersData,
};

export default connect(mapStateToProps, mapDispatchToProps)(formscreen);
