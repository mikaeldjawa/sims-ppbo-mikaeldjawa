import { formatRupiah } from "@/utils/formatCurrency"
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTrigger, } from "../ui/dialog"
import Logo from "@/assets/Logo.png"
import { Button } from "../ui/button"
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TransactionModalProps {
  transactionType: "TOPUP" | "PAYMENT";
  isSuccess: boolean;
  isLoading: boolean;
  onConfirm: () => void;
  serviceName?: string;
  amount?: number;
  isValid?: boolean
}

const TransactionModal = ({ isLoading, onConfirm, serviceName, amount, isSuccess, transactionType, isValid }: TransactionModalProps) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isSuccess) {
      setIsOpen(false)
    }
  }, [isSuccess])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen} >
      <DialogTrigger asChild>
        {transactionType === "TOPUP" ?
          <Button
            type="button"
            disabled={!isValid || isLoading}
            className={cn("w-full h-12 text-lg transition-all duration-300",
              isValid ? "bg-red-500 hover:bg-red-600 text-white shadow-lg"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            )}
          >
            Top Up
          </Button> : <Button
            type="button"
            className="w-full h-12 bg-red-500 hover:bg-red-600 text-white font-semibold text-lg shadow-sm"
          >
            Bayar
          </Button>
        }
      </DialogTrigger>
      <DialogContent showCloseButton={false} className="py-8 md:w-sm">
        <DialogHeader className="flex flex-col gap-4 items-center">
          <img className="w-20" src={Logo} alt="Logo SIMS PPOB" />
          <p className="text-lg font-semibold text-muted-foreground text-center">
            {transactionType === "TOPUP" ? "Top Up sebesar" : `Pembayaran ${serviceName} sebesar`}
          </p>
          <p className="text-center text-3xl font-bold">
            {formatRupiah(amount || 0)}?
          </p>
        </DialogHeader>
        <div className="mx-auto flex gap-6 flex-col">
          <button onClick={onConfirm} disabled={isLoading} type="submit" className={cn("text-lg font-semibold text-primary cursor-pointer hover:underline", isLoading && "cursor-not-allowed text-muted-foreground")}>
            Ya, lanjutkan {transactionType === "TOPUP" ? "Top Up" : "Bayar"}
          </button>
          <DialogClose className="text-lg font-semibold text-muted-foreground cursor-pointer hover:underline">
            Batalkan
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog >
  )
}

export default TransactionModal