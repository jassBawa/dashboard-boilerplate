import { Search } from 'lucide-react';
import React from 'react';

function Searchbar() {
  return (
    <div className="relative flex gap-2 px-2` items-center w-full border-b dark:bg-gray-800 max-w-md text-2xl" >
      <input
        type="search"
        name="search"
        className="w-full py-2 border-none rounded-lg  outline-none"
        placeholder="What are you looking for?"
      />
     <Search />

    </div>
  );
}

export default Searchbar;
