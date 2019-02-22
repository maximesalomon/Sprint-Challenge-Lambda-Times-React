import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    this.setState({tabs: tabData})
    this.setState({cards: cardData})
  }

  changeSelected = tab => {
    this.setState({selected: tab})
  };


  filterCards = () => {
   if(this.state.selected === 'all') {
    return this.state.cards;
   } else {
    let filteredCards = this.state.cards.filter((card) => card.tab.includes(this.state.selected));
     return filteredCards;
   }
  };

  render() {
    return (
      <div className="content-container">
        <Tabs
          tabs={this.state.tabs}
          selectedTab={this.state.selected}
          selectTabHandler={this.changeSelected}
        />
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}
