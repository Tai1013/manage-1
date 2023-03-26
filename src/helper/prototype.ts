String.prototype.num = function () {
  return parseFloat(this.replace(/[^0-9.+-]/g, ''))
}

export {}
