import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { useBalanceQuery } from '@/services/balance/queries/useBalanceQuery';
import { formatRupiah } from '@/utils/formatCurrency';
import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react';

const BalanceCard = () => {
  const { data } = useBalanceQuery(null);
  const [showBalance, setShowBalance] = useState(true);

  return (
    <Card
      className="w-full max-w-2xl text-white rounded-3xl border-none bg-[url('/src/assets/background-saldo.png')] bg-cover bg-no-repeat bg-center shadow-md"
    >
      <CardHeader>
        <p className="text-base font-medium opacity-90">Saldo anda</p>
      </CardHeader>
      <CardContent>
        <h2 className="text-3xl font-bold tracking-tight">
          {!showBalance ? formatRupiah(data?.data?.balance ?? 0) : "Rp ••••••••"}
        </h2>
      </CardContent>

      <CardFooter >
        <button
          onClick={() => setShowBalance(!showBalance)}
          className="text-xs font-light hover:opacity-80 transition-opacity cursor-pointer">
          {!showBalance ?
            <span>Tutup Saldo<EyeOff className="w-4 h-4 ml-2 inline" /></span>
            : <span >Lihat Saldo<Eye className="w-4 h-4 ml-2 inline" /></span>}
        </button>
      </CardFooter>
    </Card >
  )
}

export default BalanceCard