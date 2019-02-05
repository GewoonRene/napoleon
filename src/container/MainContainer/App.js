import React from 'react';
import Banner from '../BannerContainer/Banner';
import VerticalParallax from '../ParallaxContainer/VerticalParallax';
import MouseParallax from '../ParallaxContainer/MouseParallax';
import Chapterlist from '../ChapterContainer/Chapterlist';


export default class App
extends React.Component {

  render() {    
    return (
      <div className="container">
        <Banner>
          <VerticalParallax className="layer layer-bg"          speed={ -0.40 } />
          <VerticalParallax className="layer layer-three"       speed={ -0.80 } />
          <VerticalParallax className="layer layer-two"         speed={ -1.00 } />
          <VerticalParallax className="layer layer-one"         speed={ -1.00 } />
          <VerticalParallax className="layer layer-transition" />
        </Banner>
        <Chapterlist>
         <div className="chapter chapter-1">
          <MouseParallax className="layer chapter-layer-5" speed="" />
          <MouseParallax className="layer chapter-layer-4" speed="" />
          <MouseParallax className="layer chapter-layer-3" speed="" />
          <MouseParallax className="layer chapter-layer-2" speed="" />
          <MouseParallax className="layer chapter-layer-1" speed="" />
         </div>
         <div className="chapter chapter-2">
          <MouseParallax className="layer chapter-layer-5" speed="" />
          <MouseParallax className="layer chapter-layer-4" speed="" />
          <MouseParallax className="layer chapter-layer-3" speed="" />
          <MouseParallax className="layer chapter-layer-2" speed="" />
          <MouseParallax className="layer chapter-layer-1" speed="" />
         </div> 
         <div className="chapter chapter-3">
          <MouseParallax className="layer chapterlayer-5" speed="" />
          <MouseParallax className="layer chapterlayer-4" speed="" />
          <MouseParallax className="layer chapterlayer-3" speed="" />
          <MouseParallax className="layer chapterlayer-2" speed="" />
          <MouseParallax className="layer chapterlayer-1" speed="" />
         </div> 
         <div className="chapter chapter-4">
          <MouseParallax className="layer chapterlayer-5" speed="" />
          <MouseParallax className="layer chapterlayer-4" speed="" />
          <MouseParallax className="layer chapterlayer-3" speed="" />
          <MouseParallax className="layer chapterlayer-2" speed="" />
          <MouseParallax className="layer chapterlayer-1" speed="" />
         </div>   
        </Chapterlist>
      </div>
    );

  }

}
