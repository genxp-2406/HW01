let mBgnd = "#dbcba7";

let A = 100;
let B = 10;

let pWidth = 5 * A + 6 * B;
let pHeight = 3 * A + 4 * B;

function setup() {
  createCanvas(pWidth + 40, pHeight + 40);
}

function draw() {
  background(255);

  translate(20, 20);
  stroke(0);
  fill(mBgnd);
  rect(0, 0, pWidth, pHeight);

  fill(0);

  // first row
  translate(B, B);
  rect(0, 0, A, A);

  let nudge = 4;
  translate(A + B, 0);
  quad(
    0 - nudge, 0 + nudge,
    A - nudge, 0 - nudge,
    A + nudge, A - nudge,
    0 + nudge, A + nudge
  );

  translate(A + B, 0);
  rect(0, 0, 3 * A + 2 * B, A);

  // second row
  translate(-2 * (A + B), A + B);
  rect(0, 0, 2 * A + B, A);
 
  translate(2 * (A + B), 0);
  quad(
    0 - nudge, 0 + nudge,
    A - nudge, 0 - nudge,
    A + nudge, A - nudge,
    0 + nudge, A + nudge
  );

  translate(A + B, 0);
  rect(0, 0, 2 * A + B, A);

  // third row
  translate(-3 * (A + B), A + B);
  rect(0, 0, 3 * A + 2 * B, A);

  translate(3 * (A + B), 0);
  quad(
    0 - nudge, 0 + nudge,
    A - nudge, 0 - nudge,
    A + nudge, A - nudge,
    0 + nudge, A + nudge
  );

  translate(A + B, 0);
  rect(0, 0, A, A);
}
