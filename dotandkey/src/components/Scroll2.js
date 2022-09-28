import React from "react";

const list = [
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/articles/image9_1_275ad895-276f-47fa-88e2-ac71ee360fe5.jpg?v=1661766914",
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/articles/image4_1090475a-9d80-4551-9acf-de970174b2e2_900x_1.jpg?v=1661766999",
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/articles/image2_1_34fcf5e3-632a-4e53-b01c-4f3cff69ee44.jpg?v=1661767044",
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/articles/image3_1_8160326a-0d0e-4684-ba37-9503999b65c3.jpg?v=1661767023",
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/articles/image1_1_60bb893e-09b6-4271-b611-82af2207f2db_1_1_1.jpg?v=1662657080",
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/articles/image4_1_283bb0ab-a4a0-4e34-8613-9735eeaf9a52.jpg?v=1661766889",
];

const Bar = () => {
  return (
    <>
      {list.map((item) => {
        return (
          <>
            <img
              style={{
                display: "flex",
                marginRight: "50px",
                borderRadius: "10px",
                height: "300px",
              }}
              src={item}
            />
          </>
        );
      })}
    </>
  );
};

const Scroll2 = () => {
  return (
    <>
      <div className="banner2">
        <p className="p2 ">OUR</p>

        <h1 className="p2">SKINCARE JOURNAL</h1>
      </div>
      <div
        style={{
          padding: "20px",
        }}
      >
        <div style={{ display: "flex", overflowX: "scroll", padding: "5px" }}>
          <Bar />
        </div>
      </div>
      <br />
      <br />

      <hr />
    </>
  );
};

export default Scroll2;
