import SearchCards from '@/components/SearchCards';
import Searchbar from '@/components/Searchbar';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="container">
        <div className='m-24 space-y-8'>
          <h3 className='text-5xl '>How can we help?</h3>
          <Searchbar />

          <div className="cards__container">
            <SearchCards />
          </div>
        </div>
      </div>
    </main>
  );
}
