import React from 'react';
import logo from '../assets/logo.png';

const ClientVehiclePolicy = () => {
    return (
        <div className="w-full flex justify-center bg-gray-100 min-h-screen p-8 text-black font-sans">
            {/* Paper Container */}
            <div className="bg-white w-[210mm] min-h-[297mm] shadow-lg p-[20mm] relative flex flex-col text-[12px] leading-relaxed border border-gray-300">

                {/* Header */}
                <div className="flex flex-col items-center mb-6">
                    <img src={logo} alt="Pacific Health Systems" className="h-20 object-contain mb-2" />
                    <h2 className="text-lg font-bold">Client Vehicle, Transportation & Funds Policy</h2>
                </div>

                {/* Content */}
                <div className="space-y-4">
                    <div>
                        <h3 className="font-bold underline mb-1">Policy Overview</h3>
                        <p className="text-justify">
                            Pacific Health Systems LLC is committed to ensuring the safety, dignity, and protection of all clients while minimizing risk and maintaining regulatory compliance. This policy establishes clear rules regarding transportation and the handling of client funds.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold underline mb-1">Client Vehicle & Transportation Policy</h3>
                        <p className="text-justify mb-2">
                            Pacific Health Systems LLC strictly prohibits any employee, contractor, or affiliated personnel from operating, using, or driving any vehicle owned, leased, or provided by a client under any circumstances.
                        </p>
                        <p>This includes:</p>
                        <ul className="list-disc pl-5 mb-2">
                            <li>Standard vehicles</li>
                            <li>Specialized or adaptive vehicles</li>
                            <li>Medically modified vehicles</li>
                        </ul>
                        <p className="mb-2">
                            Staff are not permitted to drive clients or operate client-owned vehicles for any reason, regardless of:
                        </p>
                        <ul className="list-disc pl-5 mb-2">
                            <li>The purpose of the trip</li>
                            <li>The client's physical or medical condition</li>
                            <li>The service being provided</li>
                        </ul>
                        <p className="font-bold">This rule applies to all programs, staff roles, and service settings.</p>
                    </div>

                    <div>
                        <h3 className="font-bold underline mb-1">Approved Transportation Methods</h3>
                        <p className="text-justify mb-2">
                            When transportation is required as part of a client's authorized services, Pacific Health Systems LLC will arrange transportation through approved third-party providers such as:
                        </p>
                        <ul className="list-disc pl-5 mb-2">
                            <li>Non-Emergency Medical Transportation (NEMT)</li>
                            <li>Licensed medical transportation vendors</li>
                            <li>Public transportation (where appropriate)</li>
                            <li>Program-approved rideshare services (e.g., Uber Health, Lyft Healthcare)</li>
                        </ul>
                        <p className="font-bold">
                            Staff shall not personally transport clients or operate any vehicle for client transportation purposes.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold underline mb-1">Prohibited Conduct</h3>
                        <p className="mb-2">Under no circumstances shall staff or contractors:</p>
                        <ul className="list-disc pl-5 mb-2">
                            <li>Drive a client in any vehicle</li>
                            <li>Operate a client-owned vehicle</li>
                            <li>Arrange unauthorized transportation</li>
                            <li>Accept requests from clients or families for personal transport</li>
                        </ul>
                        <p>
                            Violations may result in disciplinary action, up to and including termination and personal liability.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold underline mb-1">Client Funds Policy</h3>
                        <p className="mb-2">
                            Pacific Health Systems LLC does not manage, handle, or use client funds under any circumstances.
                        </p>
                        <p className="mb-1">Employees and contractors are strictly prohibited from:</p>
                        <ul className="list-disc pl-5 mb-2">
                            <li>Holding client money</li>
                            <li>Making purchases on behalf of clients using client funds</li>
                            <li>Managing financial transactions for clients</li>
                        </ul>
                        <p className="font-bold">
                            All financial matters remain the sole responsibility of the client or their legal representative.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold underline mb-2">Client Acknowledgment</h3>
                        <p className="mb-4 text-justify">
                            I acknowledge that I have received, read, and understand the Pacific Health System LLC Client Vehicle, Transportation & Funds Policy.
                            I agree to abide by this policy and understand that staff are not permitted to drive me, use my vehicle, or manage my personal funds.
                        </p>
                    </div>

                    {/* Signatures */}
                    <div className="flex justify-between mt-12 gap-8">
                        <div className="flex gap-4 w-1/2">
                            <div className="flex-grow">
                                <input className="w-full border-b border-black outline-none" />
                                <div className="text-xs font-bold italic mt-1">Client Representative Signature</div>
                            </div>
                            <div className="w-24">
                                <input className="w-full border-b border-black outline-none" />
                                <div className="text-xs font-bold italic mt-1">Date</div>
                            </div>
                        </div>
                        <div className="flex gap-4 w-1/2">
                            <div className="flex-grow">
                                <input className="w-full border-b border-black outline-none" />
                                <div className="text-xs font-bold italic mt-1">Admission Representative Signature</div>
                            </div>
                            <div className="w-24">
                                <input className="w-full border-b border-black outline-none" />
                                <div className="text-xs font-bold italic mt-1">Date</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="absolute bottom-8 left-[20mm] right-[20mm] text-center border-t border-gray-300 pt-2 text-xs text-gray-500">
                    1 | Page
                </div>

            </div>
        </div>
    );
};

export default ClientVehiclePolicy;
