import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import {
  LucideAngularModule,
  Shield,
  Code,
  Zap,
  Trophy,
  Users,
  Target,
  Rocket,
  Brain,
  ChevronRight,
  Play,
  Star,
  Globe,
  Terminal,
  Award,
  TrendingUp,
  Flame,
  Crown,
  Swords,
} from 'lucide-angular';

@Component({
  selector: 'app-root',
  imports: [LucideAngularModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit, OnDestroy {
  readonly Rocket = Rocket;
  readonly Play = Play;
  readonly Shield = Shield;
  readonly Code = Code;
  readonly Zap = Zap;
  readonly Trophy = Trophy;
  readonly Users = Users;
  readonly Target = Target;
  readonly Brain = Brain;
  readonly ChevronRight = ChevronRight;
  readonly Star = Star;
  readonly Globe = Globe;
  readonly Terminal = Terminal;
  readonly Award = Award;
  readonly TrendingUp = TrendingUp;
  readonly Flame = Flame;
  readonly Crown = Crown;
  readonly Swords = Swords;

  glitchText = 'HACKERS';
  glitchWords = ['HACKERS', 'CODERS', 'WARRIORS', 'LEGENDS', 'ÉLITE'];

  currentTestimonial = 0;

  private interval: any;

  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      this.interval = setInterval(() => {
        this.ngZone.run(() => {
          this.setGlitchText(
            this.glitchWords[
              Math.floor(Math.random() * this.glitchWords.length)
            ]
          );
          this.setCurrentTestimonial(
            (this.currentTestimonial + 1) % this.testimonials.length
          );
        });
      }, 2000);
    });
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  setGlitchText(newText: string) {
    this.glitchText = newText;
  }

  setCurrentTestimonial(index: number) {
    this.currentTestimonial = index;
  }

  readonly testimonials = [
    {
      name: 'Alex Rodríguez',
      role: 'Desarrollador Full Stack',
      text: '¡Hacker Trials ha sido para mí el mejor lugar para aprender y crecer como desarrollador!',
      avatar: '/placeholder.svg?height=60&width=60',
    },
    {
      name: 'Carlos Pérez',
      role: 'Especialista en Ciberseguridad',
      text: 'Gracias a Hacker Trials he mejorado mis habilidades en ciberseguridad y he conseguido mi primer trabajo en el sector.',
      avatar: '/placeholder.svg?height=60&width=60',
    },
    {
      name: 'Lucía Gómez',
      role: 'Estudiante de Ingeniería',
      text: 'Entré a Hacker Trials sin saber si realmente podría destacar en tecnología. Pero cada reto, cada mentoría y cada noche de desvelo me hicieron sentir que sí puedo. Hoy tengo más confianza en mí misma y sé que estoy en el camino correcto. ¡Gracias por inspirarme a nunca rendirme!',
      avatar: '/placeholder.svg?height=60&width=60',
    },
  ];
}
