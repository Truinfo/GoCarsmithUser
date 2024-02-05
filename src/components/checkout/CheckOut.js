import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

const CheckOut = () => {
  // State for Log In Details
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // State for Date and Time Slots Selection
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  // State for Address
  const [locality, setLocality] = useState("");
  const [address, setAddress] = useState("");

  // State for Payment Methods
  const [paymentMethod, setPaymentMethod] = useState("");

  // Event handler for Log In Details form submission
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle login submission
    console.log("Login submitted:", username, password);
  };

  // Event handler for Date and Time Selection form submission
  const handleDateTimeSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle date and time selection submission
    console.log("Date and Time submitted:", selectedDate, selectedTime);
  };

  // Event handler for Address form submission
  const handleAddressSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle address submission
    console.log("Address submitted:", locality, address);
  };

  // Event handler for Payment Method form submission
  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle payment method submission
    console.log("Payment Method submitted:", paymentMethod);
  };

  return (
    <div style={{ backgroundColor: "#f0f0f0", padding: 20 }}>
      {/* Paper 1: Log In Details */}
      <Paper style={{ padding: 20, margin: 20, boxShadow: "none" }}>
        <Typography variant="h6">Log In </Typography>
        <form onSubmit={handleLoginSubmit}>
          <TextField
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" variant="contained" color="primary">
            Log In
          </Button>
        </form>
      </Paper>

      {/* Paper 2: Date and Time Slots Selection */}
      <Paper style={{ padding: 20, margin: 20, boxShadow: "none" }}>
        <Typography variant="h6">Select Date and Time of Service:</Typography>
        <form onSubmit={handleDateTimeSubmit}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Select Date"
              value={selectedDate}
              onChange={(newDate) => setSelectedDate(newDate)}
              renderInput={(params) => <TextField {...params} required />}
            />
          </LocalizationProvider>
          {/* Add your time selection components here */}
          <Button type="submit" variant="contained" color="primary">
            Select Date and Time
          </Button>
        </form>
      </Paper>

      {/* Paper 3: Display Address */}
      <Paper style={{ padding: 20, margin: 20, boxShadow: "none" }}>
        <Typography variant="h5">Select / Add Address</Typography>
        <Typography variant="body1">Select from Saved Address or Address New Address</Typography>
        <form onSubmit={handleAddressSubmit}>
          
        <Typography variant="body1">Enter a New Address</Typography>
          <TextField
            label="Locality"
            value={locality}
            onChange={(e) => setLocality(e.target.value)}
            required
          />
          <TextField
            label="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <Button type="submit" variant="contained" color="primary">
            Save Address
          </Button>
        </form>
      </Paper>

      {/* Paper 4: Payment Methods */}
      <Paper style={{ padding: 20, margin: 20, boxShadow: "none" }}>
        <Typography variant="h6">Payment Methods</Typography>
        <form onSubmit={handlePaymentSubmit}>
          {/* Add your payment method components here */}
          <Button type="submit" variant="contained" color="primary">
            Submit Payment
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default CheckOut;
