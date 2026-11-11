import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="hero">
      <div class="container hero-inner">
        <div class="hero-copy">
          <p class="eyebrow">Backend • Data • Cloud/DevOps</p>
          <h1>Moussa KANTÉ</h1>
          <h2>Développeur Backend, Data & Cloud/DevOps Engineer</h2>
          <p class="hero-description">
            Ingénieur logiciel spécialisé en architectures backend résilientes, sécurité applicative,
            pipelines CI/CD et pipelines de données. Actuellement en Master 2 BIHAR, entre ESATIC
            (Abidjan) et ESTIA (Biarritz), je conçois des solutions cloud fiables et orientées
            impact business.
          </p>

          <div class="hero-buttons">
            <a routerLink="/projects" class="btn btn-primary">Voir mes projets</a>
            <a routerLink="/contact" class="btn btn-secondary">Me contacter</a>
          </div>

          <div class="pill-list" aria-label="Compétences clés">
            <span>GCP</span>
            <span>Terraform</span>
            <span>GitHub Actions</span>
            <span>NestJS</span>
            <span>PostgreSQL</span>
            <span>IA agentique</span>
          </div>
        </div>

        <aside class="hero-card">
          <div class="stat-block">
            <strong>+4</strong>
            <span>ans d'expérience concrets</span>
          </div>
          <div class="stat-block">
            <strong>7</strong>
            <span>projets backend &amp; cloud réalisés</span>
          </div>
          <div class="stat-block">
            <strong>GCP</strong>
            <span>Cloud Run, GKE, Compute Engine, Cloud SQL</span>
          </div>
        </aside>
      </div>
    </section>

    <section class="skills">
      <div class="container">
        <h3>Compétences techniques</h3>
        <div class="skills-grid">
          <div class="skill-category">
            <h4>Backend &amp; Sécurité</h4>
            <div class="skill-tags">
              <span class="tag">NestJS</span>
              <span class="tag">Django</span>
              <span class="tag">TypeScript</span>
              <span class="tag">JavaScript</span>
              <span class="tag">JWT</span>
              <span class="tag">RBAC</span>
            </div>
          </div>

          <div class="skill-category">
            <h4>Data &amp; IA</h4>
            <div class="skill-tags">
              <span class="tag">PostgreSQL</span>
              <span class="tag">Prisma</span>
              <span class="tag">Oracle</span>
              <span class="tag">MongoDB</span>
              <span class="tag">Big Data</span>
              <span class="tag">IA agentique</span>
            </div>
          </div>

          <div class="skill-category">
            <h4>Cloud &amp; DevOps</h4>
            <div class="skill-tags">
              <span class="tag">GCP</span>
              <span class="tag">Terraform</span>
              <span class="tag">Docker</span>
              <span class="tag">GitHub Actions</span>
              <span class="tag">Cloud Run</span>
              <span class="tag">GKE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      background: linear-gradient(135deg, #0f172a 0%, #1d4ed8 45%, #7c3aed 100%);
      color: white;
      padding: 5rem 0 4rem;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .hero-inner {
      display: grid;
      grid-template-columns: 1.5fr 0.8fr;
      gap: 2rem;
      align-items: center;
    }

    .eyebrow {
      display: inline-block;
      margin-bottom: 1rem;
      padding: 0.5rem 0.9rem;
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.08);
      font-size: 0.8rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      font-weight: 700;
    }

    .hero h1 {
      font-size: clamp(2.7rem, 4vw, 4rem);
      margin-bottom: 0.75rem;
      line-height: 1.08;
    }

    .hero h2 {
      font-size: clamp(1.2rem, 2vw, 1.8rem);
      margin-bottom: 1rem;
      color: #dbeafe;
      font-weight: 500;
    }

    .hero-description {
      max-width: 660px;
      font-size: 1.08rem;
      line-height: 1.7;
      color: rgba(255, 255, 255, 0.9);
      margin-bottom: 2rem;
    }

    .hero-buttons {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0.9rem 1.6rem;
      border-radius: 0.8rem;
      text-decoration: none;
      font-weight: 700;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 28px rgba(15, 23, 42, 0.2);
      text-decoration: none;
    }

    .btn-primary {
      background: white;
      color: #1d4ed8;
    }

    .btn-secondary {
      background: transparent;
      border: 1px solid rgba(255, 255, 255, 0.6);
      color: white;
    }

    .pill-list {
      display: flex;
      flex-wrap: wrap;
      gap: 0.7rem;
    }

    .pill-list span {
      padding: 0.55rem 0.85rem;
      border-radius: 999px;
      background: rgba(148, 163, 184, 0.12);
      border: 1px solid rgba(255, 255, 255, 0.2);
      font-size: 0.8rem;
      color: #e2e8f0;
    }

    .hero-card {
      background: rgba(15, 23, 42, 0.32);
      border: 1px solid rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(10px);
      border-radius: 1.25rem;
      padding: 1.5rem;
      box-shadow: 0 24px 60px rgba(15, 23, 42, 0.2);
    }

    .stat-block {
      display: grid;
      gap: 0.35rem;
      padding: 1rem 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.12);
    }

    .stat-block:last-child {
      border-bottom: none;
    }

    .stat-block strong {
      font-size: 2rem;
      color: white;
    }

    .stat-block span {
      color: #dbeafe;
      line-height: 1.5;
    }

    .skills {
      padding: 4.5rem 0;
      background: #f8fafc;
    }

    .skills h3 {
      text-align: center;
      font-size: clamp(2rem, 3vw, 2.8rem);
      margin-bottom: 2.5rem;
      color: #0f172a;
    }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
    }

    .skill-category {
      background: white;
      padding: 2rem;
      border-radius: 1rem;
      box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);
      border: 1px solid #e2e8f0;
    }

    .skill-category h4 {
      margin-bottom: 1rem;
      color: #1d4ed8;
      font-size: 1.2rem;
    }

    .skill-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.6rem;
    }

    .tag {
      background: #e0f2fe;
      color: #0f172a;
      border: 1px solid #bfdbfe;
      padding: 0.5rem 0.8rem;
      border-radius: 999px;
      font-size: 0.8rem;
      font-weight: 600;
    }

    @media (max-width: 768px) {
      .hero {
        padding-top: 4rem;
      }

      .hero-inner {
        grid-template-columns: 1fr;
      }

      .hero-buttons {
        flex-direction: column;
      }

      .btn {
        width: 100%;
      }
    }
  `]
})
export class HomeComponent {}
