const path = require('path');

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },

    async redirects() {
        return [
            {
                source: '/twitter',
                destination: 'https://twitter.com/alserembani',
                permanent: true
            },
            {
                source: '/facebook',
                destination: 'https://www.facebook.com/alserembani/',
                permanent: true
            },
            {
                source: '/github',
                destination: 'https://github.com/alserembani94',
                permanent: true
            },
            {
                source: '/behance',
                destination: 'https://www.behance.net/alserembani',
                permanent: true
            },
            {
                source: '/linkedin',
                destination: 'https://www.linkedin.com/in/atif-aiman/',
                permanent: true
            },

            
        ];
    },
};