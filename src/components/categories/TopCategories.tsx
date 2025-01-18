'use client';
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client"; 
interface Category {
  title: string;
  imageUrl: string;
  products?: number; 
}

const query = `*[_type == "categories"] {
  title,
  "imageUrl": image.asset->url,
  products
}`;

const TopCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    
    client.fetch(query).then((data: Category[]) => setCategories(data));
  }, []);

  return (
    <div className="lg:mx-20 sm:mx-10 mx-3 mb-10 lg:mb-32">
      <div>
        <h2 className="text-[#272343] lg:text-[32px] text-2xl md:text-left text-center tracking-normal font-semibold">
          Top Categories
        </h2>
        <div className="flex flex-wrap justify-center sm:flex-nowrap gap-5 mt-5">
          {categories.map((category) => (
            <div key={category.title} className="relative">
              <div>
                <img
                  src={category.imageUrl}
                  alt={category.title}
                  className="rounded-xl"
                />
              </div>
              <div className="absolute bottom-0 w-full rounded-b-xl py-2 lg:py-3 pl-4 text-white bg-black/70">
                <h5 className="lg:text-[18px] text-sm">{category.title}</h5>
                <p className="text-white/70 lg:text-sm text-xs pt-1">
                  {category.products ? `${category.products} Products` : "Products"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
