module.exports.carOrCat = /ca(t|r)/;

module.exports.popOrProp = /pr?op/

module.exports.ferretOrFerryOrFerrari = /ferr(et|y|ari)/;

module.exports.isIous = /\b\w+(ious)\b/;

module.exports.badPontuation = /\s(\.|:|;|,)/;

module.exports.isMoreThanSixLetters = /^\w{6,}$/;

module.exports.noLetterE = /\b[^\We]+\b/i;