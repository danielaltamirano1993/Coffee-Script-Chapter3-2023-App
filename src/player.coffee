player =
  x: gfx.tileW * 3
    @x -= @speed if keys.left
    @x += @speed if keys.right
