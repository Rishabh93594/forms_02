import React from 'react';
import logo from '../assets/logo.png';

const Hipaaprivacy = () => {
    return (
        <div className="w-full flex justify-center bg-gray-100 min-h-screen p-8 text-black font-sans">
            <div className="bg-white w-[210mm] min-h-[297mm] shadow-lg p-[20mm] relative flex flex-col text-[12px] leading-relaxed border border-gray-300">

                {/* Header */}
                <div className="flex flex-col items-center mb-8">
                    <img src={logo} alt="Pacific Health Systems" className="h-16 object-contain mb-4" />
                    <div className="text-center font-bold text-lg italic">
                        HIPAA / Privacy Statement
                    </div>
                </div>

                {/* Content */}
                <div className="space-y-6 text-justify">
                    <p>
                        One of the most valuable assets of any home health agency is proprietary information about employees, clients, care plans, services, and systems. Information that is not public is considered proprietary.
                    </p>

                    <p>
                        The nature of the healthcare industry requires, by law, that client and employee information is kept confidential. Normal business operations, as well as client information, must not be discussed outside the office or with persons outside of Pacific Health Systems. All employees are responsible for protecting proprietary and confidential information from release or misuse both during employment and after termination. All staff members are informed of Pacific Health Systems policy regarding confidentiality and privacy at the time of orientation and on an on-going basis. All employees must sign a statement acknowledging receipt of the confidentiality policy. Clients and contracting agencies are also informed of Pacific Health Systems policies regarding confidentiality and disclosure of client and employee information.
                    </p>

                    <p>
                        HIPAA, the Health Insurance Portability, and Accountability Act of 1996, imposes standards for maintaining the privacy of individual identifiable information that we work with, transmit, or maintain, regardless of the form. The section of the law governing these standards is commonly known as The Privacy Rule. All employees may not disclose an individual's Protected Health Information (PHI) outside the guidelines set forth in the law.
                    </p>

                    <p>
                        Maintaining confidentiality is a serious responsibility of Pacific Health, for without clients and employees, who trust us with their sensitive information.
                    </p>

                    <p className="mt-12">
                        I <input className="border-b border-black w-64 outline-none px-2 text-center" /> has read and fully understand the policy and procedures set forth for Confidentiality and HIPAA protecting an individual's private records at Pacific Health Systems, Inc.
                    </p>
                </div>

                {/* Signatures */}
                <div className="mt-15 flex justify-between items-end">
                    <div className="w-1/2">
                        <input className="w-full border-b border-black outline-none mb-1 px-4" />
                        <div className="text-center font-bold">Client/ Representative Signature</div>
                    </div>
                    <div className="w-1/3">
                        <input className="w-full border-b border-black outline-none mb-1 px-4 text-center" />
                        <div className="text-center font-bold">Date</div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hipaaprivacy;
