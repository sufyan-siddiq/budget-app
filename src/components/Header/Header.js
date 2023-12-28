import React, { useState } from "react";
import { Button, Stack } from "react-bootstrap";

export const Header = () => {
    const [showAddBudgetModal, setShowAddBudgetModal] = useState()
    const openAddExpenseModal = () => {
    }
    return (<></>
        // <Stack direction="horizontal" gap="2" className="mb-4">
        //     <h1 className="me-auto">Budgets</h1>
        //     <Button variant="primary" onClick={() => setShowAddBudgetModal(true)}>
        //         Add Budget
        //     </Button>
        //     <Button variant="outline-primary" onClick={openAddExpenseModal}>
        //         Add Expense
        //     </Button>
        // </Stack>
    )
};
