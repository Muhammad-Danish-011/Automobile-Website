
'use client';
import styles from '@/styles/Trident.module.css'
import HeroSection from '@/components/HeroSection'
import type { Metadata } from 'next'
import Heading from '@/components/Heading'
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
    <h1 className={styles.benefits_title} style={{ color: "black" }}>
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
      <div className={styles.items}>
        <div className={styles.itemimg}>
          <Image
            className={styles.benefits_image}
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


          <section className="benefits-section">
        <h1 className="benefits-heading">Why Choose Us?</h1>
        <div className="benefits-container">
          {services.map((service, index) => (
            <div key={index} className="benefit-item">
              <div className="benefit-icon">{service.icon}</div>
              <h3 className="benefit-title">{service.title}</h3>
              <p className="benefit-text">{service.description}</p>
            </div>
          ))}
        </div>
      </section>


        </div>
      </div>
    </div>
  )
}
