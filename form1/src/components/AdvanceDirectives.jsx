import React, { useState } from 'react';
import logo from '../assets/logo.png';

const AdvanceDirectives = () => {
    const [formData, setFormData] = useState({
        individualName: '',
        dob: '',
        initials1: '',
        initials2: '',
        initials3: '',
        checkChoice: '', // 'executed', 'notExecuted', 'additionalInfo'
        signatureIndividual: '',
        signatureWitness: '',
        dateIndividual: '',
        dateWitness: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (checked ? value : '') : value
        }));
    };

    const handleCheck = (choice) => {
        setFormData(prev => ({
            ...prev,
            checkChoice: choice
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Advance Directives Form Data:', formData);
        alert('Form submitted successfully!');
    };

    return (
        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center bg-gray-100 min-h-screen p-8 text-black font-sans gap-8">

            {/* Page 1 */}
            <div className="bg-white w-[210mm] min-h-[297mm] shadow-lg p-[20mm] relative flex flex-col text-[12px] leading-relaxed border border-gray-300">

                {/* Header */}
                <div className="flex flex-col items-center mb-8">
                    <div className="flex items-center gap-2 mb-4">
                        <img src={logo} alt="Pacific Health Systems" className="h-20 object-contain" />
                    </div>
                    <h2 className="text-center font-bold uppercase text-sm">ADVANCE DIRECTIVES</h2>
                </div>

                {/* Content */}
                <div className="space-y-4 text-justify">
                    <p>
                        Competent adults have the right to control decisions relating to their own medical care. The law has provided alternatives in writing for you so your Healthcare provider and family will know how you want to be treated in the event you are unable to tell them. These legal documents that assure your future Healthcare choices are known as Advance Directives. The two types are:
                    </p>
                    <ol className="list-decimal pl-8 space-y-1">
                        <li>The Durable Power of Attorney for Healthcare</li>
                        <li>A Living Will</li>
                    </ol>

                    <p>
                        The Durable Power of Attorney for Healthcare is a document that enables you to appoint another person, called your Agent, to make Healthcare decisions for you if you are unable, incapacitated or incompetent to do so. You do not have to be in a terminal condition to have an appointed Agent. Your Agent's authority begins when your doctor certifies that you lack the capacity to make Healthcare decisions.
                    </p>

                    <p>
                        Your Agent has the authority to make any and all Healthcare decisions for you in accordance with your wishes.
                    </p>

                    <p>
                        Healthcare means any treatment, service, or procedure to maintain, diagnose or treat your physical or mental condition. Your agent may consent, refuse to consent, or withdraw consent to medical treatment and may make decisions about withdrawing life-sustaining treatment. A physician must comply with your Agent's instructions or allow you to be transferred to another physician. Inform the person you appoint that you want him/her to be your Agent.
                    </p>

                    <p>
                        A Living Will is a type of Advance Directive. It provides a means for you to instruct your physician to withhold or withdraw life-sustaining procedures in the event of a coma; persistent vegetative state or a terminal condition.
                    </p>

                    <p>
                        A Living Will must be signed, witnessed, and dated. Both you and your physician should have a copy. A Living Will may be revoked at any time by physically destroying the document or communicating this change in decision to your physician.
                    </p>
                </div>

                {/* Footer Page 1 */}
                <div className="mt-auto pt-8">
                    <div className="flex gap-2 items-end">
                        <span>Individual's Name:</span>
                        <input
                            name="individualName"
                            value={formData.individualName}
                            onChange={handleChange}
                            className="flex-1 border-b border-black outline-none border-dashed"
                        />
                        <span>DOB</span>
                        <input
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                            className="w-48 border-b border-black outline-none border-dashed"
                        />
                    </div>
                    <div className="text-xs text-gray-500 mt-8 border-t border-gray-300 pt-2">1 | Page</div>
                </div>

            </div>

            {/* Page 2 */}
            <div className="bg-white w-[210mm] min-h-[297mm] shadow-lg p-[20mm] relative flex flex-col text-[12px] leading-relaxed border border-gray-300">

                <div className="space-y-6">
                    <div className="flex gap-4">
                        <span>1.</span>
                        <div>
                            I have been given written materials on my right to accept or refuse medical and surgical treatment and my rights to formulate advance directives.
                            <div className="flex justify-end mt-2">
                                <div className="flex items-end gap-2">
                                    <input
                                        name="initials1"
                                        value={formData.initials1}
                                        onChange={handleChange}
                                        className="w-32 border-b border-black outline-none text-center"
                                    />
                                    <span className="text-xs">(individuals' initials)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <span>2.</span>
                        <div>
                            I understand that I am not required to have an Advance Directive in order to receive medical treatment.
                            <div className="inline-flex items-end gap-2 ml-2">
                                <input
                                    name="initials2"
                                    value={formData.initials2}
                                    onChange={handleChange}
                                    className="w-32 border-b border-black outline-none text-center"
                                />
                                <span className="text-xs">(individuals' initials)</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <span>3.</span>
                        <div>
                            I understand that the terms of any Advance Directive that I execute will be followed by Pacific Health Systems PCH to the extent permitted by law and in accordance with the service's policies and procedures.
                            <div className="inline-flex items-end gap-2 ml-2">
                                <input
                                    name="initials3"
                                    value={formData.initials3}
                                    onChange={handleChange}
                                    className="w-32 border-b border-black outline-none text-center"
                                />
                                <span className="text-xs">(individuals' initials)</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 mb-8">
                    <h3 className="font-bold underline uppercase mb-4">PLEASE CHECK ONE OF THE FOLLOWING STATEMENTS</h3>

                    <div className="space-y-6">
                        <div className="flex gap-2 cursor-pointer" onClick={() => handleCheck('executed')}>
                            <div className={`w-6 h-6 border-b border-black shrink-0 flex items-center justify-center font-bold`}>
                                {formData.checkChoice === 'executed' ? 'X' : ''}
                            </div>
                            <p>
                                I have executed an Advance Directive and will provide a copy to Pacific Health Systems. I understand that the staff and physicians associated with Pacific Health Systems will not be able to follow the terms of my Advance Directive until I provide a copy to the staff.
                            </p>
                        </div>
                        <div className="flex gap-2 cursor-pointer" onClick={() => handleCheck('notExecuted')}>
                            <div className={`w-6 h-6 border-b border-black shrink-0 flex items-center justify-center font-bold`}>
                                {formData.checkChoice === 'notExecuted' ? 'X' : ''}
                            </div>
                            <p>
                                I have not executed an Advance Directive and do not wish to discuss Advance Directives further, at this time.
                            </p>
                        </div>
                        <div className="flex gap-2 cursor-pointer" onClick={() => handleCheck('additionalInfo')}>
                            <div className={`w-6 h-6 border-b border-black shrink-0 flex items-center justify-center font-bold`}>
                                {formData.checkChoice === 'additionalInfo' ? 'X' : ''}
                            </div>
                            <p>
                                I have not executed an Advance Directive but would like to obtain additional information about Advance Directives.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Signatures */}
                <div className="mt-12 space-y-12">
                    <div className="flex justify-between gap-12">
                        <div className="flex-1">
                            <input
                                name="signatureIndividual"
                                value={formData.signatureIndividual}
                                onChange={handleChange}
                                className="w-full border-b border-black outline-none mb-1"
                            />
                            <div className="text-xs font-bold">Individual/ Guardian Signature</div>
                        </div>
                        <div className="flex-1">
                            <input
                                name="signatureWitness"
                                value={formData.signatureWitness}
                                onChange={handleChange}
                                className="w-full border-b border-black outline-none mb-1"
                            />
                            <div className="text-xs font-bold">Witness</div>
                        </div>
                    </div>
                    <div className="flex justify-between gap-12">
                        <div className="flex-1">
                            <input
                                name="dateIndividual"
                                value={formData.dateIndividual}
                                onChange={handleChange}
                                className="w-full border-b border-black outline-none mb-1"
                            />
                            <div className="text-xs font-bold">Date</div>
                        </div>
                        <div className="flex-1">
                            <input
                                name="dateWitness"
                                value={formData.dateWitness}
                                onChange={handleChange}
                                className="w-full border-b border-black outline-none mb-1"
                            />
                            <div className="text-xs font-bold">Date</div>
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center mt-12">
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

export default AdvanceDirectives;
