import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import downloadImg from '../assets/download.png';
import simplicityImg from '../assets/34bb6b79789a9ff4bdeec9cfd8bd8993ef441176-808x538.webp';
import educationImg from '../assets/8f3f1e4ecb8ba8c52dc8a3239708a78b93669965-808x538.webp';
import serviceImg from '../assets/db8d9d3687ff5fed03c3ef72c2d895cfae7dd1af-808x538.webp';

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col-reverse lg:flex-row items-center justify-between px-[5vw] py-12 lg:py-24 gap-12 lg:gap-16 max-w-[1200px] mx-auto">
        <div className="flex-1 max-w-[100%] lg:max-w-[35rem] text-center lg:text-left">
          <h1 className="text-[clamp(2.25rem,4.5vw,3.5rem)] text-white font-bold leading-[1.1] mb-4">
            Buy, sell, and trade crypto
          </h1>
          <p className="text-[clamp(1.05rem,1.8vw,1.25rem)] text-kraken-muted leading-[1.6] mb-1">
            Join millions who trust Kraken to buy and trade Bitcoin, Ethereum and 200+ cryptocurrencies.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 my-12">
            <input 
              type="email" 
              placeholder="satoshi@email.com" 
              required
              className="flex-1 p-4 border-2 border-[#e0e0e8] rounded-3xl text-base outline-none transition-colors duration-300 focus:border-[#5741d9] bg-white text-black"
            />
            <button type="submit" className="bg-kraken-purple text-white px-10 py-4 rounded-3xl font-semibold whitespace-nowrap hover:bg-kraken-purple-hover hover:-translate-y-0.5 transition-all">
              Sign up
            </button>
          </form>

          <p className="text-[0.9rem] text-[#8b8fb0] italic mb-12">
            *Based on the January 2025 Forbes Advisor review of crypto platforms.
          </p>

          <div className="flex items-center justify-center lg:justify-start gap-6">
            <div className="w-20 h-20 bg-white p-2 rounded-lg border-2 border-[#e0e0e8] flex items-center justify-center">
              <img src={downloadImg} alt="Download App QR" className="w-full h-full object-contain" />
            </div>
            <p className="text-[1.1rem] text-white font-medium text-left">Download the<br className="hidden sm:block" /> Kraken app</p>
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center relative w-full mt-4 lg:mt-0">
          <video 
            className="w-[80vw] lg:w-[clamp(18rem,30vw,25rem)] h-auto rounded-[3rem] object-cover drop-shadow-[0_20px_60px_rgba(110,94,246,0.35)]" 
            autoPlay loop muted playsInline
          >
            <source src="https://assets-cms.kraken.com/files/51n36hrp/facade/0201a5f764735272aace1f1181d12014108eaa91.webm" type="video/webm" />
          </video>
        </div>
      </main>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 py-16 bg-transparent mb-16">
        <header className="text-center mb-16 mt-8">
          <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] text-white font-bold">Why Kraken?</h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Card 1 */}
          <article className="bg-white rounded-[2rem] p-10 flex flex-col min-h-[35rem] shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(87,65,217,0.15)] transition-all duration-300">
            <div className="mb-4">
              <h3 className="text-[clamp(1.5rem,3vw,2rem)] text-[#1a1a2e] font-semibold mb-4">Simplicity</h3>
            </div>
            <p className="text-[#4a4a6a] text-[clamp(1rem,2vw,1.125rem)] leading-[1.6] mb-8">
              Buy, sell and trade crypto easily, from your desktop or mobile.
            </p>
            <a href="#apps" className="inline-block self-start px-7 py-3.5 bg-[#ede9fe] text-[#5741d9] rounded-3xl font-semibold hover:bg-[#ddd6fe] hover:translate-x-1 transition-all mb-8 no-underline">
              Get the apps
            </a>
            <div className="flex-1 flex items-center justify-center mt-auto p-4 relative">
              <img src={simplicityImg} alt="Simplicity feature" className="w-full h-auto max-w-[16rem] object-contain drop-shadow-[0_20px_40px_rgba(87,65,217,0.3)]" />
            </div>
          </article>

          {/* Card 2 */}
          <article className="bg-white rounded-[2rem] p-10 flex flex-col min-h-[35rem] shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(87,65,217,0.15)] transition-all duration-300">
            <div className="mb-4">
              <h3 className="text-[clamp(1.5rem,3vw,2rem)] text-[#1a1a2e] font-semibold mb-4">Education</h3>
            </div>
            <p className="text-[#4a4a6a] text-[clamp(1rem,2vw,1.125rem)] leading-[1.6] mb-8">
              Crypto shouldn't be cryptic – learn about blockchain, trading, crypto and NFTs.
            </p>
            <a href="#learn" className="inline-block self-start px-7 py-3.5 bg-[#ede9fe] text-[#5741d9] rounded-3xl font-semibold hover:bg-[#ddd6fe] hover:translate-x-1 transition-all mb-8 no-underline">
              Learn center
            </a>
            <div className="flex-1 flex items-center justify-center mt-auto p-4 relative">
              <img src={educationImg} alt="Education feature" className="w-full h-auto max-w-[18rem] object-contain drop-shadow-[0_20px_40px_rgba(87,65,217,0.3)]" />
            </div>
          </article>

          {/* Card 3 */}
          <article className="bg-white rounded-[2rem] p-10 flex flex-col min-h-[35rem] shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(87,65,217,0.15)] transition-all duration-300 md:col-span-2 lg:col-span-1 lg:max-w-none md:max-w-[50rem] md:mx-auto w-full">
            <div className="mb-4">
              <h3 className="text-[clamp(1.5rem,3vw,2rem)] text-[#1a1a2e] font-semibold mb-4">Service</h3>
            </div>
            <p className="text-[#4a4a6a] text-[clamp(1rem,2vw,1.125rem)] leading-[1.6] mb-8">
              Find answers instantly, or get help from our award-winning support team.
            </p>
            <a href="#support" className="inline-block self-start px-7 py-3.5 bg-[#ede9fe] text-[#5741d9] rounded-3xl font-semibold hover:bg-[#ddd6fe] hover:translate-x-1 transition-all mb-8 no-underline">
              Kraken support
            </a>
            <div className="flex-1 flex items-center justify-center mt-auto p-4 relative">
              <img src={serviceImg} alt="Service feature" className="w-full h-auto max-w-[20rem] object-contain drop-shadow-[0_20px_40px_rgba(87,65,217,0.3)]" />
            </div>
          </article>
        </div>

        <div className="text-center mt-8 pb-8">
          <a href="#get-started" className="inline-block px-9 py-4 bg-kraken-purple text-white rounded-full font-bold tracking-wide text-[clamp(1rem,2vw,1.125rem)] shadow-[0_10px_30px_rgba(110,94,246,0.35)] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(110,94,246,0.45)] hover:bg-kraken-purple-hover transition-all no-underline">
            Get started with Kraken
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
