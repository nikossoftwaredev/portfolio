"use client";

import { useMemo } from "react";
import { wikiArticles } from "data/wiki-articles";
import { ChangeEvent, useCallback, useState } from "react";
import { MdSearch } from "react-icons/md";
import { normalizeGreek } from "utils/text";
import Link from "next/link";

const WikiPage = () => {
  const [searchValue, setSearchValue] = useState("");

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }, []);

  const filteredArticles = useMemo(() => {
    const rgxSearch = new RegExp(normalizeGreek(searchValue), "ig");

    return wikiArticles.filter((sa) => {
      const { title } = sa;
      const titleNoAccents = normalizeGreek(title);

      return rgxSearch.test(titleNoAccents);
    });
  }, [searchValue]);

  return (
    <main className="flex items-center justify-center flex-col">
      <div className="relative focus-within:text-gray-400 mt-4">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <MdSearch />
        </span>
        <input
          type="search"
          name="q"
          value={searchValue}
          onChange={onChange}
          className="pl-10 input input-bordered"
          placeholder="Αναζήτηση..."
        />
      </div>
      <div className="w-2/3 mt-4">
        {filteredArticles.map((article) => (
          <div
            key={article.path}
            className="p-4 border border-base-300 bg-base-200 font-bold"
          >
            <Link
              href={`wiki/${article.path}`}
              className={`text-accent hover:text-accent-focus`}
            >
              - {article.title}
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default WikiPage;
