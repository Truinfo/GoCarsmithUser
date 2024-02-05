import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Paper } from "@mui/material";

const Profile = () => {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    secondName: "",
    email: "",
    contactNumber: "",
    profilePicture: "",
    registrationDate: "",
    profilePicturePreview: "", // New field for previewing selected profile picture
  });

  const [loading, setLoading] = useState(true);

  const authToken = localStorage.getItem("token");
  const userString = localStorage.getItem("user");
  const user = JSON.parse(userString);
  const email = user?.email;

  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };

  const getUserByEmail = async () => {
    try {
      const response = await axios.get(
        `https://gocarsmithbackend.onrender.com/api/user/getUserByEmail/${email}`,
        axiosConfig
      );
      const data = response.data.user;
      setUserDetails(data);
    } catch (error) {
      console.error("Error fetching user details:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async () => {
    try {
      const formData = new FormData();

      // Append the profilePicture to the FormData if it exists
      if (userDetails.profilePicture) {
        formData.append("profilePicture", userDetails.profilePicture);
      }

      // Append other fields to the FormData
      formData.append("firstName", userDetails.firstName);
      formData.append("secondName", userDetails.secondName);
      formData.append("email", userDetails.email);
      formData.append("contactNumber", userDetails.contactNumber);

      console.log("Complete Update Data:", formData);

      const response = await axios.post(
        "https://gocarsmithbackend.onrender.com/api/user/updateProfile",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      // Fetch user details again to update the state
      getUserByEmail();
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const deleteProfileImage = async () => {
    try {
      const requestData = { email: userDetails.email }; // Include email in the request payload

      const response = await axios.delete(
        "https://gocarsmithbackend.onrender.com/api/user/deleteProfileImage",
        { ...axiosConfig, data: requestData } // Include email in the request data
      );

      console.log("Profile image deleted successfully:", response.data);

      // Fetch user details again to update the state
      getUserByEmail();
    } catch (error) {
      console.error("Error deleting profile image:", error);
    }
  };


  const handleChange = (field, value) => {
    if (field === 'profilePicture') {
      // Update the image preview when a new image is selected
      const file = value;
      const imageUrl = URL.createObjectURL(file);
      setUserDetails({ ...userDetails, [field]: file, profilePicturePreview: imageUrl });
    } else {
      // Update other fields as usual
      setUserDetails({ ...userDetails, [field]: value });
    }
  };

  useEffect(() => {
    getUserByEmail();
  }, []); // Fetch user details on component mount

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "120vh",
      }}
    >
      <Paper
        elevation={3}
        style={{
          padding: "20px",
          maxWidth: "700px",
          margin: "0 auto",
          textAlign: "center",
          border: "1px solid #000",
        }}
      >
        <h1>User Profile</h1>
       

        <div
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            overflow: "hidden",
            margin: "0 auto 20px",
            position: "relative",
          }}
        >
          <img
            src={userDetails.profilePicturePreview || `https://gocarsmithbackend.onrender.com${userDetails.profilePicture}`}
            alt="Profile"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          {userDetails.profilePicture && (
            <div
              style={{
                position: "absolute",
                top: 5,
                right: 5,
                cursor: "pointer",
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                borderRadius: "50%",
                padding: "3px",

              }}
              onClick={deleteProfileImage}
            >
              <IconButton size="small">
                <DeleteIcon style={{ alignContent: "start", color: "#c70404" }} />
              </IconButton>
            </div>
          )}
        </div>





        <div>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleChange("profilePicture", e.target.files[0])}
            style={{ width: "265px" }}
          />
        </div>
        <div style={{ display: "inline-block", verticalAlign: "top", marginLeft: "10px" }}>
          {/* <Button
            onClick={deleteProfileImage}
            variant="contained"
            style={{
              backgroundColor: "red",
              fontWeight: 700,
              fontSize: 15,
            }}
          >
            Delete Profile Image
          </Button> */}
          <TextField
            value={userDetails.firstName}
            label="First Name"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={(e) => handleChange("firstName", e.target.value)}
          />
          <TextField
            value={userDetails.secondName}
            label="Last Name"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={(e) => handleChange("secondName", e.target.value)}
          />
          <TextField
            value={userDetails.email}
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={(e) => handleChange("email", e.target.value)}
            disabled
          />
          <TextField
            value={userDetails.contactNumber}
            label="Phone Number"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={(e) => handleChange("contactNumber", e.target.value)}
          />
          <Button
            onClick={updateProfile}
            variant="contained"
            style={{
              backgroundColor: "black",
              fontWeight: 700,
              fontSize: 15,
              margin: "10px",
            }}
          >
            Save Changes
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default Profile;