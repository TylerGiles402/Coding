var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

while (slaying){
    if (youHit === 1){
      totalDamage += damageThisRound;
          if (totalDamage >= 10){
            slaying = false;
        } else {
            youHit = Math.floor(Math.random() * 2);
            }
  } else {
      }
    slaying = false;
    }