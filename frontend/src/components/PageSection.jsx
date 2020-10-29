import React from 'react';

const PageSection = ({label, value}) => {
  return ( 
    <div className='page-section'>
      <p className="page-section__label">{label}</p>
      <p>{value}</p>
    </div>
  );
}
 
export default PageSection;