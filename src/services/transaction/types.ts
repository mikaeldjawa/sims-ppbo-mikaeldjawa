export type TransactionType = "TOPUP" | "PAYMENT";

export type Transaction = {
  invoice_number: string;
  service_code: string;
  service_name: string;
  transaction_type: string;
  total_amount: number;
  created_on: string;
};

export type TransactionHistoryRecord = {
  invoice_number: string;
  transaction_type: TransactionType;
  description: string;
  total_amount: number;
  created_on: string;
};

export type ServiceTransactionDTO = {
  serviceCode: string;
};

export type TransactionHistory = {
  offset: number;
  limit: number;
  records: TransactionHistoryRecord[];
};
