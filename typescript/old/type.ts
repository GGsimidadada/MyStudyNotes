let x: [string, number];

x = ['aa', 123];  // 正确

x = [123, 'aa'];  // 报错，x[0]类型应该是string, x[1]的类型应该是number

x = ['aa', 123, '1'];  // 报错，超过了预定长度

x[4] = true;
