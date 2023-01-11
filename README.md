# lxy_theme_js
- 网页夜间日间跟据系统设置自适应主题
- according to the user system setting to change the color of the web page

# 功能
- 自动识别系统是否为夜间模式并自动切换
- 没了

# process (2023/1/11)
## 类与颜色对应关系如下
| class | color-light | color-dark |  |  |
| --- | --- | --- | --- | --- |
| theme_one | #000 | #f2f2f2 |  |  |
| theme_two | #2f2f2fee | #f2f2f2ee |  |  |
| theme_three | #000 | #f2f2f2aa |  |  |
| theme_back | #f2f2f2 | #2f2f2f |  |  |
| theme_one_v | #f2f2f2 | #2f2f2f |  |  |
## 使用
1. 添加上表格class到要更改的属性
2. 添加一个到theme.js的链接如：
  > <script type="text/javascript" src="https://github.com/lixingyu41/lxy_theme_js/edit/main/theme.js"></script>
3. 添加如
  > <script>window.onload = function(){lxy_theme_js();}</script>
  只要最后运行这个函数就ok，这只是其中一个方法
