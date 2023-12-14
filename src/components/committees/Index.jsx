import React from "react";

const Committees = ({ data }) => {
  const renderedData = data.map((rowData) => (
    <React.Fragment key={rowData.dept}>
      {/* Department row */}
      <tr className="border-b   dark:border-gray-700">
        <th
          scope="row"
          className=" px-2 md:px-6 py-4 font-large text-xl text-gray-900 "
        >
          {rowData.dept}
        </th>
        <td className="px-2 border-l border-black md:px-6 font-medium py-4">
          {rowData.name.map((name, index) => (
            <h1 key={index}>{name}</h1>
          ))}
        </td>
      </tr>
    </React.Fragment>
  ));

  return (
    <div>
      <div className="relative overflow-x-auto w-[80%] md:w-[70%] mx-auto mt-16 mb-16 text-black shadow-md sm:rounded-lg">
        <h1 className="font-bold text-4xl text-green-500 underline underline-offset-2">
          Organising Committee
        </h1>
        <table className=" border border-black mt-4  text-left rtl:text-right text-gray-900 ">
          <tbody>{renderedData}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Committees;
