import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import { string } from "rollup-plugin-string";

import pkg from "./package.json";

export default [
  {
    input: "src/useAnimatedGridCanvas/worker.ts",
    output: [
      {
        file: "workers/grid.worker",
        format: "es",
        sourcemap: false
      }
    ],
    plugins: [
      external(),
      resolve(),
      typescript({
        rollupCommonJSResolveHack: true,
        exclude: ["**/__tests__/**"],
        clean: true
      }),
      commonjs({
        include: /node_modules/,
        namedExports: {
          "node_modules/react/react.js": [
            "Children",
            "Component",
            "PropTypes",
            "createElement"
          ],
          "node_modules/react-dom/index.js": ["render"]
        }
      })
    ]
  },
  {
    input: "src/index.ts",
    output: [
      {
        file: pkg.main,
        format: "cjs",
        exports: "named",
        sourcemap: true
      },
      {
        file: pkg.module,
        format: "es",
        exports: "named",
        sourcemap: true
      }
    ],
    plugins: [
      external(),
      resolve(),
      typescript({
        rollupCommonJSResolveHack: true,
        exclude: ["**/__tests__/**", "src/useAnimatedGridCanvas/worker.ts"],
        clean: true
      }),
      string({
        include: "workers/*.worker"
      }),
      commonjs({
        include: /node_modules/,
        namedExports: {
          "node_modules/react/react.js": [
            "Children",
            "Component",
            "PropTypes",
            "createElement"
          ],
          "node_modules/react-dom/index.js": ["render"]
        }
      })
    ]
  }
];
