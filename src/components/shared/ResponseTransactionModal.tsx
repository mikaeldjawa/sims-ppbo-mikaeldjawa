import { formatRupiah } from "@/utils/formatCurrency"
import { Dialog, DialogClose, DialogContent, DialogHeader, } from "../ui/dialog"
import { useEffect, useState } from "react";
import SuccessIcon from "@/assets/success-icon.png"
import FailedIcon from "@/assets/failed-icon.png"
import { Link } from "react-router";
import { ROUTES } from "@/utils/constants";

interface TransactionModalProps {
  isError: boolean;
  isSuccess: boolean;
  serviceName?: string;
  amount?: number;
}

const ResponseTransactionModal = ({ isSuccess, serviceName, amount, isError }: TransactionModalProps) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isSuccess || isError) {
      setIsOpen(true)
    }
  }, [isSuccess, isError])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen} >
      <DialogContent showCloseButton={false} className="py-8 md:w-sm">
        <DialogHeader className="flex flex-col gap-4 items-center">
          <img className="w-20" src={isSuccess ? SuccessIcon : FailedIcon} alt="Logo SIMS PPOB" />
          <p className="text-lg font-semibold text-muted-foreground text-center">Pembayaran {serviceName} sebesar</p>
          <p className="text-center text-3xl font-bold">
            {formatRupiah(amount || 0)}
          </p>
          <p className="text-lg font-semibold text-muted-foreground">{isSuccess ? "berhasil" : "gagal"}</p>
        </DialogHeader>
        <div className="mx-auto flex gap-6 flex-col">
          <DialogClose asChild>
            <Link to={ROUTES.HOME} className="text-lg font-semibold text-primary text-center cursor-pointer hover:underline">
              Kembali ke Beranda
            </Link>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog >
  )
}

export default ResponseTransactionModal