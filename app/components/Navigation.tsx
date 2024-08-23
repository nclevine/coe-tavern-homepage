import Link from 'next/link';

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            LOGO TK
            {/* <img src="/path/to/logo.png" alt="Coe Tavern Logo" /> */}
          </Link>
        </li>
        <li>
          <Link href="/menu">Menu</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/reservations">Reservations</Link>
        </li>
      </ul>
    </nav>
  );
}
