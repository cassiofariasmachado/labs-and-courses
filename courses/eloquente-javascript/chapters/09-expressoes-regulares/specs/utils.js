module.exports.verifyIfMatchPattern = (regex, text) => {
    expect(text).toMatch(regex);
};

module.exports.verifyIfNotMatchPattern = (regex, text) => {
    expect(text).not.toMatch(regex);
};