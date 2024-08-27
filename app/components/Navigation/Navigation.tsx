"use client"

import Link from 'next/link';
import CabinLogo from '../SVG/cabinLogo.svg'

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <CabinLogo />
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
