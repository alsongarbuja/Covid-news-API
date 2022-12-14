
export const sanitize = (text) => text.replace('\n', '').replace(/\s+/g, " ").trim();
export const isText = (text) => text[0]+text[1]+text[2]+text[3]==='<img'?false:true

// module.exports = { sanitize, isText };