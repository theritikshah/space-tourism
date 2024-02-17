import styles from "../navbar.module.scss";

export default function NavItem({
  onClick,
  label,
  value,
  count,
  activeIndex,
}: {
  onClick: Function | (() => {});
  label: string;
  count: number;
  value?: string | number;
  activeIndex: number;
}) {
  return (
    <li
      className={activeIndex === count ? styles.active : ""}
      onClick={() => onClick()}
    >
      <b>{`0${count}`}</b>
      {label}
    </li>
  );
}
