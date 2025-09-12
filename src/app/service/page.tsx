
'use client';
import styles from '@/styles/Trident.module.css'
import HeroSection from '@/components/HeroSection'
import Image from 'next/image'
import {style} from "../career/cardStyle"
import { services } from './serviceData'

const title = 'Our Services'
const content = 'Welcome to DIGILIGHTED ENTERPRISES (DGL), your trusted partner in automotive solutions. We offer comprehensive services for buying and selling new and pre-owned vehicles, with expert inspections, secure transactions, and exceptional customer support.'


export default function Services() {
  return (
    <div>
             <style jsx>{style}</style>
      <HeroSection title={title} content={content} isContactUs={false} />
      
   <div className={styles.outer}>
  <div className={styles.benefits}>
      <h1 className="benefits-heading text-3xl md:text-4xl font-bold mb-12 text-gray-900">
      Our Top Services
    </h1>
    <div className={styles.itemcontainer}>
      
      {/* Used Car Export */}
      <div className={styles.items}>
        <div className={styles.itemimg}>
          <Image
            className={styles.benefits_image}
            src="/images/Trident/benefits/image 1082.png"
            alt="Used Car Export"
            width={100}
            height={100}
          />
        </div>
        <div className={styles.itempara}>
          <h3 className={styles.item_heading}>Used Car Export</h3>
          <p className={styles.itempara_para}>
            High-quality used cars, trucks, and buses exported directly from
            Japan to global markets.
          </p>
        </div>
      </div>

      {/* Auto Parts Supply */}
      <div className={styles.items}>
        <div className={styles.itemimg}>
          <Image
            className={styles.benefits_image}
            src="/images/Trident/benefits/image 1081.png"
            alt="Auto Parts Supply"
            width={100}
            height={100}
          />
        </div>
        <div className={styles.itempara}>
          <h3 className={styles.item_heading}>Auto Parts Supply</h3>
          <p className={styles.itempara_para}>
            Wide range of genuine and aftermarket spare parts including
            engines, tyres, and accessories.
          </p>
        </div>
      </div>

      {/* Global Shipping */}
      <div className={styles.items}>
        <div className={styles.itemimg}>
          <Image
            className={styles.benefits_image}
            src="/images/Trident/benefits/image 1084.png"
            alt="Global Shipping"
            width={100}
            height={100}
          />
        </div>
        <div className={styles.itempara}>
          <h3 className={styles.item_heading}>Global Shipping</h3>
          <p className={styles.itempara_para}>
            Fast and reliable worldwide shipping with RoRo, container, and air
            freight options.
          </p>
        </div>
      </div>

      {/* Vehicle Inspection */}
      <div className={styles.items}>
        <div className={styles.itemimg}>
          <Image
            className={styles.benefits_image}
            src="/images/Trident/benefits/image 1085.png"
            alt="Vehicle Inspection"
            width={100}
            height={100}
          />
        </div>
        <div className={styles.itempara}>
          <h3 className={styles.item_heading}>Vehicle Inspection</h3>
          <p className={styles.itempara_para}>
            Pre-shipment inspection to ensure vehicles meet quality and safety
            standards.
          </p>
        </div>
      </div>

      {/* Auction Access */}
      <div className={styles.items}>
        <div className={styles.itemimg}>
          <Image
            className={styles.benefits_image}
            src="/images/Trident/benefits/image 1080.png"
            alt="Auction Access"
            width={100}
            height={100}
          />
        </div>
        <div className={styles.itempara}>
          <h3 className={styles.item_heading}>Auction Access</h3>
          <p className={styles.itempara_para}>
            Access to Japanese car auctions with expert bidding support to get
            the best deals.
          </p>
        </div>
      </div>

      {/* Documentation & Support */}
      <div className={`${styles.items} flex flex-col sm:flex-row items-center`}>
        <div className={`${styles.itemimg} w-full sm:w-auto flex justify-center`}>
          <Image
            className={`${styles.benefits_image} w-20 h-20 sm:w-24 sm:h-24 object-contain`}
            src="/images/Trident/benefits/image 1083.png"
            alt="Documentation Support"
            width={100}
            height={100}
          />
        </div>
        
        <div className={styles.itempara}>
          <h3 className={styles.item_heading}>Documentation & Support</h3>
          <p className={styles.itempara_para}>
            Complete assistance with paperwork, export certificates, customs
            clearance, and 24/7 customer support.
          </p>
        </div>
      </div>

    </div>
 
   
        <div className={styles.itemcontainer}>
          
        <div className={styles.itemimg}>
  
   <h1 className="benefits-heading text-3xl md:text-4xl font-bold mb-12 text-black text-center w-full">    
        Why Choose Us?
</h1>      
      <div className="benefits-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto w-full px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="benefit-item bg-white rounded-xl p-6 md:p-8 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl w-full"
          >
            <div className="benefit-icon text-4xl md:text-5xl mb-4 text-[#e76c02]">
              {service.icon}
            </div>
            <h3 className="benefit-title text-lg md:text-xl font-semibold mb-3 text-gray-800">
              {service.title}
            </h3>
            <p className="benefit-text text-sm md:text-base text-gray-500 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
    </div>

        </div>
      </div>
    </div>
  )
}
