import { formatedCurrency } from "common/utils/formats";
import { useTransactions } from "hooks/useTransactions";

import styles from "./styles.module.scss";

export function FooterTableComponent() {
  const { transactions } = useTransactions();

  const data = transactions && Object.values(transactions);

  const summary = data.reduce(
    (acc, transaction) => {
      if (transaction.type === "Entrada") {
        acc.deposits += Number(transaction.value);
        acc.total += Number(transaction.value);
      } else {
        acc.withdraws += Number(transaction.value);
        acc.total -= Number(transaction.value);
      }

      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  return (
    <div className={styles.footerSummary}>
      <span className="success">
        Entrada: {formatedCurrency(summary.deposits)}
      </span>
      <span className="error">
        Saidas: {formatedCurrency(summary.withdraws)}
      </span>
      <span>Total: {formatedCurrency(summary.total)}</span>
    </div>
  );
}
