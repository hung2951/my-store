import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';
import { GoTrashcan } from "react-icons/go";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { IoAdd, IoRemoveOutline } from "react-icons/io5";
const Cart = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <NavLink to="/">
            <span>
              <AiOutlineDoubleLeft />
            </span>
            Tiếp tục mua hàng
          </NavLink>
          <p>Giỏ hàng của bạn</p>
        </div>
        <div className={styles.product__cart}>
          <div className={styles.left}>
            <img
              src="https://www.xtmobile.vn/vnt_upload/product/02_2023/thumbs/(200x200)_crop_galaxy-s23-ultra-8gb-256gb.jpg"
              alt=""
            />
          </div>
          <div className={styles.right}>
            <div className={styles.info}>
              <p className={styles.name}>
                Samsung Galaxy S23 Ultra ( <span>8GB|256GB</span> ) (CTY)
              </p>
              <p className={styles.price}>20.790.000đ</p>
              <p className={styles.color}>Màu:Kem</p>
            </div>
            <div className={styles.action}>
              <div className={styles.quantity}>
                <p>
                  <IoRemoveOutline />
                </p>
                <p>2</p>
                <p>
                  <IoAdd />
                </p>
              </div>
              <div className={styles.remove}>
                <GoTrashcan />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.btn__cart}>
          <button>
            <NavLink to="/check-out">Tiếp tục</NavLink>
          </button>
        </div>
      </div>
    </>
  );
}

export default Cart