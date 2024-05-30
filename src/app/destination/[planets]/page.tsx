import React from "react";

import styles from "./destination.module.scss";
import Image from "next/image";
import { useData } from "@/hooks/useData";
import Tab from "./Tab";

export type Planet = {
  name: string;
  image: { png: string; webp: string };
  description: string;
  distance: string;
  travel: string;
};

const Planets = async (props: any) => {
  console.log("props log", props);

  const data = await useData("destinations");
  const planetData = data.find(
    (planet: any) => planet.name == props.params.planets
  );

  const planets = data.map((planet: Planet) => planet.name);

  const { images, name, description, distance, travel } = planetData;

  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <h5>
          <span style={{ opacity: 0.25 }}>01</span> PICK YOUR DESTINATION
        </h5>
        <div className={styles.image}>
          <Image
            layout="fill"
            objectFit="contain"
            src={images.png.slice(1)}
            alt={props.params.planets}
            loading="lazy"
          />
        </div>
      </div>
      <div className={styles.details}>
        <Tab planets={planets} />
        <h1>{name}</h1>
        <p>{description}</p>
        <hr />
        <div className={styles.sub_details_container}>
          <SubDetails label="AVG. DISTANCE" value={distance} />
          <SubDetails label="EST. TRAVEL TIME" value={travel} />
        </div>
      </div>
    </div>
  );
};

export default Planets;

function SubDetails({ value, label }: { value: string; label: string }) {
  return (
    <div className={styles.sub_details}>
      <span className={styles.sub_details_label}>{label}</span>
      <span className={styles.sub_details_value}>{value}</span>
    </div>
  );
}

// function Tab({ planets }: { planets: string[] }) {
//   return (
//     <div className={styles.menu}>
//       {planets.map((planet) => {
//         return (
//           <a
//             className={styles.menuItem}
//             href={`${process.env.HOST_ADDRESS}/destination/${planet}`}
//           >
//             {planet}
//           </a>
//         );
//       })}
//     </div>
//   );
// }
