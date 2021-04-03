// Import components
import FeatureCard from './featureCard';
// Import main image
import hero from '../../images/money.jpg';

const Home = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-2">
      {/* Introductory Image */}
      <div className="col-span-2 relative">
        <img className="rounded-xl" src={hero} alt="Bitcoin & Gold"></img>
        <div className="sm:absolute sm:top-5 mb-2 sm:mb-0 mt-4 sm:mt-0 pl-6 flex flex-col text-center sm:text-left">
          <span className="mb-1 text-5xl font-serif font-extrabold bg-clip-text text-transparent \
           bg-gradient-to-b from-gray-100 to-blue-400">
            LiberCrypt
          </span>
          <span className="text-2xl font-serif font-bold bg-clip-text text-transparent \
           bg-gradient-to-b from-gray-100 to-blue-400">
            Liberty through finance.
          </span>
        </div>
        <div className="h-0.5 w-full bg-gradient-to-r from-black via-blue-600 to-transparent"></div>
      </div>

      {/* Introduction */}
      <div className="text-center col-span-2 pt-6 p-4 bg-gradient-to-br from-black via-gray-900 to-gray-800 rounded-md">
        <span className="text-lg font-bold text-blue-200" style={{"text-shadow": "0px 0px 10px #444"}}>
          Are you sick of keeping track of your financial health?<br/>Let LiberCrypt help!
        </span>
        <div className="mt-6 mb-10"></div>
        {/* Site Features */}
        <div className="grid grid-cols-2 gap-6">
          <FeatureCard header="Manage Financial Health" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." image="" />
          <FeatureCard header="Track Assets & Income" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." image="" />
          <FeatureCard header="Limit Expenses & Liabilities" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." image="" />
          <FeatureCard header="Up-to-Date Pricing Info" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." image="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
