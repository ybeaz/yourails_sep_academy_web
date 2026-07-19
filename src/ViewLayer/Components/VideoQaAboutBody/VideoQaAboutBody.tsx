import classNames from 'classnames'
import React from 'react'

import { withPropsYrl, withStoreStateSelectedYrl } from 'yourails_common'
import type {
  VideoQaAboutBodyComponentPropsType,
  VideoQaAboutBodyComponentType,
  VideoQaAboutBodyPropsOutType,
  VideoQaAboutBodyPropsType,
  VideoQaAboutBodyType,
} from './VideoQaAboutBodyTypes'

/**
 * @description Component to render VideoQaAboutBody
 * @import import { VideoQaAboutBody, VideoQaAboutBodyPropsType, VideoQaAboutBodyPropsOutType, VideoQaAboutBodyType } 
             from '../Components/VideoQaAboutBody/VideoQaAboutBody'
 */
const VideoQaAboutBodyComponent: VideoQaAboutBodyComponentType = (
  props: VideoQaAboutBodyComponentPropsType,
) => {
  const { classAdded, storeStateSlice, isDisplaying, isVisible } = props

  const propsOut: VideoQaAboutBodyPropsOutType = {}

  return (
    <div
      className={classNames('VideoQaAboutBody', {
        [classAdded]: !!classAdded,
        VideoQaAboutBody_display_none: isDisplaying === false,
        VideoQaAboutBody_visible_none: isVisible === false,
      })}
    >
      <header>
        <div className="container topbar">
          <div className="brand">
            <img
              className="brand-logo"
              src="https://yourails.com/images/youRailsLogos/2026-05-22_logos/yourails_05_cycle.svg"
              alt="YouRails logo"
            />
            <div>YouRails</div>
          </div>
          <nav className="nav">
            <a href="/">Home</a>
            <a href="/catalog">Search</a>
          </nav>
          <div className="actions">
            <a className="btn btn-primary" href="#start">
              Create a video
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="hero">
          <div className="container hero-grid">
            <div>
              <h1>About YouRails</h1>
              <p>
                YouRails is an AI‑powered platform that turns practical questions into short,
                structured educational videos. It’s built for people who want fast, clear answers in
                a format that’s easy to watch, share, and reuse.
              </p>
              <p className="hero-note">
                Short, browser‑based learning videos, generated on demand and designed for instant
                use.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#start">
                  Try YouRails Free
                </a>
                <a className="btn btn-secondary" href="../">
                  Back to homepage
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="mission">
          <div className="container">
            <div className="section-title">Mission & Vision</div>
            <p className="section-lead">
              YouRails exists because learning today should be fast, focused, and frictionless.
              Instead of long lectures or scattered tutorials, we deliver short, structured videos
              that answer a specific task or question.
            </p>
            <p>
              Our vision is simple: turn any practical request into a clear, short, and reusable
              video explanation, so users can learn, create, and share knowledge in minutes, not
              hours.
            </p>
          </div>
        </section>

        <section className="section" id="how-it-works">
          <div className="container">
            <div className="section-title">How YouRails Works</div>
            <p className="section-lead">
              The platform connects search, AI generation, and editing in one workflow, so you can
              move from a question to a finished video in seconds.
            </p>
            <div className="tools">
              <div className="tool-card">
                <h3>Search</h3>
                <p>
                  Start by searching for an existing video or a themed collection. YouRails surfaces
                  relevant short‑form answers from our library, so you can quickly find what you’re
                  looking for.
                </p>
              </div>
              <div className="tool-card">
                <h3>Generate</h3>
                <p>
                  If no video exists yet, create a new educational clip instantly. YouRails uses AI
                  to generate a short, focused video tailored to your query, optimized for on‑screen
                  explanation and quick comprehension.
                </p>
              </div>
              <div className="tool-card">
                <h3>Edit & Reuse</h3>
                <p>
                  All content stays editable, so you can tweak the structure, narration, or visuals,
                  and save it as part of your own collection. You keep full ownership and can reuse,
                  share, or embed videos wherever you need them.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="for-whom">
          <div className="container">
            <div className="section-title">Who YouRails Is For</div>
            <p className="section-lead">
              YouRails is built for anyone who wants answers in video form, from casual learners to
              professionals and creators.
            </p>
            <div className="panel-grid">
              <div className="panel">
                <h3>Quick learners</h3>
                <p>
                  Users who want to solve a specific task fast, without watching long‑form content.
                  YouRails gives them short, step‑by‑step explanations they can watch and apply
                  immediately.
                </p>
              </div>
              <div className="panel">
                <h3>Students & lifelong learners</h3>
                <p>
                  People who prefer structured micro‑content that’s easy to follow and revisit
                  later. YouRails turns complex topics into focused, thematic blocks of learning.
                </p>
              </div>
              <div className="panel">
                <h3>Professionals & teams</h3>
                <p>
                  Users who need practical knowledge on demand, from workflows and tools to best
                  practices. Teams can create internal training clips and share them across the
                  organization.
                </p>
              </div>
              <div className="panel">
                <h3>Creators & educators</h3>
                <p>
                  Teachers, coaches, and content creators who want to build editable, reusable video
                  content in a single environment. YouRails simplifies the process from idea to
                  structured lesson.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="technology">
          <div className="container">
            <div className="section-title">Technology & Approach</div>
            <p className="section-lead">
              YouRails sits at the intersection of AI, microlearning, and short‑form video, built to
              feel fast, clean, and browser‑native.
            </p>
            <p>
              The platform is designed as a browser‑based workflow, so there’s no heavy app to
              install—just sign in, describe what you need, and get a short, structured video you
              can watch, edit, and reuse. Content is modular, so users can build playlists,
              collections, and reusable learning paths.
            </p>
          </div>
        </section>

        <section className="section" id="team">
          <div className="container">
            <div className="section-title">The Team Behind YouRails</div>
            <p className="section-lead">
              YouRails is built by a small multidisciplinary team at UserTo Inc., a product company
              focused on AI‑driven solutions in media, tech, and education.
            </p>
            <p>
              The team includes programmers, designers, and marketers working together to develop
              both the product and its future business model. Our goal is to refine the AI video
              generation technology, validate real user workflows, and scale YouRails into a trusted
              platform for everyday learning.
            </p>
          </div>
        </section>

        <section className="section" id="future">
          <div className="container">
            <div className="section-title">What’s Next</div>
            <p className="section-lead">
              YouRails is currently in active development, with a working prototype and early user
              feedback shaping the roadmap.
            </p>
            <p>
              We’re exploring ways to improve video quality, deepen AI understanding of user needs,
              and expand content types—from step‑by‑step tutorials to onboarding, training, and
              product walkthroughs. If you’re interested in learning more, testing the product, or
              partnering on the journey, we’d love to hear from you.
            </p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-grid">
            <div className="footer-brand-wrap">
              <div className="footer-brand">Made by UserTo</div>
              <p className="footer-desc">
                <a href="https://userto.com/" target="_blank" rel="noopener noreferrer">
                  AI solutions for learning, media, and growth.
                </a>
              </p>
            </div>

            <div className="footer-contact">
              <h3>Contact us</h3>
              <div className="contact-item">
                <span className="contact-label">Email:</span>
                <a href="mailto:contact@yourails.com">contact@yourails.com</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Linkedin:</span>
                <a
                  href="https://www.linkedin.com/in/romanches/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.linkedin.com/in/romanches/
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">©2026 YouRails</div>
        </div>
      </footer>
    </div>
  )
}

const storeStateSliceProps: string[] = []
const VideoQaAboutBody: VideoQaAboutBodyType = withStoreStateSelectedYrl(
  storeStateSliceProps,
  React.memo(VideoQaAboutBodyComponent),
)

export type { VideoQaAboutBodyPropsType, VideoQaAboutBodyType }
export { VideoQaAboutBody }
