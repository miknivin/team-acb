import svgPaths from "./svg-7753ueb46e";
import imgMullaAcbLogoWelcome141 from "figma:asset/3f4bc1764d8460092a538d2d46449fceff518f52.png";
import imgMullaAcbLogoWelcome15 from "figma:asset/486392a4c6b9ac8a312c538f03886e1e4b650a2a.png";
import imgBackgroundImage from "figma:asset/cf898b98b64518fca7abf972eae71dc24257b73a.png";

function Link() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[964px] top-[calc(50%-855px)]" data-name="Link">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[16px] tracking-[-0.4px] w-[67.84px]">
        <p className="leading-[24px]">Products</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[1081.84px] top-[calc(50%-855px)]" data-name="Link">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[16px] tracking-[-0.4px] w-[49px]">
        <p className="leading-[24px]">About</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="-translate-y-1/2 absolute h-[24px] left-[1180.84px] top-[calc(50%-855px)] w-[69px]" data-name="Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[#16a34a] text-[16px] top-[12px] tracking-[-0.4px] w-[69px]">
        <p className="leading-[24px]">Contact</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[865px] top-[85px]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[24px] justify-center leading-[0] left-[865px] not-italic text-[#475569] text-[16px] top-[97px] tracking-[-0.4px] w-[49px]">
        <p className="leading-[24px]">Home</p>
      </div>
      <Link />
      <Link1 />
      <Link2 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[100px] top-[75px]">
      <Group />
      <div className="absolute h-[50px] left-[100px] top-[75px] w-[66px]" data-name="mulla-acb-logo-welcome-1 4 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMullaAcbLogoWelcome141} />
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+635px)] size-[30px] top-[calc(50%-855px)]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
          <path d={svgPaths.p25602380} fill="var(--fill-0, #15803D)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function MullaLogo() {
  return <div className="-translate-y-1/2 absolute left-0 size-[24px] top-[calc(50%+0.5px)]" data-name="Mulla Logo" />;
}

function Container2() {
  return (
    <div className="h-[51px] relative shrink-0 w-full" data-name="Container">
      <MullaLogo />
      <div className="absolute h-[44px] left-[4px] top-[2px] w-[123px]" data-name="mulla-acb-logo-welcome-1 5">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMullaAcbLogoWelcome15} />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[320px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] w-full">
        <p className="leading-[22.75px] mb-0">Elevating everyday household care</p>
        <p className="leading-[22.75px] mb-0">through pure science and local</p>
        <p className="leading-[22.75px]">craftsmanship.</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Container">
          <path d={svgPaths.p1f805900} fill="var(--fill-0, #1DA26E)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link3() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 size-[40px]" data-name="Link">
      <Container5 />
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Container">
          <path d={svgPaths.p17ffe090} fill="var(--fill-0, #1DA26E)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link4() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 size-[40px]" data-name="Link">
      <Container6 />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[12px] relative shrink-0 w-[15px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 12">
        <g id="Container">
          <path d={svgPaths.p37f50280} fill="var(--fill-0, #1DA26E)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link5() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 size-[40px]" data-name="Link">
      <Container7 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[16px] items-start pt-[1.2px] relative shrink-0 w-full" data-name="Container">
      <Link3 />
      <Link4 />
      <Link5 />
    </div>
  );
}

function Container1() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[22.8px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Container2 />
      <Container3 />
      <Container4 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-white tracking-[1.2px] uppercase w-full">
        <p className="leading-[16px]">Products</p>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.75px] relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] w-full">
        <p className="leading-[22.75px]">Laundry Care</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.75px] relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] w-full">
        <p className="leading-[22.75px]">Surface Cleaners</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.75px] relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] w-full">
        <p className="leading-[22.75px]">Specialty Soaps</p>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.75px] relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] w-full">
        <p className="leading-[22.75px]">Eco-Bundles</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full" data-name="List">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
    </div>
  );
}

function Container8() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[23px] items-start justify-self-stretch pb-[5.25px] relative row-1 self-start shrink-0" data-name="Container">
      <Heading3 />
      <List />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-white tracking-[1.2px] uppercase w-full">
        <p className="leading-[16px]">Resources</p>
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.75px] relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] w-full">
        <p className="leading-[22.75px]">Sustainability</p>
      </div>
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.75px] relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] w-full">
        <p className="leading-[22.75px]">Ingredients</p>
      </div>
    </div>
  );
}

function Item6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.75px] relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] w-full">
        <p className="leading-[22.75px]">FAQ</p>
      </div>
    </div>
  );
}

function Item7() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.75px] relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] w-full">
        <p className="leading-[22.75px]">Store Locator</p>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full" data-name="List">
      <Item4 />
      <Item5 />
      <Item6 />
      <Item7 />
    </div>
  );
}

function Container9() {
  return (
    <div className="col-3 content-stretch flex flex-col gap-[23px] items-start justify-self-stretch pb-[5.25px] relative row-1 self-start shrink-0" data-name="Container">
      <Heading4 />
      <List1 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-white tracking-[1.2px] uppercase w-full">
        <p className="leading-[16px]">Legal</p>
      </div>
    </div>
  );
}

function Item8() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.75px] relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] w-full">
        <p className="leading-[22.75px]">Privacy Policy</p>
      </div>
    </div>
  );
}

function Item9() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.75px] relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] w-full">
        <p className="leading-[22.75px]">Terms of Service</p>
      </div>
    </div>
  );
}

function Item10() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.75px] relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] w-full">
        <p className="leading-[22.75px]">Returns</p>
      </div>
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full" data-name="List">
      <Item8 />
      <Item9 />
      <Item10 />
    </div>
  );
}

function Container10() {
  return (
    <div className="col-4 content-stretch flex flex-col gap-[23px] items-start justify-self-stretch pb-[44px] relative row-1 self-start shrink-0" data-name="Container">
      <Heading5 />
      <List2 />
    </div>
  );
}

function Container() {
  return (
    <div className="-translate-x-1/2 absolute gap-x-[51px] gap-y-[48px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[_184.25px] h-[312.25px] left-1/2 max-w-[1280px] py-[64px] top-0 w-[1280px]" data-name="Container">
      <Container1 />
      <Container8 />
      <Container9 />
      <Container10 />
    </div>
  );
}

function Container11() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%-18.5px)] pb-[0.75px] top-[31px] w-[243px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[23px] justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.75)] w-[279px]">
        <p className="leading-[22.75px]">© 2024 Mulla Care. All rights reserved.</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[863px] top-[35px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] opacity-25 relative shrink-0 text-[#94a3b8] text-[10px] tracking-[1px] uppercase w-[74.11px]">
        <p>
          <span className="leading-[16.25px] text-[#f0f0f0]">{`ui By `}</span>
          <span className="leading-[16.25px] text-white">Md</span>
        </p>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="-translate-x-1/2 absolute border-[rgba(226,232,240,0.89)] border-solid border-t h-[88px] left-1/2 top-[312px] w-[1514px]" data-name="HorizontalBorder">
      <Container11 />
      <Container12 />
    </div>
  );
}

function Footer() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#1da26e] bottom-0 h-[400px] left-1/2 rounded-tl-[48px] rounded-tr-[48px] w-[1514px]" data-name="Footer">
      <Container />
      <HorizontalBorder />
    </div>
  );
}

function Overlay() {
  return (
    <div className="absolute bg-[rgba(124,250,187,0.3)] content-stretch flex items-start justify-center left-[285.97px] px-[16px] py-[6px] rounded-[9999px] top-0" data-name="Overlay">
      <div className="flex flex-col font-['Manrope:Semi_Bold',sans-serif] h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[#006c46] text-[12px] text-center tracking-[1.2px] uppercase w-[95.36px]">
        <p className="leading-[18px]">GET IN TOUCH</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[24px] right-[24px] top-[54px]" data-name="Heading 1">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[72px] justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[72px] text-center tracking-[-3.6px] w-[577px]">
        <p className="leading-[72px]">{`Let's Connect`}</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[24px] max-w-[672px] pt-[8px] right-[24px] top-[150px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f4a3c] text-[20px] text-center w-full">
        <p className="leading-[28px]">{`We're here to help you with anything you need. Experience the purity of Kerala's finest household care.`}</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="-translate-x-1/2 absolute h-[214px] left-[calc(50%-0.35px)] top-[254px] w-[699.3px]" data-name="Container">
      <Overlay />
      <Heading />
      <Container14 />
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 size-[22.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5 22.5">
        <g id="Container">
          <path d={svgPaths.p297b0200} fill="var(--fill-0, #005CAE)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(0,116,218,0.1)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[64px]" data-name="Overlay">
      <Container15 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#6f7a6b] text-[14px] tracking-[0.7px] uppercase w-[59.47px]">
        <p className="leading-[20px]">Call Us</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#191c1e] text-[18px] w-[151.38px]">
        <p className="leading-[28px]">+91 484 234 5678</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[151.38px]" data-name="Container">
      <Container17 />
      <Container18 />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[24px] relative shrink-0" data-name="Margin">
      <Container16 />
    </div>
  );
}

function PhoneCard() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.7)] col-1 h-[128px] justify-self-stretch relative rounded-[9999px] row-1 shadow-[0px_20px_40px_0px_rgba(25,28,30,0.06)] shrink-0" data-name="Phone Card">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[32px] relative size-full">
          <Overlay1 />
          <Margin />
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[20px] relative shrink-0 w-[25px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 20">
        <g id="Container">
          <path d={svgPaths.p2b19980} fill="var(--fill-0, #006C46)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(36,176,120,0.1)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[64px]" data-name="Overlay">
      <Container19 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#6f7a6b] text-[14px] tracking-[0.7px] uppercase w-[66.59px]">
        <p className="leading-[20px]">Email Us</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#191c1e] text-[18px] w-[151.91px]">
        <p className="leading-[28px]">hello@mulla.care</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[151.91px]" data-name="Container">
      <Container21 />
      <Container22 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[24px] relative shrink-0" data-name="Margin">
      <Container20 />
    </div>
  );
}

function EmailCard() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.7)] col-2 h-[128px] justify-self-stretch relative rounded-[9999px] row-1 shadow-[0px_20px_40px_0px_rgba(25,28,30,0.06)] shrink-0" data-name="Email Card">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[32px] relative size-full">
          <Overlay2 />
          <Margin1 />
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[25px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 25">
        <g id="Container">
          <path d={svgPaths.p682b940} fill="var(--fill-0, #006876)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay3() {
  return (
    <div className="bg-[rgba(0,171,193,0.1)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[64px]" data-name="Overlay">
      <Container23 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#6f7a6b] text-[14px] tracking-[0.7px] uppercase w-[60.23px]">
        <p className="leading-[20px]">Visit Us</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#191c1e] text-[18px] w-[166.81px]">
        <p className="leading-[28px]">Kochi, Kerala, India</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[166.81px]" data-name="Container">
      <Container25 />
      <Container26 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[24px] relative shrink-0" data-name="Margin">
      <Container24 />
    </div>
  );
}

function LocationCard() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.7)] col-3 h-[128px] justify-self-stretch relative rounded-[9999px] row-1 shadow-[0px_20px_40px_0px_rgba(25,28,30,0.06)] shrink-0" data-name="Location Card">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[32px] relative size-full">
          <Overlay3 />
          <Margin2 />
        </div>
      </div>
    </div>
  );
}

function SectionContactInfoCards() {
  return (
    <div className="-translate-x-1/2 absolute gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_128px] left-1/2 top-[582px] w-[1232px]" data-name="Section - Contact Info Cards">
      <PhoneCard />
      <EmailCard />
      <LocationCard />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#191c1e] text-[30px] w-full">
        <p className="leading-[36px]">Send us a message</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4a3c] text-[16px] w-full">
        <p className="leading-[24px]">We usually respond within 24 hours.</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Manrope:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6f7a6b] text-[12px] tracking-[1.2px] uppercase w-full">
        <p className="leading-[16px]">Full Name</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[16px] w-full">
        <p className="leading-[normal]">John Doe</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#f2f4f6] relative rounded-[32px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[16px] py-[17px] relative w-full">
          <Container30 />
        </div>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Label />
      <Input />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Manrope:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6f7a6b] text-[12px] tracking-[1.2px] uppercase w-full">
        <p className="leading-[16px]">Email Address</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[16px] w-full">
        <p className="leading-[normal]">john@example.com</p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[#f2f4f6] relative rounded-[32px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[16px] py-[17px] relative w-full">
          <Container32 />
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Label1 />
      <Input1 />
    </div>
  );
}

function Container28() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_80px] relative shrink-0 w-full" data-name="Container">
      <Container29 />
      <Container31 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Manrope:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6f7a6b] text-[12px] tracking-[1.2px] uppercase w-full">
        <p className="leading-[16px]">How can we help?</p>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d="M7.2 9.6L12 14.4L16.8 9.6" id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function ImageFill() {
  return (
    <div className="absolute content-stretch flex flex-col h-[56px] items-start justify-center left-0 overflow-clip pl-[661.34px] pr-[8px] py-[16px] top-0 w-[693.34px]" data-name="image fill">
      <Svg />
    </div>
  );
}

function Container34() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[16px] overflow-clip right-[16px] top-1/2" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#191c1e] text-[16px] w-[112.25px]">
        <p className="leading-[24px]">Product Inquiry</p>
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="bg-[#f2f4f6] h-[56px] relative rounded-[32px] shrink-0 w-full" data-name="Options">
      <ImageFill />
      <Container34 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Label2 />
      <Options />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Manrope:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6f7a6b] text-[12px] tracking-[1.2px] uppercase w-full">
        <p className="leading-[16px]">Message</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[16px] w-full">
        <p className="leading-[24px]">Tell us more about your needs...</p>
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div className="bg-[#f2f4f6] relative rounded-[32px] shrink-0 w-full" data-name="Textarea">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pb-[88px] pt-[16px] px-[16px] relative w-full">
          <Container36 />
        </div>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Label3 />
      <Textarea />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center justify-center px-[48px] py-[16px] relative rounded-[9999px] shadow-[0px_20px_40px_0px_rgba(25,28,30,0.06)] shrink-0" data-name="Button" style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 108, 70) 0%, rgb(36, 176, 120) 100%)" }}>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Extra_Bold',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[-0.4px] w-[108.89px]">
        <p className="leading-[24px]">Send Message</p>
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start pt-[32px] relative shrink-0 w-full" data-name="Form">
      <Container28 />
      <Container33 />
      <Container35 />
      <Button />
    </div>
  );
}

function LeftForm() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] inset-[760px_550.66px_450px_140px] items-start p-[64px]" data-name="Left: Form">
      <Heading1 />
      <Container27 />
      <Form />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute h-[30px] left-[114.4px] top-[24px] w-[24px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 30">
        <g id="Container">
          <path d={svgPaths.p2e497c80} fill="var(--fill-0, #006C46)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[24px] pl-[20.81px] pr-[20.82px] top-[72px]" data-name="Heading 4">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#191c1e] text-[20px] text-center w-[175.2px]">
        <p className="leading-[28px]">Our Headquarters</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[24px] top-[104px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#3f4a3c] text-[14px] text-center w-[216.83px]">
        <p className="leading-[20px]">Marine Drive, Kochi, Kerala 682031</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[84.2px] top-[139.5px]" data-name="Button">
      <div className="flex flex-col font-['Manrope:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#006c46] text-[14px] text-center w-[96.41px]">
        <p className="leading-[20px]">Get Directions</p>
      </div>
    </div>
  );
}

function OverlayShadowOverlayBlur() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.7)] h-[184px] max-w-[384px] relative rounded-[32px] shadow-[0px_20px_40px_0px_rgba(25,28,30,0.06)] shrink-0 w-[264.83px]" data-name="Overlay+Shadow+OverlayBlur">
      <Container38 />
      <Heading2 />
      <Container39 />
      <Button1 />
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex inset-0 items-center justify-center" data-name="Container">
      <OverlayShadowOverlayBlur />
    </div>
  );
}

function MapSection() {
  return (
    <div className="absolute bg-[#e6e8ea] h-[519px] left-[988px] overflow-clip right-[101px] rounded-[48px] shadow-[0px_20px_40px_0px_rgba(25,28,30,0.06)] top-[854px]" data-name="Map Section">
      <div className="absolute inset-0 mix-blend-multiply opacity-40" data-name="Background+Image">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-[308%] left-0 max-w-none top-[-104%] w-full" src={imgBackgroundImage} />
          </div>
          <div className="absolute bg-white inset-0 mix-blend-saturation" />
        </div>
      </div>
      <Container37 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[988px] right-[101px] top-[854px]">
      <MapSection />
    </div>
  );
}

export default function Contact() {
  return (
    <div className="bg-white relative size-full" data-name="Contact">
      <div className="absolute bg-[rgba(136,136,136,0.15)] border-[0.5px] border-solid border-white h-[50px] left-[830px] rounded-[25px] top-[75px] w-[461px]" />
      <Group1 />
      <Footer />
      <div className="absolute h-0 left-[1181px] top-[115px] w-[65px]">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65 2">
            <line id="Line 1" stroke="var(--stroke-0, #16A34A)" strokeWidth="2" x2="65" y1="1" y2="1" />
          </svg>
        </div>
      </div>
      <div className="absolute bg-gradient-to-b from-[rgba(124,250,187,0.2)] inset-[150px_0_1030px_0] opacity-40 to-[rgba(124,250,187,0)]" data-name="Gradient" />
      <Container13 />
      <SectionContactInfoCards />
      <LeftForm />
      <Group2 />
    </div>
  );
}