import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  template: `
    <section class="contact">
      <div class="container">
        <div class="contact-content">
          <div class="contact-info">
            <h1>Contactez-moi</h1>
            <p class="contact-description">
              Intéressé par mon profil ? N'hésitez pas à me contacter pour discuter 
              d'opportunités de stage, d'alternance ou de collaboration sur des projets innovants.
            </p>
            
            <div class="contact-methods">
              <div class="contact-method">
                <div class="method-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div class="method-details">
                  <h3>Email</h3>
                  <p>lelemoussa12@gmail.com</p>
                </div>
              </div>
              
              <div class="contact-method">
                <div class="method-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div class="method-details">
                  <h3>Téléphone</h3>
                  <p>+225 07 67 90 29 15 / +225 05 75 22 28 36</p>
                </div>
              </div>
              
              <div class="contact-method">
                <div class="method-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </div>
                <div class="method-details">
                  <h3>LinkedIn</h3>
                  <p>linkedin.com/in/kante-moussa-7994a2285</p>
                </div>
              </div>
              
              <div class="contact-method">
                <div class="method-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div class="method-details">
                  <h3>GitHub</h3>
                  <p>github.com/lelemoussa</p>
                </div>
              </div>
            </div>
            
            <div class="availability">
              <h3>Disponibilité</h3>
              <div class="availability-item">
                <span class="status available"></span>
                <span>Disponible pour stage/alternance</span>
              </div>
              <div class="availability-item">
                <span class="status available"></span>
                <span>Ouvert aux projets freelance</span>
              </div>
              <div class="availability-item">
                <span class="status available"></span>
                <span>Collaborations académiques</span>
              </div>
            </div>
          </div>
          
          <div class="contact-form-container">
            <form class="contact-form" (ngSubmit)="onSubmit()" #contactForm="ngForm">
              <h2>Envoyez-moi un message</h2>
              
              <div class="form-group">
                <label for="name">Nom complet *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  [(ngModel)]="formData.name"
                  required
                  #name="ngModel"
                  class="form-control"
                  [class.error]="name.invalid && name.touched"
                >
                <div class="error-message" *ngIf="name.invalid && name.touched">
                  Le nom est requis
                </div>
              </div>
              
              <div class="form-group">
                <label for="email">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  [(ngModel)]="formData.email"
                  required
                  email
                  #email="ngModel"
                  class="form-control"
                  [class.error]="email.invalid && email.touched"
                >
                <div class="error-message" *ngIf="email.invalid && email.touched">
                  <span *ngIf="email.errors?.['required']">L'email est requis</span>
                  <span *ngIf="email.errors?.['email']">Format d'email invalide</span>
                </div>
              </div>
              
              <div class="form-group">
                <label for="company">Entreprise / Organisation</label>
                <input 
                  type="text" 
                  id="company" 
                  name="company" 
                  [(ngModel)]="formData.company"
                  class="form-control"
                >
              </div>
              
              <div class="form-group">
                <label for="subject">Sujet *</label>
                <select 
                  id="subject" 
                  name="subject" 
                  [(ngModel)]="formData.subject"
                  required
                  #subject="ngModel"
                  class="form-control"
                  [class.error]="subject.invalid && subject.touched"
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="stage">Opportunité de stage</option>
                  <option value="alternance">Alternance</option>
                  <option value="freelance">Projet freelance</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="autre">Autre</option>
                </select>
                <div class="error-message" *ngIf="subject.invalid && subject.touched">
                  Veuillez sélectionner un sujet
                </div>
              </div>
              
              <div class="form-group">
                <label for="message">Message *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  [(ngModel)]="formData.message"
                  required
                  #message="ngModel"
                  rows="6"
                  class="form-control"
                  [class.error]="message.invalid && message.touched"
                  placeholder="Décrivez votre projet, vos besoins ou votre proposition..."
                ></textarea>
                <div class="error-message" *ngIf="message.invalid && message.touched">
                  Le message est requis
                </div>
              </div>
              
              <button 
                type="submit" 
                class="btn btn-primary"
                [disabled]="contactForm.invalid || isSubmitting"
              >
                <span *ngIf="!isSubmitting">Envoyer le message</span>
                <span *ngIf="isSubmitting">Envoi en cours...</span>
              </button>
              
              <div class="success-message" *ngIf="isSubmitted">
                ✅ Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact {
      padding: 4rem 0;
      background: #f8fafc;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }
    
    .contact-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
    }
    
    .contact-info h1 {
      font-size: 3rem;
      color: #1e293b;
      margin-bottom: 1rem;
    }
    
    .contact-description {
      font-size: 1.1rem;
      color: #64748b;
      line-height: 1.6;
      margin-bottom: 3rem;
    }
    
    .contact-methods {
      margin-bottom: 3rem;
    }
    
    .contact-method {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 2rem;
      padding: 1.5rem;
      background: white;
      border-radius: 1rem;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    
    .method-icon {
      background: #2563eb;
      color: white;
      padding: 1rem;
      border-radius: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .method-details h3 {
      color: #1e293b;
      margin-bottom: 0.25rem;
      font-size: 1.1rem;
    }
    
    .method-details p {
      color: #64748b;
      margin: 0;
    }
    
    .availability {
      background: white;
      padding: 2rem;
      border-radius: 1rem;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    
    .availability h3 {
      color: #1e293b;
      margin-bottom: 1rem;
    }
    
    .availability-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 0.75rem;
      color: #374151;
    }
    
    .status {
      width: 12px;
      height: 12px;
      border-radius: 50%;
    }
    
    .status.available {
      background: #10b981;
    }
    
    .contact-form-container {
      background: white;
      padding: 2rem;
      border-radius: 1rem;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      height: fit-content;
    }
    
    .contact-form h2 {
      color: #1e293b;
      margin-bottom: 2rem;
      font-size: 1.5rem;
    }
    
    .form-group {
      margin-bottom: 1.5rem;
    }
    
    .form-group label {
      display: block;
      color: #374151;
      font-weight: 500;
      margin-bottom: 0.5rem;
    }
    
    .form-control {
      width: 100%;
      padding: 0.75rem;
      border: 2px solid #e2e8f0;
      border-radius: 0.5rem;
      font-size: 1rem;
      transition: border-color 0.3s;
      box-sizing: border-box;
    }
    
    .form-control:focus {
      outline: none;
      border-color: #2563eb;
    }
    
    .form-control.error {
      border-color: #ef4444;
    }
    
    .error-message {
      color: #ef4444;
      font-size: 0.875rem;
      margin-top: 0.25rem;
    }
    
    .btn {
      width: 100%;
      padding: 1rem;
      background: #2563eb;
      color: white;
      border: none;
      border-radius: 0.5rem;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.3s;
    }
    
    .btn:hover:not(:disabled) {
      background: #1d4ed8;
    }
    
    .btn:disabled {
      background: #94a3b8;
      cursor: not-allowed;
    }
    
    .success-message {
      background: #dcfce7;
      color: #166534;
      padding: 1rem;
      border-radius: 0.5rem;
      margin-top: 1rem;
      text-align: center;
    }
    
    @media (max-width: 768px) {
      .contact-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      
      .contact-info h1 {
        font-size: 2rem;
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
    
    // Simulation d'envoi (remplacer par vraie logique d'envoi)
    setTimeout(() => {
      this.isSubmitting = false;
      this.isSubmitted = true;
      
      // Reset form après 3 secondes
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