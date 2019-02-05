import './VerticalParallax.scss'
import React from 'react';
import Parallax from '../../components/Parallex/Parallax';
import PropTypes from 'prop-types';


export default class VerticalParallax
extends React.PureComponent {

    constructor(props) {
        super(props);
        this.onScrollHandler = this.onScrollHandler.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScrollHandler);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScrollHandler);
    }

    onScrollHandler() {
        // ALL PARALLAX DATA =
        let topDistance = window.scrollY;
        let scrollSpeed = this.props.speed;
        let imageLayer = document.getElementsByClassName(this.props.className);
        let offsetY = (topDistance * scrollSpeed);

        // ANIMATION =
        imageLayer[0].style.webkitTransform = 'translate3d(0, ' + offsetY + 'px, 0)';
        imageLayer[0].style.MozTransform = 'translate3d(0, ' + offsetY + 'px, 0)';
        imageLayer[0].style.msTransform = 'translate3d(0, ' + offsetY + 'px, 0)';
        imageLayer[0].style.OTransform = 'translate3d(0, ' + offsetY + 'px, 0)';
        imageLayer[0].style.transform = 'translate3d(0, ' + offsetY + 'px, 0)';

        VerticalParallax.onScrollTransition("layer-transition", topDistance)
    }

    static onScrollTransition(className, topDistance) {
        let imageLayer = document.getElementsByClassName(className);
        topDistance > 0 ? imageLayer[0].style.top = "0" : imageLayer[0].style.top = "-20vh";

    }

    render() {
        return (
            <Parallax className={this.props.className} />
        );
    }
}

VerticalParallax.protoTypes = {
    className: PropTypes.string.isRequired
}

VerticalParallax.defaultProps = {
    class: 'layer',
    speed: 0
  };