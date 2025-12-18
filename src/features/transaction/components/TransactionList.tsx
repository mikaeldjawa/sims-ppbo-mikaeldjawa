import { Card, CardContent } from '@/components/ui/card'

const TransactionList = () => {
  return (
    <>
      <h6 className='text-xl font-semibold'>Semua Transaksi</h6>
      <ul className="flex flex-col gap-6">
        {Array.from({ length: 5 }).map((_, index) => (
          <Card key={index}>
            <CardContent>
              <div className="flex justify-between">
                <div className="flex flex-col gap-2">
                  <p className="font-semibold text-xl">+ Rp 10.000</p>
                  <p className="flex gap-2 text-xs"><span>17 Agustus 2023</span><span>13:10 WIB</span></p>
                </div>
                <p className="text-sm">Top Up Saldo</p>
              </div>
            </CardContent>
          </Card>
        ))
        }
      </ul>
      <p className="text-primary font-semibold text-center mb-20">Show more</p>
    </>
  )
}

export default TransactionList