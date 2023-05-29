import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';
import {AiFillStar} from 'react-icons/ai'
const Product = () => {
  return (
    <>
      <div className={styles.products}>
        <div className={styles.products__title}>
          <h2>Điện thoại</h2>
        </div>
        <div className={styles.products__items}>
          <div className={styles.products__item}>
            <div className={styles.flag_top}>
              <p>Trả góp 0%</p>
              <p>Giảm 2.000.000đ</p>
            </div>
            <NavLink to={`/slug`}>
              <div className={styles.product_img}>
                <img
                  src="https://www.xtmobile.vn/vnt_upload/product/12_2021/thumbs/(600x600)_crop_iphone-8-plus-64gb-may-cu-99.jpg"
                  alt=""
                />
              </div>
              <div className={styles.product_info}>
                <p className={styles.product_info_title}>
                  Samsung Galaxy Note 10 5G (12GB|256GB) Hàn Quốc SM-N971N (Cũ
                  99%)
                </p>
                <div className={styles.product_info_price}>
                  <p>6.700.000đ</p>
                  <p>8.900.000đ</p>
                </div>
                <div className={styles.star}>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product