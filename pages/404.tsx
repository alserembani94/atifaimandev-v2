import { Button } from "components/Form";
import { Layout } from "components/Main";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from 'styles/404.module.scss';

const Custom404: NextPage = () => {
    const router = useRouter();

    useEffect(() => {
        // Help fetch the home page for faster loading
        router.prefetch('/');
    }, [router]);

    const handleRedirect = () => {
        router.push('/');
    }

    return (
        <Layout
            title="Are you lost?"
            alignment="centered"
        >
            <div className={styles.error404}>
                <p className={styles.error404__title}>❓</p>
                <p>It seems that you are questioning the existence of this page, but I am sad to say that it is not.</p>
                <Button onClick={handleRedirect}>🏡 Back to home, shall we?</Button>
            </div>
        </Layout>
    );
};

export default Custom404;