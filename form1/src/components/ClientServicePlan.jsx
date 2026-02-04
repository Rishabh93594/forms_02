import React, { useState } from 'react';
import logo from '../assets/logo.png';

const ClientServicePlan = () => {
    const [formData, setFormData] = useState({
        name: '',
        telephone: '',
        address: '',
        city: '',
        age: '',
        diagnoses: '',
        goals: {
            independence: false,
            nutrition: false,
            hygiene: false,
            other: false,
            otherText: ''
        },
        directionsToHome: '',
        limitations: {
            unsteadyGait: false,
            hoh: false,
            impairedSpeech: false,
            rlWeakness: false,
            decreasedSensory: false,
            cognitive: false,
            incontinence: false,
            other: false
        },
        equipment: '',
        frequencyDuration: '',
        dischargePlans: {
            pc: false,
            cis: false,
            nursing: false
        },
        tasks: {
            bath: false,
            oralCare: false,
            dressing: false,
            toileting: false,
            hairCare: false,
            grooming: false,
            ambulation: false,
            transfer: false,
            positionValue: '',
            observeSkin: false,
            feeding: false,
            mealPrep: false,
            medicationReminder: false,
            prescriptions: false,
            errands: false,
            cleanRoom: false,
            laundry: false,
            vacuum: false,
            sweepMop: false,
            removeTrash: false,
            washDishes: false,
            billPaying: false,
            other: false
        },
        diet: '',
        specialInstructions: '',
        extraTasks: {
            dust: false,
            cleanKitchen: false,
            mdAppointment: false,
            oversight: false,
            cleanBathroom: false,
            incontinenceCare: false,
            vitalSigns: false,
            vitalSignsRange: '',
            bloodSugar: false,
            bloodSugarRange: ''
        },
        initialPlan: {
            date: '',
            sig1: '',
            sig2: ''
        },
        updatePlan1: {
            date: '',
            sig1: '',
            sig2: ''
        },
        updatePlan2: {
            date: '',
            sig1: '',
            sig2: ''
        }
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (name.includes('.')) {
            const [parent, child] = name.split('.');
            setFormData(prev => ({
                ...prev,
                [parent]: {
                    ...prev[parent],
                    [child]: type === 'checkbox' ? checked : value
                }
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: type === 'checkbox' ? checked : value
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Client Service Plan Form Data:', formData);
        alert('Form submitted successfully!');
    };

    return (
        <form onSubmit={handleSubmit} className="w-full flex justify-center bg-gray-100 min-h-screen p-8 text-black font-sans">
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
                            <span className="font-bold mr-1">Name:</span>
                            <input name="name" value={formData.name} onChange={handleChange} className="flex-1 outline-none" />
                        </div>
                        <div className="p-1 flex">
                            <span className="font-bold mr-1">Telephone:</span>
                            <input name="telephone" value={formData.telephone} onChange={handleChange} className="flex-1 outline-none" />
                        </div>
                    </div>
                    <div className="grid grid-cols-[3fr_2fr_1fr] border-b border-black">
                        <div className="p-1 border-r border-black flex">
                            <span className="font-bold mr-1">Address:</span>
                            <input name="address" value={formData.address} onChange={handleChange} className="flex-1 outline-none" />
                        </div>
                        <div className="p-1 border-r border-black flex">
                            <span className="font-bold mr-1">City:</span>
                            <input name="city" value={formData.city} onChange={handleChange} className="flex-1 outline-none" />
                        </div>
                        <div className="p-1 flex">
                            <span className="font-bold mr-1">Age:</span>
                            <input name="age" value={formData.age} onChange={handleChange} className="flex-1 outline-none" />
                        </div>
                    </div>
                    <div className="p-1">
                        <span className="font-bold block">Client Diagnoses:</span>
                        <textarea name="diagnoses" value={formData.diagnoses} onChange={handleChange} className="w-full resize-none outline-none h-4" />
                    </div>
                </div>

                {/* Goals & Directions */}
                <div className="border border-black border-t-0 mb-1 grid grid-cols-2">
                    <div className="p-1 border-r border-black">
                        <span className="font-bold block mb-1">Client Goals:</span>
                        <div className="space-y-0.5">
                            <label className="flex items-center gap-1"><input type="checkbox" name="goals.independence" checked={formData.goals.independence} onChange={handleChange} /> Maintain optimal level of independence</label>
                            <label className="flex items-center gap-1"><input type="checkbox" name="goals.nutrition" checked={formData.goals.nutrition} onChange={handleChange} /> Proper Nutrition</label>
                            <label className="flex items-center gap-1"><input type="checkbox" name="goals.hygiene" checked={formData.goals.hygiene} onChange={handleChange} /> Personal Hygiene</label>
                            <label className="flex items-center gap-1"><input type="checkbox" name="goals.other" checked={formData.goals.other} onChange={handleChange} /> Other: <input name="goals.otherText" value={formData.goals.otherText} onChange={handleChange} className="border-b border-black w-24 outline-none" /></label>
                        </div>
                    </div>
                    <div className="p-1">
                        <span className="font-bold block">Directions to Home:</span>
                        <textarea name="directionsToHome" value={formData.directionsToHome} onChange={handleChange} className="w-full resize-none outline-none h-[64px]" />
                    </div>
                </div>

                {/* Functional Limitations */}
                <div className="border border-black border-t-0 p-1 mb-1">
                    <span className="font-bold mr-1">Functional Limitations:</span>
                    <div className="inline-flex gap-2 flex-wrap">
                        <label className="flex items-center gap-1"><input type="checkbox" name="limitations.unsteadyGait" checked={formData.limitations.unsteadyGait} onChange={handleChange} /> Unsteady gait</label>
                        <label className="flex items-center gap-1"><input type="checkbox" name="limitations.hoh" checked={formData.limitations.hoh} onChange={handleChange} /> HOH</label>
                        <label className="flex items-center gap-1"><input type="checkbox" name="limitations.impairedSpeech" checked={formData.limitations.impairedSpeech} onChange={handleChange} /> Impaired Speech</label>
                        <label className="flex items-center gap-1"><input type="checkbox" name="limitations.rlWeakness" checked={formData.limitations.rlWeakness} onChange={handleChange} /> R/L sided weakness</label>
                        <label className="flex items-center gap-1"><input type="checkbox" name="limitations.decreasedSensory" checked={formData.limitations.decreasedSensory} onChange={handleChange} /> Decreased Sensory</label>
                        <label className="flex items-center gap-1"><input type="checkbox" name="limitations.cognitive" checked={formData.limitations.cognitive} onChange={handleChange} /> Cognitive</label>
                        <label className="flex items-center gap-1"><input type="checkbox" name="limitations.incontinence" checked={formData.limitations.incontinence} onChange={handleChange} /> Incontinence</label>
                        <label className="flex items-center gap-1"><input type="checkbox" name="limitations.other" checked={formData.limitations.other} onChange={handleChange} /> Other:</label>
                    </div>
                </div>

                {/* Equipment & Frequency */}
                <div className="border border-black border-t-0 p-1 mb-1 grid grid-cols-2 gap-2">
                    <div className="border-r border-black pr-1">
                        <span className="font-bold mr-1">Equipment:</span>
                        <input name="equipment" value={formData.equipment} onChange={handleChange} className="border-b border-black w-full outline-none" />
                        <div className="mt-1">
                            <span className="font-bold mr-1">Frequency and Duration of Services:</span>
                            <input name="frequencyDuration" value={formData.frequencyDuration} onChange={handleChange} className="border-b border-black flex-1 outline-none" />
                        </div>
                    </div>
                    <div>
                        <span className="font-bold mr-1">Discharge Plans: Until Services Are No Longer Needed</span>
                        <div className="flex gap-2 mt-1">
                            <label className="flex items-center gap-1"><input type="checkbox" name="dischargePlans.pc" checked={formData.dischargePlans.pc} onChange={handleChange} /> PC</label>
                            <label className="flex items-center gap-1"><input type="checkbox" name="dischargePlans.cis" checked={formData.dischargePlans.cis} onChange={handleChange} /> CIS</label>
                            <label className="flex items-center gap-1"><input type="checkbox" name="dischargePlans.nursing" checked={formData.dischargePlans.nursing} onChange={handleChange} /> Nursing</label>
                        </div>
                    </div>
                </div>

                {/* Tasks Section */}
                <div className="border border-black border-t-0 grid grid-cols-[1fr_1.5fr] flex-1 min-h-[400px]">
                    {/* Left Col - Tasks */}
                    <div className="border-r border-black p-1">
                        <div className="font-bold underline mb-1">Tasks to be Performed:</div>
                        <div className="space-y-0.5">
                            <label className="flex items-center gap-1"><input type="checkbox" name="tasks.bath" checked={formData.tasks.bath} onChange={handleChange} /> Bath</label>
                            <label className="flex items-center gap-1"><input type="checkbox" name="tasks.oralCare" checked={formData.tasks.oralCare} onChange={handleChange} /> Oral Care</label>
                            <label className="flex items-center gap-1"><input type="checkbox" name="tasks.dressing" checked={formData.tasks.dressing} onChange={handleChange} /> Dressing</label>
                            <label className="flex items-center gap-1"><input type="checkbox" name="tasks.toileting" checked={formData.tasks.toileting} onChange={handleChange} /> Toileting</label>
                            <label className="flex items-center gap-1"><input type="checkbox" name="tasks.hairCare" checked={formData.tasks.hairCare} onChange={handleChange} /> Hair Care</label>
                            <label className="flex items-center gap-1"><input type="checkbox" name="tasks.grooming" checked={formData.tasks.grooming} onChange={handleChange} /> Grooming</label>
                            <label className="flex items-center gap-1"><input type="checkbox" name="tasks.ambulation" checked={formData.tasks.ambulation} onChange={handleChange} /> Assist with ambulation</label>
                            <label className="flex items-center gap-1"><input type="checkbox" name="tasks.transfer" checked={formData.tasks.transfer} onChange={handleChange} /> Assist with transfer</label>
                            <label className="flex items-center gap-1"><input type="checkbox" name="tasks.positioning" checked={formData.tasks.positioning} onChange={handleChange} /> Position q <input name="tasks.positionValue" value={formData.tasks.positionValue} onChange={handleChange} className="w-8 border-b border-black text-center outline-none" /> hrs</label>
                            <label className="flex items-center gap-1"><input type="checkbox" name="tasks.observeSkin" checked={formData.tasks.observeSkin} onChange={handleChange} /> Observe Skin</label>
                            <label className="flex items-center gap-1"><input type="checkbox" name="tasks.feeding" checked={formData.tasks.feeding} onChange={handleChange} /> Assist with feeding</label>
                            <label className="flex items-center gap-1"><input type="checkbox" name="tasks.mealPrep" checked={formData.tasks.mealPrep} onChange={handleChange} /> Meal Prep</label>
                            <label className="flex items-center gap-1"><input type="checkbox" name="tasks.medicationReminder" checked={formData.tasks.medicationReminder} onChange={handleChange} /> Medication Reminder</label>
                            <label className="flex items-center gap-1"><input type="checkbox" name="tasks.prescriptions" checked={formData.tasks.prescriptions} onChange={handleChange} /> Pick up prescriptions</label>
                            <label className="flex items-center gap-1"><input type="checkbox" name="tasks.errands" checked={formData.tasks.errands} onChange={handleChange} /> Grocery shopping/Errands</label>
                            <label className="flex items-center gap-1"><input type="checkbox" name="tasks.cleanRoom" checked={formData.tasks.cleanRoom} onChange={handleChange} /> Clean client room/area</label>
                            <label className="flex items-center gap-1"><input type="checkbox" name="tasks.laundry" checked={formData.tasks.laundry} onChange={handleChange} /> Laundry/Change Linen</label>
                            <label className="flex items-center gap-1"><input type="checkbox" name="tasks.vacuum" checked={formData.tasks.vacuum} onChange={handleChange} /> Vacuum</label>
                            <label className="flex items-center gap-1"><input type="checkbox" name="tasks.sweepMop" checked={formData.tasks.sweepMop} onChange={handleChange} /> Sweep/Mop</label>
                            <label className="flex items-center gap-1"><input type="checkbox" name="tasks.removeTrash" checked={formData.tasks.removeTrash} onChange={handleChange} /> Remove Trash</label>
                            <label className="flex items-center gap-1"><input type="checkbox" name="tasks.washDishes" checked={formData.tasks.washDishes} onChange={handleChange} /> Wash Dishes</label>
                            <label className="flex items-center gap-1"><input type="checkbox" name="tasks.billPaying" checked={formData.tasks.billPaying} onChange={handleChange} /> Bill Paying</label>
                            <label className="flex items-center gap-1"><input type="checkbox" name="tasks.other" checked={formData.tasks.other} onChange={handleChange} /> Other:</label>
                        </div>
                        <div className="mt-2 flex">
                            <span className="font-bold mr-1">DIET:</span>
                            <input name="diet" value={formData.diet} onChange={handleChange} className="flex-1 border-b border-black outline-none" />
                        </div>
                    </div>

                    {/* Right Col - Special Instructions & More Tasks */}
                    <div className="flex flex-col">
                        <div className="p-1 flex-1 border-b border-black">
                            <div className="font-bold text-green-700 underline mb-1">Special Instructions:</div>
                            <textarea name="specialInstructions" value={formData.specialInstructions} onChange={handleChange} className="w-full h-full resize-none outline-none border border-green-200 focus:border-green-500 rounded p-1" />
                        </div>
                        <div className="p-1 space-y-0.5">
                            <label className="flex items-center gap-1"><input type="checkbox" name="extraTasks.dust" checked={formData.extraTasks.dust} onChange={handleChange} /> Dust</label>
                            <label className="flex items-center gap-1"><input type="checkbox" name="extraTasks.cleanKitchen" checked={formData.extraTasks.cleanKitchen} onChange={handleChange} /> Clean kitchen</label>
                            <label className="flex items-center gap-1"><input type="checkbox" name="extraTasks.mdAppointment" checked={formData.extraTasks.mdAppointment} onChange={handleChange} /> Accompany to MD appointment</label>
                            <label className="flex items-center gap-1"><input type="checkbox" name="extraTasks.oversight" checked={formData.extraTasks.oversight} onChange={handleChange} /> Provide watchful oversight</label>
                            <label className="flex items-center gap-1"><input type="checkbox" name="extraTasks.cleanBathroom" checked={formData.extraTasks.cleanBathroom} onChange={handleChange} /> Clean Bathroom</label>
                            <label className="flex items-center gap-1"><input type="checkbox" name="extraTasks.incontinenceCare" checked={formData.extraTasks.incontinenceCare} onChange={handleChange} /> Incontinence Care</label>
                            <div className="flex items-center gap-1 pl-4">
                                <label className="flex items-center gap-1"><input type="checkbox" name="extraTasks.vitalSigns" checked={formData.extraTasks.vitalSigns} onChange={handleChange} /> Vital Signs (Range):</label>
                                <input name="extraTasks.vitalSignsRange" value={formData.extraTasks.vitalSignsRange} onChange={handleChange} className="w-16 border-b border-black outline-none" />
                            </div>
                            <div className="flex items-center gap-1 pl-4">
                                <label className="flex items-center gap-1"><input type="checkbox" name="extraTasks.bloodSugar" checked={formData.extraTasks.bloodSugar} onChange={handleChange} /> Blood Sugar (Range):</label>
                                <input name="extraTasks.bloodSugarRange" value={formData.extraTasks.bloodSugarRange} onChange={handleChange} className="w-16 border-b border-black outline-none" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Signatures */}
                <div className="border border-black border-t-0 p-1">
                    <div className="grid grid-cols-[100px_1fr_1fr] gap-2 items-center mb-1">
                        <div className="font-bold mr-1 flex items-end">Init Plan Date: <input name="initialPlan.date" value={formData.initialPlan.date} onChange={handleChange} className="ml-1 w-full border-b border-black outline-none" /></div>
                        <div className="flex items-end">
                            <span className="whitespace-nowrap mr-1">Signature:</span>
                            <input name="initialPlan.sig1" value={formData.initialPlan.sig1} onChange={handleChange} className="w-full border-b border-black outline-none" />
                        </div>
                        <div className="flex items-end">
                            <span className="whitespace-nowrap mr-1">Signature:</span>
                            <input name="initialPlan.sig2" value={formData.initialPlan.sig2} onChange={handleChange} className="w-full border-b border-black outline-none" />
                        </div>
                    </div>
                    <div className="grid grid-cols-[100px_1fr_1fr] gap-2 items-center mb-1">
                        <div className="font-bold mr-1 flex items-end">Update Plan: <input name="updatePlan1.date" value={formData.updatePlan1.date} onChange={handleChange} className="ml-1 w-full border-b border-black outline-none" /></div>
                        <div className="flex items-end">
                            <span className="whitespace-nowrap mr-1">Signature:</span>
                            <input name="updatePlan1.sig1" value={formData.updatePlan1.sig1} onChange={handleChange} className="w-full border-b border-black outline-none" />
                        </div>
                        <div className="flex items-end">
                            <span className="whitespace-nowrap mr-1">Signature:</span>
                            <input name="updatePlan1.sig2" value={formData.updatePlan1.sig2} onChange={handleChange} className="w-full border-b border-black outline-none" />
                        </div>
                    </div>
                    <div className="grid grid-cols-[100px_1fr_1fr] gap-2 items-center">
                        <div className="font-bold mr-1 flex items-end">Update Plan: <input name="updatePlan2.date" value={formData.updatePlan2.date} onChange={handleChange} className="ml-1 w-full border-b border-black outline-none" /></div>
                        <div className="flex items-end">
                            <span className="whitespace-nowrap mr-1">Signature:</span>
                            <input name="updatePlan2.sig1" value={formData.updatePlan2.sig1} onChange={handleChange} className="w-full border-b border-black outline-none" />
                        </div>
                        <div className="flex items-end">
                            <span className="whitespace-nowrap mr-1">Signature:</span>
                            <input name="updatePlan2.sig2" value={formData.updatePlan2.sig2} onChange={handleChange} className="w-full border-b border-black outline-none" />
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center mt-6">
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-colors duration-200"
                    >
                        Submit Form
                    </button>
                </div>

            </div>
        </form>
    );
};

export default ClientServicePlan;
