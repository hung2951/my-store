import styles from './styles.module.css';
const Footer = () => {
  return (
    <>
      <footer>
        <div className={styles.container}>
          <p>
            Copyright © 2023
            <a href="https://github.com/hung2951/phone-store" target='_blank'>
              Phone Store.
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer