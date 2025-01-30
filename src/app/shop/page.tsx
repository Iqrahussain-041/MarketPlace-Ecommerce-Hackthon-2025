"use client";
import React, { useState, useEffect, useCallback } from "react";
import FeatureSection from "../FeatureSection";
import Link from "next/link";
import Image from "next/image";
import { sanityClient } from "@/sanity/lib/sanity";
const categories = ["All", "Sofa", "Table", "Chair", "Lamp"];


interface Product {
  id: string;
  tags: string[];
  name: string;
  description: string;
  price: number;
  image: string;
  slug: string;
}

interface SanityProduct {
  _id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  productImage: string | null;
}

const ITEMS_PER_PAGE = 8; // Display 6 products per page

function ProductSection() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
 

 
  const [currentPage, setCurrentPage] = useState<number>(1); // Current page
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");
  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"] {
        _id,
        title,
        "slug": slug.current,
        description,
        price,
        "productImage": productImage.asset->url,
      }`;

      try {
        const sanityProducts: SanityProduct[] = await sanityClient.fetch(query);
        const formattedProducts = sanityProducts.map((product) => ({
          id: product._id,
          name: product.title || "Unnamed Product",
          slug: product.slug,
          description: product.description
            ? product.description.split(" ").slice(0, 20).join(" ") + "..."
            : "No description available",
          price: product.price,
          image: product.productImage || "/placeholder.jpg",
          tags: [] // Add an empty array for tags or fetch actual tags if available
        }));
        setProducts(formattedProducts);
        setFilteredProducts(formattedProducts); // Initialize with all products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  

  const filterAndSortProducts = useCallback(() => {
    let filtered = [...products];

    if (selectedCategory !== "All") {
      filtered = filtered.filter((product) =>
        product.tags.includes(selectedCategory.toLowerCase())
      );
    }

    switch (sortOrder) {
      case "price-low-to-high":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high-to-low":
        filtered.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
  }, [products, selectedCategory, sortOrder]);
  // Calculate pagination data
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
 
  useEffect(() => {
    filterAndSortProducts();
  }, [filterAndSortProducts]);
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-6">
        <header
          className="relative bg-cover bg-center h-64"
          style={{ backgroundImage: "url('/shop.jpg')" }}
        >
          <div className="absolute inset-0 bg-opacity-50"></div>
        </header>
      {/* Filter Bar */}
      <div className="bg-[#F9F1E7] px-4 md:px-8 py-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <span className="font-medium">Category:</span>
                <select
                  className="bg-transparent border border-[#9F9F9F] rounded px-4 py-1 focus:border-[#B88E2F]"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[#9F9F9F]">Sort by</span>
              <select
                className="bg-transparent border border-[#9F9F9F] rounded px-4 py-1 focus:border-[#B88E2F]"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="default">Default</option>
                <option value="price-low-to-high">Price: Low to High</option>
                <option value="price-high-to-low">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Link key={product.id} href={`/product/${product.slug}`}>
              <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="w-full h-60 object-cover mb-4 rounded-lg transition-all"
                />
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <p className="text-lg font-bold mb-4">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-8">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-yellow-500 text-white rounded-md mr-2 disabled:opacity-50 hover:bg-yellow-600"
          >
            Previous
          </button>
          <span className="px-4 py-2">{`Page ${currentPage} of ${totalPages}`}</span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-yellow-500 text-white rounded-md ml-2 disabled:opacity-50 hover:bg-yellow-600"
          >
            Next
          </button>
        </div>
      </div>

      <FeatureSection />
    </div>
  );
}

export default ProductSection;
