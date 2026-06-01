import classNames from 'classnames'
import React from 'react'

import { withPropsYrl, withStoreStateSelectedYrl } from 'yourails_common'
import type {
  YouRailsHomeBodyComponentPropsType,
  YouRailsHomeBodyComponentType,
  YouRailsHomeBodyPropsOutType,
  YouRailsHomeBodyPropsType,
  YouRailsHomeBodyType,
} from './YouRailsHomeBodyTypes'

/**
 * @description Component to render YouRailsHomeBody
 * @import import { YouRailsHomeBody, YouRailsHomeBodyPropsType, YouRailsHomeBodyPropsOutType, YouRailsHomeBodyType } 
             from '../Components/YouRailsHomeBody/YouRailsHomeBody'
 */
const YouRailsHomeBodyComponent: YouRailsHomeBodyComponentType = (
  props: YouRailsHomeBodyComponentPropsType,
) => {
  const { classAdded, storeStateSlice, isDisplaying, isVisible } = props

  const propsOut: YouRailsHomeBodyPropsOutType = {}

  return (
    <div
      className={classNames('YouRailsHomeBody', {
        [classAdded]: !!classAdded,
        YouRailsHomeBody_display_none: isDisplaying === false,
        YouRailsHomeBody_visible_none: isVisible === false,
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
            <a href="#tools">Explore</a>
            <a href="/about">About YouRails</a>
          </nav>
          <div className="actions">
            <a className="btn btn-primary" href="#hero">
              Create a video
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="hero">
          <div className="container hero-grid">
            <div>
              <div className="eyebrow">
                <span className="pill"></span>Future of video learning
              </div>
              <h1>AI educational content, made simple</h1>
              <p>
                YouRails is an AI-powered platform for structured short-form educational videos. It
                helps users turn practical needs into clear, fast, and editable learning content in
                minutes.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#tools">
                  Create a video
                </a>
                <a className="btn btn-secondary" href="#teams">
                  Explore YouRails
                </a>
              </div>
              <div className="hero-note">
                Short, structured, browser-based learning videos designed for instant use.
              </div>
            </div>

            <div className="preview" id="YouRails product preview">
              <div className="preview-frame">
                <div className="video-bars">
                  <div className="sidebar">
                    <div className="tool"></div>
                    <div className="tool"></div>
                    <div className="tool"></div>
                    <div className="tool"></div>
                    <div className="tool"></div>
                    <div className="tool"></div>
                  </div>
                  <div className="timeline">
                    <div className="clip"></div>
                    <div className="clip"></div>
                    <div className="clip"></div>
                    <div className="clip"></div>
                  </div>
                  <div className="inspector">
                    <div className="line w92"></div>
                    <div className="line w80"></div>
                    <div className="line w60"></div>
                    {/* <div className="line w92" style="margin-top:18px;"></div> */}
                    <div className="line w80"></div>
                    <div className="line w60"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="tools">
          <div className="container">
            <div className="eyebrow">
              <span className="pill"></span>Produce like a pro
            </div>
            <h2 className="section-title">
              A platform that connects search, generation, and learning.
            </h2>
            <p className="section-lead">
              From searching an existing video to generating a new one instantly, YouRails combines
              content discovery and AI creation in a single workflow.
            </p>

            <div className="tools">
              <div className="tool-card">
                <h3>Search</h3>
                <span>
                  Find existing videos from the library by entering a text query and exploring
                  themed collections.
                </span>
              </div>
              <div className="tool-card">
                <h3>Generate</h3>
                <span>
                  Create a new short educational video instantly when the library does not yet
                  contain a relevant answer.
                </span>
              </div>
              <div className="tool-card">
                <h3>Edit</h3>
                <span>
                  All generated content remains editable, so users can refine the result and reuse
                  it as needed.
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="teams">
          <div className="container">
            <div className="eyebrow">
              <span className="pill"></span>Real teams creating on YouRails
            </div>
            <h2 className="section-title">A business built for learning, access, and scale.</h2>
            <p className="section-lead">
              YouRails serves the growing need for AI-driven education and microlearning, where
              users expect immediate, task-based content delivery.
            </p>

            <div className="rating-row">
              <div>EdTech</div>
              <div>Microlearning</div>
              <div>AI learning</div>
              <div>Short-form video knowledge</div>
            </div>

            <div className="testimonials" id="reviews">
              <div className="quote">
                <p>
                  YouRails brings practical knowledge into a short video format that is easy to
                  search, watch, and reuse.
                </p>
                <div className="author">Structured learning experience</div>
              </div>
              <div className="quote">
                <p>
                  The platform is built for instant answers, with AI helping turn text requests into
                  useful visual explanations.
                </p>
                <div className="author">On-demand content workflow</div>
              </div>
              <div className="quote">
                <p>
                  Users keep full authorship of the content they create and can save it, organize
                  it, and share it freely.
                </p>
                <div className="author">Editable and user-owned output</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="storytellers">
          <div className="container">
            <div className="eyebrow">
              <span className="pill"></span>Made for any type of storyteller
            </div>
            <h2 className="section-title">Built for users who want answers in video form.</h2>
            <p className="section-lead">
              YouRails is designed for people who need practical knowledge quickly, with learning
              content organized into short, focused videos and thematic collections.
            </p>

            <div className="panel-grid">
              <div className="panel">
                <h3>Quick learners</h3>
                <p>
                  Get fast access to short video explanations that solve a specific task without
                  wasting time.
                </p>
              </div>
              <div className="panel">
                <h3>Students</h3>
                <p>
                  Learn through structured micro-content that is easy to follow and easier to
                  revisit later.
                </p>
              </div>
              <div className="panel">
                <h3>Professionals</h3>
                <p>
                  Use AI-generated learning modules to understand practical topics and workflows on
                  demand.
                </p>
              </div>
              <div className="panel">
                <h3>Creators</h3>
                <p>
                  Build, edit, and organize content in a format designed for reuse, sharing, and
                  playlist curation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="story">
          <div className="container">
            <div className="eyebrow">
              <span className="pill"></span>Meet the YouRails Team
            </div>
            <h2 className="section-title">Built by a small team with one clear goal.</h2>
            <p className="section-lead">
              We are a team of three people—programmers, designers, and marketers—working through
              UserTo Inc. to build an AI-powered platform for practical educational content.
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
const YouRailsHomeBody: YouRailsHomeBodyType = withStoreStateSelectedYrl(
  storeStateSliceProps,
  React.memo(YouRailsHomeBodyComponent),
)

export type { YouRailsHomeBodyPropsType, YouRailsHomeBodyType }
export { YouRailsHomeBody, YouRailsHomeBody as default }
