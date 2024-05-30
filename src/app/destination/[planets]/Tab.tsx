"use client";
import { useParams, usePathname } from "next/navigation";
import styles from "./destination.module.scss";

type Props = {
  planets: string[];
};

const Tab = ({ planets }: Props) => {
  const { planets: currentPlanet } = useParams();

  return (
    <div className={styles.menu}>
      {planets.map((planet) => {
        return (
          <a
            className={`${styles.menuItem} ${
              currentPlanet == planet ? styles.active : ""
            }`}
            href={`${process.env.HOST_ADDRESS}/destination/${planet}`}
          >
            {planet}
          </a>
        );
      })}
    </div>
  );
};

export default Tab;
