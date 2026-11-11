import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="header">
      <nav class="nav container" aria-label="Navigation principale">
        <a class="nav-brand" routerLink="/" aria-label="Moussa KANTÉ — Accueil">
          <span class="brand-mark">MK</span>
          <span class="brand-name">Moussa KANTÉ<span class="brand-role">Software engineer</span></span>
        </a>

        <ul class="nav-links">
          <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Accueil</a></li>
          <li><a routerLink="/about" routerLinkActive="active">À propos</a></li>
          <li><a routerLink="/projects" routerLinkActive="active">Projets</a></li>
        </ul>

        <a class="nav-contact" routerLink="/contact">Discutons <span aria-hidden="true">↗</span></a>
      </nav>
    </header>
  `,
  styles: [`
    .header {
      position: sticky;
      top: 0;
      z-index: 100;
      border-bottom: 1px solid rgba(29, 39, 34, 0.08);
      background: rgba(245, 244, 238, 0.9);
      backdrop-filter: blur(16px);
    }

    .nav {
      display: flex;
      min-height: 5rem;
      align-items: center;
      justify-content: space-between;
      gap: 1.5rem;
    }

    .nav-brand {
      display: inline-flex;
      align-items: center;
      gap: 0.7rem;
      color: var(--ink);
      text-decoration: none;
    }

    .brand-mark {
      display: grid;
      width: 2.45rem;
      height: 2.45rem;
      place-items: center;
      border-radius: 50%;
      color: var(--dark);
      background: var(--accent);
      font-family: var(--serif);
      font-size: 0.9rem;
    }

    .brand-name {
      display: grid;
      font-size: 0.86rem;
      font-weight: 700;
      line-height: 1.2;
    }

    .brand-role {
      margin-top: 0.18rem;
      color: var(--muted);
      font-size: 0.63rem;
      font-weight: 400;
      letter-spacing: 0.04em;
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: clamp(1.2rem, 3vw, 2.6rem);
      margin: 0;
      padding: 0;
      list-style: none;
    }

    .nav-links a {
      position: relative;
      color: var(--muted);
      font-size: 0.8rem;
      font-weight: 600;
      text-decoration: none;
      transition: color 160ms ease;
    }

    .nav-links a::after {
      position: absolute;
      right: 0;
      bottom: -0.5rem;
      left: 0;
      height: 2px;
      transform: scaleX(0);
      transform-origin: left;
      background: var(--accent-dark);
      content: '';
      transition: transform 160ms ease;
    }

    .nav-links a:hover,
    .nav-links a.active {
      color: var(--ink);
    }

    .nav-links a.active::after,
    .nav-links a:hover::after {
      transform: scaleX(1);
    }

    .nav-contact {
      display: inline-flex;
      align-items: center;
      gap: 0.8rem;
      padding: 0.65rem 0.9rem 0.65rem 1rem;
      border: 1px solid var(--line);
      border-radius: 999px;
      color: var(--ink);
      font-size: 0.76rem;
      font-weight: 650;
      text-decoration: none;
      transition: background 160ms ease;
    }

    .nav-contact:hover {
      background: var(--accent);
      text-decoration: none;
    }

    .nav-contact span {
      font-size: 1rem;
    }

    @media (max-width: 620px) {
      .nav {
        min-height: 4.4rem;
        gap: 0.75rem;
      }

      .brand-role,
      .nav-contact {
        display: none;
      }

      .brand-mark {
        width: 2.2rem;
        height: 2.2rem;
      }

      .nav-links {
        gap: 1rem;
      }

      .nav-links a {
        font-size: 0.74rem;
      }
    }
  `]
})
export class HeaderComponent {}
