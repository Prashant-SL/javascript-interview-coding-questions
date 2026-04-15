function computeAmount() {
  return {
    total: 0,
    lacs: function (num) {
      this.total += num * 100000;
      return this;
    },
    crore: function (num) {
      this.total += num * 10000000;
      return this;
    },
    thousand: function (num) {
      this.total += num * 1000;
      return this;
    },
    valueOf: function () {
      return this.total;
    },
  };
}
console.log(computeAmount().lacs(10).crore(2).valueOf());
