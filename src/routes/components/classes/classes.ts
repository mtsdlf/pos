export class Product {  
    id: number;
    barcode: number;  
    name: string;  
    price: number;

    constructor(id: number, barcode: number, name: string, price: number) {  
      this.id = id; 
      this.barcode = barcode;  
      this.name = name;  
      this.price = price
    }  
  }

export class Customer {  
    id: number;
    name: string;  

    constructor(id: number, name: string) {  
      this.id = id; 
      this.name = name;  
    }  
  }