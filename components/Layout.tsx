import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styles from 'styles/Layout.module.scss';
import Footer from './Footer';
import {
    SITE_NAME,
    SITE_URL,
    TWITTER_USERNAME,
} from 'utils/constants';

type LayoutProps = {
    children: React.ReactChild | React.ReactChildren | React.ReactChild[] | React.ReactChildren[],
    title?: string,
    description?: string,
    emoji?: string,
    isIndexed?: boolean,
    isFollowed?: boolean,
    imageUrl?: string,
    imageAlt?: string,
    pageType?: string,
};

const Layout: React.FC<LayoutProps> = ({
    children,
    title = '',
    description = "Welcome to Atif Aiman's exploration center!",
    emoji = '🎯',
    isIndexed = true,
    isFollowed = true,
    imageUrl = '',
    imageAlt = '',
    pageType = 'website'
}) => {
    const router = useRouter();
    useEffect(() => {
        title.length > 45 && console.warn(`Keep your title short, not more than 45 (currently at ${title.length}).`);
        description.length > 160 && console.warn(`Keep your description brief, not more than 160 (currently at ${description.length}`);
        description.length < 15 && console.warn('Page description too short - please describe more.');
        (imageUrl && !imageAlt) && console.warn('Page image should has its alternative text.')
    }, [title, description, imageUrl, imageAlt]);

    return (
        <div className={styles.container}>
            <Head>
                <title>{`${title ? `『 ${title} 』 `: ''}Atif Aiman`}</title>
                <meta name="description" content={description} />

                {/* Icon management */}
                <link
                    rel="icon"
                    href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${emoji}</text></svg>`}
                />
                {/* <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/favicon/apple-touch-icon.png"
                /> */}
                {/* <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon/favicon-32x32.png"
                /> */}
                {/* <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon/favicon-16x16.png"
                /> */}
                {/* <link rel="manifest" href="/favicon/site.webmanifest" /> */}
                {/* <link
                    rel="mask-icon"
                    href="/favicon/safari-pinned-tab.svg"
                    color="#5bbad5"
                /> */}
                {/* <link rel="shortcut icon" href="/favicon/favicon.ico" /> */}

                {/* Microsoft adjustments */}
                {/* <meta name="msapplication-TileColor" content="#00a300" /> */}
                {/* <meta name="msapplication-config" content="/favicon/browserconfig.xml" /> */}
                {/* <meta name="theme-color" content="#fff" /> */}
                {/* <link rel="alternate" type="application/rss+xml" href="/feed.xml" /> */}

                {/* Controlling robot indexing and crawling e.g. Google */}
                <meta name="robots" content={`${isIndexed ? 'index': 'noindex'}, ${isFollowed ? 'follow': 'nofollow'}`} />

                {/* Prioritise the home page using canonical */}
                <link rel="canonical" href={SITE_URL} />

                {/* Manage viewport */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                {/* Manage charset limitation */}
                <meta charSet="UTF-8" />

                {/* SEO for Social Media - OpenGraph */}
                <meta property="og:title" content={`${title ? `『 ${title} 』 `: ''}${SITE_NAME}`} />
                <meta property="og:description" content={description} key="ogDescription" />
                <meta property="og:image" content={imageUrl} key="ogImage" />
                <meta property="og:url" content={SITE_URL + router.asPath} />
                <meta property="og:site_name" content={SITE_NAME} />
                <meta property="og:type" content={pageType} />

                {/* SEO addition for Social Media - Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content={TWITTER_USERNAME} />
                <meta name="twitter:image:alt" content={imageAlt || title} />
            </Head>

            <main className={styles.main}>
                {children}
            </main>

            <Footer />
        </div>
    )
};

export default Layout;
