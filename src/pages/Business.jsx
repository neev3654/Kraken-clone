import { Link } from 'react-router-dom';
import businessHeroImg from '../assets/a83488595e5993f378841b78edf967d846715478-600x600.webp';

const AuthHeader = () => (
  <header className="fixed top-0 left-0 right-0 flex justify-between items-center px-4 sm:px-[5vw] py-5 bg-[#0f1120] border-b border-[rgba(255,255,255,0.06)] z-[100]">
    <Link to="/" className="text-[#9b8cff] text-2xl font-extrabold tracking-wide flex items-center gap-[0.4rem] lowercase no-underline">
      <span className="text-[1.75rem] leading-none">◉</span>kraken
    </Link>
    <div className="flex gap-3 sm:gap-6 items-center">
      <div className="flex items-center gap-2 text-[#9aa1c6] text-[0.85rem] sm:text-[0.9rem] cursor-pointer px-2 sm:px-3 py-2 rounded-lg transition-colors duration-300 hover:bg-white/5">
        <span>🌐</span>
        <span className="hidden sm:inline">U.S. English</span>
        <span className="sm:hidden">EN</span>
        <span>▼</span>
      </div>
      <a href="#" className="text-[#cfd2e6] no-underline font-medium text-[0.85rem] sm:text-[0.95rem] px-4 sm:px-6 py-2.5 rounded-3xl transition-all duration-300 hover:bg-white/10 hover:text-[#b9aaff]">
        Sign in
      </a>
    </div>
  </header>
);

const Business = () => {
  return (
    <>
      <AuthHeader />
      <div className="flex flex-col lg:flex-row min-h-screen pt-[4.5rem]">
        {/* Left Section */}
        <div className="flex-1 min-h-[25vh] sm:min-h-[30vh] lg:min-h-[40vh] bg-[radial-gradient(circle_at_30%_50%,rgba(110,94,246,0.15)_0%,transparent_50%),linear-gradient(135deg,#0f0f22_0%,#1a1a2e_100%)] flex items-center justify-center p-6 sm:p-12 relative overflow-hidden">
          <div className="relative w-full max-w-[28rem] flex flex-col items-center justify-center gap-8">
            <div className="text-center max-w-[24rem]">
              <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] text-white font-bold mb-4 leading-[1.2]">
                Powerful crypto solutions for your business
              </h2>
              <p className="text-[0.95rem] sm:text-[1.05rem] text-[#b3b7cd] leading-[1.6]">
                Access institutional-grade trading tools, OTC services, and dedicated support for your business needs.
              </p>
            </div>
            <img 
              src={businessHeroImg} 
              alt="Kraken Business Illustration" 
              className="w-full h-auto max-w-[20rem] drop-shadow-[0_1.5rem_3rem_rgba(110,94,246,0.25)] opacity-95"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 lg:min-h-[60vh] flex items-center justify-center p-4 sm:p-12 bg-[#0b0b16]">
          <div className="w-full max-w-[28rem] p-4 sm:p-10 bg-white/[0.03] border border-white/[0.08] rounded-3xl backdrop-blur-md">
            <h1 className="text-[clamp(1.5rem,3vw,2rem)] font-bold text-white mb-6 sm:mb-7 leading-[1.2]">
              Create a business account
            </h1>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-6 bg-transparent sm:bg-white/[0.04] p-0 sm:p-1.5 rounded-2xl">
              <Link to="/signup" className="flex-1 w-full py-4 sm:py-3 px-4 rounded-xl cursor-pointer text-[0.95rem] font-semibold text-[#9aa1c6] flex items-center justify-center gap-2 transition-all duration-300 hover:bg-white/[0.06] hover:text-[#b9aaff] no-underline border border-white/[0.12] sm:border-transparent bg-white/[0.04] sm:bg-transparent">
                <span>👤</span> Personal
              </Link>
              <button className="flex-1 w-full py-4 sm:py-3 px-4 rounded-xl cursor-pointer text-[0.95rem] font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300 bg-kraken-purple shadow-[0_4px_12px_rgba(110,94,246,0.3)] border border-transparent sm:border-none">
                <span>🏢</span> Business
              </button>
            </div>

            <p className="mb-6 leading-[1.6] text-[#b3b7cd] text-[0.9rem] sm:text-[0.95rem]">
              For clients trading for business purposes or on behalf of a business entity.
              <a href="#" className="text-[#9b8cff] no-underline font-medium hover:text-[#b9aaff] hover:underline ml-1">Learn more</a>
            </p>

            <form>
              <div className="mb-6">
                <label className="block mb-2 text-[#cfd2e6] text-[0.9rem] font-semibold">
                  Business email address
                </label>
                <input 
                  type="email" 
                  placeholder="company@business.com" 
                  required
                  className="w-full px-5 py-4 border border-white/[0.12] rounded-xl text-base transition-all duration-300 bg-white/[0.04] text-[#e6e6f0] placeholder-[#6b7094] focus:outline-none focus:border-kraken-purple focus:bg-white/[0.06] focus:shadow-[0_0_0_3px_rgba(110,94,246,0.15)]"
                />
              </div>

              <div className="mb-6 relative">
                <label className="block mb-2 text-[#cfd2e6] text-[0.9rem] font-semibold">
                  Password
                </label>
                <div className="relative">
                  <input 
                    type="password" 
                    placeholder="Create a strong password" 
                    required
                    className="w-full px-5 py-4 border border-white/[0.12] rounded-xl text-base transition-all duration-300 bg-white/[0.04] text-[#e6e6f0] placeholder-[#6b7094] focus:outline-none focus:border-kraken-purple focus:bg-white/[0.06] focus:shadow-[0_0_0_3px_rgba(110,94,246,0.15)]"
                  />
                </div>
                
                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 mt-3">
                  {['12 characters', '1 number', '1 special character', '1 letter'].map(req => (
                    <span key={req} className="flex items-center gap-1.5 text-[0.8rem] text-[#8b8fb0] px-3 py-1.5 bg-white/[0.05] border border-white/[0.08] rounded-full w-full sm:w-auto">
                      <span className="text-[0.7rem]">○</span> {req}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-[#cfd2e6] text-[0.9rem] font-semibold">
                  Country of formation
                </label>
                <select 
                  required
                  defaultValue=""
                  className="w-full px-5 py-4 border border-white/[0.12] rounded-xl text-base transition-all duration-300 bg-white/[0.04] text-[#e6e6f0] focus:outline-none focus:border-kraken-purple focus:bg-white/[0.06] focus:shadow-[0_0_0_3px_rgba(110,94,246,0.15)] appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%239aa1c6' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1.25rem center'
                  }}
                >
                  <option value="" disabled className="bg-[#1a1a2e] text-[#e6e6f0]">Select country</option>
                  <option value="us" className="bg-[#1a1a2e] text-[#e6e6f0]">United States</option>
                  <option value="uk" className="bg-[#1a1a2e] text-[#e6e6f0]">United Kingdom</option>
                  <option value="ca" className="bg-[#1a1a2e] text-[#e6e6f0]">Canada</option>
                  <option value="de" className="bg-[#1a1a2e] text-[#e6e6f0]">Germany</option>
                  <option value="fr" className="bg-[#1a1a2e] text-[#e6e6f0]">France</option>
                  <option value="jp" className="bg-[#1a1a2e] text-[#e6e6f0]">Japan</option>
                  <option value="au" className="bg-[#1a1a2e] text-[#e6e6f0]">Australia</option>
                  <option value="sg" className="bg-[#1a1a2e] text-[#e6e6f0]">Singapore</option>
                  <option value="ch" className="bg-[#1a1a2e] text-[#e6e6f0]">Switzerland</option>
                  <option value="other" className="bg-[#1a1a2e] text-[#e6e6f0]">Other</option>
                </select>
              </div>

              <button type="submit" className="w-full py-4 px-6 bg-kraken-purple text-white border-none rounded-full text-base font-bold tracking-wide cursor-pointer transition-all duration-300 shadow-[0_8px_20px_rgba(110,94,246,0.35)] hover:bg-kraken-purple-hover hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(110,94,246,0.45)] mt-6">
                Create business account
              </button>

              <p className="mt-6 text-[0.85rem] text-[#8b8fb0] leading-[1.5] text-center">
                By creating a business account, you agree to Kraken's <a href="#terms" className="text-[#9b8cff] no-underline hover:underline">Terms of Service</a> and <a href="#privacy" className="text-[#9b8cff] no-underline hover:underline">Privacy Policy</a>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Business;
