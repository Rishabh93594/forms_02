import React from 'react';
import logo from '../assets/logo.png';

const ClientServicePlan = () => {
    return (
        <div className="w-full flex justify-center bg-gray-100 min-h-screen p-8 text-black font-sans">
            {/* Paper Container */}
            <div className="bg-white w-[210mm] min-h-[297mm] shadow-lg p-[20mm] relative flex flex-col text-[10px] leading-tight border border-gray-300">

                {/* Header Section */}
                <div className="flex flex-col items-center mb-4">
                    <div className="flex items-center gap-2 mb-2">
                        <img src={logo} alt="Pacific Health Systems" className="h-20 object-contain" />
                    </div>
                    <h2 className="text-sm font-bold">Client Service Plan</h2>
                </div>

                {/* Client Info Grid */}
                <div className="border border-black mb-1">
                    <div className="grid grid-cols-[3fr_1fr] border-b border-black">
                        <div className="p-1 border-r border-black flex">
                            <span className="font-bold mr-1">Name:</span> <input className="flex-1 outline-none" />
                        </div>
                        <div className="p-1 flex">
                            <span className="font-bold mr-1">Telephone:</span> <input className="flex-1 outline-none" />
                        </div>
                    </div>
                    <div className="grid grid-cols-[3fr_2fr_1fr] border-b border-black">
                        <div className="p-1 border-r border-black flex">
                            <span className="font-bold mr-1">Address:</span> <input className="flex-1 outline-none" />
                        </div>
                        <div className="p-1 border-r border-black flex">
                            <span className="font-bold mr-1">City:</span> <input className="flex-1 outline-none" />
                        </div>
                        <div className="p-1 flex">
                            <span className="font-bold mr-1">Age:</span> <input className="flex-1 outline-none" />
                        </div>
                    </div>
                    <div className="p-1">
                        <span className="font-bold block">Client Diagnoses:</span>
                        <textarea className="w-full resize-none outline-none h-4" />
                    </div>
                </div>

                {/* Goals & Directions */}
                <div className="border border-black border-t-0 mb-1 grid grid-cols-2">
                    <div className="p-1 border-r border-black">
                        <span className="font-bold block mb-1">Client Goals:</span>
                        <div className="space-y-0.5">
                            <label className="flex items-center gap-1"><input type="checkbox" /> Maintain optimal level of independence</label>
                            <label className="flex items-center gap-1"><input type="checkbox" /> Proper Nutrition</label>
                            <label className="flex items-center gap-1"><input type="checkbox" /> Personal Hygiene</label>
                            <label className="flex items-center gap-1"><input type="checkbox" /> Other: <input className="border-b border-black w-24 outline-none" /></label>
                        </div>
                    </div>
                    <div className="p-1">
                        <span className="font-bold block">Directions to Home:</span>
                        <textarea className="w-full resize-none outline-none h-full" />
                    </div>
                </div>

                {/* Functional Limitations */}
                <div className="border border-black border-t-0 p-1 mb-1">
                    <span className="font-bold mr-1">Functional Limitations:</span>
                    <div className="inline-flex gap-2 flex-wrap">
                        <label className="flex items-center gap-1"><input type="checkbox" /> Unsteady gait</label>
                        <label className="flex items-center gap-1"><input type="checkbox" /> HOH</label>
                        <label className="flex items-center gap-1"><input type="checkbox" /> Impaired Speech</label>
                        <label className="flex items-center gap-1"><input type="checkbox" /> R/L sided weakness</label>
                        <label className="flex items-center gap-1"><input type="checkbox" /> Decreased Sensory</label>
                        <label className="flex items-center gap-1"><input type="checkbox" /> Cognitive</label>
                        <label className="flex items-center gap-1"><input type="checkbox" /> Incontinence</label>
                        <label className="flex items-center gap-1"><input type="checkbox" /> Other:</label>
                    </div>
                </div>

                {/* Equipment & Frequency */}
                <div className="border border-black border-t-0 p-1 mb-1 grid grid-cols-2 gap-2">
                    <div className="border-r border-black pr-1">
                        <span className="font-bold mr-1">Equipment:</span>
                        <input className="border-b border-black w-full outline-none" />
                        <div className="mt-1">
                            <span className="font-bold mr-1">Frequency and Duration of Services:</span>
                            <input className="border-b border-black flex-1 outline-none" />
                        </div>
                    </div>
                    <div>
                        <span className="font-bold mr-1">Discharge Plans: Until Services Are No Longer Needed</span>
                        <div className="flex gap-2 mt-1">
                            <label className="flex items-center gap-1"><input type="checkbox" /> PC</label>
                            <label className="flex items-center gap-1"><input type="checkbox" /> CIS</label>
                            <label className="flex items-center gap-1"><input type="checkbox" /> Nursing</label>
                        </div>
                    </div>
                </div>

                {/* Tasks Section */}
                <div className="border border-black border-t-0 grid grid-cols-[1fr_1.5fr] flex-1">
                    {/* Left Col - Tasks */}
                    <div className="border-r border-black p-1">
                        <div className="font-bold underline mb-1">Tasks to be Performed:</div>
                        <div className="space-y-0.5">
                            <label className="flex items-center gap-1"><input type="checkbox" /> Bath</label>
                            <label className="flex items-center gap-1"><input type="checkbox" /> Oral Care</label>
                            <label className="flex items-center gap-1"><input type="checkbox" /> Dressing</label>
                            <label className="flex items-center gap-1"><input type="checkbox" /> Toileting</label>
                            <label className="flex items-center gap-1"><input type="checkbox" /> Hair Care</label>
                            <label className="flex items-center gap-1"><input type="checkbox" /> Grooming</label>
                            <label className="flex items-center gap-1"><input type="checkbox" /> Assist with ambulation</label>
                            <label className="flex items-center gap-1"><input type="checkbox" /> Assist with transfer</label>
                            <label className="flex items-center gap-1"><input type="checkbox" /> Position q <input className="w-8 border-b border-black text-center" /> hrs</label>
                            <label className="flex items-center gap-1"><input type="checkbox" /> Observe Skin</label>
                            <label className="flex items-center gap-1"><input type="checkbox" /> Assist with feeding</label>
                            <label className="flex items-center gap-1"><input type="checkbox" /> Meal Prep</label>
                            <label className="flex items-center gap-1"><input type="checkbox" /> Medication Reminder</label>
                            <label className="flex items-center gap-1"><input type="checkbox" /> Pick up prescriptions</label>
                            <label className="flex items-center gap-1"><input type="checkbox" /> Grocery shopping/Errands</label>
                            <label className="flex items-center gap-1"><input type="checkbox" /> Clean client room/area</label>
                            <label className="flex items-center gap-1"><input type="checkbox" /> Laundry/Change Linen</label>
                            <label className="flex items-center gap-1"><input type="checkbox" /> Vacuum</label>
                            <label className="flex items-center gap-1"><input type="checkbox" /> Sweep/Mop</label>
                            <label className="flex items-center gap-1"><input type="checkbox" /> Remove Trash</label>
                            <label className="flex items-center gap-1"><input type="checkbox" /> Wash Dishes</label>
                            <label className="flex items-center gap-1"><input type="checkbox" /> Bill Paying</label>
                            <label className="flex items-center gap-1"><input type="checkbox" /> Other:</label>
                        </div>
                        <div className="mt-2 flex">
                            <span className="font-bold mr-1">DIET:</span>
                            <input className="flex-1 border-b border-black outline-none" />
                        </div>
                    </div>

                    {/* Right Col - Special Instructions & More Tasks */}
                    <div className="flex flex-col">
                        <div className="p-1 flex-1 border-b border-black">
                            <div className="font-bold text-green-700 underline mb-1">Special Instructions:</div>
                            <textarea className="w-full h-full resize-none outline-none border border-green-200 focus:border-green-500 rounded p-1" />
                        </div>
                        <div className="p-1 space-y-0.5">
                            <label className="flex items-center gap-1"><input type="checkbox" /> Dust</label>
                            <label className="flex items-center gap-1"><input type="checkbox" /> Clean kitchen</label>
                            <label className="flex items-center gap-1"><input type="checkbox" /> Accompany to MD appointment</label>
                            <label className="flex items-center gap-1"><input type="checkbox" /> Provide watchful oversight</label>
                            <label className="flex items-center gap-1"><input type="checkbox" /> Clean Bathroom</label>
                            <label className="flex items-center gap-1"><input type="checkbox" /> Incontinence Care</label>
                            <div className="flex items-center gap-1 pl-4">
                                <input type="checkbox" /> Vital Signs (Range): <input className="w-16 border-b border-black" />
                            </div>
                            <div className="flex items-center gap-1 pl-4">
                                <input type="checkbox" /> Blood Sugar (Range): <input className="w-16 border-b border-black" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Signatures */}
                <div className="border border-black border-t-0 p-1">
                    <div className="grid grid-cols-[100px_1fr_1fr] gap-2 items-center mb-1">
                        <div className="font-bold">Initial Plan Date: <input className="w-20 border-b border-black" /></div>
                        <div className="flex items-end">
                            <span className="whitespace-nowrap mr-1">Signature:</span>
                            <input className="w-full border-b border-black outline-none" />
                        </div>
                        <div className="flex items-end">
                            <span className="whitespace-nowrap mr-1">Signature:</span>
                            <input className="w-full border-b border-black outline-none" />
                        </div>
                    </div>
                    <div className="grid grid-cols-[100px_1fr_1fr] gap-2 items-center mb-1">
                        <div className="font-bold">Update Plan: <input className="w-20 border-b border-black" /></div>
                        <div className="flex items-end">
                            <span className="whitespace-nowrap mr-1">Signature:</span>
                            <input className="w-full border-b border-black outline-none" />
                        </div>
                        <div className="flex items-end">
                            <span className="whitespace-nowrap mr-1">Signature:</span>
                            <input className="w-full border-b border-black outline-none" />
                        </div>
                    </div>
                    <div className="grid grid-cols-[100px_1fr_1fr] gap-2 items-center">
                        <div className="font-bold">Update Plan: <input className="w-20 border-b border-black" /></div>
                        <div className="flex items-end">
                            <span className="whitespace-nowrap mr-1">Signature:</span>
                            <input className="w-full border-b border-black outline-none" />
                        </div>
                        <div className="flex items-end">
                            <span className="whitespace-nowrap mr-1">Signature:</span>
                            <input className="w-full border-b border-black outline-none" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ClientServicePlan;
