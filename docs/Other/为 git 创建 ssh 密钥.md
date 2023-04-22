---
date: 2023-04-22 10:56
categories:
  - 其他
tags:
  - git
---

# 生成新 SSH 密钥

1. 打开终端。
2. 粘贴下面的文本（替换为您的 GitHub 电子邮件地址）。
    ```bash
    ssh-keygen -t ed25519 -C "your_email@example.com"
    ```
   ::: warning
    注意：如果你使用的是不支持 Ed25519 算法的旧系统，请使用以下命令：
    ```bash
    ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
    ```
   :::
3. 名称、密码什么的可以如果不设直接按空格
4. 将在 ~/.ssh 中生成的 .pub 文件中的内容添加到 github 账户中