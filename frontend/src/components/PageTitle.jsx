import React from 'react';

const PageTitle = ({title, size="large", option}) => {

  return (
    <h2 className={`page-title ${size} ${option}`}>{title}</h2>
  )
}
 
export default PageTitle;