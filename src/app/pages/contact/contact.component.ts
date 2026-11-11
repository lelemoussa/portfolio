import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="contact">
      <div class="container">
        <div class="page-intro">
          <p class="eyebrow"><span>03</span> CONTACT</p>
          <h1>Une bonne idée<br /><em>commence par un échange.</em></h1>
          <p class="contact-description">
            Vous avez un projet, une opportunité ou simplement envie de parler technologie ?
            Écrivez-moi, je serai ravi d'en discuter.
          </p>
        </div>

        <div class="contact-content">
          <div class="contact-sidebar">
            <div class="contact-note">
              <span class="note-mark">“</span>
              <p>Construisons quelque chose d'utile, fiable et bien pensé.</p>
              <span class="note-signature">Moussa KANTÉ</span>
            </div>

            <div class="contact-methods">
              <a class="contact-method" href="mailto:lelemoussa12@gmail.com">
                <span class="method-icon" aria-hidden="true">↗</span>
                <span class="method-details"><small>EMAIL</small><strong>lelemoussa12@gmail.com</strong></span>
                <span class="method-arrow" aria-hidden="true">↗</span>
              </a>
              <a class="contact-method" href="tel:+2250767902915">
                <span class="method-icon" aria-hidden="true">↗</span>
                <span class="method-details"><small>TÉLÉPHONE</small><strong>+225 07 67 90 29 15</strong></span>
                <span class="method-arrow" aria-hidden="true">↗</span>
              </a>
              <a class="contact-method" href="https://www.linkedin.com/in/kante-moussa-7994a2285/" target="_blank" rel="noreferrer">
                <span class="method-icon" aria-hidden="true">↗</span>
                <span class="method-details"><small>LINKEDIN</small><strong>Échangeons sur LinkedIn</strong></span>
                <span class="method-arrow" aria-hidden="true">↗</span>
              </a>
              <a class="contact-method" href="https://github.com/lelemoussa" target="_blank" rel="noreferrer">
                <span class="method-icon" aria-hidden="true">↗</span>
                <span class="method-details"><small>GITHUB</small><strong>github.com/lelemoussa</strong></span>
                <span class="method-arrow" aria-hidden="true">↗</span>
              </a>
            </div>

            <div class="availability">
              <span class="availability-dot"></span>
              <span>Disponible pour stage, alternance, freelance et collaborations.</span>
            </div>
          </div>

          <div class="contact-form-container">
            <form class="contact-form" (ngSubmit)="onSubmit()" #contactForm="ngForm">
              <div class="form-heading">
                <span>VOTRE MESSAGE</span>
                <h2>Parlons-en.</h2>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="name">Nom complet <span>*</span></label>
                  <input type="text" id="name" name="name" [(ngModel)]="formData.name" required #name="ngModel" class="form-control" [class.error]="name.invalid && name.touched" placeholder="Votre nom">
                  <div class="error-message" *ngIf="name.invalid && name.touched">Le nom est requis</div>
                </div>
                <div class="form-group">
                  <label for="email">Adresse e-mail <span>*</span></label>
                  <input type="email" id="email" name="email" [(ngModel)]="formData.email" required email #email="ngModel" class="form-control" [class.error]="email.invalid && email.touched" placeholder="vous@exemple.com">
                  <div class="error-message" *ngIf="email.invalid && email.touched">
                    <span *ngIf="email.errors?.['required']">L'e-mail est requis</span>
                    <span *ngIf="email.errors?.['email']">Format d'e-mail invalide</span>
                  </div>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="company">Entreprise <span class="optional">(facultatif)</span></label>
                  <input type="text" id="company" name="company" [(ngModel)]="formData.company" class="form-control" placeholder="Nom de votre organisation">
                </div>
                <div class="form-group">
                  <label for="subject">Sujet <span>*</span></label>
                  <select id="subject" name="subject" [(ngModel)]="formData.subject" required #subject="ngModel" class="form-control" [class.error]="subject.invalid && subject.touched">
                    <option value="">Choisir un sujet</option>
                    <option value="stage">Opportunité de stage</option>
                    <option value="alternance">Alternance</option>
                    <option value="freelance">Projet freelance</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="autre">Autre</option>
                  </select>
                  <div class="error-message" *ngIf="subject.invalid && subject.touched">Veuillez sélectionner un sujet</div>
                </div>
              </div>

              <div class="form-group">
                <label for="message">Votre message <span>*</span></label>
                <textarea id="message" name="message" [(ngModel)]="formData.message" required #message="ngModel" rows="5" class="form-control" [class.error]="message.invalid && message.touched" placeholder="Parlez-moi de votre projet ou de votre proposition..."></textarea>
                <div class="error-message" *ngIf="message.invalid && message.touched">Le message est requis</div>
              </div>

              <button type="submit" class="submit-button" [disabled]="contactForm.invalid || isSubmitting">
                <span *ngIf="!isSubmitting">Envoyer le message</span>
                <span *ngIf="isSubmitting">Envoi en cours...</span>
                <span aria-hidden="true">↗</span>
              </button>
              <div class="success-message" *ngIf="isSubmitted" role="status">✅ Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.</div>
              <p class="form-footnote">* Champs obligatoires</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact {
      padding: clamp(4rem, 8vw, 7rem) 0;
      background: var(--paper);
    }

    .page-intro {
      max-width: 62rem;
      margin: 0 auto clamp(3rem, 7vw, 5.5rem);
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
      font-size: clamp(3rem, 6.5vw, 6rem);
      font-weight: 400;
      letter-spacing: -0.07em;
    }

    .page-intro h1 em {
      color: #788c5b;
      font-weight: 400;
    }

    .contact-description {
      max-width: 39rem;
      margin: 0 auto;
      color: var(--muted);
      font-size: 1rem;
      line-height: 1.8;
    }

    .contact-content {
      display: grid;
      grid-template-columns: minmax(0, 0.78fr) minmax(0, 1.22fr);
      align-items: start;
      gap: clamp(2rem, 6vw, 5.5rem);
    }

    .contact-note {
      position: relative;
      min-height: 12rem;
      margin-bottom: 1.5rem;
      padding: 1.7rem;
      overflow: hidden;
      border-radius: 1rem;
      color: white;
      background: var(--dark);
    }

    .contact-note::after {
      position: absolute;
      right: -3rem;
      bottom: -7rem;
      width: 15rem;
      height: 15rem;
      border: 1px solid rgba(201,239,103,.25);
      border-radius: 50%;
      box-shadow: 0 0 0 2rem rgba(201,239,103,.03), 0 0 0 4rem rgba(201,239,103,.025);
      content: '';
    }

    .note-mark {
      color: var(--accent);
      font-family: var(--serif);
      font-size: 3rem;
      line-height: 0.8;
    }

    .contact-note p {
      position: relative;
      z-index: 1;
      max-width: 20rem;
      margin: 0.4rem 0 1.2rem;
      font-family: var(--serif);
      font-size: 1.65rem;
      line-height: 1.2;
    }

    .note-signature {
      color: #c1ccc1;
      font-size: 0.7rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .contact-methods {
      display: grid;
      gap: 0.55rem;
    }

    .contact-method {
      display: grid;
      grid-template-columns: 2rem 1fr 1.5rem;
      align-items: center;
      gap: 0.75rem;
      padding: 0.9rem 0;
      border-bottom: 1px solid var(--line);
      text-decoration: none;
    }

    .method-icon {
      display: grid;
      width: 1.9rem;
      height: 1.9rem;
      place-items: center;
      border-radius: 50%;
      color: var(--dark);
      background: var(--accent);
      font-size: 0.8rem;
    }

    .method-details {
      display: grid;
      gap: 0.15rem;
    }

    .method-details small {
      color: var(--muted);
      font-size: 0.6rem;
      font-weight: 700;
      letter-spacing: 0.1em;
    }

    .method-details strong {
      color: var(--ink);
      font-size: 0.82rem;
      font-weight: 600;
      overflow-wrap: anywhere;
    }

    .method-arrow {
      color: var(--muted);
      font-size: 0.9rem;
      transition: transform 160ms ease;
    }

    .contact-method:hover .method-arrow {
      transform: translate(2px, -2px);
    }

    .availability {
      display: flex;
      align-items: flex-start;
      gap: 0.7rem;
      margin-top: 1.5rem;
      color: var(--muted);
      font-size: 0.78rem;
    }

    .availability-dot {
      flex: 0 0 auto;
      width: 0.55rem;
      height: 0.55rem;
      margin-top: 0.35rem;
      border-radius: 50%;
      background: var(--accent-dark);
      box-shadow: 0 0 0 4px rgba(145,185,54,.15);
    }

    .contact-form-container {
      padding: clamp(1.3rem, 4vw, 2.5rem);
      border: 1px solid var(--line);
      border-radius: 1rem;
      background: var(--surface);
      box-shadow: 0 18px 48px rgba(29,39,34,.05);
    }

    .form-heading {
      margin-bottom: 2rem;
      padding-bottom: 1.2rem;
      border-bottom: 1px solid var(--line);
    }

    .form-heading > span {
      color: var(--muted);
      font-size: 0.63rem;
      font-weight: 700;
      letter-spacing: 0.12em;
    }

    .form-heading h2 {
      margin: 0.4rem 0 0;
      font-family: var(--serif);
      font-size: 2.2rem;
      font-weight: 400;
      letter-spacing: -0.05em;
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }

    .form-group {
      min-width: 0;
      margin-bottom: 1.25rem;
    }

    .form-group label {
      display: block;
      margin-bottom: 0.45rem;
      color: var(--ink);
      font-size: 0.76rem;
      font-weight: 650;
    }

    .form-group label > span {
      color: #758b4b;
    }

    .form-group label .optional {
      color: var(--muted);
      font-size: 0.65rem;
      font-weight: 400;
    }

    .form-control {
      width: 100%;
      min-height: 3rem;
      padding: 0.75rem 0.85rem;
      border: 1px solid var(--line);
      border-radius: 0.55rem;
      color: var(--ink);
      background: #fff;
      font-size: 0.82rem;
      transition: border-color 160ms ease, box-shadow 160ms ease;
    }

    .form-control::placeholder {
      color: #9aa39b;
    }

    .form-control:focus {
      outline: none;
      border-color: var(--accent-dark);
      box-shadow: 0 0 0 3px rgba(201,239,103,.25);
    }

    textarea.form-control {
      min-height: 8rem;
      resize: vertical;
    }

    .form-control.error {
      border-color: #b94a48;
    }

    .error-message {
      margin-top: 0.35rem;
      color: #a63e3b;
      font-size: 0.72rem;
    }

    .submit-button {
      display: flex;
      width: 100%;
      min-height: 3.3rem;
      align-items: center;
      justify-content: space-between;
      padding: 0.6rem 0.75rem 0.6rem 1.15rem;
      border: 0;
      border-radius: 999px;
      color: white;
      background: var(--dark);
      font-size: 0.85rem;
      font-weight: 650;
      cursor: pointer;
      transition: opacity 160ms ease, transform 160ms ease;
    }

    .submit-button:hover:not(:disabled) {
      transform: translateY(-2px);
    }

    .submit-button > span:last-child {
      display: grid;
      width: 2rem;
      height: 2rem;
      place-items: center;
      border-radius: 50%;
      color: var(--dark);
      background: var(--accent);
      font-size: 1rem;
    }

    .submit-button:disabled {
      opacity: 0.65;
      cursor: not-allowed;
    }

    .success-message {
      margin-top: 1rem;
      padding: 0.9rem 1rem;
      border-radius: 0.65rem;
      color: #31501b;
      background: #edf5dc;
      font-size: 0.82rem;
      text-align: center;
    }

    .form-footnote {
      margin: 0.9rem 0 0;
      color: var(--muted);
      font-size: 0.65rem;
      text-align: center;
    }

    @media (max-width: 800px) {
      .contact-content {
        grid-template-columns: 1fr;
      }

      .contact-sidebar {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: start;
        gap: 0 1.5rem;
      }

      .contact-note,
      .availability {
        grid-column: 1 / -1;
      }

      .contact-methods {
        grid-column: 1 / -1;
      }

      .contact-note {
        min-height: 10rem;
      }
    }

    @media (max-width: 560px) {
      .page-intro {
        text-align: left;
      }

      .form-row {
        grid-template-columns: 1fr;
        gap: 0;
      }

      .contact-sidebar {
        display: block;
      }
    }
  `]
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  isSubmitted = false;

  onSubmit() {
    this.isSubmitting = true;

    setTimeout(() => {
      this.isSubmitting = false;
      this.isSubmitted = true;

      setTimeout(() => {
        this.isSubmitted = false;
        this.formData = {
          name: '',
          email: '',
          company: '',
          subject: '',
          message: ''
        };
      }, 3000);
    }, 1000);
  }
}
