export const parse = {
  data() {
    return {
      answer: 0,
      optionsArr: [],
      operators: ['+','-','*']
    };
  },
  methods: {
    generateEx() {
      let x = Math.floor(Math.random() * 50) + 1;
      let y = Math.floor(Math.random() * 50) + 1;
      let o = this.operators[Math.floor(Math.random() * this.operators.length)];
      this.answer = this.parseEx(x, o, y);
      this.ex = '' + x + ' ' + o + ' ' + y;
      this.generateOptions();
    },
    parseEx(x, o, y) {
      if (o === '+') return x + y;
      if (o === '-') return x - y;
      if (o === '*') return x * y;
    },
    generateOptions() {
      for (let i = 0; i < 3; i++) this.optionsArr[i] = Math.floor(Math.random() * this.answer) + 15;
      this.optionsArr.push(this.answer);
      return this.shuffle(this.optionsArr);
    },
    shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }
  }
};
