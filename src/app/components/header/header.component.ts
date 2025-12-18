import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="header">
      <nav class="nav">
        <div class="nav-brand">
          <h2>Kanté Moussa</h2>
        </div>
        <ul class="nav-links">
          <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Accueil</a></li>
          <li><a routerLink="/about" routerLinkActive="active">À propos</a></li>
          <li><a routerLink="/projects" routerLinkActive="active">Projets</a></li>
          <li><a routerLink="/contact" routerLinkActive="active">Contact</a></li>
        </ul>
      </nav>
    </header>
  `,
  styles: [`
    .header {
      background: #fff;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      position: sticky;
      top: 0;
      z-index: 100;
    }
    
    .nav {
      max-width: 1200px;
      margin: 0 auto;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .nav-brand h2 {
      color: #2563eb;
      margin: 0;
      font-weight: 600;
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
      color: #64748b;
      font-weight: 500;
      transition: color 0.3s;
    }
    
    .nav-links a:hover,
    .nav-links a.active {
      color: #2563eb;
    }
    
    @media (max-width: 768px) {
      .nav {
        padding: 1rem;
      }
      
      .nav-links {
        gap: 1rem;
      }
    }
  `]
})
export class HeaderComponent {}