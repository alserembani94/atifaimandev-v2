import Head from 'next/head';
import { useEffect } from 'react';
import styles from 'styles/Layout.module.scss';
import Footer from './Footer';

type LayoutProps = {
    children: React.ReactChild | React.ReactChildren | React.ReactChild[] | React.ReactChildren[],
    title?: string,
    description?: string,
    emoji?: string,
    isIndexed?: boolean,
    isFollowed?: boolean,
    imageUrl?: string,
    imageAlt?: string,
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
}) => {
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
                <link rel="icon" href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${emoji}</text></svg>`} />

                {/* Controlling robot indexing e.g. Google */}
                <meta name="robots" content={`${isIndexed ? 'index': 'noindex'}, ${isFollowed ? 'follow': 'nofollow'}`} />

                {/* Prioritise the home page using canonical */}
                <link rel="canonical" href="https://atifaiman.dev/" />

                {/* Manage viewport */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                {/* Manage charset limitation */}
                <meta charSet="UTF-8" />

                {/* SEO for Social Media - OpenGraph */}
                <meta property="og:title" content={`${title ? `『 ${title} 』 `: ''}Atif Aiman`} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={imageUrl} />
                <meta property="og:url" content="https://atifaiman.dev/" />
                <meta property="og:site_name" content="Atif Aiman" />

                {/* SEO addition for Social Media - Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
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
