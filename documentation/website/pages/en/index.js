/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
	render() {
		const { siteConfig, language = '' } = this.props;
		const { baseUrl, docsUrl } = siteConfig;
		const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
		const langPart = `${language ? `${language}/` : ''}`;
		const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

		const SplashContainer = props => (
			<div className="homeContainer">
				<div className="homeSplashFade">
					<div className="wrapper homeWrapper">{props.children}</div>
				</div>
			</div>
		);

		const ProjectTitle = () => (
			<h2 className="projectTitle">
				{siteConfig.headerTitle}
				<small>{siteConfig.tagline}</small>
			</h2>
		);

		const PromoSection = props => (
			<div className="section promoSection">
				<div className="promoRow">
					<div className="pluginRowBlock">{props.children}</div>
				</div>
			</div>
		);

		const Button = props => (
			<div className="pluginWrapper buttonWrapper">
				<a className="button" href={props.href} target={props.target}>
					{props.children}
				</a>
			</div>
		);

		return (
			<SplashContainer>
				<div className="inner">
					<img className="home-banner" src="img/banner.png" />
					<ProjectTitle siteConfig={siteConfig} />

				</div>
				<div className="top-badges">
					<a href="https://codeclimate.com/github/pankod/next-boilerplate/maintainability">
						<img src="https://api.codeclimate.com/v1/badges/077c02d5cb9ec7d8a654/maintainability" />
					</a>

					<a href="https://codecov.io/gh/pankod/next-boilerplate">
						<img src="https://codecov.io/gh/pankod/next-boilerplate/branch/master/graph/badge.svg" />
					</a>
					<a href="https://travis-ci.org/pankod/next-boilerplate">
						<img src="https://travis-ci.org/pankod/next-boilerplate.svg?branch=master" alt="Build Status" />
					</a>
					<a href="https://david-dm.org/pankod/next-boilerplate">
						<img src="https://david-dm.org/pankod/next-boilerplate.svg" alt="Dependency Status" />
					</a>
					<a href="https://david-dm.org/pankod/next-boilerplate#info=devDependencies">
						<img src="https://david-dm.org/pankod/next-boilerplate/dev-status.svg" alt="devDependency Status" />
					</a>
				</div>
			{/* 	<PromoSection>
					<Button href={docUrl('getting-start.html')}>GET STARTED</Button>
				</PromoSection> */}
			</SplashContainer>
		);
	}
}

class Index extends React.Component {
	render() {
		const { config: siteConfig, language = '' } = this.props;
		const { baseUrl } = siteConfig;

		const Block = props => (
			<Container
				padding={['bottom', 'top']}
				id={props.id}
				background={props.background}>
				<GridBlock
					align={props.align}
					contents={props.children}
					layout={props.layout}
				/>
			</Container>
		);

		const FeatureCallout = () => (
			<div
				className="productShowcaseSection paddingBottom"
				style={{ textAlign: 'center' }}>
				<h2>Features </h2>
			</div>
		);

		const TryOut = () => (
			<Block id="try">
				{[
					{
						content:
							'Jest is a testing tool from Facebook that makes it easy to perform unit testing in JavaScript. Enzyme on the other hand, is React specific. It provides a bunch of helpful methods that enhance how we test React components.',
						image: `${baseUrl}img/testing.png`,
						imageAlign: 'left',
						title: 'Jest & Enzyme Testing',
					},
				]}
			</Block>
		);

		const Description = () => (
			<Block background="light" align="center">
				{[
					{
						content:
							'This boilerplate manages application state using Redux.',
						image: `${baseUrl}img/redux.png`,
						imageAlign: 'bottom',
						title: 'Redux',
					},
					{
						content:
							'Handles server-side rendering excellently, and it integrates with Express.',
						image: `${baseUrl}img/express.png`,
						imageAlign: 'bottom',
						title: 'Express',
					},
				]}
			</Block>
		);



		const LearnHow = () => (
			<Block background="light">
				{[
					{
						content:
							'Pankod boilerplate is shipped with a CLI tool to streamline the creation of new components.',
						image: `${baseUrl}img/boilerplate-cli.gif`,
						imageAlign: 'right',
						title: 'Built-in Project CLI',
					},
				]}
			</Block>
		);

		const Features = () => (
			<Block layout="fourColumn" align='center'>
				{[
					{
						content: 'Minimalistic framework for server-rendered React applications.',
						image: `${baseUrl}img/next3.png`,
						imageAlign: 'top',
						title: 'Next.js',
					},
					{
						content: 'Superset of JavaScript which primarily provides optional static typing, classes and interfaces.',
						image: `${baseUrl}img/typescript-logo.png`,
						imageAlign: 'top',
						title: 'TypeScript',
					},
					{
						content: 'Javascript testing framework , created by developers who created react',
						image: `${baseUrl}img/jest-logo.png`,
						imageAlign: 'top',
						title: 'Jest & Enzyme',
					},
					{
						content: 'Create pages, components, actions, reducers with one command by using built-in cli.',
						image: `${baseUrl}img/cli-logo.jpg`,
						imageAlign: 'top',
						title: 'Project CLI',
					},
				]}
			</Block>
		);

		const Showcase = () => {
			if ((siteConfig.users || []).length === 0) {
				return null;
			}

			const showcase = siteConfig.users
				.filter(user => user.pinned)
				.map(user => (
					<a href={user.infoLink} key={user.infoLink}>
						<img src={user.image} alt={user.caption} title={user.caption} />
					</a>
				));

			const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

			return (
				<div className="productShowcaseSection paddingBottom">
					<h2>Who is Using This?</h2>
					<p>This project is used by all these people</p>
					<div className="logos">{showcase}</div>
					<div className="more-users">
						<a className="button" href={pageUrl('users.html')}>
							More {siteConfig.title} Users
            </a>
					</div>
				</div>
			);
		};

		return (
			<div>
				<HomeSplash siteConfig={siteConfig} language={language} />
				<div className="mainContainer homeMain">
					<Features />
					<FeatureCallout />
					<LearnHow />
					<TryOut />
					<Description />

				</div>
			</div>
		);
	}
}

module.exports = Index;
