"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import { useForm, Controller } from "react-hook-form";
import { FormWrapper, FieldGroup, InputField, SelectFieldUI, TextareaField, SubmitButton, } from "@/Home/components/Forms";
const CreditProfileForm = () => {
    const { register, handleSubmit, control, formState: { errors, isSubmitting }, watch, reset, } = useForm({
        defaultValues: {
            fullName: "",
            email: "",
            phone: "",
            occupation: "",
            monthlyIncome: 0,
            existingDebt: 0,
            paymentHistory: "",
            creditRating: "",
            notes: "",
        },
    });
    const monthlyIncome = watch("monthlyIncome") || 0;
    const existingDebt = watch("existingDebt") || 0;
    const debtToIncomeRatio = useMemo(() => {
        if (monthlyIncome <= 0)
            return 0;
        return (existingDebt / monthlyIncome) * 100;
    }, [existingDebt, monthlyIncome]);
    const ratioColor = useMemo(() => {
        if (debtToIncomeRatio > 50)
            return "text-red-600";
        if (debtToIncomeRatio > 30)
            return "text-yellow-600";
        return "text-green-600";
    }, [debtToIncomeRatio]);
    const onSubmit = async (data) => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 1500));
            console.log("Customer Credit Profile:", data);
            alert("บันทึกแบบฟอร์มประเมินโปรไฟล์เรียบร้อยแล้ว");
            reset();
        }
        catch (error) {
            console.error("เกิดข้อผิดพลาด:", error);
            alert("เกิดข้อผิดพลาดในการบันทึกข้อมูล");
        }
    };
    return (_jsxs(FormWrapper, { title: "\u0E41\u0E1A\u0E1A\u0E1F\u0E2D\u0E23\u0E4C\u0E21\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E25\u0E39\u0E01\u0E04\u0E49\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E22\u0E37\u0E48\u0E19\u0E2A\u0E34\u0E19\u0E40\u0E0A\u0E37\u0E48\u0E2D", description: "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E25\u0E39\u0E01\u0E04\u0E49\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E43\u0E19\u0E01\u0E32\u0E23\u0E02\u0E2D\u0E2A\u0E34\u0E19\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E1A\u0E37\u0E49\u0E2D\u0E07\u0E15\u0E49\u0E19", onSubmit: handleSubmit(onSubmit), children: [_jsxs(FieldGroup, { columns: 2, children: [_jsx(InputField, { label: "\u0E0A\u0E37\u0E48\u0E2D-\u0E2A\u0E01\u0E38\u0E25", placeholder: "\u0E01\u0E23\u0E2D\u0E01\u0E0A\u0E37\u0E48\u0E2D-\u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25", required: true, error: errors.fullName?.message || undefined, ...register("fullName", { required: "กรุณากรอกชื่อ-สกุล" }) }), _jsx(InputField, { label: "\u0E2D\u0E35\u0E40\u0E21\u0E25", type: "email", placeholder: "example@email.com", required: true, error: errors.email?.message || undefined, ...register("email", {
                            required: "กรุณากรอกอีเมล",
                            pattern: { value: /^\S+@\S+$/i, message: "รูปแบบอีเมลไม่ถูกต้อง" },
                        }) }), _jsx(InputField, { label: "\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C", type: "tel", placeholder: "\u0E40\u0E0A\u0E48\u0E19 0812345678", required: true, error: errors.phone?.message || undefined, ...register("phone", { required: "กรุณากรอกเบอร์โทรศัพท์" }) }), _jsx(InputField, { label: "\u0E2D\u0E32\u0E0A\u0E35\u0E1E", placeholder: "\u0E01\u0E23\u0E2D\u0E01\u0E2D\u0E32\u0E0A\u0E35\u0E1E\u0E1B\u0E31\u0E08\u0E08\u0E38\u0E1A\u0E31\u0E19", required: true, error: errors.occupation?.message || undefined, ...register("occupation", { required: "กรุณากรอกอาชีพ" }) }), _jsx(InputField, { label: "\u0E23\u0E32\u0E22\u0E44\u0E14\u0E49\u0E15\u0E48\u0E2D\u0E40\u0E14\u0E37\u0E2D\u0E19 (\u0E1A\u0E32\u0E17)", type: "number", placeholder: "0", required: true, error: errors.monthlyIncome?.message || undefined, ...register("monthlyIncome", {
                            required: "กรุณากรอกรายได้ต่อเดือน",
                            min: { value: 0, message: "ต้องมากกว่า 0" },
                        }) }), _jsx(InputField, { label: "\u0E2B\u0E19\u0E35\u0E49\u0E2A\u0E34\u0E19\u0E1B\u0E31\u0E08\u0E08\u0E38\u0E1A\u0E31\u0E19 (\u0E1A\u0E32\u0E17)", type: "number", placeholder: "0", required: true, error: errors.existingDebt?.message || undefined, ...register("existingDebt", {
                            required: "กรุณากรอกหนี้สินปัจจุบัน",
                            min: { value: 0, message: "ต้องมากกว่า 0" },
                        }) }), _jsx(InputField, { label: "\u0E2D\u0E31\u0E15\u0E23\u0E32\u0E2A\u0E48\u0E27\u0E19\u0E2B\u0E19\u0E35\u0E49\u0E15\u0E48\u0E2D\u0E23\u0E32\u0E22\u0E44\u0E14\u0E49 (%)", name: "debtToIncomeRatio", type: "text", value: debtToIncomeRatio.toFixed(2), readOnly: true, className: `bg-gray-100 font-semibold ${ratioColor}` }), _jsx(Controller, { control: control, name: "paymentHistory", rules: { required: "กรุณาเลือกประวัติการชำระ" }, render: ({ field }) => (_jsx(SelectFieldUI, { ...field, label: "\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34\u0E01\u0E32\u0E23\u0E0A\u0E33\u0E23\u0E30", required: true, options: [
                                { label: "ดีมาก", value: "excellent" },
                                { label: "ดี", value: "good" },
                                { label: "ปานกลาง", value: "average" },
                                { label: "ไม่ดี", value: "poor" },
                            ], error: errors.paymentHistory?.message || undefined })) }), _jsx(Controller, { control: control, name: "creditRating", rules: { required: "กรุณาเลือกคะแนนเครดิต" }, render: ({ field }) => (_jsx(SelectFieldUI, { ...field, label: "\u0E04\u0E30\u0E41\u0E19\u0E19\u0E40\u0E04\u0E23\u0E14\u0E34\u0E15\u0E1B\u0E31\u0E08\u0E08\u0E38\u0E1A\u0E31\u0E19", required: true, options: [
                                { label: "A (ยอดเยี่ยม)", value: "A" },
                                { label: "B (ดี)", value: "B" },
                                { label: "C (พอใช้)", value: "C" },
                                { label: "D (ต้องปรับปรุง)", value: "D" },
                            ], error: errors.creditRating?.message || undefined })) }), _jsx(TextareaField, { label: "\u0E2B\u0E21\u0E32\u0E22\u0E40\u0E2B\u0E15\u0E38\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21", placeholder: "\u0E01\u0E23\u0E2D\u0E01\u0E02\u0E49\u0E2D\u0E40\u0E2A\u0E19\u0E2D\u0E41\u0E19\u0E30\u0E2B\u0E23\u0E37\u0E2D\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2A\u0E33\u0E04\u0E31\u0E0D\u0E2D\u0E37\u0E48\u0E19 \u0E46", rows: 4, ...register("notes") })] }), _jsx(SubmitButton, { loading: isSubmitting, label: "\u0E2A\u0E48\u0E07\u0E41\u0E1A\u0E1A\u0E1F\u0E2D\u0E23\u0E4C\u0E21", loadingLabel: "\u0E01\u0E33\u0E25\u0E31\u0E07\u0E2A\u0E48\u0E07..." })] }));
};
export default CreditProfileForm;
