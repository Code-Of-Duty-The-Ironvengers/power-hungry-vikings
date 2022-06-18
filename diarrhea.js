// We keep, in this file, all the necessary responsabilities for  drawing, moving and everything related to this class

class Diarrhea {
  // this constructor is the most complex yet, because by default diarrhea does not know where it should start, however, its position is going to be dynamic, so we just set values to 0 and hope that methods (followGeoffresAss) will be the ones that make sure that update continuosly top and left values
  constructor() {
    this.left = 0;
    this.top = 0;
    this.width = 0;
    // this property is very important because it is the one that tells the rest of the instance wether the diarrhea should grow (its width) or be moved
    this.isAttached = true;
  }

  followGeoffreysAss(left, top) {
    // if it is no longer attached to the ass of geoffrey, our chinless viking, it should no longer update its location. from this point on it should be independently moved
    if (!this.isAttached) {
      return;
    }

    // seeing that at this point  we are sure that the instance is still attached to the ass, we continously draw the diarrhea according to those coordinates and also make it get bigger
    this.top = top;
    this.left = left;
    this.width += 2;
  }

  // this method is probably the most abstract one. we get information on wether it should still be attached to geoffrey, our chinless viking,'s ass. if it is not attached we signal the instance and let it handle that case (example: see `followGeoffreysAss` method)
  drawLiquidPoop(isStillAttachedToGeoffrey, functionFromParent) {
    // whenever `isStillAttachedToGeoffrey` becomes false this method warns everything else that it should change that property
    if (!isStillAttachedToGeoffrey) {
      this.isAttached = false;
    }
    rect(this.left, this.top, this.width, 10);

    // given that it is no longer attached, it makes it move on its own to the right. remember: in P5, + on the x axis moves it to the right and + on the y axis moves it down
    if (!this.isAttached) {
      this.left += 2;
    }

    // in this case we check wether the instance has reached off canvas and whether the argument `functionFromParent` is, not only defined, but a function. and if both cases are true, it calls that function.
    // this approach is called: calling a `callback` function
    if (this.isPoopieOffCanvas() && typeof functionFromParent === "function") {
      functionFromParent();
    }
  }

  // helper method that calculates whether it is drawn totally off canvas
  isPoopieOffCanvas() {
    return this.left >= CANVAS_WIDTH;
  }
}
