module.exports = function replaceQuotationMarks(text) {

    const pattern = /(^|\W)'|'(\W|$)/g;

    return text.replace(pattern, '$1"$2');
};