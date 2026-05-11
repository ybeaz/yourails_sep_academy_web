import React from 'react'
import classNames from 'classnames'

import { withPropsYrl, withStoreStateSelectedYrl } from 'yourails_common'
import {
  YouRailsHomeBodyComponentPropsType,
  YouRailsHomeBodyPropsType,
  YouRailsHomeBodyPropsOutType,
  YouRailsHomeBodyComponentType,
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
            <div className="brand-mark"></div>
            <div>Kapwing</div>
          </div>
          <nav className="nav">
            <a href="#storytellers">Storytellers</a>
            <a href="#tools">Tools</a>
            <a href="#teams">Teams</a>
            <a href="#reviews">Reviews</a>
            <a href="#story">Story</a>
          </nav>
          <div className="actions">
            <a className="btn btn-secondary" href="#teams">
              Request a Demo
            </a>
            <a className="btn btn-primary" href="#hero">
              Try Kapwing Free
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="hero">
          <div className="container hero-grid">
            <div>
              <div className="eyebrow">
                <span className="pill"></span>From idea to first draft
              </div>
              <h1>Make a video about anything</h1>
              <p>
                Create multimedia-rich videos from simple prompts with Kapwing, a platform built for
                creative teams. AI helps bring your vision to life with layers, timing, sound, and
                collaboration built in.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#storytellers">
                  Try Kapwing Free
                </a>
                <a className="btn btn-secondary" href="#tools">
                  Explore Core Tools
                </a>
              </div>
              <div className="hero-note">
                No downloads. No installations. Built for fast, collaborative video creation.
              </div>
            </div>

            <div className="preview" role="img" aria-label="Kapwing product preview">
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
                    <div className="line w92" style={{ marginTop: '18px' }}></div>
                    <div className="line w80"></div>
                    <div className="line w60"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="storytellers">
          <div className="container">
            <div className="eyebrow">
              <span className="pill"></span>Made for any type of storyteller
            </div>
            <h2 className="section-title">Adapted for teams across every workflow.</h2>
            <p className="section-lead">
              Whether you're running a marketing team, publishing internal comms, teaching a class,
              or creating content, Kapwing is designed to help you move faster and stay on brand.
            </p>

            <div className="panel-grid">
              <div className="panel">
                <h3>Marketers</h3>
                <p>
                  Create more content in less time, keep campaigns consistent, and hand off assets
                  without breaking brand standards.
                </p>
              </div>
              <div className="panel">
                <h3>Internal Comms</h3>
                <p>
                  Publish video updates that are easy to watch, share, and localize across every
                  office.
                </p>
              </div>
              <div className="panel">
                <h3>Content Creators</h3>
                <p>
                  Turn rough ideas into polished videos with templates, quick exports, and
                  collaboration built in.
                </p>
              </div>
              <div className="panel">
                <h3>Educators</h3>
                <p>
                  Use video to connect with more of your class and help strengthen storytelling
                  skills in students.
                </p>
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
              A suite of tools that makes content production more intuitive.
            </h2>
            <p className="section-lead">
              From core editing to AI-powered workflows, Kapwing combines the essentials of a modern
              production stack into one browser-based experience.
            </p>

            <div className="tools">
              <div className="tool-card">
                <h3>Core editing</h3>
                <span>Trim, split, layer, and refine with familiar tools built for speed.</span>
              </div>
              <div className="tool-card">
                <h3>AI editing</h3>
                <span>
                  Use AI to generate drafts, remove busywork, and accelerate the creative process.
                </span>
              </div>
              <div className="tool-card">
                <h3>Collaboration</h3>
                <span>
                  Work together in shared projects with comments, approvals, and fast iteration.
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="teams">
          <div className="container">
            <div className="eyebrow">
              <span className="pill"></span>Real teams creating on Kapwing
            </div>
            <h2 className="section-title">
              Already transforming video creation across industries.
            </h2>
            <p className="section-lead">
              Teams use Kapwing to create faster, localize effortlessly, and simplify the
              collaborative feedback process.
            </p>

            <div className="rating-row">
              <div>Google</div>
              <div>4.9 rating, 5024+ reviews</div>
              <div>Capterra</div>
              <div>4.4 rating, 207+ reviews</div>
            </div>

            <div className="testimonials" id="reviews">
              <div className="quote">
                <p>
                  It just works! Kapwing is incredibly intuitive. Many of our marketers were able to
                  get on the platform and use it right away with little to no instruction.
                </p>
                <div className="author">Eunice Park, Studio Production Manager at Formlabs</div>
              </div>
              <div className="quote">
                <p>
                  The workflow is fast, collaborative, and easy to share with teams across
                  departments. We can move from draft to finished asset much faster.
                </p>
                <div className="author">Creative Operations Lead</div>
              </div>
              <div className="quote">
                <p>
                  Kapwing keeps our teams aligned. We can build, review, and publish without needing
                  a complicated setup or extra software.
                </p>
                <div className="author">Marketing Team Manager</div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-band">
          <div className="container">
            <div className="cta-box">
              <div>
                <div className="eyebrow">
                  <span className="pill"></span>Now it's your turn
                </div>
                <h2 className="section-title" style={{ marginBottom: '10px' }}>
                  Redefine how your teams make video.
                </h2>
                <p className="section-lead" style={{ marginBottom: 0 }}>
                  Kapwing powers professional-quality video pipelines across marketing, education,
                  and communications. Get started in minutes.
                </p>
              </div>
              <div className="actions" style={{ alignSelf: 'center', justifyContent: 'flex-end' }}>
                <a className="btn btn-primary" href="#hero">
                  Try Kapwing Free
                </a>
                <a className="btn btn-secondary" href="#story">
                  Request a Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="story">
          <div className="container">
            <div className="eyebrow">
              <span className="pill"></span>Meet the Kapwing Team
            </div>
            <h2 className="section-title">Built by creators for the creator in everyone.</h2>
            <p className="section-lead">
              The team behind Kapwing builds the product from a creator-first point of view:
              collaborative, accessible, and easy to use.
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div>Kapwing-inspired single-file landing page.</div>
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
export { YouRailsHomeBody }
export { YouRailsHomeBody as default }
