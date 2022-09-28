import React from "react";

const list = [

  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/serum.jpg?v=1652438356",
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/moist.jpg?v=1652438356",
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/acne_3_7d4b5389-228e-42ce-9008-0454cff9e3d2.jpg?v=1652438447",
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/glow_3.jpg?v=1652438348",
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/serum.jpg?v=1652438356"

];

const Bar = () => {
  return (
    <>
      {list.map((item) => {
        return (
          <>
            <img style={{ display: "flex" ,marginRight:"100px",borderRadius:"10px"}} src={item} />
          </>
        );
      })}
    </>
  );
};


const Scroll = () => {
  return (
    <>
      <div
        style={{
          padding: "20px"
        }}
      >
    
        <div style={{ display: "flex", overflowX: "scroll", padding: "5px" }}>
          <Bar />
        </div>
      </div>
    </>
  );
};

export default Scroll;
