const Footer = () => {
    return (
      <footer className=" text-black py-10 px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between">
          
          {/* Left Section - Links & Subjects */}
          <div className="flex flex-col md:flex-row gap-16">
            
            {/* Links */}
            <div>
              <h3 className="font-bold text-lg mb-3">Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">Login</a></li>
                <li><a href="#" className="hover:underline">Sign up</a></li>
                <li><a href="#" className="hover:underline">Blogs</a></li>
              </ul>
            </div>
  
            {/* Subjects */}
            <div>
              <h3 className="font-bold text-lg mb-3">Subjects</h3>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
                <li><a href="#" className="hover:underline">Chemistry</a></li>
                <li><a href="#" className="hover:underline">Business</a></li>
                <li><a href="#" className="hover:underline">Physics</a></li>
                <li><a href="#" className="hover:underline">Economics</a></li>
                <li><a href="#" className="hover:underline">Mathematics</a></li>
                <li><a href="#" className="hover:underline">Accounting</a></li>
              </ul>
            </div>
            
          </div>
  
          {/* Right Section - Privacy & Terms */}
          <div className="flex justify-center md:justify-end items-end space-x-6 mt-6 md:mt-0">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms & Conditions</a>
          </div>
          
        </div>
      </footer>
    );
  };
  
  export default Footer;
  