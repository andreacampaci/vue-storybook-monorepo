module.exports = {
    addons: [
        '@storybook/addon-knobs/register',
        '@storybook/addon-actions/register',
        '@storybook/addon-viewport/register',
    ],
    stories: ['../packages/**/*.stories.[tj]s'],
};