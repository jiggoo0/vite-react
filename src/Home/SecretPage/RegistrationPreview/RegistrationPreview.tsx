import { FC, useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

type RegistrationAddress = {
  houseNumber?: string;
  villageNo?: string;
  alley?: string;
  subDistrict?: string;
  district?: string;
  province?: string;
};

type RegistrationPreviewProps = {
  businessName?: string;
  ownerName?: string;
  registrationNumber?: string;
  address?: RegistrationAddress;
  issuedDate?: string;
  registrarPosition?: string;
  registrarName?: string;
};

// ฟังก์ชันเติมค่า default
function fillDefaultRegistrationData(
  data: RegistrationPreviewProps = {}
): Required<RegistrationPreviewProps> {
  return {
    businessName: data.businessName || "—",
    ownerName: data.ownerName || "—",
    registrationNumber: data.registrationNumber || "—",
    address: {
      houseNumber: data.address?.houseNumber || "—",
      villageNo: data.address?.villageNo || "—",
      alley: data.address?.alley || "—",
      subDistrict: data.address?.subDistrict || "—",
      district: data.address?.district || "—",
      province: data.address?.province || "—",
    },
    issuedDate: data.issuedDate || "—",
    registrarPosition: data.registrarPosition || "—",
    registrarName: data.registrarName || "—",
  };
}

function createFallbackDots(length: number): string {
  return ".".repeat(length);
}

const RegistrationPreview: FC<RegistrationPreviewProps> = (props) => {
  const data = fillDefaultRegistrationData(props);

  const {
    businessName,
    ownerName,
    registrationNumber,
    address,
    issuedDate,
    registrarPosition,
    registrarName,
  } = data;

  const { houseNumber, villageNo, alley, subDistrict, district, province } = address;

  const printRef = useRef<HTMLDivElement>(null);

  const handleDownloadPdf = async () => {
    if (!printRef.current) return;

    const element = printRef.current;
    const canvas = await html2canvas(element, { scale: 2, useCORS: true, logging: false });
    const imgData = canvas.toDataURL("image/png");

    const pdfWidth = (canvas.width * 72) / 96;
    const pdfHeight = (canvas.height * 72) / 96;

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: [pdfWidth, pdfHeight],
    });

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("registration-preview.pdf");
  };

  const fallbackDots = (length: number) => (
    <span className="text-gray-400 select-none">{createFallbackDots(length)}</span>
  );

  return (
    <>
      <section
        ref={printRef}
        className="bg-white border border-gray-300 rounded-md shadow-md p-12 w-full max-w-[800px] mx-auto relative"
        style={{ fontFamily: '"THSarabunNew", serif', lineHeight: 2, minHeight: 1200 }}
      >
        <div className="absolute top-6 left-10 text-sm leading-5">
          <p>ทะเบียนเลขที่ {registrationNumber}</p>
          <p>คำขอที่ {fallbackDots(20)}</p>
        </div>

        <div className="absolute top-6 right-10 text-sm leading-5 text-right">
          <p>แบบ พค. 0403</p>
        </div>

        <div className="flex justify-center mt-16">
          <img
            src="/fonts/krut.webp"
            alt="ตราครุฑ"
            className="w-24 h-24 object-contain"
            crossOrigin="anonymous"
            draggable={false}
          />
        </div>

        <div className="text-center mt-6 mb-10">
          <p className="text-xl font-bold leading-relaxed">
            กรมพัฒนาธุรกิจการค้า <br />
            สำนักงานกลางทะเบียนพาณิชย์
          </p>
          <p className="text-3xl font-bold mt-2">ใบทะเบียนพาณิชย์</p>
          <p className="text-lg mt-4">ใบสำคัญนี้ออกให้เพื่อแสดงว่า</p>
        </div>

        <div className="text-center mt-12 text-lg space-y-6">
          <p>{ownerName}</p>
          <p>ได้จดทะเบียนพาณิชย์ ตามพระราชบัญญัติทะเบียนพาณิชย์ พ.ศ.2499</p>
          <p className="mt-8">เมื่อวันที่ {issuedDate}</p>

          <p className="mt-8">ชื่อที่ใช้ในการประกอบพาณิชยกิจ</p>
          <p>{businessName}</p>

          <p className="mt-6">เขียนเป็นอักษรโรมัน</p>
          <p>{businessName?.toUpperCase() || "—"}</p>

          <p className="mt-6">ชนิดแห่งพาณิชยกิจ</p>
          <div className="mx-auto max-w-[720px] space-y-2 tracking-wide text-center text-gray-500 select-none">
            <p>{fallbackDots(100)}</p>
            <p>{fallbackDots(100)}</p>
            <p>{fallbackDots(100)}</p>
            <p>{fallbackDots(100)}</p>
          </div>

          <p className="mt-8 text-center max-w-[720px] mx-auto font-semibold">
            ที่ตั้งสถานประกอบการ
          </p>
          <p className="text-left max-w-[720px] mx-auto">
            เลขที่ {houseNumber} หมู่ที่ {villageNo} ตรอก/ซอย {alley} ตำบล/แขวง {subDistrict} อำเภอ/เขต {district} จังหวัด {province}
          </p>
        </div>

        <div
          className="mt-24 max-w-[720px] mx-auto text-lg text-right space-y-6 pr-10"
          style={{ fontFamily: '"THSarabunNew", serif' }}
        >
          <p className="whitespace-nowrap">ออกให้ ณ วันที่ {issuedDate}</p>
          <p className="whitespace-nowrap">ตำแหน่ง {registrarPosition}</p>

          <div className="mt-16">
            <p className="text-xl font-bold underline decoration-dotted decoration-gray-400 inline-block min-w-[250px]">
              {registrarName}
            </p>
            <p className="mt-2">นายทะเบียนพาณิชย์</p>
          </div>
        </div>
      </section>

      <div className="mt-6 text-center">
        <button
          className="btn btn-primary"
          onClick={handleDownloadPdf}
          aria-label="ดาวน์โหลดใบทะเบียนเป็น PDF"
        >
          ดาวน์โหลด PDF
        </button>
      </div>
    </>
  );
};

export default RegistrationPreview;