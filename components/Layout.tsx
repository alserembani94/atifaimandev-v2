import Head from 'next/head';
import styles from 'styles/Layout.module.scss';
import Footer from './Footer';

type LayoutProps = {
    children: React.ReactChild | React.ReactChildren | React.ReactChild[] | React.ReactChildren[],
    title?: string,
    description?: string,
    emoji?: string,
};

const Layout: React.FC<LayoutProps> = ({
    children,
    title,
    description,
    emoji = '🎯',
}) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>{`${title ? `『 ${title} 』 `: ''}Atif Aiman`}</title>
                {/* <meta name="title" content={`${title ? `${title} | `: ''}Atif Aiman`} /> */}
                <meta name="description" content={description || "Welcome to my personal exploration center!"} />
                <link rel="icon" href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${emoji}</text></svg>`} />
            </Head>

            <main className={styles.main}>
                    {children}
            </main>

            <Footer />
        </div>
    )
};

export default Layout;
