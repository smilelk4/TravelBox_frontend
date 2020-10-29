import React from 'react';
import PageTitle from './PageTitle';

const DetailContainer = (props) => {
  return ( 
    <div className="detail-container">
      <div className="detail-container__container">
        <PageTitle title={props.title}/>
          <div className="detail-container__contents">
            {props.children}
          </div>
      </div>
    </div>
  );
}
 
export default DetailContainer;