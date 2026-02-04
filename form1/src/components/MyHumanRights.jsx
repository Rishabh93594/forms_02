import React, { useState } from 'react';
import one from '../assets/one.jpg';
import two from '../assets/two.png';
import three from '../assets/three.jpg';
import four from '../assets/four.png';
import five from '../assets/five.jpg';
import six from '../assets/six.png';
import seven from '../assets/seven.png';
import eight from '../assets/eight.jpg';
import nine from '../assets/nine.jpg';
import ten from '../assets/ten.jpg';
import elev from '../assets/elev.jpg';
import twel from '../assets/twel.jpg';
import thirtee from '../assets/thirtee.gif';
import fourteen from '../assets/fourteen.jpg';
import fifte from '../assets/fifte.jpg';
import sixteen from '../assets/sixteen.jpg';
import sevteen from '../assets/sevteen.jpg';
import eighteen from '../assets/eighteen.jpg';
import nighteen from '../assets/nighteen.png';
import twenty from '../assets/twenty.png';
import twentyone from '../assets/twentyone.png';
import twentytwo from '../assets/twentytwo.png';

const MyHumanRights = () => {
    const rights = [
        { text: "Right to wear your own clothes. You should be able to pick the clothes you wear.", img: one },
        { text: "Right to be treated well and with respect.", img: twel },

        { text: "Right to keep personal belongings in a private place that you can get into when you want.", img: two },
        {
            text:
                "MEDICINE: You CANNOT be given medication: without a written order by a doctor, as punishment, or for staff convenience.",
            img: thirtee,
        },

        { text: "Right to meet people and take part in community activities.", img: three },
        { text: "You CANNOT be subjected to experimental research without your consent.", img: fourteen },

        {
            text:
                "Right to socialize. You have the right to have visitors and to see your friends, family, girlfriends or boyfriends every day.",
            img: four,
        },
        {
            text:
                "Right to see a doctor as soon as you need and the right to receive adequate medical treatment.",
            img: fifte,
        },

        {
            text:
                "Right to choose how and with whom you spend your free time: alone or alone with a friend.",
            img: five,
        },
        { text: "Your medical record is confidential.", img: sixteen },

        { text: "Right to exercise and have fun.", img: six },
        {
            text:
                "You CANNOT be tied or held down or be forced to be alone unless it is to protect you or someone else.",
            img: sevteen,
        },

        { text: "Right to send and receive mail that is not opened.", img: seven },
        {
            text:
                "Your things cannot be searched unless you are present or good reasons for the search are given.",
            img: eighteen,
        },

        {
            text:
                "Right to services that help you live, work and play in the most normal way possible.",
            img: eight,
        },
        {
            text:
                'Right to say "NO" to anybody trying to change the way you act by hurting you, scaring you or upsetting you.',
            img: nighteen,
        },

        { text: "Right to worship and be who you choose.", img: nine },
        { text: "Right to use the telephone to make and get calls.", img: twenty },

        { text: "Right to training and education.", img: ten },
        {
            text:
                "Right to make choices about where you live, whom you live with, and the way you spend your time and who you spend your time with.",
            img: twentyone,
        },

        { text: "Right to vote.", img: elev },
        { text: "Right to work in the community.", img: twentytwo },
    ];

    const [formData, setFormData] = useState({
        clientName: '',
        date: '',
        signature: '',
        dob: ''
    });

    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('My Human Rights Form Data:', formData);
        alert('Form submitted successfully! Check console for data.');
    };

    return (
        <div className="w-full flex justify-center bg-gray-100 min-h-screen p-8 text-black font-sans">
            <form onSubmit={handleSubmit} className="bg-white w-[210mm] min-h-[297mm] shadow-lg p-[10mm] relative flex flex-col text-[10px] leading-tight border border-gray-300">

                <h1 className="text-center font-bold text-lg mb-6">My Human Rights</h1>

                <div className="grid grid-cols-2 border-t border-l border-black">
                    {rights.map((right, index) => (
                        <div
                            key={index}
                            className="flex items-stretch min-h-[70px] border-b border-r border-black"
                        >
                            {/* IMAGE CELL */}
                            <div className="w-16 flex items-center justify-center shrink-0 overflow-hidden border-r border-black pr-1 self-stretch">
                                {right.img ? (
                                    <img
                                        src={right.img}
                                        alt={`icon-${index}`}
                                        className="max-w-full max-h-full object-contain"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gray-200" />
                                )}
                            </div>

                            {/* TEXT CELL */}
                            <div className="flex-1 text-[10px] leading-tight pl-2 py-1">
                                {right.text}
                            </div>
                        </div>
                    ))}
                </div>


                <div className="mt-8 pt-4 space-y-4 mb-6">
                    <div className="flex gap-2 items-end">
                        <span className="w-20 font-bold">Client Name:</span>
                        <input
                            className="flex-1 border-b border-black outline-none"
                            value={formData.clientName}
                            onChange={(e) => handleChange('clientName', e.target.value)}
                        />
                        <span className="w-10 text-right font-bold">Date:</span>
                        <input
                            className="w-32 border-b border-black outline-none text-center"
                            value={formData.date}
                            onChange={(e) => handleChange('date', e.target.value)}
                            placeholder="MM/DD/YYYY"
                        />
                    </div>
                    <div className="flex gap-2 items-end">
                        <span className="w-20 font-bold">Signature:</span>
                        <input
                            className="flex-1 border-b border-black outline-none"
                            value={formData.signature}
                            onChange={(e) => handleChange('signature', e.target.value)}
                        />
                        <span className="w-10 text-right font-bold">DOB:</span>
                        <input
                            className="w-32 border-b border-black outline-none text-center"
                            value={formData.dob}
                            onChange={(e) => handleChange('dob', e.target.value)}
                            placeholder="MM/DD/YYYY"
                        />
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

            </form>
        </div>
    );
};

export default MyHumanRights;
