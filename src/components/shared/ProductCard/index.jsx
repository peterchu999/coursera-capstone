import * as React from "react";
import className from "./style.module.css";
const ProductCard = ({
  title,
  price,
  description,
  isDelivery,
  imgSource,
  imgAlt,
}) => {
  return (
    <artilce className={className.card}>
      <img className={className.card_image} src={imgSource} alt={imgAlt} />
      <section className={className.card_title_section}>
        <h1 className={className.card_title}>{title}</h1>
        <h1 className={className.card_price} style={{ color: "#EE9972" }}>
          {price}
        </h1>
      </section>
      <p className={className.card_description}>{description}</p>
      <h3 className={className.card_footer_text}>
        {isDelivery ? "Order a Delivery" : "Dine-in only"}
      </h3>
    </artilce>
  );
};

export default ProductCard;
