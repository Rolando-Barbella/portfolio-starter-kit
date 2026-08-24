import Image from 'next/image'
import Link from 'next/link'
import oportunidadesiaIcon from '../img/oportunidadesia.png'

interface Project {
  title: string
  description: string
  technologies?: string[]
  metrics: string[]
  link: string
  icon: string | React.ReactNode
}

const projects: Project[] = [
  {
    title: 'Keep your promises',
    description:
      'Designed, built and shipped an accountability app for iOS and Android. Implemented authentication, subscriptions, notifications and production deployment using Expo and React Native.',
    technologies: [
      'Expo',
      'TypeScript',
      'Revenue cat subscriptions',
      'Firebase analitics',
      'Google sign in',
      'Apple sign in',
      'Push notifications',
      'iOS',
      'Android',
      'EAS build',
      'EAS submit',
    ],
    metrics: ['$29 Lifetime Revenue'],
    link: 'https://www.kypromises.com/',
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 1024 1024" fill="currentColor" preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,1024.000000) scale(0.100000,-0.100000)">
          <path d="M4929 7147 c-130 -49 -209 -154 -231 -310 -6 -39 -11 -73 -12 -74 -1 -1 -29 5 -61 14 -192 50 -393 -44 -482 -225 l-28 -57 -3 -573 -3 -573 -46 32 c-173 120 -405 96 -558 -56 -27 -28 -63 -74 -78 -103 -37 -69 -60 -181 -52 -255 7 -70 17 -97 88 -259 31 -69 85 -222 121 -340 128 -422 256 -689 447 -929 137 -172 289 -297 474 -389 220 -109 397 -145 680 -137 433 13 724 122 960 361 191 193 320 436 378 710 21 100 22 111 19 1071 -4 1063 -2 1030 -63 1127 -42 65 -110 125 -177 156 -49 22 -71 26 -157 27 -55 0 -116 -4 -136 -8 l-37 -9 -3 109 c-4 99 -7 115 -37 175 -41 84 -120 158 -200 188 -49 19 -71 21 -157 17 -55 -3 -109 -8 -121 -12 -19 -6 -22 -2 -28 43 -9 66 -58 163 -104 203 -69 60 -134 83 -252 86 -70 2 -117 -1 -141 -10z m186 -219 c57 -44 55 -15 55 -940 0 -951 -4 -897 69 -945 62 -42 147 -19 183 48 17 32 18 75 18 732 l0 699 22 40 c61 109 195 83 233 -45 13 -43 15 -160 15 -795 l0 -744 39 -39 c35 -35 44 -39 90 -39 44 0 56 5 89 34 l37 34 5 514 c5 495 6 514 26 548 24 42 74 77 121 86 48 9 121 -22 149 -63 21 -31 21 -38 27 -933 5 -640 4 -928 -4 -993 -35 -291 -199 -589 -413 -751 -166 -126 -350 -186 -633 -206 -373 -26 -663 73 -902 309 -229 227 -394 549 -531 1032 -30 105 -70 211 -144 376 -41 92 -45 138 -17 198 59 129 226 154 322 48 14 -15 119 -185 233 -376 220 -370 234 -387 306 -387 41 0 94 29 111 62 7 13 12 41 12 63 0 35 -20 75 -131 261 l-132 219 0 715 c0 681 1 717 19 757 24 51 63 73 131 73 55 0 112 -24 145 -60 19 -21 20 -40 25 -659 5 -697 4 -681 65 -709 52 -24 106 -7 133 42 15 28 17 110 22 876 5 779 6 847 22 877 25 45 56 63 109 63 32 0 55 -7 74 -22z"></path>
        </g>
      </svg>
    ),
  },
  {
    title: 'Expo sass template',
    description: 'Build mobile apps faster with a reusable template',
    metrics: ['$3k Lifetime Revenue'],
    link: 'https://github.com/Rolando-Barbella/expo-sass-template',
    technologies: [
      'Expo',
      'TypeScript',
      'Revenue cat subscriptions',
      'Google sign in',
      'Apple sign in',
      'Push notifications',
      'iOS',
      'Android',
      'EAS build',
      'EAS submit',
    ],
    icon: (
      <svg className="w-14 h-14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  // {
  //   title: 'Oportunidades IA',
  //   description: 'AI job opportunities platform for Spanish-speaking professionals',
  //   metrics: [],
  //   link: 'https://oportunidadesia.com/',
  //   icon: (
  //     <Image
  //       src={oportunidadesiaIcon}
  //       alt="Oportunidades IA"
  //       className="w-9 h-9 rounded-lg object-cover"
  //     />
  //   ),
  // },
  // {
  //   title: 'Your Project 3',
  //   description: '14-in-1 Browser Extension Developers and Designers Love',
  //   metrics: ['$15k Lifetime Revenue', '430+ paid users'],
  //   link: 'https://example.com',
  //   icon: '🚀',
  // },
]

const techInterests = [
  {
    title: 'Desktop Commander MCP',
    link: 'https://github.com/wonderwhy-er/DesktopCommanderMCP',
  },
  {
    title: 'Expo',
    link: 'https://expo.dev/',
  },
  {
    title: 'Hermes Agent',
    link: 'https://github.com/nousresearch/hermes-agent',
  },
  {
    title: 'Plano',
    link: 'https://github.com/katanemo/plano',
  },
  {
    title: 'Scrapling',
    link: 'https://github.com/D4Vinci/Scrapling',
  },
  {
    title: 'Pi',
    link: 'https://github.com/badlogic/pi-mono',
  },
  {
    title: 'SuperPowers',
    link: 'https://github.com/obra/superpowers',
  },
]

export function Projects() {
  return (
    <div>
      <h2 className="mb-6 text-xl font-semibold tracking-tight">Personal Projects</h2>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="flex items-start gap-4">
            {/* Icon */}
            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-2xl bg-neutral-100 dark:bg-neutral-800 rounded-xl">
              {project.icon}
            </div>
            
            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-col">
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-900 dark:text-neutral-100 font-medium hover:underline decoration-neutral-400 dark:decoration-neutral-600 underline-offset-4"
                >
                  {project.title}
                </Link>
                <span className="text-neutral-900 dark:text-neutral-100 mt-1">
                  {project.description}
                </span>
                {project.technologies && (
                  <ul
                    className="mt-3 flex flex-wrap gap-2"
                    aria-label={`${project.title} technologies`}
                  >
                    {project.technologies.map((technology) => (
                      <li
                        key={technology}
                        className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              
              {/* Metrics */}
              {/* <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                {project.metrics.map((metric, idx) => (
                  <span key={idx}>{metric}</span>
                ))}
              </div> */}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="mb-6 text-xl font-semibold tracking-tight">
          Current tech interests
        </h2>
        <div className="space-y-4">
          {techInterests.map((interest) => (
            <Link
              key={interest.link}
              href={interest.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <span className="font-medium text-neutral-900 decoration-neutral-400 underline-offset-4 group-hover:underline dark:text-neutral-100 dark:decoration-neutral-600">
                {interest.title}
              </span>
              <span className="block text-sm text-neutral-600 dark:text-neutral-400">
                {interest.link.replace('https://', '')}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
