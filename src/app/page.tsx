'use client';
import React from 'react';
import Card from '@/components/ui/card';
import cardData from '../../public/data/cardData.json'

export default function Home() {
  return (
    <main className="flex  md:px-[84px] md:py-[58px] px-[28px] py-[24px] justify-center  ">
      <div className="grid w-full grid-cols-3 gap-4 grid-flow-dense sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 2xl:grid-cols-7">
        {cardData.map((card, index) => (
          <div key={index} className={`col-span-${card.colNum} row-span-${card.rowNum}`}>
            <Card
              imageUrl={card.imageUrl}
              detailUrl={card.detailUrl}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
