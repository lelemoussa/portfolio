import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section class="about">
      <div class="container">
        <div class="page-intro">
          <p class="eyebrow"><span>01</span> À PROPOS</p>
          <h1>La technique,<br /><em>au service du réel.</em></h1>
          <p class="lead">
            Je suis Moussa KANTÉ, ingénieur logiciel spécialisé en backend, data et cloud.
            J'aime concevoir des systèmes fiables, sécurisés et simples à faire évoluer.
          </p>
        </div>

        <div class="about-content">
          <div class="about-main">
            <article class="story-block">
              <span class="block-index">01 — PARCOURS</span>
              <div>
                <h2>De la donnée au produit.</h2>
                <p>
                  En Master 2 BIHAR à l'ESATIC et à l'ESTIA Biarritz, j'approfondis l'architecture
                  logicielle, la gestion de données massives, le cloud computing et l'intelligence
                  artificielle. Chez <strong>Yoomi-Solution</strong>, j'ai contribué à des systèmes
                  sécurisés déployés sur GCP et à l'industrialisation de pipelines CI/CD.
                </p>
                <p>
                  Mon approche relie les besoins métier aux choix techniques : bâtir des bases
                  solides, automatiser ce qui peut l'être et livrer des solutions pensées pour
                  celles et ceux qui les utilisent.
                </p>
              </div>
            </article>

            <article class="expertise-block">
              <div class="block-heading">
                <span class="block-index">02 — EXPERTISES</span>
                <h2>Des fondations<br /><em>à la mise en ligne.</em></h2>
              </div>
              <div class="expertise-grid">
                <div class="expertise-card">
                  <span class="expertise-number">01</span>
                  <h3>Backend &amp; sécurité</h3>
                  <p>API robustes, authentification, autorisation et protection applicative.</p>
                  <span class="tools">NestJS · Django · JWT · RBAC</span>
                </div>
                <div class="expertise-card">
                  <span class="expertise-number">02</span>
                  <h3>Cloud &amp; infrastructure</h3>
                  <p>Infrastructures reproductibles, déploiements fiables et accès sécurisés.</p>
                  <span class="tools">GCP · Terraform · Cloud Run · GKE</span>
                </div>
                <div class="expertise-card">
                  <span class="expertise-number">03</span>
                  <h3>Data &amp; IA</h3>
                  <p>Modélisation, persistance et intégration de services intelligents.</p>
                  <span class="tools">PostgreSQL · Prisma · Oracle · MongoDB</span>
                </div>
                <div class="expertise-card">
                  <span class="expertise-number">04</span>
                  <h3>DevOps &amp; qualité</h3>
                  <p>Automatisation des livraisons, tests continus et pratiques de développement.</p>
                  <span class="tools">GitHub Actions · Docker · CI/CD</span>
                </div>
              </div>
            </article>

            <article class="values-block">
              <span class="block-index">03 — PRINCIPES</span>
              <h2>Ce qui guide mon travail.</h2>
              <div class="values-list">
                <p><span>01</span><strong>Rigueur</strong> — la qualité se construit à chaque étape.</p>
                <p><span>02</span><strong>Collaboration</strong> — les bons produits sont des efforts d'équipe.</p>
                <p><span>03</span><strong>Impact</strong> — la technologie doit résoudre un vrai problème.</p>
              </div>
            </article>
          </div>

          <aside class="profile-card">
            <div class="profile-top">
              <div class="monogram">MK</div>
              <span class="profile-status"><i></i> Ouvert aux opportunités</span>
              <h2>Moussa KANTÉ</h2>
              <p>Backend, Data &amp; Cloud / DevOps</p>
            </div>
            <div class="profile-details">
              <div><span>Formation</span><strong>Master 2 BIHAR</strong></div>
              <div><span>Établissements</span><strong>ESATIC · ESTIA</strong></div>
              <div><span>Localisation</span><strong>Abidjan, Côte d'Ivoire</strong></div>
              <div><span>Disponibilité</span><strong>Stage · Alternance · Freelance</strong></div>
            </div>
            <div class="profile-stack">
              <span>STACK PRINCIPALE</span>
              <div class="stack-tags">
                <b>NestJS</b><b>Python</b><b>GCP</b><b>Terraform</b><b>PostgreSQL</b><b>Docker</b>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about {
      padding: clamp(4rem, 8vw, 7rem) 0;
      background: var(--paper);
    }

    .page-intro {
      max-width: 62rem;
      margin: 0 auto clamp(4rem, 8vw, 7rem);
      text-align: center;
    }

    .eyebrow,
    .block-index {
      color: var(--muted);
      font-size: 0.68rem;
      font-weight: 700;
      letter-spacing: 0.14em;
    }

    .eyebrow {
      margin-bottom: 1.6rem;
    }

    .eyebrow span {
      margin-right: 0.65rem;
      color: var(--accent-dark);
    }

    .page-intro h1 {
      margin-bottom: 1.5rem;
      font-family: var(--serif);
      font-size: clamp(3.2rem, 7vw, 6.7rem);
      font-weight: 400;
      letter-spacing: -0.07em;
    }

    .page-intro h1 em,
    .block-heading h2 em {
      color: #788c5b;
      font-weight: 400;
    }

    .lead {
      max-width: 42rem;
      margin: 0 auto;
      color: var(--muted);
      font-size: 1.05rem;
      line-height: 1.8;
    }

    .about-content {
      display: grid;
      grid-template-columns: minmax(0, 1fr) 19rem;
      align-items: start;
      gap: clamp(3rem, 7vw, 7rem);
    }

    .about-main {
      display: grid;
      gap: 5rem;
    }

    .story-block {
      display: grid;
      grid-template-columns: 10rem minmax(0, 1fr);
      gap: 2rem;
    }

    .block-index {
      display: inline-block;
      padding-top: 0.4rem;
      white-space: nowrap;
    }

    .story-block h2,
    .values-block h2 {
      margin-bottom: 1.2rem;
      font-family: var(--serif);
      font-size: clamp(2rem, 3.5vw, 3rem);
      font-weight: 400;
      letter-spacing: -0.055em;
    }

    .story-block p {
      color: var(--muted);
      line-height: 1.85;
    }

    .story-block strong {
      color: var(--ink);
    }

    .block-heading {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .block-heading h2 {
      margin: 0;
      font-family: var(--serif);
      font-size: clamp(2rem, 3.5vw, 3rem);
      font-weight: 400;
      letter-spacing: -0.055em;
    }

    .expertise-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.85rem;
    }

    .expertise-card {
      min-height: 14rem;
      padding: 1.4rem;
      border: 1px solid var(--line);
      border-radius: 0.9rem;
      background: var(--surface);
    }

    .expertise-number {
      display: grid;
      width: 2rem;
      height: 2rem;
      margin-bottom: 1.4rem;
      place-items: center;
      border-radius: 50%;
      color: var(--dark);
      background: var(--accent);
      font-size: 0.68rem;
      font-weight: 700;
    }

    .expertise-card h3 {
      margin-bottom: 0.55rem;
      font-family: var(--serif);
      font-size: 1.3rem;
      font-weight: 400;
    }

    .expertise-card p {
      margin-bottom: 0.9rem;
      color: var(--muted);
      font-size: 0.83rem;
    }

    .tools {
      color: #536147;
      font-size: 0.68rem;
      font-weight: 650;
    }

    .values-block h2 {
      margin-top: 1rem;
    }

    .values-list {
      border-top: 1px solid var(--line);
    }

    .values-list p {
      display: flex;
      align-items: baseline;
      gap: 0.6rem;
      margin: 0;
      padding: 1rem 0;
      border-bottom: 1px solid var(--line);
      color: var(--muted);
      font-size: 0.88rem;
    }

    .values-list p span {
      color: var(--accent-dark);
      font-size: 0.7rem;
    }

    .values-list strong {
      color: var(--ink);
    }

    .profile-card {
      position: sticky;
      top: 7rem;
      overflow: hidden;
      border: 1px solid var(--line);
      border-radius: 1rem;
      background: var(--surface);
      box-shadow: 0 18px 48px rgba(29, 39, 34, 0.06);
    }

    .profile-top {
      padding: 1.5rem;
      color: white;
      background: var(--dark);
    }

    .monogram {
      display: grid;
      width: 4.2rem;
      height: 4.2rem;
      margin-bottom: 1.4rem;
      place-items: center;
      border: 1px solid rgba(201,239,103,.5);
      border-radius: 50%;
      color: var(--dark);
      background: var(--accent);
      font-family: var(--serif);
      font-size: 1.5rem;
    }

    .profile-status {
      display: flex;
      align-items: center;
      gap: 0.45rem;
      color: #d3ded2;
      font-size: 0.65rem;
    }

    .profile-status i {
      width: 0.45rem;
      height: 0.45rem;
      border-radius: 50%;
      background: var(--accent);
    }

    .profile-top h2 {
      margin: 1.2rem 0 0.25rem;
      font-family: var(--serif);
      font-size: 1.8rem;
      font-weight: 400;
    }

    .profile-top p {
      margin: 0;
      color: #b7c1b8;
      font-size: 0.78rem;
    }

    .profile-details {
      display: grid;
      gap: 1rem;
      padding: 1.5rem;
      border-bottom: 1px solid var(--line);
    }

    .profile-details div {
      display: grid;
      gap: 0.2rem;
    }

    .profile-details span,
    .profile-stack > span {
      color: var(--muted);
      font-size: 0.63rem;
      letter-spacing: 0.09em;
      text-transform: uppercase;
    }

    .profile-details strong {
      font-size: 0.78rem;
      font-weight: 600;
    }

    .profile-stack {
      padding: 1.5rem;
    }

    .stack-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
      margin-top: 0.8rem;
    }

    .stack-tags b {
      padding: 0.35rem 0.55rem;
      border: 1px solid var(--line);
      border-radius: 999px;
      color: #48544c;
      font-size: 0.65rem;
      font-weight: 500;
    }

    @media (max-width: 850px) {
      .about-content {
        grid-template-columns: 1fr;
      }

      .profile-card {
        position: static;
        max-width: 34rem;
      }
    }

    @media (max-width: 600px) {
      .page-intro {
        text-align: left;
      }

      .story-block {
        grid-template-columns: 1fr;
        gap: 1rem;
      }

      .about-main {
        gap: 3.5rem;
      }

      .block-heading {
        display: block;
      }

      .block-heading .block-index {
        margin-bottom: 1rem;
      }

      .expertise-grid {
        grid-template-columns: 1fr;
      }

      .expertise-card {
        min-height: auto;
      }

      .expertise-number {
        margin-bottom: 1rem;
      }

      .values-list p {
        flex-wrap: wrap;
      }
    }
  `]
})
export class AboutComponent {}
