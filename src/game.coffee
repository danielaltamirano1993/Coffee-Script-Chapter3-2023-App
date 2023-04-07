game =
  init: ->
    if not gfx.init()
      alert "Could not set up game canvas!" 
      return # abort the game

