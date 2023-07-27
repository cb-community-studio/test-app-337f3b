import React from "react";
import { render, screen } from "@testing-library/react";

import AsdfghgfdsEditDialogComponent from "../AsdfghgfdsEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders asdfghgfds edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <AsdfghgfdsEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("asdfghgfds-edit-dialog-component")).toBeInTheDocument();
});
