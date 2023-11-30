
const API_URL = '/api/products';

export const fetchProducts = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};


/* import clientPromise from "../../../backend/lib/mongodb";

export async function getServerSideProps(context) {
  const client = await clientPromise;
  const isConnected = await client.isConnected();
  const db = client.db("hozhyy");
  const collection = db.collection("products");
  const products = await collection.find({}).toArray();

  return {
    props: {
      isConnected,
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}; */