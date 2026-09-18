$(function () {
  
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      
      setInterval(main, 1000 / frameRate);
    }

    
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(
      -50,
      canvas.height - 10,
      canvas.width + 100,
      200,
      "rgb(118, 0, 233)",
    ); 
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    toggleGrid();

    createPlatform(200, 650, 200, 20, "blue");
    createPlatform(500, 550, 150, 20, "green");
    createPlatform(800, 450, 200, 20, "purple");
    createPlatform(300, 400, 100, 20, "orange");
    createPlatform(600, 300, 150, 20, "red");
    createPlatform(1000, 200, 200, 20, "yellow");
    createPlatform(100, 200, 100, 20, "pink");

    // TODO 3 - Create Collectables
    createCollectable("diamond", 250, 600);
    createCollectable("steve", 900, 400);
    createCollectable("database", 650, 250);

    // TODO 4 - Create Cannons
    createCannon("left", 400, 1000);
    createCannon("right", 500, 1500);
    createCannon("top", 800, 2000);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
