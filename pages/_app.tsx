import 'styles/globals.scss';
import type { AppProps } from 'next/app';
import { NextIntlProvider } from 'next-intl';
import { NextPage } from 'next';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Component {...pageProps} />
    </NextIntlProvider>
  )
}
export default MyApp;