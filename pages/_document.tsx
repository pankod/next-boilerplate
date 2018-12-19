import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {

	render() {
		return (
			<html>
				<Head>
                    <title>Pankod - Software and Consultancy</title>
					<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
					<meta charSet="utf-8" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		)
	}
}