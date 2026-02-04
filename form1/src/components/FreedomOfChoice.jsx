import React, { useState } from 'react';

const FreedomOfChoice = () => {
    const [formData, setFormData] = useState({
        planningAdminName: '',
        planningAdminDate: '',
        recipientName: '',
        recipientDate: '',
        authorizedRepName: '',
        authorizedRepDate: '',
        witnessName: '',
        witnessDate: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Freedom of Choice Form Data:', formData);
        alert('Form submitted successfully!');
    };

    return (
        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center bg-gray-100 min-h-screen p-8 text-black font-sans gap-8">

            {/* Page 1: Instructions */}
            <div className="bg-white w-[210mm] min-h-[297mm] shadow-lg p-[20mm] relative flex flex-col text-[12px] leading-relaxed border border-gray-300">

                <h1 className="text-center font-bold text-sm mb-6 uppercase">
                    Comprehensive Supports Waiver Program<br />
                    FREEDOM OF CHOICE FORM INSTRUCTIONS
                </h1>

                <div className="mb-6">
                    <h2 className="font-bold underline mb-2">Purpose</h2>
                    <p className="mb-2">The intent of this form is to assure that the participants and their representatives will be:</p>
                    <ol className="list-decimal pl-8 mb-4 space-y-1">
                        <li>Informed of any alternatives available under the waiver <span className="underline">and</span></li>
                        <li>Given the choice of either institutional or home and community-based services.</li>
                    </ol>
                    <p className="textAlign-justify mb-4">
                        This process assures that recipients and their representatives can make an informed choice concerning service options. The presumption of the law is that a person may consent for him/herself. This presumption should be abandoned only when it is evident that the individual is not capable of doing so. The very nature of a diagnosed condition of an intellectual/developmental disability confirms that the individual who is diagnosed with an intellectual/developmental disability lacks capacity. The recognized reality and trend in the law is that individuals with intellectual/developmental disabilities are often neither wholly competent nor wholly incompetent. The New Options Waiver Program has chosen to involve and recognize the rights of all recipients while at the same time protecting the rights of recipients through the request of concurrent consent by recipients' authorized representatives.
                    </p>
                    <p className="textAlign-justify">
                        Whoever is selected as authorized representative must meet the three tests for effect consent: that is, he/she must be <span className="underline">competent</span>, adequately <span className="underline">informed</span> about the factors involved in the decision and be knowledgeable about the person for whom consent is sought, and <span className="underline">voluntary</span> (free from coercion or conflict of interest). The authorized representative must act based on the best interest of the person for whom his or her consent is sought. A suggested list of potential candidates for authorized representatives includes but is not limited to the following: guardian or conservator, parent, participant's spouse, adult child, adult next-of-kin, any responsible relative, and attorney(s). In the absence of an available, suitable candidate an advocate appointed by the Georgia Advocacy Office may serve as the designated representative.
                    </p>
                </div>

                <div>
                    <h2 className="font-bold underline mb-2">Process</h2>
                    <div className="space-y-4">
                        <div className="flex gap-2">
                            <span className="font-bold whitespace-nowrap">Step (1)</span>
                            <div>
                                Provide an overview of service options, noting pro's and con's related to each option: this includes inherent and potential risks, benefits, and stigmas.
                                <div className="pl-8 mt-1">
                                    <div className="flex gap-2">
                                        <span>A.)</span>
                                        <span>The content of the overview should make one reasonably familiar with service options.</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <span>B.)</span>
                                        <span>The presentation of information should be designed to match the recipient's and/or his/her representative's level of comprehension.</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <span>A)</span>
                                        <span>Evidence of participant/representative's understanding of information should be evidenced in the discussion of the same.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <span className="font-bold whitespace-nowrap">Step (2)</span>
                            <div>
                                Once information has been provided and appears to be understood, the Planning List Administrator/Support Coordinator (or designee) should verify that this information has been provided appropriately and is understood. Once verified, the form should be signed at the designated sign-off under verification statement.
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <span className="font-bold whitespace-nowrap">Step (3)</span>
                            <div>
                                Informed participant/representative chooses a service option. The informed participant/representative should sign under the appropriate statement that reflects their choice. In cases where the individual participant is a minor, and/or unable due to physical and/or mental causes to sign his/her name, and/or unable to legibly write his/her name, the participant's name should be printed, above his/her signature or mark, if any, and be initialed by the participant's authorized representative.
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="absolute bottom-8 left-[20mm] right-[20mm] flex justify-between font-bold text-xs mt-auto pt-8">
                    <span>October 1, 2015</span>
                    <span>Comprehensive Supports Waiver Program</span>
                    <span>E-2</span>
                </div>
            </div>

            {/* Page 2: Statement of Informed Consent */}
            <div className="bg-white w-[210mm] min-h-[297mm] shadow-lg p-[20mm] relative flex flex-col text-[12px] leading-relaxed border border-gray-300">

                <div className="text-center font-bold mb-6">
                    <div className="uppercase">APPENDIX E</div>
                    <div className="uppercase">Comprehensive Supports Waiver Program</div>
                    <div className="uppercase text-lg my-2">FREEDOM OF CHOICE</div>
                    <div>(Statement of Informed Consent)</div>
                </div>

                <p className="mb-4 text-justify">
                    It is the policy of the State of Georgia that services are delivered in the least restrictive manner that addresses the service needs of the individual while enhancing the promotion of social integration. Further, it is the policy of the State to recognize the recipient's full citizenship and individual dignity; providing safeguards to protect rights, health and the welfare of recipients.
                </p>

                <p className="mb-4 text-justify">
                    Based on these beliefs the State of Georgia assures that potential recipients and their authorized representative(s) will be afforded an opportunity to make an informed choice concerning services and providers.
                </p>

                <p className="mb-4 text-justify">
                    Once a recipient is determined to be likely to require the level of care provided in a SNF, ICF or ICF/ID the recipient and his/her authorized representative will be informed of any feasible alternative available under the waiver and given the choice of either institutional or home and community-based services. This choice of care is documented.
                </p>

                <p className="mb-4 text-justify">
                    Recipients may request through the regional office that a different support coordinator be assigned. Recipients have the choice of qualified providers in all areas of care and may request a change in providers through the region.
                </p>

                <p className="mb-6 text-justify">
                    The substance of the information provided will make one reasonably familiar with service options, provider options, their alternatives, and possible benefits and hazards, and the disclosure of said information is designed to be fully understood and appears to be fully understood.
                </p>

                {/* Verification Section */}
                <div className="mb-6">
                    <h3 className="font-bold underline mb-2">Verification</h3>
                    <p className="mb-4">
                        I have verified that the recipient and his/her authorized representative have been informed about their choices in the manner outlined above. The recipient has received a copy of this signed form.
                    </p>

                    <div className="flex justify-between items-end gap-4 mt-8">
                        <div className="flex-1">
                            <input
                                name="planningAdminName"
                                value={formData.planningAdminName}
                                onChange={handleChange}
                                className="w-full border-b border-black outline-none"
                            />
                            <div className="text-[10px] mt-1">Planning List Administrator/ Support Coordinator <br /> Or Authorized Designees</div>
                        </div>
                        <div className="w-1/3">
                            <input
                                name="planningAdminDate"
                                value={formData.planningAdminDate}
                                onChange={handleChange}
                                className="w-full border-b border-black outline-none"
                            />
                            <div className="text-[10px] mt-1">Date</div>
                        </div>
                    </div>
                </div>

                {/* Acceptance Section */}
                <div className="mb-6">
                    <h3 className="font-bold underline mb-2">Acceptance</h3>
                    <p className="mb-4">
                        I and/ or my authorized representative have been informed of my choices and have chosen to accept the program and providers described in the attached Individual Service Plan.
                    </p>

                    <div className="space-y-6 mt-8">
                        <div className="flex justify-between items-end gap-4">
                            <div className="flex-1">
                                <input
                                    name="recipientName"
                                    value={formData.recipientName}
                                    onChange={handleChange}
                                    className="w-full border-b border-black outline-none"
                                />
                                <div className="text-[10px] mt-1">Recipient</div>
                            </div>
                            <div className="w-1/3">
                                <input
                                    name="recipientDate"
                                    value={formData.recipientDate}
                                    onChange={handleChange}
                                    className="w-full border-b border-black outline-none"
                                />
                                <div className="text-[10px] mt-1">Date</div>
                            </div>
                        </div>

                        <div className="flex justify-between items-end gap-4">
                            <div className="flex-1">
                                <input
                                    name="authorizedRepName"
                                    value={formData.authorizedRepName}
                                    onChange={handleChange}
                                    className="w-full border-b border-black outline-none"
                                />
                                <div className="text-[10px] mt-1">Authorized Representative</div>
                            </div>
                            <div className="w-1/3">
                                <input
                                    name="authorizedRepDate"
                                    value={formData.authorizedRepDate}
                                    onChange={handleChange}
                                    className="w-full border-b border-black outline-none"
                                />
                                <div className="text-[10px] mt-1">Date</div>
                            </div>
                        </div>

                        <div className="flex justify-between items-end gap-4">
                            <div className="flex-1">
                                <input
                                    name="witnessName"
                                    value={formData.witnessName}
                                    onChange={handleChange}
                                    className="w-full border-b border-black outline-none"
                                />
                                <div className="text-[10px] mt-1">Witness</div>
                            </div>
                            <div className="w-1/3">
                                <input
                                    name="witnessDate"
                                    value={formData.witnessDate}
                                    onChange={handleChange}
                                    className="w-full border-b border-black outline-none"
                                />
                                <div className="text-[10px] mt-1">Date</div>
                            </div>
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

export default FreedomOfChoice;
