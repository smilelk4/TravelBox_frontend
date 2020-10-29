import React from 'react';
import PageTitle from './PageTitle';

const DiagonalContainer = ({ title, type = "horizontal-1"}) => {
  // if(!type) type = "horizontal-1";

  return ( 
    <div className={`diagonal-container ${type}`}>
    <PageTitle title={title} />
    </div>
  );
}
 
export default DiagonalContainer;