module.exports = {
    entry: './src/index.js',
    mode:'production',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    }
}