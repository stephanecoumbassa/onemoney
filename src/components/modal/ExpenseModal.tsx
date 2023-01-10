import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import React, { ChangeEvent } from "react";
import Repository from "../../DbRepository";

const dateForDateTimeInputValue = new Date().toISOString().split('T')[0]

export default function ExpenseModal({
  open,
  handleClose,
  onChange,
  category,
}: any) {
  const [qty, setQty] = React.useState(0);
  const [amount, setAmount] = React.useState(0);
  const [tva, setTva] = React.useState(0);
  const [datecreated, setDatecreated] = React.useState<string>("");
  const [description, setDescription] = React.useState<string>("");

  const addExpense = async () => {
    await Repository.expenseAdd({ amount, qty, tva, category, description, datecreated });
    handleClose();
    onChange(true);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Ajouter une dépense</DialogTitle>
      <DialogContent>
        {/* <TextField
          fullWidth
          margin="dense"
          name="name"
          label="Quantité"
          variant="filled"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setQty(parseInt(e?.target?.value))
          }
        /> */}
        
        <TextField
          fullWidth
          name="name"
          label="Montant"
          variant="filled"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setAmount(parseInt(e?.target?.value))
          }
        />
        <br />
        <br />
        <TextField
          fullWidth
          multiline
          maxRows={4}
          name="description"
          label="Description"
          variant="filled"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setDescription(e?.target?.value)
          }
        />
        <br />
        <br />
        
        <TextField
          id="datetime-local"
          label="Date"
          type="date"
          defaultValue={dateForDateTimeInputValue}
          sx={{ width: 250 }}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setDatecreated(e?.target?.value)
          }
        />
        <br />
        <br />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Annuler</Button>
        <Button onClick={addExpense}>Ajouter</Button>
      </DialogActions>
    </Dialog>
  );
}
