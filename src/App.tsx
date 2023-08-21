import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "./assets/phone-animation.json";
import { useRef } from "react";

function App() {
  const phoneRef = useRef<LottieRefCurrentProps>(null);
  return (
    <div className="min-h-screen flex items-center justify-center lg:mx-48 text-white font-poppins">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold">
          Create lovely animations with Lottie.
        </h1>
        <p>Create fancy animations</p>
        <div className="flex gap-2 justify-center">
          <button>Learn More</button>
          <button>Library</button>
        </div>
        <Lottie
          onComplete={() => {
            console.log("complete");
            phoneRef.current?.goToAndPlay(90, true);
          }}
          lottieRef={phoneRef}
          loop={false}
          animationData={animationData}
        />
      </div>
    </div>
  );
}

export default App;
