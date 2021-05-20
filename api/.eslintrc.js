module.exports = {
    env: {
        commonjs: true,
        es2021: true,
        node: true
    },
    extends: 'standard',
    parserOptions: {
        ecmaVersion: 12
    },
    rules: {
    },
    globals: {
        describe: false,
        before: false,
        after: false,
        beforeEach: false,
        afterEach: false,
        it: false,
        test: false,
        expect: false
    }
}
