// import React from "react";

interface BreadcrumbItem {
  label: string; // Label yang akan ditampilkan
  link?: string; // Link jika breadcrumb dapat diklik
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]; // Array item breadcrumb
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="text-sm text-gray-500 mb-4">
      <ol className="list-reset flex">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {item.link ? (
              <a href={item.link} className="text-blue-500 hover:underline">
                {item.label}
              </a>
            ) : (
              <span className="text-gray-700">{item.label}</span>
            )}
            {index < items.length - 1 && (
              <span className="mx-2">/</span> // Separator
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
