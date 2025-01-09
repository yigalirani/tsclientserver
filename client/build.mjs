import * as esbuild from 'esbuild'
esbuild.build({
  entryPoints:['src/app.ts'],
  platform: 'node',
  bundle:true,
  outdir: './dist/gen',
  sourcemap:true
})