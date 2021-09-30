import React from "react";
import './SearchBar.css'
/* global google */


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.autocompleteInput = React.createRef();
    this.autocomplete = null;
    this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
  }

  componentDidMount() {
    this.autocomplete = new window.google.maps.places.Autocomplete(this.autocompleteInput.current,
        {"types": ["geocode"]});

    this.autocomplete.addListener('place_changed', this.handlePlaceChanged);
  }

  handlePlaceChanged(inputValue){
    if(inputValue === ''){
      this.props.handleChange(inputValue,this.props.field)  

    }else{
      const place = this.autocomplete.getPlace();
      const value = place?.formatted_address;
  
      this.props.handleChange(value,this.props.field)  
    }
  }



  render() {
    return (
        <input ref={this.autocompleteInput}  className="autocomplete" placeholder="הקלד כתובת"
        onChange={event => this.handlePlaceChanged(event.target.value)}
        type="text"></input>
    );
  }
}
//onChange={value => this.props.handleChange(value,this.props.field)} type="text"></input>

export default SearchBar;