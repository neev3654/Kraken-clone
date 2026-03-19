import { Link } from 'react-router-dom';
import signupHeroImg from '../assets/4bd19eb3f3ba4b633a1685b47e9bc9bb89a00181-600x600.webp';

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

const Signup = () => {
  return (
    <>
      <AuthHeader />
      <div className="flex flex-col lg:flex-row min-h-screen pt-[4.5rem]">
        {/* Left Section */}
        <div className="flex-1 min-h-[25vh] lg:min-h-auto bg-[radial-gradient(circle_at_30%_50%,rgba(110,94,246,0.15)_0%,transparent_50%),linear-gradient(135deg,#0f0f22_0%,#1a1a2e_100%)] flex items-center justify-center p-6 sm:p-12 relative overflow-hidden">
          <div className="relative w-full max-w-[28rem] flex flex-col items-center justify-center gap-8">
            <div className="text-center max-w-[24rem]">
              <h2 className="text-[clamp(1.35rem,3vw,2.25rem)] text-white font-bold mb-4 leading-[1.2]">
                Start your crypto journey with Kraken
              </h2>
              <p className="text-[0.95rem] sm:text-[1.05rem] text-[#b3b7cd] leading-[1.6]">
                Join millions of traders and investors who trust Kraken for secure and easy crypto trading.
              </p>
            </div>
            <img 
              src={signupHeroImg} 
              alt="Kraken Crypto Illustration" 
              className="w-full h-auto max-w-[20rem] drop-shadow-[0_1.5rem_3rem_rgba(110,94,246,0.25)] opacity-95"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex items-center justify-center p-4 sm:p-12 bg-[#0b0b16]">
          <div className="w-full max-w-[28rem] p-6 sm:p-10 bg-white/[0.03] border border-white/[0.08] rounded-3xl backdrop-blur-md">
            <h1 className="text-[clamp(1.35rem,3vw,2rem)] font-bold text-white mb-6 sm:mb-7 leading-[1.2]">
              Create your account
            </h1>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-8 bg-transparent sm:bg-white/[0.04] p-0 sm:p-1.5 rounded-2xl">
              <button className="flex-1 w-full sm:w-auto py-4 sm:py-3 px-4 rounded-xl cursor-pointer text-[0.95rem] font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300 bg-kraken-purple shadow-[0_4px_12px_rgba(110,94,246,0.3)] border border-transparent sm:border-none">
                <span>👤</span> Personal
              </button>
              <Link to="/business" className="flex-1 w-full sm:w-auto py-4 sm:py-3 px-4 rounded-xl cursor-pointer text-[0.95rem] font-semibold text-[#9aa1c6] flex items-center justify-center gap-2 transition-all duration-300 hover:bg-white/[0.06] hover:text-[#b9aaff] no-underline border border-white/[0.12] sm:border-transparent bg-white/[0.04] sm:bg-transparent">
                <span>🏢</span> Business
              </Link>
            </div>

            <form>
              <div className="mb-6">
                <label className="block mb-2 text-[#cfd2e6] text-[0.9rem] font-semibold">
                  Email address
                </label>
                <input 
                  type="email" 
                  placeholder="satoshi@email.com" 
                  required
                  className="w-full px-5 py-4 border border-white/[0.12] rounded-xl text-base transition-all duration-300 bg-white/[0.04] text-[#e6e6f0] placeholder-[#6b7094] focus:outline-none focus:border-kraken-purple focus:bg-white/[0.06] focus:shadow-[0_0_0_3px_rgba(110,94,246,0.15)]"
                />
              </div>

              <a href="#" className="text-[#9b8cff] no-underline text-[0.9rem] font-medium inline-block mb-7 transition-colors hover:text-[#b9aaff] hover:underline">
                + Add invite code
              </a>

              <button type="submit" className="w-full py-4 px-6 bg-kraken-purple text-white border-none rounded-full text-base font-bold tracking-wide cursor-pointer transition-all duration-300 shadow-[0_8px_20px_rgba(110,94,246,0.35)] hover:bg-kraken-purple-hover hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(110,94,246,0.45)] active:translate-y-0">
                Next
              </button>

              <p className="mt-6 text-[0.85rem] text-[#8b8fb0] leading-[1.5] text-center">
                By creating an account, you agree to our <a href="#terms" className="text-[#9b8cff] no-underline hover:underline">Terms of Service</a> and <a href="#privacy" className="text-[#9b8cff] no-underline hover:underline">Privacy Policy</a>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
