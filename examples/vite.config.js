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
  define: {
    __DEV__: process.env.NODE_ENV !== "production",
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    open: true,
    port: 8066,
    hmr: true,
  },
  build: {
    target: "es2015",
    cssTarget: "chrome61",
    lib: {
      formats: ["cjs", "es"],
      entry: path.resolve(__dirname, "src/index.tsx"),
      // UMD 格式的包名
      name: "MyLib",
      fileName: (format) => `my-lib.${format}.js`
    },
    sourcemap: true,
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: [/antd/, "react", "react-dom"],
      output: {
        // CSS、图片等资源的文件名
        assetFileNames: `[name].${process.env.TIKU_ENV}.[ext]`,
        chunkFileNames: `[name].${process.env.TIKU_ENV}.js`,
        // entryFileNames: '[name].js',
        
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        // 如果不需要输出 UMD 格式则可以忽略
        // globals: {
        //   vue: "Vue"
        // }
      }
    }
  }
});
