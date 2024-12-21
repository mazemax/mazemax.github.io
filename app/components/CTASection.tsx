import React, { useState, useEffect } from 'react';
import { Download, Check } from 'lucide-react';

const CTASection = () => {
    const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24-hour countdown

    // Skills list with checkmark for credibility
    const skills = [
        'AI Solutions Engineering',
        'React & Modern Frontend Development',
        'Machine Learning Integration',
        'Performance Optimization',
        'Responsive Design Expertise'
    ];

    // Countdown timer effect
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Format time remaining
    const formatTime = (seconds: number) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const handleDownloadCV = () => {
        (window as any)?.gtag('event', 'download_cta_click', {
            event_label: "Download CTA Click"
        })
        window.open('https://drive.google.com/file/d/13d3O7SWfDwRtejnPcUD8fuRkoo597puR/view?usp=sharing', '_blank');
    };

    return (
        <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-12">
            {/* Left Column: Headline & Skills */}
            <div className="w-full ml-4 md:w-1/2 text-left text-wrap">
                <div className="relative">
          <span className="absolute -top-5 -left-2 transform -rotate-6 bg-red-600 text-white px-2 py-1 text-xs font-bold tracking-wider text-shadow">
            EXCLUSIVE
          </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-shadow">
                        Solve Your Tech Challenges Now
                    </h2>
                </div>

                <div className="space-y-4 mb-6">
                    <p className="text-white mb-4 text-shadow">
                        Unlock cutting-edge development expertise with a proven track record of innovative solutions.
                    </p>

                    <div className="space-y-2">
                        {skills.map((skill, index) => (
                            <div key={index} className="flex items-center space-x-2">
                                <Check className="text-black w-5 h-5 border" />
                                <span className="text-white text-shadow">{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Column: CV Download */}
            <div className="w-full md:w-1/2 bg-white shadow-2xl rounded-xl border border-gray-100 p-6 relative overflow-hidden">
                <div className="absolute top-2 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                    Limited Availability
                </div>

                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    CV Download
                </h3>

                <div className="bg-gray-50 rounded-lg p-4 mb-4 text-center">
                    <p className="text-sm text-gray-600 mb-2">
                        Offer Expires In:
                    </p>
                    <div className="text-2xl font-mono font-bold text-red-600">
                        {formatTime(timeLeft)}
                    </div>
                </div>

                <button
                    onClick={handleDownloadCV}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-bold
                     hover:from-blue-700 hover:to-purple-700 transition-all duration-300
                     flex items-center justify-center space-x-2
                     transform hover:scale-105 active:scale-95"
                >
                    <Download className="w-5 h-5" />
                    <span>Download Exclusive CV</span>
                </button>

                <p className="text-xs text-gray-500 mt-3 text-center">
                    Don't Miss Out on Top Talent
                </p>
            </div>
        </div>
    );
};

export default CTASection;