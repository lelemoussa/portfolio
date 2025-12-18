import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1>Kanté Moussa</h1>
          <h2>Développeur Backend & Data Engineer</h2>
          <p class="hero-description">
            Étudiant M1 BIHAR passionné par le développement backend, la data science et l'intelligence artificielle. 
            Spécialisé dans la création d'applications interactives et de systèmes intelligents.
          </p>
          <div class="hero-buttons">
            <a href="#projects" class="btn btn-primary">Voir mes projets</a>
            <a href="/contact" class="btn btn-secondary">Me contacter</a>
          </div>
          <div class="social-links">
            <a href="https://github.com/lelemoussa" target="_blank" aria-label="GitHub">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/kante-moussa-7994a2285/" target="_blank" aria-label="LinkedIn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="skills">
      <div class="container">
        <h3>Compétences techniques</h3>
        <div class="skills-grid">
          <div class="skill-category">
            <h4>Backend & Data</h4>
            <div class="skill-tags">
              <span class="tag">Python</span>
              <span class="tag">NestJS</span>
              <span class="tag">PostgreSQL</span>
              <span class="tag">GraphQL</span>
              <span class="tag">Prisma</span>
            </div>
          </div>
          <div class="skill-category">
            <h4>Frontend</h4>
            <div class="skill-tags">
              <span class="tag">Angular</span>
              <span class="tag">React</span>
              <span class="tag">TypeScript</span>
              <span class="tag">PWA</span>
            </div>
          </div>
          <div class="skill-category">
            <h4>Cloud & Tools</h4>
            <div class="skill-tags">
              <span class="tag">Supabase</span>
              <span class="tag">Google Cloud</span>
              <span class="tag">Git</span>
              <span class="tag">Docker</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 6rem 0;
      text-align: center;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }
    
    .hero h1 {
      font-size: 3.5rem;
      margin-bottom: 0.5rem;
      font-weight: 700;
    }
    
    .hero h2 {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
      opacity: 0.9;
      font-weight: 400;
    }
    
    .hero-description {
      font-size: 1.1rem;
      max-width: 600px;
      margin: 0 auto 2rem;
      line-height: 1.6;
      opacity: 0.9;
    }
    
    .hero-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
      margin-bottom: 2rem;
    }
    
    .btn {
      padding: 0.75rem 2rem;
      border-radius: 0.5rem;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s;
    }
    
    .btn-primary {
      background: white;
      color: #667eea;
    }
    
    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    }
    
    .btn-secondary {
      background: transparent;
      color: white;
      border: 2px solid white;
    }
    
    .btn-secondary:hover {
      background: white;
      color: #667eea;
    }
    
    .social-links {
      display: flex;
      gap: 1rem;
      justify-content: center;
    }
    
    .social-links a {
      color: white;
      opacity: 0.8;
      transition: opacity 0.3s;
    }
    
    .social-links a:hover {
      opacity: 1;
    }
    
    .skills {
      padding: 4rem 0;
      background: #f8fafc;
    }
    
    .skills h3 {
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: 3rem;
      color: #1e293b;
    }
    
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }
    
    .skill-category {
      background: white;
      padding: 2rem;
      border-radius: 1rem;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    
    .skill-category h4 {
      color: #2563eb;
      margin-bottom: 1rem;
      font-size: 1.25rem;
    }
    
    .skill-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
    
    .tag {
      background: #e2e8f0;
      color: #475569;
      padding: 0.5rem 1rem;
      border-radius: 2rem;
      font-size: 0.875rem;
      font-weight: 500;
    }
    
    @media (max-width: 768px) {
      .hero h1 {
        font-size: 2.5rem;
      }
      
      .hero-buttons {
        flex-direction: column;
        align-items: center;
      }
      
      .skills-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class HomeComponent {}