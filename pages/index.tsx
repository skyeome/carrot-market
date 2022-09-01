import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 py-20 px-8 grid gap-10 min-h-screen">
      <div className="flex flex-col bg-white p-10 rounded-2xl shadow-xl">
        <h4 className="font-semibold text-3xl mb-2">Select Item</h4>
        <div className="flex justify-between mb-2">
          <span className="text-gray-500">Grey Chair</span>
          <span className="font-semibold">$19</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Tooly Table</span>
          <span className="font-semibold">$80</span>
        </div>
        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span>Total</span>
          <span className="font-semibold">$99</span>
        </div>
        <button className="w-3/4 mx-auto mt-5 bg-blue-500 text-white p-3 text-center rounded-xl hover:bg-blue-600 active:bg-yellow-500 focus:bg-red-500">
          Checkout
        </button>
      </div>
      <div className="bg-white overflow-hidden rounded-3xl shadow-xl group">
        <div className="bg-blue-500 p-6 pb-14">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="rounded-3xl p-6 bg-white relative -top-5">
          <div className="flex items-end justify-between relative -top-16">
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="text-lg font-bold">340</span>
            </div>
            <div className="h-24 w-24 bg-zinc-300 rounded-full group-hover:bg-red-400 transition-colors"></div>
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="text-lg font-bold">$2310</span>
            </div>
          </div>
          <div className="flex flex-col items-center -mt-10 relative">
            <span className="text-lg font-bold">Tony Molloy</span>
            <span className="text-sm text-gray-500">New York, USA</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-10 rounded-2xl shadow-xl">
        <div className="flex justify-between items-center mb-5">
          <span>⬅️</span>
          <div className="space-x-3">
            <span>⭐️ 4.9</span>
            <span className="shadow-xl p-2 rounded-md">💖</span>
          </div>
        </div>
        <div className="bg-zinc-400 h-72 mb-5"></div>
        <div className="flex flex-col">
          <span className="font-bold mb-1.5 text-xl">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="mt-3 mb-5 flex justify-between items-center">
            <div className="space-x-2">
              <button className="w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-500 transition"></button>
              <button className="w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 ring-offset-2 ring-indigo-500 transition"></button>
              <button className="w-5 h-5 rounded-full bg-teal-500 focus:ring-2 ring-offset-2 ring-teal-500 transition"></button>
            </div>
            <div className="flex items-center space-x-4">
              <button className="rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 font-bold text-xl text-gray-500">
                -
              </button>
              <span>1</span>
              <button className="rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 font-bold text-xl text-gray-500">
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-bold text-2xl ">$450</span>
            <button className="bg-blue-500 py-2 px-8 text-center text-white rounded-lg">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
