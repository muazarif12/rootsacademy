
export default function Testimonials() {
    const testimonials = [
        {
          text: "Sir Hamza is a commendable teacher who has helped me to perform well in chemistry by simplifying complex concepts. His classes have always been very engaging and interactive, which makes it easier to focus and learn.",
          author: "Mahnoor Faisal- Distinction (PISJES)",
          bgColor: "bg-[#fff7d6]",
          borderColor: "border-[#fdbd75]",
          country: "https://placehold.co/37x37",
          width: "w-[482px]",
          height: "h-[491px]"
        },
        {
          text: "Sir Hamza has been incredibly helpful in making chemistry easier to understand. He explains complex topics in a simple, clear way, and ensures we understand each concept before moving forward...",
          author: "Tahreem Awan - Physics, Chemistry A* - PISJES",
          bgColor: "bg-[#d8e8ff]",
          borderColor: "border-[#76a9fa]",
          country: "https://placehold.co/37x37",
          width: "w-[482px]",
          height: "h-[870px]"
        },
        {
          text: "Sir Hamza is a commendable teacher who has helped me to perform well in chemistry by simplifying complex concepts. His classes have always been very engaging and interactive, which makes it easier to focus and learn.",
          author: "Mahnoor Faisal- Distinction (PISJES)",
          bgColor: "bg-[#dcfce7]",
          borderColor: "border-[#34d399]",
          country: "https://placehold.co/37x37",
          width: "w-[482px]",
          height: "h-[491px]"
        },

          {
            text: "Sir Hamza has been incredibly helpful in making chemistry easier to understand. He explains complex topics in a simple, clear way, and ensures we understand each concept before moving forward...",
            author: "Tahreem Awan - Physics, Chemistry A* - PISJES",
            bgColor: "bg-[#d8e8ff]",
            borderColor: "border-[#76a9fa]",
            country: "https://placehold.co/37x37",
            width: "w-[482px]",
            height: "h-[870px]"
          },
          {
            text: "Sir Hamza is a commendable teacher who has helped me to perform well in chemistry by simplifying complex concepts. His classes have always been very engaging and interactive, which makes it easier to focus and learn.",
            author: "Mahnoor Faisal- Distinction (PISJES)",
            bgColor: "bg-[#dcfce7]",
            borderColor: "border-[#34d399]",
            country: "https://placehold.co/37x37",
            width: "w-[482px]",
            height: "h-[491px]"
          }, {
            text: "Sir Hamza has been incredibly helpful in making chemistry easier to understand. He explains complex topics in a simple, clear way, and ensures we understand each concept before moving forward...",
            author: "Tahreem Awan - Physics, Chemistry A* - PISJES",
            bgColor: "bg-[#d8e8ff]",
            borderColor: "border-[#76a9fa]",
            country: "https://placehold.co/37x37",
            width: "w-[482px]",
            height: "h-[870px]"
          },
        
      ];
      
  
      return (
        <div className="flex justify-center p-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`relative p-6 rounded-[27px] border ${
                  testimonial.bgColor
                } ${testimonial.borderColor} ${
                  testimonial.height
                }`}
              >
                {/* Keep existing content layout */}
                <div className="h-full flex items-center justify-center  text-[#6f541d] text-lg font-semibold font-['Inter'] px-4">
                    "{testimonial.text}"
                </div>
                <div className="absolute bottom-10 left-20 text-[#6f541d] text-lg font-bold font-['Inter']">
                  {testimonial.author}
                </div>
                <img className="w-[52px] h-[52px] absolute top-4 left-4" src="https://placehold.co/52x52" />
                <img className="w-[49px] h-[49px] absolute bottom-8 left-4 rounded-full" src={testimonial.country} />
                <img className="w-[41px] h-[49px] absolute top-4 right-4" src="https://placehold.co/41x49" />
              </div>
            ))}
          </div>
        </div>
      );
}
  
  