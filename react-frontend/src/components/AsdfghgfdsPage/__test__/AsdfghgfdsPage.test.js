import React from "react";
import { render, screen } from "@testing-library/react";

import AsdfghgfdsPage from "../AsdfghgfdsPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders asdfghgfds page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <AsdfghgfdsPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("asdfghgfds-datatable")).toBeInTheDocument();
    expect(screen.getByRole("asdfghgfds-add-button")).toBeInTheDocument();
});
