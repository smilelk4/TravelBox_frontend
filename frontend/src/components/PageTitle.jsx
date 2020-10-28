import React from 'react';

const PageTitle = ({title, size="large"}) => {

  return (
    <h2 className={`page-title ${size}`}>{title}</h2>
  )
}
 
export default PageTitle;