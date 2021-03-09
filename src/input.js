import React from 'react'
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import {useGlobalContext} from './context';
import { motion} from "framer-motion";

function Input() {
    const {data,handleData,handleSubmit } = useGlobalContext();
    return (
        <>
 <motion.form className='form-control' noValidate autoComplete="off" initial={{ y: "-300px", opacity: 0 }}
              animate={{ y: 0, opacity: 1,}}
              exit={{ x: "-300px", opacity: 0 }}>

<TextField
  id="outlined-secondary title"
  label="Description"
  variant="outlined"
  color="primary"
  name='title'
  type='text'
  value={data.title}
  onChange={handleData}
 
/>
<br/>
<TextField
  id="outlined-secondary amount"
  label="Amount"
  variant="outlined"
  color="primary"
  name='amount'
  type='number'
  value={data.amount}
  onChange={handleData}
  placeholder='e.g grocery:  -1000'
 
/>
<motion.div initial={{ y: "-300px", opacity: 0 }}
              animate={{ y: 0, opacity: 1,}}
              exit={{ y: "-300px", opacity: 0 }}
              transition={{ease:'easeInOut'}}>
              
<br/>
<motion.div whileHover={{
    scale: 1.2,
    transition: { duration: 1 },
  }}
  whileTap={{ scale: 0.9 }}>
<Button
className='save-btn'
  variant="contained"
  color="primary"
  size="large"
  onClick={handleSubmit}
  startIcon={<SaveIcon />}
  
  
>
  Save
</Button>
</motion.div>
    </motion.div>
</motion.form>
            
        </>
    )
}

export default Input
