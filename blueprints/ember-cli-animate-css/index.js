var path = require("path");

module.exports = {
  normalizeEntityName: function() {
  },

  afterInstall: function(options) {
    return this.addBowerPackageToProject("animate.css", "~3.2.0");
  }
};
