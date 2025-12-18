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
            <div class="intro">
              <p>
                Bonjour ! Je suis <strong>Kanté Moussa</strong>, étudiant en Master 1 BIHAR 
                (Big Data, Intelligence Artificielle, Réalité Augmentée) passionné par le développement 
                backend et la data science.
              </p>
            </div>
            
            <div class="section">
              <h2>Mon parcours</h2>
              <p>
                Actuellement en M1 BIHAR, je me spécialise dans les technologies backend modernes, 
                l'analyse de données et l'intelligence artificielle. Mon approche combine rigueur 
                technique et créativité pour développer des solutions innovantes.
              </p>
            </div>

            <div class="section">
              <h2>Mes valeurs</h2>
              <div class="values-grid">
                <div class="value-item">
                  <h3>🎯 Sérieux</h3>
                  <p>Engagement total dans chaque projet avec une approche méthodique et professionnelle.</p>
                </div>
                <div class="value-item">
                  <h3>🤝 Respect</h3>
                  <p>Collaboration bienveillante et écoute active au sein des équipes de développement.</p>
                </div>
                <div class="value-item">
                  <h3>💡 Honnêteté</h3>
                  <p>Transparence dans la communication et reconnaissance de mes limites pour mieux progresser.</p>
                </div>
                <div class="value-item">
                  <h3>🚀 Innovation</h3>
                  <p>Curiosité constante pour les nouvelles technologies et les meilleures pratiques.</p>
                </div>
              </div>
            </div>

            <div class="section">
              <h2>Mes objectifs</h2>
              <p>
                Mon ambition est de devenir <strong>Backend Engineer / Data Engineer</strong> spécialisé 
                dans les systèmes intelligents pour l'éducation et la culture. Je souhaite contribuer 
                à des projets qui ont un impact positif sur la société, en particulier dans la 
                valorisation du patrimoine culturel et l'accessibilité de l'éducation.
              </p>
            </div>

            <div class="section">
              <h2>Domaines d'expertise</h2>
              <div class="expertise-areas">
                <div class="area">
                  <h3>Backend Development</h3>
                  <p>Architecture d'APIs robustes, gestion de bases de données, authentification et sécurité.</p>
                </div>
                <div class="area">
                  <h3>Data Science & IA</h3>
                  <p>Analyse de données, machine learning, traitement du signal numérique.</p>
                </div>
                <div class="area">
                  <h3>Applications Interactives</h3>
                  <p>PWA, bornes tactiles, interfaces utilisateur innovantes et accessibles.</p>
                </div>
                <div class="area">
                  <h3>Cryptographie & Sécurité</h3>
                  <p>Chiffrement, authentification sécurisée, protection des données sensibles.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="about-sidebar">
            <div class="profile-card">
              <div class="profile-info">
                <h3>Kanté Moussa</h3>
                <p class="title">Développeur Backend & Data</p>
                <p class="education">M1 BIHAR</p>
              </div>
              
              <div class="contact-info">
                <h4>Contact</h4>
                <div class="contact-item">
                  <span class="label">Email:</span>
                  <span class="value">lelemoussa12@gmail.com</span>
                </div>
                <div class="contact-item">
                  <span class="label">Localisation:</span>
                  <span class="value">Abidjan, Marcory - Côte d'Ivoire</span>
                </div>
                <div class="contact-item">
                  <span class="label">Âge:</span>
                  <span class="value">27 ans</span>
                </div>
                <div class="contact-item">
                  <span class="label">Situation:</span>
                  <span class="value">Célibataire</span>
                </div>
                <div class="contact-item">
                  <span class="label">Statut:</span>
                  <span class="value">Étudiant M1, recherche stage/alternance</span>
                </div>
              </div>

              <div class="skills-summary">
                <h4>Compétences principales</h4>
                <div class="skill-bars">
                  <div class="skill-bar">
                    <span class="skill-name">Python</span>
                    <div class="bar">
                      <div class="progress" style="width: 85%"></div>
                    </div>
                  </div>
                  <div class="skill-bar">
                    <span class="skill-name">NestJS/Node.js</span>
                    <div class="bar">
                      <div class="progress" style="width: 80%"></div>
                    </div>
                  </div>
                  <div class="skill-bar">
                    <span class="skill-name">PostgreSQL</span>
                    <div class="bar">
                      <div class="progress" style="width: 75%"></div>
                    </div>
                  </div>
                  <div class="skill-bar">
                    <span class="skill-name">Angular/React</span>
                    <div class="bar">
                      <div class="progress" style="width: 70%"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
    }
    
    .about-text h1 {
      font-size: 3rem;
      color: #1e293b;
      margin-bottom: 2rem;
    }
    
    .intro {
      background: white;
      padding: 2rem;
      border-radius: 1rem;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      margin-bottom: 2rem;
      border-left: 4px solid #2563eb;
    }
    
    .intro p {
      font-size: 1.1rem;
      line-height: 1.6;
      color: #374151;
      margin: 0;
    }
    
    .section {
      background: white;
      padding: 2rem;
      border-radius: 1rem;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      margin-bottom: 2rem;
    }
    
    .section h2 {
      color: #2563eb;
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }
    
    .section p {
      color: #64748b;
      line-height: 1.6;
      margin: 0;
    }
    
    .values-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1.5rem;
      margin-top: 1rem;
    }
    
    .value-item h3 {
      color: #374151;
      margin-bottom: 0.5rem;
      font-size: 1.1rem;
    }
    
    .value-item p {
      font-size: 0.9rem;
      margin: 0;
    }
    
    .expertise-areas {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
      margin-top: 1rem;
    }
    
    .area {
      padding: 1.5rem;
      background: #f1f5f9;
      border-radius: 0.5rem;
    }
    
    .area h3 {
      color: #2563eb;
      margin-bottom: 0.5rem;
      font-size: 1.1rem;
    }
    
    .area p {
      font-size: 0.9rem;
      margin: 0;
    }
    
    .profile-card {
      background: white;
      border-radius: 1rem;
      padding: 2rem;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      position: sticky;
      top: 2rem;
    }
    
    .profile-info {
      text-align: center;
      margin-bottom: 2rem;
      padding-bottom: 2rem;
      border-bottom: 1px solid #e2e8f0;
    }
    
    .profile-info h3 {
      color: #1e293b;
      margin-bottom: 0.5rem;
      font-size: 1.5rem;
    }
    
    .title {
      color: #2563eb;
      font-weight: 600;
      margin-bottom: 0.25rem;
    }
    
    .education {
      color: #64748b;
      font-size: 0.9rem;
      margin: 0;
    }
    
    .contact-info,
    .skills-summary {
      margin-bottom: 2rem;
    }
    
    .contact-info h4,
    .skills-summary h4 {
      color: #374151;
      margin-bottom: 1rem;
      font-size: 1.1rem;
    }
    
    .contact-item {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
    }
    
    .label {
      color: #64748b;
      font-weight: 500;
    }
    
    .value {
      color: #374151;
      text-align: right;
    }
    
    .skill-bar {
      margin-bottom: 1rem;
    }
    
    .skill-name {
      display: block;
      color: #374151;
      font-size: 0.9rem;
      margin-bottom: 0.5rem;
    }
    
    .bar {
      background: #e2e8f0;
      height: 8px;
      border-radius: 4px;
      overflow: hidden;
    }
    
    .progress {
      background: linear-gradient(90deg, #2563eb, #3b82f6);
      height: 100%;
      border-radius: 4px;
      transition: width 0.3s ease;
    }
    
    @media (max-width: 768px) {
      .about-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      
      .about-text h1 {
        font-size: 2rem;
      }
      
      .values-grid {
        grid-template-columns: 1fr;
      }
      
      .expertise-areas {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class AboutComponent {}