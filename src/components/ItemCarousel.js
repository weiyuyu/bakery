import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default class ItemCarousel extends Component {
    constructor(props) {
      super(props);
      this.state = {
        items: this.props.items
      };
    }

    render() {
        return (
            <Carousel>
              {
                  this.state.items.map(item => {
                    return (
                      <div key={item["id"]}>
                          <img src={item["file"]} alt="thumbnail"/>
                          <p className="legend">{item["legend"]}</p>
                      </div>
                    );
                  })
              }
            </Carousel>
        );
    }
};

// Don't forget to include the css in your page

// Using webpack
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
