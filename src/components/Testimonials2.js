import { FaQuoteLeft } from "react-icons/fa"; // Quote icon

export default function Testimonials() {
    const testimonials = [
        {
            text: "Sir Hamza is a commendable teacher who has helped me to perform well in chemistry by simplifying complex concepts. His classes have always been very engaging and interactive, which makes it easier to focus and learn.",
            author: "Mahnoor Faisal - Distinction (PISJES)",
            bgColor: "#fff7d6",
            borderColor: "#fdbd75",
            country: "https://placehold.co/30x30",
            width: "w-[400px]",
            height: "h-[420px]"
        },
        {
            text: "Sir Hamza has been incredibly helpful in making chemistry easier to understand. He explains complex topics in a simple, clear way, and ensures we understand each concept before moving forward...",
            author: "Tahreem Awan - Physics, Chemistry A* - PISJES",
            bgColor: "#d8e8ff",
            borderColor: "#76a9fa",
            country: "https://placehold.co/30x30",
            width: "w-[400px]",
            height: "h-[750px]"
        },
        {
            text: "Sir Hamza is a commendable teacher who has helped me to perform well in chemistry by simplifying complex concepts. His classes have always been very engaging and interactive, which makes it easier to focus and learn.",
            author: "Mahnoor Faisal - Distinction (PISJES)",
            bgColor: "#dcfce7",
            borderColor: "#34d399",
            country: "https://placehold.co/30x30",
            width: "w-[400px]",
            height: "h-[420px]"
        },  {
          text: "Sir Hamza has been incredibly helpful in making chemistry easier to understand. He explains complex topics in a simple, clear way, and ensures we understand each concept before moving forward...",
          author: "Tahreem Awan - Physics, Chemistry A* - PISJES",
          bgColor: "#d8e8ff",
          borderColor: "#76a9fa",
          country: "https://placehold.co/30x30",
          width: "w-[400px]",
          height: "h-[750px]"
      },{
        text: "Sir Hamza is a commendable teacher who has helped me to perform well in chemistry by simplifying complex concepts. His classes have always been very engaging and interactive, which makes it easier to focus and learn.",
        author: "Mahnoor Faisal - Distinction (PISJES)",
        bgColor: "#dcfce7",
        borderColor: "#34d399",
        country: "https://placehold.co/30x30",
        width: "w-[400px]",
        height: "h-[420px]"
    },  
       {
        text: "Sir Hamza has been incredibly helpful in making chemistry easier to understand. He explains complex topics in a simple, clear way, and ensures we understand each concept before moving forward...",
        author: "Tahreem Awan - Physics, Chemistry A* - PISJES",
        bgColor: "#d8e8ff",
        borderColor: "#76a9fa",
        country: "https://placehold.co/30x30",
        width: "w-[400px]",
        height: "h-[750px]"
    },
    ];

      return (
        <div className="flex justify-center p-20">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[minmax(auto,max-content)]">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                style={{ backgroundColor: testimonial.bgColor, borderColor: testimonial.borderColor }}
                className={`relative p-6 rounded-[27px] border ${testimonial.height}`}

              >
                {/* Keep existing content layout */}
                <div
                    className="h-full flex items-center justify-center text-lg font-semibold font-['Inter'] px-4"
                    style={{ color: testimonial.borderColor }}
                  >
                    "{testimonial.text}"
                  </div>

                  <div
                    className="absolute bottom-10 left-20 text-lg font-bold font-['Inter']"
                    style={{ color: testimonial.borderColor }}
                  >
                    {testimonial.author}
                  </div>
                <FaQuoteLeft className="absolute top-4 left-4 text-2xl" style={{ color: testimonial.borderColor }}/>
                <img className="w-[49px] h-[49px] absolute bottom-8 left-4 rounded-full" src={testimonial.country} alt="country" />
                <img className="w-[41px] h-[49px] absolute top-4 right-4" src="https://placehold.co/41x49" />
              </div>
            ))}
          </div>
        </div>
      );
}
  
  