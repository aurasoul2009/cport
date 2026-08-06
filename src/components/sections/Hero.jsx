import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import useMousePosition from '../../hooks/useMousePosition';
import MagneticButton from '../ui/MagneticButton';

const metricColors = {
  cyan: 'text-cyan-400',
  purple: 'text-purple-400',
  emerald: 'text-emerald-400'
};

export default function Hero({ personalInfo, metrics = [] }) {
  const mouse = useMousePosition();

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = personalInfo?.roles || [];

  useEffect(() => {
    if (roles.length === 0) {
      return undefined;
    }

    const currentRole = roles[currentRoleIndex] || '';
    const typingSpeed = isDeleting ? 40 : 80;

    let timer;

    if (!isDeleting && displayText === currentRole) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 1500);
    } else if (isDeleting && displayText === '') {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setCurrentRoleIndex((previousIndex) =>
          (previousIndex + 1) % roles.length
        );
      }, 300);
    } else {
      timer = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, roles]);

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        pt-24
        sm:pt-28
        lg:pt-32
        pb-12
        sm:pb-16
        flex
        items-center
        justify-center
        overflow-x-clip
      "
    >
      <div
        className="
          w-[92%]
          max-w-7xl
          mx-auto
          grid
          grid-cols-1
          lg:grid-cols-12
          gap-10
          lg:gap-12
          xl:gap-16
          items-center
          lg:pl-16
          xl:pl-20
        "
      >
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="
            lg:col-span-7
            min-w-0
            flex
            flex-col
            items-start
            text-left
            relative
            z-10
          "
        >
          {/* Status Badge */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              max-w-full
              px-3
              py-1.5
              sm:px-4
              sm:py-2
              mb-4
              sm:mb-6
              rounded-full
              glass-panel
              border
              border-cyan-500/30
              shadow-glow-blue
            "
          >
            <span
              className="
                relative
                flex
                w-2
                h-2
                sm:w-2.5
                sm:h-2.5
                shrink-0
              "
            >
              <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-70 animate-ping" />
              <span className="relative w-full h-full rounded-full bg-emerald-400" />
            </span>

            <span
              className="
                text-[10px]
                sm:text-xs
                font-mono
                uppercase
                tracking-wider
                text-cyan-300
                truncate
              "
            >
              {personalInfo?.relocation}
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="
              w-full
              max-w-3xl
              mb-4
              font-display
              font-black
              text-4xl
              sm:text-5xl
              md:text-6xl
              xl:text-7xl
              leading-[1.04]
              tracking-tight
              text-white
            "
          >
            <span className="block">Hi, I&apos;m</span>

            <span
              className="
                block
                mt-1
                text-gradient-primary
                drop-shadow-[0_0_35px_rgba(0,240,255,0.4)]
                break-words
              "
            >
              {personalInfo?.name}
            </span>
          </h1>

          {/* Typewriter Role */}
          <div
            className="
              w-full
              max-w-2xl
              min-w-0
              min-h-10
              sm:min-h-12
              mb-4
              sm:mb-6
              flex
              items-center
              gap-2
              overflow-hidden
              text-lg
              sm:text-2xl
              md:text-3xl
              font-mono
              font-semibold
              text-cyan-400
            "
          >
            <span className="shrink-0 text-slate-400">&gt;</span>

            <span
              className="
                min-w-0
                max-w-full
                overflow-hidden
                whitespace-nowrap
                text-ellipsis
                border-r-2
                border-cyan-400
                pr-1
                animate-pulse
              "
            >
              {displayText}
            </span>
          </div>

          {/* Summary */}
          <p
            className="
              max-w-2xl
              mb-6
              sm:mb-8
              text-sm
              sm:text-base
              md:text-lg
              leading-relaxed
              text-slate-300
            "
          >
            {personalInfo?.aboutSummary}
          </p>

          {/* CTA Buttons */}
          <div
            className="
              w-full
              sm:w-auto
              flex
              flex-col
              sm:flex-row
              sm:flex-wrap
              items-stretch
              sm:items-center
              gap-3
              sm:gap-4
            "
          >
            <MagneticButton
              href="#projects"
              className="w-full sm:w-auto"
            >
              <span
                className="
                  w-full
                  sm:w-auto
                  px-5
                  py-3
                  sm:px-6
                  sm:py-3.5
                  rounded-xl
                  bg-gradient-to-r
                  from-cyan-500
                  via-blue-600
                  to-purple-600
                  text-white
                  font-bold
                  text-xs
                  uppercase
                  tracking-widest
                  shadow-glow-blue
                  hover:opacity-95
                  transition-all
                  flex
                  items-center
                  justify-center
                  gap-2.5
                "
              >
                View Projects
                <FiArrowRight className="text-base shrink-0" />
              </span>
            </MagneticButton>

            <MagneticButton
              href="/resume/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <span
                className="
                  w-full
                  sm:w-auto
                  px-5
                  py-3
                  sm:px-6
                  sm:py-3.5
                  rounded-xl
                  glass-panel
                  border
                  border-cyan-500/40
                  text-slate-200
                  hover:text-cyan-400
                  font-bold
                  text-xs
                  uppercase
                  tracking-widest
                  hover:border-cyan-400
                  hover:shadow-glow-blue
                  transition-all
                  flex
                  items-center
                  justify-center
                  gap-2.5
                "
              >
                <FiDownload className="text-base shrink-0" />
                Download Resume
              </span>
            </MagneticButton>

            <MagneticButton
              href="#contact"
              className="w-full sm:w-auto"
            >
              <span
                className="
                  block
                  w-full
                  sm:w-auto
                  px-5
                  py-3
                  sm:px-6
                  sm:py-3.5
                  rounded-xl
                  glass-panel
                  border
                  border-white/10
                  text-center
                  text-slate-300
                  hover:text-white
                  font-bold
                  text-xs
                  uppercase
                  tracking-widest
                  hover:border-white/30
                  transition-all
                "
              >
                Contact Me
              </span>
            </MagneticButton>
          </div>

          {/* Metrics */}
          {metrics.length > 0 && (
            <div
              className="
                w-full
                max-w-sm
                mt-8
                sm:mt-12
                pt-6
                sm:pt-8
                border-t
                border-white/10
                grid
                grid-cols-2
                gap-4
                sm:gap-8
              "
            >
              {metrics.map((metric) => (
                <div key={metric.id} className="min-w-0">
                  <div
                    className={`
                      font-display
                      font-extrabold
                      text-xl
                      sm:text-3xl
                      ${
                        metricColors[metric.color] ||
                        'text-cyan-400'
                      }
                    `}
                  >
                    {metric.value}
                  </div>

                  <div
                    className="
                      mt-1
                      text-[9px]
                      sm:text-[11px]
                      font-mono
                      text-slate-400
                      uppercase
                      tracking-wider
                      break-words
                    "
                  >
                    {metric.detail}
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="
            lg:col-span-5
            w-full
            min-w-0
            flex
            justify-center
            lg:justify-end
            relative
            z-10
            mt-6
            lg:mt-0
          "
          style={{
            transform: `perspective(1000px) rotateX(${
              mouse.normalizedY * 6
            }deg) rotateY(${mouse.normalizedX * 6}deg)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          {/* Blob Backdrop */}
          <div
            className="
              absolute
              top-1/2
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-[230px]
              h-[230px]
              sm:w-[330px]
              sm:h-[330px]
              md:w-[390px]
              md:h-[390px]
              rounded-full
              bg-gradient-to-tr
              from-cyan-500/30
              via-purple-600/30
              to-pink-500/20
              blur-[50px]
              sm:blur-[60px]
              animate-pulse-slow
              pointer-events-none
            "
          />

          {/* Portrait Ring */}
          <div
            className="
              relative
              w-[220px]
              h-[220px]
              xs:w-[240px]
              xs:h-[240px]
              sm:w-[320px]
              sm:h-[320px]
              md:w-[350px]
              md:h-[350px]
              xl:w-[380px]
              xl:h-[380px]
              shrink-0
            "
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear'
              }}
              className="
                absolute
                -inset-2
                sm:-inset-4
                rounded-full
                border-2
                border-dashed
                border-cyan-400/40
                shadow-glow-blue
                pointer-events-none
              "
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: 'linear'
              }}
              className="
                absolute
                -inset-4
                sm:-inset-7
                rounded-full
                border
                border-purple-500/30
                pointer-events-none
              "
            />

            {/* Portrait */}
            <div
              className="
                relative
                w-full
                h-full
                p-2
                overflow-hidden
                rounded-full
                glass-panel
                border-2
                border-cyan-400/40
                shadow-2xl
                neon-border-animated
              "
            >
              <img
                src="/profile.png"
                alt={personalInfo?.name || 'Professional profile'}
                loading="eager"
                decoding="async"
                className="
                  w-full
                  h-full
                  object-cover
                  object-center
                  rounded-full
                  filter
                  saturate-[1.05]
                  contrast-[1.05]
                "
              />
            </div>

            {/* Top Badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="
                absolute
                top-1
                right-[-4px]
                sm:right-[-16px]
                z-20
                max-w-[170px]
                sm:max-w-none
                px-2.5
                py-1
                sm:px-3.5
                sm:py-1.5
                rounded-full
                glass-panel
                border
                border-cyan-400/50
                shadow-glow-blue
                text-[8px]
                sm:text-xs
                font-mono
                font-bold
                text-cyan-300
                whitespace-nowrap
                flex
                items-center
                gap-1.5
              "
            >
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cyan-400 shrink-0" />
              Advanced Excel &amp; DAX
            </motion.div>

            {/* Bottom Badge */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1
              }}
              className="
                absolute
                bottom-1
                left-[-4px]
                sm:left-[-16px]
                z-20
                max-w-[170px]
                sm:max-w-none
                px-2.5
                py-1
                sm:px-3.5
                sm:py-1.5
                rounded-full
                glass-panel
                border
                border-purple-500/50
                shadow-glow-purple
                text-[8px]
                sm:text-xs
                font-mono
                font-bold
                text-purple-300
                whitespace-nowrap
                flex
                items-center
                gap-1.5
              "
            >
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-purple-400 shrink-0" />
              Power Query &amp; Pivot
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}