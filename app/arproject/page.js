import Image from "next/image";
// import arp1 from "../../public/p1.gif";
// import arp2 from "../../public/p2.gif";
// import arp3 from "../../public/p3.gif";

export default function ARProject() {
    return(
      <main>
        <section className="bg-white min-h-screen">
          <div className="bg-blue-300 p-5 shadow-md text-2xl text-white text-center">
            Augmented Reality Project
          </div>
          <div className="p-5 flex flex-col md:flex-row items-center max-w-6xl mx-auto">
            <div className="w-full md:w-1/2 lg:w-1/3 md:py-10">
              <Image src="./p1.gif" className="gif-size" alt="Gif showing how the Augmented Reality appears"/>
            </div>
            <div className="w-full md:w-1/2 lg:w-2/3 pt-2 md:py-10 ">
              <p>I was tasked to collaborate with another student to help showcase the university campus in Augmented Reality.</p>
              <p className="pt-2">This project was created using Unity and Vuforia.</p>
              <p className="pt-2">I modelled the 3D models of the buildings inside the campus using Maya 3D.</p>
            </div>
          </div>
          <div className="p-5 flex flex-col md:flex-row items-center max-w-6xl mx-auto">
            <div className="w-full md:w-1/2 lg:w-1/3 md:py-10">
              <Image src="./p2.gif" className="gif-size" alt="Gif showing the interactivity between the user and the sphere"/>
            </div>
            <div className="w-full md:w-1/2 lg:w-2/3 pt-2 md:py-10 ">
              <p>The reality is interactive using effects.</p>
            </div>
          </div>
          <div className="p-5 flex flex-col md:flex-row items-center max-w-6xl mx-auto">
            <div className="w-full md:w-1/2 lg:w-1/3 md:py-10">
              <Image src="./p3.gif" className="gif-size" alt="Gif showing the interactivity when the user taps on the sphere"/>
            </div>
            <div className="w-full md:w-1/2 lg:w-2/3 pt-2 md:py-10 ">
              <p>{"Tapping on the sphere shows the building's interior."}</p>
              <p className="pt-2">The 360 degrees photos are provided by Google images.</p>
            </div>
          </div>
        </section>
      </main>
    );
  }