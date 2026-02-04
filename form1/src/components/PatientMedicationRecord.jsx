import React, { useState } from 'react';
import logo from '../assets/logo.png';

const PatientMedicationRecord = () => {
    const rows = Array.from({ length: 20 });

    // State management for form data
    const [clientInfo, setClientInfo] = useState({
        name: '',
        dob: '',
        address: '',
        phone: '',
        allergies: '',
        diagnosis: ''
    });

    const [medications, setMedications] = useState(
        rows.map(() => ({ medication: '', dose: '', route: '', frequency: '' }))
    );

    // Handle client info changes
    const handleClientChange = (field, value) => {
        setClientInfo({ ...clientInfo, [field]: value });
    };

    // Handle medication changes
    const handleMedicationChange = (index, field, value) => {
        const updatedMeds = [...medications];
        updatedMeds[index][field] = value;
        setMedications(updatedMeds);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Patient Medication Record Data:', { clientInfo, medications });
        alert('Form submitted successfully! Check console for data.');
    };

    return (
        <div className="w-full flex justify-center bg-gray-100 min-h-screen p-8 text-black font-sans">
            {/* Paper Container */}
            <form onSubmit={handleSubmit} className="bg-white w-[210mm] min-h-[297mm] shadow-lg p-[20mm] relative flex flex-col items-center">

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
                        <input
                            className="w-2/3 p-1 outline-none focus:bg-blue-50"
                            value={clientInfo.name}
                            onChange={(e) => handleClientChange('name', e.target.value)}
                        />
                    </div>
                    <div className="flex border-b border-black">
                        <div className="w-1/3 bg-gray-100 font-bold p-1 border-r border-black">Date of Birth (DOB):</div>
                        <input
                            type="text"
                            className="w-2/3 p-1 outline-none focus:bg-blue-50"
                            value={clientInfo.dob}
                            onChange={(e) => handleClientChange('dob', e.target.value)}
                        />
                    </div>
                    <div className="flex border-b border-black">
                        <div className="w-1/3 bg-gray-100 font-bold p-1 border-r border-black">Address:</div>
                        <input
                            className="w-2/3 p-1 outline-none focus:bg-blue-50"
                            value={clientInfo.address}
                            onChange={(e) => handleClientChange('address', e.target.value)}
                        />
                    </div>
                    <div className="flex border-b border-black">
                        <div className="w-1/3 bg-gray-100 font-bold p-1 border-r border-black">Phone:</div>
                        <input
                            className="w-2/3 p-1 outline-none focus:bg-blue-50"
                            value={clientInfo.phone}
                            onChange={(e) => handleClientChange('phone', e.target.value)}
                        />
                    </div>
                    <div className="flex border-b border-black">
                        <div className="w-1/3 bg-gray-100 font-bold p-1 border-r border-black">Allergies:</div>
                        <input
                            className="w-2/3 p-1 outline-none focus:bg-blue-50"
                            value={clientInfo.allergies}
                            onChange={(e) => handleClientChange('allergies', e.target.value)}
                        />
                    </div>
                    <div className="flex">
                        <div className="w-1/3 bg-gray-100 font-bold p-1 border-r border-black">Diagnosis:</div>
                        <input
                            className="w-2/3 p-1 outline-none focus:bg-blue-50"
                            value={clientInfo.diagnosis}
                            onChange={(e) => handleClientChange('diagnosis', e.target.value)}
                        />
                    </div>
                </div>

                {/* Medication Table Section */}
                <div className="w-full border-2 border-black mb-6">
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
                            <input
                                className="border-r border-black p-1 outline-none focus:bg-blue-50 h-full w-full"
                                value={medications[index].medication}
                                onChange={(e) => handleMedicationChange(index, 'medication', e.target.value)}
                            />
                            <input
                                className="border-r border-black p-1 outline-none focus:bg-blue-50 h-full w-full"
                                value={medications[index].dose}
                                onChange={(e) => handleMedicationChange(index, 'dose', e.target.value)}
                            />
                            <input
                                className="border-r border-black p-1 outline-none focus:bg-blue-50 h-full w-full"
                                value={medications[index].route}
                                onChange={(e) => handleMedicationChange(index, 'route', e.target.value)}
                            />
                            <input
                                className="p-1 outline-none focus:bg-blue-50 h-full w-full"
                                value={medications[index].frequency}
                                onChange={(e) => handleMedicationChange(index, 'frequency', e.target.value)}
                            />
                        </div>
                    ))}
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

            </form>
        </div>
    );
};

export default PatientMedicationRecord;
