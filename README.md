# react-component-starter-template

基于 monorepo 的 React 组件库文档，使用 Vite 打包。

## Get Started

Install dependencies:

```bash
$ pnpm install
```

Start development server:

```bash
$ pnpm dev
```

Build for production:

```bash
$ pnpm build
```

Build and release package:

```bash
# Note this is currently work in progress
$ pnpm release
```

## Development

### 1) 全局安装依赖

如果需要安装在整个项目根目录下（每个包都可以引用），则在命令后面加 `-w` 参数，例如：

```bash
$ pnpm i react react-dom -w
```

> `pnpm i` 实际上是 `pnpm add` 的别名，`-w` 参数实际上实际上是 `--workspace-root` 的缩写

### 2) 在子模块中安装依赖

如果只需要在某个子模块安装，直接进入子模块路径，执行 `pnpm i` 即可：

```bash
$ pnpm i axios
```

### 3) 子模块中引用其他子模块

在当前子模块执行：

```bash
$ pnpm i @garfield-react-component/button
```

执行完之后可以看到 `package.json` 中添加了如下内容：

```json
{
  "dependencies": {
    "@garfield-react-component/button": "workspace:^1.0.0"
  }
}
```

这时候就可以像正常 NPM 包一样引用了：

```ts
import { MyButton } from "@garfield-react-component/button";
```

## 待解决问题

- 组件库文档
  - 文件系统路由
- 组件库如何提供给业务工程使用
  - NPM 发包
  - Module Federation
