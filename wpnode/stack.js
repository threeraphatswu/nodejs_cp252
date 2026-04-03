class StackArray {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      return this.items.pop();
    }
  
    peek() {
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  
    clear() {
      this.items = [];
    }
  
    toArray() {
      return this.items;
    }
  
    toString() {
      return this.items.toString();
    }
  
    getMax() {
      console.time("getMax settime");
      
      let elementMax = this.items[0]; 
      for (let i = 0; i < this.size(); i++) {
         if (this.items[i] > elementMax){
          elementMax == this.items[i];
         }
      }
      console.timeEnd("getMax settime")
      return elementMax;
    }
  
    
    getMin() {
      let elementMin = this.items[0]; 
      for (let j = 0; j < this.size(); j++) {
         if (this.items[j] < elementMin){
          elementMin == this.items[j];
         }
      }
      return elementMin;
    }
  }
  
  module.exports  = StackArray;