class Items{
    static  counter=0;
    constructor(itemsName){
        this.itemsName=itemsName;
        Items.counter++;
    }

    static getItemsCount(){
        return Items.counter;
    }
}

var item1=new Items("test1");
var item2=new Items("test2");
console.log(Items.getItemsCount())