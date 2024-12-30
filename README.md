# Tongji_evaluate
缓解济兵们的评教手部压力

登录1块钱，进入我的教学评价 - 点击评教按钮

f12 - 控制台console - 粘贴代码，回车运行

<img width="1645" alt="image" src="https://github.com/user-attachments/assets/93305326-ddef-4926-b2e4-350b7c316bf7" />

```js
// 1. 选择单选框
for (let i = 0; i < 10; i++) {
  const radioInput = document.querySelectorAll('label[role="radio"] input[value="A"]')[i];
  if (radioInput) {
    radioInput.click(); // 点击单选框
    console.log(`已选择第 ${i + 1} 个单选框`);
  }
}

// 延迟 1 秒后执行提交操作
setTimeout(() => {
  // 2. 提交
  const spans = document.querySelectorAll('span');
  for (const span of spans) {
    if (span.textContent.trim() === '提交') {
      const button = span.closest('button');
      if (button) {
        console.log('提交按钮已找到:', button);
        button.click(); // 点击提交按钮
        break; // 找到后退出循环
      }
    }
  }

  // 延迟 1秒后执行确定操作
  setTimeout(() => {
    // 3. 确定
    count = 0
    const spans = document.querySelectorAll('span');
    for (const span of spans) {
      if (span.textContent.trim() === '确定') {
        const button = span.closest('button');
        if (button) {
          count ++;
          if(count < 4){continue}
          console.log('确定按钮已找到:', button);
          button.click(); // 点击确定按钮
          break; // 找到后退出循环
        }
      }
    }
  }, 1000); // 延迟 1 秒
}, 1000); // 延迟 1 秒
```
