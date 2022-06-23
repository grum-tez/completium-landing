'use strict';

// Original: https://github.com/dracula/visual-studio-code
// Converted automatically using ./tools/themeFromVsCode
var theme = {
  plain: {
    color: "#F8F8F2",
    backgroundColor: "#242526",
    borderRadius: "0px",
  },
  styles: [{
    types: ["prolog", "constant"],
    style: {
      color: "rgb(189, 147, 249)",
      fontStyle: "italic"
    }
  }, {
    types: ["inserted", "function"],
    style: {
      color: "rgb(80, 250, 123)"
    }
  }, {
    types: ["deleted", "error"],
    style: {
      color: "rgb(255, 85, 85)"
    }
  }, {
    types: ["changed"],
    style: {
      color: "rgb(255, 184, 108)"
    }
  }, {
    types: ["punctuation", "symbol"],
    style: {
      color: "rgb(248, 248, 242)"
    }
  }, {
    types: ["string", "char", "tag", "selector"],
    style: {
      color: "rgb(255, 121, 198)"
    }
  }, {
    types: ["keyword", "variable"],
    style: {
      color: "rgb(189, 147, 249)",
      fontStyle: "italic"
    }
  }, {
    types: ["comment"],
    style: {
      color: "rgb(98, 114, 164)"
    }
  }, {
    types: ["archetype", "function"],
    style: {
      color: "#2FCAC3"
    }
  }, {
    types: ["entry", "declaration", "verif"],
    style: {
      color: "rgb(233, 72, 21)"
    }
  }, {
    types: ["section"],
    style: {
      color: "rgb(255, 184, 108)"
    }
  }, {
    types: ["type"],
    style: {
      color: "rgb(241, 250, 140)"
    }
  }, {
    types: ["control", "decl"],
    style: {
      color: "rgb(189, 147, 249)"
    }
  }, {
    types: ["boolean", "builtin", "logic", "asset", "access", "crypto", "arith"],
    style: {
      color: "rgb(68, 134, 255)"
    }
  }, {
    types: ["transfer","fail"],
    style: {
      color: "rgb(255, 85, 85)"
    }
  }, {
    types: ["instr", "expr"],
    style: {
      color: "rgb(248, 248, 242)",
      fontStyle: "italic"
    }
  }]
};

module.exports = theme;
