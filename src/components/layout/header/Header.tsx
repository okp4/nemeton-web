import React from 'react'
import Image from 'next/image'
import './header.scss'

export const Header: React.FC = () => (
  <div className="okp4-nemeton-web-header-main">
    <div className="okp4-nemeton-web-header-first-part-container">
      <div className="okp4-nemeton-web-header-left-part-container">
        <h1>Nemeton Program</h1>
        <button>Join the program</button>
      </div>
      <div className="okp4-nemeton-web-header-right-part-container">
        <Image
          alt="okp4-vertical-logo"
          height={275}
          src="/image/okp4-logo-vertical.png"
          width={359}
        />
        <h1>incentivized testnet program</h1>
      </div>
    </div>
  </div>
)
