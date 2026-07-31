import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

const socialLinks = [
  {
    href: personalInfo.linkedin,
    label: 'LinkedIn',
    icon: FiLinkedin
  },
  {
    href: personalInfo.github,
    label: 'GitHub',
    icon: FiGithub
  },
  {
    href: `mailto:${personalInfo.email}`,
    label: 'Email',
    icon: FiMail
  }
];

export default function FloatingSocial() {
  return (
    <aside className="fixed left-4 top-[40%] z-[940] hidden lg:flex flex-col gap-3">
      {socialLinks.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/30 text-white transition hover:border-cyan-400/60 hover:text-cyan-400"
            aria-label={item.label}
          >
            <Icon className="h-5 w-5" />
          </a>
        );
      })}
    </aside>
  );
}
