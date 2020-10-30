import React from 'react';
import { NavLink } from 'react-router-dom';
import PageTitle from './PageTitle';
import DiagonalContainer from './DiagonalContainer';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { DarkAddIcon } from '../icons/AddIcon';

const DetailContainer = (props) => {
  return ( 
    <>
      <DiagonalContainer type="vertical-1" />
      <DiagonalContainer type="vertical-2" />
      <div className="detail-container">
        <div className="detail-container__container">
          <NavLink to='/my-wishes/create'>
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