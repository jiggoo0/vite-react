// src/Home/SecretPage/RegistrationPreview/RegistrationPreview.tsx
import { FC, useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export type Address = {
  houseNumber?: string;
  villageNo?: string;
  alley?: string;
  subDistrict?: string;
  district?: string;
  province?: string;
};

export type RegistrationPreviewProps = {
  businessName?: string;
  ownerName?: string;
  registrationNumber?: string;
  address?: Address;
  issuedDate?: string;
  registrarPosition?: string;
  registrarName?: string;
};

const defaultText = "—";
const withFallback = (value?: string) => value?.trim() || defaultText;

const RegistrationPreview: FC<RegistrationPreviewProps> = ({
  businessName,
  ownerName,
  registrationNumber,
  address = {},
  issuedDate,
  registrarPosition,
  registrarName,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleDownloadPdf = async () => {
    if (!ref.current) return;

    const canvas = await html2canvas(ref.current, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#fff",
    });

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: [(canvas.width * 72) / 96, (canvas.height * 72) / 96],
    });

    pdf.addImage(
      canvas.toDataURL("image/png"),
      "PNG",
      0,
      0,
      (canvas.width * 72) / 96,
      (canvas.height * 72) / 96
    );
    pdf.save("registration-preview.pdf");
  };

  return (
    <>
      <section
        ref={ref}
        className="bg-white border border-gray-400 rounded-md shadow p-12 w-full max-w-[800px] mx-auto relative"
        style={{
          fontFamily: '"THSarabunNew", sans-serif',
          lineHeight: 1.8,
          fontSize: "18pt",
          backgroundColor: "#fff",
          minHeight: 1200,
        }}
      >
        <div className="absolute top-8 left-12 text-[14pt] leading-snug">
          <p className="mb-2">ทะเบียนเลขที่ {withFallback(registrationNumber)}</p>
          <p>
            คำขอที่{" "}
            <span className="inline-block border-b border-gray-300 min-w-[160px] h-[1.7em]" />
          </p>
        </div>

        <div className="absolute top-8 right-12 text-[14pt] leading-snug text-right">
          <p>แบบ พค. 0403</p>
        </div>

        <div className="flex justify-center mt-24 mb-6">
          <img
            src="/fonts/krut.webp"
            alt="ตราครุฑ"
            className="w-[100px] h-[100px] object-contain"
            crossOrigin="anonymous"
            draggable={false}
          />
        </div>

        <div className="text-center mb-6">
          <p className="text-[22pt] font-bold leading-none">
            กรมพัฒนาธุรกิจการค้า <br /> สำนักงานกลางทะเบียนพาณิชย์
          </p>
          <p className="text-[28pt] font-bold mt-2 underline underline-offset-4 decoration-[1.5px] leading-none">
            ใบทะเบียนพาณิชย์
          </p>
          <p className="text-[20pt] mt-4">ใบสำคัญนี้ออกให้เพื่อแสดงว่า</p>
        </div>

        <div className="text-center mt-6 space-y-4">
          <p className="text-[20pt]">{withFallback(ownerName)}</p>
          <p>ได้จดทะเบียนพาณิชย์ ตามพระราชบัญญัติทะเบียนพาณิชย์ พ.ศ. 2499</p>
          <p>เมื่อวันที่ {withFallback(issuedDate)}</p>

          <p className="mt-8">ชื่อที่ใช้ในการประกอบพาณิชยกิจ</p>
          <p className="font-bold text-[20pt]">{withFallback(businessName)}</p>

          <p className="mt-6">เขียนเป็นอักษรโรมัน</p>
          <p>{withFallback(businessName?.toUpperCase())}</p>

          <p className="mt-6">ชนิดแห่งพาณิชยกิจ</p>
          <div className="mx-auto max-w-[720px] text-gray-500 space-y-3">
            {[...Array(4)].map((_, i) => (
              <p key={i}>
                <span className="inline-block border-b border-gray-300 w-full h-[1.7em]" />
              </p>
            ))}
          </div>

          <p className="mt-10 font-semibold">ที่ตั้งสถานประกอบการ</p>
          <p className="text-left max-w-[720px] mx-auto indent-12 leading-relaxed">
            เลขที่ {withFallback(address.houseNumber)} หมู่ที่ {withFallback(address.villageNo)}{" "}
            ตรอก/ซอย {withFallback(address.alley)} ตำบล/แขวง {withFallback(address.subDistrict)}{" "}
            อำเภอ/เขต {withFallback(address.district)} จังหวัด {withFallback(address.province)}
          </p>
        </div>

        <div className="mt-32 max-w-[720px] mx-auto text-lg text-right space-y-6 pr-10">
          <p>ออกให้ ณ วันที่ {withFallback(issuedDate)}</p>
          <p>ตำแหน่ง {withFallback(registrarPosition)}</p>

          <div className="mt-20">
            <p className="text-[20pt] font-bold underline decoration-dotted min-w-[250px] inline-block text-center">
              {withFallback(registrarName)}
            </p>
            <p className="mt-2">นายทะเบียนพาณิชย์</p>
          </div>
        </div>
      </section>

      <div className="mt-6 text-center">
        <button className="btn btn-primary" onClick={handleDownloadPdf}>
          ดาวน์โหลด PDF
        </button>
      </div>
    </>
  );
};

export default RegistrationPreview;