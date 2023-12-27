import React, { useState } from "react";
import { Button, Card, ProgressBar, Stack } from "react-bootstrap";
import { currencyFormatter } from "../../utils";
export const BudgetCard = ({ name, amount, max, gray }) => {
    const className = []
    if (amount > max) {
        className.push("bg-danger", "bg-opacity-10")
    }
    else if (gray) {
        className.push("bg-light")
    }
    // const [showAddBudgetModal, setShowAddBudgetModal] = useState();
    const getVarientColor = (amount, max) => {
        const ratio = amount / max
        console.log(ratio);
        if (ratio < 0.5) return "primary"
        if (ratio < 0.75) return "warning"
        return "danger"
    }
    return (
        <Card className={className.join(" ")}>
            <Card.Body>
                <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
                    <div className="me-2">
                        {name}
                    </div>
                    <div className="d-flex align-items-baseline">
                        {currencyFormatter.format(amount)}
                        <span className="text-muted fs-6 ms-1">
                            / {currencyFormatter.format(max)}
                        </span>
                    </div>
                </Card.Title>
                <ProgressBar
                    className="rounded-pill"
                    now={60}
                    min={0}
                    max={max}
                    variant={getVarientColor(amount, max)}
                />
                <Stack direction="horizontal" gap="2" className="mt-4">
                    <Button variant="outline-primary">Add Expenses </Button>
                    <Button variant="outline-secondary">View Expenses </Button>
                </Stack>
            </Card.Body>
        </Card >
    );
};

