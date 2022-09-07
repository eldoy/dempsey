module.exports = async function ($) {
  $.page.title = 'Jack Dempsey Championship Fighting'

  return $.tools.read(process.cwd() + '/app/pages/index.html')
}
