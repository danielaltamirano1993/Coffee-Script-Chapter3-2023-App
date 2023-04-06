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
