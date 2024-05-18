"use client"
import React from 'react'
import { Card, CardContent } from './ui/card';
import Image from 'next/image';


// this data should come through props or make a context to store and use different filters here
const dummyData = [
    {
      imageSrc: 'https://via.placeholder.com/200',
      description: 'This is a description for the first card.',
      href: 'https://example.com/card-1',
    },
    {
      imageSrc: 'https://via.placeholder.com/200',
      description: 'This is a description for the second card.',
      href: 'https://example.com/card-2',
    },
    {
      imageSrc: 'https://via.placeholder.com/200',
      description: 'This is a description for the third card.',
      href: 'https://example.com/card-3',
    },
  ];

export default function SearchCards() {

  return (
    <div className="search-cards grid grid-cols-1 md:grid-cols-4 gap-12">
    {dummyData?.map((card) => (
      <Card key={card.href} className="search-card w-full" >
        <a href={card.href}>
          <Image src={card.imageSrc} alt="Card image" className="card-img-top w-full" height={200} width={200} />
        </a>
        <CardContent>
          <p>{card.description}</p>
        </CardContent>
      </Card>
    ))}
  </div>
  )
}
