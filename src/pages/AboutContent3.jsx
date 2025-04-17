import React from "react";
import { Users, UserPlus, Mountain, Award } from "lucide-react";

const AboutContent3 = () => {
  return (
    <div className="w-full">
      <div className="relative w-full">
        <img
          src="/image/unsplash_okVXy9tG3KYAY.png"
          alt="Hero background"
          className="w-full h-[500px] object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-opacity-40" />

        {/* Centered icons and stats */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-20 text-white">
            {/* Stat 1 */}
            <div className="flex items-center gap-3">
              <Users size={50} />
              <div>
                <div className="text-4xl font-extrabold">126+</div>
                <div className="text-base">Satisfied Client</div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-3">
              <UserPlus size={50} />
              <div>
                <div className="text-4xl font-extrabold">230+</div>
                <div className="text-base">New Traveller</div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-3">
              <Mountain size={50} />
              <div>
                <div className="text-4xl font-extrabold">230+</div>
                <div className="text-base">Destination</div>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex items-center gap-3">
              <Award size={50} />
              <div>
                <div className="text-4xl font-extrabold">230+</div>
                <div className="text-base">Award</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="text-center mt-12 mb-6">
        <p className="text-gray-400 text-sm">Gallery</p>
        <h2 className="text-3xl font-bold">Unforgettable moment</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto px-4 pb-12">
        {/* Left Side - Bali */}
        <div className="relative">
          <img
            src="/image/Bali.png"
            alt="Bali"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* Right Side - Dubai (top), Paris + Italy (bottom row) */}
        <div className="flex flex-col gap-4">
          <div className="relative h-1/2">
            <img
              src="/image/unsplash_jG3I8b5iyHI.png"
              alt="Dubai"
              className="w-full h-full object-cover rounded-xl"
            />
            <span className="absolute bottom-4 left-4 text-white font-bold text-lg">
              Dubai
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4 h-40">
            <div className="relative">
              <img
                src="/image/unsplash_Hf4Ap1-ef40.png"
                alt="Paris"
                className="w-full h-full object-cover rounded-xl"
              />
              <span className="absolute bottom-2 left-4 text-white font-bold text-lg">
                Paris
              </span>
            </div>
            <div className="relative">
              <img
                src="/image/unsplash_hFXZ5cNfkOk.png"
                alt="Italy"
                className="w-full h-full object-cover rounded-xl"
              />
              <span className="absolute bottom-2 left-4 text-white font-bold text-lg">
                Italy
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent3;
