let curves; 
    
    function setup() {
      createCanvas(400, 400);
      background(255);
      angleMode(DEGREES);
      curves = int(random(3, 9));
      stroke(255,145,85);
      rectMode(CENTER);
      noFill()
    }
    
    function draw() {
      background(255,5);
      translate(width / 2, height / 2);
      rotate(frameCount / 100);
      let x = sin(frameCount / 10) * 200;
      for (j = 0; j < curves; j++){	
        push();
        rotate(360 / curves * j);
        translate(0, curves * 20);
        for(i = 0; i < curves; i++){
          push();
          rotate((360 / curves) * i);
          rotate(-x);
          rect(0, curves * 20, curves * 2, curves * 2);
          pop()
        }
        pop()
      }
    }