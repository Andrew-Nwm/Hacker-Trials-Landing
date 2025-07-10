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
  Badge,
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
  readonly Badge = Badge;

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
      avatar: '/people/Alex.webp',
    },
    {
      name: 'Carlos Pérez',
      role: 'Especialista en Ciberseguridad',
      text: 'Gracias a Hacker Trials he mejorado mis habilidades en ciberseguridad y he conseguido mi primer trabajo en el sector.',
      avatar: '/people/Carlos.webp',
    },
    {
      name: 'Lucía Gómez',
      role: 'Estudiante de Ingeniería',
      text: 'Entré a Hacker Trials sin saber si realmente podría destacar en tecnología. Pero cada reto, cada mentoría y cada noche de desvelo me hicieron sentir que sí puedo. Hoy tengo más confianza en mí misma y sé que estoy en el camino correcto. ¡Gracias por inspirarme a nunca rendirme!',
      avatar: '/people/Lucia.webp',
    },
  ];

  readonly letalProcessSteps = [
    {
      step: '01',
      title: 'REGÍSTRATE Y ELIGE TU DESTINO',
      desc: 'Google, GitHub, Facebook o email. Tu elección, tu poder.',
      icon: Rocket,
      color: 'cyan',
    },
    {
      step: '02',
      title: 'SELECCIONA TU NIVEL DE DOLOR',
      desc: 'Novato, Intermedio, Experto, o Modo Dios. Sin piedad.',
      icon: Target,
      color: 'purple',
    },
    {
      step: '03',
      title: 'ENFRENTA EL RETO',
      desc: 'Editor integrado, tiempo límite, presión máxima. Aquí se separa el trigo de la paja.',
      icon: Code,
      color: 'green',
    },
    {
      step: '04',
      title: 'EVALUACIÓN INMEDIATA',
      desc: 'Sin esperas, sin excusas. Apruebas o fallas al instante.',
      icon: Zap,
      color: 'yellow',
    },
    {
      step: '05',
      title: 'ESCALA AL OLIMPO',
      desc: 'Puntos, trofeos, ranking global. Tu nombre en la historia.',
      icon: Trophy,
      color: 'red',
    },
  ];

  readonly teamsAndEnterprisesInvolved = [
    {
      name: 'NOC | Laboratorios Remotos',
      description:
        'NOC – Conecta, configura y controla routers, switches y PCs desde una única interfaz SSH inteligente.',
      logo: '/others/NOC/NOC_MARCA.webp',
      social_media:
        'https://www.instagram.com/quantyx.team/profilecard/?igsh=MTIyOTVxczNpenZpdg==',
    },
    {
      name: 'FCIT | Fundación, Ciencia, Ingeniería y Tecnología',
      description:
        'FCIT – Impulsamos el talento y la innovación en ciencia, ingeniería y tecnología para transformar el futuro.',
      logo: '/others/FCIT/FCIT_WEB_NOBG.webp',
      social_media: 'https://citfundacion.org/',
    },
    {
      name: 'Quantyx | Tech Solutions',
      description:
        'Quantyx – Creamos soluciones tecnológicas sólidas, escalables y enfocadas en resultados. Aplicamos inteligencia artificial, automatización y fullstack engineering para transformar negocios.',
      logo: '/others/Quantyx/QUANTYX_ISOLOGO_NOBG.webp',
      social_media:
        'https://www.instagram.com/quantyx.team/profilecard/?igsh=MTIyOTVxczNpenZpdg==',
    },
  ];
}
