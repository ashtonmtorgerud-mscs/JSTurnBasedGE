function Character(iName, iHP, iStr, iMag, iEnd, iAgi, iLuc) {
    this.name = iName;
    this.hitPoints = iHP;
    this.maxHitPoints = iHP;
    this.str = iStr;
    this.mag = iMag;
    this.end = iEnd;
    this.agi = iAgi;
    this.luc = iLuc;

    function TakeDamage(damage){
        damage -= this.end;
        if (damage < 1){
            damage = 1;
        }
        this.hitPoints -= damage;
        console.log(this.hitPoints);
    }

}

let Orobas = new Character("Orobas", 100, 20, 8, 24, 7, 12);

Orobas.TakeDamage(20);