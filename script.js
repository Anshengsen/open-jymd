document.addEventListener('DOMContentLoaded', () => {
    const inputArea = document.getElementById('markdown-input');
    const previewArea = document.getElementById('preview-output');

    const savedMarkdown = localStorage.getItem('markdownEditorContent');
    if (savedMarkdown) {
        inputArea.value = savedMarkdown;
        renderMarkdown(savedMarkdown);
    } else {
        inputArea.value = 
`# 欢迎使用纯静态 Markdown 编辑器

---

这是一个完全在浏览器本地运行的 Markdown 实时预览工具。

## 实时预览功能

### 标题
使用 \`#\` 来创建不同级别的标题。

### 列表
* 列表项 A
* 列表项 B
  * 嵌套列表

### 代码块
使用三个反引号 (\`\`\`) 来创建代码块。

\`\`\`javascript
function helloWorld() {
  console.log("Hello, World!");
}
helloWorld();
\`\`\`

### 链接和粗体
[访问 Google](https://www.google.com)

**这是粗体文字。**`;
        renderMarkdown(inputArea.value);
    }

    function renderMarkdown(markdownText) {
        const html = marked.parse(markdownText || ''); 
        previewArea.innerHTML = html;
    }

    function handleInput() {
        const markdownText = inputArea.value;
        
        renderMarkdown(markdownText);
        
        localStorage.setItem('markdownEditorContent', markdownText);
    }

    inputArea.addEventListener('input', handleInput);

    handleInput(); 
});