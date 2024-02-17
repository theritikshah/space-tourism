import styles from "../navbar.module.scss";

export default function NavItem({
  onClick,
  label,
  value,
  count,
  isActive,
}: {
  onClick: Function | (() => {});
  label: string;
  count: number;
  value?: string | number;
  isActive: boolean;
}) {
  return (
    <li className={isActive ? styles.active : ""} onClick={() => onClick()}>
      <b>{`0${count}`}</b>
      {label}
    </li>
  );
}
