module.exports = {
    env: {
        mode: process.env.NODE_ENV,
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"]
        });

        return config;
    },
    redirects() {
        return [
            {
                source: '/graveyard.json',
                destination: '/api/graveyard',
                permanent: true,
            },
        ];
    },
    rewrites() {
        return [
            {
                source: '/social/:path*',
                destination: 'https://static.killedbynetflix.info/com/social/:path*',
            }
        ]
    },
};