import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  template: `
    <section class="projects">
      <div class="container">
        <h1>Mes Projets</h1>
        <p class="section-description">
          Découvrez mes réalisations en développement backend, data science et applications interactives.
        </p>
        
        <div class="projects-grid">
          <!-- Projet 1: Plateforme FinTech -->
          <div class="project-card featured">
            <div class="project-header">
              <h3>Plateforme d'Investissement Participatif</h3>
              <span class="project-type">FinTech • Backend</span>
            </div>
            <p class="project-description">
              Plateforme complète permettant aux investisseurs de financer des projets avec gestion des paiements, 
              authentification avancée (2FA), KYC, et marché secondaire.
            </p>
            <div class="project-features">
              <h4>Fonctionnalités clés :</h4>
              <ul>
                <li>Authentification JWT + OAuth (Google, Facebook, Apple)</li>
                <li>Système 2FA avec OTP (Speakeasy)</li>
                <li>Gestion des rôles et KYC investisseurs</li>
                <li>Intégration Stripe et Mobile Money</li>
                <li>Notifications multi-canal (push, email)</li>
                <li>Back-office administrateur complet</li>
              </ul>
            </div>
            <div class="tech-stack">
              <span class="tech">NestJS</span>
              <span class="tech">GraphQL</span>
              <span class="tech">Prisma</span>
              <span class="tech">PostgreSQL</span>
              <span class="tech">Angular</span>
              <span class="tech">Stripe</span>
              <span class="tech">GCS</span>
            </div>
            <div class="project-links">
              <a href="#" class="btn btn-primary">Voir le code</a>
              <a href="#" class="btn btn-secondary">Démo</a>
            </div>
          </div>

          <!-- Projet 2: CultivOire -->
          <div class="project-card">
            <div class="project-header">
              <h3>CultivOire - Borne Interactive Culturelle</h3>
              <span class="project-type">Hackathon • PWA</span>
            </div>
            <p class="project-description">
              Application PWA pour bornes interactives valorisant la culture ivoirienne avec 6 modules éducatifs, 
              quiz interactifs et assistant vocal.
            </p>
            <div class="project-features">
              <h4>Réalisations :</h4>
              <ul>
                <li>Interface tactile optimisée pour bornes</li>
                <li>6 modules culturels interactifs</li>
                <li>Système de quiz avec scoring</li>
                <li>Assistant vocal intégré</li>
                <li>Sauvegarde de progression utilisateur</li>
                <li>Architecture PWA responsive</li>
              </ul>
            </div>
            <div class="tech-stack">
              <span class="tech">React</span>
              <span class="tech">PWA</span>
              <span class="tech">Supabase</span>
              <span class="tech">PostgreSQL</span>
              <span class="tech">Web Speech API</span>
            </div>
            <div class="project-links">
              <a href="#" class="btn btn-primary">Voir le projet</a>
            </div>
          </div>

          <!-- Projet 3: Système de Notifications -->
          <div class="project-card">
            <div class="project-header">
              <h3>Système de Notifications Intelligent</h3>
              <span class="project-type">Backend • Microservice</span>
            </div>
            <p class="project-description">
              Système multi-canal pour notifications push, email et internes avec typage avancé et 
              historique complet des communications.
            </p>
            <div class="project-features">
              <h4>Architecture :</h4>
              <ul>
                <li>Notifications temps réel</li>
                <li>Typage strict (NotificationType, SubType)</li>
                <li>Mapping automatique des sous-types</li>
                <li>Historique et traçabilité</li>
                <li>Intégration multi-projets</li>
              </ul>
            </div>
            <div class="tech-stack">
              <span class="tech">NestJS</span>
              <span class="tech">WebSockets</span>
              <span class="tech">TypeScript</span>
              <span class="tech">PostgreSQL</span>
            </div>
          </div>

          <!-- Projet 4: Back-office Admin -->
          <div class="project-card">
            <div class="project-header">
              <h3>Back-office Administrateur</h3>
              <span class="project-type">Frontend • Dashboard</span>
            </div>
            <p class="project-description">
              Interface de gestion complète avec authentification par rôles, gestion des projets, 
              validation KYC et tableaux de bord analytiques.
            </p>
            <div class="project-features">
              <h4>Modules :</h4>
              <ul>
                <li>Authentification multi-rôles</li>
                <li>Gestion des investissements</li>
                <li>Validation KYC automatisée</li>
                <li>Pagination unifiée</li>
                <li>GraphQL Resolvers Admin</li>
              </ul>
            </div>
            <div class="tech-stack">
              <span class="tech">Angular</span>
              <span class="tech">GraphQL</span>
              <span class="tech">TypeScript</span>
              <span class="tech">RxJS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .projects {
      padding: 4rem 0;
      background: #f8fafc;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }
    
    h1 {
      text-align: center;
      font-size: 3rem;
      margin-bottom: 1rem;
      color: #1e293b;
    }
    
    .section-description {
      text-align: center;
      font-size: 1.1rem;
      color: #64748b;
      max-width: 600px;
      margin: 0 auto 3rem;
      line-height: 1.6;
    }
    
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
      gap: 2rem;
    }
    
    .project-card {
      background: white;
      border-radius: 1rem;
      padding: 2rem;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      transition: transform 0.3s, box-shadow 0.3s;
    }
    
    .project-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 25px rgba(0,0,0,0.15);
    }
    
    .project-card.featured {
      border-left: 4px solid #2563eb;
      grid-column: span 2;
    }
    
    .project-header {
      margin-bottom: 1rem;
    }
    
    .project-header h3 {
      color: #1e293b;
      margin-bottom: 0.5rem;
      font-size: 1.5rem;
    }
    
    .project-type {
      background: #e2e8f0;
      color: #475569;
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      font-size: 0.875rem;
      font-weight: 500;
    }
    
    .project-description {
      color: #64748b;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }
    
    .project-features {
      margin-bottom: 1.5rem;
    }
    
    .project-features h4 {
      color: #374151;
      margin-bottom: 0.5rem;
      font-size: 1rem;
    }
    
    .project-features ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    .project-features li {
      color: #64748b;
      padding: 0.25rem 0;
      position: relative;
      padding-left: 1.5rem;
    }
    
    .project-features li::before {
      content: "✓";
      color: #10b981;
      font-weight: bold;
      position: absolute;
      left: 0;
    }
    
    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1.5rem;
    }
    
    .tech {
      background: #dbeafe;
      color: #1e40af;
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      font-size: 0.875rem;
      font-weight: 500;
    }
    
    .project-links {
      display: flex;
      gap: 1rem;
    }
    
    .btn {
      padding: 0.5rem 1.5rem;
      border-radius: 0.5rem;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s;
      text-align: center;
    }
    
    .btn-primary {
      background: #2563eb;
      color: white;
    }
    
    .btn-primary:hover {
      background: #1d4ed8;
    }
    
    .btn-secondary {
      background: transparent;
      color: #2563eb;
      border: 2px solid #2563eb;
    }
    
    .btn-secondary:hover {
      background: #2563eb;
      color: white;
    }
    
    @media (max-width: 768px) {
      .projects-grid {
        grid-template-columns: 1fr;
      }
      
      .project-card.featured {
        grid-column: span 1;
      }
      
      h1 {
        font-size: 2rem;
      }
    }
  `]
})
export class ProjectsComponent {}