import Add from "@/components/Add";
import CustomizeProducts from "@/components/CustomizeProducts";
import ProductImages from "@/components/ProductImages";
import React from "react";

const SinglePage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/*IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/*TEXTS */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h2 className="text-4xl font-medium">Product Name</h2>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          repellendus error sunt, maiores aut dolore ipsa voluptas cumque
          dolorem similique. Voluptatibus natus quas esse facere maxime vel!
          Totam, nesciunt sint. Sapiente inventore voluptatem obcaecati ab cum
          laboriosam corporis quis, possimus excepturi amet quasi cumque magnam
          dignissimos non ratione nemo sed ipsa ut totam quas quibusdam dolores?
          Deserunt a reprehenderit doloremque.
        </p>
        <div className="h-[2px] bg-gray-100" />
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">$59</h3>
          <h4 className="font-medium text-2xl">$49</h4>
        </div>
        <div className="h-[2px] bg-gray-100" />
        <CustomizeProducts />
        <Add />
        <div className="h-[2px] bg-gray-100" />
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
            nulla incidunt libero quo numquam doloribus ullam placeat, ea
            corrupti, sint inventore? Dicta eum quod maxime magni
            exercitationem, quis tenetur molestiae?
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
            nulla incidunt libero quo numquam doloribus ullam placeat, ea
            corrupti, sint inventore? Dicta eum quod maxime magni
            exercitationem, quis tenetur molestiae?
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
            nulla incidunt libero quo numquam doloribus ullam placeat, ea
            corrupti, sint inventore? Dicta eum quod maxime magni
            exercitationem, quis tenetur molestiae?
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
