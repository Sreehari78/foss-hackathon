import React from 'react'
import CircularSlider from '@fseehawer/react-circular-slider';

const Slider = (props) => {
    return (
      <div>
        <CircularSlider
        width={150}
        label={props.Label}
        max={100}
        dataIndex={props.index}
        min={0}
        labelFontSize="1rem"
        valueFontSize="2rem"
        appendToValue="%"
        knobPosition="top"
        knobDraggable={props.drag}
        direction={-1}
        hideKnob={true}
        progressLineCap="flat"
        labelColor="#005a58"
        knobColor="#005a58"
        progressColorFrom={props.colorFrom}
        progressColorTo={props.colorTo}
        progressSize={10}
        trackColor={props.track}
        trackSize={10}
        onChange={(value) => {
          var x = value
          {var y = props.Label }
          localStorage.setItem(y, x);

        }}
        labelBottom
        />
      </div>
    )
}

export default Slider