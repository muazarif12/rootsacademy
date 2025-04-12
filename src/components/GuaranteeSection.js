const GuaranteeSection = () => {
    return (
        <section className=" text-center px-6 sm:px-10 md:px-20 py-16 font-['Inter_Tight']">
            <h2 className="text-[22px] sm:text-[26px] md:text-[32px] lg:text-[38px] font-semibold text-[#4D3E77] leading-[1.2] sm:leading-[1.1] tracking-normal mt-0 mb-0 max-w-[95%] sm:max-w-[90%] md:max-w-[48rem] mx-auto">
                Risk-free, 7 day money back guarantee.
            </h2>
            <p className="text-sm sm:text-base text-[#4D3E77] max-w-2xl mx-auto mb-10">
                If you’re not 100% satisfied, just let us know within 7 days of purchase and we’ll refund your full payment. No drama, no judgment — just a promise of hassle-free learning.
            </p>

            {/* Blue Free Trial Card - 22px heading */}
            <div className="bg-[#EEF3FA] border border-[#CBD6EA] rounded-md p-6 max-w-[45rem] mx-auto mb-6 flex flex-col sm:flex-row justify-between items-center text-left">
                <div className="flex-1">
                    <h3 className="text-[22px] sm:text-[24px] md:text-[26px] text-[#354B82] font-bold mb-2">A Level Free Trial</h3>
                    <p className="text-[0.85rem] leading-snug text-[#1B2D57]">
                        Curious but haven't made up your mind yet? Take a complimentary sneak peek! Get a flavour of our videos and revision guides. You won't get the whole experience BUT, it's enough to get you started with your exam prep.
                    </p>
                </div>
                <div className="flex flex-col items-center mt-4 sm:mt-0 sm:ml-6">
                    <p className="font-extrabold text-[#1B2D57] text-2xl sm:text-3xl leading-none text-center">
                        FREE
                    </p>
                    <button className="mt-3 sm:mt-4 bg-[#2e4c73] text-white text-sm sm:text-base font-semibold px-5 py-2 rounded-xl hover:bg-[#1d3a5c] transition-colors whitespace-nowrap w-auto min-w-[120px]">
                        Subscribe Now
                    </button>
                </div>
            </div>

            {/* Pink Demo CTA Card - Wider and Taller */}
            <div className="bg-[#FCE7EB] border border-[#ECA3AF] rounded-lg p-8 max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center text-left">
                <div className="flex-1">
                    <h3 className="text-[24px] sm:text-[26px] md:text-[28px] font-bold text-[#B3204D] leading-[1.2] sm:leading-[1.1] mb-3">
                        Still confused? Get in touch with us.
                    </h3>
                    <p className="text-sm sm:text-base text-[#B3204D]">
                        Get personalized support and the answers to all your questions.
                    </p>
                </div>
                <div className="flex flex-col items-end mt-6 sm:mt-0 sm:ml-8">
                    <button className="bg-[#8B3365] text-white text-base font-semibold px-6 py-2.5 rounded-lg hover:bg-[#6B254D] transition-colors">
                        Book a demo
                    </button>
                </div>
            </div>
        </section>
    );
};

export default GuaranteeSection;
