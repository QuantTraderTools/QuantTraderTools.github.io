export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">About Us</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="/about-image.png"
                alt="About Us"
                className="object-cover w-full h-full"
              />
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Our Mission
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                QuantTraderTools is dedicated to providing cutting-edge SaaS solutions that empower businesses 
                and individual clients to thrive in the digital age. Our products combines innovation with 
                reliability to deliver exceptional results at affordable prices.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 dark:bg-primary/40 flex items-center justify-center text-primary dark:text-white">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Professional Excellence</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">Committed to delivering the highest quality solutions</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 dark:bg-primary/40 flex items-center justify-center text-primary dark:text-white">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Customer Focus</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">Ease of use, cost effectiveness and customer satisfaction are our primary goals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 