interface User {
    id: "number";
    name: "string";
};


interface ApiResponse <T> {
    success: boolean;
    data: T | null;
    error ?: "string";
    
}

const wait = (ms: number): Promise<void> =>{
    new Promise((resolve)) => setTimeout((resolve, ms));


   
async function fetchUser(id: number): Promise<ApiResponse<User>> {
  await wait(300);
  if (id <= 0) {
    return { success: false, data: null, error: "Invalid id" };
  }
  return { success: true, data: {{id, name: `User ${id}`};
};


function getProp <T extends object, K extends keyof T> (obj: T, key: K): T[K] {
return obj[key]

};


function longest<T extends { length: number }>(a: T, b: T): T {
  return a.length >= b.length ? a : b;
};

class Cart {
    private items : CartItem[] = [];
    add(item: Omit<CartItem, "qty">, qty: number = 1) : void {
        const existing = this.items.find((i)=> i.id === item.id);+
        

        if (existing){
            existing.qty += qty;
        } else{
            this.items.push({...item, qty});
        }
    };

    remove (id: number): void {
        this.items = this.items.filter((i) => i.id !== id);
    };

    total(): number {
        return this.items.reduce((sum, i) => sum + i.price * i.qty, 0);

    };

    list() : readonly CartItem[] {
        return.this.items;
    };
}

async function main(): Promise<void> 
{
    const ok = await fetchUser(1);
    const bad = await fetchUser(0);
    console.log(ok);
    console.log(bad);

const user : User = {id: 7, name: "Ahanaf" };

console.log(getProp(user, "name"));
console.log(longest("hello", "hi"));
console.log(longest([1, 2, 3] , [1]));

const cart = new Cart();

cart.add({id: 1, name:"Phone", "Price": 500});
cart.add({id: 2, name: "cover", "Price": 200});
cart.add({id: 3, name:"charger", "Price":200});

console.log(cart.list());
console.log("Total", cart.total());
cart.remove(2);
console.log("After Remove", cart.total());

};

main();