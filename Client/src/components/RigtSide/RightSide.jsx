import React from "react";
import "./RightSide.css";
import "./Slider";
import Slider from "./Slider";
const RightSide = () => {

  var flag = 0;
  document.getElementsByClassName("RightSide").innerHTML = localStorage.getItem("lastname");
  if (flag===0) {
    var drg = true;
    var initialN = 20, initialP = 20, initialK = 20;
  }
  return (
    <div className="RightSide">
      <div>
        <Slider 
        Label={"Nitrogen"}
        colorFrom={"#50adcc"}
        colorTo={"#0a49f7"}
        index={initialN}
        track={"#dae4f7"}
        drag={drg}/>

      </div>
      <div>
        <Slider 
        Label={"Phosphorus"}
        colorFrom={"#d4bf39" }
        colorTo={"#a68503"}
        index={initialP}
        track={"#ebd9a0"}
        drag={drg}/>
      </div>
      <div>
        <Slider 
        Label={"Potassium"}
        colorFrom={"#28f782"}
        colorTo={"#388536"}
        index={initialK}
        track={"#cde8c3"}
        drag={drg}/>
      </div>
    </div>
  );
};

export default RightSide;
