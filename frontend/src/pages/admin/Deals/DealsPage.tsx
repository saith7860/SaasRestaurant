import { useState } from "react";
import DealsHeader from "../../../components/Admin/Deals/DealsHeader";
import DealsTable from "../../../components/Admin/Deals/DealsTable";
import DealForm from "../../../components/Admin/Deals/DealForm";

const DealsPage = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--background-color)] px-4 py-8 text-[var(--text-color)] sm:px-6 lg:px-8">

      <div className="mx-auto max-w-7xl">

        {!showForm ? (
          <>
            <DealsHeader onCreateDeal={() => setShowForm(true)} />

            <DealsTable />
          </>
        ) : (
          <DealForm
            onCancel={() => setShowForm(false)}
          />
        )}

      </div>

    </div>
  );
};

export default DealsPage;