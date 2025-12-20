import { useTransactionHistoryQuery } from "@/services/transaction/queries/useTransactionHistoryQuery";
import { useState } from "react";

export default function useTransactionHistory() {
  const [limit, setLimit] = useState(5);

  const { data: transactionHistory, isFetching } = useTransactionHistoryQuery({
    offset: 0,
    limit: limit,
  });

  const handleShowMore = () => {
    setLimit((prev) => prev + 5);
  };

  const records = transactionHistory?.data?.records || [];
  const isLastPage = records.length < limit;

  return {
    records,
    isFetching,
    isLastPage,
    handleShowMore,
  };
}
