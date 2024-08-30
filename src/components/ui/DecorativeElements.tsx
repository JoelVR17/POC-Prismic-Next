interface ElementProps {
  opacity: string;
}

export const PurpleElement = ({ opacity }: ElementProps) => {
  return (
    <div
      className={`relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-purple-500 before:to-indigo-500 before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-pink-300 after:via-purple-300 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-indigo-800 before:dark:opacity-${opacity} after:dark:from-purple-900 after:dark:via-[#6200ea] after:dark:opacity-20 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]`}
    ></div>
  );
};

export const BlueNextElement = ({ opacity }: ElementProps) => {
  return (
    <div
      className={`relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-${opacity} after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-20 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]`}
    ></div>
  );
};

export const GreenElement = ({ opacity }: ElementProps) => {
  return (
    <div
      className={`relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-green-400 before:to-teal-400 before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-cyan-500 after:via-lime-300 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-teal-700 before:dark:opacity-${opacity} after:dark:from-green-700 after:dark:via-[#00ff99] after:dark:opacity-20 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]`}
    ></div>
  );
};

export const FuchsiaElement = ({ opacity }: ElementProps) => {
  return (
    <div
      className={`relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-orange-300 before:to-pink-400 before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-purple-600 after:via-red-300 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-pink-700 before:dark:opacity-${opacity} after:dark:from-orange-900 after:dark:via-[#ff007f] after:dark:opacity-20 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]`}
    ></div>
  );
};

export const TealBlueElement = ({ opacity }: ElementProps) => {
  return (
    <div
      className={`relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-teal-500 before:to-blue-600 before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-blue-400 after:via-indigo-500 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-900 before:dark:opacity-${opacity} after:dark:from-teal-700 after:dark:via-[#0033cc] after:dark:opacity-20 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]`}
    ></div>
  );
};

export const PurpleTealGreenElement = ({ opacity }: ElementProps) => {
  return (
    <div
      className={`relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-indigo-400 before:to-purple-500 before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-green-300 after:via-teal-500 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-indigo-800 before:dark:opacity-${opacity} after:dark:from-purple-700 after:dark:via-[#00ffcc] after:dark:opacity-20 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]`}
    ></div>
  );
};

export const YellowOrangeElement = ({ opacity }: ElementProps) => {
  return (
    <div
      className={`relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-yellow-400 before:to-orange-500 before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-red-500 after:via-yellow-300 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-orange-800 before:dark:opacity-${opacity} after:dark:from-yellow-600 after:dark:via-[#ff8800] after:dark:opacity-20 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]`}
    ></div>
  );
};

export const LightGreenElement = ({ opacity }: ElementProps) => {
  return (
    <div
      className={`relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-96 before:rounded-full before:bg-gradient-radial before:from-green-500 before:to-lime-600 before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-2 after:bg-gradient-conic after:from-teal-400 after:via-green-300 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-lime-800 before:dark:opacity-${opacity} after:dark:from-green-900 after:dark:via-[#66ff66] after:dark:opacity-20 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]`}
    ></div>
  );
};

export const GrayElement = ({ opacity }: ElementProps) => {
  return (
    <div
      className={`relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-96 before:rounded-full before:bg-gradient-radial before:from-gray-300 before:to-gray-100 before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-2 after:bg-gradient-conic after:from-gray-400 after:via-gray-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-gray-700 before:dark:opacity-${opacity} after:dark:from-gray-900 after:dark:via-gray-500 after:dark:opacity-20 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]`}
    ></div>
  );
};
