import { Card } from "semantic-ui-react";

function ProductList({ products }) {
  function mapProductsToItems(products) {
    return products.map(product => ({
      header: product.name,
      image: product.mediaUrl,
      meta: `$${product.price}`,
      color: "teal",
      fluid: true,
      childKey: product._id,
      href: `/product?_id=${product._id}`
    }));
  }

  return (
    // <div className="product-styling">
    <Card.Group
    // className="product-styling"
    // style={{width:"70vw"}}
      stackable
      itemsPerRow="2"
      centered
      items={mapProductsToItems(products)}
    />
    // </div>
  );
}

export default ProductList;
