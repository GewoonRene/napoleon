import './MouseParallax.scss';
import React from 'react';
import Parallax from '../../components/Parallex/Parallax';


export default class MouseParallax
extends React.PureComponent {

  render() {    
    return (
      <Parallax className={this.props.className} />   
    );

  }

}
