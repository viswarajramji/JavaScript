class MyTask{
    #taskName

    constructor(taskName){
        this.#taskName=this.#validateTask(taskName);
    }

    getName(){
        return this.#taskName;
    }

    #validateTask(taskName){
        if(taskName ==null){
            throw new Error("task Name cannot be null")
        }
        return taskName;
    }
}

var myTask=new MyTask("test");
console.log(myTask.getName());