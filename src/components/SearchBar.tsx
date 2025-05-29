import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (location: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-md">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search any city"
        className="w-full px-4 py-2 text-lg bg-white/10 backdrop-blur-md rounded-full text-white placeholder-white/70 outline-none border border-white/20"
      />
      <button
        type="submit"
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white"
      >
        <Search size={24} />
      </button>
    </form>
  );
};

export default SearchBar;