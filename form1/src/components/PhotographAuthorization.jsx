import React from 'react';
import logo from '../assets/logo.png';

const PhotographAuthorization = () => {
    return (
        <div className="w-full flex justify-center bg-gray-100 min-h-screen p-8 text-black font-sans">
            <div className="bg-white w-[210mm] min-h-[297mm] shadow-lg p-[20mm] relative flex flex-col text-[12px] leading-relaxed border border-gray-300">

                {/* Header */}
                <div className="flex flex-col items-center mb-12">
                    <div className="flex items-center gap-2 mb-4">
                        <img src={logo} alt="Pacific Health Systems" className="h-20 object-contain" />
                    </div>
                    <div className="text-center font-bold uppercase text-lg">
                        PHOTOGRAPH AUTHORIZATION
                    </div>
                </div>

                {/* Body Text */}
                <div className="space-y-6 text-justify mb-8">
                    <p>
                        I, <input className="border-b border-black w-64 outline-none px-2" />, I hereby grant Pacific Health Systems, LLC permission to use my likeness in a photograph, video, or other digital media ("photo") in their publications, including web-based publications, without payment or other consideration.
                    </p>
                    <p>
                        I understand and agree that all photos will become the property of Pacific Health Systems, LLC and can be duplicated if requested.
                    </p>
                    <p>
                        I hereby irrevocably authorize Pacific Health Systems, LLC to edit, alter, copy, exhibit, publish, or distribute these photos for any lawful purpose. In addition, I waive any right to inspect or approve the finished product wherein my likeness appears. Additionally, I waive any right to royalties or other compensation arising or related to the use of the photo.
                    </p>
                    <p>
                        I hereby hold harmless, release, and forever discharge Pacific Health Systems, LLC from all claims, demands, and causes of action which I, my heirs, representatives, executors, administrators, or any other persons acting on my behalf or on behalf of my estate have or may have by reason of this authorization.
                    </p>
                    <p className="font-bold uppercase">
                        I HAVE READ AND UNDERSTAND THE ABOVE PHOTO RELEASE. I AFFIRM THAT I HAVE OBTAINED THE REQUIRED CONSENT AS EVIDENCED BELOW.
                    </p>
                </div>

                {/* Agreement Checkboxes */}
                <div className="flex justify-center gap-24 mb-16 font-bold">
                    <label className="flex items-center gap-2 uppercase">
                        <input type="checkbox" className="w-4 h-4" /> Agree
                    </label>
                    <label className="flex items-center gap-2 uppercase">
                        <input type="checkbox" className="w-4 h-4" /> Disagree
                    </label>
                </div>

                {/* Signatures */}
                <div className="space-y-12 mt-8">
                    {/* Row 1 */}
                    <div className="flex justify-between items-end gap-16">
                        <div className="flex-1">
                            <input className="w-full border-b border-black outline-none mb-1" />
                            <div className="text-[13px] font-serif">Client/ Responsible Party (Print Name)</div>
                        </div>
                        <div className="flex items-end gap-4 w-[200px]">
                            <span className="font-serif text-[13px] mb-1">Date</span>
                            <input className="flex-1 border-b border-black outline-none mb-1" />
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="flex justify-between items-end gap-16">
                        <div className="flex-1">
                            <input className="w-full border-b border-black outline-none mb-1" />
                            <div className="text-[13px] font-serif">Client/ Responsible Party (signature)</div>
                        </div>
                        <div className="flex items-end gap-4 w-[200px]">
                            <span className="font-serif text-[13px] mb-1">Date</span>
                            <input className="flex-1 border-b border-black outline-none mb-1" />
                        </div>
                    </div>

                    {/* Row 3 */}
                    <div className="flex justify-between items-end gap-16">
                        <div className="flex-1">
                            <input className="w-full border-b border-black outline-none mb-1" />
                            <div className="text-[13px] font-serif">RN/ Care Wind Place Representative</div>
                        </div>
                        <div className="flex items-end gap-4 w-[200px]">
                            <span className="font-serif text-[13px] mb-1">Date</span>
                            <input className="flex-1 border-b border-black outline-none mb-1" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PhotographAuthorization;
