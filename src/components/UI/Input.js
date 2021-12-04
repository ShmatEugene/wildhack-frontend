import React from 'react';
import RadioButton from '../UI/RadioButton';

function isInvalid({ valid, touched, shouldValidate }) {
  return !valid && shouldValidate && touched;
}

export default function Input(props) {
  const inputType = props.type || 'text';
  const htmlFor = inputType + '-' + Math.random();
  // const [checkedRadioButton, setCheckedRadioButton] = React.useState(0);
  return (
    <div className="ui-input">
      {inputType == 'text' ||
      inputType == 'date' ||
      inputType == 'name' ||
      inputType == 'email' ||
      inputType == 'password' ? (
        <>
          <label htmlFor={htmlFor}>{props.label}</label>
          <input id={htmlFor} type={inputType} value={props.value} onChange={props.onChange} />
        </>
      ) : null}
      {inputType == 'radio' ? (
        <RadioButton
          options={props.options}
          title={props.label}
          onSelect={props.onRadioChange}
          checkedRadioButton={props.selected}
        />
      ) : null}
      {/* {inputType == 'checkbox' ? (
        <RadioButton
          options={props.options}
          title={props.label}
          onSelect={props.onRadioChange}
          checkedRadioButton={checkedRadioButton}
        />
      ) : null} */}
      {isInvalid(props) ? (
        <span className="status error">
          {props.errorMessage
            ? props.errorMessage.map((error, index) => <p key={index}>{error}</p>)
            : 'Введено некорректное значение'}
        </span>
      ) : null}
    </div>
  );
}
