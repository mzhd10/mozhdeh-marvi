export default function NavbarLinks({ href, label, active, onClick }) {
  return (
    <div>
      <li>
        <a href={href} className={active ? "active" : ""} onClick={onClick}>
          {label}
        </a>
      </li>
    </div>
  );
}
