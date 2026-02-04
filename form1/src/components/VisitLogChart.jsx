import React from 'react';
import logo from '../assets/logo.png';

const VisitLogChart = () => {
    // Create an array for the rows to render
    const rows = Array.from({ length: 25 });

    return (
        <div className="w-full flex justify-center bg-gray-100 min-h-screen p-8 text-black">
            {/* Paper Container */}
            <div className="bg-white w-[210mm] min-h-[297mm] shadow-lg p-[20mm] relative">

                {/* Header Section */}
                <div className="flex flex-col items-center mb-8">
                    <div className="flex items-center gap-4 mb-2">
                        {/* Logo image */}
                        <img src={logo} alt="Pacific Health Systems" className="h-20 object-contain" />
                    </div>

                    <h2 className="text-xl font-bold uppercase mt-6 mb-2 text-black border-b-2 border-transparent">
                        Visit Log Chart
                    </h2>
                </div>

                {/* Table Section */}
                <div className="w-full border-2 border-black">
                    {/* Table Header */}
                    <div className="grid grid-cols-12 border-b border-black font-bold text-center text-sm">
                        <div className="col-span-2 border-r border-black p-1">Date</div>
                        <div className="col-span-4 border-r border-black p-1">Name</div>
                        <div className="col-span-2 border-r border-black p-1">Title</div>
                        <div className="col-span-4 p-1">Purpose of Visit</div>
                    </div>

                    {/* Table Rows */}
                    {rows.map((_, index) => (
                        <div key={index} className="grid grid-cols-12 border-b border-black text-sm h-8">
                            <input className="col-span-2 border-r border-black p-1 focus:bg-blue-50 outline-none h-full w-full" type="text" />
                            <input className="col-span-4 border-r border-black p-1 focus:bg-blue-50 outline-none h-full w-full" type="text" />
                            <input className="col-span-2 border-r border-black p-1 focus:bg-blue-50 outline-none h-full w-full" type="text" />
                            <input className="col-span-4 p-1 focus:bg-blue-50 outline-none h-full w-full" type="text" />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default VisitLogChart;
