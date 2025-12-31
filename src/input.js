import React from 'react'
import TextField from '@material-ui/core/TextField';
import { Button, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';
import {useGlobalContext} from './context';
import { motion} from "framer-motion";

function Input() {
    const {data,handleData,handleSubmit, editingId, cancelEdit } = useGlobalContext();
    return (
      <motion.form
        className='transaction-form'
        noValidate
        autoComplete="off"
        initial={{ y: "-300px", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ x: "-300px", opacity: 0 }}
        onSubmit={handleSubmit}
      >
        <TextField
          id="outlined-secondary title"
          label="Description"
          variant="outlined"
          color="primary"
          name='title'
          type='text'
          value={data.title}
          onChange={handleData}
          placeholder='eg. Coffee with friends'
          fullWidth
        />
        <TextField
          id="outlined-secondary amount"
          label="Amount"
          variant="outlined"
          color="primary"
          name='amount'
          type='number'
          value={data.amount}
          onChange={handleData}
          placeholder='Enter the amount'
          fullWidth
        />
        <FormControl variant="outlined" fullWidth>
          <InputLabel id="type-label">Type</InputLabel>
          <Select
            labelId="type-label"
            id="type"
            name="type"
            value={data.type}
            onChange={handleData}
            label="Type"
          >
            <MenuItem value="income">Income</MenuItem>
            <MenuItem value="expense">Expense</MenuItem>
          </Select>
        </FormControl>
        <motion.div
          initial={{ y: "-300px", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-300px", opacity: 0 }}
          transition={{ ease: 'easeInOut' }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            className='save-btn'
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            startIcon={editingId ? <EditIcon /> : <SaveIcon />}
          >
            {editingId ? 'Update transaction' : 'Save transaction'}
          </Button>
        </motion.div>

        {editingId && (
          <Button
            variant="text"
            color="secondary"
            size="small"
            onClick={cancelEdit}
            className="cancel-btn"
          >
            Cancel edit
          </Button>
        )}
      </motion.form>
    )
}

export default Input
