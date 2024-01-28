import Image from "next/image";
// import belle from "../public/belle.png";
// import project from "../public/project.jpg";
// import lms from "../public/leave-management-system.png";
// import ar from "../public/unity-vuforia.jpg";

export default function Home() {
  return (
    <main>
      <section className="bg-blue-300">
        {/* <nav className="p-10">
          <h1>Annabelle Aaron</h1>
          <ul>
            <li>

            </li>
            <li>
              <a href="#">Resume</a>
            </li>
          </ul>
        </nav> */}
        <div className="flex flex-col md:flex-row items-center max-w-6xl px-6 mx-auto">
          <div className="w-full md:w-1/2 py-8 md:py-10">
            <h3 className="text-indigo-600 text-5xl lg:text-7xl text-start align font-semibold leading-none tracking-tighter">
                {"Hi, I'm"} <br /><span className="text-white">Annabelle</span><br />
            </h3>
            <p className="text-indigo-600 text-base text-start">Currently pursuing Master of Applied Computing in Lincoln University
            </p>
          </div>
          {/* <div className="w-full md:w-1/2 py-8 md:py-2">
            <div className="relative mx-auto bg-gradient-to-b from-indigo-500 rounded-full w-80 h-80">
            <Image src={belle} alt="Annabelle"/>
            </div>
          </div> */}
        </div>

        {/* <div className="">
          <p>test</p>
        </div> */}
      </section>
      <section className="bg-white">
        <div>
          <h3 className="text-slate-600 text-center text-3xl pt-5">Projects</h3>
        </div>
        <div className="flex flex-col md:flex-row md:flex-wrap">
          <div className="bg-indigo-300 w-80 my-10 p-5 mx-auto rounded-xl">
            <div className="container mx-auto">
              <Image src="./leave-management-system.png" alt="Leave Management System"/>
            </div>
            <div className="text-white align-baseline">
              <div className="py-3">
                <p className="text-lg">Leave Management System</p>
              </div>
              <div className="flex justify-around">
                <a href="https://annabelleaaron.pythonanywhere.com" target="_blank" className="bg-indigo-400 rounded-xl px-2 demo-btn">Demo</a>
              </div>
            </div>
          </div>

          <div className="bg-indigo-300 w-80 my-10 p-5 mx-auto rounded-xl">
            <div className="container mx-auto">
              <Image src="./unity-vuforia.jpg" alt="Unity and Vuforia"/>
            </div>
            <div className="text-white align-baseline">
              <div className="py-3">
                <p className="text-lg">Augmented Reality Project</p>
              </div>
              <div className="flex justify-around">
                <a href="/arproject" className="bg-indigo-400 rounded-xl px-2 demo-btn">Overview</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

