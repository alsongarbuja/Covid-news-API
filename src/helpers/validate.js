
const sanitize = (text) => text.replaceAll('\n', '').replace(/\s+/g, " ").trim();
const isText = (text) => text[0]+text[1]+text[2]+text[3]==='<img'?false:true

module.exports = { sanitize, isText };