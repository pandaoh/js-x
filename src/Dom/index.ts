/*
 * @Author: HxB
 * @Date: 2022-04-26 15:37:27
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-06-04 16:26:31
 * @Description: 利用 dom 的一些方法
 * @FilePath: \js-xxx\src\Dom\index.ts
 */

/**
 * 字符串转实体字符
 * Example: `str2html('<>&"') => '&lt;&gt;&amp;&quot;'`
 * @param str 字符串
 * @returns
 */
export function str2html(str: string): string {
  let div = document.createElement('div');
  div.textContent = str;
  let specialChars: string = div.innerHTML;
  return specialChars;
}

/**
 * 实体字符转字符串
 * Example: `html2str('&lt;&gt;&amp;&quot;') => '<>&"'`
 * @param value 实体字符串
 * @returns
 */
export function html2str(value: string): string | null {
  let div = document.createElement('div');
  div.innerHTML = value;
  let str: string | null = div.textContent;
  return str;
}

/**
 * 插入某元素到指定 Element 之后
 * Example: `insertAfter(document.getElementById('a'), document.getElementById('b'));`
 * @param newElement 某元素
 * @param targetElement 指定元素
 * @returns
 */
export function insertAfter(newElement: any, targetElement: any) {
  let parent: any = targetElement.parentNode;
  if (parent.lastElementChild === targetElement) {
    parent.appendChild(newElement);
  } else {
    parent.insertBefore(newElement, targetElement.nextElementSibling);
  }
}

/**
 * 阻止冒泡事件&阻止默认行为&阻止事件捕获
 * Example: `offDefaultEvent(event) => 阻止冒泡事件&阻止默认行为&阻止事件捕获`
 * @param event 事件
 * @returns
 */
export function offDefaultEvent(event: any) {
  let e = event || window.event;
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  return false;
}

/**
 * 添加指定元素复制事件
 * Example: `copyContent(document.getElementById('copy')) => 复制 #copy 的内容成功`
 * @param targetDom 目标内容元素
 * @param addMsg 复制后增加内容
 */
export function copyContent(targetDom: any, addMsg: any = null) {
  let Msg = !targetDom.innerText ? targetDom.value : targetDom.innerText;
  let tempDom = document.createElement('input');
  let info = '复制成功！';
  tempDom.style.position = 'absolute';
  tempDom.style.top = '-5201314px';
  tempDom.style.left = '-5201314px';
  tempDom.value = Msg;
  tempDom.value += addMsg === null ? '' : addMsg;
  document.body.appendChild(tempDom);
  targetDom.blur();
  tempDom.select();
  try {
    document.execCommand('copy');
  } catch (err) {
    info = '浏览器不支持此操作，请手动复制。';
  }
  document.body.removeChild(tempDom);
  console.log(info);
  return Msg;
}

/**
 * 滚动到顶部
 * 平滑滚动 css：`scroll-behavior: smooth;`
 * Example: `scrollToTop('body') => 滚动到顶部`
 * @param elementSelector 指定元素选择器
 * @param to ('start'|'end')[default: 'start']
 */
export function scrollToTop(elementSelector: string, to: 'start' | 'end' = 'start') {
  const element = document.querySelector(elementSelector);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: to });
  }
}

/**
 * 滚动到底部
 * 平滑滚动 css：`scroll-behavior: smooth;`
 * Example: `scrollToBottom('body') => 滚动到底部`
 * @param elementSelector 指定元素选择器
 */
export function scrollToBottom(elementSelector: string) {
  const element = document.querySelector(elementSelector);
  if (element) {
    element.scrollTop = element.scrollHeight;
  }
}

/**
 * 找元素的第 n 级父元素
 * Example: `findParents(document.getElementById('test'), 3) => #test 的第三个父元素`
 * @param element 指定元素
 * @param n 第几个
 */
export function findParents(element: any, n: number) {
  while (element && n) {
    element = element.parentElement ? element.parentElement : element.parentNode;
    n--;
  }
  return element;
}

/**
 * 找元素的所有子元素，解决浏览器兼容问题。
 * Example: `findChildren(document.getElementById('test')) => #test 的所有子元素数组`
 * @param element 指定元素
 * @returns
 */
export function findChildren(element: any) {
  let children: any[] = element.childNodes,
    result: any[] = [],
    len = children.length;
  for (let i = 0; i < len; i++) {
    if (children[i].nodeType === 1) {
      result.push(children[i]);
    }
  }
  return result;
}

/**
 * 获取窗口尺寸
 * Example: `getViewportSize() => { width: 1280, height: 649 }`
 * @returns
 */
export function getViewportSize() {
  if (window.innerWidth) {
    return {
      w: window.innerWidth,
      h: window.innerHeight
    };
  } else {
    // ie8 及其以下
    if (document.compatMode === 'BackCompat') {
      // 怪异模式
      return {
        w: document.body.clientWidth,
        h: document.body.clientHeight
      };
    } else {
      // 标准模式
      return {
        w: document.documentElement.clientWidth,
        h: document.documentElement.clientHeight
      };
    }
  }
}

/**
 * 获取任一元素的 style 任意属性
 * @param element 指定元素
 * @param name 属性名称
 * @returns
 */
export function getStyleByName(element: any, name: any) {
  return window.getComputedStyle ? window.getComputedStyle(element, null)[name] : element.currentStyle[name];
}
