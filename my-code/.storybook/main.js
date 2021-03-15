var webpack = require('webpack')
module.exports = {
    stories: [
        '../stories/**/*.stories.mdx',
        '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        'storybook-addon-pseudo-states',
    ],

    // Mock next/image into storybook
    // https://stackoverflow.com/questions/64622746/how-to-mock-next-js-image-component-in-storybook
    webpackFinal: config => {
        config.plugins.push(
            new webpack.DefinePlugin({
                'process.env.__NEXT_IMAGE_OPTS': JSON.stringify({
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    domains: [],
                    path: '/',
                    loader: 'default',
                }),
            }),
        )
        return config
    },
}
