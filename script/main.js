// Generated by CoffeeScript 1.4.0
(function() {
  var game, gfx, keys, player;

  gfx = {
    tileW: 24,
    tileH: 24,
    init: function() {
      var canvas;
      canvas = document.querySelector("#game");
      this.ctx = canvas != null ? typeof canvas.getContext === "function" ? canvas.getContext("2d") : void 0 : void 0;
      if (!this.ctx) {
        return false;
      }
      this.w = canvas.width;
      this.h = canvas.height;
      return true;
    },
    clear: function() {
      return this.ctx.clearRect(0, 0, this.w, this.h);
    },
    load: function(onload) {
      this.sprites = new Image();
      this.sprites.src = "resources/sprites.png";
      return this.sprites.onload = function() {
        return onload();
      };
    },
    drawSprite: function(col, row, x, y, w, h, scale) {
      if (w == null) {
        w = 1;
      }
      if (h == null) {
        h = 1;
      }
      if (scale == null) {
        scale = 1;
      }
      w *= this.tileW;
      h *= this.tileH;
      return this.ctx.drawImage(this.sprites, col * w, row * h, w, h, x, y, w * scale, h * scale);
    }
  };

  keys = {
    up: false,
    down: false,
    left: false,
    right: false,
    space: false,
    reset: function() {
      return this.up = this.down = this.left = this.right = this.space = false;
    },
    trigger: function(keyCode, isDown) {
      switch (keyCode) {
        case 37:
          return this.left = isDown;
        case 39:
          return this.right = isDown;
        case 38:
          return this.up = isDown;
        case 40:
          return this.down = isDown;
        case 32:
          if (isDown) {
            console.log("FIRE AWAY!");
          }
          return this.space = isDown;
      }
    }
  };

  document.addEventListener("keydown", function(e) {
    return keys.trigger(e.keyCode, true);
  }, false);

  document.addEventListener("keyup", function(e) {
    return keys.trigger(e.keyCode, false);
  }, false);

  player = {
    x: gfx.tileW * 3,
    y: gfx.tileH * 5,
    speed: 4,
    update: function() {
      if (keys.left) {
        this.x -= this.speed;
      }
      if (keys.right) {
        this.x += this.speed;
      }
      if (keys.down) {
        this.y += this.speed;
      }
      if (keys.up) {
        return this.y -= this.speed;
      }
    },
    render: function(gfx) {
      return gfx.drawSprite(0, 0, this.x, this.y);
    }
  };

  game = {
    init: function() {
      if (!gfx.init()) {
        alert("Could not set up game canvas!");
        return;
      }
      gfx.clear();
      return gfx.load(function() {
        var c, drawANinja, leftNinjas, level, level1, makeANinja, makeLevel, n, ninjas, rand;
        c = gfx.ctx;
        rand = function(max) {
          return Math.floor(Math.random() * max);
        };
        makeANinja = function() {
          return {
            x: rand(gfx.w),
            y: rand(gfx.h)
          };
        };
        drawANinja = function(n) {
          return gfx.drawSprite(0, 1, n.x, n.y);
        };
        ninjas = (function() {
          var _i, _results;
          _results = [];
          for (_i = 0; _i < 20; _i++) {
            _results.push(makeANinja());
          }
          return _results;
        })();
        leftNinjas = (function() {
          var _i, _len, _results;
          _results = [];
          for (_i = 0, _len = ninjas.length; _i < _len; _i++) {
            n = ninjas[_i];
            if (n.x < gfx.w / 2) {
              _results.push(n);
            }
          }
          return _results;
        })();
        level1 = ".............\n...........*.\n....@#@@@@#@.\n.....#....#..\n.....#....#..\n..*..#...@@@.\n..@@@@@...#..\n...#......#..\n...#......#..\n...#......#..\n.OOOOOOOOOOOO";
        makeLevel = function(ascii) {
          var asciiMap, col, row, tiles, _i, _len, _results;
          tiles = {
            "@": [4, 1],
            "O": [4, 0],
            "*": [5, 1],
            "#": [5, 0]
          };
          asciiMap = (function() {
            var _i, _len, _ref, _results;
            _ref = ascii.split("\n");
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              row = _ref[_i];
              _results.push(row.split(""));
            }
            return _results;
          })();
