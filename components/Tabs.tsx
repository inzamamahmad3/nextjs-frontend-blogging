import Link from "next/link";
import React from "react";
import { ICategory } from "../types";

interface IPropType {
  categories: ICategory[];
}
const Tabs = ({ categories }: IPropType) => {
  return (
    <div className="">
      <ul className="flex items-center">
        <li className="mr-6 pb-4 border-b-4 rounded-sm">
          <Link href="#">Recent</Link>
        </li>
        {categories.map((category) => {
          return (
            <li className="mr-6 pb-4 border-b-4 rounded-sm">
              <Link href="#">{category.attributes.Title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tabs;
