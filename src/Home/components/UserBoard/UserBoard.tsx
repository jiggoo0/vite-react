import { FC, useMemo, useState, useCallback } from "react";

export interface IUser {
  application_id: string;
  citizen_id: string;
  full_name: string;
  first_name: string;
  last_name: string;
  mobile: string;
  address: string;
  province: string;
  status: string;
  created_at: string;
}

const DEADLINE_DAYS = 65;

const getDeadline = (createdAt: string) => {
  const d = new Date(createdAt);
  d.setDate(d.getDate() + DEADLINE_DAYS);
  return d.toLocaleDateString("th-TH");
};

type DisplayKey = keyof IUser | "deadline";

const labelMap: Partial<
  Record<
    DisplayKey,
    { label: string; compute?: (val: unknown, row?: IUser) => string }
  >
> = {
  full_name: { label: "ชื่อ-นามสกุล" },
  citizen_id: { label: "เลขบัตร" },
  mobile: { label: "เบอร์มือถือ" },
  address: { label: "ที่อยู่" },
  province: { label: "จังหวัด" },
  status: { label: "สถานะ" },
  created_at: {
    label: "วันที่ยื่น",
    compute: (val) => new Date(val as string).toLocaleDateString("th-TH"),
  },
  deadline: {
    label: `ครบกำหนด (${DEADLINE_DAYS} วัน)`,
    compute: (_, row) => getDeadline(row!.created_at),
  },
};

interface UserBoardProps {
  data: IUser[];
  pageSize?: number;
}

const CORRECT_CODE = "9780";

const UserBoard: FC<UserBoardProps> = ({ data, pageSize = 10 }) => {
  const [page, setPage] = useState(1);
  const [codeInput, setCodeInput] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [ariaMessage, setAriaMessage] = useState("");

  const displayKeys = useMemo(() => Object.keys(labelMap) as DisplayKey[], []);
  const totalPages = useMemo(
    () => Math.ceil(data.length / pageSize),
    [data.length, pageSize]
  );
  const pageData = useMemo(
    () => data.slice((page - 1) * pageSize, page * pageSize),
    [data, page, pageSize]
  );

  const gotoPage = useCallback(
    (num: number) => {
      if (num < 1 || num > totalPages) return;
      setPage(num);
      const el = document.getElementById("user-table");
      el
        ? el.scrollIntoView({ behavior: "smooth", block: "start" })
        : window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [totalPages]
  );

  const handleCodeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (codeInput.trim() === CORRECT_CODE) {
      setIsAuthorized(true);
      setErrorMsg("");
      setCodeInput("");
      setAriaMessage("ยืนยันรหัสสำเร็จ");
    } else {
      setErrorMsg("รหัสไม่ถูกต้อง กรุณาลองใหม่");
      setAriaMessage("รหัสไม่ถูกต้อง กรุณาลองใหม่");
    }
  };

  const renderCodeForm = () => (
    <form
      onSubmit={handleCodeSubmit}
      className="w-full max-w-md bg-white p-6 rounded-lg shadow-md mb-6"
      aria-label="Form กรอกรหัสเพื่อดูข้อมูล"
    >
      <h2 className="text-2xl font-semibold mb-4 text-center">
        กรุณากรอกรหัสเพื่อดูข้อมูล
      </h2>
      <div className="flex gap-3">
        <input
          type="password"
          value={codeInput}
          onChange={(e) => setCodeInput(e.target.value)}
          placeholder="รหัส"
          className="flex-grow border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          autoFocus
          aria-label="รหัส"
          aria-describedby="code-error"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition-colors"
          aria-label="ยืนยันรหัส"
        >
          ยืนยัน
        </button>
      </div>
      <p
        id="code-error"
        className="mt-2 text-red-600 text-center font-medium"
        role="alert"
        aria-live="assertive"
      >
        {errorMsg}
      </p>
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {ariaMessage}
      </div>
    </form>
  );

  const renderTable = () => (
    <div
      id="user-table"
      className={`relative overflow-x-auto w-full max-w-full sm:max-w-6xl rounded-lg shadow-md bg-white transition-all duration-500 ${
        isAuthorized ? "blur-0" : "blur-md pointer-events-none select-none"
      }`}
      aria-live="polite"
      tabIndex={-1}
      style={{ minHeight: pageData.length > 0 ? undefined : "200px" }}
    >
      {!isAuthorized && (
        <div
          className="absolute inset-0 bg-white bg-opacity-60 flex justify-center items-center pointer-events-none rounded-lg"
          aria-hidden
        >
          <p className="text-gray-500 font-semibold text-lg select-none">
            กรุณากรอกรหัสเพื่อดูข้อมูล
          </p>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="min-w-[700px] w-full table-auto border border-gray-300 border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              {displayKeys.map((key) => {
                const style: React.CSSProperties =
                  key === "full_name"
                    ? { width: "20%" }
                    : key === "address"
                      ? { width: "25%" }
                      : key === "status" || key === "province"
                        ? { width: "10%" }
                        : {};
                return (
                  <th
                    key={key}
                    className="border border-gray-300 px-3 py-2 text-left whitespace-nowrap text-xs sm:text-sm"
                    style={style}
                  >
                    {labelMap[key]?.label}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {pageData.map((user) => (
              <tr
                key={user.application_id}
                className="odd:bg-white even:bg-gray-50 hover:bg-gray-200 transition-colors duration-150"
              >
                {displayKeys.map((key) => {
                  const compute = labelMap[key]?.compute;
                  const rawValue: unknown =
                    key === "deadline" ? undefined : user[key as keyof IUser];
                  const value = compute ? compute(rawValue, user) : rawValue;
                  return (
                    <td
                      key={key}
                      className="border border-gray-300 px-3 py-2 max-w-xs truncate text-xs sm:text-sm"
                      title={String(value)}
                    >
                      {String(value)}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <nav
          className="flex flex-wrap justify-center items-center gap-2 mt-6 mb-4 px-4"
          role="navigation"
          aria-label="Pagination"
        >
          <button
            onClick={() => gotoPage(page - 1)}
            disabled={page === 1}
            aria-disabled={page === 1}
            className={`px-3 sm:px-5 py-2 rounded border border-gray-400 font-semibold transition-colors min-w-[60px] sm:min-w-[80px] ${
              page === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"
            }`}
            aria-label="หน้าก่อนหน้า"
          >
            Prev
          </button>

          <div className="flex gap-1 overflow-x-auto max-w-[320px] sm:max-w-none">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
              <button
                key={num}
                onClick={() => gotoPage(num)}
                className={`px-3 sm:px-5 py-2 rounded border border-gray-400 font-semibold transition-colors min-w-[40px] sm:min-w-[55px] ${
                  num === page
                    ? "bg-blue-600 text-white border-blue-600"
                    : "hover:bg-gray-200"
                }`}
                aria-current={num === page ? "page" : undefined}
              >
                {num}
              </button>
            ))}
          </div>

          <button
            onClick={() => gotoPage(page + 1)}
            disabled={page === totalPages}
            aria-disabled={page === totalPages}
            className={`px-3 sm:px-5 py-2 rounded border border-gray-400 font-semibold transition-colors min-w-[60px] sm:min-w-[80px] ${
              page === totalPages
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-200"
            }`}
            aria-label="หน้าถัดไป"
          >
            Next
          </button>
        </nav>
      )}
    </div>
  );

  return (
    <main className="w-full flex flex-col items-center p-4 sm:pt-6 sm:pb-4 bg-gray-50">
      {isAuthorized ? null : renderCodeForm()}
      {renderTable()}
    </main>
  );
};

export default UserBoard;
