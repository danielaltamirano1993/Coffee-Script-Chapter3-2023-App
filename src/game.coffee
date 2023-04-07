game =
  init: ->
    if not gfx.init()
      alert "Could not set up game canvas!" 
      return # abort the game

    # Ready to play!
    gfx.clear()
    
    gfx.load ->
      c = gfx.ctx

      # gfx.drawSprite(0, 0, 50, 50)
      # gfx.drawSprite(0, 0, 74, 50, 1, 1, 2)

      rand = (max) -> Math.floor Math.random() * max

      makeANinja = () ->
        x: rand gfx.w
        y: rand gfx.h
      
      drawANinja = (n) -> gfx.drawSprite 0, 1, n.x, n.y
      
      ninjas = (makeANinja() for [0...20])
      
      # drawANinja n for n in ninjas
      
      leftNinjas = (n for n in ninjas when n.x < gfx.w / 2)
      # drawANinja n for n in leftNinjas
      
      level1 = """
        .............
        ...........*.
        ....@#@@@@#@.
        .....#....#..
        .....#....#..
        ..*..#...@@@.
        ..@@@@@...#..
        ...#......#..
        ...#......#..
        ...#......#..
        .OOOOOOOOOOOO
      """
      
