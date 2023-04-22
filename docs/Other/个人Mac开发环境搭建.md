---
title: 个人Mac开发环境搭建
date: 2023-04-19
categories:
  - 其他
tags:
  - 教程 
---

## 安装brew

```bash
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
```

## 安装iTerm2 omz

1. 安装iTerm2

    ```bash
    brew install iterm2 --cask
    ```
   
   更换iTerm2的主题

   ```bash
   git clone https://github.com/dracula/iterm.git
   
   # 设置主题：
   #   iTerm2 > Preferences > Profiles > Colors Tab
   #   Open the Color Presets...
   #   从列表中选择import
   #   选择刚才下载主题中Dracula.itermcolors 文件
   ```

2. 下载oh my zsh, 并切换shell为zsh
    
   ```bash
   # 安装 zsh
    wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | sh
   
   # 切换默认shell为zsh
    chsh -s /bin/zsh
    ```
3. 更换zsh的主题为Dracula,添加插件

   ```bash
   # 1. 在想要保存的地方下载主题文件
    git clone https://github.com/dracula/zsh.git
   # 2. 移动主题文件dracula.zsh-theme到~/.oh-my-zsh/themes/下
   # 3. 修改zsh主题。编辑~(用户名)下.zshrc文件，修改ZSH_THEME为"dracula"
   ```
   
4. 添加插件
   
   ```bash
   # 下载命令高亮插件 这里下载到用户名下.zsh文件夹下 并移动到~/.oh-my-zsh/themes/plugins 下
   git clone https://github.com/zsh-users/zsh-syntax-highlighting

   # 下载命令提示插件  并移动到~/.oh-my-zsh/themes/plugins 下
   sudo git clone https://github.com/zsh-users/zsh-autosuggestions
   ```
5. 修改配置文件.zshrc
   
   ```text
   export ZSH="/Users/你的用户名/.oh-my-zsh"

   ZSH_THEME="dracula"
   
   plugins=(
        git
        zsh-autosuggestions
        zsh-syntax-highlighting)
   
   source $ZSH/oh-my-zsh.sh
   ```   

## 安装Node

```bash
brew install node@16

# 
npm install pnpm yarn -g
```