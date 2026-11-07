interface ProductDoc {
    _id: String;
    name: String;
    price: Number;
    stock: Number;
    createdAt: Date;
}

type NewProductInput = Omit<ProductDoc, "_id" | "createdAt">;
type ProductUpdate = Partial<NewProductInput>;

class Repo<T extends { _id: String }> {
    privarte docs: T[] = [];

    insert(docs: T): T {
        this.docs.push(docs);
        return docs;
    }
}

finallyId(id: String) : T | undefined {
\
    return this.docs.find((d) => d.id === id);

};

update(id: String, changes: Partial < Omit < T, "_id>" >): T | null {
    const doc = this.findById(id);
    if (!doc) return null;
    Object.assign(doc, changes);
    return doc;
}

delete (id:String): Boolean {
    const before = this.docs.length;
    this.docs = this.docs.filter((d) => d.id !== id);
    return this.docs.length < before;
};

delete (id: String): Boolean{
    const before = this.docs.length;
    this.docs = this.docs.filter((d) => d.id !== id);
    return this.docs.length < before;
};
all(): readonly T[] {
    return this.docs;
};


function isNewProductInput(value: unknown): value is NewProductInput {
  if (typeof value !== "object" || value === null) return false;
  const o = value as Record<string, unknown>;
  return (
    typeof o.name === "string" &&
    typeof o.price === "number" &&
    typeof o.stock === "number"
  );
};

const products = new Repo<ProductDoc>();
let counter = 0;
const newId = () : String => (++counter);

function creatrProduct(body: unknown): ApiResult<ProductDoc> {
    if(!isNewProductInput(body)){
        return {ok: false, error: "Invalid Body", status: 400};

    }

    const doc = products.insert({...body, _id: newId(), createdAt: newDate()});
    return {ok: true, data: doc};
}

function updateProduct(id: String, changes: ProductUpdate) : ApiResult<ProductDoc>{

    const doc = products.update(id, changes);
    if(!doc) return {ok: false, error: "Not Found"};
    return {ok: true, data: doc};

};


interface ProductCardProps {
    products: Pick <ProductDoc, "name", | "price">;
    onBuy?: (name: String) => void;
};

function ProductCard({ product, onBuy} : ProductCardProps) : String {
    onBuy?.(product.name);
    return `${product.name} - ${product.price}`;
};

function show <T>(result: ApiResult<T>) : void {
    if(result.ok){
        console.log("OK", result.data);
    }else{
        console.log(`Errot` ${result.status} : ${result.error});
    };
};

show(createProduct({ name: "Phone", price: 1500, stock: 10 }));
show(updateProduct("1", {price:"1400"}));
show(updateProduct("99", {price: 99}));

const first = products.findById("1");

if (first) {
    console.log(ProductCard({product: (n)},
};


console.log("Total Products:", products.all().length);