import React from 'react';

export default function Checkbox(props) {
  function renderOptions() {
    return props.options.map((option, index) => {
      const htmlFor = 'radio-' + Math.random();
      return (
        <div key={index} className="ui-radio-controller">
          <input
            onChange={() => props.onSelect(option.id)}
            id={htmlFor}
            name="apply-type"
            type="checkbox"
            defaultChecked={option.id === props.checkedRadioButton}
          />
          <span className="checkmark"></span>
          <label htmlFor={htmlFor}>{option.label}</label>
        </div>
      );
    });
  }
  return (
    <div className="ui-radio">
      <p htmlFor="name">{props.title}</p>
      <div className="ui-radio-controllers d-flex">{renderOptions()}</div>
    </div>
  );
}
