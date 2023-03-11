import * as React from "react";
import Button from "../shared/Button";
import className from "./style.module.css";
import reservationImage from "../../assets/img/restaurant.jpg";
import reservationImage2 from "../../assets/img/restaurantchefB.jpg";
import ProductCard from "../shared/ProductCard";
import saladImage from "../../assets/img/greek_salad.jpg";
import ratingLogo from "../../assets/img/Recent.svg";

const Main = () => {
  return (
    <main className={className.main}>
      <section
        id="reservation"
        className={[className.section, className.section_reservation].join(" ")}
      >
        <section>
          <h1>Little lemon</h1>
          <h3>Chicago</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea nisi
            soluta odio sunt cum dolorem necessitatibus possimus facere ratione
            sint? Animi, quas dolores ut necessitatibus nesciunt perferendis
            minima dolorem, officia provident corrupti tempora. Quos quis dolore
            neque ipsa in quisquam.
          </p>
          <Button
            title="Reserve a Table"
            className={className.section_reservation_button}
          />
        </section>
        <img src={reservationImage} alt="restaurant illustration.png" />
      </section>
      <section
        id="order"
        className={[className.section, className.order].join(" ")}
      >
        <div className={className.order_header}>
          <h1>Specials</h1>
          <Button title="Online Menu" />
        </div>
        <section className={className.product_list}>
          <ProductCard
            imgAlt="salad"
            imgSource={saladImage}
            title="Greek Salad"
            price="$12.29"
            description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "
            isDelivery
          />
          <ProductCard
            imgAlt="Bruchetta"
            imgSource={saladImage}
            title="Bruchetta"
            price="$5.29"
            description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
            isDelivery
          />
          <ProductCard
            imgAlt={"Lemon Dessert"}
            imgSource={saladImage}
            title="Lemon Dessert"
            price="$5.00"
            description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
            isDelivery
          />
        </section>
      </section>
      <section
        id="testimonial"
        className={[className.section, className.section_testimonial].join(" ")}
      >
        <h1>Testimonial</h1>
        <section
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: 800,
            marginTop: "3em",
          }}
        >
          {[
            {
              name: "John Doe",
              rating: "4.5",
              comment: "Food fresh, nice services",
            },
            {
              name: "Jane Deo",
              rating: "4.2",
              comment: "A bit small on portion but worth it",
            },
            {
              name: "Ben Chan",
              rating: "4.8",
              comment: "Best Restaurant Around",
            },
          ].map(({ name, rating, comment }) => {
            return (
              <article
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "between",
                }}
              >
                <h1 style={{ fontSize: "2em", margin: "0 0" }}>{rating}</h1>
                <article
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "between",
                    fontSize: "16px",
                  }}
                >
                  <img src={ratingLogo} alt="ratinglogo.png" />
                  <h2 style={{ fontSize: "1.5em", marginLeft: "1em" }}>
                    {name}
                  </h2>
                </article>
                <p>{comment}</p>
              </article>
            );
          })}
        </section>
      </section>
      <section
        id="oaboutrder"
        className={[className.section, className.section_about].join(" ")}
      >
        <section>
          <h1>Little lemon</h1>
          <h3>Chicago</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            quaerat officiis rem vero ab accusamus quasi distinctio saepe modi
            nostrum inventore repellat, corporis laudantium doloribus eveniet
            repellendus quisquam adipisci expedita in. Doloremque alias,
            aspernatur consequatur aperiam error earum saepe eveniet excepturi,
            quibusdam, beatae dolore aliquam. Inventore recusandae voluptatibus
            delectus et?
          </p>
        </section>
        <img src={reservationImage2} alt="restaurant illustration.png" />
      </section>
    </main>
  );
};

export default Main;
