const Footer = () => {
  return (
    <footer className="w-full text-left pt-12 pb-12 bg-kraken-darker" style={{ background: 'radial-gradient(1200px 600px at 120% -10%, rgba(110, 94, 246, 0.18) 0%, rgba(110, 94, 246, 0) 60%), linear-gradient(180deg, #0f0f22 0%, #0b0b16 100%)' }}>
      <div className="max-w-[1400px] mx-auto px-6 sm:px-[5vw]">
        <div className="mb-16">
          <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] text-white font-bold leading-tight mb-8 max-w-[32rem]">
            Take your crypto trading to the next level.
          </h2>
          

          
          <div className="flex flex-col sm:flex-row gap-6">
            <a href="#create" className="bg-kraken-purple text-white px-12 py-4 rounded-full text-base font-semibold transition-all duration-300 shadow-[0_8px_20px_rgba(110,94,246,0.35)] hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(87,65,217,0.4)] text-center">
              Create account
            </a>
            <a href="#signin" className="bg-white/10 text-[#e6e6f0] border border-white/15 px-12 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:bg-[#5741d9]/15 text-center">
              Sign in
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 pt-12 border-t border-white/5">
          {[
            { title: 'Features', links: ['Margin Trading', 'Futures Trading', 'OTC Trading', 'Institutions', 'API Trading', 'Kraken API center', 'Staking Rewards', 'Send Money', 'Recurring buys', 'Buy Crypto', 'Sell Crypto'] },
            { title: 'Company', links: ['Kraken Security', 'Kraken Careers', 'Kraken Blog', 'Kraken Developer', 'Press Room', 'Affiliate Program', 'Asset Listings', 'Kraken Status', 'Support Center'] },
            { title: 'Browse Prices', links: ['Bitcoin Price', 'Ethereum Price', 'Dogecoin Price', 'XRP Price', 'Cardano Price', 'Solana Price', 'Litecoin Price', 'Crypto categories', 'All crypto prices', 'Price predictions'] },
            { title: 'Popular Markets', links: ['BTC to USD', 'ETH to USD', 'DOGE to USD', 'XRP to USD', 'ADA to USD', 'SOL to USD', 'LTC to USD', 'All crypto markets'] },
            { title: 'Buying Guides', links: ['Buy Bitcoin', 'Buy Ethereum', 'Buy Dogecoin', 'Buy XRP', 'Buy Cardano', 'Buy Solana', 'Buy Litecoin', 'All crypto guides'] },
          ].map((col) => (
            <div key={col.title}>
              <h3 className="text-base text-[#cfd2e6] font-bold mb-4 tracking-wide">{col.title}</h3>
              <ul className="list-none p-0 m-0">
                {col.links.map((link) => (
                  <li key={link} className="mb-3">
                    <a href={`#${link.toLowerCase().replace(/ /g, '-')}`} className="text-[#9aa1c6] no-underline text-sm font-medium transition-all duration-300 inline-block hover:text-[#b9aaff] hover:translate-x-1">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
