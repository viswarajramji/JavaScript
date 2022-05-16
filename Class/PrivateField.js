class MyTask{
    #taskName
    constructor(taskName){
        this.#taskName=taskName;
    }

    getTaskName(){
        return this.#taskName;
    }
}

var task=new MyTask("test");
console.log(task.getTaskName());
console.log(task.taskName); // undefined