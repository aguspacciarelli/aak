import styles from "./Hero.module.css";

const Hero = ({ mainText }) => {
  return (
    <div className={styles["container"]}>
      <div className={styles["hero_bkg"]}>
        <h1>{mainText}</h1>
        <button>Quiero ir</button>
      </div>
    </div>
  );
};

export default Hero;