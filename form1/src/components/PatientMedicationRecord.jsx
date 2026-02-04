import React from 'react';
import logo from '../assets/logo.png';

const PatientMedicationRecord = () => {
    const rows = Array.from({ length: 20 });

    return (
        <div className="w-full flex justify-center bg-gray-100 min-h-screen p-8 text-black font-sans">
            {/* Paper Container */}
            <div className="bg-white w-[210mm] min-h-[297mm] shadow-lg p-[20mm] relative flex flex-col items-center">

                {/* Header Section */}
                <div className="flex flex-col items-center mb-8 w-full">
                    <div className="flex items-center gap-4 mb-4">
                        {/* Logo image */}
                        <img src={logo} alt="Pacific Health Systems" className="h-20 object-contain" />
                    </div>

                    <h2 className="text-xl font-bold text-black mb-6">
                        Patient Medication Record
                    </h2>
                </div>

                {/* Client Details Section */}
                <div className="w-full border border-black mb-8 text-sm">
                    <div className="flex border-b border-black">
                        <div className="w-1/3 bg-gray-100 font-bold p-1 border-r border-black">Client Name:</div>
                        <input className="w-2/3 p-1 outline-none focus:bg-blue-50" />
                    </div>
                    <div className="flex border-b border-black">
                        <div className="w-1/3 bg-gray-100 font-bold p-1 border-r border-black">Date of Birth (DOB):</div>
                        <input type="text" className="w-2/3 p-1 outline-none focus:bg-blue-50" />
                    </div>
                    <div className="flex border-b border-black">
                        <div className="w-1/3 bg-gray-100 font-bold p-1 border-r border-black">Address:</div>
                        <input className="w-2/3 p-1 outline-none focus:bg-blue-50" />
                    </div>
                    <div className="flex border-b border-black">
                        <div className="w-1/3 bg-gray-100 font-bold p-1 border-r border-black">Phone:</div>
                        <input className="w-2/3 p-1 outline-none focus:bg-blue-50" />
                    </div>
                    <div className="flex border-b border-black">
                        <div className="w-1/3 bg-gray-100 font-bold p-1 border-r border-black">Allergies:</div>
                        <input className="w-2/3 p-1 outline-none focus:bg-blue-50" />
                    </div>
                    <div className="flex">
                        <div className="w-1/3 bg-gray-100 font-bold p-1 border-r border-black">Diagnosis:</div>
                        <input className="w-2/3 p-1 outline-none focus:bg-blue-50" />
                    </div>
                </div>

                {/* Medication Table Section */}
                <div className="w-full border-2 border-black">
                    {/* Table Header */}
                    <div className="grid grid-cols-4 border-b border-black font-bold text-sm bg-gray-100 font-bold text-center">
                        <div className="border-r border-black p-1">Medication/Drug</div>
                        <div className="border-r border-black p-1">Dose</div>
                        <div className="border-r border-black p-1">Route</div>
                        <div className="p-1">Frequency</div>
                    </div>

                    {/* Table Rows */}
                    {rows.map((_, index) => (
                        <div key={index} className="grid grid-cols-4 border-b border-black last:border-b-0 h-8 text-sm">
                            <input className="border-r border-black p-1 outline-none focus:bg-blue-50 h-full w-full" />
                            <input className="border-r border-black p-1 outline-none focus:bg-blue-50 h-full w-full" />
                            <input className="border-r border-black p-1 outline-none focus:bg-blue-50 h-full w-full" />
                            <input className="p-1 outline-none focus:bg-blue-50 h-full w-full" />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default PatientMedicationRecord;
