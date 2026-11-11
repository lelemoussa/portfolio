import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section class="about">
      <div class="container">
        <div class="about-content">
          <div class="about-text">
            <h1>À propos de moi</h1>

            <div class="intro card">
              <p>
                Je suis <strong>Moussa KANTÉ</strong>, ingénieur logiciel spécialisé en
                <strong>Backend</strong>, <strong>Data Engineering</strong> et
                <strong>Cloud/DevOps</strong>. Passionné par les architectures résilientes,
                la sécurité applicative et l'automatisation de bout en bout, je conçois des
                solutions fiables pour des environnements à forte exigence comme les fintech,
                e-commerce et la logistique.
              </p>
            </div>

            <div class="section card">
              <h2>Mon parcours</h2>
              <p>
                Actuellement étudiant en <strong>Master 2 BIHAR</strong> à l'ESATIC et à l'ESTIA
                Biarritz, j'ai développé un socle solide en architecture logicielle, gestion de
                données massives, cloud computing et intelligence artificielle. Mon expérience chez
                <strong>Yoomi-Solution</strong> m'a permis de travailler sur des systèmes critiques,
                sécurisés et déployés sur GCP avec des pipelines CI/CD industrialisés.
              </p>
            </div>

            <div class="section card">
              <h2>Mes domaines d'expertise</h2>
              <div class="expertise-areas">
                <div class="area">
                  <h3>Backend &amp; sécurité</h3>
                  <p>NestJS, Django, APIs REST, JWT, RBAC, Zero-Trust, protection anti-bruteforce.</p>
                </div>
                <div class="area">
                  <h3>Cloud &amp; IaC</h3>
                  <p>GCP, Cloud Run, GKE, Terraform, Cloud SQL, Workload Identity Federation.</p>
                </div>
                <div class="area">
                  <h3>Data &amp; IA</h3>
                  <p>PostgreSQL, Prisma, Oracle, stockage distribué, IA agentique et automatisation.</p>
                </div>
                <div class="area">
                  <h3>CI/CD &amp; DevOps</h3>
                  <p>GitHub Actions, Docker, déploiement zero-downtime, tests automatisés et qualité.</p>
                </div>
              </div>
            </div>

            <div class="section card">
              <h2>Mes valeurs</h2>
              <div class="values-grid">
                <div class="value-item">
                  <h3>🎯 Rigueur</h3>
                  <p>Approche méthodique et orientée qualité pour chaque solution produite.</p>
                </div>
                <div class="value-item">
                  <h3>🤝 Collaboration</h3>
                  <p>Travail en équipe, écoute active et transmission claire des bonnes pratiques.</p>
                </div>
                <div class="value-item">
                  <h3>💡 Innovation</h3>
                  <p>Curiosité constante pour les nouvelles technologies et les usages utiles.</p>
                </div>
                <div class="value-item">
                  <h3>🚀 Impact</h3>
                  <p>Conception d'outils favorisants la fiabilité, la sécurité et la performance.</p>
                </div>
              </div>
            </div>
          </div>

          <aside class="about-sidebar">
            <div class="profile-card card">
              <div class="profile-info">
                <h3>Moussa KANTÉ</h3>
                <p class="title">Backend, Data &amp; Cloud/DevOps Engineer</p>
                <p class="education">Master 2 BIHAR — ESATIC / ESTIA Biarritz</p>
              </div>

              <div class="contact-info">
                <h4>Profil</h4>
                <div class="contact-item">
                  <span class="label">Email:</span>
                  <span class="value">lelemoussa12@gmail.com</span>
                </div>
                <div class="contact-item">
                  <span class="label">Localisation:</span>
                  <span class="value">Abidjan, Côte d'Ivoire</span>
                </div>
                <div class="contact-item">
                  <span class="label">Statut:</span>
                  <span class="value">Étudiant + expérience professionnelle</span>
                </div>
                <div class="contact-item">
                  <span class="label">Disponibilité:</span>
                  <span class="value">Stage / alternance / freelance</span>
                </div>
              </div>

              <div class="skills-summary">
                <h4>Compétences principales</h4>
                <div class="skill-bars">
                  <div class="skill-bar">
                    <span class="skill-name">GCP &amp; DevOps</span>
                    <div class="bar"><div class="progress" style="width: 90%"></div></div>
                  </div>
                  <div class="skill-bar">
                    <span class="skill-name">NestJS / Python</span>
                    <div class="bar"><div class="progress" style="width: 88%"></div></div>
                  </div>
                  <div class="skill-bar">
                    <span class="skill-name">Terraform</span>
                    <div class="bar"><div class="progress" style="width: 82%"></div></div>
                  </div>
                  <div class="skill-bar">
                    <span class="skill-name">PostgreSQL / Data</span>
                    <div class="bar"><div class="progress" style="width: 80%"></div></div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about {
      padding: 4rem 0;
      background: #f8fafc;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .about-content {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 3rem;
      align-items: start;
    }

    .about-text h1 {
      font-size: clamp(2.3rem, 4vw, 3rem);
      color: #0f172a;
      margin-bottom: 1.5rem;
    }

    .card {
      background: white;
      border: 1px solid #e2e8f0;
      border-radius: 1rem;
      box-shadow: 0 10px 24px rgba(15, 23, 42, 0.04);
    }

    .intro {
      padding: 2rem;
      margin-bottom: 2rem;
      border-left: 4px solid #2563eb;
    }

    .intro p,
    .section p,
    .value-item p,
    .area p,
    .contact-item,
    .skill-name {
      color: #475569;
      line-height: 1.7;
    }

    .section {
      padding: 2rem;
      margin-bottom: 2rem;
    }

    .section h2 {
      color: #1d4ed8;
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }

    .expertise-areas,
    .values-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 1.2rem;
      margin-top: 1.25rem;
    }

    .area,
    .value-item {
      padding: 1rem;
      background: #f8fafc;
      border-radius: 0.8rem;
      border: 1px solid #e2e8f0;
    }

    .area h3,
    .value-item h3 {
      margin-bottom: 0.5rem;
      color: #0f172a;
    }

    .profile-card {
      padding: 2rem;
    }

    .profile-info {
      margin-bottom: 1.5rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid #e2e8f0;
    }

    .profile-info h3 {
      color: #0f172a;
      margin-bottom: 0.5rem;
      font-size: 1.8rem;
    }

    .title {
      color: #2563eb;
      font-weight: 700;
      margin-bottom: 0.35rem;
    }

    .education {
      color: #475569;
      margin: 0;
    }

    .contact-info {
      margin-bottom: 1.5rem;
    }

    .contact-info h4,
    .skills-summary h4 {
      color: #0f172a;
      margin-bottom: 0.9rem;
      font-size: 1.1rem;
    }

    .contact-item {
      display: grid;
      gap: 0.15rem;
      margin-bottom: 0.75rem;
    }

    .label {
      font-weight: 700;
      color: #1e293b;
    }

    .skill-bars {
      display: grid;
      gap: 1rem;
    }

    .skill-bar {
      display: grid;
      gap: 0.35rem;
    }

    .bar {
      width: 100%;
      height: 0.7rem;
      border-radius: 999px;
      background: #e2e8f0;
      overflow: hidden;
    }

    .progress {
      height: 100%;
      border-radius: inherit;
      background: linear-gradient(90deg, #3b82f6, #8b5cf6);
    }

    @media (max-width: 900px) {
      .about-content {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class AboutComponent {}

