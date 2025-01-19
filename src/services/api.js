// import { createClient } from '@sanity/client';
// import axios from 'axios';
// import dotenv from 'dotenv';
// import { fileURLToPath } from 'url';
// import path from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// dotenv.config({ path: path.resolve(__dirname, '../../.env') });

// const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
//   token: process.env.SANITY_API_TOKEN,
//   apiVersion: '2025-01-15',
//   useCdn: false,
// });

// async function uploadImageToSanity(imageUrl) {
//   try {
//     console.log(`Uploading Image : ${imageUrl}`);
//     const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
//     const buffer = Buffer.from(response.data);
//     const asset = await client.assets.upload('image', buffer, {
//       filename: imageUrl.split('/').pop(),
//     });
//     console.log(`Image Uploaded Successfully : ${asset._id}`);
//     return asset._id;
//   } 
//   catch (error) {
//     console.error('Failed to Upload Image:', imageUrl, error);
//     return null;
//   }
// }

// export async function importData() {
//   try {
//     console.log('Fetching Product Data From API ...');

//     const response = await axios.get("https://next-ecommerce-template-4.vercel.app/api/product")
//     const products = response.data.products;

//     for (const item of products) {
//       console.log(`Processing Item: ${item.name}`);

//       let imageRef = null;
//       if (item.imagePath) {
//         imageRef = await uploadImageToSanity(item.imagePath);
//       }

//       const sanityItem = {
//         _type: 'product',
//         name: item.name,
//         category: item.category || null,
//         price: item.price,
//         description: item.description || '',
//         discountPercentage: item.discountPercentage || 0,
//         stockLevel: item.stockLevel || 0,
//         isFeaturedProduct: item.isFeaturedProduct,
//         image: imageRef
//           ? {
//               _type: 'image',
//               asset: {
//                 _type: 'reference',
//                 _ref: imageRef,
//               },
//             }
//           : undefined,

          
//       };

//       console.log(`Uploading ${sanityItem.category} - ${sanityItem.name} to Sanity !`);
//       const result = await client.createOrReplace(sanityItem);
//       console.log(`Uploaded Successfully: ${result._id}`);
//       console.log("----------------------------------------------------------")
//       console.log("\n\n")

//       // // description: product.description,
//       // rating: product.rating?.rate || 0,
//       // // ratingCount: product.rating?.count || 0, // bhai simple dekh lain
//       // reviews: product.rating?.count || 0,

//       // await client.createOrReplace(sanityItem)
//     }

//     console.log('Data Import Completed Successfully !');
//   } catch (error) {
//     console.error('Error Importing Data : ', error);

    
//   }
// }

// importData();





// import { createClient } from "@sanity/client";
// import fetch from "node-fetch";

// // Sanity Client
// const client = createClient({
//  projectId: "ng2t0pnh", // Replace with your actual project ID
//  dataset: "production", // Default dataset
//  useCdn: false,
//  apiVersion: "2025-01-17", //replace with your
//  token: "sk32R7QBLdnzLjOgf2gtngkXjS1w2zMXH9Bsku7MXpTZdIi1DRCQze3hHb8hNrebrZskQvyQzYKFEygw6aUNpJ1YbPOtm62KThnb5DQFJt7fhyKqVWWV2c6ogaZhrV5qQL8nXN31m45Jj6OD0vjYjca7hqtsjBhXDILmytFBH7TAYq6sJMkR", //replace with your
// });

// // Function to upload image to Sanity
// async function uploadImageToSanity(imageUrl) {
//  try {
//  // Fetch image from the URL
//  const imageResponse = await fetch(imageUrl);
//  if (!imageResponse.ok) {
//  throw new Error(`Failed to fetch image: ${imageUrl}`);
//  }
//  const imageBuffer = await imageResponse.buffer();

//  // Upload image to Sanity
//  const imageAsset = await client.assets.upload("image", imageBuffer, {
//  filename: `product-image-${Date.now()}.jpg`, // Fixed template string syntax
//  });

//  return imageAsset._id; // Return image asset reference
//  } catch (error) {
//  console.error("Error uploading image:", error);
//  return null; // Return null if image upload fails
//  }
// }

// // Function to import data
// const importData = async () => {
//  try {
//  const apiFetch = await fetch("https://next-ecommerce-template-4.vercel.app/api/product");
 
//  if (!apiFetch.ok) {
//  throw new Error("Failed to fetch products from API.");
//  }
//  const products = await apiFetch.json();

//  for (const product of products) {
//  // Upload the image and get the asset reference
//  const imageRef = await uploadImageToSanity(product.image);

//  if (imageRef) {
//  const document = {
//  _id: `product-${product.id}`, // Unique _id generated from product id
//  _type: "product",
//  title: product.title, // Title field mapped
//  price: product.price,
//  description: product.description,
//  category: product.category,
//  image: {
//  _type: "image",
//  asset: {
//  _ref: imageRef, // Image asset reference from Sanity
//  _type: "reference",
//  },
//  },
//  rating: {
//  rate: product.rating.rate,
//  count: product.rating.count,
//  },
//  };

//  // Log each product being processed
//  console.log(`Processing product: ${product.title}`);

//  // Create or replace document in Sanity
//  await client.createOrReplace(document);
//  console.log(`Product "${product.title}" successfully imported.`);
//  } else {
//  console.error(`Failed to upload image for product: ${product.title}`);
//  }
//  }

//  console.log("All products successfully imported!");
//  } catch (error) {
//  console.error("Error importing data:", error);
//  }
// };

// // Call the data import function
// importData();