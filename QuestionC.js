//Question C -- countWays(n): A child is climb­ing up a stair­case with n steps, and can hop either 1 step, 2 steps, or 3 steps at a time. Imple­ment a method to count how many pos­si­ble ways the child can jump up the stairs. (Order matters.) This can be solved iteratively or recursively, either is fine.

function countWays(n){
  if (n < 0){
    return 0;
  } else if (n === 0) {
    return 0;
  } else {
    return countWays(n - 1) + countWays(n - 2) + countWays(n - 3);
  }
}

//countWays(3)
