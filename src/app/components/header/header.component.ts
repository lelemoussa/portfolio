import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="header">
      <nav class="nav container">
        <a class="nav-brand" routerLink="/" aria-label="Accueil">
          <span class="brand-mark">MK</span>
          <span>Moussa KANTÉ</span>
        </a>

        <ul class="nav-links">
          <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Accueil</a></li>
          <li><a routerLink="/about" routerLinkActive="active">À propos</a></li>
          <li><a routerLink="/projects" routerLinkActive="active">Projets</a></li>
          <li><a routerLink="/contact" routerLinkActive="active">Contact</a></li>
        </ul>
      </nav>
    </header>
  `,
  styles: [`
    .header {
      position: sticky;
      top: 0;
      z-index: 100;
      background: rgba(15, 23, 42, 0.88);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(148, 163, 184, 0.2);
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      min-height: 76px;
    }

    .nav-brand {
      display: inline-flex;
      align-items: center;
      gap: 0.8rem;
      text-decoration: none;
      color: #f8fafc;
      font-weight: 700;
      letter-spacing: 0.02em;
    }

    .brand-mark {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 2.25rem;
      height: 2.25rem;
      border-radius: 0.7rem;
      background: linear-gradient(135deg, #60a5fa, #8b5cf6);
      color: white;
      font-size: 0.8rem;
    }

    .nav-links {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      gap: 2rem;
    }

    .nav-links a {
      text-decoration: none;
      color: #cbd5e1;
      font-weight: 600;
      transition: color 0.2s ease;
    }

    .nav-links a:hover,
    .nav-links a.active {
      color: #ffffff;
    }

    @media (max-width: 768px) {
      .nav {
        flex-direction: column;
        padding: 1rem;
        gap: 0.8rem;
      }

      .nav-links {
        gap: 1rem;
        flex-wrap: wrap;
        justify-content: center;
      }
    }
  `]
})
export class HeaderComponent {}