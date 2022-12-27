import Image from "next/image";
import style from "../../styles/MainCard.module.scss";

export default function MainCard() {
  return (
    <div className={style.mainCard}>
      <h3 className={style.mainCard_title}>Всё для комфортной работы</h3>
      <Image
        width={40}
        height={40}
        src="/images/arrow.svg"
        alt=""
        className={style.mainCard_arrow}
      />
      <div className={style.mainCard_banners}>
        <div className={style.mainCard_banner}>
          <div className={style.mainCard_background}>
            <div className={style.mainCard_background_image}></div>
          </div>
          <div className={style.mainCard_banner_description}>
            <div className={style.mainCard_banner_description_wrap}>
              <p className={style.mainCard_banner_discount}>
                -25%{" "}
                <span className={style.mainCard_banner_break}>
                  {" "}
                  на товары для кабинета
                </span>
              </p>
              <button className={style.mainCard_banner_discount_buttun}>
                Выбрать
              </button>
            </div>
          </div>
        </div>
        <div className={style.mainCard_banner}>
          <div className={style.mainCard_banner_description}>
            <div
              className={`${style.mainCard_banner_description_wrap} ${style.mainCard_banner_description_wrap_inverted}`}
            >
              <p
                className={`${style.mainCard_banner_discount} ${style.mainCard_banner_discount_inverted}`}
              >
                <span className={style.mainCard_banner_break_amount}>10%</span>
                Скидка
                <span
                  className={`${style.mainCard_banner_break} ${style.mainCard_banner_break_inverted}`}
                >
                  на периферию для компьютера
                </span>
              </p>
              <button
                className={`${style.mainCard_banner_discount_buttun} ${style.mainCard_banner_discount_buttun_inverted}`}
              >
                Выбрать
              </button>
            </div>
          </div>
          <div className={style.mainCard_background}>
            <div className={style.mainCard_background_image_inverted}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
