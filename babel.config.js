module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./'],
                extensions: ['.tsx', '.jsx', '.js', '.json'],
                alias: {
                    screens: './src/screens',
                    router: './src/router',
                    components: './src/components',
                    theme: './src/theme',
                    models: './src/models',
                    store: './src/store',
                    util: './src/util',
                    hooks: './src/hooks',
                },
            },
        ],
    ],
};
