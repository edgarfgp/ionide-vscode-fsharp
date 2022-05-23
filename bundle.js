///esbuild ./out/fsharp.js --bundle --outfile=release/fsharp.js --external:vscode --format=cjs --platform=node --sourcemap
require('esbuild').build({
    entryPoints: ['./out/fsharp.js'],
    bundle: true,
    outfile: 'release/fsharp.js',
    external: ['vscode'],
    format: 'cjs',
    platform: 'node',
    sourcemap: true,
    logLevel: 'debug'
}).catch((e) => process.exit(1));