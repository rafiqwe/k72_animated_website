import HomeBottomText from "./components/home/HomeBottomText";
import HomeHeroText from "./components/home/HomeHeroText";
import Video from "./components/home/Video";

const page = () => {
  return (
    <div className="text-white overflow-x-hidden" >
      <div className="h-screen w-screen fixed">
        <Video />
      </div>
      <div className="h-screen w-screen relative flex-col  flex justify-between">
        <HomeHeroText/>
        <HomeBottomText/>
      </div>
    </div>
  );
};

export default page;
