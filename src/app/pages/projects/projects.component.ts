import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  template: `
    <section class="projects">
      <div class="container">
        <header class="page-intro">
          <p class="eyebrow"><span>02</span> SÉLECTION DE PROJETS</p>
          <h1>Des idées solides.<br /><em>Des systèmes utiles.</em></h1>
          <p class="section-description">
            Backend, sécurité, cloud et data : un aperçu des problèmes résolus et des solutions
            construites au fil de mes expériences.
          </p>
        </header>

        <div class="projects-grid">
          <article class="project-card featured">
            <div class="card-topline"><span>01 — FINTECH</span><span>AUTHENTIFICATION &amp; SÉCURITÉ</span></div>
            <div class="project-header">
              <span class="project-number">01</span>
              <h2>Payment Gateway<br /><em>Backend</em></h2>
            </div>
            <p class="project-description">
              Durcissement de l'authentification administrateur avec mots de passe temporaires,
              JWT dynamique, verrouillage anti-bruteforce et parcours de première connexion sécurisé.
            </p>
            <div class="project-features">
              <h3>Ce qui a été construit</h3>
              <ul>
                <li>Politique Zero-Trust et règles de mot de passe renforcées</li>
                <li>Verrouillage temporaire après cinq échecs de connexion</li>
                <li>Protection des routes et renouvellement obligatoire du mot de passe</li>
                <li>Notifications de sécurité via Brevo</li>
              </ul>
            </div>
            <div class="tech-stack"><span>NestJS</span><span>TypeScript</span><span>JWT</span><span>PostgreSQL</span><span>Brevo</span></div>
          </article>

          <article class="project-card">
            <div class="card-topline"><span>02 — CLOUD</span><span>INFRASTRUCTURE AS CODE</span></div>
            <div class="project-header">
              <span class="project-number">02</span>
              <h2>Automatisation<br /><em>Cloud &amp; CI/CD</em></h2>
            </div>
            <p class="project-description">
              Provisioning Terraform sur GCP et pipelines GitHub Actions pour déployer des services
              backend avec sécurité renforcée et sans interruption planifiée.
            </p>
            <div class="project-features">
              <h3>Points forts</h3>
              <ul>
                <li>Cloud Run, Cloud SQL, Cloud Storage, IAM et firewall</li>
                <li>État distant sécurisé et verrouillage de concurrence</li>
                <li>Build, tests, scan et déploiement automatisés</li>
                <li>Authentification OIDC sans secret longue durée</li>
              </ul>
            </div>
            <div class="tech-stack"><span>GCP</span><span>Terraform</span><span>GitHub Actions</span><span>Docker</span></div>
          </article>

          <article class="project-card">
            <div class="card-topline"><span>03 — LOGISTIQUE</span><span>SERVICES BACKEND</span></div>
            <div class="project-header">
              <span class="project-number">03</span>
              <h2>Youmpi Delivery<br /><em>Backend</em></h2>
            </div>
            <p class="project-description">
              Service de notifications transactionnelles et de validation d'identité intégré aux flux
              de livraison, avec gestion sécurisée des clés et environnement conteneurisé.
            </p>
            <div class="project-features">
              <h3>Livrables</h3>
              <ul>
                <li>Service centralisé d'e-mails transactionnels</li>
                <li>Codes de validation à durée limitée</li>
                <li>Notifications sur événements de livraison</li>
                <li>Environnement de développement isolé avec Docker</li>
              </ul>
            </div>
            <div class="tech-stack"><span>NestJS</span><span>PostgreSQL</span><span>Docker</span><span>Brevo</span></div>
          </article>

          <article class="project-card">
            <div class="card-topline"><span>04 — FINANCE</span><span>COMMUNICATIONS TRANSACTIONNELLES</span></div>
            <div class="project-header">
              <span class="project-number">04</span>
              <h2>Stonivest<br /><em>Backend</em></h2>
            </div>
            <p class="project-description">
              Service de mailing multi-templates pour l'onboarding, les confirmations d'opérations et
              les alertes de sécurité.
            </p>
            <div class="project-features">
              <h3>Aspects techniques</h3>
              <ul>
                <li>Modélisation des flux de notification métier</li>
                <li>Standardisation des secrets et variables d'environnement</li>
                <li>Règles de sécurité pour les API tierces</li>
                <li>Gestion des modèles de courriels</li>
              </ul>
            </div>
            <div class="tech-stack"><span>Node.js</span><span>REST</span><span>PostgreSQL</span><span>Security</span></div>
          </article>

          <article class="project-card">
            <div class="card-topline"><span>05 — CULTURE</span><span>HACKATHON · 2E PRIX</span></div>
            <div class="project-header">
              <span class="project-number">05</span>
              <h2>CultivOire<br /><em>Expérience culturelle</em></h2>
            </div>
            <p class="project-description">
              Kiosque interactif culturel et touristique ivoirien, avec interface tactile,
              contenus multilingues et modules audio.
            </p>
            <div class="project-features">
              <h3>Réalisations</h3>
              <ul>
                <li>Interface adaptée aux bornes interactives</li>
                <li>Quiz, contenus culturels et synthèse vocale</li>
                <li>Stockage des données avec Supabase</li>
                <li>Deuxième prix avec l'équipe K2TG</li>
              </ul>
            </div>
            <div class="tech-stack"><span>React</span><span>PWA</span><span>Supabase</span><span>Web Speech</span></div>
          </article>

          <article class="project-card">
            <div class="card-topline"><span>06 — COMMERCE</span><span>PLATEFORME B2B / B2C</span></div>
            <div class="project-header">
              <span class="project-number">06</span>
              <h2>Koba<br /><em>Ferronnerie</em></h2>
            </div>
            <p class="project-description">
              Plateforme de commerce avec gestion de catalogues, intégration de fournisseurs et
              administration des commandes et produits.
            </p>
            <div class="project-features">
              <h3>Fonctionnalités</h3>
              <ul>
                <li>Gestion des catalogues produits</li>
                <li>Onboarding fournisseurs et workflows internes</li>
                <li>Administration des commandes</li>
                <li>Expérience claire pour clients et opérateurs</li>
              </ul>
            </div>
            <div class="tech-stack"><span>Web App</span><span>Backend</span><span>Commerce</span><span>Admin</span></div>
          </article>
        </div>
        <p class="closing-note">Chaque projet commence par une question simple : <em>quel problème doit-on résoudre ?</em></p>
      </div>
    </section>
  `,
  styles: [`
    .projects {
      padding: clamp(4rem, 8vw, 7rem) 0;
      background: var(--paper);
    }

    .page-intro {
      max-width: 62rem;
      margin: 0 auto clamp(4rem, 8vw, 6rem);
      text-align: center;
    }

    .eyebrow {
      margin-bottom: 1.5rem;
      color: var(--muted);
      font-size: 0.68rem;
      font-weight: 700;
      letter-spacing: 0.14em;
    }

    .eyebrow span {
      margin-right: 0.65rem;
      color: var(--accent-dark);
    }

    .page-intro h1 {
      margin-bottom: 1.4rem;
      font-family: var(--serif);
      font-size: clamp(3.1rem, 7vw, 6.5rem);
      font-weight: 400;
      letter-spacing: -0.07em;
    }

    .page-intro h1 em,
    .project-header h2 em {
      color: #788c5b;
      font-weight: 400;
    }

    .section-description {
      max-width: 38rem;
      margin: 0 auto;
      color: var(--muted);
      font-size: 1rem;
      line-height: 1.8;
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1rem;
    }

    .project-card {
      display: flex;
      min-height: 32rem;
      flex-direction: column;
      padding: clamp(1.4rem, 3vw, 2rem);
      border: 1px solid var(--line);
      border-radius: 1rem;
      background: var(--surface);
      transition: transform 180ms ease, box-shadow 180ms ease;
    }

    .project-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 20px 48px rgba(29, 39, 34, 0.08);
    }

    .project-card.featured {
      color: white;
      border-color: var(--dark);
      background: var(--dark);
    }

    .card-topline {
      display: flex;
      justify-content: space-between;
      gap: 0.5rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid var(--line);
      color: var(--muted);
      font-size: 0.58rem;
      font-weight: 700;
      letter-spacing: 0.1em;
    }

    .featured .card-topline {
      border-color: rgba(255,255,255,.16);
      color: #b7c1b8;
    }

    .project-header {
      display: grid;
      grid-template-columns: 2.4rem 1fr;
      align-items: start;
      gap: 0.8rem;
      margin: 1.8rem 0 1rem;
    }

    .project-number {
      padding-top: 0.45rem;
      color: var(--accent-dark);
      font-size: 0.7rem;
      font-weight: 700;
    }

    .project-header h2 {
      margin: 0;
      font-family: var(--serif);
      font-size: clamp(1.7rem, 3vw, 2.5rem);
      font-weight: 400;
      letter-spacing: -0.05em;
    }

    .featured .project-header h2 em {
      color: var(--accent);
    }

    .project-description {
      max-width: 36rem;
      margin: 0 0 1.5rem 3.2rem;
      color: var(--muted);
      font-size: 0.85rem;
      line-height: 1.75;
    }

    .featured .project-description {
      color: #c0c9c1;
    }

    .project-features {
      margin: 0 0 1.5rem 3.2rem;
    }

    .project-features h3 {
      margin-bottom: 0.65rem;
      color: var(--ink);
      font-size: 0.72rem;
      font-weight: 700;
    }

    .featured .project-features h3 {
      color: #f0f3ed;
    }

    .project-features ul {
      display: grid;
      gap: 0.45rem;
      margin: 0;
      padding: 0;
      list-style: none;
      color: var(--muted);
      font-size: 0.76rem;
      line-height: 1.5;
    }

    .project-features li {
      position: relative;
      padding-left: 1rem;
    }

    .project-features li::before {
      position: absolute;
      left: 0;
      color: var(--accent-dark);
      content: '—';
    }

    .featured .project-features ul {
      color: #c0c9c1;
    }

    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
      margin: auto 0 0 3.2rem;
      padding-top: 1.2rem;
    }

    .tech-stack span {
      padding: 0.33rem 0.58rem;
      border: 1px solid var(--line);
      border-radius: 999px;
      color: #536147;
      font-size: 0.65rem;
    }

    .featured .tech-stack span {
      border-color: rgba(255,255,255,.2);
      color: #e2e8dd;
    }

    .closing-note {
      margin: 4rem auto 0;
      color: var(--muted);
      text-align: center;
      font-size: 0.9rem;
    }

    .closing-note em {
      color: var(--ink);
      font-family: var(--serif);
      font-size: 1.15rem;
    }

    @media (max-width: 760px) {
      .projects-grid {
        grid-template-columns: 1fr;
      }

      .project-card {
        min-height: auto;
      }

      .project-features ul {
        font-size: 0.8rem;
      }
    }

    @media (max-width: 480px) {
      .page-intro {
        text-align: left;
      }

      .project-card {
        padding: 1.2rem;
      }

      .card-topline {
        font-size: 0.53rem;
      }

      .project-description,
      .project-features,
      .tech-stack {
        margin-left: 0;
      }
    }
  `]
})
export class ProjectsComponent {}
