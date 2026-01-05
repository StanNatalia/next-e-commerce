"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

type PaginationProps = {
  page: number;
  totalPages: number;
};

const Pagination = ({ page, totalPages }: PaginationProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const changePage = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(newPage));
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex w-full justify-between">
      <button
        disabled={page <= 1}
        onClick={() => changePage(page - 1)}
        className="rounded-md bg-lama text-white p-2 text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-pink-200"
      >
        Previous
      </button>

      <span className="text-sm text-gray-500">
        Page {page} of {totalPages}
      </span>

      <button
        disabled={page >= totalPages}
        onClick={() => changePage(page + 1)}
        className="rounded-md bg-lama text-white p-2 text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-pink-200"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
