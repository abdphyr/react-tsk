import { createRoot } from 'react-dom/client'
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import { ContextProvider } from './ContextProvider';
import { BrowserRouter as Router } from 'react-router-dom';
const client = new QueryClient()

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)
root.render(
    <QueryClientProvider client={client} >
        <Router>
            <ContextProvider >
                <App />
            </ContextProvider>
        </Router>
        <ReactQueryDevtools initialIsOpen={true} position='bottom-left' />
    </QueryClientProvider>
)
