export const generateUPILink = (amount: number): string => {
    const payeeVPA = "yourbusiness@upi";
    const payeeName = "S.S. Gupta Flour Mill";
    const currency = "INR";
    const note = "Payment for Flour Products";
    return `upi://pay?pa=${payeeVPA}&pn=${encodeURIComponent(
      payeeName
    )}&tn=${encodeURIComponent(note)}&am=${amount}&cu=${currency}`;
  };
  