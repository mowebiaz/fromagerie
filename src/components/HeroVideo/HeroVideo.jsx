'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import './HeroVideo.scss'

export const HeroVideo = () => {
  return (
    <section className="hero">
      <div className="hero-video__container">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-video__video"
          /*poster="https://images.pexels.com/photos/4198021/pexels-photo-4198021.jpeg"*/
        >
          <source
            src="video/fromages-video.mp4"
            type="video/mp4"
          />
          Votre navigateur ne supporte pas la balise <code>video</code>.
        </video>
        <div className="hero-video__overlay"></div>
      </div>
      <div className="hero__content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2}}
        >
          <h1>Fromagerie des Cimes</h1>
          <h2>
            Fromages et spécialités savoyardes à Avoriaz
          </h2>
          <div className="cta">
            <Link
              href="/produits"
              className="btn--primary"
            >
              Découvrir nos produits
            </Link>
            <Link
              href="/contact"
              className="btn--secondary"
            >
              Nous rendre visite
            </Link>
          </div>
        </motion.div>
        <motion.a
          href="#about"
          className="scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="scroll__text">Découvrir</span>
          <span className="scroll__icon"></span>
        </motion.a>
      </div>
    </section>
  )
}
