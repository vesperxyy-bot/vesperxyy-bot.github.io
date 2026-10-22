# Cosplay 个人作品集 · CSI205 Week 6 Part 2

奶白极简、清透杂志感的纯照片作品集。零第三方依赖，无须安装或构建，双击即可浏览；电脑与手机自适应。点击照片打开大图，左右按钮或键盘方向键切换，Esc 关闭。禁用 JavaScript 后，仍可查看画廊和直接打开原图。

## 1. 文件已经保存好了

```text
cosplay-portfolio/
├── index.html        页面内容、照片路径与个人介绍
├── style.css         配色、字体、排版和手机适配
├── main.js           大图浏览与年份更新
├── .nojekyll         让 GitHub Pages 直接提供静态文件
├── README.md         本教程
└── images/
    ├── photo-01.svg
    ├── photo-02.svg
    ├── photo-03.svg
    ├── photo-04.svg
    ├── photo-05.svg
    └── photo-06.svg
```

images 里的 SVG 是原创抽象占位图，不是真实 Cosplay 照片。可以随时删除，但要先修改对应图片路径。

## 2. 在电脑预览与编辑

1. 用文件资源管理器打开这个文件夹，双击 `index.html`，选择 Edge、Chrome 等浏览器。
2. 点击“作品”“关于”、照片、左右箭头；按 Esc 关闭大图。缩窄浏览器窗口，检查手机版布局。
3. 用 VS Code 或记事本打开文件编辑。保存后回到浏览器刷新。
4. 如果用记事本另存：文件类型选“所有文件”，编码选 UTF-8。确保文件叫 `index.html`、`style.css`、`main.js`，不是 `index.html.txt`。资源管理器中开启“文件扩展名”便于检查。

知识点：浏览器读取 HTML 的内容结构，CSS 决定视觉样式，JavaScript 负责交互。本站不用服务器接口，直接打开本地文件也能正常工作。

## 3. 换上自己的 Cosplay 成片

1. 将六张照片复制到 **images 文件夹**，建议命名为 `photo-01.jpg` 到 `photo-06.jpg`。推荐前两张竖图、第三张横图、第四五张竖图、第六张横图。其他比例也可显示，图片不会被强制裁切。
2. 建议先导出适合网页的副本：长边约 1600–2400 像素、每张尽量小于 1–2 MB。支持 JPG、PNG、WebP；手机 HEIC 请先转为 JPG。修改扩展名本身不会转换格式。
3. 打开 `index.html`，找到画廊。把每张图片的 **href 和 src 两处**都从 `.svg` 改为实际扩展名。例如：

```html
<a class="photo" href="./images/photo-01.jpg">
  <img src="./images/photo-01.jpg" width="900" height="1200"
       alt="角色名：白色礼服，在窗边自然光下拍摄">
</a>
```

4. `href` 是点击时打开的大图；`src` 是画廊里的图片。`alt` 请描述真实角色与场景，供屏幕阅读器使用。将 width、height 改成图片实际像素宽高，浏览器可提前预留空间。
5. 搜索并替换所有 `YOUR NAME`；修改标题、页面描述、关于介绍和摄影署名。移除 `demo-note` 那一行占位提示。
6. 如果增删照片，复制或删除一个完整的 `<a class="photo">…</a>`；每第三张可加 `wide` 横跨两列，`offset` 产生错落。修改画廊标题旁的 `01 — 06`。放大浏览数量自动更新。

知识点：`./images/photo-01.jpg` 是相对路径，表示从当前页面所在文件夹寻找 images。文件名大小写必须一致，推荐英文小写与连字符。避免把 `C:\Users\...` 这种电脑路径写进网页。

## 4. 创建公开 GitHub 仓库

1. 登录 GitHub，右上角 **+ → New repository**。
2. Repository name 填 **你的真实用户名.github.io**。例如用户名为 `cosfan123`，仓库名必须为 `cosfan123.github.io`；不要照填单词 username，也不要使用显示昵称。
3. 选择 **Public**，然后点 **Create repository**。若同名仓库已存在，先检查其中内容，再将本站文件整合进去。
4. 空仓库页面点击 **uploading an existing file**；已有仓库则点 **Add file → Upload files**。
5. 上传这个文件夹**里面的内容**：index.html、style.css、main.js、README.md 和整个 images 文件夹。不要只上传外层 cosplay-portfolio 文件夹，也不要只上传 ZIP。隐藏文件 `.nojekyll` 如未选中可单独上传；本项目没有 Jekyll 特殊文件，漏掉它也不影响页面内容。
6. 确认仓库首页直接能看到 `index.html`，并且 `images` 文件夹中有照片。填写提交说明，例如 `Add cosplay portfolio`，点 **Commit changes**。

知识点：仓库保存项目文件；一次 Commit 是一次可追踪的版本记录。Public 仓库及发布内容均可公开访问，请使用自己有权公开的照片并填写协作署名。

## 5. 开启 GitHub Pages

1. 进入该仓库 **Settings → Pages**。
2. 在 **Build and deployment** 下，Source 选 **Deploy from a branch**。
3. Branch 选 **main**，文件夹选 **/ (root)**，点击 **Save**。
4. 等待部署完成；在 **Actions** 中查看部署任务是否成功。回到 Pages 页面，用页面提供的网站地址访问。
5. 你的个人网站地址应为 `https://你的用户名.github.io/`。上线需要一点时间，不是保存后立刻出现。
6. 以后更新照片或文件，重新上传并 Commit，GitHub Pages 会重新部署。等部署成功再刷新网页。

官方教程：https://docs.github.com/en/pages/quickstart

发布源说明：https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## 6. 检查与排错

- 页面 404：检查仓库名称、Pages 的分支与根目录设置、部署状态，并确保根目录文件名是小写 `index.html`。
- 图片不显示：核对 images 是否上传、扩展名是否真实、大小写是否一致，以及 href/src 是否均已修改。
- 页面无样式：确认 style.css 与 index.html 同级，HTML 中保留 `./style.css`。
- 更新没出现：确认 Commit 已提交、部署已完成，尝试 Ctrl+F5 强制刷新。
- 大图无法切换：确认 main.js 已上传，路径为 `./main.js`；用新版 Edge/Chrome 检查。

## 7. 实验理解与提交准备

浏览器访问网站时，先通过 DNS 找到域名对应的服务器，再建立 HTTPS 连接并请求 HTML、CSS、JavaScript 和图片。静态网站由浏览器执行页面交互，不需要自己编写后端套接字服务。HTTPS 常见于 TCP + TLS；支持 HTTP/3 的连接则可能使用 QUIC/UDP。

可准备网站网址、GitHub 仓库网址、桌面/手机布局截图，以及自己修改了哪些内容的简短说明。这里未提供课程原始评分要求，请以 Lab 讲义规定的提交材料为准。
