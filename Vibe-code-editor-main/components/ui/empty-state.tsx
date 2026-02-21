import React from "react";
import Image from "next/image";

interface Props {
  title: string;
  description?: string;
  imageSrc?: string;
}

const EmptyState = ({ title, description, imageSrc }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={title}
          height={48}
          width={48}
          className="h-48 w-48 mb-4"
        />
      )}
      <h2 className="text-xl font-semibold text-gray-400">
        {title || "No Data Available"}
      </h2>
      <p className="text-gray-500 ">
        {description ||
          "No data available. Please add a repository to get started."}
      </p>
    </div>
  );
};

export default EmptyState;
