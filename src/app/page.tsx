import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <h5 className="subheading-1">SO, YOU WANT TO TRAVEL TO</h5>
        <h1>SPACE</h1>
        <p style={{ color: "#D0D6F9", lineHeight: "3.2rem", margin: 0 }}>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className={styles.button}>
        <div className={styles.explore}>
          <h4>EXPLORE</h4>
        </div>
      </div>
    </main>
  );
}
