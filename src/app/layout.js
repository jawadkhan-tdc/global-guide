"use client";

import { Provider } from "react-redux";
import store from "lib/redux/store";

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body style={{ backgroundColor: "#111211" }}>{children}</body>
      </html>
    </Provider>
  );
}
