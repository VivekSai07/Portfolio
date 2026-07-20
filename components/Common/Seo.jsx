import Head from 'next/head';

const SITE_URL = 'https://vivek-portfolio-mocha.vercel.app';
const DEFAULT_IMAGE = `${SITE_URL}/images/vivek.png`;

const Seo = ({ title, description, path = '/' }) => {
    const url = `${SITE_URL}${path}`;
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={url} />

            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={DEFAULT_IMAGE} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={DEFAULT_IMAGE} />
        </Head>
    );
};

export default Seo;
