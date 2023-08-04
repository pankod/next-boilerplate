import React from 'react';

const docs = require('../docs.json');

class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
      docs,
    };
  }

  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            {this.state.docs.map((doc, index) => (
              <a
                key={index}
                href={this.docUrl(`${doc.id}.html`, this.props.language)}
              >
                {doc.title}
              </a>
            ))}
          </div>
          <div>
            <h5>Community</h5>
            {this.props.config.socialMediaUrl.map((url, index) => (
              <a
                key={index}
                href={url.url}
                target="_blank"
                rel="noreferrer noopener"
              >
                {url.title}
              </a>
            ))}
          </div>
          <div>
            <h5>More</h5>
            <a href="https://github.com/">GitHub</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/facebook/docusaurus/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub"
            >
              Star
            </a>
          </div>
        </section>

        <a
          href="https://github.com/pankod/next-boilerplate"
          target="_blank"
          rel="noreferrer noopener"
          className="fbOpenSource"
        >
          <img
            src={`${this.props.config.baseUrl}img/pankod_footer_logo.png`}
            alt="Pankod Open Source"
            width="170"
          />
        </a>
        <section className="copyright">
          {this.props.config.copyright}
        </section>
      </footer>
    );
  }
}

export default Footer;
