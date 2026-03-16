当前项目只完成了主页（Home Page）的实现。

请在现有代码基础上继续完善网站，补充所有二级页面。

要求：
1. 保持与主页一致的设计风格（颜色、字体、spacing、组件风格）。
2. 复用已有组件，例如 Navbar、Footer、Card 等。
3. 为每个二级页面创建独立的页面文件。
4. 更新路由，使导航栏可以跳转到对应页面。

输出：
1. 需要新增的页面列表
2. 更新后的项目目录结构
3. 每个页面的代码

状态：✅ 已完成

完成时间：2026-03-16

## 已完成的二级页面

### 新增页面列表 (共7个)

1. **获奖情况** (`/awards`) - src/app/awards/page.tsx
2. **学术兼职** (`/services`) - src/app/services/page.tsx
3. **科研项目** (`/projects`) - src/app/projects/page.tsx
4. **学术论文** (`/papers`) - src/app/papers/page.tsx
5. **教学工作** (`/teaching`) - src/app/teaching/page.tsx
6. **技术标准** (`/standards`) - src/app/standards/page.tsx
7. **图论教材** (`/graph`) - src/app/graph/page.tsx

### 更新的组件

1. **Sidebar.tsx** - 更新为使用 Next.js Link 组件和 usePathname hook 实现路由导航
2. **PageLayout.tsx** - 新增通用页面布局组件，复用 Header 和 Sidebar

详细文档请参考：
- IMPLEMENTATION.md (主页实现文档)
- SECONDPAGES.md (二级页面实现文档)
