"use strict";
// 1. Basic types
const username = "Ahanaf";
const skills = ["React", "Next.js"];
const point = [10, 20];
// 3. Function
const createUser = (id, name, email) => {
    return { id, name, email };
};
// 4. Generic
const first = (items) => items[0];
// 5. Type narrowing
const printLength = (value) => {
    if (typeof value === "string") {
        console.log("string length:", value.length);
    }
    else {
        console.log("array items:", value.length);
    }
};
// 7. Class
class Product {
    name;
    price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getPrice() {
        return this.price;
    }
}
// 8. Async
const fetchRole = async (id) => {
    return id === 1 ? "admin" : "viewer";
};
const main = async () => {
    const users = [
        createUser(1, "Ahanaf", "ahanaf@example.com"),
        createUser(2, "Rafi"),
    ];
    const res = { data: users[0], error: null };
    const preview = { id: 1, name: "Ahanaf" };
    const update = { name: "New Name" };
    const roles = { admin: ["all"], editor: ["write"], viewer: ["read"] };
    const product = new Product("Laptop", 50000);
    console.log("Username:", username, skills, point);
    console.log("Names:", users.map((u) => u.name));
    console.log("First user:", first(users));
    console.log("Response:", res.data.name);
    console.log("Preview:", preview, "Update:", update);
    console.log("Roles:", roles.admin);
    console.log("Price:", product.getPrice());
    console.log("Role of user 1:", await fetchRole(1));
    printLength("hello");
    printLength(["a", "b", "c"]);
};
main();
