
import React from 'react';
import { Star } from 'lucide-react';

const StarRating: React.FC<{ count?: number }> = ({ count = 5 }) => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={14}
        className={`${i < count ? 'fill-[#00B67A] text-[#00B67A]' : 'fill-gray-200 text-gray-200'}`}
      />
    ))}
  </div>
);

const BrandRating: React.FC<{
  icon: React.ReactNode;
  name: string;
  rating: string;
  reviews: string;
  stars?: number;
}> = ({ icon, name, rating, reviews, stars = 5 }) => (
  <div className="flex items-center gap-3 px-4 py-2 border-r border-gray-100 last:border-0 min-w-[200px]">
    <div className="shrink-0">
      {icon}
    </div>
    <div className="flex flex-col">
      <span className="text-[10px] font-medium text-gray-500 uppercase tracking-wide">{name}</span>
      <div className="flex items-center gap-2">
        <span className="text-lg font-black text-[#1D1D1B]">{rating}</span>
        <StarRating count={stars} />
      </div>
      <span className="text-[10px] text-gray-400 font-medium">{reviews} reviews</span>
    </div>
  </div>
);

export const ReviewBar: React.FC = () => {
  return (
    <div className="relative z-30 py-12 px-4 md:px-8 bg-[#F4F6F8]">
      <div className="max-w-[1400px] mx-auto">
        <div className="bg-white rounded-full shadow-sm border border-gray-200 p-3 md:p-4 overflow-x-auto scrollbar-hide">
          <div className="flex items-center justify-between min-w-max gap-6 md:gap-0">

            {/* Total Rating */}
            <div className="flex items-center gap-4 px-4 md:pr-12">
              <div className="w-14 h-14 rounded-full bg-[#00B67A] flex items-center justify-center text-white font-black text-xl shadow-lg shadow-green-500/30">
                A+
              </div>
              <div>
                <div className="text-xs font-bold text-gray-500 uppercase">Total Rating</div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-[900] text-[#1D1D1B]">5.0</span>
                  <StarRating />
                </div>
                <div className="text-xs text-gray-400 font-medium">Based on 2,500+ reviews</div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-10 w-px bg-gray-200 hidden md:block"></div>

            {/* Google */}
            <BrandRating
              name="Google Rating"
              rating="4.9"
              reviews="1,908+"
              icon={
                <svg viewBox="0 0 24 24" className="w-10 h-10">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.21z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
              }
            />

            {/* Facebook */}
            <BrandRating
              name="Facebook Rating"
              rating="4.9"
              reviews="274+"
              icon={
                <svg viewBox="0 0 24 24" className="w-10 h-10">
                  <circle cx="12" cy="12" r="12" fill="#1877F2" />
                  <path d="M15.84 12H13v7.84h-3.07V12H8.24v-2.82h1.69V7.66c0-1.96 1.07-3.16 3.46-3.16.87 0 1.93.08 1.93.08v2.33h-1.39c-.87 0-1.24.61-1.24 1.36v.91h2.45l-.3 2.82z" fill="white" />
                </svg>
              }
            />

            {/* Yelp */}
            <BrandRating
              name="Yelp Rating"
              rating="4.9"
              reviews="137+"
              icon={
                <svg viewBox="0 0 24 24" className="w-10 h-10">
                  <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z" fill="#D32323" className="opacity-0" />
                  <path d="M11.08 12.85l-.53 2.5c-.22 1.04.53 1.67 1.17 1.47l2.22-.69c.49-.15.67-.67.49-1.17l-2.4-6.77c-.21-.58-1.01-.48-1.09.12l-.25 2.04c-.06.48.12.96.39 1.32l.25 1.18zm3.68-2.26l2.09 1.44c.87.6.96 1.6.22 1.99l-2.06 1.08c-.47.24-.98-.07-1.04-.56l-.52-4.12c-.08-.6.54-1.03 1.04-.71l.27 1.88zm-2.17 6.2l.52 2.5c.22 1.04-.8 1.56-1.38 1.01l-1.67-1.58c-.38-.36-.28-.95.19-1.18l6.13-3.01c.53-.26.92.54.42.84l-1.82 1.11-2.39.31zm-4.04-3.62l-2.09-1.44c-.87-.6-.47-1.8.53-1.77l2.31.07c.53.02.87.51.7 1.01l-2.26 6.54c-.2.57-1.04.45-1.05-.16l.07-1.9.2-2.35zm-1.02-6.91l1.67 1.58c.38.36.97.13 1.04-.38l.47-2.29c.11-.5-.36-.93-.85-.79L3.78 6.76c-.56.16-.63 1.01-.09 1.37l2.23 1.53 1.65-1.2z" fill="#D32323" />
                </svg>
              }
            />

            {/* Angi */}
            <BrandRating
              name="Angi Rating"
              rating="4.8"
              reviews="500+"
              icon={
                <div className="w-10 h-10 rounded-full bg-[#00B67A] flex items-center justify-center shadow-sm">
                  <span className="text-white font-[900] text-lg tracking-tighter">ang</span>
                </div>
              }
            />

          </div>
        </div>
      </div>
    </div>
  );
};
