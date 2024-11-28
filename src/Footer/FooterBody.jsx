import React from 'react';
import FirstFooter from './FirstFooter';
import SecondFooter from './SecondFooter';
import ThirdFooter from './ThirdFooter';
import FourthFooter from './FourthFooter';

function FooterBody(props) {
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-2'>
            <FirstFooter />
            <SecondFooter />
            <ThirdFooter />
            <FourthFooter />
        </div>
    );
}

export default FooterBody;