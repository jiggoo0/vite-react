import { FC } from "react";

type Props = {
  businessName?: string;
  ownerName?: string;
  registrationNumber?: string;
  address?: {
    houseNumber?: string;
    villageNo?: string;
    alley?: string;
    subDistrict?: string;
    district?: string;
    province?: string;
  };
  issuedDate?: string;
  registrarPosition?: string;
  registrarName?: string;
};

const RegistrationPreview: FC<Props> = ({
  businessName = "—",
  ownerName = "—",
  registrationNumber = "—",
  address = {},
  issuedDate,
  registrarPosition,
  registrarName,
}) => {
  // ฟังก์ชันแสดงจุดเติมช่องว่าง กำหนดความยาวได้
  const fallbackDots = (length: number) => (
    <span className="text-gray-400 select-none">{'.'.repeat(length)}</span>
  );

  const {
    houseNumber,
    villageNo,
    alley,
    subDistrict,
    district,
    province,
  } = address;

  return (
    <section
      className="bg-white border border-gray-300 rounded-md shadow-md p-12 w-full max-w-[800px] mx-auto relative"
      style={{
        fontFamily: '"TH SarabunPSK", serif',
        lineHeight: 2,
        minHeight: "1200px",
      }}
    >
      {/* Header */}
      <div className="absolute top-6 left-10 text-sm leading-5">
        <p>ทะเบียนเลขที่ {registrationNumber}</p>
        <p>คำขอที่ {fallbackDots(20)}</p>
      </div>
      <div className="absolute top-6 right-10 text-sm leading-5 text-right">
        <p>แบบ พค. 0403</p>
      </div>

      {/* 🛡️ ตราครุฑ */}
      <div className="flex justify-center mt-16">
        <img
          src="/fonts/krut.webp"
          alt="ตราครุฑ"
          className="w-24 h-24 object-contain"
          crossOrigin="anonymous"
          draggable={false}
        />
      </div>

      {/* หัวเอกสาร */}
      <div className="text-center mt-6 mb-10">
        <p className="text-xl font-bold leading-relaxed">
          กรมพัฒนาธุรกิจการค้า <br />
          สำนักงานกลางทะเบียนพาณิชย์
        </p>
        <p className="text-3xl font-bold mt-2">ใบทะเบียนพาณิชย์</p>
        <p className="text-lg mt-4">ใบสำคัญนี้ออกให้เพื่อแสดงว่า</p>
      </div>

      {/* เนื้อหา */}
      <div className="text-center mt-12 text-lg space-y-6">
        <p>{ownerName}</p>
        <p>ได้จดทะเบียนพาณิชย์ ตามพระราชบัญญัติทะเบียนพาณิชย์ พ.ศ.2499</p>
        <p className="mt-8">เมื่อวันที่ {issuedDate || fallbackDots(20)}</p>

        <p className="mt-8">ชื่อที่ใช้ในการประกอบพาณิชยกิจ</p>
        <p>{businessName}</p>

        <p className="mt-6">เขียนเป็นอักษรโรมัน</p>
        <p>{businessName ? businessName.toUpperCase() : fallbackDots(30)}</p>

        <p className="mt-6">ชนิดแห่งพาณิชยกิจ</p>
        <div className="mx-auto max-w-[720px] space-y-2 tracking-wide text-center text-gray-500 select-none">
          <p>{fallbackDots(100)}</p>
          <p>{fallbackDots(100)}</p>
          <p>{fallbackDots(100)}</p>
          <p>{fallbackDots(100)}</p>
        </div>

        {/* ที่อยู่ */}
        <p className="mt-8 text-center max-w-[720px] mx-auto font-semibold">
          ที่ตั้งสถานประกอบการ
        </p>
        <p className="text-left max-w-[720px] mx-auto">
          เลขที่ {houseNumber || fallbackDots(20)} หมู่ที่{" "}
          {villageNo || fallbackDots(15)} ตรอก/ซอย{" "}
          {alley || fallbackDots(20)} ตำบล/แขวง{" "}
          {subDistrict || fallbackDots(25)} อำเภอ/เขต{" "}
          {district || fallbackDots(25)} จังหวัด{" "}
          {province || fallbackDots(25)}
        </p>
      </div>

      {/* 🖋️ ตำแหน่งลงนาม */}
      <div
        className="mt-24 max-w-[720px] mx-auto text-lg text-end space-y-6"
        style={{ fontFamily: '"TH SarabunPSK", serif' }}
      >
        <p className="whitespace-nowrap">
          ออกให้ ณ วันที่ {issuedDate || fallbackDots(15)}
        </p>
        <p className="whitespace-nowrap">
          ตำแหน่ง {registrarPosition || fallbackDots(15)}
        </p>

        <div className="mt-16">
          <p className="text-xl font-bold underline decoration-dotted decoration-gray-400 inline-block min-w-[250px]">
            {registrarName || fallbackDots(25)}
          </p>
          <p className="mt-2">นายทะเบียนพาณิชย์</p>
        </div>
      </div>
    </section>
  );
};

export default RegistrationPreview;