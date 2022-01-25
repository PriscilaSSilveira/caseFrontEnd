import React from 'react'
import { DivKpi, DivRow, PFooter, SVG } from '../styles'

const Footer = () => {
  return (
    <DivRow>
      <PFooter>Powered by</PFooter>
      <DivKpi>
        <SVG
          width="26"
          height="28"
          viewBox="0 0 26 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.3372 0.854898L25.5427 9.32504L16.6253 18.5301L16.6262 18.531L16.5454 18.6144L21.3842 23.6093L17.7207 27.391L8.91226 18.7971L18.3566 9.0482L17.3616 8.0211L7.88924 17.7991L3.92956 13.9359L17.3372 0.854898ZM22.3792 22.5822L26 18.8445V10.9082L18.535 18.614L22.3792 22.5822ZM1.96952 13.9348L15.6573 0.580566L7.61527 0.580566L0 8.44143L5.21012e-07 19.5583L7.61527 27.4193L15.7885 27.4192L1.9744 13.9417L1.97548 13.9407L1.96952 13.9348Z"
            fill="#2E455A"
          />
        </SVG>
        Key People Insights
      </DivKpi>
    </DivRow>
  )
}

export default Footer
