import path from "path";
import glob from "tiny-glob/sync";

import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import { babel } from '@rollup/plugin-babel';

const tsFiles = [
  ...glob(
    "./src/**/*.ts"
  ),
  ...glob(
    "./src/posts/*.tsx"
  ),
].map(p => path.resolve(path.join(__dirname, p)));

const entryFiles = tsFiles.map(v => {
  const filename = path.basename(v, path.extname(v)) + ".js"
  const outputPath = path.join(__dirname, "build", path.relative(path.join(__dirname, "src"), path.dirname(v)))
  return { entry: v, outputPath, filename }
});

const config = /** @type import("rollup").NormalizedInputOptions */ ({
  plugins: [
    typescript(),
    nodeResolve({
      preferBuiltins: true,
    }),
    commonjs(),
    babel({
      extensions: [".tsx"]
    }),
    json(),
  ]
});

export default entryFiles.map(f => ({
  ...config,
  input: f.entry,
  output: [{
    format: "cjs",
    file: path.join(f.outputPath, f.filename),
    exports: "auto"
  }]
}));
