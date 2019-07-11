import React from "react"
import GoogleMapReact from 'google-map-react';
import './css/googleMaps.css'

const API_KEY = 'AIzaSyD3kvidrpG2DXyav0AaI3KXD6UFOoKJI4A';

class GoogleMap extends React.Component {
  static defaultProps = {
    center: {
      lat: 51.0354253,
      lng: -114.059529
    },
    zoom: 11
  };

  render() {
    return (
      <div className='googleMapsDiv' style={{height: '80vh', width: '80vw'}}>
        <GoogleMapReact
          bootstrapURLKeys={{key: API_KEY}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        />
      </div>
    );
  }
}

export default GoogleMap
