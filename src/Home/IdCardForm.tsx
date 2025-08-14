"use client";

import React, { useState } from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import "@/styles/idcard.css";
import { idCardConfig } from "@/config/idcardConfig";

interface FormData {
  officer: string;
  docNo: string;
  cardPlace: string;
  fullName: string;
  birthday: string;
  birthProvince: string;
  address: string;
  moo: string;
  road: string;
  tambol: string;
  district: string;
  province: string;
  cardNumber: string;
  initCard: string;
  expCard: string;
}

const initialFormData: FormData = {
  officer: "",
  docNo: "",
  cardPlace: "",
  fullName: "",
  birthday: "",
  birthProvince: "",
  address: "",
  moo: "",
  road: "",
  tambol: "",
  district: "",
  province: "",
  cardNumber: "",
  initCard: "",
  expCard: "",
};

const IdCardForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit
  const handleSubmit = () => {
    const requiredFields: (keyof FormData)[] = ["officer", "docNo", "fullName"];
    const emptyFields = requiredFields.filter((f) => !formData[f]);
    if (emptyFields.length > 0) {
      Swal.fire(
        "Error",
        `กรุณากรอกฟิลด์สำคัญ: ${emptyFields.join(", ")}`,
        "error"
      );
      return;
    }
    Swal.fire("Success", "ส่งข้อมูลเรียบร้อย!", "success");
  };

  return (
    <section className="min-h-screen bg-base-200 px-4 sm:px-6 lg:px-8 py-6 sm:py-10 font-poppins">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-2xl font-semibold text-center mb-6">
          ฟอร์มบัตรประชาชน
        </h1>

        {/* Form */}
        <div className="bg-white rounded-xl shadow-md p-6 space-y-6">
          <form className="space-y-6">
            {/* เจ้าหน้าที่ & เลขที่หนังสือ */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">
                  เจ้าหน้าที่ดำเนินการ
                </label>
                <select
                  className="mt-1 block w-full border-gray-300 rounded-md"
                  name="officer"
                  value={formData.officer}
                  onChange={handleChange}
                >
                  <option value="">กรุณาเลือกเจ้าหน้าที่</option>
                  <option value="officer1">เจ้าหน้าที่ 1</option>
                  <option value="officer2">เจ้าหน้าที่ 2</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium">เลขที่หนังสือ</label>
                <input
                  className="mt-1 block w-full border-gray-300 rounded-md"
                  type="text"
                  name="docNo"
                  value={formData.docNo}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* สำนักทะเบียน */}
            <div>
              <label className="block text-sm font-medium">สำนักทะเบียนท้องถิ่น</label>
              <input
                className="mt-1 block w-full border-gray-300 rounded-md"
                type="text"
                name="cardPlace"
                value={formData.cardPlace}
                onChange={handleChange}
              />
            </div>

            {/* ชื่อ-สกุล */}
            <div>
              <label className="block text-sm font-medium">ชื่อ-สกุล</label>
              <input
                className="mt-1 block w-full border-gray-300 rounded-md"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            {/* วันเกิด & จังหวัดเกิด */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                className="mt-1 block w-full border-gray-300 rounded-md"
                type="text"
                placeholder="วัน/เดือน/ปี เกิด"
                name="birthday"
                value={formData.birthday}
                onChange={handleChange}
              />
              <input
                className="mt-1 block w-full border-gray-300 rounded-md"
                type="text"
                placeholder="จังหวัดที่เกิด"
                name="birthProvince"
                value={formData.birthProvince}
                onChange={handleChange}
              />
            </div>

            {/* ที่อยู่ */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                className="mt-1 block w-full border-gray-300 rounded-md"
                placeholder="ที่อยู่"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
              <input
                className="mt-1 block w-full border-gray-300 rounded-md"
                placeholder="หมู่"
                name="moo"
                value={formData.moo}
                onChange={handleChange}
              />
              <input
                className="mt-1 block w-full border-gray-300 rounded-md"
                placeholder="ถนน"
                name="road"
                value={formData.road}
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                className="mt-1 block w-full border-gray-300 rounded-md"
                placeholder="ตำบล"
                name="tambol"
                value={formData.tambol}
                onChange={handleChange}
              />
              <input
                className="mt-1 block w-full border-gray-300 rounded-md"
                placeholder="อำเภอ"
                name="district"
                value={formData.district}
                onChange={handleChange}
              />
              <input
                className="mt-1 block w-full border-gray-300 rounded-md"
                placeholder="จังหวัด"
                name="province"
                value={formData.province}
                onChange={handleChange}
              />
            </div>

            {/* เลขบัตร & วันออก/หมด */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                className="mt-1 block w-full border-gray-300 rounded-md"
                placeholder="เลขบัตรประชาชน"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
              />
              <input
                className="mt-1 block w-full border-gray-300 rounded-md"
                placeholder="วันออกบัตร"
                name="initCard"
                value={formData.initCard}
                onChange={handleChange}
              />
              <input
                className="mt-1 block w-full border-gray-300 rounded-md"
                placeholder="วันหมดอายุ"
                name="expCard"
                value={formData.expCard}
                onChange={handleChange}
              />
            </div>

            {/* Submit */}
            <div className="mt-4">
              <button
                type="button"
                className="btn btn-blue"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* ID Card Preview */}
        <div
          id="idcard-preview"
          className="idcard-preview mt-8"
          style={{
            width: idCardConfig.cardWidth,
            height: idCardConfig.cardHeight,
            backgroundImage: `url(${idCardConfig.bgDefault})`,
            position: "relative",
          }}
        >
          {Object.entries(idCardConfig.fields).map(([key, cfg]) => {
            let value: string | undefined = formData[key as keyof FormData];

            // รวมที่อยู่เป็นบรรทัดเดียว
            if (key === "address") {
              value = `${formData.address} หมู่ที่ ${formData.moo} ${formData.road} ${formData.tambol} / ${formData.district} / ${formData.province}`;
            }

            return (
              <span
                key={key}
                className="idcard-field"
                style={{
                  position: "absolute",
                  top: cfg.top,
                  left: cfg.left,
                  fontSize: cfg.fontSize,
                  fontWeight: cfg.fontWeight || "normal",
                  whiteSpace: "nowrap",
                }}
                title={cfg.label}
              >
                {value}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IdCardForm;