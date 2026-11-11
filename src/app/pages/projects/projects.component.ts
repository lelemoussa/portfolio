import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  template: `
    <section class="projects">
      <div class="container">
        <h1>Mes réalisations</h1>
        <p class="section-description">
          Des projets orientés backend, sécurité, cloud et data, construits pour résoudre des
          problèmes réels avec une vraie valeur métier.
        </p>

        <div class="projects-grid">
          <article class="project-card featured">
            <div class="project-header">
              <h3>Payment Gateway Backend</h3>
              <span class="project-type">Fintech • Sécurité critique</span>
            </div>
            <p class="project-description">
              Durcissement complet de l'authentification admin avec génération sécurisée de mots de
              passe temporaires, JWT dynamique, verrouillage anti-bruteforce et workflow de première
              connexion obligatoire.
            </p>
            <div class="project-features">
              <h4>Réalisations clés</h4>
              <ul>
                <li>Politique Zero-Trust et règle de mot de passe renforcée</li>
                <li>Blocage temporaire du compte après 5 échecs consécutifs</li>
                <li>Protection des routes avec garde JWT et obligation de changement de mot de passe</li>
                <li>Notifications de sécurité envoyées via Brevo sécurisé</li>
              </ul>
            </div>
            <div class="tech-stack">
              <span class="tech">NestJS</span>
              <span class="tech">TypeScript</span>
              <span class="tech">JWT</span>
              <span class="tech">PostgreSQL</span>
              <span class="tech">Brevo</span>
            </div>
          </article>

          <article class="project-card">
            <div class="project-header">
              <h3>Automatisation Cloud &amp; CI/CD</h3>
              <span class="project-type">Cloud • DevOps</span>
            </div>
            <p class="project-description">
              Provisioning Terraform sur GCP et pipelines GitHub Actions pour déploiement automatisé de
              services backend avec sécurité renforcée et zéro-downtime.
            </p>
            <div class="project-features">
              <h4>Points forts</h4>
              <ul>
                <li>Provisioning de Cloud Run, Cloud SQL, Cloud Storage, IAM et firewall</li>
                <li>Remote state sécurisé et verrouillage de concurrence</li>
                <li>Build, tests, scan et déploiement via GitHub Actions</li>
                <li>Authentification OIDC sans secret long terme</li>
              </ul>
            </div>
            <div class="tech-stack">
              <span class="tech">GCP</span>
              <span class="tech">Terraform</span>
              <span class="tech">GitHub Actions</span>
              <span class="tech">Docker</span>
              <span class="tech">Cloud Run</span>
            </div>
          </article>

          <article class="project-card">
            <div class="project-header">
              <h3>Youmpi Delivery Backend</h3>
              <span class="project-type">Logistique • Backend</span>
            </div>
            <p class="project-description">
              Conception d'un service de notifications transactionnelles et de validation d'identité,
              avec flux de livraison, sécurité des clés et industrialisation via conteneurs.
            </p>
            <div class="project-features">
              <h4>Livrables</h4>
              <ul>
                <li>Service d'envoi d'e-mails transactionnels centralisé</li>
                <li>Codes de validation à durée limitée</li>
                <li>Notifications critiques sur événements de livraison</li>
                <li>Environnement de dev isolé avec Docker</li>
              </ul>
            </div>
            <div class="tech-stack">
              <span class="tech">NestJS</span>
              <span class="tech">PostgreSQL</span>
              <span class="tech">Docker</span>
              <span class="tech">Brevo</span>
            </div>
          </article>

          <article class="project-card">
            <div class="project-header">
              <h3>Stonivest Backend</h3>
              <span class="project-type">Finance • Communications</span>
            </div>
            <p class="project-description">
              Mise en place d'un service de mailing transactionnel multi-templates pour onboarding,
              confirmations d'opérations et alertes de sécurité.
            </p>
            <div class="project-features">
              <h4>Aspects techniques</h4>
              <ul>
                <li>Modélisation des flux de notification métier</li>
                <li>Standardisation des secrets et variables d'environnement</li>
                <li>Règles de sécurité pour les API tierces</li>
                <li>Gestion multi-templates et standardisation</li>
              </ul>
            </div>
            <div class="tech-stack">
              <span class="tech">Node.js</span>
              <span class="tech">REST</span>
              <span class="tech">PostgreSQL</span>
              <span class="tech">Security</span>
            </div>
          </article>

          <article class="project-card">
            <div class="project-header">
              <h3>CultivOire</h3>
              <span class="project-type">Hackathon • PWA</span>
            </div>
            <p class="project-description">
              Kiosque interactif culturel et touristique ivoirien combinant interface reactive,
              données Supabase et modules audio multilingues.
            </p>
            <div class="project-features">
              <h4>Réalisations</h4>
              <ul>
                <li>Interface tactile pour borne interactive</li>
                <li>Quiz, modules culturels et synthèse vocale</li>
                <li>Stockage de données avec Supabase</li>
                <li>2e prix au hackathon avec l'équipe K2TG</li>
              </ul>
            </div>
            <div class="tech-stack">
              <span class="tech">React</span>
              <span class="tech">PWA</span>
              <span class="tech">Supabase</span>
              <span class="tech">Web Speech</span>
            </div>
          </article>

          <article class="project-card">
            <div class="project-header">
              <h3>Koba Ferronnerie</h3>
              <span class="project-type">E-commerce • B2B/B2C</span>
            </div>
            <p class="project-description">
              Plateforme de commerce avec gestion de catalogues, onboarding fournisseurs et
              administration des commandes et produits.
            </p>
            <div class="project-features">
              <h4>Fonctionnalités</h4>
              <ul>
                <li>Gestion de catalogues produits</li>
                <li>Onboarding fournisseurs et workflows internes</li>
                <li>Administration des commandes</li>
                <li>Expérience client et opérateur claire</li>
              </ul>
            </div>
            <div class="tech-stack">
              <span class="tech">Web App</span>
              <span class="tech">Backend</span>
              <span class="tech">Commerce</span>
              <span class="tech">Admin</span>
            </div>
          </article>
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
      font-size: clamp(2.4rem, 4vw, 3.1rem);
      margin-bottom: 1rem;
      color: #0f172a;
    }

    .section-description {
      text-align: center;
      font-size: 1.08rem;
      color: #475569;
      max-width: 700px;
      margin: 0 auto 3rem;
      line-height: 1.7;
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2rem;
    }

    .project-card {
      background: white;
      border-radius: 1.2rem;
      padding: 2rem;
      box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);
      border: 1px solid #e2e8f0;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .project-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 18px 40px rgba(15, 23, 42, 0.1);
    }

    .project-card.featured {
      border-left: 4px solid #2563eb;
    }

    .project-header {
      margin-bottom: 1rem;
    }

    .project-header h3 {
      color: #0f172a;
      margin-bottom: 0.6rem;
      font-size: 1.6rem;
    }

    .project-type {
      display: inline-block;
      padding: 0.35rem 0.75rem;
      border-radius: 999px;
      background: #dbeafe;
      color: #1d4ed8;
      font-size: 0.75rem;
      font-weight: 700;
    }

    .project-description {
      color: #475569;
      line-height: 1.7;
      margin-bottom: 1.3rem;
    }

    .project-features h4 {
      color: #0f172a;
      margin-bottom: 0.75rem;
    }

    .project-features ul {
      margin: 0 0 1.2rem 1.1rem;
      padding: 0;
      color: #475569;
      line-height: 1.8;
    }

    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .tech {
      background: #e2e8f0;
      color: #334155;
      padding: 0.45rem 0.7rem;
      border-radius: 999px;
      font-size: 0.75rem;
      font-weight: 600;
    }
  `]
})
export class ProjectsComponent {}
