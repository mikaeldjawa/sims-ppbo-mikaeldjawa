import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Eye } from 'lucide-react'

const BalanceCard = () => {
  return (
    < Card style={{
      background: "url('./src/assets/background-saldo.png')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center"
    }
    }
      className='w-full max-w-2xl gap-2 text-white rounded-2xl' >
      <CardHeader className='mb-0 h-fit'>
        <p className='m-0'>Saldo anda </p>
      </CardHeader>
      <CardContent>
        <p className='text-3xl font-semibold'>Rp 10.000.000</p>
      </CardContent>
      <CardFooter className='mt-2 flex gap-2'>
        <p className='text-sm'>Tutup Saldo</p>
        <Eye className='w-4 h-4' />
      </CardFooter>
    </Card >
  )
}

export default BalanceCard