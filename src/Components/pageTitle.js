import PropTypes from 'prop-types';
import React from 'react';

const PageTitle = (props) => {
  return (
    <div className="page-title">
      {props.name}
    </div>
  )
}

PageTitle.propTypes = {
  name: PropTypes.string.isRequired,
}

export default PageTitle;