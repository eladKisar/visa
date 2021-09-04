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

  handlePlaceChanged(){
      console.log('handlePlaceChanged')
    const place = this.autocomplete.getPlace();
  //  this.props.onPlaceLoaded(place);
  }



  render() {
    return (
        <input ref={this.autocompleteInput}  className="autocomplete" placeholder="הקלד כתובת"
         type="text"></input>
    );
  }
}

export default SearchBar;