import { dirname, join } from "path";
/** @type {import('@storybook/react/types').StorybookConfig} */
module.exports = {
    addons: [
        getAbsolutePath("@storybook/addon-essentials"),
        getAbsolutePath("@storybook/addon-webpack5-compiler-babel"),
        "@chromatic-com/storybook"
    ],
    stories: ["../src/**/*.stories.(ts|tsx|mdx)"],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
      },
      
    webpackFinal: async (config) => {
        config.module.rules.push({
            test: /\.(js|map)$/,
            use: "source-map-loader",
            enforce: "pre",
        });

        return config;
    },

    reactOptions: {
        strictMode: true,
        fastRefresh: true,
    },
    async babel(config) {
        return config;
      },
    docs: {}
};

function getAbsolutePath(value) {
    return dirname(require.resolve(join(value, "package.json")));
}
