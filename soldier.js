 const soldier = {
    firstName : 'John',
    health : 10,
    weapon : {
        name : 'Ak -47',
        ammo : 30,
    },
    supplies : 3,
    fire : function (){
        this.weapon.ammo -- ;
        return console.log ('бах-бах')
    },
    recharge : function (){
        if(this.supplies === 0){
            return console.log('не осталось припасов')
        }
        this.weapon.ammo = 30 ;
        this.supplies --;
        return console.log ('перезарядка...')
    },
    hurt : function (){
        this.health --;
        if (this.health <= 0) {
            return console.log ('Ты проиграл')
    }
 },
}
 soldier.hurt()
 console.log (soldier.health);

 