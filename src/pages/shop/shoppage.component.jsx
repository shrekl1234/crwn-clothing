import React from "react";
import SHOP_DATA from "./shoppage.data.js";
import CollectionPreview from "../../components/collection/collection-preview.component";
const Shoppage = () => {

    const [collection] = React.useState(SHOP_DATA);


  return (
    <div className="">
      <h1 style={{ textAlign: "center" }}>SHOP</h1>
      {
          collection.map(({id, ...otherCollectionProps}) =>(
             <CollectionPreview key= {collection.id} {...otherCollectionProps} />
          ))
      }
    </div>
  );
};
export default Shoppage;
