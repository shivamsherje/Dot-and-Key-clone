import React, { Component } from "react";
import { Slide } from "react-slideshow-image";

import "react-slideshow-image/dist/styles.css";

class Apps extends Component {
  constructor() {
    super();
    this.slideRef = React.createRef();
    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
    this.state = {
      current: 0,
    };
  }

  back() {
    this.slideRef.current.goBack();
  }

  next() {
    this.slideRef.current.goNext();
  }

  render() {
    const properties = {
      duration: 900,
      autoplay: true,
      transitionDuration: 400,
      arrows: true,
      infinite: true,
      easing: "ease",
    };
    const slideImages = [

      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/desk_17.jpg?v=1663324415",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/desk_18.jpg?v=1663324415",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/CATE_DESK_18.jpg?v=1663324418",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/desk_19.jpg?v=1663324415",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/CATE_DESK_17.jpg?v=1663324415",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/desk_17.jpg?v=1663324415",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/desk_18.jpg?v=1663324415",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/CATE_DESK_18.jpg?v=1663324418",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/desk_19.jpg?v=1663324415",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/CATE_DESK_17.jpg?v=1663324415",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/desk_17.jpg?v=1663324415",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/desk_18.jpg?v=1663324415",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/CATE_DESK_18.jpg?v=1663324418",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/desk_19.jpg?v=1663324415",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/CATE_DESK_17.jpg?v=1663324415",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/desk_17.jpg?v=1663324415",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/desk_18.jpg?v=1663324415",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/CATE_DESK_18.jpg?v=1663324418",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/desk_19.jpg?v=1663324415",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/CATE_DESK_17.jpg?v=1663324415"

    ];
    return (
      <div className="App">
        <div className="slide-container">
          <Slide ref={this.slideRef} {...properties}>
            {slideImages.map((each, index) => (
              <div key={index} className="each-slide">
                <img className="lazy" src={each} alt="sample" />
              </div>
            ))}
          </Slide>
        </div>
      </div>
    );
  }
}

export default Apps;
