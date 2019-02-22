import React from 'react';

import PropTypes from 'prop-types';

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  return (
    <div
      className={props.topic === props.selected ? 'tab active-tab' : 'tab'}
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
