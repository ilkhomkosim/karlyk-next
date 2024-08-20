import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta name="robots" content="index,follow" />
				<link rel="icon" type="image/png" href="/img/logo/footer.logo.png" />

				{/* SEO */}
				<meta name="keyword" content={'karlyk, karlyk.uz, cosmetics, makeup, perfume '} />
				<meta
					name={'description'}
					content={
						'Buy cosmetics products in South Korea. Best Products at Best prices on karlyk.uz | ' +
						'Купить косметическую продукцию в Южной Корее. Лучшие товары по лучшим ценам на karlyk.uz | ' +
						'한국에서 화장품을 구매하세요. karlyk.uz에서 최고의 가격으로 최고의 제품을 만나보세요'
					}
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
