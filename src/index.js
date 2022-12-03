import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "remixicon/fonts/remixicon.css";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import App from "./App";
import store from "./redux/store";
import 'react-toastify/dist/ReactToastify.css';
import ScrollReveal from "scrollreveal";




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<ToastContainer
					theme="dark"
					position="top-right"
					autoClose={3000}
					closeOnClick
					pauseOnHover={false}
				/>
				<App />
			</Provider>

		</BrowserRouter>
	</React.StrictMode>
);

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  //reset:true /* Animation repeat*/
});

sr.reveal(
  `.hero__img`
);
