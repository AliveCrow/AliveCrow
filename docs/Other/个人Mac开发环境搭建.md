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
    brew cask install iterm2
    ```
   
   更换iTerm2的主题

   ```bash
   git clone https://github.com/dracula/iterm.git
   
   # 设置主题：
   #   iTerm2 > Preferences > Profiles > Colors Tab
   #   Open the Color Presets...
   #   从列表中选择import
   #   选择刚才下载主题中Dracula.itermcolors 文件，确定
   ```

2. 下载oh my zsh, 并切换shell为zsh
    
   ```bash
   # 克隆oh-my-zsh到~/.oh-my-zsh目录
    git clone https://github.com/robbyrussell/oh-my-zsh.git ~/.oh-my-zsh
   
   # 切换默认shell为zsh
    chsh -s /bin/zs 
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
   # 下载命令高亮插件 这里下载到用户名下.zsh文件夹下
   sudo git clone https://github.com/zsh-users/zsh-syntax-highlighting ~/.zsh/zsh-syntax-highlighting

   # 下载命令提示插件
   sudo git clone https://github.com/zsh-users/zsh-autosuggestions ~/.zsh/zsh-autosuggestions
   ```
5. 修改配置文件.zshrc
   
   ```text
   export ZSH="/Users/你的用户名/.oh-my-zsh"

   ZSH_THEME="dracula"
   
   plugins=(
        zsh-autosuggestions
        zsh-syntax-highlighting)
   
   source $ZSH/oh-my-zsh.sh
   
   # 别名
   alias open_config="open ~/.zshrc"
   alias save_config="source ~/.zshrc"
   alias proxy="git config --global http.proxy http://127.0.0.1:7890 git config --global https.proxy https://127.0.0.1:7890"
   alias noproxy="git config --global --unset http.proxy
   ```   

## 安装Node

```bash
brew install node@16

# 
npm install pnpm yarn -g
```