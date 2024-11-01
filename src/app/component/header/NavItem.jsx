import Link from "next/link";

export default function NavItem({
  href,
  index,
  activeIndex,
  setActiveIndex,
  children,
}) {
  return (
    <li
      className={activeIndex === index ? "active" : ""}
      onClick={() => setActiveIndex(index)}
    >
      <Link href={href}>{children}</Link>
    </li>
  );
}
