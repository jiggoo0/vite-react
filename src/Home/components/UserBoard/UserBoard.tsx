import { FC, useMemo, useState } from "react";

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

const getDeadline = (createdAt: string): string => {
  const d = new Date(createdAt);
  d.setDate(d.getDate() + DEADLINE_DAYS);
  return d.toLocaleDateString("th-TH");
};

interface UserBoardProps {
  data: IUser[];
  pageSize?: number;
}

const UserBoard: FC<UserBoardProps> = ({ data, pageSize = 10 }) => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(data.length / pageSize);
  const startIndex = (page - 1) * pageSize;
  const pageData = data.slice(startIndex, startIndex + pageSize);

  const gotoPage = (num: number) => {
    if (num < 1 || num > totalPages) return;
    setPage(num);
  };

  const labelMap: Record<
    string,
    { label: string; compute?: (val: any, row?: IUser) => string }
  > = {
    full_name: { label: "ชื่อ-นามสกุล" },
    citizen_id: { label: "เลขบัตร" },
    mobile: { label: "เบอร์มือถือ" },
    address: { label: "ที่อยู่" },
    province: { label: "จังหวัด" },
    status: { label: "สถานะ" },
    created_at: {
      label: "วันที่ยื่น",
      compute: (val) => new Date(val).toLocaleDateString("th-TH"),
    },
    deadline: {
      label: `ครบกำหนด (${DEADLINE_DAYS} วัน)`,
      compute: (_, row) => getDeadline(row!.created_at),
    },
  };

  const displayKeys = useMemo(() => Object.keys(labelMap), []);

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border border-gray-300 border-collapse text-sm">
        <thead>
          <tr className="bg-gray-100">
            {displayKeys.map((key) => (
              <th
                key={key}
                className="border border-gray-300 px-3 py-2 text-left whitespace-nowrap"
              >
                {labelMap[key].label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {pageData.map((user) => (
            <tr
              key={user.application_id}
              className="odd:bg-white even:bg-gray-50 hover:bg-gray-200 transition-colors duration-150"
            >
              {displayKeys.map((key) => {
                const value =
                  key === "deadline"
                    ? labelMap[key].compute?.("", user)
                    : labelMap[key].compute
                      ? labelMap[key].compute(user[key as keyof IUser])
                      : (user[key as keyof IUser] as string);
                return (
                  <td key={key} className="border border-gray-300 px-3 py-2">
                    {value}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-center items-center gap-3 mt-4">
        <button
          onClick={() => gotoPage(page - 1)}
          disabled={page === 1}
          className={`px-3 py-1 rounded border border-gray-400 ${
            page === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"
          }`}
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
          <button
            key={`page_${num}`}
            onClick={() => gotoPage(num)}
            className={`px-3 py-1 rounded border border-gray-400 ${
              num === page ? "bg-blue-600 text-white" : "hover:bg-gray-200"
            }`}
          >
            {num}
          </button>
        ))}

        <button
          onClick={() => gotoPage(page + 1)}
          disabled={page === totalPages}
          className={`px-3 py-1 rounded border border-gray-400 ${
            page === totalPages
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-200"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UserBoard;
