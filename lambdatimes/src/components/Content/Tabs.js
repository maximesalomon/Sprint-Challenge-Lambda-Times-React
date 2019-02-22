import React from 'react';
import Tab from './Tab';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const TabStyle = styled.p `
  margin-right: 10px;
  margin-left: 10px;
`

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
            {
              props.tabs.map((tab) => (
                <TabStyle key={tab}>
                  <Tab 
                    topic={tab}
                    selectTabHandler={props.selectTabHandler}
                    selected={props.selected}
                  />
                </TabStyle>
              ))
            }
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.string
  ).isRequired

};

export default Tabs;
