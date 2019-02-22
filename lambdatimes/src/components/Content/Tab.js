import React from 'react';

import PropTypes from 'prop-types';

const Tab = props => {
  return (
    <div
      className={props.topic === props.selectedTab ? 'tab active-tab' : 'tab'}
      onClick={() => {props.selectTabHandler(props.topic)}}
    >
      {props.topic.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {
  tab: PropTypes.string
};

export default Tab;
