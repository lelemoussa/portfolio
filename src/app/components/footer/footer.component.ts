import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-main">
          <div class="footer-intro">
            <p class="eyebrow">ON GARDE LE CONTACT ?</p>
            <h2>La prochaine<br /><em>bonne idée</em> est la vôtre.</h2>
            <a class="footer-cta" routerLink="/contact">Écrivez-moi <span aria-hidden="true">↗</span></a>
          </div>
          <div class="footer-links">
            <div class="footer-column">
              <span>EXPLORER</span>
              <a routerLink="/">Accueil</a>
              <a routerLink="/about">À propos</a>
              <a routerLink="/projects">Projets</a>
              <a routerLink="/contact">Contact</a>
            </div>
            <div class="footer-column">
              <span>RETROUVEZ-MOI</span>
              <a href="https://github.com/lelemoussa" target="_blank" rel="noreferrer">GitHub <b aria-hidden="true">↗</b></a>
              <a href="https://www.linkedin.com/in/kante-moussa-7994a2285/" target="_blank" rel="noreferrer">LinkedIn <b aria-hidden="true">↗</b></a>
              <a href="mailto:lelemoussa12@gmail.com">E-mail <b aria-hidden="true">↗</b></a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <a class="footer-brand" routerLink="/"><span>MK</span> Moussa KANTÉ</a>
          <p>Backend · Data · Cloud / DevOps</p>
          <p>© {{ currentYear }} — Fait avec intention.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      padding: clamp(3.5rem, 7vw, 6rem) 0 1.5rem;
      color: white;
      background: var(--dark);
    }

    .footer-main {
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      gap: 3rem;
      padding-bottom: 4rem;
    }

    .eyebrow,
    .footer-column > span {
      color: #aab6ab;
      font-size: 0.63rem;
      font-weight: 700;
      letter-spacing: 0.13em;
    }

    .footer-intro h2 {
      margin: 1.3rem 0 1.5rem;
      font-family: var(--serif);
      font-size: clamp(2.8rem, 5vw, 4.7rem);
      font-weight: 400;
      letter-spacing: -0.06em;
      line-height: 0.98;
    }

    .footer-intro h2 em {
      color: var(--accent);
      font-weight: 400;
    }

    .footer-cta {
      display: inline-flex;
      align-items: center;
      gap: 1rem;
      padding: 0.65rem 0.7rem 0.65rem 1rem;
      border-radius: 999px;
      color: var(--dark);
      background: var(--accent);
      font-size: 0.8rem;
      font-weight: 700;
      text-decoration: none;
      transition: transform 160ms ease;
    }

    .footer-cta:hover {
      transform: translateY(-2px);
      text-decoration: none;
    }

    .footer-cta span {
      display: grid;
      width: 1.8rem;
      height: 1.8rem;
      place-items: center;
      border-radius: 50%;
      background: rgba(23,33,28,.12);
      font-size: 0.95rem;
    }

    .footer-links {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-content: center;
      gap: 2rem;
    }

    .footer-column {
      display: grid;
      align-content: start;
      gap: 0.9rem;
    }

    .footer-column > span {
      margin-bottom: 0.25rem;
    }

    .footer-column a {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      color: #d3dbd3;
      font-size: 0.8rem;
      text-decoration: none;
      transition: color 160ms ease;
    }

    .footer-column a:hover {
      color: var(--accent);
      text-decoration: none;
    }

    .footer-column b {
      font-size: 0.7rem;
      font-weight: 400;
    }

    .footer-bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      padding-top: 1.2rem;
      border-top: 1px solid rgba(255,255,255,.15);
    }

    .footer-brand {
      display: inline-flex;
      align-items: center;
      gap: 0.55rem;
      color: white;
      font-size: 0.75rem;
      font-weight: 650;
      text-decoration: none;
    }

    .footer-brand span {
      display: grid;
      width: 1.8rem;
      height: 1.8rem;
      place-items: center;
      border-radius: 50%;
      color: var(--dark);
      background: var(--accent);
      font-family: var(--serif);
      font-size: 0.68rem;
    }

    .footer-bottom p {
      margin: 0;
      color: #aab6ab;
      font-size: 0.68rem;
    }

    @media (max-width: 700px) {
      .footer-main {
        grid-template-columns: 1fr;
        gap: 3rem;
        padding-bottom: 3rem;
      }

      .footer-links {
        max-width: 28rem;
      }

      .footer-bottom {
        flex-wrap: wrap;
      }
    }

    @media (max-width: 480px) {
      .footer-bottom p:nth-of-type(1) {
        display: none;
      }
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
