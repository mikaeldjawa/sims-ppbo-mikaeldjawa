import { Card, CardContent } from '@/components/ui/card'
import { formatRupiah } from '@/utils/formatCurrency';
import { formatDate } from '@/utils/formatDate';
import { cn } from '@/lib/utils';
import useTransactionHistory from '../hooks/useTransactionHistory';

const TransactionList = () => {
  const { records, isFetching, isLastPage, handleShowMore } = useTransactionHistory();

  console.log(records);

  return (
    <div className="space-y-6">
      <h6 className='text-xl font-semibold'>Semua Transaksi</h6>

      {
        records.length === 0 && (
          <p className="text-center text-gray-400">Tidak Ada Transaksi</p>
        )
      }

      <ul className="flex flex-col gap-6">
        {records.map((transaction, index) => {
          const isTopUp = transaction?.transaction_type === "TOPUP";

          return (
            <Card key={index} className="border-gray-200">
              <CardContent>
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-2">
                    <p className={cn(
                      "font-bold text-2xl transition-colors",
                      isTopUp ? "text-emerald-500" : "text-orange-500"
                    )}>
                      {isTopUp ? "+ " : "- "}
                      {formatRupiah(transaction?.total_amount ?? 0)}
                    </p>
                    <p className="text-xs text-gray-400 font-medium">
                      {formatDate(transaction?.created_on ?? "")}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-700">
                    {transaction?.description ?? "Service Tidak Diketahui"}
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </ul>

      {!isLastPage && (
        <button
          onClick={handleShowMore}
          disabled={isFetching}
          className={cn(
            "w-full text-red-500 font-bold text-center mb-20 hover:underline transition-all disabled:text-gray-400 cursor-pointer",
            isFetching && "cursor-not-allowed"
          )}
        >
          {isFetching ? "Memuat..." : "Show More"}
        </button>
      )}

      {isLastPage && records.length > 0 && (
        <p className="text-center text-gray-400 text-sm mb-20">Semua transaksi telah ditampilkan</p>
      )}

    </div>
  )
}

export default TransactionList