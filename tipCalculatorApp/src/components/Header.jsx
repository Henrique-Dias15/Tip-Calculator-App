import React from 'react';

const Header = ({header1, header2}) => {
    return (
        <div>
            <h1>{header1}<br/>{header2}</h1>
        </div>
    );
}

export default Header;
