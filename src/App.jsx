import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Pageroutes } from './Components/Helpers/Pageroutes';
function App() {
  const queryClient = new QueryClient();


  return (
    <>
      <AnimatePresence >
        <motion.div key={window.location.pathname}
          initial='initialState'
          animate='animateState'
          exit='exitState'
          transition={{
            duration: 0.75
          }}
          variants={{
            initialState: {
              opacity: 0,
              clipPath: "polygon(0 0,100%,0,100% 100% ,0% ,100%)"
            },
            animateState: {
              opacity: 1,
              clipPath: "polygon(0 0,100%,0,100% 100% ,0% ,100%)"
            },
            exitState: {
              clipPath: 'polygon(50% 0,50%,0,50% 50% ,50% ,100%)'

            }
          }}
        >
          <BrowserRouter>
            <QueryClientProvider client={queryClient}>

              <Pageroutes />
            </QueryClientProvider>
          </BrowserRouter>
        </motion.div>
      </AnimatePresence>

    </>
  )
}

export default App
