import classNames from 'classnames'
import React from 'react'

import { withPropsYrl, withStoreStateSelectedYrl } from 'yourails_common'
import type {
  VideoQaCatalogBodyComponentPropsType,
  VideoQaCatalogBodyComponentType,
  VideoQaCatalogBodyPropsOutType,
  VideoQaCatalogBodyPropsType,
  VideoQaCatalogBodyType,
} from './VideoQaCatalogBodyTypes'

/**
 * @description Component to render VideoQaCatalogBody
 * @import import { VideoQaCatalogBody, VideoQaCatalogBodyPropsType, VideoQaCatalogBodyPropsOutType, VideoQaCatalogBodyType } 
             from '../Components/VideoQaCatalogBody/VideoQaCatalogBody'
 */
const VideoQaCatalogBodyComponent: VideoQaCatalogBodyComponentType = (
  props: VideoQaCatalogBodyComponentPropsType,
) => {
  const { classAdded, storeStateSlice, isDisplaying, isVisible } = props

  const propsOut: VideoQaCatalogBodyPropsOutType = {}

  return (
    <div
      className={classNames('VideoQaCatalogBody', {
        [classAdded]: !!classAdded,
        VideoQaCatalogBody_display_none: isDisplaying === false,
        VideoQaCatalogBody_visible_none: isVisible === false,
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
            <a href="/#tools">Home</a>
            <a href="/about">About YouRails</a>
          </nav>
          <div className="actions">
            <button className="btn btn-primary" type="button">
              Create a video
            </button>
          </div>
        </div>
      </header>

      <main className="container">
        <section className="search-section">
          <div className="search-container">
            <div className="large-search-box">
              <input
                type="text"
                className="large-search-input"
                placeholder="Search within this channel..."
              />
              <button className="large-search-btn" type="button">
                Search
              </button>
            </div>
            <div className="search-meta">
              <span>Could not find what you needed?</span>
              <button className="btn-inline-generate" type="button">
                Generate a video
              </button>
            </div>
          </div>
        </section>

        <section className="video-grid">
          <div className="grid-video-wrapper">
            <iframe
              src="https://www.youtube-nocookie.com/embed/OlDXAipdSAU"
              title="Video 1"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="grid-video-wrapper">
            <iframe
              src="https://www.youtube-nocookie.com/embed/L_khWWhLFv8"
              title="Video 2"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="grid-video-wrapper">
            <iframe
              src="https://www.youtube-nocookie.com/embed/y3GcInCNPpE"
              title="Video 3"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="grid-video-wrapper">
            <iframe
              src="https://www.youtube-nocookie.com/embed/BkszqtMkeFs"
              title="Video 4"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="grid-video-wrapper">
            <iframe
              src="https://www.youtube-nocookie.com/embed/4FAYz29Mh5U"
              title="Video 5"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="grid-video-wrapper">
            <iframe
              src="https://www.youtube-nocookie.com/embed/HM9DSNVNeQE"
              title="Video 6"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="grid-video-wrapper">
            <iframe
              src="https://www.youtube-nocookie.com/embed/WtU-FRF3b4w"
              title="Video 7"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="grid-video-wrapper">
            <iframe
              src="https://www.youtube-nocookie.com/embed/CHMc-ozsNNk"
              title="Video 8"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="grid-video-wrapper">
            <iframe
              src="https://www.youtube-nocookie.com/embed/fzSiuLw684A"
              title="Video 9"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="grid-video-wrapper">
            <iframe
              src="https://www.youtube-nocookie.com/embed/-R6rk4oSB-4"
              title="Video 10"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="grid-video-wrapper">
            <iframe
              src="https://www.youtube-nocookie.com/embed/F4nx97BrMkY"
              title="Video 11"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="grid-video-wrapper">
            <iframe
              src="https://www.youtube-nocookie.com/embed/2hk7-HfsA1g"
              title="Video 12"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
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
const VideoQaCatalogBody: VideoQaCatalogBodyType = withStoreStateSelectedYrl(
  storeStateSliceProps,
  React.memo(VideoQaCatalogBodyComponent),
)

export type { VideoQaCatalogBodyPropsType, VideoQaCatalogBodyType }
export { VideoQaCatalogBody }
