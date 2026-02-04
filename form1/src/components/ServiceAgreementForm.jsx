import React from 'react';
import logo from '../assets/logo.png';

const ServiceAgreementForm = () => {
    return (
        <div className="w-full flex flex-col items-center bg-gray-100 min-h-screen p-8 text-black font-sans gap-8">

            {/* PAGE 1 */}
            <div className="bg-white w-[210mm] min-h-[297mm] shadow-lg p-[20mm] relative flex flex-col text-[10px] leading-tight">

                {/* Header Section */}
                <div className="flex flex-col items-center mb-4 text-center">
                    <div className="flex items-center gap-2 mb-2">
                        <img src={logo} alt="Pacific Health Systems" className="h-16 object-contain" />
                    </div>
                    <h2 className="text-sm font-bold underline">Service Agreement Form</h2>
                    <p className="mt-2 text-[9px] text-justify max-w-xl">
                        This agreement is between Pacific Health Systems LLC (hereafter "Provider") located at 213 Corporate Center Dr, Suite 325 Stockbridge Georgia 30281.
                    </p>
                </div>

                {/* Client Info Section */}
                <div className="mb-4">
                    <div className="flex items-end mb-1">
                        <span className="w-20 font-bold">Client Name:</span>
                        <input className="flex-1 border-b border-black outline-none px-1" />
                        <input className="flex-1 border-b border-black outline-none px-1" />
                        <input className="flex-1 border-b border-black outline-none px-1" />
                    </div>
                    <div className="flex justify-between px-20 text-[8px] text-gray-500 mb-2">
                        <span>First</span><span>Middle</span><span>Last</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 border border-black p-1 mb-1">
                        <div>
                            <div className="flex">
                                <span className="w-12 font-bold">Address:</span>
                                <input className="flex-1 border-b border-black outline-none px-1" />
                            </div>
                            <div className="flex">
                                <span className="w-12 font-bold">Street:</span>
                                <input className="flex-1 border-b border-black outline-none px-1" />
                            </div>
                            <div className="flex">
                                <span className="w-12 font-bold">State:</span>
                                <input className="flex-1 border-b border-black outline-none px-1" />
                            </div>
                        </div>
                        <div>
                            <div className="flex">
                                <span className="w-12 font-bold">City:</span>
                                <input className="flex-1 border-b border-black outline-none px-1" />
                            </div>
                            <div className="flex">
                                <span className="w-12 font-bold">Zip Code:</span>
                                <input className="flex-1 border-b border-black outline-none px-1" />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 border border-black p-1">
                        <div className="flex">
                            <span className="w-20 font-bold">Referral Source:</span>
                            <input className="flex-1 border-b border-black outline-none px-1" />
                        </div>
                        <div className="flex">
                            <span className="w-20 font-bold">Referral Date:</span>
                            <input className="flex-1 border-b border-black outline-none px-1" />
                        </div>
                        <div className="flex">
                            <span className="w-20 font-bold">Initial Contact Date:</span>
                            <input className="flex-1 border-b border-black outline-none px-1" />
                        </div>
                        <div className="flex">
                            <span className="w-20 font-bold">Start Date:</span>
                            <input className="flex-1 border-b border-black outline-none px-1" />
                        </div>
                    </div>
                </div>

                {/* Provider Assurances */}
                <div className="mb-4">
                    <p className="mb-2">Provider assures the Client or Client's Representative that Provider will:</p>
                    <ol className="list-decimal ml-6 space-y-1 text-justify">
                        <li>Not discriminate or permit discrimination against any person or group of people on the grounds of age, race, sex, color, religion, national origin, disability, or client's failure to execute advance directives.</li>
                        <li>No discrimination, coerce or otherwise cause reprisal for complaints/grievance filed by the Client/Client Representative.</li>
                        <li>Provider will be able to provide In-Home Services 24 hours a day, 7 days a week, Monday through Sunday and on holidays if required by the clients on the client care plan.</li>
                        <li>Respond to questions from the Client or Client's Representative with 30 minutes after they call 678-228-8031 (Client Care Coordinator).</li>
                        <li>Hired qualified Personal Support Aides (PSA) to provide In-Home Services.</li>
                        <li>Not accept clients when Provider does not have the capacity to meet the needs of the Client.</li>
                        <li>Keep client's information confidential and will not release the client's information without the Client/ Client's Representative written consent.</li>
                    </ol>
                </div>

                {/* Services Section */}
                <div className="mb-4">
                    <h3 className="font-bold underline mb-1">Services</h3>
                    <p className="mb-1">Provider will deliver the following services and service plan:</p>
                    <div className="flex gap-4 mb-2 flex-wrap">
                        <label className="flex items-center gap-1"><input type="checkbox" /> Personal Care Service</label>
                        <label className="flex items-center gap-1"><input type="checkbox" /> Companion Sitter Services</label>
                        <label className="flex items-center gap-1"><input type="checkbox" /> Nursing Services</label>
                        <label className="flex items-center gap-1"><input type="checkbox" /> CLS</label>
                        <label className="flex items-center gap-1"><input type="checkbox" /> CAI</label>
                        <label className="flex items-center gap-1"><input type="checkbox" /> RESPITE</label>
                    </div>
                    <p className="mb-1">Please list the type of services you would need the caregiver to provide for you in your own word:</p>
                    <p className="mb-1">Description of services as stated by Client:</p>
                    <div className="border border-black h-16 mb-2"></div>

                    <div className="flex items-end">
                        <span className="whitespace-nowrap mr-2">Frequency and Duration of Services:</span>
                        <input className="flex-1 border-b border-black outline-none px-1" />
                        <span className="whitespace-nowrap mx-2">Services are:</span>
                        <input className="w-20 border-b border-black outline-none px-1" />
                    </div>
                </div>

                <div className="mt-auto text-center font-bold">1 | Page</div>
            </div>


            {/* PAGE 2 */}
            <div className="bg-white w-[210mm] min-h-[297mm] shadow-lg p-[20mm] relative flex flex-col text-[10px] leading-tight">

                <div className="mb-4 text-justify space-y-2">
                    <p>paid by reimbursement to the provider through: ☐ Medicaid ☐ Insurance ☐ Private Pay</p>
                    <div className="flex items-end">
                        <span>Charges for services (hourly or daily rate):</span>
                        <input className="w-20 border-b border-black mx-1" />
                        <span>to be billed monthly and due by the 15th of each month.</span>
                    </div>
                    <p>Client agrees and covenants that for a period of twelve (12) months following the termination of this Agreement, whether such termination is voluntary or involuntary, Client will not hire any of Company employees. If Client hires a Company employee, Client agrees to pay Company a recruitment and training fee of three thousand ($3,000.00) dollars per employee.</p>
                    <p>If Undersigned or Client wishes to interrupt or terminate the Services provided under this agreement for any reason, Undersigned agrees to give Provider at least seven (7) days advance notice, or if seven (7) days advance notice is not possible under the circumstances, to provide notice as soon as possible. However, the Client or Undersigned may cancel services at any time. Provider may terminate the Services for any reason upon twenty-four (24) hour notice to Client.</p>
                </div>

                <div className="mb-4">
                    <div className="grid grid-cols-[1fr_50px_50px] gap-2 mb-1 font-bold text-center">
                        <div className="text-left"></div>
                        <div>Yes</div>
                        <div>No</div>
                    </div>
                    <div className="grid grid-cols-[1fr_50px_50px] gap-2 mb-1 items-center">
                        <div>Authorization for access to client's personal funds for home management.</div>
                        <div className="text-center"><input type="checkbox" /></div>
                        <div className="text-center"><input type="checkbox" /></div>
                    </div>
                    <div className="grid grid-cols-[1fr_50px_50px] gap-2 mb-2 items-center">
                        <div>Authorization for access to client's personal vehicle.</div>
                        <div className="text-center"><input type="checkbox" /></div>
                        <div className="text-center"><input type="checkbox" /></div>
                    </div>
                    <p>Client has received a copy of the Bill of Rights and Responsibilities <input type="checkbox" /> <input type="checkbox" /></p>
                    <p className="mt-2">For information, questions, or complaints about services provided by Pacific Health Systems please call the Administrator @ 678-702-2474.</p>
                    <p>In the event there is a complaint or problem that we have been made aware of that cannot be resolved, you may contact Healthcare Facility Regulation Division, Health Care Section at 404-657-5856 or for information call 404-657-5700.</p>
                </div>

                <div className="mb-4">
                    <h3 className="font-bold underline mb-2">Payment of Services</h3>
                    <p className="mb-2">Source of Payment: (Please check all that apply)</p>

                    <div className="space-y-1 ml-4">
                        <div className="font-bold">☐ NOW/COMP:</div>
                        <div className="ml-4 space-y-1">
                            <label className="flex gap-2"><input type="checkbox" /> Community Living Supports (Medicaid will be billed $6.35/unit of 15-clock minute)</label>
                            <label className="flex gap-2"><input type="checkbox" /> Community Access Individual (Medicaid will be billed $7.41/unit of 15-clock minute)</label>
                            <label className="flex gap-2"><input type="checkbox" /> Respite daily Category 1: (Medicaid will be billed $153.41 daily for 8 hours or more)</label>
                            <label className="flex gap-2"><input type="checkbox" /> Respite daily Category 2: (Medicaid will be billed $169.51 daily for 8 hours or more)</label>
                            <label className="flex gap-2"><input type="checkbox" /> Respite Hourly (Medicaid will be billed $4.83/unity of 15-clock minutes)</label>
                            <div className="flex gap-4 ml-6">
                                <label className="flex gap-1"><input type="checkbox" /> Nursing Services</label>
                                <label className="flex gap-1"><input type="checkbox" /> Specialized Medical Supplies</label>
                                <label className="flex gap-1"><input type="checkbox" /> Additional Staffing</label>
                            </div>
                        </div>

                        <label className="flex gap-2 font-bold mt-2"><input type="checkbox" /> SOURCE (Medicaid will be billed $9.02/unit of 30-clock minutes)</label>

                        <label className="flex gap-2 font-bold mt-2"><input type="checkbox" /> ICWP (Medicaid will be billed $17.96/unit of 60-clock minutes)</label>

                        <label className="flex gap-2 font-bold mt-2"><input type="checkbox" /> GAPP (Medicaid will be billed $10.63/unit for RN, $37.28/Unit for LPN and $5.00/Unit for CNA. A unit is 15 minutes)</label>

                        <label className="flex gap-2 font-bold mt-2"><input type="checkbox" /> CCSP (Medicaid will be billed $4.51/unit of 15-clock)</label>

                        <label className="flex gap-2 font-bold mt-2 align-bottom">
                            <input type="checkbox" /> Private Pay @ $ <input className="w-10 border-b border-black text-center" /> /hour
                        </label>

                        <label className="flex gap-2 font-bold mt-2"><input type="checkbox" /> Structured Family Caregiving (Medicaid will be billed $90.20 per unit)</label>
                    </div>
                </div>

                <div className="mt-8">
                    <p className="mb-8">The Service Agreement will become effective and bind the Provider and the Client/ Client representative to the terms in the Service Agreement when they each sign the agreement</p>

                    <div className="flex justify-between items-end mb-4">
                        <div className="flex-1 mr-8">
                            <input className="w-full border-b border-black outline-none" />
                            <div className="text-[9px]">Client/Representative Signature</div>
                        </div>
                        <div className="w-32">
                            <input className="w-full border-b border-black outline-none" />
                            <div className="text-[9px]">Date</div>
                        </div>
                    </div>

                    <div className="flex justify-between items-end">
                        <div className="flex-1 mr-8">
                            <input className="w-full border-b border-black outline-none" />
                            <div className="text-[9px]">Agency Representative</div>
                        </div>
                        <div className="w-32">
                            <input className="w-full border-b border-black outline-none" />
                            <div className="text-[9px]">Date</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServiceAgreementForm;
