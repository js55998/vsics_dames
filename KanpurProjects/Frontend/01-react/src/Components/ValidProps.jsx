import React from 'react';
import PropTypes from 'prop-types';
import './InValid.css';
// The PercentageStat component
const PercentageStat = ({ label, score = 0, total = Math.max(1, score) }) => {
  return (
    <div className="pricetab">
      <h1>{label}</h1>
      <div className="price">
        <h2> {Math.round((score / total) * 100)}% </h2>
      </div>
    </div>
  );
};

// Checks if a value is numeric
// Either a finite number or a numeric string
function isNumeric(value) {
  const regex = /^(\+|-)?((\d*\.?\d+)|(\d+\.?\d*))$/;
  return (
    Number.isFinite(value) || (typeof value === 'string' && regex.test(value))
  );
}

// Checks if value is non-zero
// Value is first converted to a number
function isNonZero(value) {
  return +value !== 0;
}

// Takes test functions as arguments and returns a custom validation function.
// Each function passed in as argument is expected to take a value argument
// expected to accept a value and return a Boolean if it passes the validation.
// All tests must pass for the custom validator to be marked as passed.
function validatedType(...validators) {
  return function (props, propName, componentName) {
    const value = props[propName];
    

    console.log('props:', props)
    console.log('propName:', propName)
    console.log('props[propName]:', props[propName])



    const valid = validators.every((validator) => {
      if (typeof validator === 'function') {
        const result = validator(value);
        return typeof result === 'boolean' && result;
      }

      return false;
    });

    if (!valid) {
      return new Error(
        `Invalid prop \`${propName}\` passed to \`${componentName}\`. Validation failed.`
      );
    }
  };
}

// Set the propTypes for the component
PercentageStat.propTypes = {
  label: PropTypes.string.isRequired,
  score: validatedType(isNumeric),
  total: validatedType(isNumeric, isNonZero),
};


export default PercentageStat