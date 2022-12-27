// react
import { useEffect, useState } from "react";

// next
import Image from "next/image";

// style
import style from "../../styles/Card.module.scss";

// types
import { CardsResponse, CartStore } from "../../types";

export default function Card({
  el,
  cart,
  updateCart,
  setFavourites,
}: {
  el: CardsResponse;
  cart: CartStore[];
  updateCart: (newCart: CartStore[]) => void;
  setFavourites: (cardId: number, favourites: boolean) => void;
}) {
  const [quantity, setQuantity] = useState(1);
  const [activationCard, setActivationCard] = useState(false);
  const [activationFavourites, setActivationFavourites] = useState(false);
  const [isFavourites, setIsFavourites] = useState(false);

  function favouritesHandler() {
    setIsFavourites(!isFavourites);
    setActivationFavourites(true);
  }

  useEffect(() => {
    if (!activationFavourites) return;

    setFavourites(el.id, isFavourites);
    // eslint-disable-next-line
  }, [activationFavourites]);

  useEffect(() => {
    if (!activationCard) return;

    const addedProduct = {
      id: el.id,
      title: el.title,
      quantity,
      isFavourites,
    };

    updateCart([...cart, addedProduct]);
    // eslint-disable-next-line
  }, [activationCard]);

  function getStars() {
    const starsQuantity = Math.round(el.rating.rate);
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < starsQuantity) {
        stars.push(
          <Image height={14} width={14} src="/images/star.svg" alt="" key={i} />
        );
      } else {
        stars.push(
          <Image
            height={14}
            width={14}
            src="/images/starGrey.svg"
            alt=""
            key={i}
          />
        );
      }
    }

    return stars;
  }

  return (
    <div className={style.card}>
      <div
        className={
          el.rating.count >= 300
            ? `${style.card_mainImage_after} ${style.card_mainImage_before} ${style.card_mainImage}`
            : `${style.card_mainImage}`
        }
      >
        <Image height={220} width={220} priority={true} src={el.image} alt="" />
      </div>
      <div className={style.card_meta}>
        <div className={style.card_meta_reviewsWrap}>
          <p>{el.category}</p>
          <div className={style.card_meta_reviews}>
            <div className={style.card_meta_reviews_stars}>{getStars()}</div>{" "}
            {el.rating.count} отзывов
          </div>
        </div>
        <p className={style.card_meta_desc}>
          {el.description.length <= 200
            ? el.description
            : `${el.description.substring(0, 200)} ...`}
        </p>
        <div className={style.card_meta_cost}>
          {(el.price * 70).toLocaleString().replace(",", ".")}
          <span className={style.card_meta_cost_pieces}> /шт.</span>
        </div>
        <div className={style.card_meta_action}>
          <div>
            {!activationCard ? (
              <button
                className={style.card_meta_action_button_add}
                onClick={() => setActivationCard(!activationCard)}
              >
                В корзину
              </button>
            ) : (
              <button
                className={`${style.card_meta_action_button_add} ${style.card_meta_action_button_added}`}
              >
                В корзине
              </button>
            )}
            <div className={style.card_meta_action_button_quantity}>
              <button
                onClick={() => setQuantity(quantity === 1 ? 1 : quantity - 1)}
              >
                —
              </button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>
          <Image
            height={40}
            width={40}
            src="/images/favourites.svg"
            className={isFavourites ? style.card_meta_action_favourites : ""}
            alt=""
            onClick={() => favouritesHandler()}
          />
        </div>
      </div>
    </div>
  );
}
