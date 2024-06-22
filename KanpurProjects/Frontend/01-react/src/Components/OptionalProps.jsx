import React from 'react';

const OptionalProps = ({ person = 'Default Person' }) => {
    return (
        <div>Hello, {person}!</div>
    );
}

export default OptionalProps;