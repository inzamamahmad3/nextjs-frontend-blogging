import Link from "next/link";
import React from "react";
import { ICategory } from "../types";
import { useRouter } from "next/router";

interface IPropType {
  categories: ICategory[];
}
const Tabs = ({ categories }: IPropType) => {
  const router = useRouter();
  const isActiveLink = (category: ICategory) => {
    return category.attributes.slug === router.query.category;
  };

  return (
    <div className="my-8 flex items-center justify-between border-b-2 border-gray-100">
      <ul className="flex items-center">
        <li
          className={
            "mr-6 pb-4 border-b-4 rounded-sm " +
            `${
              router.pathname === "/"
                ? "border-purple-500 text-purple-500"
                : "border-white text-gray-400"
            }`
          }
        >
          <Link href="#">Recent</Link>
        </li>
        {categories.map((category) => {
          return (
            <li
              key={category.id}
              className={
                "mr-6 pb-4 border-b-4 rounded-sm " +
                `${
                  isActiveLink(category)
                    ? "border-purple-500 text-purple-500"
                    : "border-white text-gray-400"
                }`
              }
            >
              <Link href={`/category/${category.attributes.slug}`}>
                {category.attributes.Title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tabs;
