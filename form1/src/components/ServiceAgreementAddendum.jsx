import React from 'react';
import logo from '../assets/logo.png';

const ServiceAgreementAddendum = () => {
    return (
        <div className="w-full flex justify-center bg-gray-100 min-h-screen p-8 text-black font-sans">
            {/* Paper Container */}
            <div className="bg-white w-[210mm] min-h-[297mm] shadow-lg p-[20mm] relative flex flex-col items-center">

                {/* Header Section */}
                <div className="flex flex-col items-center mb-12 w-full">
                    <div className="flex items-center gap-4 mb-8">
                        {/* Logo image */}
                        <img src={logo} alt="Pacific Health Systems" className="h-20 object-contain" />
                    </div>

                    <h2 className="text-xl font-bold text-black mb-4">
                        Addendum to Service Agreement
                    </h2>
                    <p className="italic font-bold text-sm text-center max-w-lg">
                        This form should be completed when there are revisions to the original service agreement.
                    </p>
                </div>

                {/* Table Section */}
                <div className="w-full border-2 border-black">
                    {/* Table Header */}
                    <div className="grid grid-cols-4 border-b border-black font-bold text-sm">
                        <div className="border-r border-black p-2 h-full flex items-center">Specific Change to be Made</div>
                        <div className="border-r border-black p-2 h-full flex items-center">Reason for Change/Type of Service</div>
                        <div className="border-r border-black p-2 h-full flex items-center">Date Change to Begin</div>
                        <div className="p-2 h-full flex items-center">Client Acknowledgement</div>
                    </div>

                    {/* Table Rows (4 large rows as per image) */}
                    {[1, 2, 3, 4].map((row) => (
                        <div key={row} className="grid grid-cols-4 border-b border-black last:border-b-0 h-32">
                            <textarea className="border-r border-black p-2 resize-none outline-none focus:bg-blue-50 h-full w-full" />
                            <textarea className="border-r border-black p-2 resize-none outline-none focus:bg-blue-50 h-full w-full" />
                            <textarea className="border-r border-black p-2 resize-none outline-none focus:bg-blue-50 h-full w-full" />
                            <textarea className="p-2 resize-none outline-none focus:bg-blue-50 h-full w-full" />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default ServiceAgreementAddendum;
