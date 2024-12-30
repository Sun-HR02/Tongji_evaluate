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
