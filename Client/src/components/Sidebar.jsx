import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../imgs/logo.png";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import CircularSlider from '@fseehawer/react-circular-slider';
import { Button } from "@mui/material"


const Sidebar = () => {

  var flag = 0;

  // submit button function
  function handleClickSubmit(e1) {
    e1.preventDefault();
    flag = 1;
    var dict = {};

    console.log('You clicked submit.');
    dict["Temperature"] = localStorage.getItem("Temperature");
    dict["Humidity"] = localStorage.getItem("Humidity");
    dict["Moisture"] = localStorage.getItem("Moisture");
    dict["Nitrogen"] = localStorage.getItem("Nitrogen");
    dict["Phosphorus"] = localStorage.getItem("Phosphorus");
    dict["Potassium"] = localStorage.getItem("Potassium");
    dict["Soil"] = localStorage.getItem("Soil");

    console.log(dict);

  }

  // change button function
  function handleClickChange(e2) {
    e2.preventDefault();
    flag = 0;
    console.log("You clicked change");
  }


  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true)

  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }
  console.log(window.innerWidth)
  return (
    <>
      <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
        <UilBars />
      </div>
    <motion.div className='sidebar'
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >
      {/* logo */}
      <div className="logo">
        <img src={Logo} alt="logo" />
        <span>
          Cr<span>o</span>p
        </span>
      </div>

      <div className="menu">
        <Button variant="contained" color = "success"
        onClick={handleClickSubmit}>Submit Values</Button>
      </div>

      <div className="menu">
        <Button variant="contained" color = "error"
        onClick={handleClickChange}>Change Values</Button>
      </div>
      <div className="soil">
        <CircularSlider
          width={150}
          label="Soil"
          progressLineCap="flat"
          data={["Sandy","Loamy","Black","Red","Clayey",]}
          labelFontSize="1rem"
          valueFontSize="1rem"
          knobPosition="top"
          // knobDraggable={props.drag}
          direction={-1}
          hideKnob={true}
          labelColor="#005a58"
          knobColor="#005a58"
          progressColorFrom="#a38331" 
          progressColorTo="#1a160c"
          progressSize={8}
          trackColor="#e6d19c"
          trackSize={10}
          onChange={(value) => {
            var x = "Loamy";
            x = value;
            localStorage.setItem("Soil", x);
  
          }}
          labelBottom
        />
      </div>
    </motion.div>
    </>
  );
};

export default Sidebar;
