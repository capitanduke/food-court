import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
        this.state = {
          term: '',
          location: '',
          sortBy: 'best_match',
        }

        this.sortByOptions = {
          'Best Match': 'best_match',
          'Highest Rated': 'rating',
          'Most Reviewed': 'review_count'
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
  }

  renderSortByOptions(sortByOptions){
    return Object.keys(this.sortByOptions).map(sortByOption => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      if( this.state.sortBy === sortByOption ){
        return <li key={sortByOptionValue} onClick={this.handleClick} className='active'>{sortByOption}</li>
      } else {
        return <li key={sortByOptionValue} onClick={this.handleClick} className=''>{sortByOption}</li>
      }
    });
  }

  handleClick(e){
    const element = e.target;
    this.setState({
      sortBy: e.target.innerHTML
    })

  }

  handleTermChange(e){
    const inputTerm = e.target.value;
    this.setState({
      term: inputTerm
    })
  }

  handleLocationChange(e){
    const inputLocation = e.target.value;
    this.setState({
      location: inputLocation
    })
  }

  handleSearch(e){
    e.preventDefault();
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
  }

  render(){
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input onChange={this.handleTermChange} placeholder="Search Businesses" />
          <input onChange={this.handleLocationChange} placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch}>Let's GO!</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
