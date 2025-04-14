import { Select } from "flowbite-react";
import { useState } from "react";

const PaymentStatus = () => {
  const [status, setStatus] = useState("Pending"); // Default status

  const getStatusColor = () => {
    switch (status) {
      case "Pending":
        return "text-yellow-500";
      case "Paid":
        return "text-green-500";
      case "Cancelled":
        return "text-red-500";
      case "Expired":
        return "text-gray-500";
      default:
        return "text-black";
    }
  };

  const handleChange = (event) => {
    setStatus(event.target.value); // Update the status when an option is selected
  };

  return (
    <div className="max-w-xs">
      <Select
        id="paymentStatus"
        required
        value={status}
        onChange={handleChange}
        className={`${getStatusColor()} font-medium`}
      >
        <option value="Pending">Pending</option>
        <option value="Paid">Paid</option>
        <option value="Cancelled">Cancelled</option>
        <option value="Expired">Expired</option>
      </Select>
    </div>
  );
};

export default PaymentStatus;
