import { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../redux/store";
import "@/styles/globals.css";
import Layout from "../components/layout/layout";

function App({Component,pageProps}:AppProps) {
    
    return (
        <Provider store={store} >
            <Layout>
            <Component {...pageProps}/>
            </Layout>
        </Provider>
    );
}



export default App