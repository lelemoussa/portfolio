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
          <p class="eyebrow"><span class="availability-dot"></span> Backend · Data · Cloud / DevOps</p>
          <h1>Je construis<br /><em>le numérique</em><br />qui tient debout.</h1>
          <p class="hero-description">
            Moussa KANTÉ — ingénieur logiciel orienté backend, data et cloud. Je conçois des
            systèmes fiables, sécurisés et prêts à évoluer.
          </p>
          <div class="hero-buttons">
            <a routerLink="/projects" class="button button-dark">Découvrir mes projets <span aria-hidden="true">↗</span></a>
            <a routerLink="/contact" class="text-link">Parlons de votre projet <span aria-hidden="true">→</span></a>
          </div>
          <div class="hero-meta">
            <span>Master 2 BIHAR</span>
            <span>ESATIC · ESTIA Biarritz</span>
            <span>Abidjan, Côte d'Ivoire</span>
          </div>
        </div>

        <aside class="visual-card" aria-label="Illustration d'une architecture cloud">
          <div class="visual-topline"><span>ARCHITECTURE / 01</span><span>EN PRODUCTION</span></div>
          <div class="orbit orbit-one"></div>
          <div class="orbit orbit-two"></div>
          <div class="core-node"><span>MK</span><small>ENGINEERING</small></div>
          <div class="orbit-node node-api"><span>API</span></div>
          <div class="orbit-node node-cloud"><span>GCP</span></div>
          <div class="orbit-node node-data"><span>DATA</span></div>
          <div class="orbit-node node-ci"><span>CI/CD</span></div>
          <div class="visual-caption">
            <span>Du code à la production.</span>
            <span class="caption-arrow">↗</span>
          </div>
        </aside>
      </div>
      <div class="hero-bottom container">
        <span>Des fondations solides.</span>
        <span>Des systèmes utiles.</span>
        <span>Un impact durable.</span>
      </div>
    </section>

    <section class="skills">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">Mon terrain de jeu</p>
          <h2>De l'architecture<br /><em>à l'exécution.</em></h2>
          <p>Un socle technique complet pour transformer les besoins métier en produits fiables.</p>
        </div>
        <div class="skills-grid">
          <article class="skill-category">
            <span class="category-index">01 / CONSTRUIRE</span>
            <h3>Backend &amp; sécurité</h3>
            <p>Des API robustes, des accès maîtrisés et des applications conçues pour durer.</p>
            <div class="skill-tags">
              <span>NestJS</span><span>Django</span><span>TypeScript</span><span>JWT</span><span>RBAC</span>
            </div>
          </article>
          <article class="skill-category">
            <span class="category-index">02 / DONNER DU SENS</span>
            <h3>Data &amp; IA</h3>
            <p>Des données structurées et accessibles, au service de décisions plus éclairées.</p>
            <div class="skill-tags">
              <span>PostgreSQL</span><span>Prisma</span><span>Oracle</span><span>MongoDB</span><span>IA agentique</span>
            </div>
          </article>
          <article class="skill-category">
            <span class="category-index">03 / FAIRE ÉVOLUER</span>
            <h3>Cloud &amp; DevOps</h3>
            <p>Une infrastructure automatisée, sécurisée et pensée pour la mise à l'échelle.</p>
            <div class="skill-tags">
              <span>GCP</span><span>Terraform</span><span>Docker</span><span>GitHub Actions</span><span>GKE</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      position: relative;
      overflow: hidden;
      padding: clamp(4rem, 8vw, 7.5rem) 0 1.5rem;
      background: var(--paper);
    }

    .hero::before {
      position: absolute;
      top: -18rem;
      right: -12rem;
      width: 42rem;
      height: 42rem;
      border: 1px solid rgba(29, 39, 34, 0.06);
      border-radius: 50%;
      content: '';
      pointer-events: none;
    }

    .hero-inner {
      display: grid;
      grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.8fr);
      align-items: center;
      gap: clamp(3rem, 8vw, 8rem);
    }

    .eyebrow,
    .category-index {
      display: flex;
      align-items: center;
      gap: 0.65rem;
      margin-bottom: 1.4rem;
      color: var(--muted);
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
    }

    .availability-dot {
      width: 0.55rem;
      height: 0.55rem;
      border-radius: 50%;
      background: var(--accent-dark);
      box-shadow: 0 0 0 4px rgba(145, 185, 54, 0.15);
    }

    h1 {
      margin-bottom: 1.5rem;
      color: var(--ink);
      font-family: var(--serif);
      font-size: clamp(3.7rem, 7.4vw, 7.25rem);
      font-weight: 400;
      letter-spacing: -0.075em;
      line-height: 0.91;
    }

    h1 em,
    .section-heading h2 em {
      color: #788c5b;
      font-weight: 400;
    }

    .hero-description {
      max-width: 34rem;
      margin-bottom: 2rem;
      color: var(--muted);
      font-size: 1.08rem;
      line-height: 1.8;
    }

    .hero-buttons {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 1.5rem;
      margin-bottom: 3rem;
    }

    .button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 1.6rem;
      min-height: 3.5rem;
      padding: 0.75rem 1.15rem 0.75rem 1.4rem;
      border-radius: 999px;
      font-size: 0.9rem;
      font-weight: 650;
      text-decoration: none;
      transition: transform 180ms ease, background 180ms ease;
    }

    .button:hover {
      transform: translateY(-2px);
      text-decoration: none;
    }

    .button-dark {
      color: white;
      background: var(--dark);
    }

    .button-dark span {
      display: grid;
      width: 2rem;
      height: 2rem;
      place-items: center;
      border-radius: 50%;
      color: var(--dark);
      background: var(--accent);
      font-size: 1.1rem;
    }

    .text-link {
      color: var(--ink);
      font-size: 0.9rem;
      font-weight: 650;
      text-decoration: none;
    }

    .text-link span {
      margin-left: 0.35rem;
      transition: margin 180ms ease;
    }

    .text-link:hover span {
      margin-left: 0.65rem;
    }

    .hero-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 0.65rem 1.4rem;
      color: var(--muted);
      font-size: 0.75rem;
    }

    .hero-meta span + span::before {
      margin-right: 1.4rem;
      color: #a1a99e;
      content: '/';
    }

    .visual-card {
      position: relative;
      display: grid;
      min-height: 28rem;
      overflow: hidden;
      place-items: center;
      border-radius: 1.5rem;
      color: white;
      background: #19241e;
      box-shadow: 0 28px 80px rgba(29, 39, 34, 0.16);
    }

    .visual-card::before {
      position: absolute;
      inset: 0;
      background-image: radial-gradient(rgba(255,255,255,.12) 0.7px, transparent 0.7px);
      background-size: 17px 17px;
      content: '';
      opacity: 0.45;
    }

    .visual-topline,
    .visual-caption {
      position: absolute;
      z-index: 2;
      right: 1.5rem;
      left: 1.5rem;
      display: flex;
      justify-content: space-between;
      color: #aeb8af;
      font-size: 0.62rem;
      letter-spacing: 0.12em;
    }

    .visual-topline {
      top: 1.5rem;
    }

    .visual-topline span:last-child {
      color: var(--accent);
    }

    .orbit {
      position: absolute;
      width: 17rem;
      height: 17rem;
      border: 1px solid rgba(201, 239, 103, 0.24);
      border-radius: 50%;
    }

    .orbit-two {
      width: 23rem;
      height: 23rem;
      border-color: rgba(255,255,255,.11);
    }

    .core-node,
    .orbit-node {
      position: absolute;
      z-index: 1;
      display: grid;
      place-items: center;
      border: 1px solid rgba(255,255,255,.18);
      border-radius: 50%;
      background: #202e26;
      box-shadow: 0 8px 26px rgba(0,0,0,.2);
    }

    .core-node {
      width: 7rem;
      height: 7rem;
      border-color: rgba(201,239,103,.65);
      background: var(--accent);
      color: var(--dark);
    }

    .core-node span {
      margin-top: 0.4rem;
      font-family: var(--serif);
      font-size: 2rem;
    }

    .core-node small {
      margin-top: -1.6rem;
      font-size: 0.45rem;
      letter-spacing: 0.1em;
    }

    .orbit-node {
      width: 3.6rem;
      height: 3.6rem;
      color: #ecf1e7;
      font-size: 0.65rem;
      font-weight: 700;
    }

    .node-api { top: 23%; left: 23%; }
    .node-cloud { top: 26%; right: 18%; }
    .node-data { right: 25%; bottom: 23%; }
    .node-ci { bottom: 23%; left: 19%; }

    .visual-caption {
      bottom: 1.5rem;
      align-items: center;
      color: #e6ebe3;
      font-size: 0.8rem;
      letter-spacing: 0;
    }

    .caption-arrow {
      display: grid;
      width: 2rem;
      height: 2rem;
      place-items: center;
      border: 1px solid rgba(255,255,255,.3);
      border-radius: 50%;
    }

    .hero-bottom {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      margin-top: clamp(4rem, 8vw, 7rem);
      padding-top: 1.2rem;
      border-top: 1px solid var(--line);
      color: var(--muted);
      font-size: 0.75rem;
    }

    .skills {
      padding: clamp(5rem, 9vw, 8rem) 0;
      background: var(--surface);
    }

    .section-heading {
      display: grid;
      grid-template-columns: 1fr 1.15fr 0.8fr;
      align-items: end;
      gap: 2rem;
      margin-bottom: 3.5rem;
    }

    .section-heading .eyebrow {
      align-self: start;
      margin-top: 0.6rem;
    }

    .section-heading h2 {
      margin: 0;
      font-family: var(--serif);
      font-size: clamp(2.8rem, 5vw, 4.7rem);
      font-weight: 400;
      letter-spacing: -0.065em;
    }

    .section-heading > p:last-child {
      margin-bottom: 0.4rem;
      color: var(--muted);
      font-size: 0.95rem;
    }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
    }

    .skill-category {
      min-height: 18rem;
      padding: 1.7rem;
      border: 1px solid var(--line);
      border-radius: 1rem;
      background: var(--paper);
      transition: transform 180ms ease, box-shadow 180ms ease;
    }

    .skill-category:hover {
      transform: translateY(-4px);
      box-shadow: 0 16px 36px rgba(29, 39, 34, 0.08);
    }

    .category-index {
      margin-bottom: 2.5rem;
      font-size: 0.62rem;
    }

    .skill-category h3 {
      margin-bottom: 0.7rem;
      font-family: var(--serif);
      font-size: 1.65rem;
      font-weight: 400;
      letter-spacing: -0.035em;
    }

    .skill-category p {
      min-height: 3.2rem;
      margin-bottom: 1.3rem;
      color: var(--muted);
      font-size: 0.88rem;
    }

    .skill-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.45rem;
    }

    .skill-tags span {
      padding: 0.35rem 0.65rem;
      border: 1px solid var(--line);
      border-radius: 999px;
      color: #48544c;
      background: var(--surface);
      font-size: 0.7rem;
    }

    @media (max-width: 900px) {
      .hero-inner {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .visual-card {
        width: min(100%, 34rem);
        min-height: 24rem;
        justify-self: center;
      }

      .section-heading {
        grid-template-columns: 1fr 1.5fr;
      }

      .section-heading > p:last-child {
        grid-column: 2;
      }

      .skills-grid {
        grid-template-columns: 1fr 1fr;
      }
    }

    @media (max-width: 680px) {
      .hero {
        padding-top: 4rem;
      }

      .hero-inner {
        grid-template-columns: 1fr;
      }

      h1 {
        font-size: clamp(3.6rem, 16vw, 6rem);
      }

      .hero-buttons {
        align-items: flex-start;
        flex-direction: column;
        gap: 1.1rem;
        margin-bottom: 2rem;
      }

      .hero-meta {
        gap: 0.5rem 1rem;
      }

      .hero-meta span + span::before {
        margin-right: 1rem;
      }

      .visual-card {
        min-height: 22rem;
      }

      .hero-bottom {
        flex-wrap: wrap;
        justify-content: flex-start;
        column-gap: 1.2rem;
        margin-top: 3rem;
      }

      .section-heading {
        grid-template-columns: 1fr;
        gap: 0.75rem;
      }

      .section-heading > p:last-child {
        grid-column: auto;
        max-width: 28rem;
      }

      .skills-grid {
        grid-template-columns: 1fr;
      }

      .skill-category {
        min-height: auto;
      }

      .category-index {
        margin-bottom: 1.5rem;
      }
    }
  `]
})
export class HomeComponent {}
