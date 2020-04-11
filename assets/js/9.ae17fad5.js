(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{265:function(t,a,s){t.exports=s.p+"assets/img/generate-result.fec7ce24.png"},289:function(t,a,s){"use strict";s.r(a);var e=s(29),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"快速上手"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#快速上手"}},[t._v("#")]),t._v(" 快速上手")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),e("ul",[e("li",[t._v("目前 Surgio 仅支持 Node.js 版本 >= 10")]),t._v(" "),e("li",[t._v("文档中出现的命令如无特殊说明都只能运行在 macOS, Linux 或者 WSL 上")])])]),t._v(" "),e("h2",{attrs:{id:"安装-node-js"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-node-js"}},[t._v("#")]),t._v(" 安装 Node.js")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("如果已安装可跳过")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://nodejs.org/zh-cn/download/",target:"_blank",rel:"noopener noreferrer"}},[t._v("前往下载 Node.js"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"新建一个配置仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#新建一个配置仓库"}},[t._v("#")]),t._v(" 新建一个配置仓库")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" init surgio-store my-rule-store\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或 使用国内镜像安装")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" init surgio-store my-rule-store --use-cnpm\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 来到仓库目录")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" my-rule-store\n")])])]),e("h2",{attrs:{id:"术语解释"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#术语解释"}},[t._v("#")]),t._v(" 术语解释")]),t._v(" "),e("p",[t._v("在进入正题之前，我们先解释一下核心的几个术语：")]),t._v(" "),e("h3",{attrs:{id:"provider-提供方"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#provider-提供方"}},[t._v("#")]),t._v(" Provider -- "),e("small",[t._v("提供方")])]),t._v(" "),e("p",[t._v("节点的提供方，可以是一个订阅地址也可以是一组节点的配置。")]),t._v(" "),e("h3",{attrs:{id:"template-模板"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#template-模板"}},[t._v("#")]),t._v(" Template -- "),e("small",[t._v("模板")])]),t._v(" "),e("p",[t._v("Surgio 根据模板来渲染指定的文件。")]),t._v(" "),e("h3",{attrs:{id:"artifact-产品"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#artifact-产品"}},[t._v("#")]),t._v(" Artifact -- "),e("small",[t._v("产品")])]),t._v(" "),e("p",[t._v("Surgio 生成出的规则就是「产品」。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("以上三者的关系简单来说就是：Surgio 根据 Artifact 的定义将 Provider 的节点用 Template 生成出来可用的配置。")])]),t._v(" "),e("h2",{attrs:{id:"目录结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[t._v("#")]),t._v(" 目录结构")]),t._v(" "),e("div",{staticClass:"language-txt extra-class"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br")]),e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("./my-rule-store\n├── node_modules\n├── package-lock.json\n├── package.json\n├── provider\n├── surgio.conf.js\n└── template\n")])])]),e("p",[t._v("你只需要关心高亮的 "),e("em",[t._v("surgio.conf.js")]),t._v(", "),e("em",[t._v("provider")]),t._v(" 和 "),e("em",[t._v("template")]),t._v(" 三个东西。")]),t._v(" "),e("p",[t._v("仓库中已经包含了一些用于演示的代码。我们会在后面一节说明如何自定义它们。")]),t._v(" "),e("h2",{attrs:{id:"生成规则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#生成规则"}},[t._v("#")]),t._v(" 生成规则")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("npx surgio generate\n")])])]),e("p",[t._v("规则已经生成到 "),e("code",[t._v("dist")]),t._v(" 目录了。")]),t._v(" "),e("img",{attrs:{src:s(265),width:"318"}}),t._v(" "),e("h2",{attrs:{id:"上传规则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#上传规则"}},[t._v("#")]),t._v(" 上传规则")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("npx surgio upload\n")])])]),e("p",[t._v("你也可以使用预设好的组合命令，生成后上传规则：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run update\n")])])]),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),e("p",[t._v("请确保已配置阿里云 OSS。")])]),t._v(" "),e("h2",{attrs:{id:"如何自定义"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何自定义"}},[t._v("#")]),t._v(" 如何自定义")]),t._v(" "),e("p",[t._v("推荐想使用 Surgio 的朋友先熟悉一下三大件 Artifact, Provider 和 Template 分别包含什么功能再尝试自定义。")]),t._v(" "),e("p",[t._v("Surgio 提供了一个新建组件的助手命令，你可以通过它来初始化想要的组件。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("npx surgio new artifact"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("provider"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("template\n")])])]),e("h2",{attrs:{id:"样例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#样例"}},[t._v("#")]),t._v(" 样例")]),t._v(" "),e("p",[t._v("除了你使用 init 命令生成的初始仓库之外，你还可以在 "),e("a",{attrs:{href:"https://github.com/geekdada/surgio/tree/master/examples",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),e("OutboundLink")],1),t._v(" 找到其它使用样例。")]),t._v(" "),e("h2",{attrs:{id:"升级-surgio"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#升级-surgio"}},[t._v("#")]),t._v(" 升级 Surgio")]),t._v(" "),e("p",[t._v("确保你当前的版本和新版没有兼容性问题后，运行下面命令即可。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" surgio@latest\n")])])]),e("h2",{attrs:{id:"配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[t._v("#")]),t._v(" 配置文件")]),t._v(" "),e("p",[t._v("Surgio 的配置文件位于目录内的 "),e("code",[t._v("surgio.conf.js")]),t._v("。")])])}),[],!1,null,null,null);a.default=r.exports}}]);