import React from "react";
import Lingaraj from "../../assets/AboutBhubaneswar/aboutbbsr.jpg";
import puriTemple from "../../assets/AboutBhubaneswar/puriTemple.jpg";
import cuttackCity from "../../assets/AboutBhubaneswar/cuttackCity.jpg";
function AboutBhubaneswar() {
  return (
    <div>
      <div className=" w-full h-full pb-16 grid gap-8 lg:grid-cols-2 px-12 md:px-16 pt-32">
        <div>
          <img className="object-cover" src={Lingaraj} alt="" />
        </div>
        <div className="flex flex-col">
          <p className="pb-4 text-[#397e25] font-extrabold border-[#397e25]">
            Welcome to Bhubaneswar
          </p>
          <h1 className="pb-4 text-3xl md:text-5xl font-extrabold text-black">
            BHUBANESEWAR <span className=" text-[#397e25] ">CITY</span>
          </h1>
          <div className="flex flex-row space-x-2 ">
            <div className="border-[1.5px] h-[95%] rounded-lg border-[#397e25]"></div>
            <p className="py-1 text-black">
              Nestled in the heart of Odisha, Bhubaneswar seamlessly blends
              ancient heritage with modern vitality. The awe-inspiring Lingaraj
              Temple, a marvel of 11th-century Kalinga architecture, stands as
              the city's spiritual centerpiece. Often dubbed the "Temple City of
              India," Bhubaneswar harmoniously combines historical richness with
              contemporary vibrancy. Explore the city's cultural tapestry, from
              the sacred tranquility of Lingaraj Temple to the bustling markets
              and evolving tech hubs. Bhubaneswar beckons as a captivating
              destination where tradition and progress converge, offering a
              dynamic experience for all who visit. Wander through enchanting
              streets, where the ancient Khandagiri and Udayagiri caves reveal
              centuries past. Bhubaneswar invites you to immerse yourself in its
              rich cultural tapestry, promising a journey where history,
              spirituality, and modernity seamlessly intertwine, creating an
              unforgettable experience.
            </p>
          </div>
        </div>
      </div>

      <div className=" w-full h-full pb-16 grid items-center justify-center gap-8 lg:grid-cols-2 px-12 md:px-16 pt-32">
        <div>
          <img src={puriTemple} alt="" />
        </div>
        <div className="flex flex-col">
          <p className="pb-4 text-[#397e25] font-extrabold border-[#397e25]">
            Sri Jagannatha Dhama
          </p>
          <h1 className="pb-4 text-3xl md:text-5xl font-extrabold text-black">
            PURI <span className=" text-[#397e25] ">CITY</span>
          </h1>
          <div className="flex flex-row space-x-2 ">
            <div className="border-[1.5px] h-[95%] rounded-lg border-[#397e25]"></div>
            <p className="py-1 text-black">
              Located along the sun-kissed shores of the Bay of Bengal, Puri
              beckons travelers to experience a perfect blend of spirituality
              and seaside serenity. Renowned for the sacred Jagannath Temple,
              Puri holds a unique place in the hearts of devotees and explorers
              alike. The temple, dedicated to Lord Jagannath, is a marvel of
              Odishan architecture, drawing pilgrims from far and wide. Beyond
              its spiritual allure, Puri's pristine beaches, such as the Golden
              Beach, offer a tranquil escape, where the rhythmic waves and
              golden sands create a picturesque backdrop. Explore the bustling
              Puri Market, savor local delicacies, and witness the vibrant
              culture that defines this coastal town. Puri beckons with a
              harmonious tapestry of tradition, natural beauty, and coastal
              charm, promising a rejuvenating experience for those who venture
              to its shores.
            </p>
          </div>
        </div>
      </div>

      <div className=" w-full items-center justify-center h-full pb-16 grid gap-8 lg:grid-cols-2 px-12 md:px-16 pt-32">
        <div>
          <img src={cuttackCity} alt="" />
        </div>
        <div className="flex flex-col">
          <p className="pb-4 text-[#397e25] font-extrabold border-[#397e25]">
            Silver City
          </p>
          <h1 className="pb-4 text-3xl md:text-5xl font-extrabold text-black">
            CUTTACK <span className=" text-[#397e25] ">CITY</span>
          </h1>
          <div className="flex flex-row space-x-2 ">
            <div className="border-[1.5px] h-[95%] rounded-lg border-[#397e25]"></div>
            <p className="py-1 text-black">
              Situated on the banks of the Mahanadi River, Cuttack, the "Silver
              City," invites visitors to explore its rich tapestry of history
              and culture. Home to a myriad of ancient monuments, including the
              Barabati Fort and the Qadam-I-Rasool, Cuttack exudes an old-world
              charm. The Barabati Stadium, a modern counterpart, adds a touch of
              contemporary energy to the city. As the cultural and commercial
              hub of Odisha, Cuttack boasts vibrant markets, bustling with life
              and showcasing the city's unique craftsmanship. Stroll along the
              picturesque riverbanks, visit the Odisha Maritime Museum, and
              immerse yourself in the city's bustling atmosphere—a delightful
              blend of tradition and modernity awaits in Cuttack, making it a
              captivating destination for history enthusiasts and urban
              explorers alike.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutBhubaneswar;
