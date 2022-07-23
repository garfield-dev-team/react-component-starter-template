import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import importPlugin from "vite-plugin-importer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "classic"
    }),
    importPlugin({
      libraryName: "antd",
      libraryDirectory: "es",
      style: "css"
    })
  ],
  server: {
    open: true
  },
  build: {
    lib: {
      formats: ["cjs", "es"],
      entry: path.resolve(__dirname, "src/index.tsx"),
      // UMD 格式的包名
      name: "MyLib",
      fileName: (format) => `my-lib.${format}.js`
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: [/antd/, "react", "react-dom"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        // 如果不需要输出 UMD 格式则可以忽略
        // globals: {
        //   vue: "Vue"
        // }
      }
    }
  }
});
