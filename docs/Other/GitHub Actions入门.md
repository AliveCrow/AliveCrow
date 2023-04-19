---
title: github自动构建并部署到github-pages
date: 2023-04-19
categories:
    - 其他
tags:
    - GitHub
    - 教程
---

先来了解一些 Github Actions 的工作流语法

1. **name**: 工作流的名称。
2. **run-name**: 从工作流生成的工作流运行的名称。
3. **on**: 定义哪些事件可以触发工作流运行。
4. **permissions**: 授予 GITHUB_TOKEN 的默认权限。
5. **jobs**: 工作流运行由一个或多个 jobs 组成，默认情况下并行运行。

想了解更多请访问 [GitHub Actions 的工作流语法](https://docs.github.com/zh/actions/using-workflows/workflow-syntax-for-github-actions#jobs)

```yaml
# 工作流的名称
name: AutoUpdateContent

# 工作流触发的条件 => 有更新push到main分支
on:
  push:
    branch:
      - main

jobs:
  # job名称
  deploy:
    # 运行作业的计算机类型
    runs-on: ubuntu-latest
    permissions:
      contents: write
    # job的任务
    steps:
      - name: Checkout # 任务名
        uses: actions/checkout@v3 # 任务运行的actions，可从github的marketplace中获取
      - name: Setup Node.js environment
        uses: actions/setup-node@v2
        with:
          node-version: 18.x
      - name: Install Dependencies
        run: npm install && export NODE_OPTIONS=--openssl-legacy-provider &&  npm run docs:build
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@4.1.1
        with:
          branch: gh-pages
          folder: docs/.vuepress/dist
```

