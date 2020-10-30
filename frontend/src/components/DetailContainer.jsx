import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PageTitle from './PageTitle';
import DiagonalContainer from './DiagonalContainer';
import { DarkAddIcon } from '../icons/AddIcon';

const DetailContainer = (props) => {
  const collectionId = useSelector(state => state.collections[0].id);

  return ( 
    <>
      <DiagonalContainer type="vertical-1" />
      <DiagonalContainer type="vertical-2" />
      <div className="detail-container">
        <div className="detail-container__container">
          <NavLink to={`/my-wishes/create/${collectionId}`}>
            <DarkAddIcon type='dc'/>
            {/* <AddCircleIcon className='add-icon' fontSize='large'/> */}
          </NavLink>
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