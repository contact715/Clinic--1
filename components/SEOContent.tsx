
import React from 'react';

export const SEOContent: React.FC = () => {
  return (
    <section className="py-20 bg-[#F8FAFC] border-t border-gray-200 relative z-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <div className="prose prose-sm max-w-none text-gray-500">
                <h3 className="text-[#1D1D1B] font-[900] text-xl uppercase tracking-tight mb-4">
                    Premium Appliance Repair in Los Angeles
                </h3>
                <p>
                    When your household appliances break down, you need a reliable partner who understands the urgency of the situation. 
                    <strong>Cool Doc Appliance Repair Clinic</strong> is the leading provider of high-quality diagnostic and repair services 
                    throughout the Greater Los Angeles area, including the San Fernando Valley, Beverly Hills, and Santa Monica. 
                    Since 1996, we have specialized in restoring the functionality of premium kitchen and laundry machines.
                </p>
                <p className="mt-4">
                    Our team of factory-trained technicians is equipped to handle all major brands, including 
                    <em>Sub-Zero, Wolf, Viking, Thermador, Miele, Samsung, LG, and Whirlpool</em>. Whether you are dealing with a 
                    refrigerator not cooling, a washing machine not spinning, or an oven that won't heat, our "clinic" approach ensures 
                    a precise diagnosis followed by a surgical repair using only OEM parts.
                </p>
            </div>

            <div className="prose prose-sm max-w-none text-gray-500">
                <h3 className="text-[#1D1D1B] font-[900] text-xl uppercase tracking-tight mb-4">
                    Why We Are The Top Choice
                </h3>
                <ul className="list-disc pl-5 space-y-2 marker:text-[#E30613]">
                    <li>
                        <strong>Same-Day Emergency Service:</strong> We understand that a broken freezer or leaking dishwasher is an emergency. 
                        Our dispatch system prioritizes urgent calls to get a technician to your door within hours.
                    </li>
                    <li>
                        <strong>Transparent Flat-Rate Pricing:</strong> Unlike other companies that charge by the hour, we provide a flat-rate quote 
                        for the entire job before we start. You will never be surprised by hidden fees.
                    </li>
                    <li>
                        <strong>90-Day Parts & Labor Warranty:</strong> We stand behind our craftsmanship. Every repair comes with a solid 90-day guarantee 
                        for your peace of mind.
                    </li>
                </ul>
                <p className="mt-4 text-xs font-bold uppercase tracking-wide text-[#1D1D1B]">
                    Servicing: Sherman Oaks (91403, 91423), Studio City (91604), Encino (91316, 91436), Tarzana (91356), and beyond.
                </p>
            </div>

        </div>
      </div>
    </section>
  );
};
    