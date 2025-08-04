interface SubmitButtonProps {
  isSubmitting: boolean;
  isSubmitted?: boolean;
}

export default function SubmitButton({ isSubmitting, isSubmitted }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      className="btn btn-primary w-full disabled:opacity-50"
      disabled={isSubmitting}
    >
      {isSubmitting ? "กำลังส่ง..." : isSubmitted ? "ส่งสำเร็จ 🎉" : "ส่งแบบฟอร์ม"}
    </button>
  );
}
