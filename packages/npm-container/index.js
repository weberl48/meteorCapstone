Meteor.npmRequire = function(tunajs) {
  var module = Npm.require(moduleName);
  return module;
};

Meteor.require = function(moduleName) {
  console.warn('Meteor.require is deprecated. Please use Meteor.npmRequire instead!');
  return Meteor.npmRequire(moduleName);
};
