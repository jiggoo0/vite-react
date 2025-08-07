import { FC } from "react";

const SecretHeader: FC = () => {
  return (
    <header className="mb-8">
      <h1 className="text-3xl font-extrabold text-center text-primary mb-6">
        Secret Private Zone
      </h1>
      <div className="max-w-xl mx-auto bg-yellow-50 border border-yellow-400 text-yellow-800 px-6 py-4 rounded-md shadow-sm">
        <p className="leading-relaxed text-center text-sm">
          ⚠️ <strong>โปรดทราบ!</strong>{" "}
          พื้นที่นี้ออกแบบมาเพื่อความปลอดภัยของทั้งผู้จ้างงานและผู้รับงาน
          กรุณาใช้ <strong>username/password</strong> เฉพาะเครื่องประจำเท่านั้น
          และห้ามแชร์กับผู้อื่น หากตรวจพบการใช้งานจากอุปกรณ์อื่น
          ระบบจะยุติการใช้งานทันที
          ถือเป็นข้อตกลงที่ทุกคนต้องปฏิบัติตามอย่างเคร่งครัด
        </p>
      </div>
    </header>
  );
};

export default SecretHeader;
