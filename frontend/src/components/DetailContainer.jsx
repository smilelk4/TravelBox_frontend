import React from 'react';
import PageTitle from './PageTitle';
import DiagonalContainer from './DiagonalContainer';

const DetailContainer = (props) => {
  return ( 
    <>
      <DiagonalContainer type="vertical-1" />
      <DiagonalContainer type="vertical-2" />
      <div className="detail-container">
        <div className="detail-container__container">
          <PageTitle title={props.title}/>
            <div className="detail-container__contents">
              {props.children}
            </div>
        </div>
      </div>
    </>
  );
}
 
export default DetailContainer;