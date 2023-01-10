import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import React, { ChangeEvent } from "react";
import Repository from "../../DbRepository";

const dateForDateTimeInputValue = date => new Date(date.getTime() + new Date().getTimezoneOffset() * -60 * 1000).toISOString().slice(0, 19)
console.log(dateForDateTimeInputValue)

export default function IncomeModal({
  open,
  handleClose,
  onChange,
  category,
}: any) {
  const [qty, setQty] = React.useState(0);
  const [amount, setAmount] = React.useState(0);
  const [tva, setTva] = React.useState(0);
  const [description, setDescription] = React.useState("");

  const addIncome = async () => {
    await Repository.incomeAdd({ amount, qty, tva, category, description });
    handleClose();
    onChange(true);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Ajouter un revenu</DialogTitle>
      <DialogContent>
        {/* <TextField
          fullWidth
          margin="dense"
          name="name"
          label="Quantité"
          variant="filled"
          onChange={e => setQty(parseInt(e.target.value))}
        /> */}
        <TextField
          fullWidth
          name="name"
          label="Montant"
          variant="filled"
          onChange={e => setAmount(parseInt(e.target.value))}
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
          type="datetime-local"
          defaultValue={dateForDateTimeInputValue}
          sx={{ width: 250 }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <br />
        <br />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Annuler</Button>
        <Button onClick={addIncome}>Ajouter</Button>
      </DialogActions>
    </Dialog>
  );
}
