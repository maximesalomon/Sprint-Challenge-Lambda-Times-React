import React from 'react';

import styled from 'styled-components';

const TopBarOverall = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
  @media (max-width: 1280px) {
    max-width: 1280px;
  }
`

const TopBarContainer = styled.div `
    width: 100%;
    display: flex;
    justify-content: none;
    align-items: none;
    flex-direction: row;
    color: #fff;
    letter-spacing: 1px;
    padding: 0 10px;
`

const TopBarContainerLeft = styled.div `
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
    flex: 1;
    font-size: 11px;
`

const TopBarContainerLeftSpan = styled.span `
    cursor: pointer;
    margin-right: 25%;
    font-weight: bold;
`

const TopBarContainerCenter = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex: 3;
    font-size: 9px;
`

const TopBarContainerCenterSpan = styled.span `
  cursor: pointer;
  margin-right: 5%;
  &:hover {
    text-decoration: underline;
  }
  &:last-child {
    margin-right: 0;
  }
`

const TopBarContainerRight = styled.div `
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`

const TopBarContainerRightSpan = styled.span `
  cursor: pointer;
`

const TopBar = () => {
  return (
    <TopBarOverall>
      <TopBarContainer>
        <TopBarContainerLeft>
          <TopBarContainerLeftSpan>TOPICS</TopBarContainerLeftSpan>
          <TopBarContainerLeftSpan>SEARCH</TopBarContainerLeftSpan>
        </TopBarContainerLeft>
        <TopBarContainerCenter>
          <TopBarContainerCenterSpan>GENERAL</TopBarContainerCenterSpan>
          <TopBarContainerCenterSpan>BROWNBAG</TopBarContainerCenterSpan>
          <TopBarContainerCenterSpan>RANDOM</TopBarContainerCenterSpan>
          <TopBarContainerCenterSpan>MUSIC</TopBarContainerCenterSpan>
          <TopBarContainerCenterSpan>ANNOUNCEMENTS</TopBarContainerCenterSpan>
        </TopBarContainerCenter>
        <TopBarContainerRight>
          <TopBarContainerRightSpan>LOG IN</TopBarContainerRightSpan>
        </TopBarContainerRight>
      </TopBarContainer>
    </TopBarOverall>
  )
}

export default TopBar;