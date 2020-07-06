class Food{
    constructor(){
        milk = loadImage("milk.png");
        this.lastFed = null;
        this.foodStock = null;
    }
    getFoodStock(){
        getFoodStock = database.ref("/");
        getFoodStock.on('value',(data)=>{
            this.foodStock = data.val().Food;
            this.lastFed = data.val().FeedTime;
        })
    }
    updateFoodStock(quantity){
        database.ref('/').update({
            Food : quantity,
            FeedTime:hour()
        })        
    }
   display(){ 
       var x = 600;
       var y = 200;
        for(var i = 1; i <= foodObj.foodStock;i++){
        image(milk,x,y,100,100);
         x=x+50;
         if(i%10 === 0){
             x = 600;
             y = y+80;
         }
    }
    }

    bedroom(){
        background(bedroomImg,550,500);
    }

    garden(){
        background(gardenImg,550,500);
    }   

    washroom(){
        background(washroomImg,550,500);
    }
}