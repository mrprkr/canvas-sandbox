


// var c = document.getElementById("mycanvas");
// var ctx = c.getContext("2d");
// ctx.font = "30px Roboto";
// ctx.fillText("Hello World this is text in canvas",10,50);


/* GLOBAL */
  window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  var global_width = window.innerWidth,
      global_height = window.innerHeight,
      ratio = 1,
      canvas = document.getElementById('mycanvas'),
      ctx = canvas.getContext('2d');

  /* SETUP */
  function setup(){
    if (ctx){
      init();
      requestAnimationFrame(update);
      window.addEventListener('resize', rescale);
      rescale();
    }
  }

  function rescale(){
    global_width = window.innerWidth;
    global_height = window.innerHeight;
    if(ctx.webkitBackingStorePixelRatio < 2) ratio = window.devicePixelRatio || 1;
    canvas.setAttribute('width', global_width*ratio);
    canvas.setAttribute('height', global_height*ratio);
    draw();
  }

  /* INIT */
  function init(){
    draw();
    rescale();
  }

  /* DRAW */
  function drawExample(){
    ctx.lineWidth = 6;
    ctx.strokeStyle = "#333";
    ctx.beginPath();
    ctx.moveTo((global_width/2)-200, (global_height/2)-200);
    ctx.bezierCurveTo(150, 100, 350, 100, 400, 250);
    ctx.stroke();
  }
  
  // simple text drawing
  function helloWorld(){
  	ctx.font ="70px Roboto";
  	ctx.fillText("Hello World, I'm retina text", 50, 100);
  }

  function draw(){
    ctx.save();
    ctx.scale(ratio, ratio);
    // Execute your draw specific functions between the lines to enable high-dpi drawing
    // ---------------------------------------------------------------------------------
    // drawExample();
    helloWorld();
    // ---------------------------------------------------------------------------------
    ctx.restore();
  }

  /* UPDATE */
  function update(){ 
    requestAnimationFrame(update);
  }


  init();