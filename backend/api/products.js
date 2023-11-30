import { clientPromise } from '../lib/mongodb';

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db('hozhyy');
    const collection = db.collection('products');

if (req.method === 'GET') {
    const products = await collection.find({}).toArray();
    res.status(200).json(products);
} else {
    res.status(405).json({ message: 'Method Not Allowed' });
}
}