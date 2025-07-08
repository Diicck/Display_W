
var $app_default = {};

(function () {
    

// 主程序初始化完成执行
function onReady() {


}
function Random_num () {
  // 生成 0–400 的随机整数
  const randomInt = Math.floor(Math.random() * 401);

  for (let i = 1; i <= 4; i++) {
    VariableManager.set(`C_Yali${i}`, randomInt);
  }
}

setInterval(Random_num, 1000);

setInterval(function () {
  SQLManager.insert("Num_Yali", {
    Yali1: VariableManager.get('C_Yali1'),
    Yali2: VariableManager.get('C_Yali2'),
    Yali3: VariableManager.get('C_Yali3'),
    Yali4: VariableManager.get('C_Yali4'),
    Date:  formatDateTime(),
  });
},5000);




// ⬇︎ 辅助函数：数字不足两位时补 0
function pad(n) {
  return (n < 10 ? '0' : '') + n;
}

/**
 * 格式化日期时间
 * @param {Date=} date  可选，默认当前时间
 * @returns {string}    "YYYY-MM-DD HH:mm" 格式
 */
function formatDateTime(date) {
  // 若未传入参数，默认使用当前时间
  if (!date) {
    date = new Date();
  }

  var year   = date.getFullYear();
  var month  = pad(date.getMonth() + 1); // getMonth() 返回 0-11，记得 +1
  var day    = pad(date.getDate());
  var hour   = pad(date.getHours());
  var minute = pad(date.getMinutes());

  return year + '-' + month + '-' + day + ' ' + hour + ':' + minute;
}
$app_default = {onReady, Random_num, pad, formatDateTime};
})();
