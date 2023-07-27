import React from "react";
import { render, screen } from "@testing-library/react";

import AsdfghgfdsCreateDialogComponent from "../AsdfghgfdsCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders asdfghgfds create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <AsdfghgfdsCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("asdfghgfds-create-dialog-component")).toBeInTheDocument();
});
