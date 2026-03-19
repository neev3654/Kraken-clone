import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/signup';

  if (isAuthPage) return null;

  return (
    <nav className="flex justify-between items-center py-5 px-4 sm:px-[5vw] bg-kraken-dark border-b border-kraken-border sticky top-0 z-[100]">
      <Link to="/" className="text-kraken-purple-light text-2xl font-extrabold tracking-widest flex items-center gap-1.5 lowercase no-underline">
        <span className="text-[1.75rem] leading-none">◉</span>kraken
      </Link>
      
      <ul className="hidden lg:flex gap-10 list-none items-center m-0 p-0">
        {['Invest', 'Trade', 'Earn', 'Institutions', 'Explore Markets', 'Learn', 'Why Kraken?'].map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-[#cfd2e6] font-medium text-[0.95rem] transition-colors duration-300 hover:text-[#b9aaff] no-underline">
              {item}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex gap-2 sm:gap-4 items-center">
        <a href="#login" className="px-[1.25rem] sm:px-7 py-[0.6rem] sm:py-3 rounded-[1.5rem] font-semibold transition-all duration-300 text-[0.9rem] sm:text-base text-[#cfd2e6] hover:bg-white/5 no-underline">
          Log in
        </a>
        <Link to="/signup" className="bg-kraken-purple text-white px-[1.25rem] sm:px-7 py-[0.6rem] sm:py-3 rounded-[1.5rem] font-semibold transition-all duration-300 text-[0.9rem] sm:text-base hover:bg-kraken-purple-hover hover:-translate-y-0.5 no-underline">
          Sign up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
