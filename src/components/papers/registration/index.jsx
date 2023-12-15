import React from "react";

const Registration = () => {
  return (
    <div class="relative my-16 text-black w-[80%] mx-auto overflow-x-auto">
      <h1 className="text-3xl my-4 font-bold">Registration Fee Details:</h1>
      <table class="w-full text-sm text-left rtl:text-right ">
        <thead class="text-xs border border-black  ">
          <tr>
            <th scope="col" class="px-2 py-3 ">
              Author/Attendee
            </th>
            <th scope="col" class="px-2 py-3"></th>

            <th scope="col" class="px-2 py-3 border border-black">
              SAARC Countries (India, Nepal, Pakistan, Bangladesh, Srilanka,
              Bhutan, Myanmar) (in rupees)
            </th>
            <th scope="col" class="px-2 py-3 border border-black">
              Other Countries (in dollars)
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b border border-black">
            <td class="px-2 py-4 border font-bold border-black" rowspan="3">
              Author:
            </td>
            <td class="px-2 py-4 border font-medium border-black">
              Student / IEEE Member
            </td>

            <td class="px-2 py-4 border border-black">7000</td>
            <td class="px-2 py-4 border border-black">200 USD</td>
          </tr>
          <tr class="bg-white border border-black ">
            <td class="px-2 py-4 border font-medium border-black">
              Non-IEEE Member
            </td>
            <td class="px-2 py-4 border border-black">8000</td>
            <td class="px-2 py-4 border border-black">250 USD</td>
          </tr>
          <tr class="bg-white border border-black ">
            <td class="px-2 py-4 border font-medium border-black">Industry</td>
            <td class="px-2 py-4 border border-black">10000</td>
            <td class="px-2 py-4 border border-black">300 USD</td>
          </tr>
          <tr class="bg-white border border-black ">
            <td class="px-2 py-4 border font-bold border-black" rowspan="3">
              Attendee:
            </td>
            <td class="px-2 py-4 border font-medium border-black">
              IEEE Member
            </td>
            <td class="px-2 py-4 border border-black">3000</td>
            <td class="px-2 py-4 border border-black">50 USD</td>
          </tr>
          <tr class="bg-white border border-black ">
            <td class="px-2 py-4 border font-medium border-black">
              Non-IEEE Member
            </td>
            <td class="px-2 py-4 border border-black">3500</td>
            <td class="px-2 py-4 border border-black">50 USD</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Registration;
