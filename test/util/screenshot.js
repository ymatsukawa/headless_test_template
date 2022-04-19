const options = (filename) => {
  return {
    path: `./screenshot/${filename}.png`,
    type: 'png',
    encoding: 'binary',
  }
}

module.exports = {
  options: options
}